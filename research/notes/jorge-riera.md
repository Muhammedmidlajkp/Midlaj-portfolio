# Jorge Riera — https://jorgerieraflores.com/
**Stack/techniques detected:** Framer-built site (confirmed: Framer detected, "Placeholder" font-fallback naming is Framer's). No GSAP/Lenis/Three detected (heuristic). Custom cursor flagged by detector (not visually verified). Audio toggle ("better with sound") confirmed in UI: speaker icon flips muted/unmuted. Sticky nav confirmed (stays on top over project cards with a fade-to-dark gradient behind it). Scroll-triggered text/image swaps confirmed by two hero captures differing (eyes closed vs open). Marquee not detected.
**Typography:** Headlines in PP Neue York Condensed Extrabold (heavy condensed serif-leaning grotesque), ALL CAPS, weight 800, ~80px+ on desktop, tight leading (~0.95). Body/UI in Open Sauce One, bold ~14-16px, sentence case. A handwritten font (JorgeHandwriting) for sticky-note style annotations, uppercase, rotated, with hand-drawn arrows.
**Palette:** Near-black background rgb(18,18,18) #121212, pure white text and white pill buttons. Project cards bring their own colour; hero photo is black and white with film grain. Dark only.
**Layout:** Centered single column, ~1020px content width (nav aligned to a 1020px container), very generous empty vertical space, one idea per screen. Project grid 3 columns with rounded cards. Feel: confident, witty, editorial, minimal.

## Hero
- Screenshot: research/screenshots/jorge-riera-hero.png
- What it is: A wide grainy B&W portrait strip of the owner sits in the middle of a black screen, with a big condensed two-line headline above it and another below it, overlapping the image edges. A handwritten note with an arrow points to the sound toggle.
- Techniques: Layered type over image, image state change (eyes closed in one capture, open in another, so it blinks or reacts to time/scroll), film grain, handwritten annotation.
- Why it works / what is special: A face with eyes that open creates instant personality; the headline sandwiching the face frames it like a poster. Tone of voice (self-deprecating, funny) carries the brand.
- Scores (1-10): design 9, creativity 9, usability 8

## Navigation
- Screenshot: research/screenshots/jorge-riera-nav.png (same view as hero; nav is minimal)
- What it is: Just a name wordmark on the left, a sound toggle and an Instagram icon on the right. No menu, no links; the page is one scroll.
- Techniques: Fixed header, gradient fade behind it when over content (seen in work shot), icon state swap for audio.
- Why it works / what is special: Radical minimalism forces the content to do the work; the audio toggle is the only unusual control, and the handwritten callout makes it discoverable.
- Scores (1-10): design 8, creativity 7, usability 7 (no way to jump to sections)

## Projects
- Screenshot: research/screenshots/jorge-riera-work.png (shows the bottom of the grid and the See more button only; the earlier part of the grid was not captured)
- What it is: A 3-column grid of rounded image cards of branding work, each with a small round client logo and a one-line label "Brand for Agency" below, ending in a white "See more" pill button.
- Techniques: Rounded cards with white borders, logo avatars, load-more pattern. Hover effects not verified.
- Why it works / what is special: Clean and scannable; client logo plus agency credit gives context without clutter, and "See more" keeps the page short.
- Scores (1-10): design 8, creativity 6, usability 8

## About
- Screenshot: research/screenshots/jorge-riera-about.png
- What it is: Not a classic about section but a statement slide: a huge centered condensed headline about years of experience, with a rotated handwritten sticky note in the upper left making a joke.
- Techniques: Big type statement, handwritten rotated annotation, long empty space around it.
- Why it works / what is special: Humour as positioning; the about is delivered as a punchline and the handwriting adds a human, off-the-cuff layer on top of the strict type.
- Scores (1-10): design 8, creativity 9, usability 6 (little factual info)

## Contact/Footer
- Screenshot: research/screenshots/jorge-riera-contact.png
- What it is: A short two-line headline, a two-line witty sentence, and a single white "Work with me" pill button. Nav is still present (audio icon now in the unmuted state).
- Techniques: Same type system as hero, white pill CTA, centered stack.
- Why it works / what is special: One clear action, in-character copy, no form or clutter. The CTA is the only bright block on the page so it stands out.
- Scores (1-10): design 8, creativity 8, usability 9

## Micro-interactions
- Audio toggle icon switches between muted (slash) and sound-on states while scrolling (seen in different screenshots).
- Hero portrait changes state (eyes closed to open) between captures.
- Header gets a dark gradient scrim when project cards pass beneath it.
- Handwritten callouts appear in the hero (with arrow) and the about statement (rotated) and are not in the other sections.
- Not verified: cursor effects, card hover states, page transitions.

## Mobile
At 390px the hero collapses to the nav row plus the B&W portrait strip at full width, vertically centered; the headline text was not visible in the capture (likely not yet revealed), so the mobile hero looks sparse but still striking.
