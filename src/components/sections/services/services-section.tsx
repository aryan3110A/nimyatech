"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SpotlightCard } from "@/components/shared/spotlight-card";
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
                <motion.div
                  style={{ transformStyle: "preserve-3d" }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{
                    y: -10,
                    rotateX: 5,
                    rotateY: index % 2 === 0 ? -5 : 5,
                  }}
                >
                  <SpotlightCard className="section-frame flex h-full min-h-[10rem] flex-col rounded-[28px] p-5 sm:min-h-[18rem] sm:p-6">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} border border-white/12`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-5 font-display text-[1.2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[1.8rem]">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-xs leading-4 text-white/58 sm:mt-4 sm:leading-7">
                      {service.description}
                    </p>
                    <div className="mt-2 flex items-center justify-between text-sm font-medium text-white/72 sm:mt-8">
                      <span>Explore service</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </SpotlightCard>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
