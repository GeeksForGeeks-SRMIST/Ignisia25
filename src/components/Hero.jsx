import React from 'react';
import { motion } from 'framer-motion'; // Ensure motion is imported
import FadeIn from './FadeIn';
import IgnisiaLogo from '../assets/ignisia-logo.png';
import PhoenixImage from '../assets/phoenix-bg.png';
import RisingEmbers from './RisingEmbers';
import flamesImage from '../assets/flames.png';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center bg-black overflow-hidden">
      
      <RisingEmbers />

      <FadeIn delay={0.2} className="relative z-20 flex flex-col items-center">
        <div 
          className="relative flex items-center justify-center w-[90%]"
          style={{ maxWidth: '1200px' }}
        >
          {/* Phoenix Image - NOW ANIMATED */}
          <motion.img
            src={PhoenixImage}
            alt="A phoenix rising from flames"
            className="w-full opacity-60"
            animate={{
              opacity: [0.6, 0.7, 0.6],
              y: [-10, 10, -10], // Gentle floating motion
            }}
            transition={{
              duration: 8, // A long, slow animation
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Ignisia Logo - NOW ANIMATED */}
          <motion.img
            src={IgnisiaLogo}
            alt="Ignisia '25 pixelated logo with flames"
            className="absolute w-full transform translate-y-1/4"
            animate={{
              opacity: [1, 0.95, 1], // Subtle heat flicker
            }}
            transition={{
              duration: 2.5, // A faster flicker
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <p className="text-xl md:text-2xl text-brand-gold mt-6">
          
        </p>
      </FadeIn>

      <motion.img
        src={flamesImage}
        alt="A line of flames"
        className="absolute bottom-0 left-0 w-full h-42 object-cover z-10 pointer-events-none"
        animate={{
          opacity: [0.9, 1, 0.95, 1, 0.9],
          scale: [1, 1.01, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default Hero;