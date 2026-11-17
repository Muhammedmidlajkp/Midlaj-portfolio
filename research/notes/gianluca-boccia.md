# Gianluca Boccia — https://www.gianlucaboccia.me/
Personal portfolio (not an agency). CSS Design Awards WOTD badge visible on the contact screen.
**One-line description:** Gianluca Boccia, a UI designer and design-systems specialist, tells his career story as a single hand-drawn line that a pen draws as you scroll, then presents nine selected projects on the same line.
**Stack/techniques detected:** GSAP + ScrollTrigger (confirmed by script detection), a canvas element/WebGL flag (hint only; visuals look like SVG/line-drawing), no Lenis/Three/Framer detected. Confirmed visually: scroll-scrubbed line drawing with a pen-hand illustration, background colour that changes per chapter, text fade/reveal between slides, chapter index at bottom-left, /work route with slide index and prev/next arrows. Guessed: SVG stroke-dashoffset animation driving the line.
**Typography:** Helvetica Neue / Helvetica / Arial stack, weight 400 throughout (logo "GB." bold). Display headlines about 72-112px, tight negative tracking, sentence case. Body about 16-32px. Small uppercase tracked eyebrow labels (about 11px) for chapter metadata. Tiny numeric indices (00, 01/09).
**Palette:** Each chapter has its own flat colour: white (#fff) intro with near-black #171717 line, slate blue about #4F6283, muted grey-purple about #585664, teal-green about #476B66, vivid violet about #6644C8 (MODO), deep green about #095A31 (Spotify). White line art and white text on colour; cookie card is warm off-white. Overall alternates light intro with saturated dark chapters.
**Layout:** Very sparse, full-viewport scenes. Left column eyebrow plus big headline, right column short paragraph (two-column, about 72px side margins). The ground line sits at about 80 percent height across the full width, with a mascot character (mustache, glasses) and a pen hand interacting with it. Fixed header (logo left, links right) and a fixed footer bar (chapter number and title, "Keep going" cue). 25k-52k px of scroll height. Feels like an illustrated storybook crossed with a minimal Swiss grid.

## Hero
- Screenshot: research/screenshots/gianluca-boccia-hero.png
- What it is: White screen where a thick black signature is being drawn by an outlined hand with a pen, rising from a horizontal ground line. The footer says "00 The beginning". (Cookie card dismissed first; the raw capture was blank/behind the card.)
- Techniques: scroll or time-driven stroke drawing, SVG illustration (guessed), GSAP.
- Why it works / what is special: The signature is the brand, written live, so the name needs no headline. Huge whitespace and one gesture.
- Scores (1-10): design 9, creativity 10, usability 7

## Navigation
- Screenshot: research/screenshots/gianluca-boccia-hero.png (header visible; also gianluca-boccia-work.png)
- What it is: Minimal fixed header: "GB." wordmark left; Story, Work (with a small count 09), CV with arrow, Contact on the right. Active link gets an underline on /work. Text and logo recolour to suit each chapter background. A second fixed bar shows chapter number and title with a plus icon.
- Techniques: fixed header, colour inversion per section, route-based /work page, chapter indicator.
- Why it works / what is special: Tiny, quiet, always orienting. The Work count and chapter indicator tell you how long the journey is.
- Scores (1-10): design 8, creativity 7, usability 8

## Projects
- Screenshot: research/screenshots/gianluca-boccia-work.png (MODO, 01/09) (the mid-transition Spotify 03/09 shot was overwritten and deleted; observed it in-session only)
- What it is: /work is a horizontal-feeling slideshow driven by scroll: each of nine projects gets its own full-colour scene with a big title, role label, two-line summary, "Explore the project" link and a simple line-art object (e.g. a desktop window for MODO) that the mascot stands beside and the pen hand redraws into the next one. Bottom index lists all nine names with numbers, plus prev/next arrows and an "All projects" grid link. Instructional line says to scroll to follow the line and select an object to explore.
- Techniques: GSAP ScrollTrigger scrubbing, colour crossfade between projects, text fade out/in, hand drawing the next object (seen mid-draw), plus-button hotspot on the object.
- Why it works / what is special: Projects are presented as drawn pictograms, not screenshots, so the whole site shares one visual language; the pen handing you from case to case is a strong narrative connector.
- Scores (1-10): design 9, creativity 10, usability 7

## About
- Screenshot: research/screenshots/gianluca-boccia-about.png (and gianluca-boccia-work.png from the first capture, now overwritten; about shows chapters "03 New York" and "06 The venture capital fund")
- What it is: The About is the main page itself: a chapter-by-chapter career story (moving to New York, company closing, and so on) in a big headline plus one short paragraph per scene, the mascot acting out each beat on the line. The first-pass captures were taken while the cookie card was still covering part of the scene.
- Techniques: scroll-scrubbed chapters, background colour shift per chapter, character animation, footer chapter label.
- Why it works / what is special: Turns a CV into a story with emotional beats and a constant visual character; very memorable.
- Scores (1-10): design 9, creativity 10, usability 7

## Contact/Footer
- Screenshot: research/screenshots/gianluca-boccia-contact.png
- What it is: Teal final chapter "The line continues": big headline, short paragraph, email / LinkedIn / CV links with arrows, the CSSDA Website of the Day badge with a "View awards" pill hanging from the line, and the pen hand still drawing at the bottom right.
- Techniques: line leads into the final CTA, badge hung on the line, same type system.
- Why it works / what is special: Closes the narrative loop and keeps the contact links simple and readable.
- Scores (1-10): design 9, creativity 9, usability 8

## Micro-interactions
- Observed: cookie/analytics card with a small wavy line in its top rule; its choice buttons are underlined rows with arrows.
- Observed: background colour changes between chapters and projects; headline and paragraph fade as you move to the next project (seen mid-fade on Spotify).
- Observed: pen hand draws objects and the signature; "Keep going" scroll cue and "Scroll to follow the line" hint.
- Observed: arrows (northeast) on external links; active link underline; numbered project index.
- Not verified: hover states, cursor effects (no custom cursor detected), page transitions.

## Mobile
390px capture (research/screenshots/gianluca-boccia-mobile-hero.png) shows only the header (logo plus four larger links on one row) and the cookie card over a blank white hero; the illustration had not started drawing, so the mobile hero is only partly verified. Navigation stays fully visible without a hamburger.
