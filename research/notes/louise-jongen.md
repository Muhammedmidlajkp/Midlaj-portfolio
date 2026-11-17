# Louise Jongen — http://www.louisejongen.com/
**Stack/techniques detected:** Lenis smooth scroll (detected by script, confirmed by heuristic), WebGL/canvas (1 canvas detected; likely the tile grid and film-grain/VHS layer, guessed), custom cursor (detected, not visibly confirmed in shots). GSAP/ScrollTrigger/Three/Framer not detected (could be bundled/minified; unknown). Scroll-driven tile animation and blocks that tumble/rotate are seen in shots; the text typing/highlight is guessed as JS. Marquee not detected.
**Typography:** Wide, rounded, chunky display sans (custom, "heading" family) in huge all-caps, one letter per tile; pixel/mono-style all-caps for UI, captions and statements (about 14-16px for UI, ~50px for statement); body fallback Roboto 16px/400.
**Palette:** Dark charcoal bg rgb(33,33,33) with film grain; off-white rgb(249,248,246) text; cream tiles (~#e0dacb) and soft blue/red illustration tones from client work. Dark.
**Layout:** Full-bleed 6x3 grid of rounded-square tiles (about 10px gutters, 12px page margin) in the hero; tiny corner-pinned UI text; left-aligned statement blocks; lots of empty dark space. Retro VHS/CRT feel combined with playful toy-block geometry.

## Hero
- Screenshot: research/screenshots/louise-jongen-hero.png
- What it is: The name is split into 6 letters across a grid of rounded video tiles with VHS noise, a "PLAY" overlay and a running timecode. Tagline text is pinned bottom-left and bottom-right, with "SCROLL" at the bottom centre.
- Techniques: Tile grid with noisy video/WebGL texture, letters cut as masks, tile-by-tile reveal (hero shows tiles still resolving), grain overlay.
- Why it works / what is special: The name becomes the interface; the VHS "tape" metaphor is carried by tiny details (PLAY, timecode). Very memorable and on-brand for a "visual and digital designer".
- Scores (1-10): design 9, creativity 10, usability 7

## Navigation
- Screenshot: research/screenshots/louise-jongen-nav.png (this is the hero mid-scroll, tiles showing project screenshots; the nav bar itself is visible at top)
- What it is: Minimal fixed bar: name with a play arrow on the left, "CONTACT" with a dot on the right, in pixel-mono caps. Only two items.
- Techniques: Fixed overlay, tiny caps text; hover behaviour not verified.
- Why it works / what is special: Radically minimal, stays out of the way of the grid; the play icon reinforces the tape metaphor.
- Scores (1-10): design 8, creativity 8, usability 7

## Projects
- Screenshot: research/screenshots/louise-jongen-work.png (shows an intro statement section, not the project list); the project imagery is seen only inside the hero tiles in louise-jongen-nav.png
- What it is: Hero tiles cycle through real project snapshots (a yoga-teacher-training site and watercolour-style illustrations) so the grid doubles as a work teaser. A dedicated project list/detail was not verified. A later section shows a typed-style statement ("building a digital experience has never been easier...") with a highlighted word beside block letters that stack and tumble.
- Techniques: Scroll-driven transitions between sections, rotating/falling letter blocks (physics-like), highlighted-word inverse block, appears to be typewriter-like.
- Why it works / what is special: Work is shown as texture inside the brand grid; the toy-block tumbling is playful narrative storytelling.
- Scores (1-10): design 8, creativity 9, usability 6

## About
- Screenshot: research/screenshots/louise-jongen-about.png (shows the same statement/blocks section, so the true About area was not clearly verified)
- What it is: Statement-driven storytelling with giant pixel-caps text on the left and stacked rotated letter blocks on the right. The blocks spell a word and animate across scroll (first screenshot upright, second tumbled).
- Techniques: Scroll-scrubbed transforms of the blocks, blocks rotated with slight randomness; typing/highlight on a word.
- Why it works / what is special: Scroll tells a story rather than listing facts; the animated blocks give personality without photos.
- Scores (1-10): design 8, creativity 9, usability 7

## Contact/Footer
- Screenshot: research/screenshots/louise-jongen-contact.png
- What it is: Near-empty dark screen with a service label partly cropped at the top ("Bespoke illustration" row), "SAY HI!" and an email link with a play arrow at bottom-left.
- Techniques: Grain overlay; the service list near the top is likely a scrolling/marquee-like list (not verified, cropped by capture).
- Why it works / what is special: Friendly one-line CTA, email in plain sight, huge negative space.
- Scores (1-10): design 7, creativity 7, usability 9

## Micro-interactions
- Hero tiles: individual tiles resolve at different times (some still noise/cream, some showing letters), a staggered reveal.
- Tile content swaps to project screenshots as the page scrolls (seen in nav shot).
- Letter blocks rotate/tumble between scroll positions (about shots differ).
- Highlighted/inverted word with trailing dots (typing feel) in the statement.
- Persistent film grain and VHS "PLAY"/timecode overlay. Custom cursor detected by script but not observed; hover states not verified.

## Mobile
At 390px the name reflows to a 2x3 grid of large solid cream tiles with dark letter cut-outs, nav kept at top, tagline underneath; very clean and bold, though the lower half of the screen is empty.
