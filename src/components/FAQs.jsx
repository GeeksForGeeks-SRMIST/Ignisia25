import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import RisingEmbers from './RisingEmbers';
import flamesImage from '../assets/flames.png';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is IGNISIA and when will it be held?",
      answer: "IGNISIA is a flagship level workshop hosted by GeeksforGeeks, starting annually from 2025 onwards. It's designed to be the biggest and most special tech workshop ever held at SRM University, featuring hands-on learning, industry expert interactions, tech talks, and much more."
    },
    {
      id: 2,
      question: "Who can participate in IGNISIA?",
      answer: "IGNISIA is open to all students at SRM University. Whether you're a beginner or an advanced programmer, there will be sessions and activities tailored to different skill levels. The event is designed to be inclusive and beneficial for everyone interested in technology and programming."
    },
    {
      id: 3,
      question: "What topics will be covered in IGNISIA?",
      answer: "IGNISIA will cover exciting and surprising topics that change each year. The workshop focuses on cutting-edge technologies, programming languages, software development practices, and industry-relevant skills. Specific topics will be announced closer to the event date."
    },
    {
      id: 4,
      question: "Will there be any prizes or certificates?",
      answer: "Yes! IGNISIA will offer various prizes, certificates, and recognition for participants. There will be coding competitions, project showcases, and other activities where you can win exciting prizes. All participants will receive certificates of participation, and winners will get special recognition and prizes."
    },
    {
      id: 5,
      question: "How can I register for IGNISIA?",
      answer: "Registration details will be announced soon through official channels including the GeeksforGeeks SRM chapter and university notice boards. Keep an eye on our social media handles and the official website for registration links and deadlines. Early registration is recommended as seats are limited."
    },
    {
      id: 6,
      question: "What should I bring to the event?",
      answer: "Please bring your laptop with necessary development environments installed, a notebook for taking notes, and your enthusiasm for learning! We'll provide all other materials including internet connectivity, refreshments, and learning resources. Make sure your laptop is charged and ready for hands-on coding sessions."
    },
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faqs" className="relative py-24 bg-black overflow-hidden">
      <RisingEmbers />
      
      <FadeIn className="relative z-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-pixel text-brand-gold mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Got questions about IGNISIA? We've got answers! Find everything you need to know about the event below.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-black/50 backdrop-blur-lg border border-brand-glow/30 rounded-lg overflow-hidden hover:border-brand-gold/50 hover:shadow-inner-glow transition-all duration-300"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-brand-gold transition-transform duration-300 ${
                        openFAQ === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
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

export default FAQs;