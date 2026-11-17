# Giordano Betti — https://giordanobetti.com/
**One-line description:** Personal portfolio of an independent cinematographer / director of photography based in Tuscany, Italy (music videos, shorts, commercials); CSS Design Awards WOTD. Personal site, not an agency.
**Stack/techniques detected:** Lenis smooth scroll (detected, confirmed by heuristic), custom cursor (heuristic flag, not visually confirmed), 3 canvas elements + WebGL (detected; likely video/frame renderer), preloader with percent counter that streams image frames ("Media loading", frame_N.webp seen). No GSAP/Three/Framer detected (could be bundled/minified, guessed absent). Line-by-line text reveal on loader/mobile text (seen mid-animation in the 390px loader shot). Project video backgrounds did NOT render in headless capture (black), so media treatment is unverified.
**Typography:** Instrument Serif (condensed-looking, uppercase, ~62px+ for project titles; huge uppercase ~60px grey-on-dark for about statement) paired with Host Grotesk (16px, regular/medium, tight ~1.0 line-height, sentence case, small meta text). Serif is also used in lowercase for the tagline "Independent Cinematographer" and "Worked with".
**Palette:** Near-black bg rgb(23,23,23) #171717; white text #fff; mid-grey (~#666) for secondary text and the big about statement. Dark, monochrome; all colour comes from the video/imagery.
**Layout:** Strict 4-column editorial grid: logo/tagline at far left, nav links snapped to column lines (~x=630, 1035, 1237), meta text aligned to the same columns, huge empty negative space. Fixed header and a fixed bottom-left tagline; thin vertical progress/index line at left (x=47). Cinematic, quiet, film-credit feel.
## Hero
- Screenshot: research/screenshots/giordano-betti-hero.png
- What it is: After a "Media loading" percent preloader, shows a project slide: small category + client, a big serif title, duration/year bottom-left of the grid and role list (Cinematographer, 1AC, Colorist) right.
- Techniques: Preloader pulling webp frames, likely full-bleed video/canvas behind text (not rendered in my capture), fixed overlays.
- Why it works / what is special: Reads like a film title card/credits; tiny type vs. huge empty space puts all focus on the footage.
- Scores (1-10): design 9, creativity 8, usability 7
## Navigation
- Screenshot: research/screenshots/giordano-betti-nav.png (same as hero; active state visible in giordano-betti-about.png)
- What it is: Three text links (Works, About, Contact) aligned to grid columns across the top, name + serif tagline top-left. Contact appears to be an email address / social links (instagram, youtube, linkedin in DOM text), not a separate page; my click on it did not navigate.
- Techniques: Active link gets an inverted white-box highlight (seen on About). Routes: /about confirmed.
- Why it works / what is special: Zero chrome, nav is part of the grid; inverted-box active state is a very cheap, strong signal.
- Scores (1-10): design 8, creativity 7, usability 8
## Projects
- Screenshot: research/screenshots/giordano-betti-work.png (after scrolling the home; a second project slide "title card")
- What it is: Home is a scroll-driven slideshow of projects, one full-screen per scroll step; each shows type/client, title, duration, year, roles. A vertical tick indicator at left shows position (segment moved between slide 1 and slide 4-ish in shots).
- Techniques: Wheel scroll advances slides (Lenis), indicator line segment animates. Footage itself not visible in capture.
- Why it works / what is special: Metadata-as-design; each project is a "credit card" so no thumbnails grid is needed.
- Scores (1-10): design 8, creativity 8, usability 7
## About
- Screenshot: research/screenshots/giordano-betti-about.png
- What it is: Left: giant uppercase serif statement in grey; right column: stacked paragraphs of small grotesk text and a "Worked with" list with hairline dividers beginning below.
- Techniques: Two-column asymmetric layout, hairline rules; likely reveal animation (unverified).
- Why it works / what is special: Strong scale contrast between huge serif statement and dense small body; stays on the shared grid.
- Scores (1-10): design 9, creativity 7, usability 8
## Contact/Footer
- Screenshot: none verified
- What it is: Heading text "Something in mind?" exists in the DOM in serif ~62px with dark colour (inverted light section likely); I could not reach/see it. Email and social links are listed in the nav DOM.
- Techniques: unknown
- Why it works / what is special: unverified
- Scores (1-10): not rated
## Micro-interactions
- Preloader with live percent counter in a white box plus a growing hairline and the name of the current frame file.
- Active nav item flips to white background/black text.
- Vertical left progress segment moves as slides change.
- Text lines on mobile loader reveal line by line (mid-animation observed).
- Custom cursor reported by heuristic but not visually seen.
## Mobile
At 390px the same layout holds: nav stacks vertically top-right in one column, name/tagline top-left, slide metadata and title stay left, roles right, tagline bottom; very sparse and clean.
