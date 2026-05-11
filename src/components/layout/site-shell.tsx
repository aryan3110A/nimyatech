"use client";

import { AboutSection } from "@/components/sections/about/about-section";
import { ContactSection } from "@/components/sections/contact/contact-section";
import { FooterSection } from "@/components/sections/footer/footer-section";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { Navbar } from "@/components/sections/navbar/navbar";
import { ProjectsSection } from "@/components/sections/projects/projects-section";
import { ServicesSection } from "@/components/sections/services/services-section";
import { TechStackSection } from "@/components/sections/techstack/techstack-section";
import { TestimonialsSection } from "@/components/sections/testimonials/testimonials-section";
import { TimelineSection } from "@/components/sections/timeline/timeline-section";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { navItems } from "@/data/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { ContactModal } from "@/components/modals/contact-modal";
import { useState } from "react";

const observedSections = navItems.map((item) => item.id);

export function SiteShell() {
  const activeSection = useActiveSection(observedSections);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <SmoothScroll>
        <CustomCursor />
        <ScrollProgress />
        <Navbar activeSection={activeSection} onContactClick={() => setIsContactOpen(true)} />
        <main className="overflow-x-clip">
          <HeroSection />
          {/* <AboutSection /> */}
          <ServicesSection />
          {/* <TimelineSection /> */}
          <TechStackSection />
          {/* <ProjectsSection /> */}
          <TestimonialsSection />
          <ContactSection />
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
