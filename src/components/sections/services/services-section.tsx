"use client";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { services } from "@/data/site";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-28 px-4 py-14 sm:px-5 sm:py-16 md:px-8 lg:px-10 lg:py-24"
    >
      <div className="mx-auto w-full max-w-300">
        <Reveal>
          <SectionHeading
            description="Every service is designed to feel integrated instead of isolated. NimyaTech blends strategy, product design, engineering, automation, and growth into one premium delivery surface."
            eyebrow="Capability stack"
            title="Services built to look modern, move fast, and scale cleanly."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.04}>
                <div className="service-flip-card group h-full" tabIndex={0}>
                  <div className="service-flip-inner h-full min-h-[11.5rem] sm:min-h-[12rem]">
                    <div className="service-flip-face section-frame glass-panel flex h-full flex-col items-center justify-center rounded-[28px] border border-white/10 p-4 text-center sm:p-3">
                      <div
                        className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-gradient-to-br ${service.accent}`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-display text-[1.25rem] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[1.55rem]">
                        {service.title}
                      </h3>
                    </div>

                    <div className="service-flip-face service-flip-back section-frame glass-panel flex h-full items-center justify-center rounded-[28px] border border-white/10 p-4 text-center sm:p-5">
                      <p className="text-sm leading-6 text-white/68 sm:text-[0.98rem] sm:leading-7">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
