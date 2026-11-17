# Jaspreet Singh — https://jaspreetsingh.xyz/
**Stack/techniques detected:** Confirmed: WebGL/canvas full-page background (sunset scene with motorbike and rider that darkens to a starry night as you scroll), custom cursor flag (heuristic), loader with name and percent counter, scroll-linked blur/fade of text near the top edge, section-aware nav highlight, Awwwards "Nominee" side tab. Not detected: GSAP, Lenis, Three (the page may use a bundled/minified lib or plain canvas shaders; unknown). Page is a single long scroll (~4200px).
**Typography:** Display/headings in "Swanky and Moo Moo" (handwritten, ~48px+ for the name, much larger in hero, weight 400, mixed case); body in Inter (16px, regular), uppercase small-tracking nav and link labels; italic Inter for quotes and captions; large faint outlined-ish numerals (01., 02., 03.) in Inter.
**Palette:** Black base rgb(0,0,0); warm sand headings rgb(214,200,178); body rgb(183,171,152); accent coral/salmon (~#E8785A) for "works", "hello" and stats; background imagery goes sunset orange/pink to deep navy night. Dark.
**Layout:** Full-bleed fixed scene behind content; hero text left-aligned at 24px gutter; About is a narrow centred ~640px column; Work is a 2-col layout (intro left, numbered list right with hairline dividers); Contact left-aligned in a ~1230px container. Generous empty space, quiet, cinematic, personal feel.

## Hero
- Screenshot: research/screenshots/jaspreet-singh-hero.png (copy of the post-loader frame; the loader itself showed name plus a 0-100% line)
- What it is: Full-viewport sunset photo/scene of a rider beside a motorbike overlooking city lights, with a handwritten "Hello, I'm Jaspreet" and a witty two-line tagline.
- Techniques: Loader with progress counter, WebGL/canvas scene, handwritten display font, film-grain/vignette feel.
- Why it works / what is special: The image is the personality; the tagline is self-deprecating and the handwriting font makes it feel human rather than corporate.
- Scores (1-10): design 9, creativity 9, usability 8

## Navigation
- Screenshot: research/screenshots/jaspreet-singh-nav.png
- What it is: Minimal fixed top bar: ABOUT / WORK / CONTACT at left, RESUME with arrow and a muted "Designer & Developer" label at right.
- Techniques: Uppercase small links, active-section highlight (bolder/brighter current item, observed in later shots), fixed position over the scene.
- Why it works / what is special: Stays out of the way of the art, still shows where you are.
- Scores (1-10): design 8, creativity 6, usability 9

## Projects
- Screenshot: research/screenshots/jaspreet-singh-work.png
- What it is: "Selected works" heading with a coral second word, italic intro on the left, and a numbered list of case studies on the right (title, short description, a bold coral metric such as a task-completion stat, "View case study" link; one marked "Case study soon").
- Techniques: Text-only list, hairline separators, huge dim numerals, metric highlights, blur/fade of text leaving the top edge.
- Why it works / what is special: Outcomes lead with a number; no thumbnails keeps focus on story and keeps the atmospheric background visible.
- Scores (1-10): design 8, creativity 7, usability 8

## About
- Screenshot: research/screenshots/jaspreet-singh-about.png
- What it is: Narrow centred paragraphs about riding and travel, followed by two quote blocks (one Hindi/Urdu couplet with English translation, one Stoic quote) with a thin left rule.
- Techniques: Scroll-linked line blur-in, starfield night backdrop, left-rule blockquotes.
- Why it works / what is special: Reads like a personal note; the night sky shift matches the contemplative tone.
- Scores (1-10): design 8, creativity 8, usability 8

## Contact/Footer
- Screenshot: research/screenshots/jaspreet-singh-contact.png
- What it is: Large "Say hello" (coral second word) over a humorous invitation paragraph, uppercase links with arrows (email, GitHub, X, LinkedIn, resume), then a hairline and credit/copyright line. The bike and rider scene reappears in night version behind it.
- Techniques: Scene callback to the hero, handwritten signature in the credit line.
- Why it works / what is special: Bookends the page with the same imagery in a different light, a cinematic day-to-night arc.
- Scores (1-10): design 9, creativity 9, usability 8

## Micro-interactions
- Loader shows name plus percent counter before reveal (observed).
- Background transitions from sunset to starry night across the scroll (observed across shots).
- Text blurs/fades as it exits under the nav (observed in about, work and contact shots).
- Nav item brightens/bolds for the current section (observed).
- Hover and cursor effects were not tested; custom cursor is only a heuristic flag.

## Mobile
390px hero keeps the same sunset scene and handwritten greeting at larger relative size, with the nav compressed to a single row (ABOUT WORK CONTACT RESUME); layout is clean with no overflow seen.
