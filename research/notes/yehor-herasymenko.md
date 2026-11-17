# Yehor Herasymenko — https://herasymenkox.com/
**Stack/techniques detected:** Confirmed: WebGL (fullscreen canvas; project slides render as GL planes with a liquid/noise displacement transition, seen mid-transition), percentage preloader, custom-looking cursor/hover flag (heuristic), GSAP global detected, live Kyiv clock, per-route SPA (/profile, /connect), 3D rendered Y glyph on profile (likely Three/OGL-type model; library not confirmed). Not detected: Lenis, ScrollTrigger, Framer, Barba. Navigation between projects is wheel-driven (custom scroll, not native page scroll). Marquee/text-split: not confirmed.
**Typography:** PP Neue Montreal (heavy, uppercase, tight tracking) for display; PP Neue Montreal Mono for tiny UI labels (nav pills, "VIEW CASE", dates); FH Phemister (high-contrast thin serif) mixed inline for accent words and numerals on profile/connect. Project titles ~90-100px bold caps; profile statement ~70px caps; contact email ~100px, phone in serif ~90px.
**Palette:** near-black #0b0b0b bg; single pale lime text (approx rgb(206,228,159)) used for everything; mid-green accent for active nav/labels; each project slide brings its own photographic tone (burnt orange, grey concrete). Dark, monochrome-plus-one-accent.
**Layout:** Full-viewport, no scroll page; fixed HUD frame in four corners and bottom centre (name, 01/02/03 counter, local time, copyright, slide counter 001..005). Content centred, huge type, lots of negative space. Feels like a cinematic, editorial, technical-HUD interface.

## Hero
- Screenshot: research/screenshots/yehor-herasymenko-hero.png
- What it is: Full-bleed slide of the first case (a laptop mockup on a podium over orange gradient) with a giant two-line lime title overlapping the device and a mono "MILTECH / 2026" tag.
- Techniques: WebGL image/video plane, oversized type overlapping the mockup (partly blend-moded/duplicated in darker green on overlap), preloader counting to 100%.
- Why it works / what is special: Project IS the hero; the case title acts as the headline, so there is no generic intro. The type-over-mockup overlap gives depth.
- Scores (1-10): design 9, creativity 9, usability 7 (hidden scroll-to-advance)

## Navigation
- Screenshot: research/screenshots/yehor-herasymenko-nav.png
- What it is: Three fixed mono "pill" tabs top-centre (WORK (05) / PROFILE / CONNECT); the active one is filled lime with a small dot, others dark translucent. Top-right shows 01||02||03 slide index on work, "P 000" on other pages.
- Techniques: SPA routes, state-filled pills, HUD corner labels.
- Why it works / what is special: Tiny, always visible, no hamburger; feels like instrument UI. Counts and clock add life.
- Scores (1-10): design 8, creativity 8, usability 9

## Projects
- Screenshot: research/screenshots/yehor-herasymenko-work.png
- What it is: Five full-screen case slides advanced by wheel; a "VIEW CASE" label appears at centre. The captured frame is the second slide (a real-estate site mockup) just after a transition, still slightly warped.
- Techniques: WebGL liquid/displacement distortion between slides (a mid-transition frame showed melted, fluid shapes), title swap, slide counter 001 / 005 with progress bar.
- Why it works / what is special: The transition is the showpiece: the mockup visibly ripples and settles. Each slide is a tonal mood piece.
- Scores (1-10): design 9, creativity 10, usability 7

## About
- Screenshot: research/screenshots/yehor-herasymenko-about.png (/profile)
- What it is: Rotating glossy black 3D Y letterform in a black void flanked by pronunciation notes in small caps, then a huge caps statement that mixes sans with thin serif words and circled footnote numerals.
- Techniques: 3D/WebGL model, sans/serif mixing, scroll for further text (only the first screen was verified).
- Why it works / what is special: Humour (pronunciation guide) plus a hero object makes the bio memorable; serif/sans mix is a strong typographic accent.
- Scores (1-10): design 9, creativity 9, usability 8

## Contact/Footer
- Screenshot: research/screenshots/yehor-herasymenko-contact.png (/connect)
- What it is: Centred underlined phone number (serif) and email (sans, giant), side labels "no forms" / "direct line", wireframe globe and short values line at bottom.
- Techniques: Pure typography, underline links, wireframe icon.
- Why it works / what is special: One-line CTA, no form friction; type scale does all the work.
- Scores (1-10): design 8, creativity 7, usability 10

## Micro-interactions
- Preloader counts up in centre before reveal (observed, ~15-20s in headless software GL).
- Wheel scroll triggers WebGL liquid-distortion slide change with title swap (observed mid-transition).
- Active nav pill fills lime with dot; counters/clock tick (observed clock; counter changes 001->002 observed).
- Project title overlaps device mockup with colour shift where it crosses (observed).
- Hover/cursor effects: custom cursor flagged by detection; "VIEW CASE" label seen at centre of slide; actual hover animations not verified.

## Mobile
390px hero keeps the HUD: name top-left, 01||02 top-right, nav pills pinned bottom full-width; title shrinks to fit, project image fills the viewport. Slide reads cleanly and the nav moves to thumb zone.
