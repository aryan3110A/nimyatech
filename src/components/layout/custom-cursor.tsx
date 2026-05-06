"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine) and (min-width: 1024px)");

    const updateEnabled = () => setEnabled(media.matches);
    updateEnabled();

    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    media.addEventListener("change", updateEnabled);
    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      media.removeEventListener("change", updateEnabled);
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <motion.div
        animate={{ x: position.x - 4, y: position.y - 4 }}
        className="pointer-events-none fixed left-0 top-0 z-[80] h-2 w-2 rounded-full bg-white mix-blend-difference"
        transition={{ type: "spring", stiffness: 1200, damping: 70, mass: 0.2 }}
      />
      <motion.div
        animate={{ x: position.x - 20, y: position.y - 20 }}
        className="pointer-events-none fixed left-0 top-0 z-[79] h-10 w-10 rounded-full border border-cyan-300/45 bg-cyan-300/5"
        transition={{ type: "spring", stiffness: 260, damping: 30, mass: 0.5 }}
      />
    </>
  );
}
