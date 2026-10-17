"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import useMagnetic from "@/hooks/use-magnetic";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Magnetic logo
  const logoRef = useMagnetic(0.2) as React.RefObject<HTMLAnchorElement>;

  useEffect(() => {
    const handleScroll = () => {
      // Toggle navbar background glow on scroll
      setScrolled(window.scrollY > 20);

      // Track active section based on scroll position
      const sections = navItems.map((item) => item.href.slice(1));
      let currentSection = "home";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If section is partially inside the viewport
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-background/50 border-b border-white/5 backdrop-blur-md"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          ref={logoRef}
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="relative text-xl font-bold font-sans tracking-widest text-white group flex items-center gap-1.5"
        >
          <span className="text-secondary font-mono">&lt;</span>
          <span>ARIFUDDIN</span>
          <span className="text-primary-light font-mono">/&gt;</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 glass-card rounded-full border border-white/5 bg-background/25">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative px-4 py-2 rounded-full text-sm font-sans tracking-wide transition-all duration-300 ${
                  isActive ? "text-white bg-white/10" : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="active-nav-dot" />
                )}
              </a>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary-light text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.03] group"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-400 hover:text-white rounded-full glass-card border-white/10"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[72px] bg-background/95 backdrop-blur-lg z-40 transition-all duration-500 lg:hidden ${
          mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-[calc(100vh-120px)] gap-6 p-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`text-2xl font-bold tracking-widest font-sans transition-colors duration-300 ${
                  isActive ? "text-primary-light" : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="mt-6 flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-light text-lg font-bold text-white shadow-xl shadow-primary/20 hover:scale-[1.03]"
          >
            <span>Contact Me</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
