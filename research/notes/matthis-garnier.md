# Matthis Garnier — https://matthisgarnier.com/
**Stack/techniques detected:** Confirmed: canvas-based ASCII text renderer (9 canvases, WebGL context present) cycling big ASCII words (name, other phrases) in the hero; marquee detected; draggable-window desktop-OS metaphor (menu bar, window "me.md", dock icons, start menu, world clocks, dark-mode toggle, sound toggle). Not detected: GSAP, Lenis, Three.js, Framer, Next, custom cursor (heuristic; the page is a single non-scrolling screen). Guessed: custom in-house framework, windows open on icon click (my click attempt did not visibly open one).
**Typography:** Body "areal" (Arial-like grotesque, 16px, regular), "arealMono" for mono bits, "handFont" (handwritten, h1 about 206px, hidden/used for name), Instrument Serif loaded. Window text: small sans, title about 20px medium; labels 12-13px lowercase. ASCII hero uses monospace glyphs (X + = : . ;) at large scale.
**Palette:** Light only observed: bg rgb(236,236,236), text rgb(24,24,24), white translucent window cards with soft shadow, dotted grid background, accent green on start button when open, project icons carry colour (red, blue/yellow poster, flag green/red).
**Layout:** Full-viewport fake desktop: top menu bar (File/Edit/View/Tools left; icons + clocks right), profile window top-left, project icon column on right edge, taskbar with "start" at bottom, ASCII word centred. No page scroll. Airy, playful, very low density.

## Hero
- Screenshot: research/screenshots/matthis-garnier-hero.png
- What it is: Desktop-OS scene with a giant ASCII-art word in the centre that changes between shots (name, a phrase, other words), a "me.md" intro window and project icons down the right.
- Techniques: canvas text-to-ASCII rendering, timed word cycling, dotted background grid, OS chrome built in HTML/CSS.
- Why it works / what is special: Instantly memorable concept; ASCII type is a texture instead of a headline, and the OS metaphor makes navigation self-explanatory for a creative-engineering role.
- Scores (1-10): design 8, creativity 10, usability 7

## Navigation
- Screenshot: research/screenshots/matthis-garnier-nav.png
- What it is: Bottom-left "start" button opens a menu with a profile header, "me.md", an EXPERIMENTS list (7 projects) and an llms.txt entry; menu bar and dock icons give a second path.
- Techniques: popup menu, state colour change on button (turns green when open).
- Why it works / what is special: Three redundant paths (icons, start menu, menu bar) all using familiar OS patterns; llms.txt is a nod to AI crawlers.
- Scores (1-10): design 8, creativity 9, usability 8

## Projects
- Screenshot: research/screenshots/matthis-garnier-work.png (shows only the desktop with the "pitball" icon in hover/selected state; no project window verified)
- What it is: Projects are called experiments, shown as rounded app-style icon tiles with lowercase captions (feed, tape, pitball, button, nfl week 1, choose your voice, email composer, posters).
- Techniques: icon tiles with hover/selection ring and label pill (observed); opening behaviour not verified.
- Why it works / what is special: Each work is a tiny product with its own thumbnail, like apps on a desktop; scannable at a glance.
- Scores (1-10): design 8, creativity 9, usability 7

## About
- Screenshot: research/screenshots/matthis-garnier-about.png (only the always-open me.md window; "Read the story" click did not visibly open anything in my capture)
- What it is: A pinned "me.md" card: role line, avatar, one-paragraph bio, mail/LinkedIn/X icons, "Read the story" link.
- Techniques: floating card with soft shadow, rounded corners, close/expand control.
- Why it works / what is special: Bio is in view immediately without any scroll; short and confident.
- Scores (1-10): design 8, creativity 7, usability 9

## Contact/Footer
- Screenshot: none verified (contact.png is just the same desktop)
- What it is: Contact lives as mail/LinkedIn/X icons in both the me.md card and the top menu bar; taskbar at bottom with start.
- Techniques: icon links, persistent menu bar.
- Why it works / what is special: Contact is always one click away, never a section to hunt for.
- Scores (1-10): design 7, creativity 7, usability 9

## Micro-interactions
- ASCII hero word changes over time (different words across captures).
- Menu-bar world clocks tick (LA, NYC, PAR, TUL cycling labels).
- Dock icon hover shows a dark ring and a black label pill (pitball seen).
- Start button inverts to green while its menu is open.
- Top bar has sound and dark-mode toggles (present; effect not tested).

## Mobile
At 390px the layout becomes a phone home screen: me.md card full width on top, ASCII word centred, a tagline, and the project icons as a horizontal dock at the bottom with the logo tile; clean and well adapted.
