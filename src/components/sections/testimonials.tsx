"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Quote, ChevronLeft, ChevronRight, Star, Sparkles } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  relation: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Ir. Andi Pratama, M.T.",
    role: "Peneliti Senior & Kepala Laboratorium AI",
    relation: "Riset CNN Motif Bugis",
    quote: "Arifuddin menunjukkan dedikasi yang luar biasa dalam riset klasifikasi citra tenun sutera Bugis. Pendekatan augmentasi data dan model CNN kustom yang dirancangnya sangat orisinal dan berhasil mencapai akurasi luar biasa sebesar 98.26%.",
    rating: 5,
  },
  {
    id: 2,
    name: "Hj. Rosdiana, S.E.",
    role: "Pemilik Galeri Tenun & Kerajinan Lokal",
    relation: "E-Commerce Lokal",
    quote: "Platform e-commerce lokal CelebesArt yang dibangun Arifuddin sangat membantu digitalisasi karya pengrajin daerah kami. Tampilan katalognya elegan, pemesanan via payment gateway sangat mulus, dan penjualan online kami meningkat signifikan.",
    rating: 5,
  },
  {
    id: 3,
    name: "H. Bambang Kurniawan",
    role: "Owner Toko Retail & Minimarket Mandiri",
    relation: "Sistem Kasir (POS)",
    quote: "Aplikasi POS berbasis web ini membuat proses transaksi kasir toko kami jauh lebih cepat dan akurat. Manajemen stok barang otomatis dan dashboard finansial real-time sangat membantu kami mengontrol laba dan operasional harian.",
    rating: 5,
  },
  {
    id: 4,
    name: "Muhammad Fadel, S.Sos.",
    role: "Ketua Umum HIPERMAWA Cabang Parepare",
    relation: "Web Sistem HIPERMAWA",
    quote: "Sistem informasi HIPERMAWA yang dibangun Arifuddin sukses merevolusi administrasi keorganisasian kami. Pendataan kader dan pengarsipan berkas digital kini 100% paperless, tertata rapi, dan informasi warta organisasi tersampaikan secara luas.",
    rating: 5,
  },
  {
    id: 5,
    name: "Ustadz Ahmad Fauzi, S.Pd.I.",
    role: "Guru PAI SMP & Praktisi Pendidikan Islam",
    relation: "Aplikasi Kuis Sahabat PAI",
    quote: "Platform kuis Sahabat PAI membuat evaluasi pembelajaran agama Islam jadi sangat dinamis dan interaktif. Fitur Kuis Balapan (Room) terbukti memacu antusiasme belajar siswa, sementara rekap nilai otomatis sangat memudahkan tugas kami para guru.",
    rating: 5,
  },
  {
    id: 6,
    name: "Hendra Wijaya, S.T.",
    role: "Head of People & Technology TechNova",
    relation: "Portal Karier TechNova",
    quote: "Pengembangan portal karier TechNova oleh Arifuddin menghadirkan antarmuka rekrutmen yang sangat modern, bersih, dan cepat. Fitur eksplorasi lowongan dan visualisasi metrik budaya kerja berhasil meningkatkan reputasi employer branding kami.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Auto-slide every 6s

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative w-full py-24 px-6 bg-background">
      {/* Background glow bloops */}
      <div className="glow-primary top-1/4 right-1/4 w-[350px] h-[350px] opacity-10" />
      <div className="glow-secondary bottom-1/4 left-1/4 w-[300px] h-[300px] opacity-10" />

      <div className="max-w-4xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-secondary mb-3 flex items-center gap-1.5">
            <MessageSquare className="w-4 h-4" />
            <span>07 . Testimoni</span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-black font-sans tracking-tight mb-4">
            Tanggapan <span className="text-gradient-primary">Rekan & Kolaborator</span>
          </h3>
          <p className="max-w-2xl text-sm md:text-base text-gray-400 font-sans leading-relaxed">
            Pengalaman dan ulasan dari para dosen pembimbing, pemilik usaha, pimpinan organisasi, dan praktisi yang telah berkolaborasi dalam berbagai proyek teknologi.
          </p>
        </div>

        {/* Carousel Card Container */}
        <div
          className="relative min-h-[320px] md:min-h-[270px] flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            {testimonials.map((test, index) => {
              if (index !== activeIndex) return null;
              return (
                <motion.div
                  key={test.id}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="glass-card p-8 md:p-12 border-white/5 bg-white/[0.03] relative w-full shadow-2xl shadow-black/40 rounded-2xl"
                >
                  {/* Decorative Quote mark */}
                  <Quote className="absolute top-6 right-8 w-16 h-16 text-primary-light/10 pointer-events-none" />

                  {/* Rating Stars & Project Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-secondary bg-secondary/10 border border-secondary/25 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-secondary" />
                      {test.relation}
                    </span>
                  </div>

                  {/* Quote Paragraph */}
                  <p className="text-base md:text-lg text-gray-200 font-sans italic leading-relaxed mb-8 relative z-10">
                    &ldquo;{test.quote}&rdquo;
                  </p>

                  {/* Profile info footer */}
                  <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-6">
                    <div className="flex items-center gap-3.5">
                      {/* Avatar Initials */}
                      <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-primary/30 to-secondary/30 border border-secondary/30 flex items-center justify-center text-white font-bold font-mono text-sm shrink-0">
                        {test.name
                          .split(" ")
                          .filter((w) => !w.includes(".") && w.length > 1)
                          .slice(0, 2)
                          .map((n) => n[0])
                          .join("") || test.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg font-bold font-sans text-white">
                          {test.name}
                        </h4>
                        <p className="text-xs text-gray-400 font-sans mt-0.5">
                          {test.role}
                        </p>
                      </div>
                    </div>

                    {/* Slide counter */}
                    <span className="text-xs font-mono text-gray-500 hidden sm:inline-block">
                      {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
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
                  activeIndex === idx ? "w-8 bg-secondary shadow-[0_0_8px_#06b6d4]" : "w-2.5 bg-white/20 hover:bg-white/40"
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
