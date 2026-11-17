# Jesper Landberg — http://jesperlandberg.com/
**Stack/techniques detected:** WebGL canvas (confirmed: one canvas, real 3D scene with perspective floor grid, curved project planes, glossy 3D torus with llama models in profile view); Nuxt (detected by heuristic, likely Vue); custom cursor (detected, small arrow cursor seen in shots). GSAP/Lenis/three not detected by globals but the scene is clearly three.js-style (guess, bundled). Loader with three morphing white pill bars (confirmed). Hover/scroll behaviour of the carousel not directly verified beyond static frames (shots show cards at different horizontal positions and tilts, so it scrolls/drags horizontally in 3D).
**Typography:** single grotesk sans (computed as "sans", Helvetica/Neue-style), tiny uppercase UI labels ~13px, medium weight, tight tracking; project titles ~18-20px sentence case; profile copy ~13-14px centred. Typography is deliberately minimal, imagery carries the page.
**Palette:** pure black #000 background, white #fff text, grey for inactive toggle (FULL), faint grey grid lines; all colour comes from project thumbnails (warm amber Solare, pastel pinks, white/yellow illustrations). Dark.
**Layout:** no scroll page at all; full-viewport stage with 4 corner-anchored UI labels (~77px margins) and a 3D carousel in the centre over a perspective floor grid. Very sparse, gallery-in-a-void feel.
## Hero
- Screenshot: research/screenshots/jesper-landberg-hero.png
- What it is: After a pill-shaped morphing loader, the landing IS the project gallery: curved, bent video/screens of work floating in 3D above a receding grid floor, centre card highlighted with its title bottom-left and a round arrow button.
- Techniques: WebGL planes with curvature/bend distortion, perspective grid floor, dimming of off-centre cards, loader animation.
- Why it works / what is special: No hero text at all; the work is the hero, and the curved screens feel like a physical exhibition space. Stand-out idea.
- Scores (1-10): design 9, creativity 10, usability 7
## Navigation
- Screenshot: research/screenshots/jesper-landberg-nav.png
- What it is: Four tiny uppercase corner labels: name top-left, PROFILE top-right, FEATURED / FULL toggle bottom-left, NEWSLETTER bottom-right. Profile swaps to CLOSE.
- Techniques: fixed corner HUD, active/inactive grey toggle.
- Why it works / what is special: Frame-like HUD stays out of the way and leaves the stage clean.
- Scores (1-10): design 8, creativity 7, usability 8
## Projects
- Screenshot: research/screenshots/jesper-landberg-work.png
- What it is: Horizontal 3D carousel of project screens (seen: Casa Di Solare, The Lookback, Book of Happiness, Dogelon Mars, Nathan Riley). Cards are warped, tilted, and shown at different depths; neighbours darken.
- Techniques: WebGL texture planes with shader bend, scroll/drag driven motion, FEATURED/FULL filter.
- Why it works / what is special: Live-feeling thumbnails, fluid curved motion, instant sense of craft. Cards show previews of sites rather than static covers.
- Scores (1-10): design 9, creativity 10, usability 7
## About
- Screenshot: research/screenshots/jesper-landberg-about.png
- What it is: Clicking PROFILE opens a glossy chrome/amber 3D torus ring in the centre with a short centred bio, award tally, and social links inside, with small black llama figures floating around. The gallery stays visible behind.
- Techniques: 3D refractive/reflective ring with env map, floating models, overlay text on WebGL.
- Why it works / what is special: About is a playful in-scene object instead of a separate page; keeps context, memorable.
- Scores (1-10): design 9, creativity 9, usability 7
## Contact/Footer
- Screenshot: research/screenshots/jesper-landberg-contact.png
- What it is: NOT VERIFIED. The shot is just the gallery again (my click on NEWSLETTER did not land). Contact is effectively the email/social links inside the Profile ring (seen in the about shot).
- Techniques: n/a
- Why it works / what is special: Contact folded into the profile overlay, no footer.
- Scores (1-10): design 7, creativity 7, usability 7
## Micro-interactions
- Loader: three white pill bars morph in width at screen centre (seen mid-animation).
- Gallery frames shift between captures: cards move horizontally and tilt/bend (scroll or idle drift), changing which one is centred.
- Off-centre cards are dimmed, centre card is bright; centre card gets title and circular arrow button.
- Small custom arrow cursor visible over the cards.
- Profile opens the ring overlay with the toggled label changing to CLOSE.
## Mobile
At 390px the same gallery becomes a vertical stack of rounded, full-width project cards with titles and arrow buttons, with the corner HUD (name, PROFILE, FEATURED/FULL, NEWSLETTER) pinned over it. The 3D floor/curve is dropped in favour of a simple list.
