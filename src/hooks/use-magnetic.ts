"use client";

import { useRef } from "react";

/**
 * Lightweight magnetic hook substitute that relies on smooth hardware-accelerated CSS hover
 * instead of continuous JS mousemove & GSAP calculations for peak performance.
 */
export default function useMagnetic(_strength: number = 0.35) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement | HTMLDivElement | null>(null);
  return ref;
}
