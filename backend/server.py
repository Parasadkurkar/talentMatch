from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Define Models for Talent Matching
class TalentProfile(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    location: str
    category: str  # travel, fashion, portrait, etc.
    budget_min: int
    budget_max: int
    experience_years: int
    style_tags: List[str]  # pastel, candid, vintage, etc.
    portfolio_url: Optional[str] = None
    rating: float = 4.0
    bio: Optional[str] = None

class ProjectBrief(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    category: str
    location: str
    budget: int
    duration_days: int
    style_preferences: List[str]
    description: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

class MatchResult(BaseModel):
    talent: TalentProfile
    score: float
    explanation: str

class MatchResponse(BaseModel):
    matches: List[MatchResult]
    total_candidates: int

# Mock talent data - in production this would come from database
MOCK_TALENTS = [
    {
        "id": "1",
        "name": "Arjun Sharma",
        "location": "Goa",
        "category": "travel",
        "budget_min": 50000,
        "budget_max": 100000,
        "experience_years": 5,
        "style_tags": ["candid", "natural", "adventure"],
        "portfolio_url": "https://example.com/arjun",
        "rating": 4.8,
        "bio": "Adventure travel photographer specializing in candid moments"
    },
    {
        "id": "2",
        "name": "Priya Mehta",
        "location": "Mumbai",
        "category": "fashion",
        "budget_min": 75000,
        "budget_max": 150000,
        "experience_years": 7,
        "style_tags": ["vintage", "editorial", "bold"],
        "portfolio_url": "https://example.com/priya",
        "rating": 4.9,
        "bio": "Fashion photographer with editorial magazine experience"
    },
    {
        "id": "3",
        "name": "Karthik Nair",
        "location": "Bangalore",
        "category": "portrait",
        "budget_min": 30000,
        "budget_max": 80000,
        "experience_years": 4,
        "style_tags": ["pastel", "soft", "intimate"],
        "portfolio_url": "https://example.com/karthik",
        "rating": 4.6,
        "bio": "Portrait specialist with soft, intimate photography style"
    },
    {
        "id": "4",
        "name": "Sneha Gupta",
        "location": "Goa",
        "category": "travel",
        "budget_min": 60000,
        "budget_max": 120000,
        "experience_years": 6,
        "style_tags": ["candid", "vibrant", "lifestyle"],
        "portfolio_url": "https://example.com/sneha",
        "rating": 4.7,
        "bio": "Travel and lifestyle photographer based in Goa"
    },
    {
        "id": "5",
        "name": "Rahul Verma",
        "location": "Delhi",
        "category": "fashion",
        "budget_min": 40000,
        "budget_max": 90000,
        "experience_years": 3,
        "style_tags": ["modern", "clean", "minimalist"],
        "portfolio_url": "https://example.com/rahul",
        "rating": 4.5,
        "bio": "Modern fashion photographer with minimalist aesthetic"
    },
    {
        "id": "6",
        "name": "Anita Singh",
        "location": "Mumbai",
        "category": "portrait",
        "budget_min": 45000,
        "budget_max": 85000,
        "experience_years": 8,
        "style_tags": ["classic", "elegant", "timeless"],
        "portfolio_url": "https://example.com/anita",
        "rating": 4.9,
        "bio": "Classic portrait photographer with 8 years of experience"
    }
]

def calculate_match_score(talent_data: dict, brief: ProjectBrief) -> tuple[float, str]:
    """Calculate match score and explanation for a talent"""
    score = 0.0
    explanations = []
    
    # Category match (highest weight)
    if talent_data["category"] == brief.category:
        score += 30
        explanations.append(f"Perfect category match ({brief.category}) (+30)")
    else:
        explanations.append(f"Category mismatch ({talent_data['category']} vs {brief.category}) (+0)")
    
    # Location match
    if talent_data["location"].lower() == brief.location.lower():
        score += 20
        explanations.append(f"Location match ({brief.location}) (+20)")
    else:
        explanations.append(f"Different location ({talent_data['location']}) (+0)")
    
    # Budget compatibility
    if talent_data["budget_min"] <= brief.budget <= talent_data["budget_max"]:
        score += 25
        explanations.append(f"Budget perfect fit (₹{brief.budget:,}) (+25)")
    elif brief.budget >= talent_data["budget_max"]:
        score += 15
        explanations.append(f"Budget above range (₹{brief.budget:,} > ₹{talent_data['budget_max']:,}) (+15)")
    elif brief.budget >= talent_data["budget_min"]:
        score += 10
        explanations.append(f"Budget in lower range (+10)")
    else:
        explanations.append(f"Budget below minimum (₹{brief.budget:,} < ₹{talent_data['budget_min']:,}) (+0)")
    
    # Style preferences match
    style_matches = len(set(talent_data["style_tags"]) & set(brief.style_preferences))
    style_score = style_matches * 5
    score += style_score
    if style_matches > 0:
        matching_styles = list(set(talent_data["style_tags"]) & set(brief.style_preferences))
        explanations.append(f"Style matches: {', '.join(matching_styles)} (+{style_score})")
    else:
        explanations.append("No style preference matches (+0)")
    
    # Experience bonus
    if talent_data["experience_years"] >= 5:
        score += 10
        explanations.append(f"Experienced ({talent_data['experience_years']} years) (+10)")
    elif talent_data["experience_years"] >= 3:
        score += 5
        explanations.append(f"Moderate experience ({talent_data['experience_years']} years) (+5)")
    
    # Rating bonus
    if talent_data["rating"] >= 4.8:
        score += 5
        explanations.append(f"Top-rated ({talent_data['rating']}) (+5)")
    elif talent_data["rating"] >= 4.5:
        score += 3
        explanations.append(f"Highly rated ({talent_data['rating']}) (+3)")
    
    explanation = " • ".join(explanations)
    return score, explanation

@api_router.post("/match", response_model=MatchResponse)
async def find_matches(brief: ProjectBrief):
    """Find and rank matching talents for a project brief"""
    try:
        # Calculate scores for all talents
        talent_scores = []
        for talent_data in MOCK_TALENTS:
            score, explanation = calculate_match_score(talent_data, brief)
            talent_scores.append({
                "talent": TalentProfile(**talent_data),
                "score": score,
                "explanation": explanation
            })
        
        # Sort by score and get top 3
        talent_scores.sort(key=lambda x: x["score"], reverse=True)
        top_matches = talent_scores[:3]
        
        # Convert to MatchResult objects
        matches = [
            MatchResult(
                talent=match["talent"],
                score=match["score"],
                explanation=match["explanation"]
            )
            for match in top_matches
        ]
        
        # Store the brief in database for future reference
        await db.project_briefs.insert_one(brief.dict())
        
        return MatchResponse(
            matches=matches,
            total_candidates=len(MOCK_TALENTS)
        )
        
    except Exception as e:
        logger.error(f"Error in matching: {str(e)}")
        raise HTTPException(status_code=500, detail="Error processing match request")

@api_router.get("/talents", response_model=List[TalentProfile])
async def get_all_talents():
    """Get all available talents"""
    return [TalentProfile(**talent) for talent in MOCK_TALENTS]

@api_router.get("/")
async def root():
    return {"message": "Talent Matchmaking Engine API"}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()