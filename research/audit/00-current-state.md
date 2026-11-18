# 00 — Current state (Director's discovery)

Audited commit: `931109f` on `main`. Live: https://midlaj-portfolio-psi.vercel.app/ . Local dev server for the audit: http://localhost:5175/ .
Screenshots: `research/screenshots/audit/` (named `<width>-<nn>-<section>.png`; widths 1440, 768, 390; `-00-fullpage` is a full-page capture; `-11-menu-open` shows the open menu).

## Stack
- React 19.2 + Vite 8, single page, no router. Plain CSS (one `src/index.css` plus one CSS file per component); no Tailwind, no CSS-in-JS.
- Runtime dependencies: `react`, `react-dom` only. **No animation library.** No smooth scroll library. No WebGL.
- All motion is hand-written CSS transitions/keyframes plus two small JS pieces: the custom cursor (`requestAnimationFrame`) and the nav scroll-spy (`IntersectionObserver`).
- Deployed on Vercel from `main`. Fonts self-hosted in `public/fonts` (Instrument Serif 400, Geist variable, DM Mono 400/500, latin subsets, `font-display: swap`, two preloaded).
- ~2,200 lines of source in total.

## Structure (src/)
- `App.jsx`: Preloader, CustomCursor, Navbar, `main` (Hero, About, Projects, Contact), Footer, WhatsAppButton (fixed, last in DOM).
- `components/Sections/`: Hero, About, Projects, Contact (each with its own CSS).
- `components/Layout/`: Navbar (fixed header + full-screen menu dialog), Footer, CustomCursor.
- `components/UI/`: Preloader (0.55s curtain), ProjectImage (responsive picture), WhatsAppButton.
- `data/`: `site.js` (name, email, socials, time zone), `projectsData.js` (9 projects, 6 featured), `skillsData.js` (6 groups).
- `index.css`: tokens, base, buttons, `.section-title`, reduced-motion kill switch.

## Design tokens (index.css)
- Colour: bg `#080808`, card `#141414`, text `#e8e8e8`, ink `#f4f4ef`, muted `#9b9b9b`, accent lime `#c8f250`, hairline `rgba(255,255,255,.12)`.
- Type: display Instrument Serif 400; UI/body Geist; mono DM Mono (hero status, tech lists, menu numbers). Fluid scale `--step--1` to `--step-5` (`clamp`).
- Easing: one curve in use, `cubic-bezier(0.16, 1, 0.3, 1)` (`--ease-out`). Gutter `--pad-x: clamp(24px, 5vw, 60px)`.

## Sections as built
1. **Header/menu:** fixed header, wordmark, scroll-spy section label, "Menu" pill; full-screen overlay menu (01 About, 02 Projects, 03 Contact) with hover-dim, email + socials footer.
2. **Hero:** three-line headline (two serif lines, one Geist line) with three inline project thumbnails; status row (availability dot, live India clock); intro paragraph; primary CTA + email link. CSS line-reveal entrance.
3. **About:** portrait, generic bio (original wording), 4 stats, hairline ledger of capabilities (6 groups).
4. **Projects:** "Selected work" heading, 6 featured project rows (7/5 column image/text split), then an index of 3 text rows (BizBook, Nizan Tech, AI Voice Calling Agent).
5. **Contact:** heading, intro, giant serif email (82px at 1440), copy-email button, link row.
6. **Footer:** copyright + back to top.
7. **Extras:** custom cursor (desktop mouse only), preloader curtain, floating WhatsApp button, skip link.

## Known facts / measurements
- Lighthouse on the live site: mobile 92-93 performance (TBT 270-290 ms, LCP 1.7-1.9 s), desktop 100; accessibility, best practices, SEO 100.
- Motion inventory: hero line rise (1.1s, 0.12s stagger), preloader curtain (0.55s), menu fade/stagger, hover dims, image zoom on hover (feature rows), cursor follower. Nothing scroll-driven; no section transitions; no text reveals below the hero.
- Visible at 768px: the third hero thumbnail wraps onto its own line (the mobile fix only hides the middle thumbnail at <=600px).
- Content gaps: bio is generic; two projects (Nizan Tech, AI Voice Calling Agent) have no screenshots; no case-study pages (cards link out to live sites); no experience/timeline section.
- Not available: Context7 MCP (not connected in this environment).

## Prior work
`research/audit-v1-redesign-log.md` records the previous redesign round. `research/patterns.md` is the reference library from 30 award-winning portfolios.
