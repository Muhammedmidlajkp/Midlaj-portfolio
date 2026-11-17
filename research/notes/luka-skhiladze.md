# Luka Skhiladze — https://skhiladze.com/
**Stack/techniques detected:** Lenis smooth scroll (confirmed via detection), WebGL + 8 canvases (confirmed; the about/transition shot shows a particle flock of bird-like glyphs with an orange glowing cursor-like orb), custom-looking orange cursor orb (seen in a screenshot, though cursor detection said false). GSAP/ScrollTrigger/Three not detected (may be bundled/custom, guessed custom WebGL or OGL). Page is ~15.7k px tall, single-page, scroll-driven full-viewport scenes with progress dots. Language toggle EN/RU, "Sound on" audio toggle with animated equaliser icon, "Motion on" toggle (seen in contact). Showreel card cycles through project slides with in-card typography animation (confirmed by two different frames).
**Typography:** Martian Grotesk (body/headings, wide extended grotesk, weight ~400-700) and Martian Display (large name, bold). Body 17px, headings ~34px; the closing name is huge (~110px+), two-tone (grey "Luka", off-white "Skhiladze"). Mixed-weight logo ("Luka" light, "Skhiladze" bold) with orange full stop. Tiny mono-style uppercase labels (e.g. 16:9, IN-STREAM) for specs.
**Palette:** Dark navy-black bg rgb(9,12,18); text rgb(242,242,239); accent vivid orange (~#FF5A28) used for dots, CTA, cursor; lime-yellow (~#D4E22A) inside the showreel typography. Dark theme only.
**Layout:** Full-viewport scenes, centred card for the reel, split two-column for services (list left, preview right), centred typographic closing. Generous empty space, thin hairline dividers, fixed UI chrome in corners (lang/sound bottom-left, CTA bottom-right, Featured/Full toggle top-right). Calm, cinematic, editorial.

## Hero
- Screenshot: research/screenshots/luka-skhiladze-hero.png (also -nav.png, a second frame of the same hero)
- What it is: A centred rounded "Showreel 2026" card on near-black, auto-playing slides of work (kinetic type in lime, then a robot/voice-agent spot) with tiny category/spec chips in its corners, pill label and play button. Five-segment progress bar below.
- Techniques: Video/canvas slide carousel, timed in-card text animation, segmented progress indicator, fixed corner chrome.
- Why it works / what is special: The hero IS the work: a motion designer shows motion immediately instead of a headline. Small card against huge empty dark space feels like a cinema screen; chips add a technical, credible detail.
- Scores (1-10): design 8, creativity 8, usability 7

## Navigation
- Screenshot: research/screenshots/luka-skhiladze-nav.png
- What it is: Minimal top bar: split-weight logo left, "Work / About" centre-right, a "Featured / Full" segmented toggle far right; persistent bottom pills for EN/RU, sound, and an orange "Write on Telegram" CTA. Mobile collapses to a "Menu" text button.
- Techniques: Fixed chrome, toggle filters, sound toggle (equaliser animates), orange dot accent on active state.
- Why it works / what is special: A Featured/Full switch lets visitors pick a short curated tour or everything; always-visible contact CTA with zero friction.
- Scores (1-10): design 8, creativity 7, usability 8

## Projects
- Screenshot: research/screenshots/luka-skhiladze-work.png
- What it is: A "What I make" accordion of six numbered capabilities; the active one expands with description and linked example projects while a large preview panel at right shows matching work (a car reel in 16:9 and 1:1 formats with spec labels) and a play button.
- Techniques: Accordion with active-state number turning orange, synced preview panel, mono spec captions, hairline rows.
- Why it works / what is special: Services and portfolio merged: each capability is demonstrated by live format variants, which sells the "every format" claim visually. Clear hierarchy by greying inactive rows.
- Scores (1-10): design 9, creativity 8, usability 8

## About
- Screenshot: research/screenshots/luka-skhiladze-about.png
- What it is: The captured frame is a transition/scene showing a particle flock of tiny bird-like shapes forming a mass at left with a glowing orange orb below and crosshair hairlines. The actual about copy was seen only in the closing section (see Contact), not as a separate verified block.
- Techniques: WebGL particle/instanced flock reacting to an orb (likely cursor- or scroll-driven; guessed).
- Why it works / what is special: A generative interlude breaks the text rhythm and adds a signature visual. Interpretation of what it narratively means is unverified.
- Scores (1-10): design 7, creativity 9, usability 5 (single frame, unclear purpose)

## Contact/Footer
- Screenshot: research/screenshots/luka-skhiladze-contact.png
- What it is: Giant two-tone name with orange full stop, a short pitch paragraph, three metadata pairs (location, languages, availability), then orange Telegram button plus email, LinkedIn, Vimeo text links, and small "Watch again" and "Motion on" controls.
- Techniques: Large display type, underlined links, replay control for the reel, motion-reduction toggle.
- Why it works / what is special: Strong typographic close; one primary action, secondary links quieter; "Watch again" and "Motion on" toggles show respect for the visitor.
- Scores (1-10): design 9, creativity 7, usability 9

## Micro-interactions
- Showreel card slides change in place with animated in-card typography (two distinct frames observed).
- Segmented progress bar under hero, active segment orange.
- Sound toggle with animated equaliser bars (idle dots versus bars between shots).
- Accordion rows: inactive rows dimmed, active number turns orange and row expands.
- Orange glowing orb (cursor-like) over the particle scene.
- Footer "Watch again" and "Motion on" toggles. Hover states not tested.

## Mobile
390px hero keeps the showreel card centred with a "Swipe up" hint with chevron animation, progress dots, EN/RU/sound pill and a shortened "Telegram" CTA; nav collapses to "Menu". Clean, scroll-snap-feeling.
