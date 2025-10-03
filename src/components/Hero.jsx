import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Users } from 'lucide-react'; 
import FadeIn from './FadeIn'; // REQUIRED dependency
import CountdownTimer from './CountdownTimer'; // REQUIRED dependency

// IMPORTANT: Assuming this image file exists in the specified path.
import IgnisiaImage from '../assets/Ignisia.png'; 

const Hero = () => {
  const eventDetails = [
    { icon: Calendar, label: "Date", value: "13th Oct 2025" },
    { icon: Clock, label: "Time", value: "9:00 AM – 5:00 PM" },
    { icon: MapPin, label: "Venue", value: "GN Ramachandran Hall, SRMIST" },
    { icon: Users, label: "Organized by", value: "GeeksforGeeks Campus Body SRMIST" },
  ];

  return (
    <section 
      id="home" 
      // Reduced vertical padding to fit content in one frame
      className="relative pt-24 pb-16 min-h-[90vh] flex items-center justify-center text-center bg-black overflow-hidden"
    >
      
      {/* Dynamic Background Grid (Subtle, optimized for performance) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-10 md:grid-cols-20 gap-1 h-full">
          {Array.from({ length: 100 }).map((_, i) => ( 
            <motion.div 
              key={i} 
              className="bg-brand-orange w-px h-px" 
              initial={{ opacity: 0 }}
              // Performance Fix: Only animate once on load
              animate={{ opacity: [0, 0.05, 0] }}
              transition={{ duration: 5, ease: "linear", delay: Math.random() * 5 }}
            />
          ))}
        </div>
      </div>
      
      {/* FIX: Using flexbox container for reliable centering of all inner elements */}
      <div className="container mx-auto px-4 relative z-20 max-w-5xl flex flex-col items-center">
        <FadeIn delay={0.1}>
          {/* HEADING FIX: Image replacement for perfect rendering and alignment */}
          <motion.img
            src={IgnisiaImage}
            alt="IGNISIA"
            // Set responsive size classes to mimic the old text size
            className="w-full max-w-xl md:max-w-3xl lg:max-w-[850px] h-auto mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </FadeIn>

        {/* Countdown Timer Section */}
        <FadeIn delay={0.4}>
          <CountdownTimer />
        </FadeIn>

        <FadeIn delay={0.6} direction="down">
          {/* Main Description with reduced top margin */}
          <p className="text-lg md:text-xl text-brand-gold/70 max-w-3xl mx-auto mt-8 mb-10 font-nav">
            The flagship <strong>Technical Workshop & Competitive Rounds</strong> event, strengthening your skills for ultimate placement readiness.
          </p>

          {/* Key Event Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
            {eventDetails.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <div key={index} className="flex flex-col items-center p-4 bg-black/50 backdrop-blur-sm rounded-xl border border-brand-gold/30 hover:border-brand-gold transition-colors duration-300">
                  <Icon className="w-6 h-6 text-brand-orange mb-2" />
                  <span className="text-xs font-nav uppercase tracking-wider text-gray-400">{detail.label}</span>
                  <p className="text-sm md:text-base font-semibold text-white mt-1">{detail.value}</p>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.a
              href="#register"
              className="px-8 py-3 rounded-full text-base font-bold uppercase tracking-wider 
                         bg-brand-orange text-white hover:bg-brand-gold transition-all duration-300 
                         shadow-lg shadow-brand-orange/50 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now!
            </motion.a>
            <motion.a
              href="#about"
              className="px-8 py-3 rounded-full text-base font-bold uppercase tracking-wider 
                         bg-transparent border-2 border-brand-gold text-brand-gold 
                         hover:bg-brand-gold/10 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
