"use client";

import { useEffect, useRef } from "react";

export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = glowRef.current;

    if (!element) {
      return;
    }

    const handleMove = (event: MouseEvent) => {
      element.style.setProperty("--glow-x", `${event.clientX}px`);
      element.style.setProperty("--glow-y", `${event.clientY}px`);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-[5] hidden opacity-70 lg:block"
      style={{
        background:
          "radial-gradient(420px circle at var(--glow-x, 50%) var(--glow-y, 20%), rgba(110,231,249,0.10), transparent 48%)",
      }}
    />
  );
}
