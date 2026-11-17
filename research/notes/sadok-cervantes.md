# Sadok Cervantes — https://sadok.mx/
**Stack/techniques detected:** Confirmed: WebGL canvas (3D Game Boy Color model with scratched PBR-looking shell, pixel-dithered rainbow road and starfield; library not identified, heuristic found no three/GSAP/Lenis globals so likely custom bundle), keyboard-driven UI (arrows/WASD, P/Enter = A, L/Backspace = B, Space = Start), on-screen emulated pixel UI with typewriter text, scanline/CRT-style boot-in effect, sound toggle (audio), live visitor counter ("player/visitor #"), accessible hidden text + plain-list fallback pages (/projects/, /blog/, per-project URLs). Not detected: custom cursor, marquee, page-scroll libs (page is a fixed 900px non-scrolling stage). Camera moves between "off" and "powered on" poses (guessed tween; saw differing poses in shots).
**Typography:** Handjet (variable pixel font, ~16-32px, 700 for names, light/grey for roles), Press Start 2P and an Emerald-style pixel font inside the screen, Redaction 35 loaded (likely for blog/text pages). Mostly sentence case outside the screen, UPPERCASE on-screen.
**Palette:** bg rgb(15,17,16) near-black; text rgb(232,230,220) warm off-white; Game Boy teal ~#27d3c9; rainbow road pastel pink/purple/blue/green; screen in-game uses dark navy/green GB Color palette, red logo.
**Layout:** Single full-viewport stage, the object is the interface. Tiny corner HUD (name/roles top-left, visitor number top-right, sound button bottom-right), key-hint panels left ("Move") and right ("Buttons") flanking the device. Lots of empty black space; very opinionated, zero scroll.

## Hero
- Screenshot: research/screenshots/sadok-cervantes-hero.png
- What it is: A 3D teal Game Boy Color floating over a dithered rainbow road in a starfield, with a scanline reveal on load, then a gate: "turn up volume, click to power on or press any key" with an arrow pointing at the power switch.
- Techniques: WebGL model, dithered shader road, scanline reveal, audio gate, visitor counter.
- Why it works / what is special: The metaphor is the whole portfolio; the power-on gate is a built-in ritual that sets tone and unlocks audio legitimately.
- Scores (1-10): design 9, creativity 10, usability 6

## Navigation
- Screenshot: research/screenshots/sadok-cervantes-work.png (shows the title menu on the Game Boy screen: Projects / Blog / About) and sadok-cervantes-nav.png (power-on intro text typing out, control legend)
- What it is: A Zelda-like title screen ("The website of ...") with a cursor arrow menu; navigation by D-pad/keys or by clicking the 3D buttons. Page exposes a text description of every control and a "plain list" link.
- Techniques: Emulated game UI, keyboard handlers, DOM fallback for a11y.
- Why it works / what is special: Navigation is gameplay; the legend teaches controls without a tutorial modal. Graceful degradation to normal links.
- Scores (1-10): design 9, creativity 10, usability 6

## Projects
- Screenshot: research/screenshots/sadok-cervantes-contact.png (project card on screen; this filename holds the project view, not a contact page)
- What it is: Projects (about 9 per page text: livestream, Wikipedia banners, web launches, etc.) shown as screen cards: image carousel with arrows and progress pips, title, one-line blurb, "A open / B back" prompt in a dialog box styled like an RPG text box.
- Techniques: Pixelated imagery in-screen, dialog-box UI, carousel, A opens a real /projects/<slug>/ page.
- Why it works / what is special: Each project is an "item" with a short blurb; the real case study lives on a normal page, so depth does not fight the gimmick.
- Scores (1-10): design 8, creativity 9, usability 6

## About
- Screenshot: research/screenshots/sadok-cervantes-about.png (caught mid-transition: a pixel-art trainer sprite of him with two dogs on a blank white GB screen, content still loading)
- What it is: A Pokemon-trainer-card style screen with a pixel avatar; I did not see the full text.
- Techniques: Sprite art, screen transitions.
- Why it works / what is special: Personal avatar and pets in game art; makes bio feel like a character sheet.
- Scores (1-10): design 8, creativity 9, usability 6 (partially verified)

## Contact/Footer
- Screenshot: none verified
- What it is: Not seen. There is a "(c) 2026 sadok.mx" line on the title screen and a Blog link; no contact view captured.
- Techniques: n/a
- Why it works / what is special: n/a
- Scores (1-10): not rated

## Micro-interactions
- Scanline strip reveal of the device on load (observed in hero shot).
- Gate arrow pointing at the power switch; any key or click powers on, red power LED lights, camera/device pose shifts.
- Typewriter text on the screen intro, character by character.
- Menu cursor arrow moves with D-pad/WASD; hint panels list key caps.
- Live visitor number increments per load (#65,802 -> #65,808 across my visits).
- Sound toggle bottom-right; rainbow road drifts/animates between shots.
## Mobile
At 390px the Game Boy fills the width, front-on and cropped by the viewport bottom, with the scanline reveal still visible; name/roles and visitor counter stay in the top corners and sound button bottom-right. Looks clean; I did not test on-screen touch controls.
