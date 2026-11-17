# Brandon Yasin — https://brandonyasin.com/
**Stack/techniques detected:** Lenis smooth scroll (confirmed by detection); custom cursor (confirmed - ring top-right plus a cursor element); no GSAP/three/WebGL/canvas detected by heuristic (GSAP may be bundled/minified, so treat as unknown; the motion feels GSAP-like but that is a guess). Confirmed by observation: wheel input mapped to horizontal scroll (page is a fixed 100vh, scrollHeight 900), a zoom-out "menu overview" that shows three miniature screens, a live local-time clock with a "time travel" toggle, a contact modal with Client/Talent/Email tabs and checkbox form, duplicated text nodes (double-line text reveal/roll pattern on labels), intro preloader with stacked image slices. Marquee: not seen. Page transitions: the menu zoom-out/zoom-in is the transition. Awwwards SOTD badge cycles in the top-left label.
**Typography:** Neue Haas Unica Pro (Helvetica Now Variable also loaded), weight 400 throughout. Body ~16px, UPPERCASE small labels ~13px. Section titles lowercase ~90px ("cases", "archive", "about"); about statement ~80px, tight line-height (~1), tight tracking. A thin handwritten signature "By." logo is the only non-grotesk element.
**Palette:** Dark warm olive-brown bg rgb(44,41,34) #2C2922, text warm bone rgb(195,190,177) #C3BEB1. Menu overview bg darker ~#1B1A15. Contact modal flips to muted sage green (~#5E7352) with deep green text (~#2B4220). Imagery supplies all other colour. Dark theme only.
**Layout:** Fixed 4-column header grid (name | signature | menu/contact | time + cursor ring) with 16px gutters, everything flush to the grid. Projects are tall portrait cards (about 400x500, 4:5) in one horizontal row pinned to the bottom, with 100% empty space above them. Huge negative space, no decoration; calm, editorial, gallery-like.

## Hero
- Screenshot: research/screenshots/brandon-yasin-hero.png
- What it is: After a loader, a small stack of overlapping project images sits dead centre on the empty dark field (images are slices that stagger in; on mobile they appear as cut strips). The header grid frames it, then the stack expands into the project row.
- Techniques: Preloader with image clip/slice reveal, then image stack expanding to horizontal row; Lenis; clock updates live.
- Why it works / what is special: Nothing but images and tiny type, so the work is the hero. Restraint plus a signature mark gives a luxury-fashion feel.
- Scores (1-10): design 9, creativity 8, usability 7

## Navigation
- Screenshot: research/screenshots/brandon-yasin-nav.png
- What it is: Tiny uppercase text links (Menu, Contact) in a fixed header. Clicking Menu zooms the whole site out so cases, archive and about appear as three portrait "mini-screens" side by side, each a live miniature with its own title; clicking one zooms into it.
- Techniques: Scale/translate transform of the whole page container, dim backdrop, miniature live renders of each section; Lenis.
- Why it works / what is special: The menu is a spatial map of the site rather than a list, so it is the signature idea and doubles as the page transition. The header stays constant, which keeps orientation.
- Scores (1-10): design 9, creativity 10, usability 8

## Projects
- Screenshot: research/screenshots/brandon-yasin-work.png
- What it is: Six cases in a horizontal row (retail mall, festival, fashion week, outerwear brand, furniture, luxury house), each a portrait image with a small uppercase title above. A separate "archive" screen holds smaller supporting material in a tighter strip.
- Techniques: Vertical wheel translated to horizontal scroll; images slightly scale/shift with scroll; cards link to /cases/<slug> routes.
- Why it works / what is special: Strong image curation, consistent ratio, huge empty space above; the titles are quiet so the photography dominates. Hover lifts the card and title ~8px and brightens the image.
- Scores (1-10): design 9, creativity 8, usability 7 (wheel-to-horizontal is unfamiliar but smooth)

## About
- Screenshot: research/screenshots/brandon-yasin-about.png
- What it is: A giant ~80px first-person statement across three lines, then a portrait photo on the left and a small "About me" paragraph column on the right. Further down are numbered values (01 Empathy, 02 Freedom, 03 Growth) and process steps ("01. See").
- Techniques: Large type with tight leading, line/word text reveals (duplicated text nodes suggest mask reveal), numbered lists.
- Why it works / what is special: Scale contrast between huge statement and 16px body, with a lot of white space and a strict two-column grid aligned to the header.
- Scores (1-10): design 9, creativity 7, usability 8

## Contact/Footer
- Screenshot: research/screenshots/brandon-yasin-contact.png
- What it is: Contact opens a centred modal over the darkened page, which turns to sage green. It has Client / Talent / Email tabs, a large "let's build together" heading, availability note, and a numbered checkbox brief form (Scope, Format, Budget) with hairline dividers.
- Techniques: Modal with colour inversion, tabbed form, hairline rules, grain/noise texture on the panel (visible in screenshot).
- Why it works / what is special: A structured brief replaces a generic form, which filters leads and feels as designed as the rest of the site. The colour switch makes it feel like a distinct moment. No traditional footer seen.
- Scores (1-10): design 9, creativity 8, usability 8

## Micro-interactions
- Header rings: a large thin circle in the top-right is the custom cursor/indicator; a smaller dot sits inside it.
- Project card hover: card and title shift up about 8px and image brightens.
- Menu click: whole page scales down to a three-screen overview, background darkens; clicking a screen scales into it.
- Local time clock with a "time travel" toggle in the header.
- Top-left label cycles between name and the Awwwards Site of the Day badge with date.
- Vertical wheel drives horizontal movement of the case row.
- Contact opens as an over-page modal with a page colour dim.
- Not directly observed: GSAP specifics, case page transitions (I did not open a /cases page).

## Mobile
At 390px the header keeps Brandon Yasin / Menu / Contact in one row at larger size with the ring at the right; the hero is a small centred stack of image strips cut into horizontal slices on a large empty dark field. Very minimal, but the screenshot may have been taken mid-intro.
