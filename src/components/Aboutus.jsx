import React from 'react';
import FadeIn from './FadeIn';

const Aboutus = () => {
  return (
    <section id="about" className="py-24">
      <FadeIn>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-pixel text-brand-gold mb-6">
            About The Event
          </h2>
          <p className="text-lg text-gray-300">
            This is where you'll describe the event. whoever is working on this make it Good .
          </p>
        </div>
      </FadeIn>
    </section>
  );
};

export default Aboutus;