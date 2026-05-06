import { Star } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { testimonials } from "@/data/site";

export function TestimonialsSection() {
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="scroll-mt-28 px-4 py-14 sm:px-5 sm:py-16 md:px-8 lg:px-10 lg:py-24"
    >
      <div className="mx-auto w-full max-w-300">
        <Reveal>
          <SectionHeading
            description="Social proof should feel as premium as the rest of the experience. These testimonials move horizontally in a soft marquee to keep the section alive without becoming noisy."
            eyebrow="What others say"
            title="Trust signals presented with motion, depth, and restraint."
          />
        </Reveal>

        <div className="mask-fade-horizontal mt-10 overflow-hidden sm:mt-12">
          <div className="flex min-w-max animate-marquee gap-4 sm:gap-6 hover:[animation-play-state:paused]">
            {marqueeItems.map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                className="section-frame glass-panel relative flex w-[18rem] shrink-0 flex-col rounded-[28px] border border-white/10 p-5 shadow-[0_20px_70px_rgba(2,6,23,0.3)] sm:w-[20rem] sm:p-6 md:w-[22rem]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-300">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={`${item.name}-star-${starIndex}`}
                        className="h-4 w-4 fill-current"
                      />
                    ))}
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] font-display text-lg font-semibold text-white">
                    {item.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                </div>

                <p className="mt-6 text-[0.98rem] leading-7 text-white/68 sm:mt-8 sm:text-base sm:leading-8">
                  &quot;{item.quote}&quot;
                </p>

                <div className="mt-8 border-t border-white/10 pt-4 sm:mt-10 sm:pt-5">
                  <p className="font-display text-[1.2rem] font-semibold tracking-[-0.03em] text-white sm:text-xl">
                    {item.name}
                  </p>
                  <p className="mt-1 text-sm text-cyan-200/80">
                    {item.role} of {item.company}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
