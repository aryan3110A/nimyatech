# NimyaTech Developer Guide

## 1. Project Overview

This repository contains the NimyaTech marketing website: a premium single-page website designed to position NimyaTech as a modern partner for AI systems, product engineering, automation, web and app development, branding, and digital growth.

The product goal is not just to show company information. The site is designed to communicate three things clearly:

1. NimyaTech works at the intersection of AI, engineering, and business growth.
2. The brand should feel premium, modern, and trustworthy.
3. The experience should be smooth, visual, and conversion-oriented without feeling heavy or cluttered.

The application is implemented as one scrolling landing page composed of modular sections. Each section has a clear ownership boundary and most user-facing content is defined centrally in `src/data/site.ts`.

## 2. What The Website Is About

The website is a marketing surface for NimyaTech.

Its messaging is centered around:

- AI-powered solutions
- Web and mobile product development
- Automation and workflow systems
- Branding and digital growth
- Scalable technology delivery

From a content perspective, the page is structured to behave like a premium sales narrative:

1. Hero: core brand promise and main positioning
2. About: broader company introduction and capability framing
3. Services: high-level capability overview
4. Timeline: credibility and experience history
5. Tech Stack: technical credibility and tooling depth
6. Projects: proof of execution
7. Testimonials: trust and social proof
8. Contact: conversion endpoint
9. Footer: persistent summary and navigation

## 3. Technical Stack

### Framework

- Next.js 16 with App Router
- React 19
- TypeScript

### Styling

- Tailwind CSS v4
- Global design tokens and utility classes in `src/app/globals.css`

### Motion / Interaction

- Framer Motion for reveal animations and UI transitions
- GSAP for continuous orbital / rotational hero animations
- Lenis for smooth scrolling

### Utilities

- `clsx` for conditional class building
- `tailwind-merge` for merging Tailwind classes safely
- `lucide-react` for iconography

## 4. How The App Is Structured

The app uses the Next.js App Router, but the actual page experience is assembled inside a custom site shell component.

### Request Flow

1. `src/app/page.tsx` renders the `SiteShell` component.
2. `SiteShell` composes the full page in section order.
3. Layout components provide background, cursor, glow, smooth scroll, and progress behavior.
4. Section components render the content blocks.
5. Shared UI primitives and centralized data support consistency.

## 5. Folder Purpose

### `src/app`

Purpose: Next.js application entry points and global styling.

Files:

- `layout.tsx`: root HTML wrapper, metadata, and font setup
- `page.tsx`: page entry that mounts the site shell
- `globals.css`: visual tokens, base styles, glass surfaces, animation helpers, and flip-card CSS

### `src/components`

Purpose: all React UI building blocks.

Subfolders:

- `animations/`: motion wrappers and reveal behavior
- `layout/`: page-wide experience components like background, cursor, scroll progress, smooth scroll, and shell assembly
- `sections/`: the actual page sections
- `shared/`: reusable primitives such as headings, spotlight cards, and buttons

### `src/components/layout`

Purpose: global presentation and runtime UI behavior.

Important files:

- `site-shell.tsx`: master composition layer for the full page
- `smooth-scroll.tsx`: initializes Lenis smooth scrolling
- `site-background.tsx`: renders background visual layers
- `mouse-glow.tsx`: cursor-follow glow effect
- `scroll-progress.tsx`: top progress indicator
- `custom-cursor.tsx`: custom cursor experience on supported devices

### `src/components/sections`

Purpose: each section of the landing page is isolated into its own folder.

Sections currently present:

- `hero/`
- `about/`
- `services/`
- `timeline/`
- `techstack/`
- `projects/`
- `testimonials/`
- `contact/`
- `navbar/`
- `footer/`

This separation makes each marketing surface easier to edit without touching unrelated sections.

### `src/components/shared`

Purpose: reusable visual primitives used by multiple sections.

Important files:

- `section-heading.tsx`: shared section intro block with eyebrow, title, and description
- `magnetic-button.tsx`: branded CTA button with motion treatment
- `spotlight-card.tsx`: card shell with pointer-reactive glow

### `src/data`

Purpose: centralized content source for the page.

Important file:

- `site.ts`: nav items, about cards, stats, services, timeline entries, tech stack items, projects, testimonials, and contact details

This is one of the most important files for content edits. Many copy changes can be made here without changing section structure.

### `src/hooks`

Purpose: custom React hooks.

Important file:

- `use-active-section.ts`: observes section visibility and updates the active nav state

### `src/lib`

Purpose: small shared utilities.

Important file:

- `utils.ts`: exports the `cn()` helper for composing Tailwind class names

### `src/types`

Purpose: shared TypeScript models for the centralized data layer.

Important file:

- `site.ts`: defines `NavItem`, `StatItem`, `AboutCard`, `ServiceItem`, `TimelineItem`, `TechItem`, `ProjectItem`, `TestimonialItem`, and `ContactLink`

### `public`

Purpose: brand and static assets.

Current notable files:

- `nimyatech-mark.svg`: SVG brand mark used in the site
- `logo-DZTJZMZn.png`: raster logo asset currently available in the repository

## 6. Section-by-Section Explanation

### Hero Section

File: `src/components/sections/hero/hero-section.tsx`

Purpose:

- Establish NimyaTech positioning immediately
- Show brand promise, CTA buttons, service tags, and trust-oriented messaging
- Create the strongest visual identity on the page

Technical notes:

- Uses typed rotating text
- Uses GSAP for circular/orbital motion
- Includes an animated right-side “Innovation Core” visual
- Uses `MagneticButton` for CTA presentation

### About Section

File: `src/components/sections/about/about-section.tsx`

Purpose:

- Explain what NimyaTech does at a business level
- Provide a broader capability narrative
- Show structured cards and numerical credibility blocks

Technical notes:

- Uses `SectionHeading`
- Uses `SpotlightCard`
- Includes `StatCounter`, which animates values when the cards enter view
- Pulls right-side card content and stat content from `src/data/site.ts`

### Services Section

File: `src/components/sections/services/services-section.tsx`

Purpose:

- Present the service catalog in a clean, interactive grid

Technical notes:

- Uses CSS flip cards instead of heavier runtime animation state
- Unhovered state shows icon and service title
- Hovered state shows service description
- Designed to remain lightweight by relying on transform-based CSS motion

### Timeline Section

File: `src/components/sections/timeline/timeline-section.tsx`

Purpose:

- Show delivery history, research work, and industry experience

Technical notes:

- Uses Framer Motion scroll tracking for the vertical timeline path
- Uses alternating card alignment on larger screens

### Tech Stack Section

File: `src/components/sections/techstack/techstack-section.tsx`

Purpose:

- Communicate technical credibility and engineering range

Technical notes:

- Desktop uses animated orbiting tech pills and a core stack center
- Mobile uses a simplified grid-based representation to reduce clutter and overflow risk
- Also includes a marquee strip of technologies

### Projects Section

File: `src/components/sections/projects/projects-section.tsx`

Purpose:

- Present selected work like premium case studies

Technical notes:

- Uses varying card widths for visual hierarchy
- Each project includes stack tags, preview blocks, and CTA links

### Testimonials Section

File: `src/components/sections/testimonials/testimonials-section.tsx`

Purpose:

- Add trust and social proof

Technical notes:

- Uses marquee-style horizontal motion
- Cards are sized responsively for mobile and desktop

### Contact Section

File: `src/components/sections/contact/contact-section.tsx`

Purpose:

- Act as the final conversion endpoint

Technical notes:

- Includes a UI-only contact form
- Includes direct contact link blocks and supporting value chips
- Uses a visual animated panel to keep the section lively

### Navbar

File: `src/components/sections/navbar/navbar.tsx`

Purpose:

- Provide persistent navigation and active-section feedback

Technical notes:

- Uses `useActiveSection` to highlight the current section
- Includes responsive mobile navigation

### Footer

File: `src/components/sections/footer/footer-section.tsx`

Purpose:

- Close the page with brand summary, navigation, services, and contact references

## 7. Centralized Content Model

Most user-facing text is stored in `src/data/site.ts`.

Why this matters:

- Copy edits can often be made in one place
- Content stays separate from rendering logic
- Reusable section structures remain stable even when messaging changes

Good rule:

- If the change is only content, check `src/data/site.ts` first
- If the change affects layout, behavior, or presentation, edit the section component

## 8. Styling System

Global styling is driven by `src/app/globals.css`.

Important concepts used there:

- theme tokens declared via `@theme inline`
- glass-panel surfaces
- section-frame border treatment
- reusable animation keyframes
- marquee animation
- service flip-card behavior
- reduced-motion fallbacks

The site intentionally uses a dark premium visual language, strong contrast, rounded surfaces, layered borders, and blur-based panel treatments.

## 9. Motion Strategy

The project uses motion in layers:

### Framer Motion

Used for:

- reveal animations
- scroll-linked section behavior
- subtle component transitions

### GSAP

Used for:

- continuous hero orbit / ring motion
- floating orb movement

### CSS Animation

Used for:

- marquee effects
- simple float utilities
- flip-card transforms

### Reduced Motion

`globals.css` includes a `prefers-reduced-motion` block to suppress nonessential animation when the user requests reduced motion.

## 10. Responsive Design Approach

The site follows a mobile-first Tailwind strategy.

Patterns used across the repo:

- smaller mobile padding, expanded spacing at larger breakpoints
- reduced title scale on smaller screens
- simplified or alternate layouts on mobile for visually complex sections
- desktop-only rendering for heavier visuals when appropriate

Examples:

- Tech stack has a simplified mobile layout
- Services cards are sized tighter for smaller screens
- Section heading sizes scale progressively by breakpoint

## 11. Key Files To Know First

If a new developer joins the project, these are the first files they should read:

1. `package.json`
2. `src/app/layout.tsx`
3. `src/app/page.tsx`
4. `src/components/layout/site-shell.tsx`
5. `src/data/site.ts`
6. `src/app/globals.css`
7. The section file they plan to edit

## 12. How To Make Common Changes

### Change text content

Usually edit:

- `src/data/site.ts`

Sometimes edit directly:

- section component files when content is embedded in JSX

### Change section layout

Edit the specific section component in:

- `src/components/sections/...`

### Change global visual language

Edit:

- `src/app/globals.css`

### Change reusable heading styles

Edit:

- `src/components/shared/section-heading.tsx`

### Change CTA behavior or appearance

Edit:

- `src/components/shared/magnetic-button.tsx`

### Change active navbar section logic

Edit:

- `src/hooks/use-active-section.ts`

## 13. Performance Notes

The codebase already makes several decisions to keep the site performant:

- content is statically rendered
- the homepage is a static route
- lightweight CSS transforms are preferred where possible
- motion-heavy visuals are limited to specific areas
- shared content is centralized instead of repeated through multiple component trees
- mobile layouts simplify more complex desktop visuals

When adding new interactions, prefer:

- transform and opacity changes over layout thrashing
- CSS transitions where possible
- section-local complexity rather than global listeners

## 14. Current Project File Tree

```text
nimyatech/
├─ public/
│  ├─ logo-DZTJZMZn.png
│  └─ nimyatech-mark.svg
├─ src/
│  ├─ app/
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ components/
│  │  ├─ animations/
│  │  ├─ layout/
│  │  ├─ sections/
│  │  │  ├─ about/
│  │  │  ├─ contact/
│  │  │  ├─ footer/
│  │  │  ├─ hero/
│  │  │  ├─ navbar/
│  │  │  ├─ projects/
│  │  │  ├─ services/
│  │  │  ├─ techstack/
│  │  │  ├─ testimonials/
│  │  │  └─ timeline/
│  │  └─ shared/
│  ├─ data/
│  │  └─ site.ts
│  ├─ hooks/
│  │  └─ use-active-section.ts
│  ├─ lib/
│  │  └─ utils.ts
│  └─ types/
│     └─ site.ts
├─ package.json
├─ tsconfig.json
└─ README.md
```

## 15. Summary For New Developers

If you only remember five things about this codebase, remember these:

1. It is a single-page Next.js marketing site.
2. Most content lives in `src/data/site.ts`.
3. The page is assembled in `src/components/layout/site-shell.tsx`.
4. Section components own structure; shared components own repeated UI patterns.
5. `src/app/globals.css` is the main styling backbone for the whole experience.

## 16. Recommended Next Documentation Additions

If the team wants to expand documentation later, the next useful documents would be:

1. A copy-editing guide for non-developers
2. A design token guide for colors, spacing, and type scale
3. A deployment guide for Vercel or another host
4. A content ownership guide showing which copy lives in data files versus JSX
