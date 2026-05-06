"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";

type NavbarProps = {
  activeSection: string;
};

export function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      animate={{ opacity: 1, y: 0 }}
      className="fixed inset-x-0 top-0 z-[72]"
      initial={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto flex w-full max-w-315 items-center justify-between px-2 py-4 sm:px-5 md:px-4 lg:px-0">
        <div
          className={cn(
            "section-frame glass-panel flex w-full items-center justify-between rounded-full border border-white/10 px-2 md:px-4 py-1 md:py-2 shadow-[0_16px_70px_rgba(3,7,18,0.28)] transition-all duration-300",
            scrolled && "border-cyan-300/20 bg-[rgba(8,11,24,0.82)] shadow-[0_20px_90px_rgba(3,7,18,0.42)]",
          )}
        >
          <a className="flex items-center gap-1.5 sm:gap-3" href="#top">
            <Image
              alt="NimyaTech logo"
              className="h-auto w-[24px] shrink-0 object-contain sm:w-[32px]"
              height={50}
              priority
              src="/logo-DZTJZMZn.png"
              width={50}
            />
            <div>
              <p className="font-display text-base font-semibold tracking-[-0.03em] text-white md:text-md">
                NimyaTech
              </p>
              <p className="hidden text-[0.5rem] uppercase tracking-[0.22em] text-white/38 lg:block">
                Turning complexity into clarity
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium text-white/68 transition-colors duration-300 hover:text-white",
                    isActive && "text-white",
                  )}
                  href={`#${item.id}`}
                >
                  <span>{item.label}</span>
                  <span
                    className={cn(
                      "absolute inset-x-4 bottom-1 h-px origin-left rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 transition-transform duration-300",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </a>
              );
            })}
          </nav>

          <button
            aria-label="Toggle mobile menu"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            type="button"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mx-5 mt-2 rounded-[28px] border border-white/10 bg-[rgba(7,10,25,0.94)] p-5 shadow-[0_24px_80px_rgba(2,6,23,0.5)] backdrop-blur-xl md:mx-8 lg:hidden"
            exit={{ opacity: 0, y: -14 }}
            initial={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white/78"
                  href={`#${item.id}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}