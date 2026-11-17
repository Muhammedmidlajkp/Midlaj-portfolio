# Douglus Nguyen — https://douglus.co/
**Stack/techniques detected:** Confirmed: a WebGL canvas (hero/contact watercolour ink blobs, with a mix-blend colour shift where the blobs cross type and the silhouette); multi-route SPA (/work, /about, /contact); full-screen menu overlay with hover image preview; Fine/Bold layout toggle in the hero; tilted 3D project mockup slider ("1/2" counter). Not detected by heuristics: GSAP, Lenis, Framer, Three (could be minified or a custom shader; unknown). Custom cursor, marquee and page-transition details: not verified.
**Typography:** Two faces, confirmed via document.fonts: "Neue Montreal" (grotesk, body/UI, ~13-16px, regular, tight tracking, sentence case) and "Roxborough CF" (high-contrast display serif; H1 ~79px at the capture width, up to ~130px+ on About, weight 400). The serif is mixed with the grotesk and italic serif inside sentences (italic serif highlights words like "ideas", "motion"; "Let's create work that matters" switches from bold grotesk to light serif mid-line). Large sentence-case display, small UI.
**Palette:** Light. Warm off-white bg ~#FEFFF8 (rgb 254,255,248), near-black text rgb(30,30,30), black silhouette, deep teal/petrol ink (~#0a5a5c to #12302f), dusty salmon/rose accent (~#e89a8d, used on nav and name highlight), grey secondary labels.
**Layout:** Almost no page scroll in the hero; each route is a single full-viewport "scene". Tiny corner-anchored UI (status top-left, Menu top-centre, "Archive vol.2" top-right, contact bottom-right, toggle bottom-centre), huge type, lots of negative space. Editorial, quiet, gallery feel.

## Hero
- Screenshot: research/screenshots/douglus-nguyen-hero.png
- What it is: Name set in large display serif top-left over a cream field; a black human silhouette stands in the centre with watercolour teal ink blobs top-right and bottom-left, and a pink-gradient "fog" filling the lower half of the figure. Short two-line intro, location, corner links and a "Fine / Bold" layout toggle.
- Techniques: WebGL ink/watercolour shader (confirmed canvas+webgl), silhouette as mask with a gradient inside, mixed serif/grotesk type.
- Why it works / what is special: A memorable single image with a clear personal mood; watercolour softness against hard black silhouette and crisp type. The tiny corner furniture keeps it calm.
- Scores (1-10): design 9, creativity 9, usability 7

## Navigation
- Screenshot: research/screenshots/douglus-nguyen-nav.png (menu open, captured mid-animation)
- What it is: Minimal top bar (hamburger + "Menu" centre, "Archive vol.2" right). Opening it darkens the page and slides in a cream panel on the right with huge serif links (Home, Works, Playground, About, Contact), a dot marking the current page, contact details, and a pagination dot row. A tile showing an eye graphic appears at left with a stacked three-word slogan, which looks like a hover preview.
- Techniques: Overlay with panel slide-in, dimmed backdrop, link hover previews (inferred from screenshot; the hover trigger itself was not tested), large serif links.
- Why it works / what is special: Giant serif links turn the menu into a typographic moment; the dark scrim vs cream panel contrast is strong.
- Scores (1-10): design 9, creativity 8, usability 8

## Projects
- Screenshot: research/screenshots/douglus-nguyen-work.png (/work)
- What it is: One project per screen. Left column has the title in large serif, one-line description, and a small label/value table (Client, Role, Year). Right side shows the site mockups at a steep diagonal tilt, cropped off the edges, with a "1/2" counter bottom-left.
- Techniques: CSS/3D transformed rotated device frames, slider with counter; transition between items not observed.
- Why it works / what is special: Rotated, bleeding-off mockups are a dynamic alternative to a grid of thumbnails; the spec table gives credibility fast. Only 2 projects, and one is marked as a case study coming soon.
- Scores (1-10): design 8, creativity 8, usability 6

## About
- Screenshot: research/screenshots/douglus-nguyen-about.png (/about)
- What it is: Huge centred name in serif spanning the viewport, with a small two-paragraph bio offset to the lower right and a round black scroll-down arrow button. Further content below the fold was not captured.
- Techniques: Oversized type, italic serif words inside grotesk sentence; scroll hint button.
- Why it works / what is special: Pure typography as the hero of the page; asymmetric placement of the bio makes it feel designed.
- Scores (1-10): design 8, creativity 7, usability 8

## Contact/Footer
- Screenshot: research/screenshots/douglus-nguyen-contact.png (/contact)
- What it is: Headline "Let's create work that matters" mixing bold grotesk and light serif, the ink blobs return, with a salmon colour shift where the type crosses the blob; a small "Have an idea?" note and a label/value list bottom-right (Email, Phone, Social, live local time GMT+7).
- Techniques: WebGL ink background reused, blend-mode colour change on text over blobs, live clock.
- Why it works / what is special: Bookends the hero visually; the type that changes colour over the ink is a nice detail; live local time adds a personal touch.
- Scores (1-10): design 9, creativity 8, usability 8

## Micro-interactions
- Menu button shows a visible outlined focus/hover box in the Work screenshot and its label turns from salmon to black depending on what is behind it (colour adapts to ink blobs).
- Menu overlay: dark scrim, cream panel, current-page dot; image tile with stacked slogan appeared in the screenshot (hover preview, inferred).
- Text over the ink blobs shifts to salmon (blend), seen in the mobile hero ("Nguyen") and the contact headline.
- Fine/Bold layout toggle in the hero bottom (present; its effect was not tested).
- Project screen has a "1/2" counter, implying a slider; the transition was not observed.
- Live clock in Contact.

## Mobile
At 390px the hero keeps the same composition: name, bio and silhouette stack vertically, with the silhouette large and overlapping the bio text and the ink blobs; the "Nguyen" part of the name turns salmon where it overlaps the ink. Corner links keep a bottom-right stack, and the nav row stays on the top. It works, but the bio text collides slightly with the silhouette's head.
