"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Mail, Phone, MapPin } from "lucide-react";
import { useState, useTransition, useEffect } from "react";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(() => {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
          className="fixed inset-0 bg-[#f7f6f3] z-[3000] overflow-y-auto text-[var(--ink)] flex flex-col items-center justify-center"
        >
          {/* Header Area - Sticky-ish */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-14 py-6 md:py-8 z-20 w-full">
            <div className="logo font-[var(--font-h)] text-[1.4rem] font-bold text-[var(--ink)] tracking-[-0.5px]">
              Nimya<span className="text-[var(--accent)]">Tech</span>
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white border border-[var(--border)] flex items-center justify-center text-[var(--ink2)] hover:bg-[var(--accent)] hover:text-white transition-all shadow-sm"
            >
              <X size={20} />
            </button>
          </div>

          {/* Main Content Wrapper */}
          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-14 py-24 md:py-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 h-full min-h-screen lg:min-h-0">
            {/* Left Column: Contact Details */}
            <div className="lg:w-[40%] space-y-8 lg:space-y-12">
              <div className="space-y-4">
                <h2 className="font-[var(--font-h)] text-[2.5rem] md:text-[3rem] font-bold leading-[1.1] text-[var(--ink)] tracking-tight">
                  Let's create something <span className="text-[var(--accent)]">extraordinary.</span>
                </h2>
                <p className="text-[var(--ink2)] text-[1rem] leading-[1.65] max-w-[450px]">
                  Fill out the form below or reach out directly to start your journey to innovation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[var(--border)] flex items-center justify-center text-[var(--ink)] shadow-sm shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[0.65rem] uppercase tracking-[0.1em] text-[var(--ink3)] mb-0.5 font-bold">Email</div>
                    <div className="text-[0.9rem] font-semibold">nimyatech.ai@gmail.com</div>
                  </div>
                </div>

                {/* Phone 1 */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[var(--border)] flex items-center justify-center text-[var(--ink)] shadow-sm shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[0.65rem] uppercase tracking-[0.1em] text-[var(--ink3)] mb-0.5 font-bold">Phone</div>
                    <div className="text-[0.9rem] font-semibold">+91 92651 29764</div>
                  </div>
                </div>

                {/* Phone 2 */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[var(--border)] flex items-center justify-center text-[var(--ink)] shadow-sm shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[0.65rem] uppercase tracking-[0.1em] text-[var(--ink3)] mb-0.5 font-bold">Phone</div>
                    <div className="text-[0.9rem] font-semibold">+91 93274 11207</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[var(--border)] flex items-center justify-center text-[var(--ink)] shadow-sm shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[0.65rem] uppercase tracking-[0.1em] text-[var(--ink3)] mb-0.5 font-bold">Location</div>
                    <div className="text-[0.9rem] font-semibold">India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="flex-1 w-full max-w-[650px] bg-[#fcfbf9] border border-[var(--border)] rounded-[32px] p-6 md:p-10 shadow-sm mb-10 lg:mb-0">
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label className="text-[0.7rem] uppercase tracking-[0.12em] text-[var(--ink3)] font-bold ml-1">Name</label>
                    <input required type="text" placeholder="Your Name" className="w-full bg-white border border-[var(--border)] rounded-xl px-5 py-3.5 text-[0.95rem] focus:border-[var(--accent)] outline-none transition-all shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[0.7rem] uppercase tracking-[0.12em] text-[var(--ink3)] font-bold ml-1">Email</label>
                    <input required type="email" placeholder="hello@company.com" className="w-full bg-white border border-[var(--border)] rounded-xl px-5 py-3.5 text-[0.95rem] focus:border-[var(--accent)] outline-none transition-all shadow-sm" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[0.7rem] uppercase tracking-[0.12em] text-[var(--ink3)] font-bold ml-1">Message</label>
                  <textarea required rows={4} placeholder="Tell us about your project..." className="w-full bg-white border border-[var(--border)] rounded-xl px-5 py-3.5 text-[0.95rem] focus:border-[var(--accent)] outline-none transition-all resize-none shadow-sm"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full bg-[var(--ink)] text-white font-bold py-4 md:py-5 rounded-xl text-[0.95rem] transition-all hover:bg-[var(--accent)] hover:-translate-y-1 shadow-lg disabled:opacity-50 active:scale-[0.98]"
                >
                  {isPending ? "Sending..." : submitted ? "Message Sent!" : "Send Message →"}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}



