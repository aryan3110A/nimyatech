"use client";

import { useEffect, useRef } from "react";
import { testimonials } from "@/data/site";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeItems = [...testimonials, ...testimonials, ...testimonials];

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
      <section id="testimonials" ref={sectionRef} className="px-6 py-24 md:px-14 bg-[var(--bg)] overflow-hidden">
        <div className="lbl rv flex items-center gap-2 text-[0.72rem] tracking-[0.22em] text-[var(--accent)] uppercase mb-3.5 font-semibold before:content-[''] before:w-5 before:h-[1.5px] before:bg-[var(--accent)] before:rounded-[2px]">
          Testimonials
        </div>
        <h2 className="rv font-[var(--font-h)] text-[clamp(2rem,3.8vw,3rem)] font-bold line-height-[1.08] tracking-[-1.5px] text-[var(--ink)] mb-12">
          What our<br /><span className="acc">clients say</span>
        </h2>

        <div className="mq-w rv overflow-hidden relative py-4 before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-[120px] before:z-[2] before:bg-gradient-to-r before:from-[var(--bg)] before:to-transparent after:content-[''] after:absolute after:inset-y-0 after:right-0 after:w-[120px] after:z-[2] after:bg-gradient-to-l after:from-[var(--bg)] after:to-transparent">
          <div className="mq-t flex gap-5 animate-mq hover:[animation-play-state:paused] w-max">
            {marqueeItems.map((item, i) => (
              <div key={`${item.name}-${i}`} className="testi-c bg-white border border-[var(--border)] rounded-[22px] p-7 w-[340px] shrink-0 transition-all hover:border-[rgba(42,90,255,0.3)] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)]">
                <div className="testi-q text-[1.5rem] text-[var(--accent)] opacity-40 mb-3 font-serif">"</div>
                <div className="testi-txt text-[var(--ink2)] text-[0.88rem] line-height-[1.6] mb-6 font-medium italic leading-relaxed">
                  {item.quote}
                </div>
                <div className="testi-user flex items-center gap-3.5 pt-5 border-t border-[var(--border)]">
                  <div className="testi-av w-10 h-10 rounded-full bg-gradient-to-br from-[rgba(42,90,255,0.1)] to-[rgba(124,58,237,0.1)] flex items-center justify-center font-bold text-[var(--accent)] text-[0.85rem]">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="testi-n text-[var(--ink)] text-[0.88rem] font-bold">{item.name}</div>
                    <div className="testi-r text-[var(--ink3)] text-[0.72rem] uppercase tracking-[0.05em] mt-0.5">{item.role}, {item.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
