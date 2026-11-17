# Portfolio patterns, organised by section

Source: 30 personal portfolios (see `sites.md`), each analysed at 1440px with a 390px mobile hero. Per-site raw notes are in `research/notes/<slug>.md`; screenshots in `research/screenshots/` (git-ignored).

Scores are D / C / U = design, creativity, usability (1-10), taken from the per-site notes. Top 5 per section were chosen by total score, preferring sections whose screenshots were actually verified and keeping techniques varied.

**How far to trust this** (read before building on it)
- Analysis ran headless with software WebGL. Heavy WebGL sites often never got past their loader, so some sections are scored from DOM text only. Sites affected most: Long Hoang, Tamara Laforest, Lionel Quellery, Guillaume Colombel (the saved PNGs for the last one are loader-only), Meer Mohsin (about/contact/mobile weak), Sadok Cervantes, Abhay Rohit.
- Library detection is heuristic. "Lenis", "GSAP" and "custom cursor" are marked confirmed only where the notes say so.
- Hover states were rarely tested. Micro-interactions below are only those actually observed in frames.
- These are patterns to learn from. Do not copy code, images, text or exact layouts.

---

## Hero

| # | Site | Screenshot | D/C/U | Techniques | Why it works |
|---|------|-----------|-------|------------|--------------|
| 1 | Denny Pratama | `research/screenshots/denny-pratama-hero.png` | 9/9/8 | WebGL 3D monogram (solid to wireframe), headline split diagonally around it, live GMT+7 clock, tiny bio and stats | The split headline ("I design it." / "I build it.") states the whole pitch and the object visualises it |
| 2 | Moiséz | `research/screenshots/moisez-hero.png` | 9/9/8 | GSAP, giant uppercase type with small project photos inline between words, SVG scribble underline, live clock + availability dot, grain | Type is the hero and the work peeks through it; status bar makes it feel like a working studio |
| 3 | Jaspreet Singh | `research/screenshots/jaspreet-singh-hero.png` | 9/9/8 | Loader with % counter, full-viewport WebGL scene, handwritten display font, grain/vignette | The image is the personality; self-deprecating tagline feels human |
| 4 | Arshawn Arbabi | `research/screenshots/arshawn-arbabi-hero.png` | 9/8/9 | WebGL liquid-chrome shader background, two-line giant name, availability + email bottom row | One strong image plus one giant word; answers "available? how do I reach them?" instantly |
| 5 | Jesper Landberg | `research/screenshots/jesper-landberg-hero.png` | 9/10/7 | Morphing pill loader, curved WebGL project screens over a perspective grid floor, dimmed off-centre cards | No hero text at all: the work is the hero. Slightly lower usability (nothing tells you what to do) |

Honourable mentions: Jorge Riera (condensed caps + portrait that opens its eyes, 9/9/8), Louise Jongen (name split into a 6x3 grid of video tiles, 9/10/7), Gianluca Boccia (mascot + pen line, 9/10/7).

Pattern summary: the strongest heroes have one dominant visual idea, one giant piece of type, and one live detail (clock, availability dot, counter). Weakest usability scores came from heroes with no stated purpose or long loaders.

---

## Navigation

| # | Site | Screenshot | D/C/U | Techniques | Why it works |
|---|------|-----------|-------|------------|--------------|
| 1 | Brandon Yasin | `research/screenshots/brandon-yasin-nav.png` | 9/10/8 | Menu scales the whole site down into three live "mini-screens" you click to zoom into; Lenis | The menu is a spatial map and doubles as the page transition; header stays constant for orientation |
| 2 | John Bolster | `research/screenshots/john-bolster-nav.png` | 9/8/9 | Wordmark + MENU toggle, full-screen overlay of six huge numbered items, persistent right-edge scroll rail with section number | Rail acts as progress bar and table of contents; menu is purely typographic |
| 3 | Yehor Herasymenko | `research/screenshots/yehor-herasymenko-nav.png` | 8/8/9 | Three fixed mono pills (Work / Profile / Connect), active one filled, corner HUD counters and clock | Tiny, always visible, no hamburger; instrument-panel feel |
| 4 | Maria Vasilyeva | `research/screenshots/maria-vasilyeva-nav.png` | 9/9/7 | Right-rail MENU, black overlay, four giant serif items with handwritten sublabels and scribble strikes | Themed renaming gives personality while handwritten sublabels keep it understandable |
| 5 | Matthis Garnier | `research/screenshots/matthis-garnier-nav.png` | 8/9/8 | OS-style start menu, menu bar and dock icons as three redundant paths | Familiar OS patterns make a gimmick instantly usable |

Pattern summary: nothing complicated beats a hamburger on usability, but the best sites make the menu itself memorable (spatial zoom, numbered overlay, always-visible pills) and keep contact reachable from everywhere.

---

## Projects showcase

| # | Site | Screenshot | D/C/U | Techniques | Why it works |
|---|------|-----------|-------|------------|--------------|
| 1 | Yehor Herasymenko | `research/screenshots/yehor-herasymenko-work.png` | 9/10/7 | Wheel-driven full-screen slides, WebGL liquid distortion between slides, slide counter + progress bar, title overlapping device mockup | The transition is the showpiece |
| 2 | Huy Phan | `research/screenshots/huy-phan-work.png` | 9/10/7 | Framer; tilted image deck (perspective transform), right-hand list with focused item crisp and others blurred, big blend-mode numeral over images | Depth without 3D libraries; the numeral-over-image overlap is a strong graphic move |
| 3 | Gianluca Boccia | `research/screenshots/gianluca-boccia-work.png` | 9/10/7 | GSAP ScrollTrigger scrubbing, per-project flat colour scenes, line-art pictograms redrawn by a pen hand, numbered index | Drawn pictograms instead of screenshots give one visual language; the pen links case to case |
| 4 | Jesper Landberg | `research/screenshots/jesper-landberg-work.png` | 9/10/7 | WebGL curved texture planes, drag/scroll carousel, Featured/Full filter | Live-feeling thumbnails and curved motion signal craft immediately |
| 5 | Abhay Rohit | `research/screenshots/abhay-rohit-work.png` | 9/10/7 | Three.js scenes, scroll-linked camera per project, in-scene browser chrome, tabs below the scene | Case studies feel like designed worlds; product UI sits inside the set. Heavy and partly unverified |

Practical alternative that scores well on usability: Giordano Betti's text-only "credit card" rows (category, serif title, runtime/year, roles) on a strict 4-column grid (`research/screenshots/giordano-betti-work.png`, 8/8/7) and Louise Jongen / Moiséz style inline-image headlines.

Pattern summary: top showcases give every project its own moment (full-screen slide, scene or colour) rather than a uniform grid, and always show an index (counter, list, numbers) so visitors know how much there is. Lowest usability scores (JLD'2ND 5, Meer Mohsin/Lionel Quellery 6) came from showcases that make the work hard to scan.

---

## About

| # | Site | Screenshot | D/C/U | Techniques | Why it works |
|---|------|-----------|-------|------------|--------------|
| 1 | Yehor Herasymenko | `research/screenshots/yehor-herasymenko-about.png` | 9/9/8 | Rotating glossy 3D letterform, pronunciation note in small caps, huge caps statement mixing sans with thin serif words and circled footnote numerals | Humour plus a hero object is memorable; sans/serif mix is a strong accent |
| 2 | Gianluca Boccia | `research/screenshots/gianluca-boccia-about.png` | 9/10/7 | Scroll-scrubbed career chapters, background colour shift per chapter, mascot acting each beat | Turns a CV into a story with emotional beats |
| 3 | Moiséz | `research/screenshots/moisez-about.png` | 9/10/7 | Pencil line drawing itself, draggable-letters kerning toy, dark/light inversion, blur-in text | Skills demonstrated through play instead of a list |
| 4 | Huy Phan | `research/screenshots/huy-phan-about.png` | 9/9/8 | Oversized numerals flanking an illustrated self-portrait, coral uppercase statements, four small credential link columns | Humour plus a dense credibility ledger (awards, talks, clients) |
| 5 | John Bolster | `research/screenshots/john-bolster-about.png` | 9/9/7 | Halftone cut-out portrait, outlined text on a curved path, starfield "What I do" stage | Personality without photo clutter; each stage changes mood but shares the line |

Pattern summary: the best About sections prove personality in one gesture (a toy, a story, an object) and still keep facts findable. Weak ones were single-frame or all vibe (Jorge Riera 6 usability, Luka Skhiladze 5).

---

## Contact / Footer

| # | Site | Screenshot | D/C/U | Techniques | Why it works |
|---|------|-----------|-------|------------|--------------|
| 1 | Moiséz | `research/screenshots/moisez-contact.png` | 9/10/8 | Giant three-line CTA, email + socials row, physics badges that fall and pile up over the type | Playful brand-coloured payoff while the CTA stays readable |
| 2 | John Bolster | `research/screenshots/john-bolster-contact.png` | 9/9/9 | Big headline with a parachuting figure and a raised letter, condensed email with "copy email" pill, mono footer links | Humour and one clear action; closes the page-long line motif |
| 3 | JLD'2ND | `research/screenshots/jld2nd-contact.png` | 9/9/9 | Pixel globe, big CTA, three links styled as the same pixel menu used in the hero | Consistent system, clear CTA hierarchy |
| 4 | Denny Pratama | `research/screenshots/denny-pratama-contact.png` | 9/8/9 | Blur-in closing question, full-width oversized email between hairlines, link columns, ember glow | The email itself is the hero of the footer |
| 5 | Jaspreet Singh | `research/screenshots/jaspreet-singh-contact.png` | 9/9/8 | Hero scene callback in a night version, big "Say hello", uppercase links with arrows | Bookends the page with the same imagery in a different light |

Pattern summary: end with one giant, copyable email or "talk" line, a short list of links, and a callback to the hero. Every top footer is both fun and unmissable.

---

## Micro-interactions

Only effects actually seen in screenshots or frames are listed.

| # | Pattern | Site(s) | Screenshot | Techniques | Why it works |
|---|---------|---------|-----------|------------|--------------|
| 1 | Live-system chrome: local clock, availability dot, counters, cursor x/y readout, multiplayer cursors | Moiséz, Huy Phan, Yehor Herasymenko, Errormade, Carter Ogunsola | `research/screenshots/moisez-hero.png`, `research/screenshots/errormade-about.png` | JS clocks, mono labels, presence toasts | Makes a static page feel alive and trustworthy for almost no cost |
| 2 | Text reveal: blur-to-sharp, scramble-to-text, typewriter | Denny Pratama, Moiséz, JLD'2ND | `research/screenshots/denny-pratama-contact.png`, `research/screenshots/jld2nd-about.png` | Staggered blur/opacity, random-glyph scramble | Cheap, high-impact entrance for headings |
| 3 | Scroll-linked world change: background shifts sunset to night, colour per chapter, one line that draws as you scroll | Jaspreet Singh, Gianluca Boccia, John Bolster | `research/screenshots/jaspreet-singh-contact.png`, `research/screenshots/john-bolster-contact.png` | Scroll progress mapped to scene/colour/path draw | Turns scrolling into storytelling |
| 4 | Focus/blur list and blend-mode numerals | Huy Phan | `research/screenshots/huy-phan-work.png` | Neighbours blur, counter ticks, difference blend on numeral | Clear focus state with a graphic payoff |
| 5 | Playful physical objects: draggable letters, falling badges, blinking-eyes portrait | Moiséz, Jorge Riera | `research/screenshots/moisez-contact.png` | Drag handlers, canvas physics, state swap on image | Rewards curiosity and is shareable |

Also seen: custom cursor ring (Brandon Yasin, `research/screenshots/brandon-yasin-hero.png`), WebGL displacement transitions (Yehor Herasymenko), card lift + brighten on hover (Brandon Yasin).

---

## Cross-site observations

- Almost every winner combines a smooth-scroll library (Lenis shows up repeatedly) with either WebGL or GSAP; Framer Motion appears on the Framer-built sites (Huy Phan, Jorge Riera).
- Typography trends: one tight grotesk or condensed face at huge size, paired with a mono for micro-labels; several add a handwritten or serif accent for personality.
- Weakest usability scores consistently come from long WebGL loaders, hidden scroll affordances and unlabeled icons. A "skip / view mode" escape hatch (Long Hoang, Tamara Laforest, Abhay Rohit's pause motion) fixes this.
- Mobile: only the hero was checked; several mobile captures were loader-only (Meer Mohsin, Long Hoang, Tamara Laforest), so mobile findings are thin.

---

## Top picks

### Best single idea per section
| Section | Top pick | Site | Why it fits a portfolio like yours |
|---------|----------|------|-----------------------------------|
| Hero | Headline split around one hero object, plus a live clock/availability detail | Denny Pratama (with Moiséz's live status bar) | Communicates what you do in one glance; cheap detail adds trust |
| Navigation | Menu that zooms the site out to a map of sections and doubles as the page transition | Brandon Yasin (fallback: John Bolster's numbered overlay with scroll rail) | Memorable, and the transition does double duty |
| Projects showcase | Full-screen project slides with a distortion transition and persistent index | Yehor Herasymenko (fallback: Huy Phan's tilted deck with focus list) | Each project gets a moment; showpiece effect is the transition |
| About | Demonstrate a skill through play instead of listing it | Moiséz (draggable kerning toy) | Proof of craft, more convincing than adjectives |
| Contact / Footer | Giant copyable email as the closing line, with a playful physical payoff | Moiséz + John Bolster ("copy email" pill) | One unmissable action, ends on a smile |
| Micro-interactions | Live-system chrome: clock, availability dot, counters | Moiséz / Huy Phan / Yehor Herasymenko | Almost free and instantly premium |

### Three overall visual directions to choose from

1. **Minimal / editorial.** Giant tight grotesk type, small project photos inlined between words, mono micro-labels, hairlines, one accent colour, live clock and availability dot. References: Moiséz, Denny Pratama, Arshawn Arbabi, Giordano Betti. Lowest risk for Lighthouse 90+ and mobile; best for a clean, credible first impression.
2. **Bold typography + motion storytelling.** Oversized headlines, a scroll that tells a story (colour or scene shifts per chapter, a line that draws as you scroll), blur/scramble text reveals, numbered overlay menu with a scroll rail. References: John Bolster, Gianluca Boccia, Jaspreet Singh, Huy Phan. Strong personality, moderate complexity, still achievable without heavy WebGL.
3. **3D / WebGL showcase.** The work is the hero: curved or distorted project screens, shader backgrounds, a 3D hero object, liquid slide transitions. References: Jesper Landberg, Yehor Herasymenko, Arshawn Arbabi, Abhay Rohit. Highest wow factor and Awwwards fit, but the biggest performance and mobile cost, so it needs lazy loading, a static fallback and a skip option. Your existing hero already uses a lazy WebGL layer, so this builds on what you have.

Suggested starting point (my opinion, not yet agreed with you): direction 1 as the base, borrowing the Brandon Yasin menu and Yehor-style slide transition from direction 3 only for the projects section.
