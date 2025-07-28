import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Landing Page Component
const LandingPage = ({ onStartMatching }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-gradient-to-br from-blue-50 to-indigo-100 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Match the Right</span>{' '}
                  <span className="block text-blue-600 xl:inline">Creative to the Right Gig</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Connect with talented photographers, designers, and filmmakers who match your project needs, budget, and style preferences. Get ranked recommendations in seconds.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <button
                      onClick={onStartMatching}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition duration-300"
                    >
                      Start Matching
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1590650624342-f527904ca1b3"
            alt="Creative professionals collaborating"
          />
        </div>
      </div>

      {/* How it Works Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">How It Works</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Simple. Smart. Fast.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Submit Your Brief</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Tell us about your project - category, location, budget, and style preferences.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">AI Matching</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Our engine analyzes skills, experience, location, and style to find perfect matches.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Get Top 3 Matches</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Receive ranked recommendations with detailed explanations and portfolio links.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Brief Submission Form Component
const BriefForm = ({ onSubmit, onBack, loading }) => {
  const [formData, setFormData] = useState({
    category: '',
    location: '',
    budget: 50000,
    duration_days: 1,
    style_preferences: [],
    description: ''
  });

  const categories = ['travel', 'fashion', 'portrait', 'wedding', 'commercial'];
  const styleOptions = ['candid', 'vintage', 'modern', 'pastel', 'bold', 'natural', 'editorial', 'minimalist', 'classic', 'vibrant'];

  const handleStyleToggle = (style) => {
    const newStyles = formData.style_preferences.includes(style)
      ? formData.style_preferences.filter(s => s !== style)
      : [...formData.style_preferences, style];
    
    setFormData({ ...formData, style_preferences: newStyles });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Project Brief
            </h3>
            <button
              onClick={onBack}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              ← Back
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Project Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Select category</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location *
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
                placeholder="e.g., Goa, Mumbai, Delhi"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Budget: ₹{formData.budget.toLocaleString()}
              </label>
              <input
                type="range"
                min="20000"
                max="200000"
                step="5000"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: parseInt(e.target.value) })}
                className="mt-1 block w-full"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>₹20K</span>
                <span>₹200K</span>
              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Duration (days)
              </label>
              <input
                type="number"
                min="1"
                max="30"
                value={formData.duration_days}
                onChange={(e) => setFormData({ ...formData, duration_days: parseInt(e.target.value) })}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Style Preferences */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Style Preferences
              </label>
              <div className="grid grid-cols-2 gap-2">
                {styleOptions.map(style => (
                  <label key={style} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.style_preferences.includes(style)}
                      onChange={() => handleStyleToggle(style)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700 capitalize">{style}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Additional Notes
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows="3"
                placeholder="Any specific requirements or details..."
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {loading ? 'Finding Matches...' : 'Find Matches'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Results Page Component
const ResultsPage = ({ matches, onBackToForm, loading }) => {
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Finding your perfect matches...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Top 3 Talent Matches
              </h3>
              <button
                onClick={onBackToForm}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                ← New Search
              </button>
            </div>

            <div className="space-y-6">
              {matches.map((match, index) => (
                <div key={match.talent.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                          <span className="text-white font-bold text-lg">#{index + 1}</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-xl font-medium text-gray-900">{match.talent.name}</h4>
                        <p className="text-sm text-gray-500">{match.talent.bio}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{match.score.toFixed(0)}</div>
                      <div className="text-sm text-gray-500">Match Score</div>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-medium text-gray-900 mb-2">Details</h5>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>📍 {match.talent.location}</div>
                        <div>💰 ₹{match.talent.budget_min.toLocaleString()} - ₹{match.talent.budget_max.toLocaleString()}</div>
                        <div>🎯 {match.talent.category}</div>
                        <div>⭐ {match.talent.rating}/5.0 • {match.talent.experience_years} years exp</div>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-900 mb-2">Style Tags</h5>
                      <div className="flex flex-wrap gap-1">
                        {match.talent.style_tags.map(tag => (
                          <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h5 className="text-sm font-medium text-gray-900 mb-2">Why This Match?</h5>
                    <p className="text-sm text-gray-600">{match.explanation}</p>
                  </div>

                  {match.talent.portfolio_url && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <a
                        href={match.talent.portfolio_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-blue-300 shadow-sm text-sm font-medium rounded-md text-blue-700 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        View Portfolio →
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [currentView, setCurrentView] = useState('landing'); // landing, form, results
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleStartMatching = () => {
    setCurrentView('form');
  };

  const handleBriefSubmit = async (briefData) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API}/match`, briefData);
      setMatches(response.data.matches);
      setCurrentView('results');
    } catch (error) {
      console.error('Error submitting brief:', error);
      alert('Error finding matches. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
    setMatches([]);
  };

  const handleBackToForm = () => {
    setCurrentView('form');
  };

  return (
    <div className="App">
      {currentView === 'landing' && (
        <LandingPage onStartMatching={handleStartMatching} />
      )}
      
      {currentView === 'form' && (
        <BriefForm 
          onSubmit={handleBriefSubmit}
          onBack={handleBackToLanding}
          loading={loading}
        />
      )}
      
      {currentView === 'results' && (
        <ResultsPage 
          matches={matches}
          onBackToForm={handleBackToForm}
          loading={loading}
        />
      )}
    </div>
  );
}

export default App;