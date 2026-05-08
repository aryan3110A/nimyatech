"use client";

import { useEffect, useRef } from "react";
import { projects } from "@/data/site";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
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
      <section id="projects" ref={sectionRef} className="px-6 py-24 md:px-14 bg-white">
        <div className="lbl rv flex items-center gap-2 text-[0.72rem] tracking-[0.22em] text-[var(--accent)] uppercase mb-3.5 font-semibold before:content-[''] before:w-5 before:h-[1.5px] before:bg-[var(--accent)] before:rounded-[2px]">
          Our Work
        </div>
        <h2 className="rv font-[var(--font-h)] text-[clamp(2rem,3.8vw,3rem)] font-bold line-height-[1.08] tracking-[-1.5px] text-[var(--ink)] mb-3.5">
          Featured<br /><span className="acc">projects</span>
        </h2>
        <p className="sub rv text-[var(--ink2)] text-[1rem] font-normal line-height-[1.65] max-w-[480px] mb-[52px]">
          A selection of our most impactful work across AI, web, and automation.
        </p>

        <div className="prj-g grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div key={project.title} className={cn("prj-c rv rounded-[20px] overflow-hidden border border-[var(--border)] bg-[var(--bg)] transition-all hover:border-[rgba(42,90,255,0.25)] hover:-translate-y-[6px] hover:shadow-[0_24px_50px_rgba(0,0,0,0.08)]", `d${i % 3}`)}>
              <div className="prj-th h-[180px] flex items-center justify-center text-[2.8rem] relative overflow-hidden" style={{ background: i % 3 === 0 ? 'linear-gradient(135deg,#eef2ff,#e0e7ff)' : i % 3 === 1 ? 'linear-gradient(135deg,#ecfdf5,#d1fae5)' : 'linear-gradient(135deg,#fdf4ff,#fae8ff)' }}>
                {i === 0 ? "🤖" : i === 1 ? "🌐" : i === 2 ? "📊" : "📱"}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[rgba(42,90,255,0.06)]" />
              </div>
              <div className="prj-body p-[22px]">
                <div className="prj-tags flex gap-1.5 flex-wrap mb-[10px]">
                  {project.stack.map(tag => (
                    <span key={tag} className="ptag text-[0.68rem] px-[9px] py-[3px] rounded-[100px] bg-[rgba(42,90,255,0.08)] text-[var(--accent)] font-semibold tracking-[0.04em]">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="prj-t font-[var(--font-h)] text-[1rem] font-semibold text-[var(--ink)] mb-1.5">{project.title}</div>
                <div className="prj-d text-[var(--ink3)] text-[0.82rem] line-height-[1.5] mb-3.5">{project.summary}</div>
                <div className="prj-ln flex gap-3.5">
                  <a className="pl text-[0.78rem] text-[var(--accent)] font-semibold hover:text-[var(--accent2)] transition-colors" href="#">Live Demo ↗</a>
                  <a className="pl text-[0.78rem] text-[var(--accent)] font-semibold hover:text-[var(--accent2)] transition-colors" href="#">GitHub ↗</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
