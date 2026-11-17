# Errormade — https://errormade.tech/
**Stack/techniques detected:** Lenis smooth-scroll (heuristic hit), WebGL canvas (confirmed: images visibly warp/bend/smear like a shader displacement), custom cursor with live "x/y" coordinate readout (confirmed in footer), query-string "views" routing (?view=gallery/about/objects, ?case=...) i.e. single-page app with overlay case pages (confirmed), live Moscow clock, EN/RU toggle, sound toggle (visible icons). GSAP/three not detected (may be custom WebGL). Page transitions between views: guessed from warped imagery, not seen in motion.
**Typography:** Fallback serif (Times) rendered in headless; likely the real face differs (only "5by7" pixel font reported loaded, plus a geometric sans for the ERRORMADE wordmark). Tiny UI text ~12-14px, mixed case, italic numerals, lots of hairline dividers; product-card captions in a wide mono/grotesk uppercase.
**Palette:** Strictly monochrome: #000 and #fff, grey for inactive tabs, with colour only coming from project imagery. Both inverts: black loader/hero, white content views.
**Layout:** Everything sits on a visible 12-column hairline ruler (tick marks and column numbers 1-12 across the page); thumbnails are laid out on that grid in rows with index numbers above, metadata strip (title, year, discipline) docked above like a technical drawing. Fixed chrome: top nav tabs, bottom bar with wordmark/company/clock/lang/cursor coords. Feels like a lab/terminal OS UI, very dense, fully custom.
## Hero
- Screenshot: none verified (research/screenshots/errormade-hero.png shows only the black entrance screen with a bird-wing logo; stuck after 15s in headless, so the real entrance sequence was not seen)
- What it is: Black "Entrance" gate with a centered angular logo mark, framed by the full nav and footer HUD.
- Techniques: logo loader, HUD chrome; entrance transition unseen.
- Why it works / what is special: Logo alone plus a visible HUD sets the "system boot" tone instantly. Could not verify more.
- Scores (1-10): design 7, creativity 8, usability 5
## Navigation
- Screenshot: research/screenshots/errormade-nav.png (shows the case overlay header: index, title, discipline, year, Close, Info toggle) and top tab bar visible in work/about shots
- What it is: Top tab strip: Entrance, Work, Errormade, About, .obj, rrm:lang, with a square bullet on the active one and sub-tabs (All/Visual/Digital, Grid/List); a sticky bottom status bar with clock and cursor coordinates.
- Techniques: hairline dividers, state-driven tabs, URL query views, custom cursor coords (confirmed).
- Why it works / what is special: Nav is part of the artwork - a ruler/HUD rather than a menu. Naming (.obj, rrm:lang) builds brand voice.
- Scores (1-10): design 9, creativity 9, usability 6
## Projects
- Screenshot: research/screenshots/errormade-work.png
- What it is: A gallery of cases (fashion/brand, music posters, UI dumps), each as a row of thumbnails numbered on the column grid with a title/year/role strip; Grid/List toggle; click opens a full-screen case overlay with big media and an Info panel.
- Techniques: WebGL-warped imagery at the screen edges (bent/curved sides seen), column-indexed layout, filters, overlay case pages.
- Why it works / what is special: The tactile bending of edge images and the technical annotation make a plain thumbnail grid feel like a gallery instrument.
- Scores (1-10): design 9, creativity 9, usability 7
## About
- Screenshot: research/screenshots/errormade-about.png
- What it is: Large cutout photo of the designer (glitch-smeared at the bottom edge) with a services list on the left, short bio centered, PDF dossier download and social links top-right.
- Techniques: WebGL distortion/smear on image, text over image, ruled lists.
- Why it works / what is special: Photo-over-text with a glitch edge feels raw and personal; services are a clean right-aligned list with hairlines.
- Scores (1-10): design 8, creativity 8, usability 7 (text over the photo hurts legibility)
## Contact/Footer
- Screenshot: research/screenshots/errormade-contact.png (the .obj view, not a contact form; contact is only seen as Tg/Ig/X/Be links and dossier link on About)
- What it is: ".obj" shelf of 3D-ish merch objects (battery, tee, watch, helmet) on white, a playful extra page. Persistent footer bar holds company name, live clock, language, sound and cursor coordinates.
- Techniques: object cut-outs, minimal caption "hello.obj".
- Why it works / what is special: Branded product objects reinforce identity; always-on footer HUD doubles as footer.
- Scores (1-10): design 8, creativity 9, usability 6
## Micro-interactions
- Cursor coordinate readout "x700 y400" updates in the footer (confirmed after mouse move).
- Live ticking clock in the footer (confirmed: seconds changed between shots).
- Active tab square bullet and grey/black tab state; sub-tab pills.
- Images bend/warp at viewport edges in the gallery (seen in a still, motion not seen).
- Case overlay with rounded-curve edges at the bottom (seen in nav shot).
- Hover effects/cursor styles not observed.
## Mobile
390px hero (errormade-mobile-hero.png) is the same black entrance logo with the full tab bar condensed on top, a progress bar and the footer (clock, sound, EN/RU) pinned at the bottom; works cleanly but only the loader state was seen.
