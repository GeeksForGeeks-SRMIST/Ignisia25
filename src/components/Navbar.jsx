import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Import logos
import GfgLogo from '../assets/gfg-logo.png';
import GfgTextLogo from '../assets/geeksforgeeks.png'; // Using the GfG text logo

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    // NEW LINK: Added the Sponsors section link
    { href: '#speaker', label: 'Guest' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#sponsors', label: 'Sponsors' },
    { href: '#faqs', label: 'FAQs' },
  ];

  const contentAnimation = {
    hidden: { width: 0, opacity: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    visible: { width: 'auto', opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  return (
    // FIX 1: Changed top-4 to top-0 and added padding-x for better positioning
    <nav className="fixed top-0 w-full z-50 flex justify-center items-center py-4 px-4"> 
      <motion.div
        layout
        transition={{ duration: 0.5, ease: 'easeInOut' }} // SIMPLIFIED EASE FUNCTION
        className="flex items-center justify-between rounded-full 
                   bg-black/80 backdrop-blur-lg border border-brand-glow/50 
                   shadow-inner-glow px-4 py-3" // CHANGE 2: Increased opacity to bg-black/80 and adjusted padding
      >
        {/* Left Side: GFG Logo and Name */}
        <div className="flex items-center gap-3"> {/* Removed h-16 */}
          <a href="#home" aria-label="Homepage">
            <motion.div layout="position">
              <img src={GfgLogo} alt="GeeksForGeeks SRMIST Logo" className="w-9 h-9 object-contain" />
            </motion.div>
          </a>
          <motion.div
            variants={contentAnimation}
            animate={isScrolled ? 'hidden' : 'visible'}
            className="overflow-hidden"
          >
            <img src={GfgTextLogo} alt="GeeksForGeeks Logo" className="h-[1.2rem]" />
          </motion.div>
        </div>

        {/* Center: Desktop-Only Nav Links */}
        <motion.div
          variants={contentAnimation}
          animate={isScrolled ? 'hidden' : 'visible'}
          className="hidden md:flex items-center gap-2 overflow-hidden"
        >
          <div className="w-px h-6 bg-white/10" />
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="px-3 py-2 text-sm font-nav font-bold tracking-wider uppercase text-brand-gold hover:text-brand-orange transition-colors">
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Right Side: Register Button */}
        <div className="flex items-center">
          <button className="ml-4 px-4 py-2 rounded-full text-sm font-nav font-bold uppercase text-white bg-brand-orange hover:bg-opacity-90 transition-all duration-300 whitespace-nowrap">
            Register Now
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;