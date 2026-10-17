"use client";

import { motion } from "framer-motion";
import { Codepen, ShieldAlert, Cpu } from "lucide-react";

const techItems = [
  { name: "Next.js 15", category: "Frontend" },
  { name: "React 19", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Python", category: "Language" },
  { name: "TensorFlow", category: "Machine Learning" },
  { name: "PyTorch", category: "Machine Learning" },
  { name: "Keras", category: "Machine Learning" },
  { name: "OpenCV", category: "Computer Vision" },
  { name: "FastAPI", category: "Backend" },
  { name: "Flask", category: "Backend" },
  { name: "GSAP", category: "Animation" },
  { name: "Framer Motion", category: "Animation" },
  { name: "Docker", category: "DevOps" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MySQL", category: "Database" },
];

export default function TechStack() {
  // Double the list for infinite loop rendering
  const doubleTechItems = [...techItems, ...techItems, ...techItems];

  return (
    <section className="relative w-full py-16 bg-background overflow-hidden border-y border-white/5">
      {/* Light glow behind marquee */}
      <div className="glow-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[100px] opacity-10 blur-xl" />

      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <h4 className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-2">
          Technology Stack Ecosystem
        </h4>
        <h5 className="text-xl font-bold font-sans text-white">
          Alat & Pustaka yang Digunakan Sehari-hari
        </h5>
      </div>

      {/* Infinite Loop Marquee container */}
      <div className="relative flex items-center w-full overflow-hidden py-4">
        {/* Left and Right blur fading effects */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-15 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-15 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex gap-6 animate-marquee whitespace-nowrap hover:[animation-play-state:paused] cursor-pointer">
          {doubleTechItems.map((tech, idx) => (
            <div
              key={tech.name + idx}
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass-card border-white/5 bg-white/5 hover:border-secondary/20 transition-all duration-300 scale-95 hover:scale-100"
            >
              {/* Tech Icon substitute */}
              <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#06b6d4]" />
              
              <div className="flex flex-col">
                <span className="text-sm font-bold font-sans text-white">{tech.name}</span>
                <span className="text-[8px] font-mono text-gray-500 uppercase tracking-wider">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
