"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
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
    const handleScroll = () => setScrolled(window.scrollY > 50);

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
    <header
      id="nav"
      className={cn(
        "fixed top-0 left-0 right-0 z-[1000] px-6 py-[22px] md:px-14 flex items-center justify-between transition-all duration-400",
        scrolled && "bg-[rgba(247,246,243,0.85)] backdrop-blur-[20px] border-b border-[var(--border)] py-[14px]"
      )}
    >
      <div className="logo font-[var(--font-h)] text-[1.4rem] font-bold text-[var(--ink)] tracking-[-0.5px]">
        Nimya<span className="text-[var(--accent)]">Tech</span>
      </div>

      {/* Desktop Links */}
      <ul className="hidden lg:flex gap-8 list-none items-center">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              className={cn(
                "text-[0.875rem] font-medium tracking-[0.01em] transition-colors duration-250",
                activeSection === item.id ? "text-[var(--ink)]" : "text-[var(--ink2)] hover:text-[var(--ink)]"
              )}
              href={`#${item.id}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <button 
        className="nav-btn hidden md:block bg-[var(--ink)] text-white px-[22px] py-[9px] rounded-[100px] text-[0.82rem] font-medium border-none cursor-none font-[var(--font-b)] transition-all duration-250 hover:bg-[var(--accent)] hover:scale-[1.03]"
        onClick={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Get Started →
      </button>

      {/* Mobile Toggle */}
      <button
        aria-label="Toggle mobile menu"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--ink)] lg:hidden"
        onClick={() => setMobileOpen((value) => !value)}
        type="button"
      >
        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-0 top-[70px] bg-[var(--bg)] p-6 z-[1001] lg:hidden"
            exit={{ opacity: 0, y: -20 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  className={cn(
                    "text-xl font-semibold transition-colors",
                    activeSection === item.id ? "text-[var(--accent)]" : "text-[var(--ink)]"
                  )}
                  href={`#${item.id}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button 
                className="mt-4 bg-[var(--ink)] text-white px-6 py-3 rounded-full font-medium"
                onClick={() => {
                  setMobileOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Started →
              </button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}