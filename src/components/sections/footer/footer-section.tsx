import Image from "next/image";

import { contactLinks, footerServices, navItems } from "@/data/site";

export function FooterSection() {
  return (
    <footer className="border-t border-white/10 px-5 pb-10 pt-8 md:px-8 lg:px-10">
      <div className="mx-auto grid w-full max-w-[1260px] gap-10 md:grid-cols-[1.3fr_0.9fr_0.9fr_1fr]">
        <div>
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
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">
            Premium AI systems, modern product design, scalable engineering, and
            digital growth delivery for ambitious businesses.
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/42">
            Quick links
          </p>
          <div className="mt-4 space-y-3 text-sm text-white/68">
            {navItems.map((item) => (
              <a
                key={item.id}
                className="block hover:text-white"
                href={`#${item.id}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/42">
            Services
          </p>
          <div className="mt-4 space-y-3 text-sm text-white/68">
            {footerServices.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/42">
            Connect
          </p>
          <div className="mt-4 space-y-3 text-sm text-white/68">
            {contactLinks.slice(0, 3).map((item) => (
              <a
                key={`${item.label}-${item.value}`}
                className="block hover:text-white"
                href={item.href}
              >
                {item.value}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex w-full max-w-[1260px] flex-col justify-between gap-3 border-t border-white/10 pt-5 text-sm text-white/42 md:flex-row md:items-center">
        <p>© 2026 NimyaTech. Designed for modern AI-led growth.</p>
        <p>
          Built with Next.js, motion, and performance-first UI architecture.
        </p>
      </div>
    </footer>
  );
}
