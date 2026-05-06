"use client";

import Lenis from "lenis";
import { useReducedMotion } from "framer-motion";
import { type ReactNode, useEffect } from "react";

type SmoothScrollProps = {
  children: ReactNode;
};

export function SmoothScroll({ children }: SmoothScrollProps) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.05,
      lerp: 0.08,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.9,
    });

    let frameId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(raf);
    };

    frameId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, [shouldReduceMotion]);

  return <>{children}</>;
}
