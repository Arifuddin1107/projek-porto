"use client";

import Navbar from "@/components/shared/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import TechStack from "@/components/sections/tech-stack";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";
import Footer from "@/components/shared/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-background overflow-hidden selection:bg-primary/30 selection:text-white">
      
      {/* Background Animated Gradient Mesh Spheres */}
      <div className="mesh-gradient-bg">
        <div className="mesh-gradient-sphere mesh-gradient-sphere-1" />
        <div className="mesh-gradient-sphere mesh-gradient-sphere-2" />
        <div className="mesh-gradient-sphere mesh-gradient-sphere-3" />
      </div>

      {/* Main floating navigation */}
      <Navbar />

      {/* Pages sections sequence */}
      <main className="relative z-10 w-full">
        {/* Fullscreen intro */}
        <Hero />
        
        {/* Bio segment */}
        <About />
        
        {/* Expertise chart */}
        <Skills />
        
        {/* Grid portfolio projects cards */}
        <Projects />
        
        {/* Loop logo marquee */}
        <TechStack />
        
        {/* Auto slider testimonials */}
        <Testimonials />
        
        {/* Direct messaging form */}
        <Contact />
      </main>

      {/* Page bottom layout */}
      <Footer />
    </div>
  );
}
