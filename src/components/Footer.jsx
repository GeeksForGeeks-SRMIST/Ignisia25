import React from "react";
import FadeIn from "./FadeIn";
import { Youtube, Instagram, Linkedin } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import gfgLogo from "../assets/gfglogo.webp";

const Footer = () => {
  const speakerSocials = [
    {
      href: "https://www.instagram.com/its.anu.sharma/",
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/in/anu-sharma-2002/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://www.youtube.com/@AnuSharma02",
      icon: Youtube,
      label: "YouTube",
    },
  ];

  const footerNavLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About IGNISIA" },
    { href: "#speaker", label: "Our Guest" },
    { href: "#timeline", label: "Timeline" },
    { href: "#faqs", label: "FAQs" },
  ];

  const partnersList = [
    { name: "GeeksforGeeks" },
    { name: "Unstop" },
    { name: "Red Bull" },
    { name: "Domino's" },
  ];

  const speakerName = "Anu Sharma";
  const speakerTitle = "SWE @ Google, TEDx Speaker";
  const speakerDescription =
    "Internationally recognized SWE @ Google and TEDx speaker, Anu guides 500+ professionals in DSA for placement readiness.";

  return (
    <footer className="w-full flex justify-center p-4 sm:p-6 md:p-8 mt-12">
      <FadeIn direction="up" delay={0.2} className="w-full max-w-7xl">
        <div
          className="w-full bg-black/50 backdrop-blur-lg border border-brand-glow/50 rounded-3xl p-8 md:p-12
                     shadow-inner-glow"
        >
          {/* Main grid with updated responsive breakpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 text-left">
            {/* Column 1: Branding - Spans full width on sm/md, 1 col on lg */}
            <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-start">
              <h3 className="text-3xl font-bold font-pixel text-brand-orange mb-3">
                IGNISIA
              </h3>
              <p className="font-nav text-sm text-gray-400">
                The flagship tech workshop at SRMIST.
              </p>
              <div className="flex space-x-3 mt-4">
                {[
                  {
                    href: "https://www.instagram.com/gfgsrmist/",
                    icon: Instagram,
                    label: "GfG Instagram",
                  },
                  {
                    href: "https://www.linkedin.com/company/gfgsrmist/",
                    icon: Linkedin,
                    label: "GfG LinkedIn",
                  },
                ].map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-brand-dark hover:bg-brand-orange/20 text-brand-gold hover:text-brand-orange transition-all duration-200"
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col items-start">
              <h4 className="font-bold font-pixel uppercase tracking-wider text-brand-gold mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {footerNavLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-brand-orange transition-colors duration-200 text-sm font-nav"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Our Speaker */}
            <div className="flex flex-col items-start">
              <h4 className="font-bold font-pixel uppercase tracking-wider text-brand-gold mb-4">
                Our Speaker
              </h4>
              <h5 className="font-bold text-white text-lg mb-1">
                {speakerName}
              </h5>
              <p className="text-sm text-brand-orange mb-3">{speakerTitle}</p>
              <p className="text-xs text-gray-400 mb-4 max-w-xs">
                {speakerDescription}
              </p>
              <div className="flex space-x-3">
                {speakerSocials.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-brand-dark hover:bg-brand-gold/20 text-brand-gold hover:text-brand-orange transition-all duration-200 group"
                      aria-label={`Speaker ${link.label}`}
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Column 4: Our Partners - Right-aligned only on large screens */}
            <div className="flex flex-col items-start lg:items-end">
              <h4 className="font-bold font-pixel uppercase tracking-wider text-brand-gold mb-4">
                Our Partners
              </h4>
              <ul className="space-y-2 lg:text-right">
                {partnersList.map((item) => {
                  return (
                    <li
                      key={item.name}
                      className="flex items-center lg:justify-end"
                    >
                      <span className="font-nav text-sm text-white hover:text-brand-orange transition-colors duration-200">
                        {item.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-8 pt-6 border-t border-white/10 w-full flex justify-center">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} GeeksForGeeks SRMIST. All rights
              reserved.
            </p>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
};

export default Footer;
