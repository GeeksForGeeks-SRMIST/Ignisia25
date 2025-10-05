import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import {
  Atom,
  Code,
  Award,
  Linkedin,
  Youtube,
  Activity,
  Zap,
  Briefcase,
  Star,
  GraduationCap,
} from "lucide-react";

// IMPORTANT: Importing Anu.png directly for the speaker image
import AnuImage from "../assets/Anu.webp";

const SpeakerSection = () => {
  const socialData = [
    // Updated social data for the highlights section (not the new link bar)
    {
      name: "Instagram",
      followers: "80K+",
      icon: Activity,
      color: "text-brand-orange",
    },
    {
      name: "YouTube",
      followers: "32.7K+",
      icon: Youtube,
      color: "text-red-500",
    },
    {
      name: "LinkedIn",
      followers: "160K+",
      icon: Linkedin,
      color: "text-blue-400",
    },
  ];

  // NEW: Dedicated Social Link Data for the bar below the profile
  const socialLinksBar = [
    {
      platform: "YouTube",
      url: "https://www.youtube.com/@AnuSharma02",
      icon: Youtube,
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/its.anu.sharma/",
      icon: Activity,
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/anu-sharma-2002/",
      icon: Linkedin,
    },
  ];

  const highlights = [
    {
      title: "SWE @ Google",
      description: "Specializing in Google Kubernetes Engine (GKE)",
      icon: Atom,
      color: "text-brand-gold",
    },
    {
      title: "3x SWE Internships",
      description: "Completed internships at Twitter, Google, and Intuit",
      icon: Briefcase,
      color: "text-brand-orange",
    },
    {
      title: "Global Recognition",
      description:
        "TEDx Speaker & featured on Times Square, NDTV, Business Insider",
      icon: Award,
      color: "text-brand-gold",
    },
    {
      title: "Mentor & Educator",
      description: "Trained 500+ professionals in DSA and tech concepts",
      icon: GraduationCap,
      color: "text-brand-orange",
    },
  ];

  return (
    <section
      id="speaker"
      className="relative pt-24 pb-36 bg-black overflow-hidden"
    >
      <FadeIn className="relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2.25rem,5vw,3rem)] font-bold font-pixel text-brand-gold mb-6">
              Meet Our Guest
            </h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* LEFT COLUMN: Profile and Social Links */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <FadeIn delay={0.3} direction="right">
                {/* Profile Card / Image Container */}
                <div className="relative w-72 h-72 mb-8 border-4 border-brand-gold/50 rounded-full overflow-hidden shadow-2xl shadow-brand-orange/40">
                  <img
                    src={AnuImage}
                    alt="Anu Sharma"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>

                {/* Profile Text Card */}
                <div className="text-center bg-black/50 p-6 rounded-xl border border-brand-glow/30 w-full max-w-sm mb-6">
                  <h3 className="text-3xl font-nav font-bold text-white">
                    Anu Sharma
                  </h3>
                  <p className="text-lg text-brand-gold mt-1">
                    Software Engineer @ Google
                  </p>
                </div>
              </FadeIn>

              {/* NEW CONTAINER: Social Links Bar */}
              <FadeIn delay={0.5} direction="up" className="w-full max-w-sm">
                <div className="flex justify-center space-x-6 p-4 bg-black/50 border border-brand-orange/30 rounded-xl shadow-lg shadow-brand-orange/10">
                  {socialLinksBar.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Anu Sharma ${link.platform}`}
                        className="p-3 rounded-full bg-brand-orange/20 text-brand-gold transition-colors hover:bg-brand-orange/40 hover:text-white"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.a>
                    );
                  })}
                </div>
              </FadeIn>
            </div>

            {/* RIGHT COLUMN: Structured Highlights */}
            <div className="lg:col-span-8">
              <FadeIn delay={0.5} direction="left">
                <p className="text-xl text-gray-300 mb-8 leading-relaxed border-l-4 border-brand-orange pl-4">
                  Anu Sharma is an internationally recognized Software Engineer
                  @ Google, TEDx speaker, and AI & Tech Content Creator. Her
                  career highlights provide a blueprint for success in the
                  competitive tech industry.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {highlights.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-5 bg-black/40 rounded-xl border border-brand-gold/20 transition-all duration-300 hover:bg-black/60"
                      >
                        <div
                          className={`p-3 rounded-full bg-brand-orange/20 flex-shrink-0 mt-1`}
                        >
                          <Icon className={`w-6 h-6 ${item.color}`} />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white">
                            {item.title}
                          </h4>
                          <p className="text-gray-400 text-sm mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Social Presence Card (Summary - kept for consistency) */}
                <div className="p-6 bg-black/50 border border-brand-orange/30 rounded-xl">
                  <h4 className="text-xl font-bold font-nav text-brand-orange mb-4 flex items-center">
                    <Activity className="w-5 h-5 mr-2" /> Social Influence
                    (300K+ Followers)
                  </h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {socialData.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <motion.div
                          key={index}
                          className="p-3 rounded-lg bg-black/60 border border-gray-700/50"
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 15px rgba(249, 115, 22, 0.3)",
                          }}
                        >
                          <p className="text-2xl font-bold text-white">
                            {social.followers}
                          </p>
                          <p
                            className={`text-xs uppercase mt-1 ${social.color}`}
                          >
                            {social.name}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default SpeakerSection;
