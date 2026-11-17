# Moiséz (Brand & Web Designer, Montevideo) — https://moisez.com/
**Stack/techniques detected:** GSAP + ScrollTrigger, Lenis smooth scroll, Barba page transitions (all detected in page globals, confirmed by detection; Webflow-hosted by font-icon "webflow-icons"). A canvas/WebGL element exists (hand-drawn pencil line, physics badges in footer, draggable kerning letters are seen on screen; the physics engine itself is a guess, likely Matter.js-style). No custom cursor detected. Text reveal/blur-in on headings seen (blurred text at section edges). Marquee not detected.
**Typography:** Saans (grotesk) at weight 500 for display, uppercase, very tight tracking; hero h1 ~229px; body ~12px mono (Office Code Pro) for labels/captions in ALL CAPS; lead text ~24-28px Saans sentence case with tight tracking.
**Palette:** warm off-white rgb(245,245,244) paper with grain, near-black rgb(28,25,23) ink, hot orange-red accent (~#F24E0F, pencil underline, badges), green availability dot, occasional blue/lime from project imagery. Light base with dark inversions (menu, kerning section).
**Layout:** visible 12-column hairline grid overlaid on the whole page, ~24px gutters, hairline-ruled rows, huge type bleeding across columns, images as small inline "pills" inside the headline. Editorial, tactile, confident; paper-and-pencil theme.

## Hero
- Screenshot: research/screenshots/moisez-hero.png
- What it is: Three-line giant uppercase headline with three small project photos slotted inline between words, a hand-drawn orange scribble underline, a one-sentence intro, and a top bar with location + live local time + "available" green dot.
- Techniques: GSAP, inline images staggered in the type, SVG scribble, live clock (JS), grain overlay.
- Why it works / what is special: Type is the hero and the work peeks through it; the status bar and mono labels make it feel like a working studio. Concise, memorable copy.
- Scores (1-10): design 9, creativity 9, usability 8

## Navigation
- Screenshot: research/screenshots/moisez-nav.png (full-screen dark menu, opened by the script's click)
- What it is: Minimal top bar (logo, location/time, availability, MENU) that opens a dark full-screen overlay with four huge uppercase links between hairline rules, email and socials in a left column.
- Techniques: overlay transition (GSAP), grid lines persist across themes; CLOSE button gets an orange focus outline.
- Why it works / what is special: Inversion to dark + giant ruled rows is bold yet very legible; contact info is one click away.
- Scores (1-10): design 9, creativity 7, usability 9

## Projects
- Screenshot: research/screenshots/moisez-work.png
- What it is: Stacked full-width image rows (project name left, one-line tagline at column 7) with huge cropped mockup photos; ends with a ruled "see some of the stuff I've made" arrow row linking to the work page. Only the home preview was viewed, not /work.
- Techniques: scroll-driven image reveals, Lenis scroll, hairline rows.
- Why it works / what is special: Name + one witty line per project, huge imagery, no clutter.
- Scores (1-10): design 8, creativity 7, usability 8

## About
- Screenshot: research/screenshots/moisez-about.png (also moisez-intro-pencil.png)
- What it is: Home page intro has a hand-drawn pencil line animating into a sign-over-a-door sketch with a mono caption and "see the system" toggle; later a dark section with giant lowercase "kerning" word the visitor can drag letters of ("mess it up"), plus a "show me the workings" button. A dedicated /about page was not viewed.
- Techniques: canvas/SVG drawn-path animation, draggable letters (physics/drag), dark/light section inversion, blur-in text.
- Why it works / what is special: Skills are demonstrated through play rather than listed; an excellent proof-of-craft moment.
- Scores (1-10): design 9, creativity 10, usability 7

## Contact/Footer
- Screenshot: research/screenshots/moisez-contact.png
- What it is: Giant three-line uppercase CTA with a row of "Let's talk" + email + four socials above; orange and black asterisk badges physically fall and pile up over the type (seen in two frames at different stages). Bottom bar with copyright and "back to the top".
- Techniques: canvas physics (falling and stacking bodies, guessed engine), scroll-triggered.
- Why it works / what is special: Playful, brand-coloured payoff that makes the end of the page memorable while the CTA stays readable.
- Scores (1-10): design 9, creativity 10, usability 8

## Micro-interactions
- Observed: menu overlay inversion; live GMT clock and pulsing availability dot; pencil line drawing itself; badges falling and stacking in footer; blurred-to-sharp heading reveal; drag-a-letter kerning toy; fixed eye icon bottom-left (view/"see the system" toggle) and a scroll indicator bar right edge.
- Not verified: link hover states, page transitions between routes (Barba detected only).

## Mobile
- 390px hero (moisez-mobile-hero.png): headline stacks to four lines at full width, three image tiles in a row under it (third still loading as flat blue), intro text and SCROLL label below; grid lines remain; works cleanly.
