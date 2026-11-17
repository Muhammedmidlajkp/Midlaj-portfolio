# Maria Vasilyeva — https://www.mariavasilyeva.com/
**Stack/techniques detected:** Confirmed: WebGL (canvas present; project imagery is composited in a canvas/WebGL layer, not DOM images), custom multi-route site (/about, /contact), SOUND on/off and ANNOTATIONS on/off toggles, hand-drawn annotation overlays, loader screen with repeated/stacked text. Not detected by heuristic: GSAP, Lenis, Three, Framer (likely custom or minified/bundled; the scroll is clearly virtual - page height equals viewport). Guessed: custom wheel-driven scroll hijack, shader/WebGL image transitions, audio-reactive sound design, scroll-driven text letter-spacing animation (about headline).
**Typography:** Three families: "feat" (condensed high-contrast serif display, uppercase, huge, tight tracking; about headline about 90px), "synt" (monospace body/UI, about 14.7px, UPPERCASE for rail labels, mixed case for links), "suo" (handwritten script for annotations like "Scroll", "More details", "Selected"). Vertical rotated text on both side rails.
**Palette:** Light: #F9F9F9 bg, #131313 text. Dark menu: #131313 bg, white text. Accent colours only come from project imagery (lavender, green). Strictly monochrome chrome.
**Layout:** Fixed full-viewport app shell: two thick black vertical rails (left: name + role; right: MENU / SOUND / ANNOTATIONS toggles) framing the stage. Horizontal hairline rules at irregular intervals form a musical-staff/ledger grid across the whole site. Centered, symmetrical composition, lots of whitespace, no conventional page scroll.

## Hero
- Screenshot: research/screenshots/maria-vasilyeva-hero.png
- What it is: A loader ("loading the playlist") then a stage where project thumbnails sit on the staff lines; a horizontal film-strip of tiny project thumbnails runs through the middle, with cluster of larger project images bursting from it. Footer shows index number, project title and "View project".
- Techniques: WebGL-composited images, scroll-driven filmstrip scale/zoom, hand-drawn "Scroll" circle and "More details" arrow annotations, rotated rail text.
- Why it works / what is special: The portfolio is framed as a music score/playlist; the loader copy and the whole metaphor are consistent. The filmstrip shows every project at once as a compressed timeline that explodes into big images on scroll.
- Scores (1-10): design 9, creativity 10, usability 6

## Navigation
- Screenshot: research/screenshots/maria-vasilyeva-nav.png
- What it is: MENU on the right rail opens a full black overlay with four giant serif items (Notes, Melody, Overture, Jazz) numbered (01)-(04), each with a handwritten label (Selected, All, About, Thoughts) and a hand-scribbled strike line, plus Get in touch / Instagram / Savee in mono at the bottom.
- Techniques: full-screen overlay, staff-line grid continued, SVG hand-drawn scribbles over items (likely animated on hover; hover not visibly confirmed in static shot).
- Why it works / what is special: Music-themed renaming gives personality while handwritten subtitles keep it understandable. Scribble overlays make huge type feel sketched.
- Scores (1-10): design 9, creativity 9, usability 7

## Projects
- Screenshot: research/screenshots/maria-vasilyeva-work.png
- What it is: After wheel-scrolling, a vertical playhead line appears and big project images collage in layered, overlapping rectangles; the current project name with year (e.g. a serif label chip) and a counter (05) update at the bottom.
- Techniques: virtual scroll, WebGL image layers at varying depth/scale, tiny thumbnail strip as progress indicator, overlapping collage composition.
- Why it works / what is special: Browsing is a sequence you "play" rather than a list; every project gets a staged collage not a card. Counter + title + CTA bottom row is consistent and clear.
- Scores (1-10): design 9, creativity 10, usability 6

## About
- Screenshot: research/screenshots/maria-vasilyeva-about.png
- What it is: Light page with script name, a small B/W portrait with index markers, and a massive uppercase serif statement set across three lines where letter-spacing is stretched on the middle line, then a short mono-less serif blurb and a "Scroll" hint.
- Techniques: letter-spacing/tracking animation (the "V I S U A L" spread suggests scroll or entrance-driven kerning), staff-line rules behind type, handwritten script.
- Why it works / what is special: Huge condensed serif against hairlines reads as editorial/magazine; the tiny portrait gives scale contrast.
- Scores (1-10): design 9, creativity 8, usability 8

## Contact/Footer
- Screenshot: research/screenshots/maria-vasilyeva-contact.png
- What it is: /contact route; my capture caught it mid-load (almost blank with only "Contact" text and the rails), so the content is not seen. Contact links (Get in touch, Instagram, Savee) are also in the menu overlay footer.
- Techniques: separate route, persistent rails.
- Why it works / what is special: Could not verify; the persistent shell shows through route changes.
- Scores (1-10): design n/a, creativity n/a, usability 7 (links always reachable from menu)

## Micro-interactions
- Loader: stacked uppercase phrases with letter-repeat glitch ("LLLL", "FFFF" trails) and overlap, reading as a stutter.
- Persistent toggles: SOUND ON/OFF and ANNOTATIONS ON/OFF in the right rail with circled active state.
- MENU button changes to a boxed state with dots when menu is open.
- Handwritten script hint ("Scroll") and "More details" arrow pointing to View project.
- Wheel scroll drives a vertical playhead and the thumbnail strip; counter at bottom increments per project.
- Menu items have scribble strokes whose shape shifts slightly between captures (animated).
- Page-level route change swaps content while keeping the rails fixed.

## Mobile
At 390px the rails become top (name + MENU) and bottom (ANNOTATIONS / SOUND toggles) black bars; the staff lines and filmstrip remain, with the project title and "View project" at the bottom. Works well, with the same concept preserved.
