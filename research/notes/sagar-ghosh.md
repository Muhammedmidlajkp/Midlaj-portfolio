# Sagar K. Ghosh (CodeofSagar) — https://www.codeofsagar.in/
**Stack/techniques detected:** Lenis smooth scroll (detected, confirmed by heuristic); WebGL canvas (4 canvases; confirmed visually: a 3D avatar and 3D hands/laptop/grass objects change pose per section, aurora background, snow/star particles); custom cursor (heuristic flag only, not observed); GSAP not detected (scroll-pinned, scrubbed sequences look like a custom/other timeline lib — guessed). Not Next/Nuxt/Webflow per detection. Sound toggle in header (not tested). Day/sunrise/night slider in hero (seen; behaviour not tested). Marquee/logo grid of clients seen inside a 3D laptop screen.
**Typography:** Space Grotesk (display + body, weight 400 for the hero h1 ~71px sentence/title case; body ~17px, semibold in captions) plus Space Mono for tiny uppercase labels ("SOUND", "WHAT CLIENTS SAY", "LOCAL TIME"). Giant headings (Creative Developer., Selected Work.) run ~100-130px, tight tracking. Menu links uppercase ~26px.
**Palette:** Light sky blue/white default (bg rgb(255,255,255), text #111), shifts through pale mint-grey (#cfd5da with aurora green glow) to deep navy/black (#050f2a, #000) and aurora green (#10e090) as you scroll; footer near-black with off-white text. Mood changes with scroll, hero has a time-of-day (light/dusk/night) control.
**Layout:** Full-bleed 3D stage with a faint 5-column vertical guide-line grid overlaying every section; text is pinned to edges/corners (left-aligned headline, right-aligned body, mono captions at bottom corners) leaving the centre for the avatar. Very tall (~18k px) scroll-driven story. Playful, cinematic, editorial.

## Hero
- Screenshot: research/screenshots/sagar-ghosh-hero.png
- What it is: Two giant mossy statue hands reach toward each other (Creation of Adam homage) with a 3D cartoon avatar sitting on one finger typing on a laptop; centered two-line headline, handwritten-style arrow caption, right-aligned blurb, time-of-day slider at the bottom.
- Techniques: WebGL scene with HDRI sky (sky changes when menu opens: clouds appear), Lenis, pinned layout.
- Why it works / what is special: A single memorable metaphor that shows the personality and the 3D skill instantly; the headline stays readable over a quiet sky area.
- Scores (1-10): design 9, creativity 10, usability 7

## Navigation
- Screenshot: research/screenshots/sagar-ghosh-nav.png
- What it is: Minimal fixed header (logo left, name centre, SOUND and MENU right). MENU opens a compact white card dropdown top-right with uppercase large links separated by hairlines, email, socials and a CLOSE button that becomes a round dark pill. Current page shown with strike-through.
- Techniques: overlay panel, state change of toggle, sky/background transitions behind it; theme-aware (card turns black over the dark footer).
- Why it works / what is special: Tiny footprint, never hides the 3D art; the header colours adapt per section.
- Scores (1-10): design 8, creativity 7, usability 9

## Projects
- Screenshot: research/screenshots/sagar-ghosh-work.png (only the "Selected Work." title section verified); client logos in research/screenshots/sagar-ghosh-clients.png
- What it is: A huge "Selected Work." title with the avatar crouching/jumping down into the next scene; later a 3D laptop on a grass patch whose screen plays an aurora scene with a grid of client logos. Actual project cards were not captured.
- Techniques: scroll-scrubbed 3D character animation passing between sections, DOM content mapped onto a 3D laptop screen, logo grid with partial crop/marquee feel.
- Why it works / what is special: Clients are presented as content inside a diegetic device instead of a plain logo row.
- Scores (1-10): design 8, creativity 9, usability 6

## About
- Screenshot: research/screenshots/sagar-ghosh-about.png (the "Creative Developer." statement section); services/testimonials in sagar-ghosh-services.png
- What it is: Giant "Creative Developer." line with the avatar standing in front of the letters (cut-out depth effect), a short left blurb, right-aligned service list, mono captions along the bottom. Later: a testimonial carousel (counter 01/11, arrows) beside the avatar at a desk with an animated panda, and a "Where Code Meets Art" video/photo scene with a mixed-blend headline.
- Techniques: 3D avatar occluding DOM text (z-layering of WebGL over/under text), pinned scroll sequence, carousel.
- Why it works / what is special: The character overlapping the type gives depth and a human face to the pitch; copy stays benefit-led.
- Scores (1-10): design 9, creativity 9, usability 7

## Contact/Footer
- Screenshot: research/screenshots/sagar-ghosh-contact.png (menu was open in the capture; footer card visible)
- What it is: Near-black rounded footer card with a huge ghosted "Hello" watermark, big "Got a project in mind?" heading, email, four columns (pages, social, live local time in India, status "Open for new projects"), copyright and back-to-top.
- Techniques: live clock, status dot, oversized ghost type.
- Why it works / what is special: Clear call to action plus availability and local time make it feel human and current; high contrast ending after the bright scenes.
- Scores (1-10): design 8, creativity 7, usability 9

## Micro-interactions
- Menu toggle swaps MENU to a circular CLOSE button; menu sky behind changes to cloudy.
- Avatar changes pose/scene as you scroll (sitting typing, crouching, jumping onto desk) and the background shifts light to aurora night.
- Colour of header elements flips with the section background (dark on light, pink/peach on navy).
- Testimonial carousel with progress line and 01/11 counter; tiny panda animation near the desk.
- Hero time-of-day slider (light/dusk/night icons) and a sound toggle (visible, not exercised).
- Cursor-glow / particle dots over aurora and the green glow following the pointer area (seen in the Where Code Meets Art shot; likely pointer-reactive, not confirmed).
- Strike-through on the active menu item; underlined email link.

## Mobile
At 390px the hero keeps the avatar and one hand with the headline above, the header shows logo + name + SOUND + MENU, and the time-of-day slider sits bottom-left; layout is clean, the hand slightly clips the headline's last word.
