# Huy Phan (HUYML) — https://huyml.co/
**Stack/techniques detected:** Framer site (CONFIRMED: framerusercontent script_main, events.framer.com) so Framer Motion is the engine. WebGL/canvas present (heuristic, 2 canvases). Custom cursor flagged (heuristic, not visually verified). No GSAP/Lenis/Three found (scroll is Framer-native or custom). Confirmed visually: intro loader with an illustrated character pushing a black curtain away to reveal a red wordmark, a 3D skewed image stack that scrolls, blur-to-sharp list focus, modal popups for contact/credits, audio toggle. Guessed: smooth-scroll implemented via Framer scroll transforms.
**Typography:** BT Glyphius (condensed display serif-ish, uppercase, used for wordmark/headings/nav/about statements, ~23px in modals up to ~200px for the HUY PHAN wordmark); BT Grotesk (Regular/Medium/Bold, tiny ~11-12px labels and body); F37 Bolton trial. Mostly ALL CAPS display, tight negative tracking on small grotesk.
**Palette:** light grey bg rgb(236,236,236) / #ececec, near-black text, signature coral red ~#ff4a4a for wordmark and about statements, white giant numerals, black loader/contact modal; per-project colour swatch chips (3 dots) at right edge change with project.
**Layout:** Full-viewport, fixed-position HUD, 12-ish column feel with a narrow left rail (vertical HUYML(c) lockup with illustrated portrait, vertical copyright/location text), top strip of micro-labels (Menu, Audio toggle, Working globally + live HCMC clock, mailto), vast empty grey space with a tilted image stack at centre and a project text list at right. Editorial, playful, very dense in micro-detail but airy overall.

## Hero
- Screenshot: research/screenshots/huy-phan-hero.png
- What it is: After a long loader (black curtain wiped by an illustrated character; reveals giant red HUY PHAN wordmark), the home is an immersive project browser: centre image card on a skewed stack, big counter "01 /19", metadata (role, launch, recognition) at left, project list at right.
- Techniques: Framer Motion / WebGL-ish perspective-skewed stacked images, scroll-linked counter, text blur-to-focus, live clock.
- Why it works / what is special: The loader is a character gag that sets personality; the home IS the work index so there is zero dead space; awards line (Awwwards, CSSDA, FWA) shown per project as social proof.
- Scores (1-10): design 9, creativity 10, usability 7 (slow load, ~10-20s black in headless)

## Navigation
- Screenshot: research/screenshots/huy-phan-nav.png (loader frame captured; real nav visible in hero/about shots)
- What it is: Fixed HUD. Menu list (Work, About, Playground, Contact) top-left with an arrow marker on the active item; Audio Off toggle; "Working globally" with live local time; email link right. Mobile collapses to a two-line hamburger plus centred logo.
- Techniques: Active-arrow indicator, items blur when another opens (contact), sound toggle.
- Why it works / what is special: Status-bar-like utility info (time, availability, email) makes it feel like a living studio dashboard.
- Scores (1-10): design 8, creativity 8, usability 8

## Projects
- Screenshot: research/screenshots/huy-phan-work.png
- What it is: 19 projects shown as a tilted deck of images, with a right-hand vertical list (category, name, one-line blurb) where the focused item is crisp and others fade/blur. Big numeral overlaps the image deck using difference/inverted blending.
- Techniques: Perspective transform deck, scroll-synced index, blend-mode numerals, per-project colour chips, hover/scroll focus blur.
- Why it works / what is special: Image stack skew gives depth without 3D libs; the number-over-image overlap is a strong graphic move. Each project links to its own /project/ page.
- Scores (1-10): design 9, creativity 10, usability 7

## About
- Screenshot: research/screenshots/huy-phan-about.png
- What it is: Separate /about page: huge white numerals "19" and "96" flanking a cartoon self-portrait, coral uppercase personal statements top-right and bottom-right, four small link columns (awards, talks/press, capabilities, trusted-by clients).
- Techniques: Oversized numerals as graphic, illustrated avatar, small-print ledger of credentials.
- Why it works / what is special: Humour plus a dense credibility ledger; birth-year split around the face is memorable.
- Scores (1-10): design 9, creativity 9, usability 8

## Contact/Footer
- Screenshot: research/screenshots/huy-phan-contact.png
- What it is: Contact is a modal card, not a page: black tilted card "COME SAY HI" with email, YouTube, Behance/Dribbble, socials and Close; a second light tilted CREDITS card (dev, illustration, copywriting, fonts) peeks underneath with the character illustration.
- Techniques: Tilted floating cards over the page, menu items blurring behind, credits card as an easter egg.
- Why it works / what is special: Contact feels like physical cards dropped on a desk; credits are generous and on-brand.
- Scores (1-10): design 9, creativity 9, usability 8

## Micro-interactions
- Intro: character illustration pushes black curtain sideways to reveal wordmark.
- Menu arrow marker moves to the active page; other items blur when contact opens.
- Project list: focused item crisp, neighbours faded/blurred; counter ticks 01 to 19.
- Image deck cards skewed and fan out as you scroll; counter overlaps with inverted blending.
- Live HCMC clock, audio on/off toggle, palette chips change per project.
- Contact/credits as tilted modal cards.

## Mobile
At 390px the HUD collapses to a hamburger and centred HUYML(c) logo; the deck becomes a single centred tilted image with a big "01 /19" counter, title and blurb below, and colour chips at the bottom. Clean and works well.
