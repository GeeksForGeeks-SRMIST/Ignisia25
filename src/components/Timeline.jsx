import React, { useEffect, useRef, useState } from 'react';
import { Clock, CheckCircle, Circle, Calendar, MapPin } from 'lucide-react';

const timelineEvents = [
  {
    time: "8:00 AM",
    title: "Physical Registrations Start",
    description: "Welcome participants and distribute event materials",
    completed: true,
    location: "Main Entrance"
  },
  {
    time: "9:00 AM", 
    title: "IGNISIA Workshop Starts",
    description: "Interactive coding sessions and technical workshops begin",
    completed: true,
    location: "Workshop Hall"
  },
  {
    time: "1:00 PM",
    title: "Lunch Break",
    description: "Networking lunch with fellow developers and mentors",
    completed: true,
    location: "Cafeteria"
  },
  {
    time: "2:00 PM",
    title: "Event Continues/Resumes",
    description: "Advanced sessions and project presentations",
    completed: false,
    location: "Main Auditorium"
  },
  {
    time: "5:00 PM",
    title: "Events End & Vote Of Thanks",
    description: "Closing ceremony and appreciation for all participants",
    completed: false,
    location: "Main Stage"
  }
];

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [activeItem, setActiveItem] = useState(null);
  const observerRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    observerRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleItems(prev => new Set([...prev, index]));
            }
          },
          { threshold: 0.3 }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background Pattern - Same as Home Page */}
      <div className="absolute inset-0">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-orange-500/20 rotate-45 transform animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 border border-orange-400/15 rotate-12 transform animate-bounce"></div>
        <div className="absolute bottom-40 left-32 w-32 h-32 border border-orange-300/10 rotate-45 transform animate-pulse"></div>
        <div className="absolute bottom-20 right-40 w-56 h-56 border-2 border-orange-500/25 rotate-12 transform animate-bounce"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-orange-600/15 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Pixelated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-20 gap-1 h-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div key={i} className="bg-orange-500 w-1 h-1 animate-pulse" style={{ animationDelay: `${i * 50}ms` }}></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header with Pixelated Style */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 tracking-wider pixel-text">
              EVENT TIMELINE
            </h1>
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 blur-xl rounded-lg"></div>
          </div>
          <p className="text-orange-200/80 text-lg md:text-xl font-medium tracking-wide">
            Journey through IGNISIA'25 Schedule
          </p>
        </div>

        {/* Unique Timeline Design */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-400 via-amber-500 to-orange-600 rounded-full shadow-lg shadow-orange-500/50"></div>
            
            <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                ref={el => observerRefs.current[index] = el}
                className={`relative transition-all duration-1000 transform ${
                  visibleItems.has(index) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
                onMouseEnter={() => setActiveItem(index)}
                onMouseLeave={() => setActiveItem(null)}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 border-4 border-black shadow-lg shadow-orange-500/50 transition-all duration-500 ${
                    activeItem === index ? 'scale-150 shadow-orange-500/80' : ''
                  }`}></div>
                </div>

                {/* Event Card - Alternating Sides */}
                <div className={`flex ${index % 2 === 0 ? 'justify-start pr-8 md:pr-16' : 'justify-end pl-8 md:pl-16'}`}>
                  <div className={`relative group max-w-md w-full ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    
                    {/* Time Badge - Floating Above Card */}
                    <div className={`absolute -top-4 ${index % 2 === 0 ? 'right-4' : 'left-4'} z-10`}>
                      <div className={`backdrop-blur-xl bg-gradient-to-r from-orange-500/90 to-amber-500/90 border border-orange-300/50 rounded-full px-6 py-2 shadow-xl shadow-orange-500/40 transition-all duration-500 ${
                        activeItem === index ? 'scale-110 shadow-orange-500/60' : ''
                      }`}>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-white" />
                          <span className="text-white font-bold text-sm tracking-wide">{event.time}</span>
                        </div>
                      </div>
                    </div>

                    {/* Main Event Card - Unique Geometric Design */}
                    <div className={`relative overflow-hidden transition-all duration-700 ${
                      activeItem === index ? 'scale-105' : ''
                    }`}>
                      
                      {/* Card Background with Unique Shape */}
                      <div className="relative">
                        {/* Main Card Body */}
                        <div className="backdrop-blur-2xl bg-gradient-to-br from-orange-500/10 via-black/40 to-amber-500/10 border border-orange-400/30 rounded-3xl p-8 shadow-2xl shadow-orange-500/20">
                          
                          {/* Decorative Corner Elements */}
                          <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-20 h-20 bg-gradient-to-br from-orange-500/20 to-amber-500/20 ${index % 2 === 0 ? 'rounded-bl-3xl' : 'rounded-br-3xl'} rounded-tr-3xl`}></div>
                          <div className={`absolute bottom-0 ${index % 2 === 0 ? 'left-0' : 'right-0'} w-16 h-16 bg-gradient-to-tr from-orange-400/15 to-amber-400/15 ${index % 2 === 0 ? 'rounded-tr-3xl' : 'rounded-tl-3xl'} rounded-bl-3xl`}></div>
                          
                          {/* Content */}
                          <div className="relative z-10">
                            <div className="flex items-start gap-4 mb-4">
                              <div className="p-3 rounded-2xl bg-gradient-to-br from-orange-500/30 to-amber-500/30 backdrop-blur-sm">
                                <Calendar className="w-6 h-6 text-orange-300" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                                  {event.title}
                                </h3>
                              </div>
                            </div>
                            
                            <p className="text-orange-200/90 text-base leading-relaxed mb-4">
                              {event.description}
                            </p>
                            
                            {event.location && (
                              <div className="flex items-center gap-2 text-orange-300/80">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm font-medium">{event.location}</span>
                              </div>
                            )}
                          </div>
                          
                          {/* Animated Border Glow */}
                          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 to-amber-500/20 blur-sm -z-10 transition-opacity duration-500 ${
                            activeItem === index ? 'opacity-100' : 'opacity-0'
                          }`}></div>
                        </div>
                        
                        {/* Connecting Line to Timeline */}
                        <div className={`absolute top-1/2 ${index % 2 === 0 ? '-right-8 md:-right-16' : '-left-8 md:-left-16'} w-8 md:w-16 h-0.5 bg-gradient-to-r from-orange-400 to-amber-500 transform -translate-y-1/2`}>
                          <div className={`absolute inset-0 bg-gradient-to-r from-orange-300 to-amber-300 rounded-full transition-all duration-1000 ${
                            visibleItems.has(index) ? 'scale-x-100' : 'scale-x-0'
                          } ${index % 2 === 0 ? 'origin-left' : 'origin-right'}`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>

        {/* Call to Action with Glassmorphism */}
        <div className="text-center mt-20">
          <div className="inline-block relative">
            <button className="backdrop-blur-xl bg-gradient-to-r from-orange-500/30 to-amber-500/30 border border-orange-400/40 hover:border-orange-400/60 text-white font-bold py-4 px-12 rounded-full text-lg shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 tracking-wide">
              REGISTER FOR IGNISIA'25
            </button>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 blur-xl rounded-full -z-10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

