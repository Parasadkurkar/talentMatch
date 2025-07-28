import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Landing Page Component
const LandingPage = ({ onStartMatching }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-gradient-to-br from-indigo-900/95 via-purple-900/95 to-pink-800/95 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl drop-shadow-lg">
                  <span className="block xl:inline">Match the Right</span>{' '}
                  <span className="block bg-gradient-to-r from-yellow-400 via-pink-300 to-blue-300 bg-clip-text text-transparent xl:inline animate-pulse">
                    Creative to the Right Gig
                  </span>
                </h1>
                <p className="mt-6 text-lg text-gray-100 sm:mt-8 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-8 md:text-2xl lg:mx-0 leading-relaxed drop-shadow-md">
                  🎯 Connect with talented photographers, designers, and filmmakers who perfectly match your project needs, budget, and style preferences. 
                  <span className="block mt-2 text-yellow-300 font-semibold">Get AI-powered ranked recommendations in seconds!</span>
                </p>
                <div className="mt-8 sm:mt-12 sm:flex sm:justify-center lg:justify-start">
                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <button
                      onClick={onStartMatching}
                      className="relative w-full flex items-center justify-center px-10 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-xl"
                    >
                      🚀 Start Matching Now
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="relative h-56 w-full sm:h-72 md:h-96 lg:h-full">
            <img
              className="h-full w-full object-cover rounded-l-3xl shadow-2xl"
              src="https://images.unsplash.com/photo-1590650624342-f527904ca1b3"
              alt="Creative professionals collaborating"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-600/20 to-purple-900/40 rounded-l-3xl"></div>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="py-16 bg-gradient-to-r from-gray-900 to-black relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-yellow-400 font-bold tracking-wide uppercase text-lg">⚡ How It Works</h2>
            <p className="mt-4 text-4xl leading-10 font-extrabold tracking-tight text-white sm:text-5xl drop-shadow-lg">
              Simple. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Smart.</span> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400"> Fast.</span>
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-12">
              <div className="text-center group hover:scale-105 transform transition-all duration-300">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white mx-auto shadow-xl">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl leading-8 font-bold text-white mb-3">📝 Submit Your Brief</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Tell us about your creative project - category, location, budget, duration, and style preferences.
                  </p>
                </div>
              </div>

              <div className="text-center group hover:scale-105 transform transition-all duration-300">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white mx-auto shadow-xl">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl leading-8 font-bold text-white mb-3">🤖 AI-Powered Matching</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Our intelligent engine analyzes skills, experience, location, budget compatibility and style to find perfect matches.
                  </p>
                </div>
              </div>

              <div className="text-center group hover:scale-105 transform transition-all duration-300">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-yellow-500 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white mx-auto shadow-xl">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl leading-8 font-bold text-white mb-3">🏆 Get Top 3 Matches</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Receive ranked recommendations with detailed match explanations, portfolios, and contact information.
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  📋 Project Brief
                </h3>
                <button
                  onClick={onBack}
                  className="text-white hover:text-yellow-300 transition-colors duration-200 text-lg font-medium"
                >
                  ← Back
                </button>
              </div>
            </div>
            
            <div className="px-8 py-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Category */}
                <div className="group">
                  <label className="block text-lg font-bold text-gray-800 mb-3">
                    🎯 Project Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl shadow-sm focus:ring-4 focus:ring-purple-500/25 focus:border-purple-500 text-lg font-medium bg-white/90 transition-all duration-200"
                  >
                    <option value="">Select category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>
                        {cat.charAt(0).toUpperCase() + cat.slice(1)} Photography
                      </option>
                    ))}
                  </select>
                </div>

                {/* Location */}
                <div className="group">
                  <label className="block text-lg font-bold text-gray-800 mb-3">
                    📍 Location *
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                    placeholder="e.g., Goa, Mumbai, Delhi, Bangalore"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl shadow-sm focus:ring-4 focus:ring-purple-500/25 focus:border-purple-500 text-lg font-medium bg-white/90 transition-all duration-200"
                  />
                </div>

                {/* Budget */}
                <div className="group">
                  <label className="block text-lg font-bold text-gray-800 mb-3">
                    💰 Budget: <span className="text-green-600 font-extrabold">₹{formData.budget.toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min="20000"
                    max="200000"
                    step="5000"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: parseInt(e.target.value) })}
                    className="w-full h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm font-semibold text-gray-600 mt-2">
                    <span>₹20K</span>
                    <span className="text-purple-600">Sweet Spot: ₹50K-₹100K</span>
                    <span>₹200K</span>
                  </div>
                </div>

                {/* Duration */}
                <div className="group">
                  <label className="block text-lg font-bold text-gray-800 mb-3">
                    ⏱️ Duration (days)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={formData.duration_days}
                    onChange={(e) => setFormData({ ...formData, duration_days: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl shadow-sm focus:ring-4 focus:ring-purple-500/25 focus:border-purple-500 text-lg font-medium bg-white/90 transition-all duration-200"
                  />
                </div>

                {/* Style Preferences */}
                <div className="group">
                  <label className="block text-lg font-bold text-gray-800 mb-4">
                    🎨 Style Preferences
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {styleOptions.map(style => (
                      <label key={style} className="flex items-center group cursor-pointer">
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={formData.style_preferences.includes(style)}
                            onChange={() => handleStyleToggle(style)}
                            className="sr-only"
                          />
                          <div className={`w-5 h-5 rounded-md border-2 transition-all duration-200 ${
                            formData.style_preferences.includes(style)
                              ? 'bg-gradient-to-r from-purple-500 to-pink-500 border-purple-500'
                              : 'border-gray-300 bg-white group-hover:border-purple-400'
                          }`}>
                            {formData.style_preferences.includes(style) && (
                              <svg className="w-3 h-3 text-white absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className={`ml-3 text-base font-medium capitalize transition-colors duration-200 ${
                          formData.style_preferences.includes(style) ? 'text-purple-700 font-bold' : 'text-gray-700'
                        }`}>
                          {style}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="group">
                  <label className="block text-lg font-bold text-gray-800 mb-3">
                    📝 Additional Notes
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows="4"
                    placeholder="Any specific requirements, creative vision, or special details about your project..."
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl shadow-sm focus:ring-4 focus:ring-purple-500/25 focus:border-purple-500 text-base font-medium bg-white/90 transition-all duration-200 resize-none"
                  />
                </div>

                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="relative w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] transition-all duration-200 shadow-xl"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Finding Perfect Matches...
                      </>
                    ) : (
                      '🎯 Find My Perfect Matches'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
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