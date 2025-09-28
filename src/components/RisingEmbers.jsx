import React from 'react';
import { motion } from 'framer-motion';

const Particle = ({ isSmoke }) => {
  const size = isSmoke ? Math.random() * 40 + 20 : Math.random() * 6 + 2; // Smoke width
  const height = isSmoke ? size * 2.5 : size; // Smoke is taller than it is wide
  const delay = Math.random() * 10;
  const duration = Math.random() * 12 + 12;
  const xStart = Math.random() * 100;

  if (isSmoke) {
    // This is our new, streaky smoke particle
    return (
      <motion.div
        className="absolute bottom-0"
        style={{
          width: size,
          height: height, // Using the new taller height
          left: `${xStart}%`,
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
          filter: 'blur(5px)',
        }}
        initial={{ y: '10vh', opacity: 0 }}
        animate={{
          y: '-100vh',
          opacity: [0, 0.3, 0], 
          scale: [1, 1.25, 1.5],
          // This animates the shape to make it billow and streak
          borderRadius: [
            "50% 50% 30% 70% / 50% 50% 70% 30%",
            "30% 70% 50% 50% / 70% 30% 50% 50%",
            "50% 50% 60% 40% / 40% 60% 50% 50%",
            "50% 50% 30% 70% / 50% 50% 70% 30%", // Loop back to the start
          ]
        }}
        transition={{
          delay,
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    );
  }

  // This is the same ember particle as before
  return (
    <motion.div
      className="absolute bottom-0 bg-brand-orange rounded-full"
      style={{
        width: size,
        height: size,
        left: `${xStart}%`,
        filter: 'blur(2px)',
      }}
      initial={{ y: 0, opacity: 0.7 }}
      animate={{ y: '-100vh', opacity: [0.7, 1, 0] }}
      transition={{
        delay,
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }}
    />
  );
};

const RisingEmbers = () => {
  const particles = Array.from({ length: 40 }); // 25 embers, 15 smoke puffs

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <Particle key={i} isSmoke={i > 25} />
      ))}
    </div>
  );
};

export default RisingEmbers;