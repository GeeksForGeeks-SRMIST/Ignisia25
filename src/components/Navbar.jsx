import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IgnisiaLogo from './PhoenixLogo';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#faqs', label: 'FAQs' },
  ];

  const textAnimation = {
    hidden: { width: 0, opacity: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    visible: { width: 'auto', opacity: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <>
      <nav className="fixed top-4 w-full z-50 flex justify-center h-16 items-center px-4">
        <motion.div
          layout
          transition={{ duration: 0.4, type: 'spring', stiffness: 120, damping: 20 }}
          className="flex items-center justify-between rounded-full 
                     bg-black/50 backdrop-blur-md border border-brand-glow/50 
                     shadow-inner-glow"
        >
          {/* Left Side: Logo and Title */}
          <div className="flex items-center gap-3 h-16 pl-4 pr-2">
            <a href="#home" aria-label="Homepage">
              <motion.div layout="position">
                <IgnisiaLogo className="w-7 h-7 text-brand-orange" />
              </motion.div>
            </a>
            <motion.div
              variants={textAnimation}
              animate={isScrolled ? 'hidden' : 'visible'}
              className="overflow-hidden"
            >
              <span className="text-lg font-bold font-pixel text-brand-orange whitespace-nowrap">IGNISIA'25</span>
            </motion.div>
          </div>

          {/* Center: Nav Links */}
          <motion.div
            variants={textAnimation}
            animate={isScrolled ? 'hidden' : 'visible'}
            className="hidden md:flex items-center gap-2 overflow-hidden"
          >
            <div className="w-px h-6 bg-white/10" />
            {navLinks.map((link) => (
              // UPDATED: Added font-nav, font-bold, and tracking-wider
              <a key={link.label} href={link.href} className="px-3 py-2 text-sm font-nav font-bold tracking-wider uppercase text-brand-gold hover:text-brand-orange transition-colors">
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Right Side: Button and Mobile Menu */}
          <div className="flex items-center pl-2 pr-4">
            <button className="hidden md:block ml-2 px-4 py-2 rounded-full text-sm font-nav font-bold uppercase text-white bg-brand-orange hover:bg-opacity-90 transition-all duration-300 whitespace-nowrap">
              Register Now
            </button>
            <div className="md:hidden ml-1">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2" aria-label="Toggle menu">
                {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 w-[95%] left-1/2 -translate-x-1/2 md:hidden bg-brand-dark/95 backdrop-blur-lg rounded-xl shadow-lg border border-white/10 z-40"
          >
            <div className="flex flex-col p-4">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base font-nav font-bold uppercase text-brand-gold hover:text-brand-orange hover:bg-black/20">
                  {link.label}
                </a>
              ))}
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="block mt-2 px-3 py-3 rounded-lg text-base font-nav font-bold uppercase text-center text-white bg-brand-orange hover:bg-opacity-90">
                Register Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;