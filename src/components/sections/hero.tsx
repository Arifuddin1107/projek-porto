"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, Sparkles } from "lucide-react";
import useTypingEffect from "@/hooks/use-typing-effect";
import useMagnetic from "@/hooks/use-magnetic";

const professions = [
  "Full-Stack Web Developer",
  "PHP & CodeIgniter 4 Specialist",
  "Machine Learning Enthusiast",
  "Digital Web & Retail Solutions",
];

export default function Hero() {
  const typedText = useTypingEffect(professions, 70, 30, 2500);

  // Magnetic button references
  const cvBtnRef = useMagnetic(0.3) as React.RefObject<HTMLAnchorElement>;
  const contactBtnRef = useMagnetic(0.3) as React.RefObject<HTMLAnchorElement>;

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-background overflow-hidden px-6 pt-20"
    >
      {/* Cyber overlay grid */}
      <div className="cyber-grid" />

      {/* Glow blobs */}
      <div className="glow-primary top-1/4 left-1/4 w-[350px] h-[350px] opacity-20" />
      <div className="glow-secondary bottom-1/4 right-1/4 w-[400px] h-[400px] opacity-15" />

      {/* Hero Content */}
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center z-10 relative">
        
        {/* Sparkle badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-white/10 mb-6 bg-white/5"
        >
          <Sparkles className="w-4 h-4 text-secondary animate-pulse-slow" />
          <span className="text-xs font-semibold text-gray-300 font-sans uppercase tracking-widest">
            Welcome to my tech universe
          </span>
        </motion.div>

        {/* Big Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-5xl md:text-8xl font-black font-sans tracking-tight mb-4 select-none leading-tight"
        >
          <span className="text-white">Arifuddin </span>
          <span className="text-gradient-primary">Juddah</span>
        </motion.h1>

        {/* Animated Typing Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-3xl font-mono text-gray-300 mb-8 min-h-[40px] flex items-center justify-center gap-1.5"
        >
          <span className="text-secondary font-bold font-sans">&gt;</span>
          <span className="text-gray-100 font-semibold">{typedText}</span>
          <span className="w-1.5 h-6 bg-primary-light animate-pulse-slow inline-block" />
        </motion.div>

        {/* Brief Professional Bio */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base md:text-xl text-gray-400 max-w-2xl font-sans leading-relaxed mb-10"
        >
          Spesialis dalam <strong className="text-white">Pengembangan Aplikasi Web, Sistem Informasi, dan Website Modern</strong> berkinerja tinggi. Mengubah gagasan & kebutuhan bisnis menjadi solusi digital yang responsif, cepat, dan inovatif.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center gap-5 justify-center"
        >
          {/* Download CV */}
          <a
            ref={cvBtnRef}
            href="#about"
            className="btn-magnetic flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <span>Download CV</span>
            <Download className="w-4 h-4" />
          </a>

          {/* Contact Me */}
          <a
            ref={contactBtnRef}
            href="#contact"
            className="btn-magnetic flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-light text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/45 transition-all duration-300 hover:scale-[1.03] group"
          >
            <span>Contact Me</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* Mouse scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">
          Scroll Down
        </span>
        <div className="w-[18px] h-[32px] rounded-full border border-gray-600 flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 rounded-full bg-secondary"
          />
        </div>
      </motion.div>
    </section>
  );
}
