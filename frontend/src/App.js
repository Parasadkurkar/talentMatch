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
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur-xl opacity-75 animate-pulse"></div>
            <div className="relative animate-spin rounded-full h-32 w-32 border-4 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto">
              <div className="absolute inset-2 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-full"></div>
            </div>
          </div>
          <p className="mt-8 text-2xl font-bold text-white animate-bounce">🔍 Finding your perfect creative matches...</p>
          <p className="mt-4 text-lg text-gray-300">Analyzing skills, experience, and style preferences</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative group mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-75"></div>
          <div className="relative bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-extrabold text-white flex items-center">
                    🏆 Top 3 Perfect Matches Found!
                  </h3>
                  <p className="text-lg text-green-100 mt-2">Here are your ideal creative professionals</p>
                </div>
                <button
                  onClick={onBackToForm}
                  className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-bold transition-all duration-200 hover:scale-105"
                >
                  🔍 New Search
                </button>
              </div>
            </div>

            <div className="p-8 space-y-8">
              {matches.map((match, index) => (
                <div key={match.talent.id} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                    
                    {/* Rank Badge & Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div className="relative">
                          <div className={`absolute inset-0 rounded-full blur-md ${
                            index === 0 ? 'bg-yellow-400' : index === 1 ? 'bg-gray-400' : 'bg-orange-400'
                          } opacity-75`}></div>
                          <div className={`relative flex items-center justify-center w-16 h-16 rounded-full text-white font-extrabold text-xl shadow-lg ${
                            index === 0 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                            index === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-600' :
                            'bg-gradient-to-r from-orange-400 to-orange-600'
                          }`}>
                            {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                          </div>
                        </div>
                        <div className="ml-6">
                          <h4 className="text-3xl font-bold text-gray-900 mb-2">{match.talent.name}</h4>
                          <p className="text-lg text-gray-600 font-medium">{match.talent.bio}</p>
                        </div>
                      </div>
                      
                      {/* Match Score */}
                      <div className="text-right">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur opacity-75"></div>
                          <div className="relative bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-4 rounded-2xl shadow-lg">
                            <div className="text-4xl font-extrabold">{match.score.toFixed(0)}</div>
                            <div className="text-sm font-bold opacity-90">Match Score</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                      <div className="space-y-4">
                        <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          📊 Professional Details
                        </h5>
                        <div className="space-y-3">
                          <div className="flex items-center bg-blue-50 rounded-lg px-4 py-3">
                            <span className="text-2xl mr-3">📍</span>
                            <span className="font-bold text-blue-800">Location:</span>
                            <span className="ml-2 text-blue-700 font-semibold">{match.talent.location}</span>
                          </div>
                          <div className="flex items-center bg-green-50 rounded-lg px-4 py-3">
                            <span className="text-2xl mr-3">💰</span>
                            <span className="font-bold text-green-800">Budget:</span>
                            <span className="ml-2 text-green-700 font-semibold">
                              ₹{match.talent.budget_min.toLocaleString()} - ₹{match.talent.budget_max.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex items-center bg-purple-50 rounded-lg px-4 py-3">
                            <span className="text-2xl mr-3">🎯</span>
                            <span className="font-bold text-purple-800">Specialty:</span>
                            <span className="ml-2 text-purple-700 font-semibold capitalize">{match.talent.category} Photography</span>
                          </div>
                          <div className="flex items-center bg-yellow-50 rounded-lg px-4 py-3">
                            <span className="text-2xl mr-3">⭐</span>
                            <span className="font-bold text-yellow-800">Rating:</span>
                            <span className="ml-2 text-yellow-700 font-semibold">{match.talent.rating}/5.0 • {match.talent.experience_years} years exp</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          🎨 Style Expertise
                        </h5>
                        <div className="flex flex-wrap gap-3">
                          {match.talent.style_tags.map(tag => (
                            <span key={tag} className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform hover:scale-105 transition-transform duration-200">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Match Explanation */}
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-6">
                      <h5 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        🤔 Why This Perfect Match?
                      </h5>
                      <p className="text-lg text-gray-700 leading-relaxed font-medium">{match.explanation}</p>
                    </div>

                    {/* Portfolio Link */}
                    {match.talent.portfolio_url && (
                      <div className="flex justify-center">
                        <div className="relative group">
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                          <a
                            href={match.talent.portfolio_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-4 focus:ring-purple-500/50 transform hover:scale-105 transition-all duration-200 shadow-xl"
                          >
                            🎨 View Portfolio & Contact
                            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
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