"use client";

import { AboutSection } from "@/components/sections/about/about-section";
import { FooterSection } from "@/components/sections/footer/footer-section";
import { Navbar } from "@/components/sections/navbar/navbar";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { TimelineSection } from "@/components/sections/timeline/timeline-section";
import { TechStackSection } from "@/components/sections/techstack/techstack-section";
import { ContactModal } from "@/components/modals/contact-modal";
import { useState } from "react";

export default function AboutPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <SmoothScroll>
        <CustomCursor />
        <ScrollProgress />
        <Navbar activeSection="about" onContactClick={() => setIsContactOpen(true)} />
        <main className="overflow-x-clip pt-20">
          <div className="py-20 px-6 md:px-14 bg-white border-b border-[var(--border)]">
            <h1 className="font-[var(--font-h)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-[-2px] text-[var(--ink)] mb-6">
              About <span className="acc">NimyaTech</span>
            </h1>
            <p className="text-[var(--ink2)] text-[1.1rem] leading-[1.8] max-w-[700px]">
              We are a team of designers, developers, and AI engineers dedicated to building 
              high-impact digital products that move businesses forward.
            </p>
          </div>
          <AboutSection />
          <TimelineSection />
        </main>
        <FooterSection />
      </SmoothScroll>

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </>
  );
}
