import React from 'react';
import FadeIn from './FadeIn';
// UPDATED: Replaced FaTwitter with HiMail
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Footer = () => {
  const socialLinks = [
    { href: 'https://www.instagram.com/gfgsrmist/?hl=en', icon: FaInstagram, label: 'Instagram' },
    { href: 'https://www.linkedin.com/company/gfgsrmist/posts/?feedView=all', icon: FaLinkedin, label: 'LinkedIn' },
    // UPDATED: Changed Twitter to an Email link
    { href: 'mailto:gfg@srmist.edu.in', icon: HiMail, label: 'Email' },
  ];

  return (
    <footer className="w-full flex justify-center p-4 sm:p-6 md:p-8 mt-auto">
      <FadeIn direction="up" delay={0.2} className="w-full max-w-7xl">
        <div className="w-full bg-black/50 backdrop-blur-lg border border-brand-glow/50 rounded-3xl p-8 
                       shadow-inner-glow"
        >
          <div className="flex flex-col items-center text-center">
            
            <h3 className="text-2xl font-bold font-pixel text-brand-orange mb-4">
              IGNISIA '25
            </h3>
            
            <p className="text-sm text-gray-400 mb-6 max-w-md">
              The flagship event by GeeksForGeeks SRMIST. Join us for a journey of code, creativity, and collaboration.
            </p>

            <div className="flex space-x-4 mb-8">
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

            <div className="pt-8 border-t border-white/10 w-full flex flex-col items-center">
              <p className="text-xs text-gray-500 flex items-center">
                &copy; {new Date().getFullYear()} GeeksForGeeks SRMIST. All rights reserved.
              </p>
            </div>
            
          </div>
        </div>
      </FadeIn>
    </footer>
  );
};

export default Footer;