# Long Hoang (Lyo) — https://longhoang-lyo.com/
**Stack/techniques detected:** Custom WebGL/3D game world (canvas + WebGL confirmed; library not identified, single bundled JS, so likely Three.js-based but GUESSED). Confirmed from screenshot: low-poly top-down 3D scene, dithered/halftone post-process, dynamic lighting with a spotlight cone, vignette. Confirmed from DOM: multi-stage game loader ("loading environment / player and enemies / dynamic props / preparing renderer / ready"), "Let's go" start gate, mute button, settings popup with Game mode vs View mode toggle, minimap, fast-travel icons (About/Contact/Work), collectible "items" HUD counter, "skip gameplay" button, touch map button. Real routes /work, /about, /contact (+ /work/<slug> case studies) overlaid as popups/pages on the game. No GSAP/Lenis/Framer detected (not scroll-based). Custom cursor flagged by heuristic (unverified).
**Typography:** Display: "Crocante" (chunky comic/graffiti display face, all caps, thick outline) for the logo title and loader labels (small-caps style loader text). Body: Barlow 400-700, small (~14px intro copy). 
**Palette:** near-black navy #11121A text/loader bar, white #FFFFFF loader bg, acid lime green (~#B8FF6A) accent for CTA/progress/logo, night-scene browns/charcoals (dark, with warm pale spotlight). Dark game scene after loader; white only during loading.
**Layout:** Full-bleed 3D scene, HUD-style UI pinned to corners (intro copy top-left, giant logo bottom-left, CTA near the character, mute chip near the scene). Not a grid site; navigation is spatial/game-like.

## Hero
- Screenshot: research/screenshots/long-hoang-hero.png
- What it is: Intro gate over a darkened low-poly street corner with a green tracked robot lit by a hexagonal spotlight; huge two-line lime/white outlined "portfolio" logo bottom-left, short apology-style blurb top-left, a skewed "LET'S GO" button beside the robot.
- Techniques: Real-time 3D scene, spotlight mask, halftone/dither shading, game-style loader bar with rotating status messages (seen), skewed comic UI buttons, crosshair-like marks on the CTA.
- Why it works / what is special: Immediately signals "game developer"; the portfolio is the product. Loader copy is theatrical and sets tone; the CTA is diegetic (placed next to the character).
- Scores (1-10): design 9, creativity 10, usability 6 (heavy load, long wait)

## Navigation
- Screenshot: not captured (could not get past loader/intro in headless software rendering; frame is slow)
- What it is: DOM shows Home/Work/About/Contact links, plus in-game fast-travel icons (About, Contact, Work), a minimap, and a Settings HUD button. Not visually verified.
- Techniques: Game HUD + minimap + fast travel (from DOM, unseen).
- Why it works / what is special: Dual mode (Game vs View mode) lets recruiters skip the gameplay; "skip gameplay" control exists. Concept confirmed from DOM only.
- Scores (1-10): design 8, creativity 9, usability 7 (estimated)

## Projects
- Screenshot: not captured (could not reach)
- What it is: Case studies for four language-learning apps (Hanzii, Mazii, Todaii, Niubii) at /work/<slug>, with a work-preview popup (app store/website buttons, prev/next, "see more") and a long case-study page with a table-of-contents rail. DOM/text only, not seen.
- Techniques: popup carousel, TOC rail, prev/next - unverified visually.
- Why it works / what is special: Projects live inside the world as in-scene objects/popups; case studies are conventional deep pages.
- Scores (1-10): design 8, creativity 9, usability 8 (estimated, unverified)

## About
- Screenshot: not captured (could not reach)
- What it is: DOM shows an about page with a 5-slide carousel with dots, a "send it!" mailto CTA and social links (Behance, Instagram, X, Facebook, LinkedIn). Unseen.
- Techniques: carousel; unverified.
- Why it works / what is special: n/a - not verified.
- Scores (1-10): design 8, creativity 8, usability 8 (estimated)

## Contact/Footer
- Screenshot: not captured (could not reach)
- What it is: DOM shows a contact route, an email popup with a SUBMIT form, a mailto link, and a quirky "power core" activate panel. Unseen.
- Techniques: popup form, game-styled "power-core" widget; unverified.
- Why it works / what is special: Contact reuses the game metaphor (inferred).
- Scores (1-10): design 8, creativity 9, usability 7 (estimated)

## Micro-interactions
- Observed: loader messages cycle through game-flavoured stages with a skewed progress bar that fills lime in segments; gear icon beside it.
- Observed: intro CTA and mute button sit inside the 3D scene; the robot is idle-animated between frames (pose changed between captures).
- From DOM only (not seen): settings toggles, collectibles counter, fast-travel icons, minimap, game/view mode switch.

## Mobile
390px capture only showed the loader (stacked label and skewed progress bar centred on white); the real mobile hero was not seen, though a dedicated touch map button exists in the DOM.
