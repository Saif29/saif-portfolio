<div align="center">

# saif-portfolio

**Senior Frontend Engineer · 4+ years · React, Next.js, React Native**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

*I ship **product**, not just ~~components~~.*

[LinkedIn](https://www.linkedin.com/in/saifurrehman29/) · [GitHub](https://github.com/saif29) · [Email](mailto:saifurrehmancs@gmail.com)

</div>

---

## what's this?

A hand-crafted portfolio site — no templates, no Tailwind preflight, no drag-and-drop builders. Just clean Next.js 16 App Router, pure CSS design tokens, smooth scroll-reveal animations, and a dark/light theme that doesn't flash on load.

Built to reflect the same standard I hold production code to: fast, accessible, maintainable, and actually tested in a browser.

---

## stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Next.js 16 (App Router) | RSC by default, great perf primitives |
| Language | TypeScript 5 | strict mode, no `any` escapes |
| Styling | Pure CSS + `oklch` tokens | zero runtime, wide-gamut colors |
| Animation | Framer Motion 12 | scroll-reveal + hover-light effects |
| Fonts | Geist Sans + Geist Mono | optimised via `next/font`, no layout shift |
| Theme | CSS `data-theme` + `localStorage` | no flash, persists across sessions |

---

## features

```
✦  Dark / Light theme — flash-free init via inline script in <head>
✦  Scroll-reveal — IntersectionObserver, respects prefers-reduced-motion
✦  Hover light — radial gradient follows cursor on project cards
✦  Active nav — highlights section as you scroll through the page
✦  Live local time — shows IST clock in the hero, updates every minute
✦  Responsive — mobile-first, tested down to 375px
✦  Semantic HTML — proper landmarks, headings, and ARIA where needed
✦  OG meta — og:title and og:description set for link previews
```

---

## sections

| # | Section | What's in it |
|---|---------|-------------|
| 00 | **Nav** | Fixed blur-glass nav, active link highlight, mobile drawer, theme toggle |
| 01 | **Hero** | Full-viewport intro, live local time, availability pill, scroll cue |
| 02 | **About** | Bio, quick stats (30–40% perf win, promoted in 8 mo, 4+ yrs), dl metadata |
| 03 | **Experience** | Alfabolt → Nomod (YC), DeepReel, Graana (Team Lead), Intern — sticky dates |
| 04 | **Projects** | Nomod (featured, YC badge), Trucker Path Insurance, DeepReel — hover light cards |
| 05 | **Skills** | 6 categories, primary highlights, hover accent |
| 06 | **Education** | NUST BSCS, 2018–2022, Islamabad |
| 07 | **Contact** | Email CTA + LinkedIn, GitHub, email rows with arrow animation |

---

## project structure

```
saif-portfolio/
├── app/
│   ├── globals.css        ← all styles — tokens, layout, components, animations
│   ├── layout.tsx         ← metadata, fonts, theme-init inline script
│   └── page.tsx           ← one line: <PortfolioApp />
│
├── components/
│   ├── PortfolioApp.tsx   ← root client wrapper, assembles all sections
│   ├── Nav.tsx            ← fixed nav with scroll/active/mobile logic
│   ├── Hero.tsx           ← full-viewport hero
│   ├── About.tsx          ← bio + stats
│   ├── Experience.tsx     ← work history
│   ├── Projects.tsx       ← project cards with hover light
│   ├── Skills.tsx         ← skill grid
│   ├── Education.tsx      ← education row
│   ├── Contact.tsx        ← contact section
│   ├── Footer.tsx         ← footer
│   ├── ThemeToggle.tsx    ← dark/light pill toggle
│   └── SectionHead.tsx    ← numbered section header
│
├── hooks/
│   ├── useReveal.ts       ← IntersectionObserver scroll-reveal
│   ├── useScrollNav.ts    ← active section tracker for nav
│   ├── useHoverLight.ts   ← cursor-tracking radial gradient
│   └── useLocalTime.ts    ← live clock in IST
│
└── lib/
    └── data.ts            ← single source of truth for all content
```

---

## get it running

```bash
# clone
git clone https://github.com/saif29/saif-portfolio.git
cd saif-portfolio

# install
npm install

# dev server → http://localhost:3000
npm run dev

# production build
npm run build && npm start
```

> **Node requirement:** ≥ 18.x (Next.js 16 minimum)

---

## make it yours

All content lives in one file: [`lib/data.ts`](lib/data.ts).

Update the exported `data` object — name, experience, projects, skills, education, links — and the whole site re-renders. No hunting through JSX for hardcoded strings.

```ts
// lib/data.ts
export const data = {
  name: "Your Name",
  title: "Your Title",
  email: "you@example.com",
  location: "Your City",
  links: {
    linkedin: "https://linkedin.com/in/you",
    github: "https://github.com/you",
  },
  experience: [ /* ... */ ],
  projects:   [ /* ... */ ],
  skills:     [ /* ... */ ],
  education:  { /* ... */ },
}
```

---

## design decisions worth noting

**`oklch` color space** — All color tokens use `oklch()` instead of `hsl`. Perceptually uniform, better wide-gamut support on P3 displays, and easier to reason about lightness/chroma/hue when building a two-theme system.

**No-flash theme init** — A tiny inline script in `<head>` reads `localStorage` and sets `data-theme` on `<html>` before first paint. No CSS-in-JS, no flicker, no layout shift.

**CSS-only component styles** — Zero CSS-in-JS runtime. All styles live in `globals.css` using class names. The stylesheet is static, cacheable, and has zero client-side cost.

**Single data file** — Every piece of content comes from `lib/data.ts`. Adding a new job or project is one object, not a JSX edit.

---

## performance targets

- Static-first: most components render server-side
- Fonts loaded via `next/font` — no layout shift, critical CSS inlined
- Images: none used — pure CSS and SVG throughout
- Animations gate on `prefers-reduced-motion`
- JS bundle kept lean — Framer Motion is the primary client addition

---

## license

MIT — use anything here freely. A star is always appreciated but never required.

---

<div align="center">

built in Islamabad · shipped with [Claude Code](https://claude.ai/code)

**[saifurrehmancs@gmail.com](mailto:saifurrehmancs@gmail.com) · [linkedin/saifurrehman29](https://www.linkedin.com/in/saifurrehman29/) · [github/saif29](https://github.com/saif29)**

</div>
