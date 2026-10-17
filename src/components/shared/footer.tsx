"use client";

import { ArrowUp, Github, Linkedin, Instagram, Twitter } from "lucide-react";
import useMagnetic from "@/hooks/use-magnetic";

const socialLinks = [
  { icon: Github, href: "https://github.com/ArifuddinJ", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/arifuddinjuddah", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/arifuddinj_", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/arifuddinj", label: "Twitter" },
];

export default function Footer() {
  const scrollBtnRef = useMagnetic(0.4) as React.RefObject<HTMLButtonElement>;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-white/5 bg-background py-12 px-6">
      {/* Glow effect in background */}
      <div className="glow-primary -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] opacity-25" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 z-10 relative">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-xl font-bold font-sans tracking-widest text-white">
            <span className="text-secondary font-mono">&lt;</span>
            <span>ARIFUDDIN</span>
            <span className="text-primary-light font-mono">/&gt;</span>
          </div>
          <p className="text-sm text-gray-500 font-sans mt-1">
            Machine Learning Engineer | Web Developer | Researcher
          </p>
        </div>

        {/* Social Media icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card border-white/10 hover:border-primary-light hover:text-primary-light text-gray-400 transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        {/* Scroll To Top & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          {/* Magnetic Back To Top Button */}
          <button
            ref={scrollBtnRef}
            onClick={scrollToTop}
            className="btn-magnetic p-4 rounded-full bg-gradient-to-tr from-primary to-primary-light hover:from-primary-light hover:to-accent text-white shadow-lg shadow-primary/20 hover:shadow-accent/40 transition-all duration-300"
            aria-label="Back To Top"
          >
            <ArrowUp className="w-5 h-5 animate-pulse-slow" />
          </button>
          
          <span className="text-xs text-gray-600 font-sans mt-2">
            &copy; {new Date().getFullYear()} Arifuddin Juddah. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
