# Portofolio Pribadi Premium - Arifuddin Juddah

Repository ini berisi kode sumber untuk website portofolio pribadi profesional, modern, responsif, dan premium milik **Arifuddin Juddah** (Machine Learning Engineer, Web Developer, dan Peneliti Deep Learning).

Website ini dirancang dengan tema **Futuristic Minimalist**, **Glassmorphism**, dan **Dark Mode Default** dengan estetika modern seperti UI Apple, Stripe, Linear, dan Vercel.

---

## 🚀 Teknologi Utama

- **Framework Core:** Next.js 15 (App Router) & React 19
- **Bahasa:** TypeScript
- **Styling:** Tailwind CSS (dengan efek Glow Neon & Glassmorphism kustom)
- **Animasi Modern:** GSAP (ScrollTrigger & magnetic interaction) & Framer Motion (page section scroll reveal)
- **Smooth Scroll:** Lenis Smooth Scroll (terintegrasi global)
- **Interaksi 3D:** Interactive Canvas 3D Particle System (dibuat menggunakan Canvas API & 3D Math Projection)
- **Ikon:** Lucide React Icons
- **Efek Sukses:** Canvas Confetti

---

## ✨ Fitur & Animasi Unggulan

1. **Hero Section dengan Partikel 3D:** Partikel bergerak secara 3D mengikuti kursor mouse (mouse parallax) dengan efek fading trail dan interkoneksi garis antar-partikel.
2. **Kustom Kursor Premium:** Kursor follower yang melayang, membesar secara dinamis, dan berpendar ketika diarahkan ke elemen interaktif.
3. **Tombol Magnetik:** Tombol sosial media & CTA yang tertarik ke arah kursor secara dinamis saat didekati.
4. **Grid Proyek Modern dengan Efek 3D Tilt:** Kartu proyek melayang dan berputar mengikuti arah sorotan mouse dengan modal lightbox detail berisi metrik performa model (seperti akurasi CNN 98.26%).
5. **Eksportir Sitasi Penelitian:** Ekspor sitasi karya tulis ilmiah otomatis ke dalam gaya **IEEE** atau **APA** dalam sekali klik ke papan klip (clipboard).
6. **Sertifikat Lightbox Gallery:** Popup lightbox berskala mulus untuk mempermudah verifikasi kredensial sertifikasi profesional.
7. **Marquee Loop Logo Tak Terbatas:** Menampilkan ekosistem tech stack dengan hover-pause.
8. **Testimoni Auto-Slide:** Carousel modern dengan transisi fading yang smooth.
9. **Formulir Kontak Tervalidasi:** Animasi tombol submit dan hujan confetti saat pesan sukses terkirim.

---

## 🛠️ Cara Menjalankan Project Secara Lokal

Ikuti langkah-langkah berikut untuk menjalankan portofolio Anda secara lokal:

### 1. Ekstraksi dan Instalasi Dependensi
Buka terminal/command prompt pada folder proyek `portofolio_pribadi` Anda, lalu jalankan perintah:
```bash
npm install
```

> [!NOTE]
> Proyek ini menggunakan skrip `postinstall` otomatis (`setup-assets.js`) yang akan mendeteksi file foto Anda (`IMG_5792.JPEG.jpg` atau `IMG_5793.JPEG.jpg`) di folder root dan menyalinnya ke dalam `public/images/profile.jpg` untuk dijadikan foto profil utama.

### 2. Jalankan Mode Pengembangan (Development Server)
Jalankan server pengembangan lokal dengan perintah:
```bash
npm run dev
```
Setelah berjalan, buka browser dan akses alamat **`http://localhost:3000`**.

### 3. Build untuk Produksi
Guna memastikan seluruh tipe TypeScript aman dan kode teroptimasi dengan baik sebelum di-deploy, jalankan:
```bash
npm run build
```

---

## ☁️ Penyebaran ke Vercel (Deployment)

Proyek ini siap untuk langsung di-deploy ke platform Vercel:

1. Buat akun di [Vercel](https://vercel.com) jika belum memiliki.
2. Hubungkan akun GitHub Anda ke Vercel.
3. Buat proyek baru di Vercel, pilih repositori portofolio Anda.
4. Klik **Deploy**. Vercel akan otomatis mengenali konfigurasi Next.js 15 dan melakukan build secara instan.
