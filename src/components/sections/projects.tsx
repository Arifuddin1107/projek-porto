"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderGit2,
  ExternalLink,
  Github,
  X,
  Eye,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  CheckCircle2,
  Layers,
  Code2,
  Globe,
  Info,
} from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  githubLink: string;
  demoLink: string;
  metrics?: { label: string; value: string }[];
  highlights?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Pengenalan Motif Batik & Tenun Sutera Bugis Menggunakan CNN",
    category: "Machine Learning / AI",
    description: "Sistem klasifikasi cerdas bermodel CNN kustom untuk mengenalkan & membedakan 10+ kategori motif tenun khas Bugis (seperti Motif Cobo dan Sobbi Kdi) & Batik.",
    longDescription: "Penelitian dan implementasi model Convolutional Neural Network (CNN) untuk mengenali corak geometris pada tenun ikat sutera Bugis dan batik tradisional. Dilengkapi dengan proses augmentasi data (rotasi, zoom, shear) untuk menyeimbangkan sampel citra, ekstraksi fitur otomatis, dan antarmuka web interaktif untuk prediksi instan dari input file gambar.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask", "React", "Tailwind CSS"],
    image: "/images/image.png",
    githubLink: "https://github.com/ArifuddinJ/cnn-motif-bugis",
    demoLink: "https://motif-bugis-classifier.dev",
    metrics: [
      { label: "Akurasi Pengujian", value: "98.26%" },
      { label: "Jumlah Dataset", value: "2,400+ Citra" },
      { label: "Epoh Pelatihan", value: "50 Epochs" },
      { label: "Waktu Inferensi", value: "< 150ms" },
    ],
    highlights: [
      "Model klasifikasi CNN kustom dengan akurasi pengujian mencapai 98.26%",
      "Klasifikasi 10+ varian motif tenun ikat khas Bugis (Cobo, Sobbi Kdi, dll.) & Batik",
      "Pipeline augmentasi data citra dan ekstraksi fitur corak geometris otomatis",
      "Web demo interaktif untuk pengenalan motif instan via upload gambar",
    ],
  },
  {
    id: 2,
    title: "Website Digitalisasi & Katalog UMKM Lokal",
    category: "Web Development",
    description: "Platform web katalog produk interaktif untuk mempromosikan UMKM lokal ke pasar digital secara luas, responsif, dan profesional.",
    longDescription: "Platform website responsif yang dirancang khusus untuk mempromosikan produk UMKM lokal secara luas. Dilengkapi katalog produk interaktif, integrasi pemesanan langsung via WhatsApp API, lokasi toko Google Maps, serta manajemen konten landing page yang dioptimalkan untuk SEO dan kemudahan navigasi pengguna.",
    technologies: ["PHP", "CI4", "Tailwind CSS", "Payment Gateway"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    githubLink: "https://github.com/ArifuddinJ/website-umkm-lokal",
    demoLink: "https://umkm-lokal-demo.dev",
    metrics: [
      { label: "Lighthouse Score", value: "98/100" },
      { label: "Peningkatan Penjualan", value: "+40%" },
      { label: "Waktu Muat", value: "< 1.0s" },
      { label: "Responsif Mobile", value: "100%" },
    ],
    highlights: [
      "Katalog produk interaktif dengan pencarian dan filter kategori instan",
      "Integrasi pemesanan langsung terhubung ke WhatsApp API resmi penjual",
      "Penyematan navigasi lokasi toko fisik berbasis Google Maps API",
      "Optimasi performa & SEO berkecepatan tinggi dengan skor Lighthouse 98/100",
    ],
  },
  {
    id: 3,
    title: "Sistem Pencatatan Utang & Keuangan Toko Retail",
    category: "Fullstack Web App",
    description: "Sistem manajemen digital untuk mencatat transaksi kredit/utang pelanggan, pengingat jatuh tempo otomatis, dan rekap keuangan toko retail.",
    longDescription: "Aplikasi web modern yang membantu pemilik toko retail/kelontong mengelola pencatatan piutang dan utang pelanggan dengan rapi dan akurat. Menyediakan fitur pengingat otomatis via WhatsApp, riwayat transaksi lengkap, cetak struk digital, dashboard analitik arus kas, dan proteksi data berbasis enkripsi.",
    technologies: ["PHP", "MySQL", "CI4", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1556742049-0a67daf40955?auto=format&fit=crop&q=80&w=800",
    githubLink: "https://github.com/ArifuddinJ/pencatatan-utang-retail",
    demoLink: "https://utang-retail-app.dev",
    metrics: [
      { label: "Transaksi Dicatat", value: "10,000+" },
      { label: "Pengingat Otomatis", value: "WhatsApp" },
      { label: "Akurasi Kas", value: "99.9%" },
      { label: "Reduksi Tunggakan", value: "-35%" },
    ],
    highlights: [
      "Pencatatan mutasi piutang pelanggan dan saldo kas toko secara real-time",
      "Otomatisasi broadcast pengingat jatuh tempo piutang via WhatsApp Gateway",
      "Dashboard analitik perputaran kas, laba rugi, dan statistik kredit pelanggan",
      "Cetak invoice/struk digital dan proteksi data transaksi berbasis enkripsi",
    ],
  },
  {
    id: 4,
    title: "Website Sistem Informasi HIPERMAWA",
    category: "Web Development",
    description: "Sistem informasi organisasi berbasis web yang memfasilitasi pendataan kader/anggota, administrasi arsip digital, dan publikasi kegiatan terpadu.",
    longDescription: "Sistem Informasi HIPERMAWA (Himpunan Pelajar Mahasiswa Wajo) yang dirancang untuk mendigitalisasi proses tata kelola dan administrasi organisasi secara efisien. Dibangun menggunakan arsitektur MVC framework CodeIgniter 4 (CI4) yang ringan, cepat, dan handal, dipadukan dengan Tailwind CSS untuk menghasilkan antarmuka pengguna yang modern, bersih, serta responsif di berbagai perangkat. Dilengkapi dengan modul manajemen basis data keanggotaan, arsip surat dan dokumen digital, serta portal berita dan agenda kegiatan organisasi.",
    technologies: ["PHP", "CI4", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "/images/hipermawa.png",
    githubLink: "https://github.com/ArifuddinJ/sistem-informasi-hipermawa",
    demoLink: "https://hipermawa.org",
    metrics: [
      { label: "Framework", value: "CodeIgniter 4" },
      { label: "UI Styling", value: "Tailwind CSS" },
      { label: "Waktu Muat", value: "< 1.0s" },
      { label: "Responsif Browser", value: "All Devices" },
    ],
    highlights: [
      "Digitalisasi manajemen data kader, anggota, dan kepengurusan terpadu",
      "Sistem administrasi persuratan dan pengarsipan dokumen organisasi digital",
      "Portal publikasi berita, pengumuman resmi, dan agenda kegiatan organisasi",
      "Dibangun dengan arsitektur MVC CodeIgniter 4 (CI4) yang cepat & styling Tailwind CSS",
    ],
  },
];

// Project Card Component with 3D Tilt Effect
function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xc = rect.width / 2;
    const yc = rect.height / 2;

    const angleX = (yc - y) / 15; // Limit tilt angle X
    const angleY = (x - xc) / 15; // Limit tilt angle Y

    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card overflow-hidden border-white/5 hover:border-primary/30 transition-all duration-300 ease-out cursor-pointer group flex flex-col h-full"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative w-full h-48 md:h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />

        {/* Hover preview eye button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-4 rounded-full bg-gradient-to-r from-primary to-primary-light text-white shadow-lg flex items-center gap-2">
            <Eye className="w-5 h-5" />
            <span className="text-xs font-bold font-sans">Lihat Detail</span>
          </div>
        </div>

        {/* Category Badge */}
        <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full text-[10px] font-bold font-sans tracking-wide uppercase bg-black/60 backdrop-blur-md border border-white/10 text-secondary">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h4 className="text-lg md:text-xl font-bold font-sans text-white group-hover:text-secondary transition-colors duration-300 line-clamp-1 mb-2">
          {project.title}
        </h4>
        <p className="text-sm text-gray-400 font-sans leading-relaxed line-clamp-3 mb-6">
          {project.description}
        </p>

        {/* Technologies list */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono text-gray-500 bg-white/5 px-2.5 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[10px] font-mono text-gray-600 bg-white/5 px-2 py-1 rounded-md">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<"detail" | "tech">("detail");
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Find index of selected project
  const currentIndex = selectedProject
    ? projects.findIndex((p) => p.id === selectedProject.id)
    : -1;

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setActiveTab("detail");
    setImgError(false);
    setCopied(false);
  };

  const handlePrevProject = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    handleSelectProject(projects[prevIndex]);
  };

  const handleNextProject = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % projects.length;
    handleSelectProject(projects[nextIndex]);
  };

  const handleCopyLink = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedProject) return;
    const shareUrl = selectedProject.demoLink || (typeof window !== "undefined" ? window.location.href : "");
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  // Keyboard navigation (Esc to close, Left/Right arrow to navigate)
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      } else if (e.key === "ArrowLeft") {
        const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
        handleSelectProject(projects[prevIndex]);
      } else if (e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % projects.length;
        handleSelectProject(projects[nextIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, currentIndex]);

  return (
    <section id="projects" className="relative w-full py-24 px-6 bg-background/50">
      {/* Background glow bloops */}
      <div className="glow-secondary top-1/3 left-1/4 w-[350px] h-[350px] opacity-15" />
      <div className="glow-primary bottom-1/3 right-1/4 w-[400px] h-[400px] opacity-10" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-secondary mb-3 flex items-center gap-1.5">
            <FolderGit2 className="w-4 h-4" />
            <span>04 . Proyek Unggulan</span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-black font-sans tracking-tight">
            Karya & <span className="text-gradient-primary">Inovasi Digital</span>
          </h3>
        </div>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleSelectProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox / Modal Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-hidden">
            {/* Dark background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#030712]/85 backdrop-blur-md"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 28, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card w-full max-w-5xl max-h-[92vh] flex flex-col border border-white/10 z-10 relative bg-[#0b0f19]/95 shadow-2xl shadow-black/80 rounded-2xl overflow-hidden"
            >
              {/* Modal Top Header Bar */}
              <div className="px-5 md:px-8 py-4 border-b border-white/10 bg-white/[0.02] flex items-center justify-between shrink-0 gap-4">
                {/* Left: Category Badge & Project Index */}
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold font-mono tracking-wide uppercase bg-secondary/10 border border-secondary/25 text-secondary flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-secondary" />
                    {selectedProject.category}
                  </span>
                  <span className="text-xs font-mono text-gray-500 hidden sm:inline-block">
                    Proyek {String(currentIndex + 1).padStart(2, "0")} dari {String(projects.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Right: Quick actions & Navigation */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {/* Copy Link Button */}
                  <button
                    onClick={handleCopyLink}
                    title="Salin Tautan Proyek"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition-all duration-200"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 hidden sm:inline">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Salin Link</span>
                      </>
                    )}
                  </button>

                  <div className="h-4 w-px bg-white/10 mx-1 hidden sm:block" />

                  {/* Previous Project Button */}
                  <button
                    onClick={handlePrevProject}
                    title="Proyek Sebelumnya (←)"
                    className="p-1.5 sm:p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all duration-200"
                    aria-label="Previous Project"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {/* Next Project Button */}
                  <button
                    onClick={handleNextProject}
                    title="Proyek Berikutnya (→)"
                    className="p-1.5 sm:p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all duration-200"
                    aria-label="Next Project"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Close Modal Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    title="Tutup Modal (ESC)"
                    className="p-1.5 sm:p-2 ml-1 rounded-lg bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/30 text-gray-400 hover:text-red-400 transition-all duration-200 group"
                    aria-label="Close Modal"
                  >
                    <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
                  </button>
                </div>
              </div>

              {/* Modal Scrollable Body */}
              <div className="overflow-y-auto p-5 sm:p-6 md:p-8 flex-1 no-scrollbar">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedProject.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                  >
                    {/* Left Column: Visual & Quick Stats */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                      {/* Image Preview Container */}
                      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/40 shadow-xl group">
                        {!imgError ? (
                          <Image
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={() => setImgError(true)}
                          />
                        ) : (
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-primary/10 via-background to-secondary/10 text-center">
                            <FolderGit2 className="w-12 h-12 text-secondary mb-3 opacity-80" />
                            <span className="text-sm font-semibold text-white">{selectedProject.title}</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />

                        {/* Status Overlay */}
                        <div className="absolute bottom-3 left-3 flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider uppercase bg-black/70 backdrop-blur-md border border-white/10 text-gray-300">
                            Pratinjau Proyek
                          </span>
                        </div>
                      </div>

                      {/* Key Metrics / Hasil Kunci */}
                      {selectedProject.metrics && (
                        <div>
                          <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-3 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-secondary" />
                            <span>Metrik & Performa Kunci</span>
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            {selectedProject.metrics.map((metric) => (
                              <div
                                key={metric.label}
                                className="p-3.5 rounded-xl border border-white/5 bg-white/[0.03] hover:border-secondary/25 hover:bg-white/[0.06] transition-all duration-300 flex flex-col"
                              >
                                <span className="text-[10px] font-mono tracking-wider text-gray-400 uppercase">
                                  {metric.label}
                                </span>
                                <span className="text-lg md:text-xl font-bold font-sans text-secondary mt-1 tracking-tight">
                                  {metric.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Links */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        {/* Live Demo */}
                        <a
                          href={selectedProject.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-magnetic flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-light hover:brightness-110 text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Kunjungi Demo</span>
                        </a>

                        {/* GitHub */}
                        <a
                          href={selectedProject.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-sm font-semibold text-white transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                          <span>Kode GitHub</span>
                        </a>
                      </div>
                    </div>

                    {/* Right Column: Title, Tabs & Content */}
                    <div className="lg:col-span-7 flex flex-col">
                      {/* Project Title */}
                      <h3 className="text-2xl md:text-3xl font-black font-sans text-white mb-4 tracking-tight leading-snug">
                        {selectedProject.title}
                      </h3>

                      {/* Interactive Tab Switcher */}
                      <div className="flex p-1 rounded-xl bg-white/5 border border-white/10 w-fit mb-6">
                        <button
                          onClick={() => setActiveTab("detail")}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold font-sans transition-all duration-200 ${
                            activeTab === "detail"
                              ? "bg-gradient-to-r from-primary to-primary-light text-white shadow-md shadow-primary/20"
                              : "text-gray-400 hover:text-white"
                          }`}
                        >
                          <Info className="w-3.5 h-3.5" />
                          <span>Detail & Fitur Utama</span>
                        </button>
                        <button
                          onClick={() => setActiveTab("tech")}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold font-sans transition-all duration-200 ${
                            activeTab === "tech"
                              ? "bg-gradient-to-r from-primary to-primary-light text-white shadow-md shadow-primary/20"
                              : "text-gray-400 hover:text-white"
                          }`}
                        >
                          <Layers className="w-3.5 h-3.5" />
                          <span>Teknologi Digunakan</span>
                        </button>
                      </div>

                      {/* Tab Content */}
                      {activeTab === "detail" ? (
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">
                              Deskripsi Proyek
                            </h4>
                            <p className="text-gray-300 font-sans text-sm md:text-base leading-relaxed">
                              {selectedProject.longDescription}
                            </p>
                          </div>

                          {selectedProject.highlights && (
                            <div>
                              <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-3 flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5 text-secondary" />
                                <span>Fitur & Sorotan Utama</span>
                              </h4>
                              <div className="grid grid-cols-1 gap-2.5">
                                {selectedProject.highlights.map((highlight, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-start gap-3 p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-300 font-sans leading-relaxed">
                                      {highlight}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-3">
                              Daftar Stack & Library
                            </h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                              {selectedProject.technologies.map((tech) => (
                                <div
                                  key={tech}
                                  className="flex items-center gap-2 p-3 rounded-xl border border-white/5 bg-white/[0.03] hover:border-secondary/30 hover:bg-secondary/5 transition-all duration-200 group"
                                >
                                  <Code2 className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
                                  <span className="text-xs font-mono text-gray-200 font-medium">
                                    {tech}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                            <h5 className="text-xs font-mono uppercase tracking-widest text-secondary mb-2 flex items-center gap-1.5">
                              <Globe className="w-3.5 h-3.5" />
                              <span>Kategori & Implementasi</span>
                            </h5>
                            <p className="text-xs text-gray-400 font-sans leading-relaxed">
                              Proyek ini dikembangkan dengan arsitektur modular dan standar kode modern untuk memastikan maintainability, skalabilitas, serta kemudahan integrasi di masa mendatang.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Modal Bottom Footer Bar */}
              <div className="px-5 md:px-8 py-3.5 border-t border-white/10 bg-white/[0.02] flex items-center justify-between shrink-0 gap-4">
                {/* Dots indicator */}
                <div className="flex items-center gap-2">
                  {projects.map((p, idx) => (
                    <button
                      key={p.id}
                      onClick={() => handleSelectProject(p)}
                      title={p.title}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentIndex
                          ? "w-8 bg-secondary shadow-[0_0_8px_#06b6d4]"
                          : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Go to project ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Keyboard Shortcut Hints & Prev/Next */}
                <div className="flex items-center gap-4">
                  <div className="hidden md:flex items-center gap-2 text-[11px] font-mono text-gray-500">
                    <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">ESC</span>
                    <span>Tutup</span>
                    <span className="mx-1">•</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">←</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">→</span>
                    <span>Ganti Proyek</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrevProject}
                      className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-sans font-medium text-gray-300 hover:text-white transition-all duration-200 flex items-center gap-1"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Sebelumnya</span>
                    </button>
                    <button
                      onClick={handleNextProject}
                      className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-sans font-medium text-gray-300 hover:text-white transition-all duration-200 flex items-center gap-1"
                    >
                      <span className="hidden sm:inline">Berikutnya</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
