"use client";

import Image from "next/image";
import { contactLinks, footerServices, navItems } from "@/data/site";
import { useEffect, useRef } from "react";

export function FooterSection() {
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
    <footer ref={sectionRef} className="px-6 py-20 md:px-14 bg-white border-t border-[var(--border)] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="f-col rv">
            <div className="f-logo flex items-center gap-2.5 mb-6">
              <div className="f-logo-ic w-9 h-9 bg-[var(--accent)] rounded-lg flex items-center justify-center text-white font-bold text-[1.1rem]">N</div>
              <span className="font-[var(--font-h)] text-[1.2rem] font-bold text-[var(--ink)] tracking-[-0.5px]">NimyaTech</span>
            </div>
            <div className="f-desc text-[var(--ink3)] text-[0.88rem] line-height-[1.65] max-w-[280px]">
              Technology that moves businesses forward. AI-driven solutions and world-class digital products.
            </div>
          </div>
          
          <div className="f-col rv d1">
            <div className="f-title text-[0.72rem] uppercase tracking-[0.15em] text-[var(--ink)] font-bold mb-7">Quick Links</div>
            <div className="f-links flex flex-col gap-4">
              {navItems.map(item => (
                <a key={item.id} href={`#${item.id}`} className="f-link text-[0.88rem] text-[var(--ink3)] hover:text-[var(--accent)] transition-colors w-max">{item.label}</a>
              ))}
            </div>
          </div>
          
          <div className="f-col rv d2">
            <div className="f-title text-[0.72rem] uppercase tracking-[0.15em] text-[var(--ink)] font-bold mb-7">Our Services</div>
            <div className="f-links flex flex-col gap-4">
              {footerServices.map(service => (
                <span key={service} className="f-link text-[0.88rem] text-[var(--ink3)] cursor-default">{service}</span>
              ))}
            </div>
          </div>
          
          <div className="f-col rv d3">
            <div className="f-title text-[0.72rem] uppercase tracking-[0.15em] text-[var(--ink)] font-bold mb-7">Get In Touch</div>
            <div className="f-links flex flex-col gap-4">
              {contactLinks.map(item => (
                <a key={item.value} href={item.href} className="f-link text-[0.88rem] text-[var(--ink3)] hover:text-[var(--accent)] transition-colors w-max flex flex-col">
                  <span className="text-[0.65rem] uppercase tracking-[0.05em] text-[var(--ink3)] opacity-60 mb-0.5">{item.label}</span>
                  {item.value}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="f-bottom mt-20 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="f-copy text-[var(--ink3)] text-[0.82rem]">© 2024 NimyaTech. All rights reserved.</div>
          <div className="f-social flex gap-6">
            <a href="#" className="text-[var(--ink3)] hover:text-[var(--accent)] text-[0.82rem] font-medium transition-colors">Twitter</a>
            <a href="#" className="text-[var(--ink3)] hover:text-[var(--accent)] text-[0.82rem] font-medium transition-colors">LinkedIn</a>
            <a href="#" className="text-[var(--ink3)] hover:text-[var(--accent)] text-[0.82rem] font-medium transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
