# Guillaume Colombel — https://guillaumecolombel.fr/
**Capture caveat:** the site is a WebGL single-screen app. Playwright (software GL) only ever got past the loader to the "ring" state, so the saved PNGs in research/screenshots (guillaume-colombel-*.png) all show the loader/ring. Everything below beyond the hero ring was observed live in the Claude browser pane (screenshots not saved to disk). Page scrollHeight is 900px: scroll is virtual (wheel-driven), not native.

**Stack/techniques detected:** Nuxt (confirmed: /_nuxt bundle, Vue SPA with real routes, /about). 2 canvases = WebGL (confirmed by visible 3D-bent text and render-pass windows; library is bundled so not detected, likely Three.js/OGL, guessed). Wheel-driven virtual scroll (confirmed behaviour; Lenis/GSAP not detected on window, guessed custom). Page transition between home and /about (confirmed: project title zooms/morphs while route changes). Audio toggle bottom-right (confirmed). Film-grain/noise overlay (confirmed visually). Umami analytics. Custom cursor: not verified.
**Typography:** Neue Montreal (only loaded font). Nav/body about 16px regular, tight tracking. Project titles huge (about 80-110px), bold/heavy, UPPERCASE, alternating solid white fill and outline-only strokes. About text about 16px/1.7 with bold name and warm-orange links.
**Palette:** near-black bg (#050505-ish, grainy), white text, muted grey for inactive nav, warm peach/tan (#d9a679-ish) for the ring line and links. Dark only.
**Layout:** Full-viewport canvas, 30px edge gutters, tiny fixed corner UI (name top-left, About top-right, sound bottom-right). Huge empty negative space; content is centered/bottom. Experimental, cinematic, very minimal.

## Hero
- Screenshot: research/screenshots/guillaume-colombel-hero.png (loader/ring state only)
- What it is: A black grainy stage with a single hand-drawn, wobbly vertical oval outline and a bright dash tracing at the top (loader). On scroll, macOS-style windows labelled with 3D render passes (wireframe, uv, clay, normals, transmission, beauty) fade in over the ring, showing the work as a "render breakdown".
- Techniques: WebGL, line drawing animation, window-chrome UI cards, grain overlay, wheel-driven reveal.
- Why it works / what is special: Speaks the developer/3D-artist's language instead of a headline; calm, mysterious, zero text. The loader doubles as the hero art.
- Scores (1-10): design 9, creativity 10, usability 5 (nothing says what to do, slow to load)

## Navigation
- Screenshot: research/screenshots/guillaume-colombel-nav.png (loader state only)
- What it is: Just two links: name (top-left) and "About" (top-right), plus a sound icon bottom-right. Clicking About triggers a transition and the link becomes "Close".
- Techniques: Nuxt route transition, label swap, mix-style small type.
- Why it works / what is special: Absolute minimalism keeps full focus on the canvas; About/Close toggle is a clear single-state control.
- Scores (1-10): design 8, creativity 7, usability 8

## Projects
- Screenshot: research/screenshots/guillaume-colombel-work.png (loader state only; real view seen live)
- What it is: A 12-item list (numbered 01-12 in DOM) rendered in WebGL as giant two-line titles on a curved/cylindrical band at the bottom edge of the screen. Wheel scrolls them horizontally past; the focused one is solid white and bright, neighbours are outline-only and dimmer. Some title letters show image/video texture or noise patches.
- Techniques: WebGL text on a bent plane, solid-vs-stroke type states, wheel-driven carousel, shader texture-in-letters, zoom/morph into project.
- Why it works / what is special: Turns a boring list into a physical object; the outline-to-fill focus state is simple and legible. Letters acting as masks for project imagery is a strong brand moment.
- Scores (1-10): design 9, creativity 10, usability 6 (hidden scroll affordance, text partially off-canvas)

## About
- Screenshot: research/screenshots/guillaume-colombel-about.png (loader state only; real view seen live)
- What it is: Route /about: a short left-aligned paragraph block at upper left on pure dark: bold name, role, a few lines of credentials with orange links to clients/studios.
- Techniques: route transition from the canvas, plain HTML text over dark stage.
- Why it works / what is special: Very short, human, one paragraph; credibility (jury membership, prior studios) in two lines. Restraint is the point.
- Scores (1-10): design 7, creativity 6, usability 9

## Contact/Footer
- Screenshot: research/screenshots/guillaume-colombel-contact.png (loader state only)
- What it is: No separate contact section or footer found; contact/links appear to live in the About text (orange links). I did not see an email block, so I cannot confirm one.
- Techniques: n/a
- Why it works / what is special: Nothing extra competes with the work, but contact is easy to miss.
- Scores (1-10): design 6, creativity 4, usability 5

## Micro-interactions
- Loader: a hand-drawn ring is stroked with a bright moving dash while assets load (long on slow GPUs, 30s+ in software rendering).
- Wheel scroll drives everything: render-pass windows fade up, then titles slide along a curved band.
- Focused title swaps outline stroke to solid white fill; neighbours dim.
- Opening About: the focused title scales up and fades while the route changes; nav label "About" cross-fades to "Close" (caught mid-transition showing both overlaid).
- Permanent film grain; sound toggle bottom-right.
- Not verified: hover states on titles, custom cursor, mobile gestures.

## Mobile
390px hero (guillaume-colombel-mobile-hero.png) shows only the loader ring centered on black, scaled to the narrow viewport, nav hidden at that moment. Mobile interaction not tested beyond that.
