import React from 'react';
import FadeIn from './FadeIn';

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center text-center">
      <FadeIn delay={0.2}>
        <h1 className="text-6xl md:text-8xl font-black font-pixel text-brand-orange tracking-wider" style={{ textShadow: '0 0 15px rgba(249, 115, 22, 0.5)' }}>
          IGNISIA '25
        </h1>
        <p className="text-xl md:text-2xl text-brand-gold mt-4">
          The Flagship Event by GeeksForGeeks SRMIST
        </p>
      </FadeIn>
    </section>
  );
};

export default Hero;