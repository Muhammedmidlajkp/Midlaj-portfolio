# Denny Pratama — https://dennypratama.com/
**Stack/techniques detected:** Lenis smooth scroll (detected), WebGL canvas (4 canvases; 3D logo clearly rendered, confirmed visually), custom cursor (detected, not seen in static shots), GSAP not detected by script but copy mentions "GSAP and WebGL" and Next.js/React (page itself claims it, guessed as its own stack). No marquee/page-transition confirmed. Scroll-linked scene with an orange progress line and a degree counter ("scroll to go through the slash") seen mid-transition (confirmed in screenshot). Blurred/defocus text entering at the contact area (confirmed in still frame, mechanism guessed). Awwwards "Nominee" side tab present.
**Typography:** Archivo (headings, light/regular weight at huge size, tight negative tracking, sentence case); body Archivo ~16-20px; a "Revo Switzer" font also loaded. Hero lines ~80px, section titles ~90-100px, project names ~100px+, email ~90px. Small meta labels ~13px with numbering (01, d.1, p.1).
**Palette:** dark #0c0c0b, off-white text rgb(236,234,228) (#eceae4); work section flips to light warm grey (~#eae9e4) with black text and grey project names; accent a vermilion/orange-red (#ff4a1c-ish) used for progress line and glow at footer.
**Layout:** 1440px with 48px side margins, 12-col feel, hairline dividers, split two-column lists, mono-ish numbering labels. Very editorial, large type against generous empty space; dark/light section inversion.

## Hero
- Screenshot: research/screenshots/denny-pratama-hero.png
- What it is: A large 3D extruded "dp" monogram in white with a wireframe satellite/shard burst and glow at its right, flanked by "I design it." top-left and "I build it." bottom-right, with a tiny bio and stats bottom-left.
- Techniques: WebGL/three-style 3D model (library not detected), staggered placement of headline halves, local time readout (live GMT+7 clock).
- Why it works / what is special: The two-line headline split diagonally around the object tells the whole pitch (design vs build) and the solid-to-wireframe shift on the logo visualises it. Social proof stats and live clock add personality.
- Scores (1-10): design 9, creativity 9, usability 8

## Navigation
- Screenshot: research/screenshots/denny-pratama-nav.png (identical to hero; shows the bar only)
- What it is: Fixed top bar: logo left, four centred text links, outlined pill "Get in touch" with arrow right; a filled pill CTA is also floating bottom-right. Mobile collapses to a "Menu" pill.
- Techniques: fixed header that inverts colour on light sections (seen on the work shot), link blur/dim in the footer shot suggesting active-state or scroll-based fading.
- Why it works / what is special: Minimal, always-reachable CTA appears twice without feeling pushy. Colour inversion keeps contrast across sections.
- Scores (1-10): design 8, creativity 6, usability 9

## Projects
- Screenshot: research/screenshots/denny-pratama-work.png
- What it is: Light-background section with a big "Drawn, then shipped." headline and an intro paragraph at right, then a numbered list of project names in huge pale grey type with category and one-line description right-aligned. Each row has an open preview/concept link.
- Techniques: typographic list rows separated by hairlines; probable hover reveal of preview (not observed).
- Why it works / what is special: Type-only index is fast to scan and bold; no thumbnails needed in the resting state. The dark-to-light flip makes the section feel like a distinct "paper" page.
- Scores (1-10): design 8, creativity 7, usability 8

## About
- Screenshot: research/screenshots/denny-pratama-about.png (shows the capabilities split, not a dedicated bio section; dedicated About page not captured)
- What it is: Following the scroll scene, a two-column "Design" vs "Production" skills list: left aligned left, right aligned right, numbered d.1-d.5 and p.1-p.5, with a "Read how this site was made" link. Above it is a blueprint-style progress bar labelled traced from live.
- Techniques: scroll-driven scene (progress bar, degree counter), mirrored list layout.
- Why it works / what is special: Mirrored columns visualise the designer/builder duality that the hero introduced; the scroll "through the slash" idea is a strong narrative device. Bio paragraph/portrait not verified.
- Scores (1-10): design 8, creativity 9, usability 7

## Contact/Footer
- Screenshot: research/screenshots/denny-pratama-contact.png
- What it is: Giant closing question headline (captured mid-blur), full-width email in enormous type between hairlines, link columns (Explore, Connect, Contact), CTA pill, copyright line and back-to-top, with a dark red glow rising from the bottom.
- Techniques: blur-in text reveal (appears), warm radial gradient glow, oversized email as the primary CTA.
- Why it works / what is special: The email is the hero of the footer, impossible to miss; the ember glow ties back to the accent colour.
- Scores (1-10): design 9, creativity 8, usability 9

## Micro-interactions
- Blurred, defocused headline text resolving while scrolling into the footer (seen in a still).
- Nav links dim/blur when over large footer type (seen in a still; cause unclear).
- Scroll-linked progress line and rotating degree counter in the slash scene (seen mid-scene).
- Nav bar and CTA switch colours on light sections (seen).
- Cursor behaviour, hover states and Lenis easing not directly observed (only detected).

## Mobile
At 390px the hero keeps the 3D monogram centred with "I design it." above and "I build it." below right-aligned, nav becomes a "Menu" pill, and a full-width "Get in touch" pill sits at the bottom; the Awwwards tab overlaps the right edge.
