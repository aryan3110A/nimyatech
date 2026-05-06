"use client";

import { ArrowUpRight } from "lucide-react";
import { type MouseEvent, type ReactNode, useState } from "react";

import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  className,
}: MagneticButtonProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 14;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 14;
    setOffset({ x, y });
  };

  return (
    <a
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border px-6 py-3 text-sm font-semibold tracking-[0.02em] transition-[border-color,background-color,color,box-shadow] duration-300 will-change-transform max-sm:w-full",
        variant === "primary"
          ? "border-cyan-300/35 bg-[linear-gradient(135deg,rgba(110,231,249,0.18),rgba(125,96,255,0.3),rgba(12,18,38,0.92))] text-white shadow-[0_14px_44px_rgba(76,110,245,0.18)] hover:border-cyan-200/55 hover:shadow-[0_18px_50px_rgba(110,231,249,0.16)]"
          : "border-white/12 bg-white/5 text-white hover:border-cyan-300/40 hover:bg-white/10",
        className,
      )}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}
