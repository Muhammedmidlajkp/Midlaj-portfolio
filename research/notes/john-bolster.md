# John Bolster — https://www.johnbolster.design/
**Stack/techniques detected:** Custom scroll-driven site (page height ~24.5k px with a tall spacer and fixed/pinned stages; no GSAP/Lenis/Three globals detected, so likely hand-rolled scroll engine). Confirmed: 2 canvases + WebGL flag (starfield on Services; a connected line/"comet" path), a blue SVG/canvas curve that travels the whole page and loops around content, scroll-synced section progress HUD (right side), full-screen menu overlay, halftone-dithered cut-out portrait, outlined type that flies in, horizontal project carousel with fade of previous slide, copy-email button. Guessed: custom smooth-scroll implementation.
**Typography:** Bebas Pro Bold (display, all caps, ~250px hero name, ~70-80px section heads), Geist (body 16px), Geist Mono (tiny tracked uppercase labels/nav numbers), DM Serif Display loaded (not seen). Menu uses a lighter condensed face at ~90px.
**Palette:** warm bone background rgb(236,234,226), near-black ink rgb(18,20,19), electric cobalt blue accent (~#1f2fe0) for the path/HUD/dots, near-black #0d0d0d for Services section with white specks. Light mode with dark inversions.
**Layout:** Mostly centered or offset single-focus stages, one idea per viewport, huge negative space, tiny mono microcopy at corners, thin vertical progress rail on the right with numbered section labels. Confident, editorial, poster-like.
## Hero
- Screenshot: research/screenshots/john-bolster-hero.png
- What it is: Giant condensed name across the viewport on bone background, with a blue line looping beneath/through it like a pen stroke; small mono "designer · since" label and short intro bottom-left, "scroll to explore" bottom-right.
- Techniques: Oversized display type, scroll-linked line path, mono microtype, tiny corner UI.
- Why it works / what is special: One typeface, one accent, one gesture. The line becomes a guide that carries the viewer through the entire page.
- Scores (1-10): design 9, creativity 8, usability 8
## Navigation
- Screenshot: research/screenshots/john-bolster-nav.png
- What it is: Minimal wordmark top-left and "MENU" toggle top-right; opens a dark full-screen overlay with six huge numbered items plus small secondary links. Also a persistent right-edge section rail with current section number and name.
- Techniques: Full-screen overlay, numbered index, scroll-spy HUD rail with tick marks that fill in blue.
- Why it works / what is special: The rail doubles as a progress bar and table of contents; the menu is typographic only, very clean.
- Scores (1-10): design 9, creativity 8, usability 9
## Projects
- Screenshot: research/screenshots/john-bolster-work.png
- What it is: A horizontally progressing showcase, one project per stage with a large cropped image bleeding off the right edge, counter ("04 / 06"), title, discipline, and "view project" arrow link; previous slide fades out on the left as the blue line sweeps vertically between them.
- Techniques: Pinned scroll-driven horizontal sequence, image bleed, crossfade, counter.
- Why it works / what is special: Single-project focus with counter gives pacing and clarity; the line acts as transition between slides.
- Scores (1-10): design 8, creativity 8, usability 8
## About
- Screenshot: research/screenshots/john-bolster-about.png
- What it is: Halftone-dithered full-body cut-out portrait beside a big two-line headline and a body paragraph; the blue line loops around the text. Preceded by a "Journey / by the numbers" stage (john-bolster-journey.png) with outlined letters arcing in along the path, and a dark "What I do" starfield stage (john-bolster-services.png) where service names float at varied sizes.
- Techniques: Halftone image treatment, outlined text on a path, particle starfield, light-to-dark inversion.
- Why it works / what is special: Personality without photos clutter; the halftone ties to print/brand heritage and the sections each change mood while sharing the line.
- Scores (1-10): design 9, creativity 9, usability 7
## Contact/Footer
- Screenshot: research/screenshots/john-bolster-contact.png
- What it is: Big "Let's make something" line whose last letter pops up as a stick figure on a blue parachute floats over it; email in condensed type with a pill "copy email" button; mono footer links and copyright. Right rail shows 09 Contact.
- Techniques: Character-level animation, illustration playful touch, copy-to-clipboard button.
- Why it works / what is special: Humor and a single clear action; the blue accent closes the journey of the line.
- Scores (1-10): design 9, creativity 9, usability 9
## Micro-interactions
- Blue line draws and loops across the page as scroll progresses, ending in a dot that follows (seen at multiple positions).
- Right HUD rail ticks fill blue and label swaps per section (confirmed).
- Menu icon switches to X with a dark overlay (confirmed).
- Outlined "Journey" letters sit along a curved path; Services words scatter with starfield (static frames seen).
- Parachute figure drifting above the contact headline and one raised letter (static frame seen).
- Hover states were not tested.
## Mobile
Mobile hero (john-bolster-mobile-hero.png, 390px) was captured by the tool but not examined in detail by me beyond file existence; treat as unverified.
