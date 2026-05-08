"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { timeline } from "@/data/site";
import { cn } from "@/lib/utils";

export function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 82%", "end 28%"],
  });
  const pathScale = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("on");
          }
        });
      },
      { threshold: 0.12 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".rv");
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="divider" />
      <section id="timeline" ref={sectionRef} className="px-6 py-24 md:px-14 bg-[var(--bg)]">
        <div className="mx-auto w-full max-w-300">
          <div className="lbl rv flex items-center gap-2 text-[0.72rem] tracking-[0.22em] text-[var(--accent)] uppercase mb-3.5 font-semibold before:content-[''] before:w-5 before:h-[1.5px] before:bg-[var(--accent)] before:rounded-[2px]">
            Our Journey
          </div>
          <h2 className="rv font-[var(--font-h)] text-[clamp(2rem,3.8vw,3rem)] font-bold line-height-[1.08] tracking-[-1.5px] text-[var(--ink)] mb-3.5">
            A timeline of<br /><span className="acc">impact and growth</span>
          </h2>

          <div ref={containerRef} className="relative mt-12 sm:mt-16 lg:mt-20">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-[var(--border)] md:left-1/2 md:-translate-x-1/2" />
            <motion.div
              className="absolute bottom-0 left-4 top-0 w-px origin-top bg-gradient-to-b from-[var(--accent)] via-[var(--accent2)] to-[var(--accent3)] md:left-1/2 md:-translate-x-1/2"
              style={{ scaleY: pathScale }}
            />

            <div className="space-y-12 sm:space-y-16">
              {timeline.map((item, index) => (
                <div
                  key={item.title}
                  className="relative grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-20"
                >
                  <div
                    className={
                      index % 2 === 0 ? "md:pr-14" : "md:order-2 md:pl-14"
                    }
                  >
                    <div className="a-card rv bg-white border border-[var(--border)] rounded-[20px] p-7 transition-all hover:border-[rgba(42,90,255,0.3)] hover:-translate-y-1 relative overflow-hidden group">
                      <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[var(--ink3)] mb-3 font-semibold">
                        {item.period}
                      </p>
                      <h3 className="font-[var(--font-h)] text-[1.2rem] font-bold text-[var(--ink)] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[0.8rem] font-bold text-[var(--accent)] mb-4">
                        {item.company}
                      </p>
                      <div className="space-y-3 text-[0.85rem] line-height-[1.6] text-[var(--ink2)]">
                        {item.description.map((point) => (
                          <div key={point} className="flex gap-3">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(42,90,255,0.04)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                  </div>

                  <div
                    className={
                      index % 2 === 0 ? "md:order-2 md:pl-14" : "md:pr-14"
                    }
                  />

                  <div className="absolute left-4 top-10 h-4 w-4 -translate-x-[7.5px] rounded-full border-2 border-white bg-[var(--accent)] shadow-[0_0_0_6px_rgba(42,90,255,0.1)] md:left-1/2 md:-translate-x-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
