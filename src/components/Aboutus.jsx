import React from 'react'

const Aboutus = () => {
  // Add custom styles for animations
  React.useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.8);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      @keyframes gradientX {
        0%, 100% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out;
      }
      
      .animate-fade-in-up-delay {
        animation: fadeInUp 0.8s ease-out 0.3s both;
      }
      
      .animate-slide-in-left {
        animation: slideInLeft 0.8s ease-out 0.2s both;
      }
      
      .animate-slide-in-right {
        animation: slideInRight 0.8s ease-out 0.4s both;
      }
      
      .animate-scale-in {
        animation: scaleIn 0.6s ease-out 0.1s both;
      }
      
      .animate-gradient-x {
        background-size: 200% 200%;
        animation: gradientX 3s ease infinite;
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])
  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-900 relative overflow-hidden">
      {/* Fire-themed background effects */}
      <div className="absolute inset-0">
        {/* Animated fire particles */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse opacity-70 shadow-lg shadow-red-500/50"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse opacity-60 shadow-lg shadow-orange-500/50"></div>
        <div className="absolute top-60 left-1/4 w-2.5 h-2.5 bg-gradient-to-r from-red-600 to-orange-600 rounded-full animate-pulse opacity-50 shadow-lg shadow-red-600/50"></div>
        <div className="absolute top-80 right-1/3 w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse opacity-40 shadow-lg shadow-orange-500/50"></div>
        <div className="absolute bottom-40 left-1/2 w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse opacity-60 shadow-lg shadow-red-500/50"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-full animate-pulse opacity-50 shadow-lg shadow-orange-600/50"></div>
        <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-gradient-to-r from-red-400 to-orange-400 rounded-full animate-pulse opacity-40 shadow-lg shadow-red-500/50"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2.5 h-2.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse opacity-50 shadow-lg shadow-orange-500/50"></div>
        
        {/* Floating fire embers */}
        <div className="absolute top-32 left-1/3 w-1 h-1 bg-red-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-64 right-1/4 w-1 h-1 bg-orange-400 rounded-full animate-ping opacity-50"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-red-500 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-64 right-1/3 w-1 h-1 bg-orange-500 rounded-full animate-ping opacity-60"></div>
      </div>

      {/* Fire gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/5 to-red-500/10 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-red-900/20"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 bg-clip-text text-transparent animate-gradient-x">
            IGNISIA'25
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto mb-8 animate-scale-in"></div>
          <p className="text-xl md:text-2xl text-orange-300 font-semibold animate-fade-in-up-delay">
            Ignite Your Career with Data Structures & Algorithms
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          {/* About the Event Section */}
          <div className="mb-16 animate-fade-in-up">
            <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 backdrop-blur-lg border border-red-500/30 rounded-3xl p-8 md:p-12 shadow-2xl max-w-5xl mx-auto hover:shadow-red-500/30 hover:border-red-400/50 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
              {/* Fire glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-3xl"></div>
              <h3 className="text-3xl md:text-4xl font-bold text-orange-300 mb-8 text-center animate-fade-in-up">
                About the Event
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="animate-slide-in-left">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    IGNISIA'25 is a comprehensive placement training event designed to transform your 
                    coding journey. This intensive program features <span className="text-orange-400 font-semibold bg-gradient-to-r from-orange-400/20 to-red-400/20 px-2 py-1 rounded">expert speaker sessions</span> 
                    followed by a <span className="text-orange-400 font-semibold bg-gradient-to-r from-orange-400/20 to-red-400/20 px-2 py-1 rounded">hands-on technical workshop</span>, focusing on mastering 
                    Data Structures and Algorithms - the cornerstone of technical interviews at top tech companies.
                  </p>
                </div>
                <div className="animate-slide-in-right">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Our speaker sessions will provide valuable industry insights and practical knowledge, 
                    while the technical workshop ensures hands-on experience for both knowledge exchange 
                    and skill development. Whether you're a beginner or an experienced coder, IGNISIA'25 
                    provides the perfect platform to elevate your problem-solving abilities and boost your 
                    confidence for technical interviews.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="mb-16 animate-fade-in-up">
            <h3 className="text-3xl md:text-4xl font-bold text-orange-300 mb-12 text-center animate-fade-in-up">
              What We Offer
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-lg border border-red-500/30 rounded-2xl p-8 hover:bg-red-900/30 hover:border-red-400/50 hover:shadow-red-500/20 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/30 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-orange-200 mb-3">Expert Sessions</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Industry insights and practical knowledge from experienced professionals.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur-lg border border-orange-500/30 rounded-2xl p-8 hover:bg-orange-900/30 hover:border-orange-400/50 hover:shadow-orange-500/20 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange-500/30 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-orange-200 mb-3">Technical Workshop</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Hands-on coding experience with DSA problems and real-world challenges.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-lg border border-red-500/30 rounded-2xl p-8 hover:bg-red-900/30 hover:border-red-400/50 hover:shadow-red-500/20 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/30 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-orange-200 mb-3">Interview Prep</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Real interview scenarios and problem-solving strategies from top companies.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur-lg border border-orange-500/30 rounded-2xl p-8 hover:bg-orange-900/30 hover:border-orange-400/50 hover:shadow-orange-500/20 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange-500/30 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-orange-200 mb-3">Certification</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Earn valuable certificates to showcase your skills to potential employers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Event Details and Benefits */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Event Structure */}
            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-lg border border-red-500/30 rounded-2xl p-8 shadow-2xl hover:bg-red-900/30 hover:border-red-400/50 hover:shadow-red-500/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-orange-200 mb-6 text-center">
                  Event Structure
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/20 hover:border-red-400/40 hover:bg-red-900/30 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-semibold text-orange-200">Speaker Sessions</h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Industry insights and practical knowledge from experienced professionals, 
                      covering real-world applications and career guidance.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20 hover:border-orange-400/40 hover:bg-orange-900/30 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-semibold text-orange-200">Technical Workshop</h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Hands-on coding experience with DSA problems, ensuring both knowledge 
                      exchange and practical skill development.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Info Card */}
            <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur-lg border border-orange-500/30 rounded-2xl p-8 shadow-2xl hover:bg-orange-900/30 hover:border-orange-400/50 hover:shadow-orange-500/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-orange-200 mb-6 text-center">
                  Event Details
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between py-3 border-b border-orange-500/20">
                    <span className="text-orange-300 font-medium">Date</span>
                    <span className="text-orange-200 font-semibold">13th October 2025</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-orange-500/20">
                    <span className="text-orange-300 font-medium">Time</span>
                    <span className="text-orange-200 font-semibold">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-orange-500/20">
                    <span className="text-orange-300 font-medium">Venue</span>
                    <span className="text-orange-200 font-semibold">GN Ramachandran Hall</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-orange-300 font-medium">Format</span>
                    <span className="text-orange-200 font-semibold">In-Person Event</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16">
            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-lg border border-red-500/30 rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto hover:bg-red-900/30 hover:border-red-400/50 hover:shadow-red-500/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-orange-200 mb-8 text-center">
                  What You'll Get
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex items-center py-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mr-3 shadow-lg shadow-red-500/30">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-orange-200">Participation Certificate</span>
                  </div>
                  <div className="flex items-center py-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-3 shadow-lg shadow-orange-500/30">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-orange-200">One-on-one Mentorship Sessions</span>
                  </div>
                  <div className="flex items-center py-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mr-3 shadow-lg shadow-red-500/30">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-orange-200">Refreshments & Networking</span>
                  </div>
                  <div className="flex items-center py-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-3 shadow-lg shadow-orange-500/30">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-orange-200">Access to Practice Materials</span>
                  </div>
                  <div className="flex items-center py-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mr-3 shadow-lg shadow-red-500/30">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-orange-200">Industry Insights & Career Guidance</span>
                  </div>
                  <div className="flex items-center py-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-3 shadow-lg shadow-orange-500/30">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-orange-200">Hands-on Coding Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section - Organizers */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-orange-300 mb-6">Organized By</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400 mb-2">GeeksforGeeks</div>
                <div className="text-sm">SRM Chapter</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400 mb-2">School of Computing</div>
                <div className="text-sm">SRM Institute</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400 mb-2">Department of NWC</div>
                <div className="text-sm">SRM University</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus  