# Lionel Quellery — https://www.asklionel.tech/
**Stack/techniques detected:** Confirmed: a WebGL/canvas full-bleed scene (1 canvas, WebGL true) with a particle field and wireframe 3D boxes; custom cursor (heuristic, not visually verified); Archivo Variable + Geist Mono Variable loaded. A scroll-progress HUD (0-100 counter, vertical progress rail with ticks, "T+03.2" timer, stage labels like "00 INGEST", "03 TRANSFORM") was visible. A light/dark mode toggle exists in the DOM text. The document is only 900px tall (`#root`), so the story is driven by a custom/virtual scroll, not native page scroll. GSAP, Lenis and three were NOT detected by globals (likely bundled/minified; unknown). Vercel hosting, and a Vercel Security Checkpoint intermittently blocks automated browsers (one run returned "Failed to verify your browser"; I did not bypass it, a later plain load worked). Awwwards "Nominee" tab and CSSDA badge are present.
**Typography:** Archivo Variable at weight 900, uppercase, huge (h1 about 155px at 1440, tight leading, "COMPLEXITY. IN MOTION."); Geist Mono Variable for HUD/labels, about 11-12px uppercase with wide tracking; body copy about 16px light sans. Stats at about 100px weight 900.
**Palette:** Light mode: background oklch(0.97 0 0) (about #F5F5F5), text oklch(0.13 0 0) (about #0D0D0D), greys for secondary labels (#666-ish), hairline rules; only accent colour is the yellow CSSDA badge. Pure monochrome. A dark mode is offered.
**Layout:** 12-col-like grid with 48px outer margins, hairline-divided 4-column stat cells, monospace HUD pinned in corners (top-left role, top-right stage + counter, bottom-left metric). Very sparse, engineering/data-dashboard feel, lots of whitespace, one giant headline per chapter.

## Hero
- Screenshot: research/screenshots/lionel-quellery-hero.png (this frame is a mid-story chapter, "SRC / CORE / TRANSFORM" stage, taken after the initial load) and lionel-quellery-nav.png (headline over the pipeline scene)
- What it is: The first load shows a radial burst of black/grey dots from a centre point (a "stage 00 INGEST" particle field, HUD reading throughput and a 0-100 counter). As the timeline advances, particles stream as dotted lines from small labelled wireframe source boxes (WEB, APP, SERVER) through a central glass-like cube ("CORE / TRANSFORM") and out as ordered lines, with the huge headline "COMPLEXITY. IN MOTION." overlaid.
- Techniques: WebGL particles, wireframe 3D boxes with mono labels, time-driven/scroll-driven chapters, live-feeling HUD text (T+ timer, counter).
- Why it works / what is special: The visual is a literal metaphor for the job (data pipelines: chaos in, order out), expressed with only black dots on grey. The HUD makes the whole page feel like a live system.
- Scores (1-10): design 9, creativity 10, usability 7

## Navigation
- Screenshot: research/screenshots/lionel-quellery-nav.png (shows no open menu; nav links "Work / About / Field notes / Contact" were found in DOM text)
- What it is: Small "Lionel Q." wordmark with a square dot on the left and a text nav; on mobile it collapses to "MENU" plus two-line icon (seen in the mobile shot). Desktop top-left holds a mono role line instead of a visible bar in the shots I saw.
- Techniques: minimal text nav, mono HUD labels, light/dark toggle text in DOM.
- Why it works / what is special: Navigation almost disappears into the HUD aesthetic; the stage counter and rail double as wayfinding. I could not confirm the open-menu state.
- Scores (1-10): design 8, creativity 7, usability 6

## Projects
- Screenshot: research/screenshots/lionel-quellery-work.png (shows the final "stats + trusted by" chapter and the "NEXT -> SELECTED WORK." teaser, not the project list)
- What it is: A 4-cell stat strip (huge numerals with mono captions), a "Trusted inside" row of four client names set in black 900 type, then an "END OF STREAM 01/06 / NEXT" teaser with a big grey headline and a line with a small square slider/arrow that points to the next chapter.
- Techniques: hairline-grid stats, chapter pagination (01/06), progress rail on left, scrub line with moving square.
- Why it works / what is special: The site is structured as 6 chapters, each ending with a "next" teaser, so navigation is sequential and cinematic. The actual project list was NOT seen (could not reach it with automated capture).
- Scores (1-10): design 8, creativity 8, usability 6

## About
- Screenshot: research/screenshots/lionel-quellery-about.png (the same stats chapter as work; a dedicated About page was not captured)
- What it is: The only about-type content seen is the stat strip and the one-line intro paragraph under the hero headline, plus a mono tagline.
- Techniques: oversized numerals, mono caption pairs.
- Why it works / what is special: Numbers as bio; fast to scan. Not otherwise verified.
- Scores (1-10): design 8, creativity 6, usability 7

## Contact/Footer
- Screenshot: research/screenshots/lionel-quellery-contact.png (same frame as above, bottom footer visible)
- What it is: A hairline-separated footer bar with the CSSDA badge, copyright, a "SIGNAL: LIVE" status with a square dot, LinkedIn/GitHub arrows, a "PLAY" control (likely sound/animation toggle) and "BACK TO TOP". A dedicated contact page was not seen.
- Techniques: mono micro-copy, status indicator, diagonal-arrow link glyphs.
- Why it works / what is special: The "signal: live" line and "play" control keep the data-stream theme through to the end.
- Scores (1-10): design 8, creativity 7, usability 7

## Micro-interactions
- Hero particles continuously animate; the HUD counter (092 / 100) and "T+xx.x" timer change as the story progresses (seen across two frames: 00 INGEST and 03 TRANSFORM).
- Stage labels change per chapter ("00 - INGEST", "03 - TRANSFORM . ONE CORE").
- The "SELECTED WORK." teaser line has a small square marker that sits at a different position between captures (it moves along the line), implying a scroll/hold-to-advance scrubber.
- A vertical left rail with tick marks and a "100" label tracks progress.
- Fixed "Nominee" tab and the CSSDA badge stay on screen across all frames.
- Custom cursor was flagged by heuristics but I did not see it in screenshots; hover states were not observed.

## Mobile
At 390px the hero is the same radial dot burst, centred in a tall viewport, with "Lionel Q." plus square dot at left, "MENU" plus hamburger at right, and the 2-column stat cells (6+, 50+) peeking in at the bottom. The headline and HUD are not visible in that first frame.
