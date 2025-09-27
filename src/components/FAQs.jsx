import React from 'react';
import FadeIn from './FadeIn';

const FAQs = () => {
  return (
    <section id="faqs" className="py-24">
      <FadeIn>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-pixel text-brand-gold mb-6">
            FAQs
          </h2>
          <p className="text-lg text-gray-300">
            Your frequently asked questions and answers will appear in this section. Add enough content plss.
          </p>
        </div>
      </FadeIn>
    </section>
  );
};

export default FAQs;