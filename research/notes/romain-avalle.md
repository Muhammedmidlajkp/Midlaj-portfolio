# Romain Avalle — https://www.romainavalle.dev/
**Stack/techniques detected:** Lenis smooth scroll (heuristic hit, confirmed by smooth wheel scroll); WebGL + 2 canvases (confirmed: the page-wide ASCII/dither effect is a WebGL post-process rendering a 3D shape plus huge text as ASCII glyphs and 0/1 binary characters); no GSAP/ScrollTrigger/Three global detected (likely bundled, so unknown). Audio instrument layer (confirmed by on-screen text: type to play, 1-0 instrument, arrows for pitch/echo). Floating black pill dock with music note toggle (confirmed). Custom cursor: not detected. Marquee/page transitions: not seen. Text glitch/distortion on the big contact headline (confirmed in screenshot).
**Typography:** Remus (variable, custom) for UI/headings, Andale Mono and Comic Mono for small text, Saboneta (blackletter) for the giant "Let's talk". Project titles ~40px tight grotesk, medium weight, sentence case; meta ~11-12px; body 16.5px.
**Palette:** strictly monochrome: white #fff bg with black #000 text on the work list; inverted black bg with white text in the contact block. No accent colour.
**Layout:** Full-width 20px outer margins, 1px black hairline rows, ~52px row height, columns: index number, title, studio/role/awards/year aligned to a rigid grid. Brutalist, data-table feel, with the ASCII figure floating behind the table.

## Hero
- Screenshot: none verified (headless run stuck on the loader; shot deleted). Loader seen: "Romain Avalle" left, "Interactive Developer" right, a chunky blocky progress bar in the middle, hint line about typing to play sounds.
- What it is: Mobile 390px shot (not loader) shows the name and title as black rounded-label chips over a dithered ASCII figure.
- Techniques: WebGL ASCII shader, audio instrument, block-character loader.
- Why it works / what is special: Loader doubles as a teaser of the playable keyboard instrument; ASCII rendering sets the whole identity.
- Scores (1-10): design 8, creativity 9, usability 6 (only partly verified)

## Navigation
- Screenshot: none verified
- What it is: A single floating black pill docked bottom-centre: square mark, name, "Interactive Developer" in grey, a "Let's talk" link, and a music-note sound toggle. Visible on every scrolled shot.
- Techniques: fixed-position pill, minimal one-link nav.
- Why it works / what is special: Zero chrome, always reachable CTA, sound toggle built in.
- Scores (1-10): design 8, creativity 8, usability 8

## Projects
- Screenshot: research/screenshots/romain-avalle-work.png (also romain-avalle-about.png shows the lower rows)
- What it is: An archive table of 30+ projects: big numbered rows with title, studio, role, awards count and year, separated by hairlines, over a huge ASCII-rendered "Selected work" heading and figure.
- Techniques: WebGL ASCII overlay behind HTML table, Lenis scrolling; hover effects not verified.
- Why it works / what is special: Reads like a CV/ledger, awards count as proof, scale contrast between giant ASCII heading and small mono meta.
- Scores (1-10): design 9, creativity 9, usability 7 (text overlaps the glyph field, legibility dips)

## About
- Screenshot: none verified (page text confirms a long career bio from 2006 on; only the list view was captured)
- What it is: Long first-person bio paragraph block, text-only in the DOM.
- Techniques: unknown
- Why it works / what is special: Honest, dry tone, years of experience as credibility.
- Scores (1-10): design n/a, creativity n/a, usability n/a

## Contact/Footer
- Screenshot: research/screenshots/romain-avalle-contact.png
- What it is: Full-bleed black panel; huge blackletter "Let's Talk" rendered as ASCII/dither with glitch slicing at the edges; short invitation top-left, underlined links (Email, Bluesky, LinkedIn, GitHub, old folio) top-right, credits and fonts list bottom corners.
- Techniques: WebGL ASCII + distortion, mono credits.
- Why it works / what is special: Memorable closer, the type itself is the artwork, inversion to black marks the end.
- Scores (1-10): design 9, creativity 10, usability 7

## Micro-interactions
- Giant headings are rendered through a live ASCII glyph shader (letters as dots, digits and mono characters), seen on both "Selected work" and "Let's Talk".
- Contact headline shows horizontal glitch/slice distortion at its edges.
- Floating dock stays fixed through all sections with a sound toggle.
- Loader advances as a chunky block bar from dither to solid.
- Hover states, cursor behaviour and keyboard sounds were NOT verified.

## Mobile
390px shot: name and role as black rounded chips, ASCII face pattern dithered behind, same bottom pill dock; clean and legible.
