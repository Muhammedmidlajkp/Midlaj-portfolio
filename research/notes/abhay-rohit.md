# Abhay Rohit — https://abhayrohit.com/
**Stack/techniques detected:** Next.js (Turbopack chunks, confirmed), Three.js/WebGL (confirmed, 7 canvases), custom scroll-driven 3D "rooms" per project (confirmed visually), GSAP/Lenis NOT detected as globals (page is ~73,000px tall, so scroll is driven by custom code), custom cursor classes present (guess), ambient audio toggle (vinyl-record button, confirmed visually), "Pause motion" and "Use the still room / written view" accessibility fallbacks (confirmed), loader with % progress per scene (confirmed).
**Typography:** Anton (condensed, huge uppercase display name), Newsreader (serif, regular + italic for taglines and scene titles), Instrument Sans (UI/body, ~16-18px), JetBrains Mono (tiny uppercase labels, status lines, section index numbers).
**Palette:** Hero red ~rgb(222,56,52) / #C42B2A film-strip scene, cream #EEE9DC text, near-black film strip; later scenes switch to sage/cream (TBD Health, #D5DFD0 ish) and deep charcoal-green #121A1A with cream and a coral accent (After Hours). Per-project palette shifts.
**Layout:** Full-viewport pinned scenes, each project is its own world; huge type overlapping imagery; generous empty space; fixed top bar (logo left, "Contact Me" pill + round menu button right), fixed vertical 01-07 progress rail on right, mono microcopy in corners. Feels cinematic, theatrical, film/studio themed.

## Hero
- Screenshot: research/screenshots/abhay-rohit-hero.png (also abhay-rohit-nav.png, mobile)
- What it is: A solid red field with a curved 3D film strip carrying project thumbnails; the giant cream ABHAY / ROHIT wordmark is split above and below/in front of the strip, with a serif tagline and short bio.
- Techniques: WebGL curved filmstrip (Three.js), layered text depth (surname in front of strip, first name behind), thumbnails animating/looping.
- Why it works / what is special: The film-strip metaphor previews every project instantly and the name-through-the-strip layering gives real depth. Bold limited palette.
- Scores (1-10): design 9, creativity 9, usability 7

## Navigation
- Screenshot: research/screenshots/abhay-rohit-hero.png (top bar); the opened menu overlay was NOT verified (click on "Menu" failed in my script).
- What it is: Minimal fixed header: wordmark, outlined "Contact Me" pill with arrow, circular hamburger; plus a vertical numbered 01-07 pill rail that tracks scroll and a vinyl sound toggle bottom right.
- Techniques: Fixed overlay, scroll-progress rail with active dot, pill buttons recolouring per scene (dark on dark scenes).
- Why it works / what is special: Persistent orientation in a 73k px journey; the progress rail doubles as chapter navigation; skip link to a written portfolio.
- Scores (1-10): design 8, creativity 8, usability 8

## Projects
- Screenshot: research/screenshots/abhay-rohit-work.png
- What it is: Each project (TBD Health, Haspr and sub-projects, After Hours etc.) is a 3D scroll-through scene; the captured one shows a tilted 3D building/browser-window diorama with tabs (Website, Patient portal, Care team, Operations) and a caption panel with title, one-liner, "View screens" link and tab strip.
- Techniques: WebGL scenes with scroll-linked camera moves, in-scene UI browser chrome, section tabs beneath the scene, chapter anchors (#tbd-care etc.).
- Why it works / what is special: Case studies feel like designed worlds rather than image lists; the product UI is placed inside the 3D set. Per-project colour worlds.
- Scores (1-10): design 9, creativity 10, usability 7

## About
- Screenshot: research/screenshots/abhay-rohit-about.png
- What it is: A "Five curiosities - one room" scene: a top-down 3D room (desk, car, plants, gym gear) with wireframe overlay, serif headline and a loading state. The shot caught the loader ("Loading the room", 7%) so the finished state was not seen.
- Techniques: Heavy WebGL/video-textured scene, wireframe overlay, named loading stage text, escape hatch "Use the still room".
- Why it works / what is special: Personality via a single explorable room; honest loader copy and a low-power fallback.
- Scores (1-10): design 8, creativity 9, usability 6

## Contact/Footer
- Screenshot: none verified for the real contact end. abhay-rohit-contact.png only shows the top-down "A room coming together" scene at 93% loading (Retry loading / Use the still room links), not the footer. An earlier After Hours frame (dark, Anton title, glowing 3D brain) was overwritten. The mobile hero thumbnail hints at a "The End" scene with email and social links; not seen full size.
- What it is: Unverified end of page; header always shows a Contact Me pill and hero has an email link.
- Techniques: Staged loader with retry and still fallback (confirmed).
- Why it works / what is special: Honest slow-load messaging with escape hatches.
- Scores (1-10): design 7, creativity 8, usability 6

## Micro-interactions
- Persistent "Pause motion" text button in hero for reduced motion.
- Vinyl-record sound toggle fixed bottom-right (muted icon seen).
- Right-hand numbered rail with moving active dot and scroll indicator bar.
- Header pill buttons change colour scheme between red/cream and dark scenes.
- Per-scene loading messages with percentage and progress line; "Use the still room / written view" opt-outs.
- Film-strip thumbnails show "LOOP" labels and appear to play looping previews (seen in second hero frame, tick marks per frame).

## Mobile
390px hero keeps the red field: stacked ABHAY, serif tagline, horizontal film strip with 3 thumbnails, ROHIT right-aligned below, then bio, email and Pause motion links; vinyl toggle bottom right. Clean and readable.
