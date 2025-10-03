import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
// import RisingEmbers from './RisingEmbers'; // Removed for performance
// Removed: import flamesImage from '../assets/flames.png';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is IGNISIA, and where and when will it be held?",
      answer: "IGNISIA 2025 is the flagship **Technical Workshop and Competitive Rounds** event, organized by the GeeksforGeeks SRM Student Chapter. It will be held on **13th October 2025, from 9:00 AM to 5:00 PM**, at the **GN Ramachandran Hall, SRMIST**."
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    },
    {
      id: 2,
      question: "What is the core focus of IGNISIA '25?",
      answer: "The central theme for IGNISIA '25 is **'Ultimate Placement Training & DSA'**. Sessions will focus on mastering resume and interview skills, simplifying Data Structures and Algorithms (DSA), and receiving personalized mentorship to help crack top tech company interviews."
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    },
    {
      id: 3,
      question: "Who can participate in IGNISIA?",
      answer: "IGNISIA is open to all students at **SRM University**, especially those in **CSE, IT**, and other branches interested in coding, tech, and problem-solving. The curriculum is designed to be beneficial for both beginners and advanced students."
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    },
    {
      id: 4,
      question: "What benefits and goodies are included in the event?",
      answer: "All participants will receive an official **E-Certificate** and **Gourmet Refreshments**. The event also includes competitive coding rounds with prizes, and attendees will receive **Exclusive Merchandise**."
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    },
    {
      id: 5,
      question: "Will OD (On-Duty) permissions be provided?",
      answer: "Yes, we understand the importance of attendance. We will provide the necessary supporting documentation and permissions to help all registered attendees secure **On-Duty (OD)** status from their respective departments for the full event duration."
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    },
    {
      id: 6,
      question: "How can I register for IGNISIA?",
      answer: "Registration details will be announced soon through official channels including the GeeksforGeeks SRM chapter and university notice boards. Keep an eye on our social media handles and the official website for registration links and deadlines. Early registration is recommended as seats are limited."
    },
    {
      id: 7,
      question: "What should I bring to the event?",
      answer: "Please bring your fully charged laptop with any necessary development environments installed, a notebook for taking notes, and your enthusiasm for learning! We will provide all other materials including learning resources and internet connectivity."
    },
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  // Component to safely render the HTML (including <strong> tags)
  const AnswerText = ({ text }) => (
    <p 
      className="text-gray-300 leading-relaxed" 
      dangerouslySetInnerHTML={{ __html: text }} 
    />
  );

  return (
    <section id="faqs" className="relative py-24 bg-black overflow-hidden">
      
      <FadeIn className="relative z-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-pixel text-brand-gold mb-6 leading-relaxed">
            {/* HEADING FIX: Increased line height with leading-relaxed class */}
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
                <motion.div
                  className={`overflow-hidden transition-all duration-300`}
                  initial={false}
                  animate={{ maxHeight: openFAQ === faq.id ? 500 : 0, opacity: openFAQ === faq.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-4">
                    {/* BOLD FIX: Using AnswerText component to render HTML/bold tags */}
                    <AnswerText text={faq.answer} />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

        </div>
      </FadeIn>

    </section>
  );
};

export default FAQs;
