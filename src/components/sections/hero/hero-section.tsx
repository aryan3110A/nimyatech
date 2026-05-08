"use client";

import { useEffect, useState } from "react";
import { stats } from "@/data/site";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, i) => {
      const target = stat.value;
      const step = target / 55;
      let current = 0;
      return setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(intervals[i]);
        }
        setCounts(prev => {
          const next = [...prev];
          next[i] = Math.round(current);
          return next;
        });
      }, 16);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section id="hero" className="min-h-svh flex items-center px-6 md:px-14 bg-white relative overflow-hidden pt-20">
      <div className="hero-dots absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.07)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_70%_70%_at_60%_50%,black_30%,transparent_80%)] pointer-events-none" />
      <div className="hero-blob hb1 absolute w-[500px] h-[500px] bg-[rgba(42,90,255,0.07)] top-[-60px] right-[-80px] rounded-full blur-[80px] animate-[hbf_9s_ease-in-out_infinite]" />
      <div className="hero-blob hb2 absolute w-[300px] h-[300px] bg-[rgba(124,58,237,0.06)] bottom-[-40px] left-[5%] rounded-full blur-[80px] animate-[hbf_12s_ease-in-out_infinite_reverse]" />
      
      <div className="hero-l relative z-10 max-w-[640px]">
        <div className="h-badge inline-flex items-center gap-[7px] bg-[#f0eeff] border border-[rgba(124,58,237,0.2)] rounded-[100px] padding-[5px_14px_5px_8px] px-3 py-1 text-[0.78rem] text-[var(--accent2)] mb-7 font-medium opacity-0 animate-[fu_0.7s_0.15s_forwards]">
          <div className="h-badge-dot w-1.5 h-1.5 bg-[var(--accent2)] rounded-full animate-[pd_2s_infinite]" />
          AI · Web · Automation
        </div>
        
        <h1 className="font-[var(--font-h)] text-[clamp(3rem,6.5vw,5.2rem)] font-bold leading-[1.04] tracking-[-2.5px] mb-[22px] text-[var(--ink)] opacity-0 animate-[fu_0.9s_0.3s_forwards]">
          <span className="acc">Technology</span><br />that moves<br />businesses forward.
        </h1>
        
        <p className="hero-p text-[var(--ink2)] text-[1.05rem] leading-[1.7] font-normal max-w-[500px] mb-9 opacity-0 animate-[fu_0.8s_0.55s_forwards]">
          We design, build, and scale digital products — from AI systems to stunning web apps.
        </p>
        
        <div className="hero-btns flex gap-[14px] opacity-0 animate-[fu_0.8s_0.7s_forwards]">
          <a href="#services" className="btn-p bg-[var(--ink)] text-white px-[30px] py-[13px] rounded-[100px] text-[0.9rem] font-medium inline-flex items-center gap-[7px] transition-all hover:bg-[var(--accent)] hover:-translate-y-0.5">
            Explore Services →
          </a>
          <a href="#projects" className="btn-g bg-transparent text-[var(--ink)] px-[30px] py-[13px] rounded-[100px] text-[0.9rem] font-medium border-[1.5px] border-[var(--border)] transition-all hover:border-[var(--ink)] hover:-translate-y-0.5">
            View Work
          </a>
        </div>
        
        <div className="stats flex gap-0 mt-12 pt-9 border-t border-[var(--border)] opacity-0 animate-[fu_0.8s_0.85s_forwards]">
          {stats.slice(0, 3).map((stat, i) => (
            <div key={stat.label} className={cn("stat pr-9 mr-9 border-r border-[var(--border)]", i === 2 && "border-r-0")}>
              <div className="stat-n font-[var(--font-h)] text-[2rem] font-bold text-[var(--ink)] line-height-1">
                {counts[i]}{stat.suffix}
              </div>
              <div className="stat-l text-[0.78rem] text-[var(--ink3)] mt-1 tracking-[0.04em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-r absolute right-20 top-1/2 -translate-y-1/2 w-[380px] h-[380px] hidden lg:block opacity-0 animate-[fu_1s_0.9s_forwards]">
        <div className="h-rings w-full h-full relative flex items-center justify-center">
          <div className="h-ring hr1 absolute w-[340px] h-[340px] border border-[rgba(42,90,255,0.12)] rounded-full animate-[spin_18s_linear_infinite]" />
          <div className="h-ring hr2 absolute w-[260px] h-[260px] border border-[rgba(124,58,237,0.15)] rounded-full animate-[spin_13s_linear_infinite_reverse]" />
          <div className="h-ring hr3 absolute w-[180px] h-[180px] border border-[rgba(6,182,212,0.18)] rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="h-core w-[110px] h-[110px] rounded-full bg-[linear-gradient(135deg,rgba(42,90,255,0.15),rgba(124,58,237,0.1))] border border-[rgba(42,90,255,0.2)] flex items-center justify-center font-[var(--font-h)] text-[1.1rem] font-bold text-[var(--accent)] tracking-[-0.5px] animate-[pp_4s_ease-in-out_infinite]">
            NT
          </div>
        </div>
      </div>
    </section>
  );
}
