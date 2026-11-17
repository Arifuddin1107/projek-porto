"use client";

import { useState, useEffect } from "react";
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
  displayUrl?: string;
  metrics?: { label: string; value: string }[];
  highlights?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Pengenalan Motif Batik & Tenun Sutera Bugis Menggunakan CNN",
    category: "Machine Learning / AI",
    description: "Penelitian dan implementasi model Convolutional Neural Network (CNN) untuk mengenali corak geometris pada tenun ikat sutera Bugis dan batik tradisional. Dilengkapi dengan proses augmentasi data (rotasi, zoom, shear) untuk menyeimbangkan sampel citra, ekstraksi fitur otomatis, dan antarmuka web interaktif untuk prediksi instan dari input file gambar.",
    longDescription: "Sabbengku AI merupakan inovasi platform cerdas berbasis deep learning yang dirancang khusus untuk melestarikan corak warisan budaya tenun ikat sutera khas Bugis (Wajo & Sengkang) serta batik tradisional nusantara. Menggunakan arsitektur Convolutional Neural Network (CNN) kustom yang dilatih untuk mengenali pola geometris rumit seperti motif Cobo, Sobbi Kdi, dan varian tenun tradisional lainnya. Sistem ini dilengkapi pipeline preprocessing citra (augmentasi rotasi, zoom, shear) guna menyeimbangkan distribusi dataset, ekstraksi fitur tekstur otomatis, dan antarmuka web interaktif untuk klasifikasi cepat dan akurat langsung dari berkas foto.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask", "React", "Tailwind CSS"],
    image: "/images/image.png",
    githubLink: "https://github.com/ArifuddinJ/cnn-motif-bugis",
    demoLink: "https://motif-bugis-classifier.dev",
    displayUrl: "MOTIF-BUGIS-CLASSIFIER.DEV",
    metrics: [
      { label: "Akurasi Pengujian", value: "98.26%" },
      { label: "Jumlah Dataset", value: "2,400+ Citra" },
      { label: "Epoh Pelatihan", value: "50 Epochs" },
      { label: "Waktu Inferensi", value: "< 150ms" },
    ],
    highlights: [
      "Model klasifikasi CNN kustom dengan akurasi pengujian mencapai 98.26%",
      "Klasifikasi 10+ varian motif tenun ikat khas Bugis (Cobo, Sobbi Kdi, dll.) & Batik tradisional",
      "Pipeline augmentasi data citra (rotasi, zoom, shear) dan ekstraksi fitur corak geometris otomatis",
      "Antarmuka web interaktif untuk pengenalan motif instan serta interpretasi makna filosofis corak",
    ],
  },
  {
    id: 2,
    title: "E-Commerce Lokal",
    category: "Web Development",
    description: "Platform web katalog produk interaktif untuk mempromosikan UMKM lokal ke pasar digital secara luas, dilengkapi integrasi payment gateway serta tampilan yang responsif dan profesional.",
    longDescription: "Platform e-commerce dan katalog produk interaktif modern (CelebesArt) yang dibangun untuk mendigitalisasi serta mempromosikan produk-produk kerajinan, tenun, dan karya unggulan UMKM lokal Sulawesi Selatan ke kancah pasar digital nasional. Menyediakan katalog produk interaktif dengan fitur filter multi-kategori dan pencarian instan, sistem keranjang belanja terintegrasi, kalkulasi ongkos kirim otomatis, integrasi Payment Gateway resmi untuk pembayaran aman (QRIS, transfer bank, e-wallet), serta antarmuka landing page responsif yang dioptimalkan untuk SEO dan kemudahan konversi transaksi.",
    technologies: ["PHP", "CodeIgniter 4", "MySQL", "Tailwind CSS", "Payment Gateway", "JavaScript", "REST API"],
    image: "/images/ecommerce.png",
    githubLink: "https://github.com/ArifuddinJ/ecommerce-umkm-lokal",
    demoLink: "https://situssupercanggih.co.id",
    displayUrl: "WWW.SITUSSUPERCANGGIH.CO.ID",
    metrics: [
      { label: "Payment Gateway", value: "QRIS / Multi-pay" },
      { label: "Waktu Muat", value: "< 1.0s" },
      { label: "Optimasi Mobile", value: "100% Responsif" },
      { label: "Konversi UMKM", value: "+45%" },
    ],
    highlights: [
      "Katalog produk interaktif dengan filter multi-kategori dan pencarian produk real-time",
      "Integrasi Payment Gateway multi-channel aman dengan verifikasi pembayaran instan",
      "Manajemen keranjang belanja, checkout terpadu, dan integrasi kurir pengiriman",
      "Desain antarmuka modern bernuansa gelap elegan yang dioptimalkan untuk pengalaman belanja mobile",
    ],
  },
  {
    id: 3,
    title: "Sistem Kasir (POS)",
    category: "Sistem Kasir & POS",
    description: "Aplikasi Point of Sale berbasis web untuk mempercepat transaksi penjualan harian, manajemen stok barang secara otomatis, cetak struk kasir, serta laporan omzet real-time",
    longDescription: "Aplikasi Point of Sale (POS) dan manajemen retail terpadu berbasis web (Antigravity Retail) yang dirancang untuk mengoptimalkan efisiensi transaksi penjualan harian dan modernisasi tata kelola toko. Dilengkapi Dashboard Eksekutif & Finansial untuk memantau omzet harian, total HPP, laba kotor, dan tren grafik laba 7 hari terakhir secara langsung. Menyediakan integrasi barcode scanner untuk transaksi kasir kilat, peringatan stok menipis otomatis (Stock Minimum Alert), pencatatan piutang pelanggan, cetak struk kasir termal langsung via browser, serta ekspor laporan keuangan terperinci.",
    technologies: ["PHP", "CodeIgniter 4", "MySQL", "Tailwind CSS", "Chart.js", "Thermal Printer API"],
    image: "/images/pos.png",
    githubLink: "https://github.com/ArifuddinJ/pos-retail-system",
    demoLink: "https://situssupercanggih.co.id",
    displayUrl: "WWW.SITUSSUPERCANGGIH.CO.ID",
    metrics: [
      { label: "Kecepatan Kasir", value: "< 5 Detik" },
      { label: "Akurasi Stok", value: "99.9% Real-time" },
      { label: "Dashboard Finansial", value: "Real-time" },
      { label: "Kapasitas SKU", value: "Unlimited SKU" },
    ],
    highlights: [
      "Dashboard Eksekutif & Finansial real-time: analitik omzet, HPP, laba kotor, dan grafik tren mingguan",
      "Modul kasir Point of Sale kilat dengan dukungan barcode scanner dan cetak struk termal",
      "Manajemen stok barang otomatis dengan fitur peringatan dini produk menipis (Stock Minimum Alert)",
      "Pencatatan mutasi piutang pelanggan, rekapitulasi shift kasir, dan laporan laba rugi terpadu",
    ],
  },
  {
    id: 4,
    title: "Web Sistem HIPERMAWA",
    category: "Web Development",
    description: "Sistem informasi organisasi terpadu untuk memfasilitasi pendataan kader dan anggota, pengelolaan administrasi arsip digital, serta publikasi kegiatan resmi organisasi.",
    longDescription: "Sistem Informasi HIPERMAWA (Himpunan Pelajar Mahasiswa Wajo Cabang Kota Parepare) merupakan platform portal organisasi digital terpadu yang dibangun untuk mendigitalisasi tata kelola administrasi keorganisasian, pendataan keanggotaan, dan publikasi kegiatan. Dikembangkan dengan arsitektur MVC framework CodeIgniter 4 (CI4) yang ringan, cepat, dan handal dipadukan dengan Tailwind CSS, sistem ini memfasilitasi pendataan profil kader, registrasi anggota baru, pengelolaan arsip persuratan dan dokumen SK digital, serta portal publikasi warta berita dan agenda kegiatan resmi organisasi.",
    technologies: ["PHP", "CodeIgniter 4", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "/images/hipermawa.png",
    githubLink: "https://github.com/ArifuddinJ/sistem-informasi-hipermawa",
    demoLink: "https://situssupercanggih.co.id",
    displayUrl: "WWW.SITUSSUPERCANGGIH.CO.ID",
    metrics: [
      { label: "Arsitektur", value: "CodeIgniter 4" },
      { label: "UI Styling", value: "Tailwind CSS" },
      { label: "Waktu Muat", value: "< 0.8s" },
      { label: "Administrasi", value: "100% Paperless" },
    ],
    highlights: [
      "Digitalisasi basis data kader, anggota terdaftar, dan riwayat kepengurusan terpadu",
      "Sistem pengarsipan administrasi persuratan, repositori SK, dan dokumen resmi digital",
      "Portal publikasi berita, galeri dokumentasi program kerja, dan kalender agenda kegiatan resmi",
      "Antarmuka responsif dengan identitas visual organisasi yang profesional dan mudah diakses di seluruh perangkat",
    ],
  },
  {
    id: 5,
    title: "Aplikasi Kuis Sahabat PAI",
    category: "EdTech & Edukasi",
    description: "Platform evaluasi dan kuis digital interaktif untuk siswa SMP kelas 7–9 dengan fitur Kuis Balapan (Room), penilaian otomatis, serta manajemen soal terpadu berbasis cloud yang aman dan responsif.",
    longDescription: "Sahabat PAI adalah platform evaluasi dan kuis pembelajaran digital interaktif yang dirancang khusus untuk mendukung kegiatan belajar mengajar Pendidikan Agama Islam (PAI) tingkat SMP (Kelas 7, 8, dan 9). Dilengkapi dengan fitur unggulan 'Kuis Balapan (Room)' berbasis game edukatif real-time yang memacu antusiasme siswa saat berkompetisi secara sehat. Menyediakan sistem penilaian dan skoring instan, analisis butir soal, manajemen bank soal cloud terstruktur per kurikulum jenjang kelas, serta dashboard guru untuk rekapitulasi nilai otomatis yang rapi dan aman.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "WebSockets", "Cloud Database"],
    image: "/images/quizpai.png",
    githubLink: "https://github.com/ArifuddinJ/sahabat-pai-quiz",
    demoLink: "https://sahabat-pai-app.dev",
    displayUrl: "SAHABAT-PAI-APP.DEV",
    metrics: [
      { label: "Sasaran Jenjang", value: "SMP Kelas 7-9" },
      { label: "Fitur Unggulan", value: "Kuis Balapan Room" },
      { label: "Penilaian", value: "Otomatis & Real-time" },
      { label: "Antarmuka", value: "Gamified & Mobile" },
    ],
    highlights: [
      "Fitur 'Kuis Balapan (Room)' interaktif multiplayer untuk simulasi ujian & kuis seru secara real-time",
      "Modul latihan mandiri dan evaluasi terstruktur untuk siswa SMP kelas 7, 8, dan 9",
      "Sistem skoring otomatis dengan analitik tingkat pemahaman materi dan laporan rekap guru",
      "Manajemen bank soal berbasis cloud dengan enkripsi data dan antarmuka gamifikasi yang ramah anak",
    ],
  },
  {
    id: 6,
    title: "Portal Karier TechNova",
    category: "Web Development",
    description: "Desain dan pengembangan antarmuka halaman karier perusahaan teknologi (TechNova) yang modern, bersih, dan responsif untuk menampilkan budaya kerja, statistik perusahaan, serta eksplorasi lowongan secara interaktif.",
    longDescription: "TechNova Career Portal merupakan antarmuka digital berstandar enterprise yang dirancang untuk memperkuat employer branding perusahaan teknologi terkemuka. Menampilkan budaya kerja kolaboratif, nilai-nilai perusahaan, serta statistik kredibilitas organisasi (120+ Talenta Global di 18+ negara, 98.4% tingkat retensi karyawan, 5M+ pengguna aktif, dan rating Glassdoor 4.9/5). Dilengkapi sistem eksplorasi lowongan pekerjaan interaktif dengan filter posisi, departemen, dan lokasi kerja, form pengajuan lamaran online yang intuitif, serta desain modern dan performa tinggi.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
    image: "/images/jobhunter.png",
    githubLink: "https://github.com/ArifuddinJ/technova-career-portal",
    demoLink: "https://technova-career.dev",
    displayUrl: "TECHNOVA-CAREER.DEV",
    metrics: [
      { label: "Glassdoor Score", value: "4.9 / 5.0" },
      { label: "Talenta Global", value: "120+ Orang" },
      { label: "Tingkat Retensi", value: "98.4%" },
      { label: "Pengguna Aktif", value: "5M+ Users" },
    ],
    highlights: [
      "Desain antarmuka karier modern, estetis, dan clean untuk memperkuat employer branding",
      "Penyajian metrik statistik perusahaan terpercaya (Talenta Global, Retensi, Active Users, Glassdoor)",
      "Sistem pencarian dan filter lowongan kerja interaktif berdasarkan posisi dan departemen",
      "Formulir pendaftaran karier online responsif dengan animasi transisi yang halus dan cepat",
    ],
  },
];

const categories = [
  "Semua",
  "Web Development",
  "Machine Learning / AI",
  "Sistem Kasir & POS",
  "EdTech & Edukasi",
];

// Project Card Component
function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <div
      className="glass-card overflow-hidden border-white/5 hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer group flex flex-col h-full hover:shadow-xl hover:shadow-primary/10"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative w-full h-48 md:h-52 overflow-hidden bg-black/40">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />

        {/* Hover preview eye button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-3.5 px-4 rounded-full bg-gradient-to-r from-primary to-primary-light text-white shadow-lg flex items-center gap-2">
            <Eye className="w-4 h-4" />
            <span className="text-xs font-bold font-sans">Lihat Detail</span>
          </div>
        </div>

        {/* Category Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold font-sans tracking-wide uppercase bg-black/70 backdrop-blur-md border border-white/10 text-secondary">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <h4 className="text-lg font-bold font-sans text-white group-hover:text-secondary transition-colors duration-300 line-clamp-2 mb-2 min-h-[3.25rem]">
          {project.title}
        </h4>
        <p className="text-xs md:text-sm text-gray-400 font-sans leading-relaxed line-clamp-3 mb-4">
          {project.description}
        </p>

        {/* Display URL indicator */}
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-400 group-hover:text-secondary transition-colors mb-4 pt-1">
          <Globe className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate tracking-wider font-semibold">
            {project.displayUrl || project.demoLink.replace(/^https?:\/\//, "").toUpperCase()}
          </span>
        </div>

        {/* Technologies list */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-white/5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[10px] font-mono text-secondary/80 bg-secondary/10 px-2 py-1 rounded-md border border-secondary/20">
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
  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [activeTab, setActiveTab] = useState<"detail" | "tech">("detail");
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Filtered projects list based on active category tab
  const filteredProjects = activeCategory === "Semua"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  // Find index of selected project in active list or all projects
  const activeList = filteredProjects.length > 0 ? filteredProjects : projects;
  const currentIndex = selectedProject
    ? activeList.findIndex((p) => p.id === selectedProject.id)
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
    const prevIndex = (currentIndex - 1 + activeList.length) % activeList.length;
    handleSelectProject(activeList[prevIndex]);
  };

  const handleNextProject = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % activeList.length;
    handleSelectProject(activeList[nextIndex]);
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
        const prevIndex = (currentIndex - 1 + activeList.length) % activeList.length;
        handleSelectProject(activeList[prevIndex]);
      } else if (e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % activeList.length;
        handleSelectProject(activeList[nextIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, currentIndex, activeList]);

  return (
    <section id="projects" className="relative w-full py-24 px-6 bg-background/50">
      {/* Background glow bloops */}
      <div className="glow-secondary top-1/3 left-1/4 w-[350px] h-[350px] opacity-15" />
      <div className="glow-primary bottom-1/3 right-1/4 w-[400px] h-[400px] opacity-10" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-secondary mb-3 flex items-center gap-1.5">
            <FolderGit2 className="w-4 h-4" />
            <span>04 . Hasil Karya & Proyek Unggulan</span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-black font-sans tracking-tight mb-4">
            Hasil Karya & <span className="text-gradient-primary">Inovasi Digital</span>
          </h3>
          <p className="max-w-3xl text-sm md:text-base text-gray-400 font-sans leading-relaxed">
            Berikut adalah beberapa proyek pengembangan sistem informasi dan aplikasi web yang telah saya rancang serta bangun untuk membantu digitalisasi bisnis, retail, dan organisasi secara modern dan responsif.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const count = cat === "Semua" ? projects.length : projects.filter((p) => p.category === cat).length;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium font-mono transition-all duration-200 border ${
                  isActive
                    ? "bg-gradient-to-r from-primary to-primary-light text-white border-transparent shadow-lg shadow-primary/20"
                    : "bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border-white/5"
                }`}
              >
                {cat} <span className="opacity-70 text-[10px]">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
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
                    Proyek {String(currentIndex + 1).padStart(2, "0")} dari {String(activeList.length).padStart(2, "0")}
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
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
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
                  {activeList.map((p, idx) => (
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
