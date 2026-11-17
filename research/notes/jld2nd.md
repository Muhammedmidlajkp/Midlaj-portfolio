# JLD'2nd — https://jld2nd.dev/
**Stack/techniques detected:** Custom cursor (heuristic detected, not visually confirmed). No GSAP/Lenis/Three/canvas/Framer detected by script (heuristic; may be bundled/minified). Confirmed visually: typewriter speech bubble, scroll-driven full-viewport pixel-art scenes (very tall page, ~24,450px at 1440 wide), text scramble/glitch reveal with random glyphs resolving to real text (seen mid-transition), blur-in of headline while scenes swap, side progress dots with a Pac-Man-like marker that moves down them, sound toggle / device / gamepad / folder icon dock. Hero offers "Developer Mode" / "Creative Mode" choice with a pixel arrow selector (menu-like, game-style). Guessed: scroll-linked sprite sequences or CSS steps, audio on toggle.
**Typography:** "Mozilla Headline" for headings and body (semi-bold ~62px hero H1, sentence case, ~17px body); pixel display fonts "Minecraft" (logo, bubble) and "GreetPixel" (menu items, labels, copyright). Fonts confirmed by loaded font list.
**Palette:** near-black bg ~#121212, white text, acid lime ~#CCFF00 (logo, speech text, accents), amber/gold ~#F9C73A (icons, dots), pixel-art accents: pink brain, red hearts/DNA, cream, blue (#058CE4-ish). Dark theme.
**Layout:** Full-viewport pinned scenes, one idea per screen: large pixel illustration on one side, text block on the opposite side (alternating left/right), logo fixed top-centre, icon dock bottom-left, progress dots right edge. Very generous negative space, game-like.

## Hero
- Screenshot: research/screenshots/jld2nd-hero.png
- What it is: Large pixel-art self portrait on the left with a typewriter speech bubble ("I'm J...") and a big white headline plus short subline and a two-option game-style menu (Developer Mode / Creative Mode) on the right.
- Techniques: Typewriter text in bubble (caught mid-typing in two shots), pixel fonts mixed with a clean grotesque, arrow selector marking the active option.
- Why it works / what is special: Immediately sets the concept (pixels = craft) and gamifies the first choice; the avatar gives personality and a human face without a photo.
- Scores (1-10): design 9, creativity 10, usability 7

## Navigation
- Screenshot: none verified (only the fixed chrome visible in other shots)
- What it is: No conventional menu bar. Fixed pixel logo top-centre, a bottom-left vertical dock of four pixel icons (sound muted, phone, gamepad, folder), and a right-edge vertical dot rail with a Pac-Man-style marker showing scroll progress. I did not open the icons so their function is unverified.
- Techniques: Fixed overlay UI, progress indicator driven by scroll; dock fades/dims while a scene is mid-transition.
- Why it works / what is special: Reads like game HUD; the Pac-Man progress marker is a memorable replacement for a scrollbar.
- Scores (1-10): design 8, creativity 9, usability 6 (icons unlabelled)

## Projects
- Screenshot: research/screenshots/jld2nd-work.png
- What it is: I did not find a classic project grid. The scroll is a story of pixel scenes (brain "Concept", DNA helix, scrambled-text "Idea" scene with large pixel shapes). The shot shows a rotating pixel DNA helix with scrambled lime lettering, likely a process/skills chapter. Real case studies not verified; "Developer/Creative Mode" may lead to them.
- Techniques: Large sprite art animating with scroll, glyph-scramble text resolve.
- Why it works / what is special: Process told as illustrated metaphors rather than thumbnails; strong memorability.
- Scores (1-10): design 8, creativity 10, usability 5 (hard to scan work)

## About
- Screenshot: research/screenshots/jld2nd-about.png
- What it is: Scene with three pixel playing cards (hearts), headline "More than function" style statement at top right and a short philosophy paragraph bottom-left, both mid-scramble in the capture.
- Techniques: Text scramble reveal (confirmed in shot), pixel illustration, dimmed HUD while scene is active.
- Why it works / what is special: Personality and values communicated through a single bold illustration plus two lines of copy.
- Scores (1-10): design 9, creativity 9, usability 7

## Contact/Footer
- Screenshot: research/screenshots/jld2nd-contact.png
- What it is: Final scene with a big pixel globe (lime and blue) on the right, large CTA headline left, a one-line pitch, three link options styled as a pixel menu (LinkedIn, Instagram, Send me an email) with the arrow selector on the third, tiny centred copyright.
- Techniques: Same menu-selector component as hero, pixel globe, pixel font links.
- Why it works / what is special: Consistent system, clear single CTA hierarchy, closes the narrative with a "world" image.
- Scores (1-10): design 9, creativity 9, usability 9

## Micro-interactions
- Speech bubble types its text out character by character with a blinking caret (seen at different stages).
- Headings and paragraphs scramble through random lime glyphs before resolving to real text during scene change (seen).
- Scenes blur/fade between each other (a blurred transitional frame was captured).
- Menu items use a pixel arrow marker for the selected option (hero and contact).
- Right-edge Pac-Man marker slides along the dot rail as you scroll; dock icons dim mid-transition.
- Phone icon appeared to wobble in one frame (unverified purpose).

## Mobile
At 390px the hero re-stacks centred: logo, big headline, subline, then the speech bubble ("Hel...") over the avatar at the bottom; the icon dock stays bottom-left and overlaps the avatar slightly.
