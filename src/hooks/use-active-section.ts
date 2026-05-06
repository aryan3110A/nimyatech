"use client";

import { useEffect, useState } from "react";

export function useActiveSection(ids: string[]) {
  const [activeSection, setActiveSection] = useState(ids[0] ?? "");

  useEffect(() => {
    if (!ids.length) {
      return;
    }

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (left, right) => right.intersectionRatio - left.intersectionRatio,
          );

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-18% 0px -52% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [ids]);

  return activeSection;
}
