# Carter Ogunsola — https://carterogunsola.com/
**One-line description:** Personal portfolio of Carter Ogunsola, a "Creative Developer & Brand Engineer" (CSS Design Awards WOTD); a personal portfolio, not an agency. It is a dev-toy-filled, "system dashboard" site with a Lab of interactive experiments, writing, studio and booking.
**Stack/techniques detected:** Lenis smooth scroll (confirmed by script detection); WebGL canvases (6 canvases, confirmed; hero slideshow of tilted wireframe/grid planes and a glass cube was visible); custom cursor (detected, and live multiplayer-style cursors with name labels seen); Cmd+K command palette hint in nav (seen, not opened); live presence ("N online", "someone joined" toasts, confirmed visually); text scramble/flip reveal on project title (seen mid-animation); light/dark toggle (seen); film-grain/halftone overlay (seen). GSAP/Three not detected (likely custom or other libs, unknown). Next/Framer not detected.
**Typography:** Oracle (Neue-like grotesque; headings ~32px at weight 400-500, big 404 headline ~60px, tight tracking, sentence case), Geist Variable, Geist Mono, PP Neue Montreal Mono, and Geist Pixel variants (Square/Circle/Triangle/Grid) used for tiny uppercase mono HUD labels (~10-11px).
**Palette:** Dark mode default. bg rgb(30,30,30), text rgb(247,247,247), greys for secondary, accent only via cursor-label chips (yellow, orange, olive, pink). Light mode available via toggle (not captured).
**Layout:** Full-viewport stage, centered minimal content, floating pill nav centered, HUD telemetry chips along top edge, logo left, toggles right, corner toasts bottom-left. Very sparse and generous negative space; the chrome carries the personality.
## Hero
- Screenshot: research/screenshots/carter-ogunsola-hero.png
- What it is: Full-screen project carousel ("No 01 / 17") with a centered project title, tag chips and a "View project" button, while tilted image/wireframe planes float at the corners and a glass cube drifts on the right. In headless the images load as wireframe grids, then photos (older shots show them).
- Techniques: WebGL planes, scramble text reveal, rotated floating cards, grain overlay.
- Why it works / what is special: Tiny centered copy against huge dark space makes the floating objects feel like a gallery in a void; the HUD chips (UT clock, FPS, LCP, presence, booking quarter) are a witty nerd-flex.
- Scores (1-10): design 8, creativity 9, usability 7
## Navigation
- Screenshot: research/screenshots/carter-ogunsola-nav.png (shows /lab wheel list with nav on top)
- What it is: Floating rounded pill with About / Lab / Writing / Studio / Contact plus a Cmd+K chip, CO monogram logo left (it expands to a page label like "Motion" on subpages), bell and theme toggle right; hamburger plus search on mobile.
- Techniques: glassy pill, active-state highlight, command palette, logo morph.
- Why it works / what is special: Persistent and calm, uses the command palette as a power-user path.
- Scores (1-10): design 8, creativity 8, usability 8
## Projects
- Screenshot: none verified for a dedicated /work page (/work is a 404; projects live in the hero carousel, 17 items). The Lab page (carter-ogunsola-nav.png) is the closest verified listing.
- What it is: Lab lists experiments in a tilted curved "wheel" (also List and Grid modes via a bottom switch) with a live preview card on the right (a dotted heart on canvas) and tags like CANVAS/NEW.
- Techniques: scroll-driven 3D-ish wheel layout, view-mode switcher, live mini canvas demos.
- Why it works / what is special: The list itself is the interaction; the large type is the visual, and switching layouts shows craft.
- Scores (1-10): design 8, creativity 9, usability 7
## About
- Screenshot: research/screenshots/carter-ogunsola-about.png
- What it is: Mid-scroll shot shows a wavy torn grey paper-like band, a "telemetry" widget (live local time, coordinates, a commits heatmap grid) and a vinyl turntable "radio" card (now playing, rotation stats). Top of page not captured.
- Techniques: SVG/canvas shapes, live data widgets, skeuomorphic turntable.
- Why it works / what is special: Personality via live data cards instead of a bio paragraph.
- Scores (1-10): design 8, creativity 9, usability 6
## Contact/Footer
- Screenshot: research/screenshots/carter-ogunsola-contact.png (mostly empty and dark; only a faint progress bar and a small sign-off line at the bottom were visible, so I could not verify the real layout)
- What it is: Appears to be a letter-style contact page (a "Sincerely," sign-off in mono type); content mostly not rendered in my capture.
- Techniques: unverified, possibly scroll-linked reveal.
- Why it works / what is special: unverified.
- Scores (1-10): design 6, creativity 7, usability 6 (low confidence)
## Micro-interactions
- Live multiplayer cursors with name chips (e.g. adjective + animal names) roaming the page.
- "Someone joined / N online" toast bottom-left, updating counts.
- HUD chips with changing FPS/online counts.
- Project title scrambles/flips between characters on change.
- Lab wheel list tilts and fades by distance from the active item; heart preview rotates with a hand cursor.
- Theme toggle (sun/moon), Cmd+K palette chip.
- Playful 404 page ("This page wandered off.").
## Mobile
At 390px the hero shows a full-width 3D claymation-style illustration under a compact header (logo, bell, search, theme, hamburger) with the project title mid-scramble and a View project button below; clean and works, cursors still overlay the header.
