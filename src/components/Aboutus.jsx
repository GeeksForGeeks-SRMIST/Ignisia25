import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import RisingEmbers from './RisingEmbers';
import flamesImage from '../assets/flames.png';

const Aboutus = () => {
  return (
    <section id="about" className="relative py-24 bg-black overflow-hidden">
      <RisingEmbers />
      
      <FadeIn className="relative z-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-pixel text-brand-gold mb-6">
              About IGNISIA
          </h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">What is IGNISIA?</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                IGNISIA is a flagship level workshop that will be hosted by GeeksforGeeks every year starting 2025 onwards. Every year we're going to host exciting and surprising topics under IGNISIA.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                This IGNISIA is going to be one of the special and biggest flagship level workshop ever happened at SRM. Let's make it a success!
              </p>
            </div>
            <div className="bg-black/50 backdrop-blur-lg border border-brand-glow/30 p-8 rounded-lg hover:shadow-inner-glow transition-all duration-300">
              <h4 className="text-xl font-bold text-brand-gold mb-6">Event Highlights</h4>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="text-white font-semibold">Flagship Level Workshop</h5>
                    <p className="text-gray-400 text-sm">Premium tech education experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="text-white font-semibold">Annual Event Starting 2025</h5>
                    <p className="text-gray-400 text-sm">Yearly tradition of excellence</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="text-white font-semibold">Biggest at SRM University</h5>
                    <p className="text-gray-400 text-sm">Largest tech workshop on campus</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="text-white font-semibold">Powered by GeeksforGeeks</h5>
                    <p className="text-gray-400 text-sm">Industry-leading tech education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What You Can Expect section removed as requested */}

          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-8">Additional Benefits</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-black/30 backdrop-blur-lg p-4 rounded-lg border border-brand-glow/20 hover:border-brand-gold/30 transition-all duration-300">
                <h4 className="text-lg font-bold text-brand-gold mb-2">Hands-on Coding</h4>
                <p className="text-gray-400 text-sm">Live coding sessions with real projects</p>
              </div>
              <div className="bg-black/30 backdrop-blur-lg p-4 rounded-lg border border-brand-glow/20 hover:border-brand-gold/30 transition-all duration-300">
                <h4 className="text-lg font-bold text-brand-gold mb-2">Tech Talks</h4>
                <p className="text-gray-400 text-sm">Inspiring sessions on latest technologies</p>
              </div>
              <div className="bg-black/30 backdrop-blur-lg p-4 rounded-lg border border-brand-glow/20 hover:border-brand-gold/30 transition-all duration-300">
                <h4 className="text-lg font-bold text-brand-gold mb-2">Coding Competitions</h4>
                <p className="text-gray-400 text-sm">Compete and win exciting prizes</p>
              </div>
              <div className="bg-black/30 backdrop-blur-lg p-4 rounded-lg border border-brand-glow/20 hover:border-brand-gold/30 transition-all duration-300">
                <h4 className="text-lg font-bold text-brand-gold mb-2">Career Guidance</h4>
                <p className="text-gray-400 text-sm">Resume building and interview tips</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-black/50 backdrop-blur-lg border border-brand-glow/30 p-8 rounded-lg hover:shadow-inner-glow transition-all duration-300">
              <h3 className="text-2xl font-bold text-brand-gold mb-4">Join the Revolution</h3>
              <p className="text-lg text-gray-300 mb-6">
                Be part of the most exciting tech workshop at SRM University. Don't miss this opportunity to learn, network, and grow with the best in the industry.
              </p>
              <div className="text-brand-gold font-bold text-xl">
                IGNISIA 2025 - Where Innovation Meets Excellence
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

    </section>
  );
};

export default Aboutus;