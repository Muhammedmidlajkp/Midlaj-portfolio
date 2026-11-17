# Arshawn Arbabi (design engineer) — https://www.arshawnarbabi.com/
**Stack/techniques detected:** Lenis smooth scroll (detected in page, confirmed by heuristic); WebGL/canvas (9 canvases; the red/teal liquid-gradient shader is visible in hero and footer, confirmed); custom cursor flag detected (not observed); no GSAP/ScrollTrigger/three/Framer detected (motion likely custom or other lib, unknown). Loader with a "Aa" monogram on a pale background (seen on first mobile capture). Nav links appear duplicated in the DOM (text-swap/roll hover pattern, guessed from "Work\nWork"). Visible column guide lines over the light sections (confirmed). Marquee not detected.
**Typography:** Manrope only (sans, medium 500). Hero name ~214px, tight leading, two lines. Subtitles ~30px light/regular; body 16px; small meta labels ~14px in grey. Sentence case throughout, no uppercase. Process copy is large (~36px) with grey text and black highlighted phrases.
**Palette:** Hero/footer near-black (~#0b0b0f) with a saturated shader of red/orange, teal and violet. Work/process sections near-white lavender (~#fafaff) with black text, grey secondary text, thin black hairlines. White text on dark.
**Layout:** Full-bleed, 24px page gutter, visible 5-column hairline grid across light sections. Giant left-aligned name, small copy block offset to the right, small meta row (availability, contact) pinned at bottom. Spacious, editorial, confident.
## Hero
- Screenshot: research/screenshots/arshawn-arbabi-hero.png
- What it is: Full-viewport animated liquid-chrome shader background with a huge white two-line name, role line with a small arrow and a one-line pitch, plus availability and email along the bottom.
- Techniques: WebGL fragment shader background, large type over it, minimal chrome.
- Why it works / what is special: One strong image plus one giant word; the saturated shader contrasts with the otherwise calm light site. The bottom meta row answers "is he available / how do I reach him" instantly.
- Scores (1-10): design 9, creativity 8, usability 9
## Navigation
- Screenshot: research/screenshots/arshawn-arbabi-nav.png (hero top shows the initial nav; scrolled state shown in work/contact shots)
- What it is: At top, a "Aa" monogram left and Work / Process / outlined "Start a project" button right. After scroll it becomes a small centred floating pill (name, Work, Process, dark CTA) with a translucent blurred background that adapts to light or dark sections. On mobile it collapses to a hamburger.
- Techniques: Fixed pill, backdrop blur, state change on scroll, likely text-swap hover (guess).
- Why it works / what is special: Only three items; the CTA is always the strongest element; the pill stays out of the way yet readable over any content.
- Scores (1-10): design 8, creativity 7, usability 9
## Projects
- Screenshot: research/screenshots/arshawn-arbabi-work.png
- What it is: Large full-width device-mockup image (laptop on a plinth) on a light grid, followed by a row with big project name, one-sentence description, and Year/Role meta columns aligned to the hairline grid.
- Techniques: Hairline column grid, big image cards, tabular meta layout. Hover behaviour not observed.
- Why it works / what is special: Case-study metadata is laid out like a spec sheet; one hero image per project keeps it clean and fast to scan. Only one project was viewed in the screenshot.
- Scores (1-10): design 8, creativity 6, usability 8
## About
- Screenshot: research/screenshots/arshawn-arbabi-about.png (this shows the Process section, not a separate bio; no standalone About section verified)
- What it is: A numbered process list (1. Draft, 2. Live...) with each step a hairline-separated row: step title left, small thumbnail, then large paragraph with key phrases in black against grey text.
- Techniques: Likely scroll-driven text highlight (grey-to-black emphasis; scroll effect not confirmed), thumbnails.
- Why it works / what is special: Turns the client process into the "about" story and sells reliability; emphasised phrases make a long paragraph skimmable.
- Scores (1-10): design 8, creativity 7, usability 8
## Contact/Footer
- Screenshot: research/screenshots/arshawn-arbabi-contact.png
- What it is: Dark section with a big "Aa" mark, social links with icons (LinkedIn, Instagram, X), a large "Tell me what you're working on." headline, a short line and a light CTA button, a copyright/privacy bar, and a giant faded "Arshawn" wordmark bleeding off the bottom over the shader.
- Techniques: Shader reappears behind the wordmark with a gradient fade; large type; hairline divider.
- Why it works / what is special: Closes the loop with the hero gradient; the conversational prompt is warmer than "Contact"; oversized cropped wordmark gives a memorable ending.
- Scores (1-10): design 9, creativity 8, usability 9
## Micro-interactions
- Loader: pale screen with an "Aa" monogram revealing from the bottom (seen mid-reveal on first mobile capture).
- Nav switches from top bar to floating blurred pill on scroll and adapts to dark/light backgrounds (seen).
- Footer wordmark fades into the shader (seen); cursor and hover effects not observed.
## Mobile
At 390px the hero keeps the shader, name on two lines at ~70px, role and pitch stacked, availability and email at the bottom, and the nav collapses to a hamburger; first capture was only the loader, retaken after a 14s wait.
