"use client";

import { motion } from "framer-motion";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { techStack } from "@/data/site";

export function TechStackSection() {
  const innerRing = techStack.slice(0, 6);
  const outerRing = techStack.slice(6);
  const formatOffset = (value: number) => Number(value.toFixed(3));

  return (
    <section className="px-4 py-14 sm:px-5 sm:py-16 md:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-300">
        <Reveal>
          <SectionHeading
            align="center"
            description="A flexible stack selected for speed, modern DX, maintainable architecture, and AI product readiness across web, automation, and applied intelligence work."
            eyebrow="Tooling orbit"
            title="Technology presented as a living, moving system rather than a static icon wall."
          />
        </Reveal>

        <div className="relative mt-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] px-3 py-6 sm:mt-12 sm:px-4 sm:py-8 md:rounded-[40px] md:px-8 md:py-10">
          <div className="grid gap-3 md:hidden">
            <div className="rounded-[26px] border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),rgba(110,231,249,0.12),rgba(125,96,255,0.28),rgba(5,8,22,0.94))] px-5 py-8 text-center shadow-[0_18px_60px_rgba(125,96,255,0.2)]">
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/48">
                Core stack
              </p>
              <p className="mt-3 font-display text-[2rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white">
                Fast by design
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {techStack.map((tech) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={tech.name}
                    className={`flex items-center gap-3 rounded-2xl border border-white/10 bg-gradient-to-br ${tech.tone} px-4 py-3 text-sm text-white/88 backdrop-blur-xl`}
                  >
                    <Icon className="h-4 w-4 shrink-0 text-white" />
                    <span className="truncate font-medium">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative mx-auto hidden h-[34rem] max-w-5xl md:block">
            <motion.div
              animate={{ rotate: 360 }}
              className="absolute inset-0"
              transition={{ duration: 36, ease: "linear", repeat: Infinity }}
            >
              {outerRing.map((tech, index) => {
                const angle = (Math.PI * 2 * index) / outerRing.length;
                const radius = 215;
                const x = formatOffset(Math.cos(angle) * radius);
                const y = formatOffset(Math.sin(angle) * radius);
                const Icon = tech.icon;

                return (
                  <div
                    key={tech.name}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), 0px)`,
                    }}
                  >
                    <div
                      className={`group flex items-center gap-3 rounded-full border border-white/10 bg-gradient-to-br ${tech.tone} px-4 py-3 backdrop-blur-xl transition-transform duration-300 hover:scale-105`}
                    >
                      <Icon className="h-4 w-4 text-white" />
                      <span className="text-sm font-medium text-white/88">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              className="absolute inset-0"
              transition={{ duration: 28, ease: "linear", repeat: Infinity }}
            >
              {innerRing.map((tech, index) => {
                const angle = (Math.PI * 2 * index) / innerRing.length;
                const radius = 140;
                const x = formatOffset(Math.cos(angle) * radius);
                const y = formatOffset(Math.sin(angle) * radius);
                const Icon = tech.icon;

                return (
                  <div
                    key={tech.name}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), 0px)`,
                    }}
                  >
                    <div
                      className={`group flex items-center gap-3 rounded-full border border-white/10 bg-gradient-to-br ${tech.tone} px-4 py-3 backdrop-blur-xl transition-transform duration-300 hover:scale-105`}
                    >
                      <Icon className="h-4 w-4 text-white" />
                      <span className="text-sm font-medium text-white/88">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/12 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),rgba(110,231,249,0.16),rgba(125,96,255,0.38),rgba(5,8,22,0.94))] shadow-[0_18px_90px_rgba(125,96,255,0.36)]">
              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.35em] text-white/48">
                  Core stack
                </p>
                <p className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-white">
                  Fast by design
                </p>
              </div>
            </div>
          </div>

          <div className="mask-fade-horizontal mt-4 overflow-hidden rounded-full border border-white/8 bg-white/[0.03] py-3 sm:mt-5 sm:py-4">
            <div className="flex min-w-max animate-marquee gap-3 px-3 hover:[animation-play-state:paused]">
              {[...techStack, ...techStack].map((tech, index) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={`${tech.name}-${index}`}
                    className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/72"
                  >
                    <Icon className="h-4 w-4 text-cyan-300" />
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
