"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/animations/reveal";
import { MagneticButton } from "@/components/shared/magnetic-button";

const heroWords = [
  "AI-Powered Digital Excellence.",
  "Engineering the Future.",
  "Smart Technology. Real Growth.",
  "From Vision to Scalable Innovation.",
  "Intelligent Solutions for Modern Businesses.",
];
const heroCapabilities = [
  "AI systems",
  "Custom software",
  "Web & mobile apps",
  "Digital growth",
  "Automation",
  "Product engineering",
];
const heroHighlights = [
  "AI-powered digital ecosystems",
  "High-performance product engineering",
  "Automation designed for scale",
];
const orbitLabels = [
  { label: "AI Solutions", x: 0, y: -124 },
  { label: "Web & Mobile Apps", x: 104, y: -68 },
  { label: "Product Engineering", x: 122, y: 8 },
  { label: "Digital Growth", x: 72, y: 102 },
  { label: "Custom Software", x: -86, y: 92 },
  { label: "Automation Systems", x: -124, y: 0 },
];

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const orbitLabelsRef = useRef<HTMLDivElement>(null);
  const orbitTextRefs = useRef<Array<HTMLDivElement | null>>([]);
  const ringPrimaryRef = useRef<HTMLDivElement>(null);
  const ringSecondaryRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentWord = heroWords[wordIndex];

    const timeout = window.setTimeout(
      () => {
        if (typed.length < currentWord.length) {
          setTyped(currentWord.slice(0, typed.length + 1));
          return;
        }

        setTyped("");
        setWordIndex((current) => (current + 1) % heroWords.length);
      },
      typed.length < currentWord.length ? 80 : 1450,
    );

    return () => window.clearTimeout(timeout);
  }, [typed, wordIndex]);

  useEffect(() => {
    const context = gsap.context(() => {
      if (ringPrimaryRef.current) {
        gsap.to(ringPrimaryRef.current, {
          rotate: 360,
          duration: 28,
          ease: "none",
          repeat: -1,
        });
      }

      if (ringSecondaryRef.current) {
        gsap.to(ringSecondaryRef.current, {
          rotate: -360,
          duration: 20,
          ease: "none",
          repeat: -1,
        });
      }

      if (orbRef.current) {
        gsap.to(orbRef.current, {
          y: -16,
          duration: 3.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      if (orbitLabelsRef.current) {
        gsap.to(orbitLabelsRef.current, {
          rotate: 360,
          duration: 24,
          ease: "none",
          repeat: -1,
        });
      }

      orbitTextRefs.current.forEach((labelRef) => {
        if (!labelRef) {
          return;
        }

        gsap.to(labelRef, {
          rotate: -360,
          duration: 24,
          ease: "none",
          repeat: -1,
        });
      });
    });

    return () => context.revert();
  }, []);

  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-12 pt-16 sm:px-5 sm:pt-26 md:px-8 md:pt-28 lg:px-4 lg:pb-18 lg:pt-28"
    >
      <div className="mx-auto grid w-full max-w-300 gap-8 xl:min-h-[calc(100svh-7rem)] xl:grid-cols-[1fr_0.88fr] xl:items-start xl:gap-10">
        <div className="relative z-10">
          <Reveal className="mt-2 sm:mt-4 xl:mt-0" delay={0.08}>
            <h1 className="max-w-4xl font-display text-[1.75rem] font-semibold leading-[0.98] tracking-[-0.055em] text-white  sm:text-[1.75rem]">
              Empowering brands with
              <span className="bg-[linear-gradient(135deg,#ffffff_0%,#8ce6ff_35%,#8b5cf6_68%,#f9a8d4_100%)] bg-clip-text text-transparent">
                {" "}
                AI-driven technology,
              </span>
              <br /> scalable digital products, and growth-focused innovation.
            </h1>
          </Reveal>

          <Reveal className="mt-4 max-w-2xl sm:mt-3" delay={0.14}>
            <p className="max-w-xl text-[0.95rem] leading-7 text-white/68 sm:text-sm sm:leading-5 ">
              NimyaTech helps startups, businesses, and enterprises transform
              ideas into high-performing digital solutions. From AI-powered
              systems and custom software to modern web experiences, mobile
              apps, and digital growth strategies - we create technology that
              drives measurable impact and long-term scalability.
            </p>
          </Reveal>

          {/* <Reveal className="mt-3 max-w-xl" delay={0.18}>
            <p className="text-sm leading-5 text-white/48 sm:text-[0.95rem] sm:leading-4">
              Helping ambitious businesses scale through AI, engineering, and
              modern digital innovation.
            </p>
          </Reveal> */}

          <Reveal
            className="mt-3 flex flex-wrap items-center gap-3 sm:mt-3 sm:gap-4"
            delay={0.2}
          >
            <div className="hidden rounded-full border border-white/10 bg-white/4 px-4 py-2.5 text-sm text-white/74 lg:block lg:px-5">
              {/* <span className="mr-2 text-white/45">Tagline</span> */}
              <span className="font-semibold text-white">{typed}</span>
              <span className="ml-1 inline-block h-4 w-px animate-pulse bg-cyan-300/80 align-middle" />
            </div>
            <div className="hidden flex-wrap gap-2 lg:flex lg:max-w-3xl">
              {heroCapabilities.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-[0.72rem] uppercase tracking-[0.22em] text-white/52"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal
            className="mt-2 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-4"
            delay={0.24}
          >
            <MagneticButton className="sm:w-auto" href="#services">
              Explore Services
            </MagneticButton>
            <MagneticButton href="#projects" variant="secondary">
              View Projects
            </MagneticButton>
          </Reveal>

          <Reveal
            className="mt-4 hidden gap-3 lg:grid lg:grid-cols-3 lg:mt-4"
            delay={0.3}
          >
            {heroHighlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-2xl border border-white/10 bg-white/[0.035] px-3 py-3 text-sm leading-4 text-white/62"
              >
                {highlight}
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal
          className="relative mx-auto hidden w-full max-w-[26rem] xl:mt-0 xl:block xl:max-w-[31rem]"
          delay={0.12}
        >
          <div className="section-frame glass-panel relative overflow-hidden rounded-[30px] border border-white/10 px-4 pb-4 pt-5 shadow-[0_24px_80px_rgba(3,7,18,0.34)] sm:px-5 sm:pb-5 sm:pt-6 lg:px-6 lg:pb-6 lg:pt-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_26%,rgba(110,231,249,0.16),transparent_18%),radial-gradient(circle_at_70%_72%,rgba(139,92,246,0.2),transparent_24%),radial-gradient(circle_at_20%_78%,rgba(232,121,249,0.1),transparent_24%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:34px_34px] opacity-20" />

            <div className="relative">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.32em] text-white/42">
                    Why NimyaTech?
                  </p>
                  <h2 className="mt-1 max-w-[230rem] font-display text-[1.2rem] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
                    One partner for AI, technology, and scalable digital growth.
                  </h2>
                </div>
                <div className="rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.24em] text-cyan-200/80">
                  AI-powered delivery
                </div>
              </div>

              <div className="relative flex min-h-[18rem] items-center justify-center overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(13,19,39,0.88),rgba(9,12,28,0.82))] px-4 py-4 sm:min-h-[20rem] sm:px-5 lg:min-h-[21.5rem]">
                <div ref={orbitLabelsRef} className="absolute inset-0 hidden lg:block">
                  {orbitLabels.map((item, index) => (
                    <div
                      key={item.label}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        transform: `translate(calc(-50% + ${item.x}px), calc(-50% + ${item.y}px))`,
                      }}
                    >
                      <div
                        ref={(node) => {
                          orbitTextRefs.current[index] = node;
                        }}
                        className="rounded-full border border-white/10 bg-white/5 px-2 py-2 text-[0.52rem] uppercase tracking-[0.18em] text-white/66 shadow-[0_10px_30px_rgba(2,6,23,0.24)]"
                      >
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  ref={ringPrimaryRef}
                  className="absolute h-[12.5rem] w-[12.5rem] rounded-full border border-cyan-300/18 sm:h-[14rem] sm:w-[14rem] lg:h-[15.5rem] lg:w-[15.5rem]"
                />
                <div
                  ref={ringSecondaryRef}
                  className="absolute h-[9.5rem] w-[9.5rem] rounded-full border border-violet-300/14 border-dashed sm:h-[11rem] sm:w-[11rem] lg:h-[12rem] lg:w-[12rem]"
                />

                <div
                  ref={orbRef}
                  className="relative flex h-[8.75rem] w-[8.75rem] items-center justify-center rounded-full border border-white/12 bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.48),rgba(110,231,249,0.12)_22%,rgba(125,96,255,0.62)_58%,rgba(5,8,22,0.92)_100%)] shadow-[0_18px_70px_rgba(125,96,255,0.26)] sm:h-[10rem] sm:w-[10rem] lg:h-[11rem] lg:w-[11rem]"
                >
                  <div className="absolute inset-[16%] rounded-full border border-white/15" />
                  <div className="text-center">
                    <p className="text-[0.5rem] uppercase tracking-[0.32em] text-white/50">
                      NimyaTech
                    </p>
                    <p className="mt-0 font-display text-[1.35rem] font-semibold tracking-[-0.04em] text-white sm:text-lg">
                      Innovation Core
                    </p>
                    <p className="mt-2 px-4 text-[0.7rem] leading-3 text-white/62 sm:px-5 sm:text-[0.65rem]">
                      AI systems, product engineering, automation, and digital
                      growth solutions working together to accelerate business
                      success.
                    </p>
                  </div>
                </div>

                {/* <div className="absolute inset-x-3 bottom-3 rounded-[20px] border border-white/10 bg-[rgba(9,12,26,0.84)] p-3.5 backdrop-blur-xl sm:inset-x-4 sm:bottom-4 sm:p-4 lg:inset-x-4 lg:bottom-4">
                  <div className="flex items-center justify-between text-[0.6rem] uppercase tracking-[0.24em] text-white/42 sm:text-[0.65rem]">
                    <span>Delivery flow</span>
                    <span>Focus</span>
                  </div>
                  <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
                    {deliveryPillars.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-[18px] border border-white/8 bg-white/[0.04] px-3 py-3"
                      >
                        <p className="text-[0.7rem] uppercase tracking-[0.2em] text-cyan-200/76">
                          {item.title}
                        </p>
                        <p className="mt-2 text-[0.88rem] leading-6 text-white/68">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
