# Gil Huybrecht — https://gilhuybrecht.com/
**Stack/techniques detected:** Lenis smooth scroll (confirmed via heuristic), Nuxt/Vue (confirmed, Nuxt globals), Tailwind-style utility classes (confirmed in markup, e.g. `max-s:invisible`), a canvas/WebGL element present (confirmed, purpose unknown), custom cursor (heuristic, a cursor-like pointer visible in some thumbnails), numeric percentage preloader (confirmed), staggered intro reveal on rows (class `js-intro-el`, confirmed in markup). GSAP/Three not detected (could be bundled/minified; unknown). No marquee or page transitions observed.
**Typography:** One grotesk sans (loaded as family "sans", weight 500, Neue-Haas/Helvetica-like). Body about 16px, same size for nearly everything: nav, headings, services, project titles. Sentence case, tight tracking, no scale hierarchy; hierarchy comes from position and indentation only.
**Palette:** Pure black background (#000), white text (#fff). Colour comes only from the project thumbnails (mostly white/cream site screenshots on black). Dark only.
**Layout:** 6-column grid, ~13px outer gutter. Header is a single row of 6 cells (name, availability, services list, recognition list, Profile, Email me). Below, each project is a title row (name left, index count right) over a horizontal strip of 6-per-row screenshots at 16:10 numbered 1..N. Extremely dense, almost no decoration, huge black voids. Feels like a contact sheet / index.

## Hero
- Screenshot: research/screenshots/gil-huybrecht-hero.png
- What it is: No hero image. Black screen with the header grid (name, availability date, services, award tally) and then the first project row starting at about mid-page. Preceded by a plain centred "NN%" loader on black.
- Techniques: Percentage preloader, intro stagger reveal of `.js-intro-el` rows (markup confirmed, animation not captured frame by frame).
- Why it works / what is special: The award list (Awwwards SOTD 15x, FWA 13x etc.) is the hero, as text; credibility with no imagery. Confident, restrained.
- Scores (1-10): design 8, creativity 7, usability 6

## Navigation
- Screenshot: research/screenshots/gil-huybrecht-nav.png
- What it is: Not a separate nav bar; "Profile" and "Email me" are two text links in the top header grid. No menu, no logo mark. (My retaken nav strip was a clip of the header; the original capture showed a gallery section.)
- Techniques: Plain text links aligned to the grid.
- Why it works / what is special: Two actions only; zero chrome. Header cells double as info.
- Scores (1-10): design 8, creativity 6, usability 7

## Projects
- Screenshot: research/screenshots/gil-huybrecht-work.png
- What it is: About a dozen client projects (Studio DADO, The Lookback, DoThings, Ray, 53 West 53, Vucko, Ingrao, Custo, Motto XX...), each a title row plus a numbered strip of full-page screenshots of the real site, all in one long scroll. Page is very long as a result.
- Techniques: Image grid, tiny labels "Grid / Gallery" and "Normal / Star Wars" visible as bottom-corner toggles (appear to switch the layout/view mode; I did not click them, so behaviour is guessed).
- Why it works / what is special: Shows the actual websites, which is the proof for a web designer. The project index is flat and scannable; many projects visible per scroll. View-mode toggles (including a playful "Star Wars" perspective view, guessed from the name) are a distinctive idea.
- Scores (1-10): design 8, creativity 9, usability 6

## About
- Screenshot: research/screenshots/gil-huybrecht-about.png
- What it is: No distinct About section found on the home scroll; "Profile" in the header is the link to it (not opened). The about.png shot is just more project thumbnails.
- Techniques: not seen.
- Why it works / what is special: Could not see the profile page, so no judgement.
- Scores (1-10): design n/a, creativity n/a, usability n/a

## Contact/Footer
- Screenshot: research/screenshots/gil-huybrecht-contact.png
- What it is: Footer is a row of small text links (copyright/privacy, Instagram/Twitter, Savee/YouTube, Course, Newsletter) in white on black; plus "Email me" at the top.
- Techniques: Plain text links aligned to the same 6-column grid.
- Why it works / what is special: Footer repeats the grid and the same 16px type, so it feels part of the system.
- Scores (1-10): design 7, creativity 5, usability 7

## Micro-interactions
- Numeric percentage preloader, then rows appear with staggered intro (markup `js-intro-el`).
- Lenis-style inertial smooth scroll (detected).
- Grid/Gallery and Normal/Star Wars view toggles fixed bottom corners (seen; effect not tested).
- Cursor pointer visible in thumbnails; custom cursor suspected, not verified.
- Item numbers (1..N) and project titles act as an index rather than hover-triggered effects; I did not observe hover states.

## Mobile
- Screenshot: research/screenshots/gil-huybrecht-mobile-hero.png
- At 390px the header collapses to name left, "Profile, Email me" right in large text (~28px); the services and awards cells are hidden and projects become 2-column strips under big project titles. Clean, but the type scales up much larger than on desktop.
