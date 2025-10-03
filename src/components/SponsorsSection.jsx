import React from 'react';
import FadeIn from './FadeIn';
import { motion } from 'framer-motion';
import { CupSoda, Pizza, Code, Zap, Award } from 'lucide-react';

// NEW LOGO IMPORTS (Assumed to be in src/assets/)
import RedBullLogo from '../assets/redbull.png';
import DominosLogo from '../assets/Dominos.png';
import UnstopLogo from '../assets/Unstop.png';
import GFGLogo from '../assets/GFG.png'; 

const SponsorsSection = () => {
  const sponsors = [
    {
      category: "Beverage Partner",
      title: "Red Bull",
      description: "Unleash your inner coder! Red Bull provides the ultimate energy boost to keep your mind sharp through every challenge and coding round.",
      logo: RedBullLogo,
      icon: CupSoda,
      // --- UPDATED: Creamy white background ---
      themeColor: "bg-white/90", 
      glowColor: "shadow-red-500/30", // Softer glow for white background
    },
    {
      category: "Food Partner",
      title: "Domino's",
      description: "Fuel up for the coding battle! Enjoy delicious pizza/burger meals and vouchers to keep your energy high and your focus sharp during the event.",
      logo: DominosLogo,
      icon: Pizza,
      // --- UPDATED: Creamy white background ---
      themeColor: "bg-white/90", 
      glowColor: "shadow-gray-300/30", // Softer glow for white background
    },
    {
      category: "Hosting Partner",
      title: "Unstop",
      description: "Your arena for competition! Unstop provides the seamless hosting platform where you'll face off in thrilling quizzes, engaging contests, and competitive coding rounds.",
      logo: UnstopLogo,
      icon: Code,
      themeColor: "bg-blue-600/50", 
      glowColor: "shadow-blue-500/30",
    },
    {
      category: "Community Partner",
      title: "GeeksforGeeks",
      description: "Your community, your growth! GFG is our Community Partner, powering all quizzes, contests, and mentorship. Plus, score awesome merchandise from both GFG and Unstop!",
      logo: GFGLogo,
      icon: Award, 
      themeColor: "bg-green-700/50", 
      glowColor: "shadow-brand-orange/30",
    },
  ];

  const SponsorCard = ({ category, title, description, logo, icon: Icon, themeColor, glowColor }) => (
    <FadeIn delay={0.2} direction="down">
      <motion.div
        className={`flex flex-col items-center p-8 h-full rounded-2xl bg-black/60 border border-brand-gold/30 
                    shadow-xl ${glowColor} transition-all duration-500 hover:scale-[1.02]`}
        whileHover={{ translateY: -5 }}
      >
        <div 
          // Card for Logo: Adjusted to be rectangular/flexible for horizontal logos
          // --- UPDATED: Applying themeColor directly to this div ---
          className={`w-full max-w-xs p-4 ${themeColor} rounded-xl mb-6 border border-white/20 flex items-center justify-center`} 
          style={{ height: '100px' }} 
        >
            <img 
              src={logo} 
              alt={`${title} Logo`} 
              className="max-w-full max-h-full object-contain" 
              onError={({ currentTarget }) => { 
                currentTarget.onerror = null; 
                currentTarget.style.display = 'none';
                currentTarget.parentNode.innerHTML = `<${Icon.name} class="w-12 h-12 text-black" />`; // Black icon for light background
              }}
            />
        </div>

        <h4 className="text-sm font-nav uppercase tracking-widest text-brand-gold mb-2">{category}</h4>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-center text-gray-400 text-base flex-grow">{description}</p>
      </motion.div>
    </FadeIn>
  );

  return (
    <section id="sponsors" className="relative py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-pixel text-brand-gold mb-6">
            Our Esteemed Partners
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-12"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <SponsorCard key={index} {...sponsor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;