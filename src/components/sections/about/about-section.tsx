"use client";

import { useEffect, useRef } from "react";
import { aboutCards } from "@/data/site";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

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
      <section id="about" ref={sectionRef} className="px-6 py-24 md:px-14 bg-[var(--bg)]">
        <div className="lbl rv flex items-center gap-2 text-[0.72rem] tracking-[0.22em] text-[var(--accent)] uppercase mb-3.5 font-semibold before:content-[''] before:w-5 before:h-[1.5px] before:bg-[var(--accent)] before:rounded-[2px]">
          About Us
        </div>
        <h2 className="rv font-[var(--font-h)] text-[clamp(2rem,3.8vw,3rem)] font-bold line-height-[1.08] tracking-[-1.5px] text-[var(--ink)] mb-3.5">
          Built for the<br /><span className="acc">age of AI</span>
        </h2>
        
        <div className="about-g grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="a-card wide rv lg:col-span-2 bg-white border border-[var(--border)] rounded-[20px] p-7 transition-all hover:border-[rgba(42,90,255,0.3)] hover:-translate-y-1 relative overflow-hidden group">
            <div className="a-bar h-[3px] rounded-[2px] bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] mb-[18px] w-9" />
            <div className="a-title font-[var(--font-h)] text-[1.05rem] font-semibold mb-2 text-[var(--ink)]">Our Mission</div>
            <div className="a-text text-[var(--ink2)] text-[0.85rem] line-height-[1.6]">
              NimyaTech partners with businesses to deliver intelligent, scalable digital solutions — from AI automation to world-class design. We turn ideas into products that grow.
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(42,90,255,0.04)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>

          {aboutCards.map((card, i) => (
            <div key={card.title} className={cn("a-card rv bg-white border border-[var(--border)] rounded-[20px] p-7 transition-all hover:border-[rgba(42,90,255,0.3)] hover:-translate-y-1 relative overflow-hidden group", `d${(i % 3) + 1}`)}>
              <span className="a-icon text-[1.8rem] mb-4 block">
                {i === 0 ? "🤖" : i === 1 ? "⚡" : i === 2 ? "🎯" : "🔧"}
              </span>
              <div className="a-title font-[var(--font-h)] text-[1.05rem] font-semibold mb-2 text-[var(--ink)]">{card.eyebrow}</div>
              <div className="a-text text-[var(--ink2)] text-[0.85rem] line-height-[1.6]">{card.description}</div>
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(42,90,255,0.04)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
          
          <div className="a-card rv d3 bg-white border border-[var(--border)] rounded-[20px] p-7 transition-all hover:border-[rgba(42,90,255,0.3)] hover:-translate-y-1 relative overflow-hidden group">
            <span className="a-icon text-[1.8rem] mb-4 block">✦</span>
            <div className="a-title font-[var(--font-h)] text-[1.05rem] font-semibold mb-2 text-[var(--ink)]">Premium Design</div>
            <div className="a-text text-[var(--ink2)] text-[0.85rem] line-height-[1.6]">Pixel-perfect interfaces users love to use.</div>
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(42,90,255,0.04)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        </div>
      </section>
    </>
  );
}
