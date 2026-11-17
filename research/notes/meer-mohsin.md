# Meer Mohsin — https://www.meermohsin.me/
**Stack/techniques detected:** Lenis smooth scroll (confirmed by script), WebGL/canvas x3 (confirmed; 3D cracked-terrain scene with an award certificate plane and a chrome-like butterfly/blade mesh seen in screenshots; Three.js itself not detected by global, so likely bundled), custom cursor (confirmed: small red arrow; red glow orb on first scroll frame), preloader with counting numerals and "click anywhere to activate" gate (confirmed, probably to unlock audio), audio-reactive waveform widget bottom-left (seen, animated bars), film-grain/noise overlay on loader (seen), large scroll-driven pinned scenes with word marquee-like horizontal drift (seen). GSAP not detected by globals (guessed present, bundled). No Framer Motion.
**Typography:** Mix of a flowing calligraphic/tattoo-style script (custom "ruthie"-like face) at huge scale (~200-300px) for loader counter and hero words; light/regular grotesk ("light-font"/"regular-font") for UI at ~12px uppercase, headings ~60px weight 100; bold wide grotesk for project titles (~32px) and a heavy sans in "recognition" band.
**Palette:** black #000, blood red ~#990000 / #a00000 loader and about bg, bright red ~#ff2020 gradient highlights, white for logo/nav; project sections pick up each project's photo colours (orange, purple, lime). Dark theme, single-hue red identity.
**Layout:** Full-viewport pinned scenes, centred composition, 3-item bottom bar (Tension / Immersion / Impact) with plus-sign dividers, logo top-left, menu top-right, W. "Site of the Day" side tab right edge. Very theatrical, cinematic, low text density, wide negative space.
## Hero
- Screenshot: research/screenshots/meer-mohsin-hero.png
- What it is: After a red grain loader counting 0-100 in script numerals and a click gate, a black stage with thin red diagonal construction lines, oversized script words that change (e.g. "Legacy") layered over a glitchy red portrait strip and a dark butterfly emblem. Later frames show a chrome-red butterfly mesh over horizontally drifting script words on a black-to-red gradient.
- Techniques: WebGL emblem, scroll-driven word swaps, line/grid overlay, glitch image slices, Lenis.
- Why it works / what is special: Strong single-colour brand world; emblem + calligraphy + diagrams feel like a gothic poster that animates. The click gate lets audio start.
- Scores (1-10): design 9, creativity 10, usability 6
## Navigation
- Screenshot: research/screenshots/meer-mohsin-nav.png (menu list visible top-right: Home/About/Services..., lines fade in with gradient mask; the first-attempt hover shot caught a dark frame)
- What it is: Small uppercase list top-right whose items fade out progressively (mask), plus top-left emblem logo, bottom three-word status bar, and an awards tab. Menu items include Home, About, Services, Work, Blog, Contact, TikTok, Instagram, Behance (from DOM).
- Techniques: gradient-faded text, fixed HUD elements.
- Why it works / what is special: Minimal HUD that never competes with the scene; persistent bottom bar adds identity.
- Scores (1-10): design 8, creativity 8, usability 6
## Projects
- Screenshot: research/screenshots/meer-mohsin-work.png
- What it is: Vertical showcase: a large centred mockup image with neighbours above/below, blurred full-bleed copy of the active image as backdrop, big white title left, short description right, circular numbered counter (02, 03) with a ring at right-middle. Scrolling steps through projects.
- Techniques: pinned carousel, blurred backdrop crossfade, depth scaling of neighbours, scroll-linked counter.
- Why it works / what is special: Each project re-tints the whole screen from its own imagery; strong focus on one item.
- Scores (1-10): design 9, creativity 8, usability 8
## About
- Screenshot: research/screenshots/meer-mohsin-about.png
- What it is: Solid red section with stat counters in script numerals (10+, 25+) separated by thin rules, a chrome blade shape transitioning across, followed by (DOM text) a statement about creating felt experiences with roles listed (visual storyteller, UI/UX designer, 3D web developer). Frame caught mid-transition/blurred.
- Techniques: blur-in numerals, scroll-triggered text reveals, WebGL shape.
- Why it works / what is special: Colour flip from black to full red gives a dramatic chapter change.
- Scores (1-10): design 8, creativity 9, usability 7
## Contact/Footer
- Screenshot: research/screenshots/meer-mohsin-contact.png (same frame as nav; shows the end-of-page scroll with chrome butterfly; the "Get in touch" large light-weight heading and "Let's Connect" are confirmed from DOM text, not seen clearly in a screenshot). Also seen: awards section with a 3D certificate (Honors / Site of the Day) on a cracked red terrain, flanked by huge "recognition" text.
- What it is: Final screen not clearly captured; DOM shows 60px thin "GET IN TOUCH", an ONLINE status and a lorem-ipsum placeholder paragraph.
- Techniques: 3D certificate scene, status indicator.
- Why it works / what is special: awards shown as a 3D object rather than logos.
- Scores (1-10): design 8, creativity 9, usability 6 (partly unverified)
## Micro-interactions
- Custom red arrow cursor; red glowing orb appears on stage entry.
- Loader counter in script numerals with grain; click-to-activate gate.
- Audio waveform bars animate bottom-left.
- Menu items fade via gradient mask; "+" dividers rotate to "x" during transitions in the bottom bar.
- Scroll-driven word swaps and horizontal drifting script text; glitch slices on portrait.
- Blurred backdrop crossfades between projects; numbered ring counter.
## Mobile
Only the loader was captured at 390px (red grain, script counter, "click anywhere to activate" gate); retake timed out, so mobile layout past the gate is unverified.
