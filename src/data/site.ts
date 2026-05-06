import {
  Atom,
  Bot,
  BrainCircuit,
  Braces,
  CloudCog,
  Container,
  Cpu,
  Database,
  FileCode2,
  Figma,
  Flame,
  Layers3,
  Megaphone,
  MessageSquareMore,
  MonitorSmartphone,
  Palette,
  PenTool,
  ServerCog,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type {
  AboutCard,
  ContactLink,
  NavItem,
  ProjectItem,
  ServiceItem,
  StatItem,
  TechItem,
  TestimonialItem,
  TimelineItem,
} from "@/types/site";

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export const heroHighlights = [
  "AI-native product systems",
  "High-conversion digital experiences",
  "Automation built for scale",
];

export const stats: StatItem[] = [
  {
    label: "Launch velocity",
    value: 4,
    suffix: "x",
    description:
      "Faster execution across strategy, design, engineering, and automation.",
  },
  {
    label: "Delivery coverage",
    value: 9,
    suffix: "+",
    description:
      "Integrated services spanning AI, web, app, branding, growth, and UX.",
  },
  {
    label: "Automation depth",
    value: 24,
    suffix: "/7",
    description:
      "Always-on systems for lead flow, customer support, and operational throughput.",
  },
  {
    label: "Scalability mindset",
    value: 100,
    suffix: "%",
    description:
      "Every engagement is architected for maintainability, speed, and measurable output.",
  },
];

export const aboutCards: AboutCard[] = [
  {
    eyebrow: "AI expertise",
    title: "Systems that make intelligence useful.",
    description:
      "From conversational agents to computer vision workflows, NimyaTech builds AI products that move beyond demos and start producing outcomes.",
    accent: "from-cyan-400/25 via-cyan-400/5 to-transparent",
  },
  {
    eyebrow: "Modern development",
    title: "Interfaces built to feel premium at every pixel.",
    description:
      "Responsive product design, clean frontend architecture, and motion systems tuned for speed, trust, and conversion.",
    accent: "from-violet-500/25 via-violet-500/5 to-transparent",
  },
  {
    eyebrow: "Automation",
    title: "Operational flows that remove friction.",
    description:
      "Lead routing, internal workflows, reporting, and repetitive actions are automated so teams can focus on growth instead of busywork.",
    accent: "from-fuchsia-400/25 via-fuchsia-400/5 to-transparent",
  },
  {
    eyebrow: "Scalable tech",
    title: "Architecture designed for what comes next.",
    description:
      "NimyaTech ships with extensibility in mind, so products can evolve from pilot to platform without hitting an early ceiling.",
    accent: "from-sky-500/25 via-sky-500/5 to-transparent",
  },
];

export const services: ServiceItem[] = [
  {
    title: "AI Solutions",
    description:
      "Production-ready AI workflows, copilots, recommendation engines, and domain-specific intelligence layers.",
    icon: Bot,
    accent: "from-cyan-400/30 to-blue-500/20",
  },
  {
    title: "Web Development",
    description:
      "Fast, cinematic, conversion-focused websites and platforms engineered for performance and clarity.",
    icon: Braces,
    accent: "from-violet-400/30 to-fuchsia-500/20",
  },
  {
    title: "App Development",
    description:
      "Cross-platform product experiences with cohesive UX, smooth interactions, and scalable architecture.",
    icon: MonitorSmartphone,
    accent: "from-sky-400/30 to-cyan-400/20",
  },
  {
    title: "Digital Marketing",
    description:
      "Demand capture systems, content funnels, campaign pages, and analytics tuned for measurable growth.",
    icon: Megaphone,
    accent: "from-fuchsia-400/30 to-violet-500/20",
  },
  {
    title: "Custom Chatbots",
    description:
      "Brand-aware assistants for support, onboarding, lead qualification, and knowledge access.",
    icon: MessageSquareMore,
    accent: "from-blue-400/30 to-cyan-500/20",
  },
  {
    title: "Automation",
    description:
      "Connected systems that streamline CRM actions, workflows, notifications, and reporting.",
    icon: Workflow,
    accent: "from-emerald-400/25 to-cyan-500/20",
  },
  {
    title: "Branding",
    description:
      "Visual identity systems, verbal direction, and brand assets that feel modern, sharp, and credible.",
    icon: PenTool,
    accent: "from-amber-300/25 to-fuchsia-500/20",
  },
  {
    title: "UI/UX Design",
    description:
      "Research-backed product design with elegant flows, tactile interactions, and premium polish.",
    icon: Palette,
    accent: "from-indigo-400/30 to-violet-500/20",
  },
];

export const timeline: TimelineItem[] = [
  {
    period: "May 2022 - Sep 2022",
    title: "AI Surveillance & Anomaly Detection",
    company: "DRDO",
    description: [
      "Built a real-time anomaly detection system using YOLOv8 and thermal vision for defense-grade monitoring.",
      "Integrated object detection and behavior analytics for sensitive-zone surveillance.",
      "Optimized deployment for edge devices to enable fast field testing.",
    ],
  },
  {
    period: "Dec 2022 - Mar 2023",
    title: "Pharmaceutical Compliance AI",
    company: "Torrent Pharma",
    description: [
      "Designed an intelligent document parser for SOPs, batch records, and compliance workflows.",
      "Applied NLP pipelines for classification, summarization, and anomaly detection.",
      "Created internal dashboards that surfaced insight faster for regulatory teams.",
    ],
  },
  {
    period: "Jul 2023 - Oct 2023",
    title: "AI-Based Testing Assistant",
    company: "CDAC Bangalore",
    description: [
      "Developed an NLP-driven bug reporting assistant that grouped and summarized issue patterns.",
      "Combined transformer models with workflow automation to accelerate triage.",
      "Improved QA visibility through actionable reporting and categorized alerts.",
    ],
  },
  {
    period: "2024 - Ongoing",
    title: "Growth Systems & Digital Product Delivery",
    company: "NimyaTech",
    description: [
      "Unified design, development, AI, and marketing into one modern delivery engine.",
      "Ship premium product surfaces while automating the backend work that slows teams down.",
      "Focus every engagement on speed-to-value, clarity, and scale readiness.",
    ],
  },
];

const technologyIconMap: Record<string, LucideIcon> = {
  React: Atom,
  "Next.js": Layers3,
  Tailwind: Sparkles,
  TypeScript: FileCode2,
  "Node.js": ServerCog,
  Python: BrainCircuit,
  TensorFlow: Cpu,
  Firebase: Flame,
  MongoDB: Database,
  Docker: Container,
  AWS: CloudCog,
  Figma: Figma,
};

export const techStack: TechItem[] = [
  "React",
  "Next.js",
  "Tailwind",
  "TypeScript",
  "Node.js",
  "Python",
  "TensorFlow",
  "Firebase",
  "MongoDB",
  "Docker",
  "AWS",
  "Figma",
].map((name, index) => ({
  name,
  icon: technologyIconMap[name],
  tone:
    index % 4 === 0
      ? "from-cyan-400/30 to-sky-500/20"
      : index % 4 === 1
        ? "from-violet-400/30 to-fuchsia-500/20"
        : index % 4 === 2
          ? "from-blue-400/30 to-cyan-500/20"
          : "from-fuchsia-400/30 to-indigo-500/20",
}));

export const projects: ProjectItem[] = [
  {
    title: "Fire Detection Intelligence",
    summary:
      "A real-time computer vision pipeline that identifies ignition risk, tracks spread signatures, and triggers instant alerts.",
    stack: ["YOLO", "Edge AI", "Realtime Alerts"],
    metric: "Sub-second anomaly response",
    tone: "from-orange-300/35 via-rose-400/15 to-transparent",
    previewLabel: "Incident feed",
  },
  {
    title: "Face Recognition Access Layer",
    summary:
      "Identity-aware recognition workflows for secure checkpoints, attendance systems, and operational monitoring.",
    stack: ["Vision AI", "TensorFlow", "Secure APIs"],
    metric: "High-confidence identity matching",
    tone: "from-cyan-300/35 via-blue-500/15 to-transparent",
    previewLabel: "Recognition panel",
  },
  {
    title: "Weapon Detection Monitoring",
    summary:
      "Continuous video intelligence tuned to detect threats early and escalate response workflows in sensitive environments.",
    stack: ["Detection Models", "Automation", "Dashboards"],
    metric: "Live threat escalation pipeline",
    tone: "from-violet-400/35 via-fuchsia-500/15 to-transparent",
    previewLabel: "Security grid",
  },
  {
    title: "Automation Growth Engine",
    summary:
      "An integrated web, chatbot, and campaign workflow that captures interest, routes leads, and surfaces insight in one system.",
    stack: ["Next.js", "CRM Automation", "Analytics"],
    metric: "Clearer lead-to-conversion visibility",
    tone: "from-emerald-300/35 via-cyan-500/15 to-transparent",
    previewLabel: "Growth cockpit",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    name: "Dr. Pooja Kamat",
    role: "Mentor",
    company: "DRDO Project",
    quote:
      "NimyaTech's precision-driven AI approach and execution discipline made a technically demanding project feel structured and dependable.",
  },
  {
    name: "Dr. Shilpa Gite",
    role: "Mentor",
    company: "SCAAI",
    quote:
      "Their work balanced research depth with product thinking. The output was both technically sound and highly relevant to real-world use.",
  },
  {
    name: "Mr. Lalit Patel",
    role: "CEO",
    company: "Shiv Chemical",
    quote:
      "The NimyaTech team brought clarity, automation, and modern presentation to our operations in a way that felt genuinely high-value.",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "nimyatech.ai@gmail.com",
    href: "mailto:nimyatech.ai@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 92651 29764",
    href: "tel:+919265129764",
  },
  {
    label: "Phone",
    value: "+91 93274 11207",
    href: "tel:+919327411207",
  },
  {
    label: "Location",
    value: "India",
    href: "#contact",
  },
];

export const footerServices = [
  "AI Solutions",
  "Web Development",
  "App Development",
  "Automation",
  "Branding",
  "UI/UX Design",
];

export const orbitLabels = [
  "AI-native delivery",
  "Premium interfaces",
  "Scalable systems",
  "Growth engineering",
];

export const globePillars = [
  "Design for trust",
  "Build for speed",
  "Automate for scale",
  "Market for growth",
];
