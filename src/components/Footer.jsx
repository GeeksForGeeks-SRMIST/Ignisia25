import React from 'react';
import FadeIn from './FadeIn';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

// Import sponsor logos
import srmLogo from '../assets/srmlogo.png';
import gfgLogo from '../assets/gfglogo.png';

const Footer = () => {
  const socialLinks = [
    { href: 'https://www.instagram.com/gfgsrmist/?hl=en', icon: FaInstagram, label: 'Instagram' },
    { href: 'https://www.linkedin.com/company/gfgsrmist/posts/?feedView=all', icon: FaLinkedin, label: 'LinkedIn' },
    { href: 'mailto:gfg@srmist.edu.in', icon: HiMail, label: 'Email' },
  ];

  const footerNavLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#faqs', label: 'FAQs' },
  ];

  return (
    <footer className="w-full flex justify-center p-4 sm:p-6 md:p-8 mt-auto">
      <FadeIn direction="up" delay={0.2} className="w-full max-w-7xl">
        <div className="w-full bg-black/50 backdrop-blur-lg border border-brand-glow/50 rounded-3xl p-8 
                       shadow-inner-glow"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
            {/* Column 1: Branding */}
            <div className="md:col-span-1 flex flex-col items-center md:items-start">
              {/* UPDATED: Image replaced with text and new font */}
              <h3 className="text-2xl font-bold font-pixel text-brand-orange mb-2">
                IGNISIA
              </h3>
              <p className="font-nav text-sm text-gray-400">
                The flagship event by GeeksForGeeks SRMIST.
              </p>
            </div>

            {/* Column 2: Quick Links (Centered) */}
            <div className="md:col-span-1 flex flex-col items-center">
              {/* UPDATED: Heading font changed */}
              <h4 className="font-bold font-pixel uppercase tracking-wider text-brand-gold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerNavLinks.map(link => (
                  <li key={link.label}>
                    {/* UPDATED: Link font changed */}
                    <a 
                      href={link.href} 
                      className="inline-block px-3 py-1 rounded-full font-nav bg-brand-dark/50 text-gray-400 hover:bg-brand-orange/20 hover:text-brand-orange hover:scale-105 transition-all duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Socials and Powered By (Right-aligned) */}
            <div className="md:col-span-1 flex flex-col items-center md:items-end gap-8">
              <div className="flex flex-col items-center md:items-end">
                {/* UPDATED: Heading font changed */}
                <h4 className="font-bold font-pixel uppercase tracking-wider text-brand-gold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-brand-dark hover:bg-brand-orange/20 text-brand-gold hover:text-brand-orange transition-all duration-200 group"
                        aria-label={link.label}
                      >
                        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col items-center md:items-end">
                  {/* UPDATED: Heading font changed */}
                  <h4 className="font-bold font-pixel uppercase tracking-wider text-brand-gold mb-4">Powered By</h4>
                  <div className="flex items-center gap-6">
                      <img src={srmLogo} alt="SRMIST Logo" className="h-[4.5rem]" />
                      <img src={gfgLogo} alt="GeeksForGeeks Logo" className="h-8" />
                  </div>
              </div>
            </div>

          </div>

          <div className="mt-8 pt-8 border-t border-white/10 w-full flex justify-center">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} GeeksForGeeks SRMIST. All rights reserved.
            </p>
          </div>
            
        </div>
      </FadeIn>
    </footer>
  );
};

export default Footer;