"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { timeline } from "@/data/site";

export function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 82%", "end 28%"],
  });
  const pathScale = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section className="px-4 py-14 sm:px-5 sm:py-16 md:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-300">
        <Reveal>
          <SectionHeading
            description="Work across research, industry, and product delivery has shaped a practical understanding of how advanced systems should be built, validated, and shipped."
            eyebrow="What we have built so far"
            title="A timeline shaped by applied AI, product engineering, and operational impact."
          />
        </Reveal>

        <div ref={containerRef} className="relative mt-10 sm:mt-12 lg:mt-14">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            className="absolute bottom-0 left-4 top-0 w-px origin-top bg-gradient-to-b from-cyan-300 via-violet-400 to-fuchsia-400 md:left-1/2 md:-translate-x-1/2"
            style={{ scaleY: pathScale }}
          />

          <div className="space-y-8 sm:space-y-10">
            {timeline.map((item, index) => (
              <div
                key={item.title}
                className="relative grid gap-4 sm:gap-5 md:grid-cols-2 md:gap-10"
              >
                <div
                  className={
                    index % 2 === 0 ? "md:pr-14" : "md:order-2 md:pl-14"
                  }
                >
                  <Reveal delay={index * 0.05}>
                    <div className="section-frame glass-panel relative rounded-[28px] border border-white/10 p-5 shadow-[0_18px_60px_rgba(2,6,23,0.28)] sm:p-6">
                      <p className="text-[0.72rem] uppercase tracking-[0.24em] text-white/42 sm:text-sm sm:tracking-[0.28em]">
                        {item.period}
                      </p>
                      <h3 className="mt-3 font-display text-sm font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:mt-4 sm:text-[2.45rem] md:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs font-medium text-cyan-200/80">
                        {item.company}
                      </p>
                      <div className="mt-2 space-y-2 text-sm leading-6 text-white/62 sm:mt-5 sm:leading-7">
                        {item.description.map((point) => (
                          <div key={point} className="flex gap-3">
                            <span className="mt-3 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </div>

                <div
                  className={
                    index % 2 === 0 ? "md:order-2 md:pl-14" : "md:pr-14"
                  }
                />

                <div className="absolute left-4 top-10 h-4 w-4 -translate-x-[7px] rounded-full border border-white bg-[#050816] shadow-[0_0_0_8px_rgba(125,96,255,0.15)] md:left-1/2 md:-translate-x-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
