"use client";

import { useState } from "react";
import { Mail, Send, Github, Linkedin, Instagram, Twitter, CheckCircle2, MessageSquareText } from "lucide-react";
import confetti from "canvas-confetti";
import useMagnetic from "@/hooks/use-magnetic";

const socialLinks = [
  { icon: Github, href: "https://github.com/Arifuddin1107", label: "GitHub", color: "hover:text-white" },
  { icon: Linkedin, href: "https://linkedin.com/in/arifuddinjuddah", label: "LinkedIn", color: "hover:text-[#0a66c2]" },
  { icon: Instagram, href: "https://instagram.com/arifuddinj_", label: "Instagram", color: "hover:text-[#e1306c]" },
  ];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const submitBtnRef = useMagnetic(0.3) as React.RefObject<HTMLButtonElement>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("Mohon lengkapi semua baris input formulir.");
      return;
    }

    setLoading(true);

    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Trigger premium confetti explosion
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#6366F1", "#8B5CF6", "#06B6D4", "#EC4899"],
      });
      
      // Reset success state after 5 seconds
      setTimeout(() => setSuccess(false), 6000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative w-full py-24 px-6 bg-background/50">
      {/* Background Glow blob */}
      <div className="glow-accent top-1/3 right-1/4 w-[350px] h-[350px] opacity-10" />
      <div className="glow-primary bottom-0 left-1/4 w-[300px] h-[300px] opacity-10" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-secondary mb-3 flex items-center gap-1.5">
            <Mail className="w-4 h-4" />
            <span>08 . Kontak Hubung</span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-black font-sans tracking-tight">
            Mari <span className="text-gradient-primary">Berkolaborasi</span>
          </h3>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          
          {/* Left: Contact Info & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-card p-8 border-white/5 bg-white/5">
              <h4 className="text-xl font-bold font-sans text-white mb-3">
                Mari Berdiskusi Proyek Pengembangan Web Anda!
              </h4>
              <p className="text-sm text-gray-400 font-sans leading-relaxed mb-8">
                Apakah Anda membutuhkan pembuatan <strong className="text-white">Aplikasi Web</strong>, <strong className="text-white">Sistem Informasi Bisnis</strong>, <strong className="text-white">Website Company Profile</strong>, atau solusi web kustom lainnya? Hubungi saya. Saya terbuka untuk proyek freelance, kolaborasi tim, maupun peluang karir.
              </p>

              {/* Direct email info box */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-background/50 mb-8">
                <div className="p-3 rounded-xl bg-secondary/10 text-secondary border border-secondary/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">
                    Kirim Email Langsung
                  </span>
                  <a
                    href="mailto:ariefuddin454@gmail.com"
                    className="text-sm font-semibold text-white hover:text-secondary transition-colors duration-200"
                  >
                    ariefuddin454@gmail.com
                  </a>
                </div>
              </div>

              {/* Social icons links */}
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-4">
                  Temukan Saya Di Media Sosial
                </span>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full glass-card border-white/10 hover:border-secondary/35 text-gray-400 ${social.color} transition-all duration-300 hover:scale-105`}
                        aria-label={social.label}
                      >
                        <Icon className="w-4.5 h-4.5" />
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* Right: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 md:p-10 border-white/5 bg-white/5 relative overflow-hidden">
              
              {/* Form header */}
              <div className="flex items-center gap-2 mb-6">
                <MessageSquareText className="w-5 h-5 text-primary-light" />
                <h4 className="text-lg font-bold font-sans text-white">Hubungi Lewat Formulir</h4>
              </div>

              {success ? (
                /* Success Message */
                <div className="py-12 flex flex-col items-center text-center justify-center gap-4 animate-fade-in">
                  <div className="p-4 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 mb-2">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h5 className="text-xl font-bold font-sans text-white">
                    Pesan Berhasil Dikirim!
                  </h5>
                  <p className="text-sm text-gray-400 font-sans max-w-sm">
                    Terima kasih telah menghubungi. Saya akan meninjau pesan Anda dan segera membalasnya melalui alamat email yang diberikan.
                  </p>
                </div>
              ) : (
                /* Main Form */
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {error && (
                    <div className="p-3.5 rounded-lg border border-red-500/20 bg-red-500/10 text-xs font-semibold text-red-400 font-sans">
                      {error}
                    </div>
                  )}

                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold text-gray-400 font-sans">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama Anda"
                      className="px-4 py-3 rounded-xl border border-white/5 bg-background/50 text-sm font-sans text-white placeholder-gray-600 focus:outline-none focus:border-secondary/40 focus:ring-1 focus:ring-secondary/20 transition-all duration-300"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-semibold text-gray-400 font-sans">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="contoh@domain.com"
                      className="px-4 py-3 rounded-xl border border-white/5 bg-background/50 text-sm font-sans text-white placeholder-gray-600 focus:outline-none focus:border-secondary/40 focus:ring-1 focus:ring-secondary/20 transition-all duration-300"
                    />
                  </div>

                  {/* Subject Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-xs font-semibold text-gray-400 font-sans">
                      Subjek Pesan
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Topik pembahasan"
                      className="px-4 py-3 rounded-xl border border-white/5 bg-background/50 text-sm font-sans text-white placeholder-gray-600 focus:outline-none focus:border-secondary/40 focus:ring-1 focus:ring-secondary/20 transition-all duration-300"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-semibold text-gray-400 font-sans">
                      Pesan Anda
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tulis pesan lengkap di sini..."
                      className="px-4 py-3 rounded-xl border border-white/5 bg-background/50 text-sm font-sans text-white placeholder-gray-600 focus:outline-none focus:border-secondary/40 focus:ring-1 focus:ring-secondary/20 transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    ref={submitBtnRef}
                    type="submit"
                    disabled={loading}
                    className="btn-magnetic w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white font-bold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Mengirim Pesan...</span>
                      </>
                    ) : (
                      <>
                        <span>Kirim Pesan Sekarang</span>
                        <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
