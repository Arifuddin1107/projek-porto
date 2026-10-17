"use client";

import { motion } from "framer-motion";
import { User, Award, CheckCircle, Code2, GraduationCap } from "lucide-react";
import Image from "next/image";

const stats = [
  {
    icon: Award,
    value: "1+",
    label: "Tahun Pengalaman",
    description: "Web Dev & AI",
    color: "text-primary-light",
  },
  {
    icon: CheckCircle,
    value: "5+",
    label: "Project Selesai",
    description: "Klasifikasi AI & Web",
    color: "text-secondary",
  },
  {
    icon: Code2,
    value: "10+",
    label: "Teknologi Dikuasai",
    description: "HTML, CSS, JS, React, Next.js, Git, Github",
    color: "text-primary",
  },
];

export default function About() {
  return (
    <section id="about" className="relative w-full py-24 px-6 bg-background">
      {/* Background glow */}
      <div className="glow-secondary top-1/2 left-0 w-[300px] h-[300px] opacity-10" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-secondary mb-3 flex items-center gap-1.5">
            <User className="w-4 h-4" />
            <span>01 . About Me</span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-black font-sans tracking-tight">
            Menembus Batas <span className="text-gradient-primary">Teknologi & Budaya</span>
          </h3>
        </div>

        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Professional Photo Container */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-[280px] h-[350px] md:w-[350px] md:h-[450px] rounded-2xl group"
            >
              {/* Outer Glowing Border */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary-light to-secondary opacity-30 blur-md rounded-2xl group-hover:opacity-70 transition-opacity duration-500" />
              
              {/* Image Frame */}
              <div className="absolute inset-1 rounded-2xl bg-[#080d1a] overflow-hidden border border-white/10 z-10">
                <Image
                  src="/images/profile.jpg"
                  alt="Arifuddin Juddah"
                  fill
                  sizes="(max-width: 768px) 280px, 350px"
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to placeholder if profile image is missing
                    const img = e.target as HTMLImageElement;
                    img.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600";
                  }}
                />
                
                {/* Tech scanlines effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-light/5 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Decorative Corner brackets */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-secondary z-20" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary z-20" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-accent z-20" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary-light z-20" />
            </motion.div>
          </div>

          {/* Right: Bio & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h4 className="text-xl md:text-2xl font-bold font-sans text-white mb-6">
                Halo, saya Arifuddin Juddah.
              </h4>
              <h6 className="text-sm md:text-sm font-bold font-sans text-white mb-6">Teknik Informatika | Web Development | Machine Learning Enthusiast</h6>
              <p className="text-gray-400 font-sans leading-relaxed mb-6">
                Saya berfokus pada pengembangan <strong className="text-white">aplikasi web yang modern, respomsof, dan ineraktif,</strong>, 
                serta memiliki ketertarikan dalam mengintegrasikan <strong className="text-white">Machine Learning dan Computer Science</strong>
                untuk membangun solusi digital yang inivatif dan relevan.
              </p>
              <p className="text-gray-400 font-sans leading-relaxed mb-8">
                Selain pengembangan web, saya memiliki pengalaman dalam penelitian Deep Learning, khususnya pada pengenalan dan klasifikasi 
                motif kain tradisional seperti Tenun Sutera Bugis dan Batik menggunakan arsitektur Convolutional Neural Network (CNN). 
                Penelitian ini merupakan bagian dari upaya saya untuk memanfaatkan teknologi kecerdasan buatan dalam mendukung pelestarian, dokumentasi, dan digitalisasi warisan budaya.
              </p>
             
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="glass-card p-4 flex flex-col items-center text-center border-white/5 bg-white/5"
                    >
                      <Icon className={`w-5 h-5 mb-2 ${stat.color}`} />
                      <span className="text-2xl font-black font-sans text-white mb-1">
                        {stat.value}
                      </span>
                      <span className="text-[10px] font-bold tracking-wider text-gray-300 font-sans uppercase">
                        {stat.label}
                      </span>
                      <span className="text-[9px] text-gray-500 font-mono mt-0.5">
                        {stat.description}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
