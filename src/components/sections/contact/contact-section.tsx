"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { contactLinks } from "@/data/site";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Phone } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  message: "",
};

function iconFor(label: string) {
  if (label === "Email") return Mail;
  if (label === "Location") return MapPin;
  return Phone;
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(() => {
      setSubmitted(true);
      setForm(initialForm);
      setTimeout(() => setSubmitted(false), 3000);
    });
  };

  return (
    <>
      <div className="divider" />
      <section id="contact" ref={sectionRef} className="px-6 py-24 md:px-14 bg-white relative overflow-hidden">
        <div className="lbl rv flex items-center gap-2 text-[0.72rem] tracking-[0.22em] text-[var(--accent)] uppercase mb-3.5 font-semibold before:content-[''] before:w-5 before:h-[1.5px] before:bg-[var(--accent)] before:rounded-[2px]">
          Get In Touch
        </div>
        <h2 className="rv font-[var(--font-h)] text-[clamp(2rem,3.8vw,3rem)] font-bold line-height-[1.08] tracking-[-1.5px] text-[var(--ink)] mb-12">
          Start your next<br /><span className="acc">project with us</span>
        </h2>

        <div className="contact-g grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 mt-16">
          <div className="c-info rv">
            <div className="c-txt text-[var(--ink2)] text-[0.95rem] line-height-[1.65] mb-10 max-w-[400px]">
              Ready to bring your ideas to life? Fill out the form or reach us directly.
            </div>
            <div className="c-list space-y-7">
              {contactLinks.map((item) => {
                const Icon = iconFor(item.label);
                return (
                  <a key={item.value} href={item.href} className="c-item flex items-center gap-5 group">
                    <div className="c-ic w-12 h-12 rounded-2xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-[1.1rem] text-[var(--ink)] transition-all group-hover:bg-[var(--accent)] group-hover:text-white group-hover:border-[var(--accent)] group-hover:-translate-y-1">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="c-label text-[0.7rem] uppercase tracking-[0.1em] text-[var(--ink3)] mb-0.5 font-bold">{item.label}</div>
                      <div className="c-val text-[0.95rem] font-semibold text-[var(--ink)]">{item.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="c-form rv bg-[var(--bg)] border border-[var(--border)] rounded-[24px] p-8 md:p-10 relative overflow-hidden group">
            <form onSubmit={handleSubmit} className="relative z-[1] space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="f-group">
                  <label className="f-label block text-[0.72rem] uppercase tracking-[0.12em] text-[var(--ink3)] font-bold mb-2 ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    required 
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="f-input w-full bg-white border border-[var(--border)] rounded-xl px-5 py-3.5 text-[0.9rem] text-[var(--ink)] transition-all focus:border-[var(--accent)] focus:ring-4 focus:ring-[rgba(42,90,255,0.05)] outline-none" 
                  />
                </div>
                <div className="f-group">
                  <label className="f-label block text-[0.72rem] uppercase tracking-[0.12em] text-[var(--ink3)] font-bold mb-2 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="hello@company.com" 
                    required 
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="f-input w-full bg-white border border-[var(--border)] rounded-xl px-5 py-3.5 text-[0.9rem] text-[var(--ink)] transition-all focus:border-[var(--accent)] focus:ring-4 focus:ring-[rgba(42,90,255,0.05)] outline-none" 
                  />
                </div>
              </div>
              <div className="f-group">
                <label className="f-label block text-[0.72rem] uppercase tracking-[0.12em] text-[var(--ink3)] font-bold mb-2 ml-1">Message</label>
                <textarea 
                  placeholder="Tell us about your project..." 
                  rows={4} 
                  required 
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="f-input w-full bg-white border border-[var(--border)] rounded-xl px-5 py-3.5 text-[0.9rem] text-[var(--ink)] transition-all focus:border-[var(--accent)] focus:ring-4 focus:ring-[rgba(42,90,255,0.05)] outline-none resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isPending}
                className="f-btn w-full bg-[var(--ink)] text-white font-bold py-4 rounded-xl text-[0.95rem] transition-all hover:bg-[var(--accent)] hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(42,90,255,0.2)] disabled:opacity-70"
              >
                {isPending ? "Sending..." : "Send Message →"}
              </button>
              {submitted && (
                <div className="text-center text-[var(--accent)] font-bold text-sm mt-4 animate-pulse">
                  Message Sent Successfully!
                </div>
              )}
            </form>
            <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--accent)] opacity-[0.03] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          </div>
        </div>
      </section>
    </>
  );
}
