import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-2.5",
        align === "center" && "mx-auto text-center",
      )}
    >
      <p className="text-sm uppercase tracking-[0.28em] text-white/45 sm:text-xs sm:tracking-[0.32em]">
        {eyebrow}
      </p>
      <h2 className="font-display text-md font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[2.35rem] md:text-[2.85rem]">
        {title}
      </h2>
      <p className="text-xs leading-5 text-white/64 sm:text-base sm:leading-8 md:max-w-2xl">
        {description}
      </p>
    </div>
  );
}
