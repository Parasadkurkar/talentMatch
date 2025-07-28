import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Landing Page Component
const LandingPage = ({ onStartMatching }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-semibold text-gray-900">BreadButter</h1>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-500 hover:text-gray-900 text-sm font-medium">How it works</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-sm font-medium">Pricing</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-sm font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-light text-gray-900 sm:text-5xl md:text-6xl lg:leading-tight">
                  <span className="block">Find the perfect</span>
                  <span className="block text-blue-600 font-normal">creative talent</span>
                  <span className="block">for your project</span>
                </h1>
                <p className="mt-6 text-base text-gray-500 sm:mt-8 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-8 md:text-xl lg:mx-0 font-light leading-relaxed">
                  Connect with vetted photographers, designers, and filmmakers. 
                  Get matched based on your budget, location, and style preferences.
                </p>
                <div className="mt-8 sm:mt-12 sm:flex sm:justify-center lg:justify-start">
                  <div>
                    <button
                      onClick={onStartMatching}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition duration-150 shadow-sm"
                    >
                      Start matching
                    </button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition duration-150">
                      Learn more
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
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
            alt="Professional workspace"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Process</h2>
            <p className="mt-2 text-3xl leading-8 font-light tracking-tight text-gray-900 sm:text-4xl">
              How it works
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto font-light">
              Three simple steps to find your ideal creative professional
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                  <span className="text-lg font-medium">1</span>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Submit project brief</h3>
                  <p className="mt-2 text-base text-gray-500 font-light">
                    Tell us about your project requirements, budget, and preferred style.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                  <span className="text-lg font-medium">2</span>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Get matched</h3>
                  <p className="mt-2 text-base text-gray-500 font-light">
                    Our algorithm matches you with the most suitable professionals.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                  <span className="text-lg font-medium">3</span>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Connect & hire</h3>
                  <p className="mt-2 text-base text-gray-500 font-light">
                    Review profiles, portfolios, and connect with your chosen professional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <dl className="rounded-lg bg-white shadow-sm border border-gray-200 grid grid-cols-1 gap-5 sm:grid-cols-3">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-base font-normal text-gray-900">Active creatives</dt>
                <dd className="mt-1 text-3xl font-light leading-9 text-gray-900">500+</dd>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-base font-normal text-gray-900">Projects completed</dt>
                <dd className="mt-1 text-3xl font-light leading-9 text-gray-900">2,400+</dd>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-base font-normal text-gray-900">Average match score</dt>
                <dd className="mt-1 text-3xl font-light leading-9 text-gray-900">94%</dd>
              </div>
            </dl>
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
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-sm rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Project Brief
              </h3>
              <button
                onClick={onBack}
                className="text-sm text-gray-500 hover:text-gray-700 font-medium"
              >
                ← Back
              </button>
            </div>
          </div>
          
          <div className="px-6 py-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  required
                  placeholder="e.g., Mumbai, Delhi, Bangalore"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget: ₹{formData.budget.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="20000"
                  max="200000"
                  step="5000"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: parseInt(e.target.value) })}
                  className="block w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹20K</span>
                  <span>₹200K</span>
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration (days)
                </label>
                <input
                  type="number"
                  min="1"
                  max="30"
                  value={formData.duration_days}
                  onChange={(e) => setFormData({ ...formData, duration_days: parseInt(e.target.value) })}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              {/* Style Preferences */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Style Preferences
                </label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {styleOptions.map(style => (
                    <label key={style} className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          type="checkbox"
                          checked={formData.style_preferences.includes(style)}
                          onChange={() => handleStyleToggle(style)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <span className="text-gray-700 capitalize">{style}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Requirements
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows="4"
                  placeholder="Any specific requirements or details about your project..."
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm resize-none"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 transition duration-150"
                >
                  {loading ? 'Finding matches...' : 'Find matches'}
                </button>
              </div>
            </form>
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
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-sm text-gray-600">Finding your matches...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-sm rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Your matches
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Based on your project requirements
                </p>
              </div>
              <button
                onClick={onBackToForm}
                className="text-sm text-gray-500 hover:text-gray-700 font-medium"
              >
                ← New search
              </button>
            </div>
          </div>

          <div className="px-6 py-6 space-y-8">
            {matches.map((match, index) => (
              <div key={match.talent.id} className="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
                <div className="flex items-start justify-between">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-sm font-medium text-blue-800">#{index + 1}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">{match.talent.name}</h4>
                      <p className="text-sm text-gray-500 mt-1">{match.talent.bio}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-medium text-gray-900">{match.score.toFixed(0)}%</div>
                    <div className="text-xs text-gray-500">match score</div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-sm font-medium text-gray-900 mb-3">Professional Details</h5>
                    <dl className="space-y-2 text-sm">
                      <div className="flex">
                        <dt className="text-gray-500 w-20">Location</dt>
                        <dd className="text-gray-900 font-medium">{match.talent.location}</dd>
                      </div>
                      <div className="flex">
                        <dt className="text-gray-500 w-20">Budget</dt>
                        <dd className="text-gray-900 font-medium">
                          ₹{match.talent.budget_min.toLocaleString()} - ₹{match.talent.budget_max.toLocaleString()}
                        </dd>
                      </div>
                      <div className="flex">
                        <dt className="text-gray-500 w-20">Specialty</dt>
                        <dd className="text-gray-900 font-medium capitalize">{match.talent.category}</dd>
                      </div>
                      <div className="flex">
                        <dt className="text-gray-500 w-20">Rating</dt>
                        <dd className="text-gray-900 font-medium">
                          {match.talent.rating}/5.0 • {match.talent.experience_years} years
                        </dd>
                      </div>
                    </dl>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-medium text-gray-900 mb-3">Expertise</h5>
                    <div className="flex flex-wrap gap-2">
                      {match.talent.style_tags.map(tag => (
                        <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h5 className="text-sm font-medium text-gray-900 mb-2">Why this match</h5>
                  <p className="text-sm text-gray-600 leading-relaxed">{match.explanation}</p>
                </div>

                {match.talent.portfolio_url && (
                  <div className="mt-6">
                    <a
                      href={match.talent.portfolio_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
                    >
                      View Portfolio
                      <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            ))}
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