"use client";

import {
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
  useMemo,
  useState,
} from "react";

import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const [spotlight, setSpotlight] = useState({ x: "50%", y: "50%" });

  const style = useMemo(
    () =>
      ({
        "--spotlight-x": spotlight.x,
        "--spotlight-y": spotlight.y,
      }) as CSSProperties,
    [spotlight],
  );

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = `${event.clientX - bounds.left}px`;
    const y = `${event.clientY - bounds.top}px`;
    setSpotlight({ x, y });
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl",
        className,
      )}
      onPointerMove={handleMove}
      style={style}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--spotlight-x) var(--spotlight-y), rgba(110,231,249,0.20), transparent 60%)",
        }}
      />
      <div className="pointer-events-none absolute inset-px rounded-[27px] border border-white/6" />
      <div className="relative">{children}</div>
    </div>
  );
}
