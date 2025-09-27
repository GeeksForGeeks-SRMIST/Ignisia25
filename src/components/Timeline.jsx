import React from 'react';
import FadeIn from './FadeIn';

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 bg-white/5">
      <FadeIn>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-pixel text-brand-gold mb-6">
            Event Timeline
          </h2>
          <p className="text-lg text-gray-300">
            The event schedule and timeline details will be displayed here. Add more content to make the page longer.
          </p>
        </div>
      </FadeIn>
    </section>
  );
};

export default Timeline;