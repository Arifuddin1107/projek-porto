"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  color: string;
  size: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Dynamic configuration
    const particleCount = Math.min(150, Math.floor((width * height) / 10000));
    const particles: Particle[] = [];
    const colors = ["#6366F1", "#8B5CF6", "#06B6D4", "#EC4899"];

    // Initialize 3D particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * width, // depth
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 2 + 0.8,
      });
    }

    // Mouse positions
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - width / 2) * 0.15;
      targetMouseY = (e.clientY - height / 2) * 0.15;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Focal length for 3D projection
    const fl = 300;

    const render = () => {
      // Smooth mouse follow (easing)
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Dark space clear screen
      ctx.fillStyle = "rgba(3, 7, 18, 0.2)"; // trailing opacity for smooth animation
      ctx.fillRect(0, 0, width, height);

      // Cyber Grid / subtle lines background effect
      ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Render & Project 3D particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particle towards screen (decreasing Z)
        p.z -= 0.8;

        // Reset if passed viewport
        if (p.z <= 0) {
          p.z = width;
          p.x = (Math.random() - 0.5) * width * 1.5;
          p.y = (Math.random() - 0.5) * height * 1.5;
        }

        // Apply 3D perspective projection
        const scale = fl / (fl + p.z);
        const projectedX = p.x * scale + width / 2 + mouseX * scale;
        const projectedY = p.y * scale + height / 2 + mouseY * scale;
        const projectedSize = p.size * scale * 2;

        // Draw particle
        if (projectedX >= 0 && projectedX <= width && projectedY >= 0 && projectedY <= height) {
          ctx.beginPath();
          ctx.arc(projectedX, projectedY, projectedSize, 0, Math.PI * 2);
          
          // Draw subtle glow
          ctx.shadowBlur = 10;
          ctx.shadowColor = p.color;
          ctx.fillStyle = p.color;
          ctx.fill();
          
          // Draw connects for nearby particles
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const scale2 = fl / (fl + p2.z);
            const px2 = p2.x * scale2 + width / 2 + mouseX * scale2;
            const py2 = p2.y * scale2 + height / 2 + mouseY * scale2;

            // Draw line if projected coordinates are close
            const dist = Math.hypot(projectedX - px2, projectedY - py2);
            if (dist < 70) {
              ctx.beginPath();
              ctx.moveTo(projectedX, projectedY);
              ctx.lineTo(px2, py2);
              ctx.strokeStyle = `rgba(99, 102, 241, ${0.12 * (1 - dist / 70)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      ctx.shadowBlur = 0; // Reset shadow blur to preserve text/other items
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full pointer-events-none z-0" />;
}
