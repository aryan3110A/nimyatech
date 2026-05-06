"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { ChangeEvent, FormEvent, useState, useTransition } from "react";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { contactLinks, globePillars } from "@/data/site";

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

  const updateField =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setSubmitted(false);
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    startTransition(() => {
      setSubmitted(true);
      setForm(initialForm);
    });
  };

  return (
    <section
      id="contact"
      className="scroll-mt-28 px-4 py-14 sm:px-5 sm:py-16 md:px-8 lg:px-10 lg:py-24"
    >
      <div className="mx-auto w-full max-w-300">
        <Reveal>
          <SectionHeading
            description="Use this section as the conversion endpoint: a premium form on one side, a living AI-globe visual and direct contact information on the other."
            eyebrow="Get in touch"
            title="Start the conversation with a contact experience that feels elevated, not generic."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-12 md:gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <div className="section-frame glass-panel relative rounded-[30px] border border-white/10 p-5 shadow-[0_20px_70px_rgba(2,6,23,0.32)] sm:p-6 md:p-8">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label
                    className="mb-3 block text-sm font-medium text-white/78"
                    htmlFor="name"
                  >
                    Your Name
                  </label>
                  <input
                    className="w-full rounded-[22px] border border-white/10 bg-white/[0.05] px-4 py-3.5 text-white outline-none transition-colors duration-300 placeholder:text-white/28 focus:border-cyan-300/40 sm:px-5 sm:py-4"
                    id="name"
                    onChange={updateField("name")}
                    placeholder="What's your name?"
                    required
                    value={form.name}
                  />
                </div>
                <div>
                  <label
                    className="mb-3 block text-sm font-medium text-white/78"
                    htmlFor="email"
                  >
                    Your Email
                  </label>
                  <input
                    className="w-full rounded-[22px] border border-white/10 bg-white/[0.05] px-4 py-3.5 text-white outline-none transition-colors duration-300 placeholder:text-white/28 focus:border-cyan-300/40 sm:px-5 sm:py-4"
                    id="email"
                    onChange={updateField("email")}
                    placeholder="What's your email?"
                    required
                    type="email"
                    value={form.email}
                  />
                </div>
                <div>
                  <label
                    className="mb-3 block text-sm font-medium text-white/78"
                    htmlFor="message"
                  >
                    Your Message
                  </label>
                  <textarea
                    className="min-h-36 w-full rounded-[22px] border border-white/10 bg-white/[0.05] px-4 py-3.5 text-white outline-none transition-colors duration-300 placeholder:text-white/28 focus:border-cyan-300/40 sm:min-h-40 sm:px-5 sm:py-4"
                    id="message"
                    onChange={updateField("message")}
                    placeholder="What do you want to build?"
                    required
                    value={form.message}
                  />
                </div>

                <button
                  className="inline-flex items-center justify-center rounded-full border border-cyan-300/25 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-colors duration-300 hover:border-white"
                  disabled={isPending}
                  type="submit"
                >
                  {isPending ? "Sending..." : "Send message"}
                </button>

                {submitted ? (
                  <p className="text-sm text-cyan-200/80">
                    Thanks. Your message is captured in the UI flow and ready to
                    wire into your preferred backend.
                  </p>
                ) : null}
              </form>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="section-frame glass-panel relative overflow-hidden rounded-[30px] border border-white/10 p-5 shadow-[0_20px_70px_rgba(2,6,23,0.32)] sm:p-6 md:p-8">
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
                <div className="relative flex min-h-[18rem] items-center justify-center overflow-hidden rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_50%_45%,rgba(110,231,249,0.12),rgba(125,96,255,0.28),rgba(5,8,22,0.92))] sm:min-h-[22rem] lg:min-h-[24rem]">
                  <motion.div
                    animate={{ rotate: 360 }}
                    className="absolute h-[18rem] w-[18rem] rounded-full border border-cyan-300/22"
                    transition={{
                      duration: 24,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    className="absolute h-[13rem] w-[13rem] rounded-full border border-white/16 border-dashed"
                    transition={{
                      duration: 16,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  />
                  <div className="relative h-32 w-32 rounded-full border border-white/12 bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.42),rgba(34,197,94,0.18),rgba(59,130,246,0.34),rgba(5,8,22,0.96))] shadow-[0_14px_60px_rgba(14,165,233,0.25)] sm:h-40 sm:w-40" />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-white/42">
                    Reach us directly
                  </p>
                  <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
                    {contactLinks.map((item) => {
                      const Icon = iconFor(item.label);

                      return (
                        <a
                          key={`${item.label}-${item.value}`}
                          className="flex items-start gap-3 rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-3.5 transition-colors duration-300 hover:border-cyan-300/30 sm:gap-4 sm:px-5 sm:py-4"
                          href={item.href}
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] sm:h-11 sm:w-11">
                            <Icon className="h-5 w-5 text-cyan-300" />
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.28em] text-white/42">
                              {item.label}
                            </p>
                            <p className="mt-2 text-sm font-medium text-white/82">
                              {item.value}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>

                  <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
                    {globePillars.map((pillar) => (
                      <div
                        key={pillar}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/64"
                      >
                        {pillar}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
