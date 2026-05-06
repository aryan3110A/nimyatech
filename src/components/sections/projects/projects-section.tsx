"use client";

import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { projects } from "@/data/site";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 px-4 py-14 sm:px-5 sm:py-16 md:px-8 lg:px-10 lg:py-24"
    >
      <div className="mx-auto w-full max-w-300">
        <Reveal>
          <SectionHeading
            description="A selection of work where AI, automation, and product design come together in operationally meaningful ways. The visual language here is intentionally cinematic and case-study driven."
            eyebrow="Selected work"
            title="Projects presented like premium product stories, not flat gallery cards."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-12 md:gap-6 xl:grid-cols-12">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              className={
                index === 0
                  ? "xl:col-span-7"
                  : index === 3
                    ? "xl:col-span-12"
                    : "xl:col-span-5"
              }
              delay={index * 0.05}
            >
              <SpotlightCard className="section-frame h-full rounded-[30px] p-3.5 sm:p-4 md:p-5">
                <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[rgba(10,13,29,0.82)]">
                  <div
                    className={`relative min-h-[13rem] overflow-hidden bg-gradient-to-br ${project.tone} p-4 sm:min-h-[14.5rem] sm:p-5 md:min-h-[18rem]`}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:36px_36px] opacity-25" />
                    <div className="relative flex items-start justify-between">
                      <div className="flex gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/12 px-3 py-1 text-xs uppercase tracking-[0.26em] text-white/80">
                        {project.previewLabel}
                      </span>
                    </div>

                    <div className="relative mt-7 grid gap-3 md:mt-10 md:grid-cols-2">
                      <div className="rounded-[24px] border border-white/12 bg-slate-950/40 p-4 backdrop-blur-md">
                        <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                          Signal
                        </p>
                        <div className="mt-4 space-y-3">
                          {[72, 58, 88].map((width) => (
                            <div
                              key={width}
                              className="h-2 rounded-full bg-white/12"
                            >
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400"
                                style={{ width: `${width}%` }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-[24px] border border-white/12 bg-slate-950/40 p-4 backdrop-blur-md">
                        <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                          Output
                        </p>
                        <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/76">
                          <div className="rounded-2xl border border-white/10 bg-white/6 px-3 py-4">
                            Realtime analysis
                          </div>
                          <div className="rounded-2xl border border-white/10 bg-white/6 px-3 py-4">
                            Automation ready
                          </div>
                          <div className="rounded-2xl border border-white/10 bg-white/6 px-3 py-4">
                            Dashboards
                          </div>
                          <div className="rounded-2xl border border-white/10 bg-white/6 px-3 py-4">
                            Scalable APIs
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 md:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="max-w-2xl">
                        <h3 className="font-display text-[2rem] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[2.35rem] md:text-3xl">
                          {project.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-white/60 sm:mt-4 sm:leading-7">
                          {project.summary}
                        </p>
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-cyan-200/80">
                        {project.metric}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs uppercase tracking-[0.24em] text-white/58"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-white/78 sm:mt-8 sm:gap-4">
                      <a
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 hover:border-cyan-300/35 hover:text-white"
                        href="#contact"
                      >
                        Request demo
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                      <a
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 hover:border-violet-300/35 hover:text-white"
                        href="#services"
                      >
                        View capability fit
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
