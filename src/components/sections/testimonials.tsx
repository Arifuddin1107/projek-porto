"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  relation: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Ir. Andi Pratama, M.T.",
    role: "Peneliti Senior & Kepala Laboratorium AI",
    relation: "Pembimbing Riset CNN",
    quote: "Arifuddin menunjukkan dedikasi yang luar biasa dalam riset klasifikasi citra tenun sutera Bugis. Pendekatan augmentasi data dan optimasi CNN kustom yang dirancangnya sangat orisinal dan berhasil mencapai akurasi luar biasa sebesar 98.26%.",
  },
  {
    id: 2,
    name: "Hj. Rosdiana",
    role: "Pemilik Toko Kerajinan & Oleh-Oleh Lokal",
    relation: "Klien Website UMKM",
    quote: "Website katalog UMKM lokal berbasis CodeIgniter 4 yang dibangun Arifuddin sangat membantu pemasaran produk kami. Pembeli mudah melihat katalog dan melakukan pemesanan via WhatsApp & Payment Gateway.",
  },
  {
    id: 3,
    name: "H. Bambang Kurniawan",
    role: "Pemilik Toko Retail & Kelontong Jaya",
    relation: "Klien Sistem Utang Retail",
    quote: "Aplikasi pencatatan utang toko berbasis CI4 & MySQL sangat membantu operasional toko kami. Pencatatan kas bon pelanggan jadi rapi, akurat, dan fitur pengingat otomatisnya terbukti efisien.",
  },
  {
    id: 4,
    name: "Hendra Wijaya, S.T.",
    role: "Managing Director PT Inovasi Digital",
    relation: "Klien Company Profile",
    quote: "Desain website company profile yang dikembangkan Arifuddin sangat modern, cepat, dan elegan. Branding perusahaan kami terlihat jauh lebih profesional dan meningkatkan kepercayaan calon mitra bisnis.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto-slide every 5s

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative w-full py-24 px-6 bg-background">
      {/* Background glow bloops */}
      <div className="glow-primary top-1/4 right-1/4 w-[300px] h-[300px] opacity-10" />

      <div className="max-w-4xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-secondary mb-3 flex items-center gap-1.5">
            <MessageSquare className="w-4 h-4" />
            <span>07 . Testimoni</span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-black font-sans tracking-tight">
            Tanggapan <span className="text-gradient-primary">Rekan & Kolaborator</span>
          </h3>
        </div>

        {/* Carousel Card Container */}
        <div className="relative min-h-[300px] md:min-h-[250px] flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            {testimonials.map((test, index) => {
              if (index !== activeIndex) return null;
              return (
                <motion.div
                  key={test.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="glass-card p-8 md:p-12 border-white/5 bg-white/5 relative w-full"
                >
                  {/* Decorative Quote mark */}
                  <Quote className="absolute top-6 right-8 w-16 h-16 text-primary-light/5 pointer-events-none" />

                  <p className="text-base md:text-xl text-gray-300 font-sans italic leading-relaxed mb-8 relative z-10">
                    "{test.quote}"
                  </p>

                  <div className="flex items-center justify-between gap-4 border-t border-white/5 pt-6">
                    <div>
                      <h4 className="text-base md:text-lg font-bold font-sans text-white">
                        {test.name}
                      </h4>
                      <p className="text-xs text-gray-500 font-sans mt-0.5">
                        {test.role}
                      </p>
                    </div>
                    
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-secondary bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full">
                      {test.relation}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Control navigation indicators */}
        <div className="flex items-center justify-between mt-8 px-2">
          {/* Bullet Indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "w-8 bg-secondary" : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
