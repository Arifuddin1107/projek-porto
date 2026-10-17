"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const follower = followerRef.current;
    if (!dot || !follower) return;

    // Position coordinates
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setHidden(false);

      // Move the dot instantly
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const updateFollower = () => {
      // Lerp (Linear Interpolation) for smooth lagging effect
      const ease = 0.15;
      followerX += (mouseX - followerX) * ease;
      followerY += (mouseY - followerY) * ease;

      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;

      requestAnimationFrame(updateFollower);
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseLeaveWindow = () => setHidden(true);
    const onMouseEnterWindow = () => setHidden(false);

    // Event listeners
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeaveWindow);
    document.addEventListener("mouseenter", onMouseEnterWindow);

    // Dynamic scale on elements hover
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], .hover-target'
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    // Initialize follower loop
    const animationFrameId = requestAnimationFrame(updateFollower);

    // Observe DOM additions to bind hover listeners to dynamically added elements
    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeaveWindow);
      document.removeEventListener("mouseenter", onMouseEnterWindow);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Tiny Core Dot */}
      <div
        ref={dotRef}
        className={`custom-cursor hidden md:block ${
          hidden ? "opacity-0 scale-0" : "opacity-100 scale-100"
        } ${clicked ? "scale-75 bg-accent" : ""} ${
          hovered ? "scale-[2.5] bg-secondary opacity-80 mix-blend-normal" : "bg-white"
        }`}
      />
      {/* Outer Follower Ring */}
      <div
        ref={followerRef}
        className={`custom-cursor-follower hidden md:block ${
          hidden ? "opacity-0 scale-0" : "opacity-100 scale-100"
        } ${clicked ? "scale-75 border-accent" : ""} ${
          hovered
            ? "scale-150 border-secondary bg-secondary/10 backdrop-blur-[2px]"
            : "border-white/30"
        }`}
      />
    </>
  );
}
