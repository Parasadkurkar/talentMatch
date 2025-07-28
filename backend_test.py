#!/usr/bin/env python3
"""
Backend API Tests for Talent Matchmaking Engine
Tests the core matching algorithm, talents API, and data models
"""

import requests
import json
from datetime import datetime
from typing import Dict, List, Any

# Load backend URL from frontend .env
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading backend URL: {e}")
        return None

BASE_URL = get_backend_url()
if not BASE_URL:
    print("ERROR: Could not get backend URL from frontend/.env")
    exit(1)

API_URL = f"{BASE_URL}/api"
print(f"Testing API at: {API_URL}")

class TalentMatchingTester:
    def __init__(self):
        self.passed_tests = 0
        self.failed_tests = 0
        self.test_results = []

    def log_test(self, test_name: str, passed: bool, details: str = ""):
        """Log test result"""
        status = "✅ PASS" if passed else "❌ FAIL"
        print(f"{status}: {test_name}")
        if details:
            print(f"   Details: {details}")
        
        self.test_results.append({
            "test": test_name,
            "passed": passed,
            "details": details
        })
        
        if passed:
            self.passed_tests += 1
        else:
            self.failed_tests += 1

    def test_api_health(self):
        """Test basic API connectivity"""
        try:
            response = requests.get(f"{API_URL}/", timeout=10)
            if response.status_code == 200:
                data = response.json()
                if "message" in data:
                    self.log_test("API Health Check", True, f"API responding: {data['message']}")
                    return True
                else:
                    self.log_test("API Health Check", False, "No message in response")
                    return False
            else:
                self.log_test("API Health Check", False, f"Status code: {response.status_code}")
                return False
        except Exception as e:
            self.log_test("API Health Check", False, f"Connection error: {str(e)}")
            return False

    def test_get_talents(self):
        """Test /api/talents endpoint"""
        try:
            response = requests.get(f"{API_URL}/talents", timeout=10)
            if response.status_code == 200:
                talents = response.json()
                
                # Validate response structure
                if not isinstance(talents, list):
                    self.log_test("Get Talents - Structure", False, "Response is not a list")
                    return False
                
                if len(talents) == 0:
                    self.log_test("Get Talents - Data", False, "No talents returned")
                    return False
                
                # Validate talent structure
                required_fields = ['id', 'name', 'location', 'category', 'budget_min', 'budget_max', 
                                 'experience_years', 'style_tags', 'rating']
                
                for i, talent in enumerate(talents):
                    for field in required_fields:
                        if field not in talent:
                            self.log_test("Get Talents - Validation", False, 
                                        f"Talent {i} missing field: {field}")
                            return False
                
                self.log_test("Get Talents - Success", True, f"Retrieved {len(talents)} talents")
                
                # Log talent categories for reference
                categories = set(t['category'] for t in talents)
                locations = set(t['location'] for t in talents)
                print(f"   Available categories: {', '.join(categories)}")
                print(f"   Available locations: {', '.join(locations)}")
                
                return talents
            else:
                self.log_test("Get Talents", False, f"Status code: {response.status_code}")
                return False
                
        except Exception as e:
            self.log_test("Get Talents", False, f"Error: {str(e)}")
            return False

    def test_matching_algorithm(self, brief_data: Dict, expected_category: str, test_name: str):
        """Test the matching algorithm with specific project brief"""
        try:
            response = requests.post(f"{API_URL}/match", 
                                   json=brief_data, 
                                   headers={'Content-Type': 'application/json'},
                                   timeout=15)
            
            if response.status_code != 200:
                self.log_test(f"Match API - {test_name}", False, 
                            f"Status code: {response.status_code}, Response: {response.text}")
                return False
            
            data = response.json()
            
            # Validate response structure
            required_fields = ['matches', 'total_candidates']
            for field in required_fields:
                if field not in data:
                    self.log_test(f"Match Response Structure - {test_name}", False, 
                                f"Missing field: {field}")
                    return False
            
            matches = data['matches']
            total_candidates = data['total_candidates']
            
            # Validate matches structure
            if not isinstance(matches, list):
                self.log_test(f"Match Response - {test_name}", False, "Matches is not a list")
                return False
            
            if len(matches) == 0:
                self.log_test(f"Match Response - {test_name}", False, "No matches returned")
                return False
            
            if len(matches) > 3:
                self.log_test(f"Match Response - {test_name}", False, f"Too many matches: {len(matches)}")
                return False
            
            # Validate each match
            for i, match in enumerate(matches):
                required_match_fields = ['talent', 'score', 'explanation']
                for field in required_match_fields:
                    if field not in match:
                        self.log_test(f"Match Structure - {test_name}", False, 
                                    f"Match {i} missing field: {field}")
                        return False
                
                # Validate talent structure within match
                talent = match['talent']
                required_talent_fields = ['id', 'name', 'location', 'category']
                for field in required_talent_fields:
                    if field not in talent:
                        self.log_test(f"Match Talent Structure - {test_name}", False, 
                                    f"Talent in match {i} missing field: {field}")
                        return False
            
            # Validate scoring logic
            scores = [match['score'] for match in matches]
            if scores != sorted(scores, reverse=True):
                self.log_test(f"Match Scoring Order - {test_name}", False, 
                            f"Matches not sorted by score: {scores}")
                return False
            
            self.log_test(f"Match API - {test_name}", True, 
                        f"Returned {len(matches)} matches, top score: {scores[0]}")
            
            # Log detailed results for analysis
            print(f"   📊 Detailed Results for {test_name}:")
            for i, match in enumerate(matches):
                talent = match['talent']
                print(f"   {i+1}. {talent['name']} ({talent['category']}) - Score: {match['score']}")
                print(f"      Location: {talent['location']}, Budget: ₹{talent['budget_min']:,}-₹{talent['budget_max']:,}")
                print(f"      Explanation: {match['explanation']}")
            
            return data
            
        except Exception as e:
            self.log_test(f"Match API - {test_name}", False, f"Error: {str(e)}")
            return False

    def test_scoring_logic_validation(self):
        """Test specific scoring logic components"""
        
        # Test 1: Perfect category match should get +30
        perfect_match_brief = {
            "category": "travel",
            "location": "Goa", 
            "budget": 75000,
            "duration_days": 3,
            "style_preferences": ["candid", "natural"],
            "description": "Travel photography project in Goa with candid style"
        }
        
        result = self.test_matching_algorithm(perfect_match_brief, "travel", "Perfect Category & Location Match")
        if result:
            # Check if top match has travel category and Goa location
            top_match = result['matches'][0]
            if (top_match['talent']['category'] == 'travel' and 
                top_match['talent']['location'] == 'Goa'):
                self.log_test("Scoring Logic - Category+Location Bonus", True, 
                            f"Top match correctly prioritized travel+Goa talent")
            else:
                self.log_test("Scoring Logic - Category+Location Bonus", False, 
                            f"Expected travel+Goa talent on top, got {top_match['talent']['category']}+{top_match['talent']['location']}")

    def test_edge_cases(self):
        """Test edge cases and error handling"""
        
        # Test 1: Unknown category
        unknown_category_brief = {
            "category": "unknown_category",
            "location": "Mumbai",
            "budget": 50000,
            "duration_days": 2,
            "style_preferences": ["modern"],
            "description": "Test with unknown category"
        }
        
        result = self.test_matching_algorithm(unknown_category_brief, "unknown", "Unknown Category")
        if result:
            # Should still return matches but with lower scores
            top_score = result['matches'][0]['score']
            if top_score < 30:  # No category match bonus
                self.log_test("Edge Case - Unknown Category Handling", True, 
                            f"Correctly handled unknown category, top score: {top_score}")
            else:
                self.log_test("Edge Case - Unknown Category Handling", False, 
                            f"Unexpected high score for unknown category: {top_score}")
        
        # Test 2: Extreme budget (very high)
        high_budget_brief = {
            "category": "fashion",
            "location": "Mumbai",
            "budget": 500000,  # Very high budget
            "duration_days": 5,
            "style_preferences": ["editorial"],
            "description": "High budget fashion shoot"
        }
        
        self.test_matching_algorithm(high_budget_brief, "fashion", "Extreme High Budget")
        
        # Test 3: Extreme budget (very low)
        low_budget_brief = {
            "category": "portrait",
            "location": "Delhi",
            "budget": 10000,  # Very low budget
            "duration_days": 1,
            "style_preferences": ["simple"],
            "description": "Low budget portrait session"
        }
        
        self.test_matching_algorithm(low_budget_brief, "portrait", "Extreme Low Budget")

    def test_style_matching(self):
        """Test style preference matching logic"""
        
        # Test with multiple matching styles
        style_match_brief = {
            "category": "portrait",
            "location": "Bangalore",
            "budget": 60000,
            "duration_days": 2,
            "style_preferences": ["pastel", "soft", "intimate"],  # Should match Karthik Nair perfectly
            "description": "Portrait session with pastel and soft style"
        }
        
        result = self.test_matching_algorithm(style_match_brief, "portrait", "Multiple Style Matches")
        if result:
            # Check if explanation mentions style matches
            top_explanation = result['matches'][0]['explanation']
            if "Style matches:" in top_explanation:
                self.log_test("Style Matching Logic", True, "Style matches correctly identified in explanation")
            else:
                self.log_test("Style Matching Logic", False, "Style matches not found in explanation")

    def test_invalid_requests(self):
        """Test API validation with invalid requests"""
        
        # Test 1: Missing required fields
        try:
            response = requests.post(f"{API_URL}/match", 
                                   json={"category": "travel"},  # Missing other required fields
                                   headers={'Content-Type': 'application/json'},
                                   timeout=10)
            
            if response.status_code == 422:  # Validation error
                self.log_test("API Validation - Missing Fields", True, "Correctly rejected incomplete request")
            else:
                self.log_test("API Validation - Missing Fields", False, 
                            f"Expected 422, got {response.status_code}")
        except Exception as e:
            self.log_test("API Validation - Missing Fields", False, f"Error: {str(e)}")
        
        # Test 2: Invalid data types
        try:
            response = requests.post(f"{API_URL}/match", 
                                   json={
                                       "category": "travel",
                                       "location": "Goa",
                                       "budget": "invalid_budget",  # Should be int
                                       "duration_days": 3,
                                       "style_preferences": ["candid"],
                                       "description": "Test"
                                   },
                                   headers={'Content-Type': 'application/json'},
                                   timeout=10)
            
            if response.status_code == 422:  # Validation error
                self.log_test("API Validation - Invalid Types", True, "Correctly rejected invalid data types")
            else:
                self.log_test("API Validation - Invalid Types", False, 
                            f"Expected 422, got {response.status_code}")
        except Exception as e:
            self.log_test("API Validation - Invalid Types", False, f"Error: {str(e)}")

    def run_comprehensive_tests(self):
        """Run all tests"""
        print("🚀 Starting Talent Matchmaking Engine Backend Tests")
        print("=" * 60)
        
        # Basic connectivity
        if not self.test_api_health():
            print("❌ API not accessible, stopping tests")
            return
        
        # Test talents endpoint
        talents = self.test_get_talents()
        if not talents:
            print("❌ Cannot retrieve talents, stopping matching tests")
            return
        
        print("\n📋 Testing Core Matching Algorithm...")
        print("-" * 40)
        
        # Test specific scenarios from review request
        test_scenarios = [
            {
                "brief": {
                    "category": "travel",
                    "location": "Goa",
                    "budget": 75000,
                    "duration_days": 3,
                    "style_preferences": ["candid", "natural"],
                    "description": "Travel photography project in Goa with ₹75K budget"
                },
                "name": "Travel Photography Goa ₹75K"
            },
            {
                "brief": {
                    "category": "fashion",
                    "location": "Mumbai", 
                    "budget": 90000,
                    "duration_days": 2,
                    "style_preferences": ["editorial", "bold"],
                    "description": "Fashion photography in Mumbai with ₹90K budget"
                },
                "name": "Fashion Photography Mumbai ₹90K"
            },
            {
                "brief": {
                    "category": "portrait",
                    "location": "Bangalore",
                    "budget": 65000,
                    "duration_days": 1,
                    "style_preferences": ["pastel", "soft"],
                    "description": "Portrait photography with pastel style preferences"
                },
                "name": "Portrait Photography Pastel Style"
            }
        ]
        
        for scenario in test_scenarios:
            self.test_matching_algorithm(scenario["brief"], scenario["brief"]["category"], scenario["name"])
        
        print("\n🔍 Testing Scoring Logic...")
        print("-" * 40)
        self.test_scoring_logic_validation()
        
        print("\n🎨 Testing Style Matching...")
        print("-" * 40)
        self.test_style_matching()
        
        print("\n⚠️  Testing Edge Cases...")
        print("-" * 40)
        self.test_edge_cases()
        
        print("\n🛡️  Testing API Validation...")
        print("-" * 40)
        self.test_invalid_requests()
        
        # Final summary
        print("\n" + "=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        print(f"✅ Passed: {self.passed_tests}")
        print(f"❌ Failed: {self.failed_tests}")
        print(f"📈 Success Rate: {(self.passed_tests/(self.passed_tests + self.failed_tests)*100):.1f}%")
        
        if self.failed_tests > 0:
            print("\n❌ FAILED TESTS:")
            for result in self.test_results:
                if not result['passed']:
                    print(f"   • {result['test']}: {result['details']}")
        
        return self.failed_tests == 0

if __name__ == "__main__":
    tester = TalentMatchingTester()
    success = tester.run_comprehensive_tests()
    
    if success:
        print("\n🎉 All tests passed! Backend API is working correctly.")
        exit(0)
    else:
        print(f"\n💥 {tester.failed_tests} test(s) failed. Please check the issues above.")
        exit(1)