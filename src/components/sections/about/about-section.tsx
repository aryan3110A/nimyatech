"use client";

import { useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { aboutCards, stats } from "@/data/site";

function StatCounter({
  value,
  suffix = "",
  label,
  description,
}: (typeof stats)[number]) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }

    let frameId = 0;
    const duration = 1200;
    const start = performance.now();

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.round(value * progress));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [inView, value]);

  return (
    <div
      ref={containerRef}
      className="rounded-[26px] border border-white/10 bg-white/[0.035] p-5"
    >
      <div className="font-display text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
        {count}
        {suffix}
      </div>
      <p className="mt-3 text-sm font-semibold text-white/80">{label}</p>
      <p className="mt-2 text-sm leading-7 text-white/56">{description}</p>
    </div>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-28 px-4 py-14 sm:px-5 sm:py-16 md:px-8 lg:px-10 lg:py-24"
    >
      <div className="mx-auto w-full max-w-300">
        <Reveal>
          <SectionHeading
            description="NimyaTech is built around one idea: sophisticated technology should feel clear, trustworthy, and commercially effective. The delivery model combines product thinking, AI expertise, automation systems, and polished digital design into one cohesive partner layer."
            eyebrow="Introduction"
            title="A sharper way to turn advanced tech into business momentum."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:mt-12 lg:gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <SpotlightCard className="section-frame relative h-full min-h-[10rem] rounded-[30px] p-6 sm:p-7 md:p-8">
              <p className="text-xs uppercase tracking-[0.26em] text-white/44 sm:text-sm sm:tracking-[0.32em]">
                Core proposition
              </p>
              <h3 className="mt-4 max-w-xl font-display text-md font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-[2.55rem] md:text-3xl">
                Design the experience. Engineer the system. Accelerate the
                outcome.
              </h3>
              <div className="mt-6 grid gap-3 sm:mt-7 sm:grid-cols-2">
                {[
                  "Premium interfaces that build trust fast",
                  "AI systems focused on operational value",
                  "Automation flows that reduce manual effort",
                  "Scalable architecture ready for growth",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3.5 text-sm leading-6 text-white/70"
                  >
                    <span>{item}</span>
                    <ArrowRight className="h-4 w-4 text-cyan-300" />
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {aboutCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.06}>
                <SpotlightCard className="section-frame h-full rounded-[28px] p-5 sm:p-6">
                  <div
                    className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${card.accent}`}
                  />
                  <div className="relative">
                    <p className="text-[0.68rem] uppercase tracking-[0.26em] text-white/42">
                      {card.eyebrow}
                    </p>
                    <h5 className="mt-3 font-display text-[1rem] font-normal leading-[1.08] tracking-[-0.04em] text-white lg:text-[1rem]">
                      {card.title}
                    </h5>
                    <p className="mt-3 text-[0.7rem] leading-4 text-white/60">
                      {card.description}
                    </p>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:mt-6 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
          {stats.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.05}>
              <StatCounter {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
