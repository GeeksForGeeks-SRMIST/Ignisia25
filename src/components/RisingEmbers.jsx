import React from 'react';
import { motion } from 'framer-motion';

const Particle = ({ isSmoke }) => {
  const size = isSmoke ? Math.random() * 40 + 20 : Math.random() * 6 + 2;
  const height = isSmoke ? size * 2.5 : size;
  const delay = Math.random() * 10;
  const duration = Math.random() * 12 + 12;
  const xStart = Math.random() * 100;

  if (isSmoke) {
    return (
      <motion.div
        className="absolute bottom-0"
        style={{
          width: size,
          height: height,
          left: `${xStart}%`,
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
          filter: 'blur(5px)',
        }}
        initial={{ y: '10vh', opacity: 0 }}
        animate={{
          y: '-100vh',
          opacity: [0, 0.3, 0], 
          scale: [1, 1.25, 1.5],
          borderRadius: [
            "50% 50% 30% 70% / 50% 50% 70% 30%",
            "30% 70% 50% 50% / 70% 30% 50% 50%",
            "50% 50% 60% 40% / 40% 60% 50% 50%",
            "50% 50% 30% 70% / 50% 50% 70% 30%",
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
  // UPDATED: Reduced the number of particles from 40 to 25 for better performance
  const particles = Array.from({ length: 25 }); // 15 embers, 10 smoke puffs

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <Particle key={i} isSmoke={i > 15} />
      ))}
    </div>
  );
};

export default RisingEmbers;