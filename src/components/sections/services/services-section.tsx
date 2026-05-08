"use client";

import { useEffect, useRef } from "react";
import { services } from "@/data/site";
import { cn } from "@/lib/utils";

export function ServicesSection() {
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
      <section id="services" ref={sectionRef} className="px-6 py-24 md:px-14 bg-white">
        <div className="lbl rv flex items-center gap-2 text-[0.72rem] tracking-[0.22em] text-[var(--accent)] uppercase mb-3.5 font-semibold before:content-[''] before:w-5 before:h-[1.5px] before:bg-[var(--accent)] before:rounded-[2px]">
          What We Do
        </div>
        <h2 className="rv font-[var(--font-h)] text-[clamp(2rem,3.8vw,3rem)] font-bold line-height-[1.08] tracking-[-1.5px] text-[var(--ink)] mb-3.5">
          Services for<br /><span className="acc">modern business</span>
        </h2>
        
        <div className="svc-g grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {services.map((service, i) => (
            <div key={service.title} className={cn("svc-c rv bg-[var(--bg)] border border-[var(--border)] rounded-[18px] p-6 transition-all hover:bg-white hover:border-[rgba(42,90,255,0.3)] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] group relative overflow-hidden", `d${i % 4}`)}>
              <div className="svc-ic w-11 h-11 rounded-xl bg-gradient-to-br from-[rgba(42,90,255,0.1)] to-[rgba(124,58,237,0.07)] border border-[rgba(42,90,255,0.15)] flex items-center justify-center text-[1.2rem] mb-4 transition-transform group-hover:scale-[1.08] group-hover:-rotate-4">
                {i === 0 ? "🧠" : i === 1 ? "🌐" : i === 2 ? "📱" : i === 3 ? "📢" : i === 4 ? "💬" : i === 5 ? "⚙️" : i === 6 ? "✦" : "🎨"}
              </div>
              <div className="svc-n font-[var(--font-h)] text-[0.95rem] font-semibold mb-[7px] text-[var(--ink)]">{service.title}</div>
              <div className="svc-d text-[var(--ink3)] text-[0.8rem] line-height-[1.55]">{service.description}</div>
              <div className="svc-arr absolute bottom-5 right-5 w-7 h-7 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-[0.85rem] opacity-0 scale-[0.7] transition-all group-hover:opacity-100 group-hover:scale-100">↗</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
