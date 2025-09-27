import React, { useState } from 'react'

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null)

  // Add custom styles for animations
  React.useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes slideInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes gradientX {
        0%, 100% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out;
      }
      
      .animate-slide-in-up {
        animation: slideInUp 0.6s ease-out;
      }
      
      .animate-gradient-x {
        background-size: 200% 200%;
        animation: gradientX 3s ease infinite;
      }
      
      .faq-item {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .faq-item:hover {
        transform: translateY(-2px);
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const faqs = [
    {
      question: "What is IGNISIA'25 and what will I learn?",
      answer: "IGNISIA'25 is a comprehensive placement training event focused on Data Structures and Algorithms. You'll learn essential DSA concepts, problem-solving strategies, interview techniques, and gain hands-on coding experience through our technical workshop. The event combines expert speaker sessions with practical workshops to ensure both theoretical knowledge and practical skills."
    },
    {
      question: "Who can attend this event?",
      answer: "IGNISIA'25 is open to all students interested in placement preparation and DSA learning. Whether you're a beginner just starting with programming or an experienced coder looking to sharpen your skills, this event is designed to benefit everyone. No prior experience is required for beginners, while advanced students can enhance their problem-solving abilities."
    },
    {
      question: "What's the difference between speaker sessions and the technical workshop?",
      answer: "Speaker sessions focus on industry insights, practical knowledge, and career guidance from experienced professionals. The technical workshop provides hands-on coding experience with real DSA problems, allowing you to practice what you've learned. This combination ensures both knowledge exchange and practical skill development."
    },
    {
      question: "Do I need to bring my laptop?",
      answer: "Yes, we recommend bringing your laptop for the technical workshop portion. You'll be coding hands-on during the workshop sessions, so having your own device will ensure you get the full experience. Make sure your laptop has a code editor installed (VS Code, Sublime Text, or any preferred editor)."
    },
    {
      question: "Will I receive a certificate?",
      answer: "Yes! All participants will receive a participation certificate upon completion of the event. This certificate can be valuable for your resume and demonstrates your commitment to learning DSA and placement preparation. The certificate will be issued by GeeksforGeeks SRM Chapter in collaboration with the School of Computing."
    },
    {
      question: "What programming languages will be covered?",
      answer: "The event will primarily focus on popular languages used in technical interviews, including C++, Java, and Python. However, the concepts taught are language-agnostic, so you can apply the DSA knowledge to any programming language. We'll provide examples in multiple languages to accommodate different preferences."
    },
    {
      question: "How long is the event and what's the schedule?",
      answer: "IGNISIA'25 is a full-day event running from 9:00 AM to 5:00 PM on October 13th, 2025. The day will be divided into speaker sessions in the morning, followed by the technical workshop in the afternoon. There will be breaks for refreshments and networking opportunities throughout the day."
    },
    {
      question: "Is there any cost to attend?",
      answer: "The event is free for all participants! GeeksforGeeks SRM Chapter, in collaboration with the School of Computing and Department of NWC, is organizing this as a free educational initiative to help students with placement preparation. Refreshments will also be provided at no cost."
    },
    {
      question: "What should I prepare before attending?",
      answer: "No specific preparation is required, but it would be helpful to have basic programming knowledge. If you're a complete beginner, don't worry - our speakers will cover fundamental concepts. For those with some experience, reviewing basic programming concepts and having a code editor ready on your laptop will be beneficial."
    },
    {
      question: "Will there be networking opportunities?",
      answer: "Absolutely! The event includes dedicated networking time during breaks and refreshments. You'll have the chance to connect with fellow students, speakers, and mentors. This is a great opportunity to build your professional network and learn from peers with similar career goals."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faqs" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-900 relative overflow-hidden">
      {/* Fire-themed background effects */}
      <div className="absolute inset-0">
        {/* Animated fire particles */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse opacity-70 shadow-lg shadow-red-500/50"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse opacity-60 shadow-lg shadow-orange-500/50"></div>
        <div className="absolute top-60 left-1/4 w-2.5 h-2.5 bg-gradient-to-r from-red-600 to-orange-600 rounded-full animate-pulse opacity-50 shadow-lg shadow-red-600/50"></div>
        <div className="absolute top-80 right-1/3 w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse opacity-40 shadow-lg shadow-orange-500/50"></div>
        <div className="absolute bottom-40 left-1/2 w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse opacity-60 shadow-lg shadow-red-500/50"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-full animate-pulse opacity-50 shadow-lg shadow-orange-600/50"></div>
        <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-gradient-to-r from-red-400 to-orange-400 rounded-full animate-pulse opacity-40 shadow-lg shadow-red-500/50"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2.5 h-2.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse opacity-50 shadow-lg shadow-orange-500/50"></div>
        
        {/* Floating fire embers */}
        <div className="absolute top-32 left-1/3 w-1 h-1 bg-red-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-64 right-1/4 w-1 h-1 bg-orange-400 rounded-full animate-ping opacity-50"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-red-500 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-64 right-1/3 w-1 h-1 bg-orange-500 rounded-full animate-ping opacity-60"></div>
      </div>

      {/* Fire gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/5 to-red-500/10 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-red-900/20"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 bg-clip-text text-transparent animate-gradient-x">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto mb-8 animate-scale-in"></div>
          <p className="text-xl md:text-2xl text-orange-300 font-semibold animate-fade-in-up-delay">
            Everything you need to know about IGNISIA'25
          </p>
        </div>

        {/* FAQs Container */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item bg-gradient-to-r from-red-900/20 to-orange-900/20 backdrop-blur-lg border border-red-500/30 rounded-3xl overflow-hidden shadow-2xl hover:shadow-red-500/30 hover:border-red-400/50 transition-all duration-500 hover:scale-[1.02] animate-fade-in-up relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Fire glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-3xl"></div>
                
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all duration-300 hover:bg-gradient-to-r hover:from-red-500/10 hover:to-orange-500/10 relative z-10"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-bold text-orange-200 pr-4 group-hover:text-orange-100 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-red-500/30 ${openIndex === index ? 'rotate-180 bg-gradient-to-r from-orange-500 to-red-500' : ''}`}>
                        <svg
                          className="w-6 h-6 text-white transition-transform duration-300"
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
                    </div>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6 animate-slide-in-up relative z-10">
                    <div className="border-t border-red-500/30 pt-4">
                      <p className="text-orange-200 text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 backdrop-blur-lg border border-red-500/30 rounded-3xl p-8 max-w-2xl mx-auto shadow-2xl hover:shadow-red-500/30 hover:border-red-400/50 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
            {/* Fire glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-orange-200 mb-4 animate-fade-in-up">
                Still have questions?
              </h3>
              <p className="text-orange-200 mb-6 animate-fade-in-up-delay">
                Can't find the answer you're looking for? Feel free to reach out to us!
              </p>
              <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 hover:bg-red-900/30 hover:border-red-400/40 transition-all duration-300 hover:scale-105">
                <p className="text-orange-200 mb-2">Contact us at:</p>
                <p className="text-orange-300 font-semibold text-lg hover:text-orange-200 transition-colors duration-300">gfg@srmist.edu.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQs