import type { LucideIcon } from "lucide-react";

export type NavItem = {
  id: string;
  label: string;
  href?: string;
};

export type StatItem = {
  label: string;
  value: number;
  suffix?: string;
  description: string;
};

export type AboutCard = {
  eyebrow: string;
  title: string;
  description: string;
  accent: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  image: string;
};

export type TimelineItem = {
  period: string;
  title: string;
  company: string;
  description: string[];
};

export type TechItem = {
  name: string;
  icon: LucideIcon;
  tone: string;
};

export type ProjectItem = {
  title: string;
  summary: string;
  stack: string[];
  metric: string;
  tone: string;
  previewLabel: string;
};

export type TestimonialItem = {
  name: string;
  role: string;
  company: string;
  quote: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};
