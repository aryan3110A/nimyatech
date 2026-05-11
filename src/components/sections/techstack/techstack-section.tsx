"use client";

import { useEffect, useRef } from "react";
import { techStack } from "@/data/site";
import { cn } from "@/lib/utils";

export function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Split tech stack for two rows
  const row1 = [...techStack, ...techStack];
  const row2 = [...techStack.slice().reverse(), ...techStack.slice().reverse()];

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
      <section id="techstack" ref={sectionRef} className="px-6 py-24 md:px-14 bg-[var(--bg)]">
        <div className="lbl rv flex items-center gap-2 text-[0.72rem] tracking-[0.22em] text-[var(--accent)] uppercase mb-3.5 font-semibold before:content-[''] before:w-5 before:h-[1.5px] before:bg-[var(--accent)] before:rounded-[2px]">
          Tech Stack
        </div>
        <h2 className="rv font-[var(--font-h)] text-[clamp(2rem,3.8vw,3rem)] font-bold line-height-[1.08] tracking-[-1.5px] text-[var(--ink)] mb-3.5">
          Powered by <span className="acc">modern tools</span>
        </h2>
        <div className="h-10" />
        
        <div className="mq-w rv overflow-hidden relative py-2 before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-[120px] before:z-[2] before:bg-gradient-to-r before:from-[var(--bg)] before:to-transparent after:content-[''] after:absolute after:inset-y-0 after:right-0 after:w-[120px] after:z-[2] after:bg-gradient-to-l after:from-[var(--bg)] after:to-transparent">
          <div className="mq-t flex gap-3.5 animate-mq hover:[animation-play-state:paused] w-max">
            {row1.map((tech, i) => (
              <div key={`${tech.name}-r1-${i}`} className="tc bg-white border border-[var(--border)] rounded-xl px-5 py-3 flex items-center gap-2.5 shrink-0 transition-all hover:border-[rgba(42,90,255,0.35)] hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] cursor-default">
                <span className="tc-i text-[1.15rem]">
                  {i % 12 === 0 ? "⚛️" : i % 12 === 1 ? "▲" : i % 12 === 2 ? "🎨" : i % 12 === 3 ? "🔷" : i % 12 === 4 ? "🟢" : i % 12 === 5 ? "🐍" : i % 12 === 6 ? "🧠" : i % 12 === 7 ? "🔥" : i % 12 === 8 ? "🍃" : i % 12 === 9 ? "🐳" : i % 12 === 10 ? "☁️" : "🖌️"}
                </span>
                <span className="tc-n text-[0.85rem] font-medium text-[var(--ink2)] whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
          
          <div className="mq-t flex gap-3.5 animate-mq mt-3.5 hover:[animation-play-state:paused] w-max [animation-direction:reverse] [animation-duration:34s]">
            {row2.map((tech, i) => (
              <div key={`${tech.name}-r2-${i}`} className="tc bg-white border border-[var(--border)] rounded-xl px-5 py-3 flex items-center gap-2.5 shrink-0 transition-all hover:border-[rgba(42,90,255,0.35)] hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] cursor-default">
                <span className="tc-i text-[1.15rem]">
                  {i % 12 === 0 ? "🎸" : i % 12 === 1 ? "🔴" : i % 12 === 2 ? "🐘" : i % 12 === 3 ? "🦄" : i % 12 === 4 ? "⚡" : i % 12 === 5 ? "🔐" : i % 12 === 6 ? "🌊" : i % 12 === 7 ? "📦" : i % 12 === 8 ? "🛠️" : i % 12 === 9 ? "⚙️" : i % 12 === 10 ? "📱" : "💻"}
                </span>
                <span className="tc-n text-[0.85rem] font-medium text-[var(--ink2)] whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
