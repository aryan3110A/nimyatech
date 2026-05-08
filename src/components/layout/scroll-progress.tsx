"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      id="prog"
      className="fixed inset-x-0 top-0 z-[9997] h-[2px] origin-left bg-gradient-to-r from-[var(--accent)] via-[var(--accent2)] to-[var(--accent3)]"
      style={{ scaleX }}
    />
  );
}
