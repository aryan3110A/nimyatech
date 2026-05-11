"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { services } from "@/data/site";
import { cn } from "@/lib/utils";

function ServiceCard({ service, i }: { service: any; i: number }) {
  return (
    <div key={service.title} className={cn("flip-card rv h-[300px] relative group", `d${i % 4}`)}>
      <div className="flip-card-inner relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Face - Image */}
        <div className="flip-card-front absolute inset-0 overflow-hidden border border-[var(--border)] rounded-[18px] [backface-visibility:hidden]">
          <Image 
            src={service.image} 
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-white font-[var(--font-h)] text-[1.1rem] font-bold tracking-tight">
              {service.title}
            </div>
            <div className="text-white/60 text-[0.7rem] mt-1 uppercase tracking-widest font-medium">View Details →</div>
          </div>
        </div>

        {/* Back Face - Information */}
        <div className="flip-card-back absolute inset-0 bg-[var(--ink)] text-white p-8 border border-[rgba(255,255,255,0.1)] rounded-[18px] flex flex-col items-start text-left [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="svc-ic w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[1.2rem] mb-5">
            {i === 0 ? "🧠" : i === 1 ? "🌐" : i === 2 ? "📱" : i === 3 ? "📢" : i === 4 ? "💬" : i === 5 ? "⚙️" : i === 6 ? "✦" : "🎨"}
          </div>
          <div className="svc-n font-[var(--font-h)] text-[1rem] font-bold mb-3">{service.title}</div>
          <div className="svc-d text-white/70 text-[0.82rem] leading-[1.6] mb-6">{service.description}</div>
          <div className="mt-auto">
            <a href="#contact" className="text-[0.75rem] font-bold text-[var(--accent3)] hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest">
              Get Started <span className="text-[1.1rem]">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

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
          Services for <span className="acc">modern business</span>
        </h2>

        <div className="svc-g grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} i={i} />
          ))}
        </div>
      </section>
    </>
  );
}
