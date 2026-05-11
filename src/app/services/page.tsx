"use client";

import { ServicesSection } from "@/components/sections/services/services-section";
import { FooterSection } from "@/components/sections/footer/footer-section";
import { Navbar } from "@/components/sections/navbar/navbar";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { ContactSection } from "@/components/sections/contact/contact-section";
import { ContactModal } from "@/components/modals/contact-modal";
import { useState } from "react";
import { TechStackSection } from "@/components/sections/techstack/techstack-section";

export default function ServicesPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <SmoothScroll>
        <CustomCursor />
        <ScrollProgress />
        <Navbar activeSection="services" onContactClick={() => setIsContactOpen(true)} />
        <main className="overflow-x-clip pt-20">
          <div className="py-20 px-6 md:px-14 bg-white border-b border-[var(--border)]">
            <h1 className="font-[var(--font-h)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-[-2px] text-[var(--ink)] mb-6">
              Our <span className="acc">Services</span>
            </h1>
            <p className="text-[var(--ink2)] text-[1.1rem] leading-[1.8] max-w-[700px]">
              We provide end-to-end digital solutions, from AI-powered automation to
              stunning user experiences. Explore how we can help your business grow.
            </p>
          </div>
          <ServicesSection />
          {/* <TechStackSection /> */}
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
