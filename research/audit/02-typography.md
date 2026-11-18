# 02 — Typography Specialist
**Score: 6/10**

Measured with Playwright at 1440/768/390 (computed styles) and checked against the screenshots.

## Top strengths (max 3)
1. **Hero headline is the best type on the site.** 134px Instrument Serif at 0.95 line-height and -0.02em tracking, with inline pill thumbnails, is confident and well-tightened (`1440-01-hero.png`). The scale is fluid and clamp-based (`index.css:75-82`).
2. **Body text is well set.** Geist at 17px with 1.55-1.65 line-height. Measured measure is roughly 60-65 characters (about 586px at 17px), so it is comfortable. Muted `#9b9b9b` passes contrast.
3. **Restrained font system.** Three self-hosted latin subsets, `font-display: swap`, and the two first-screen fonts preloaded (`index.html:44-45`). The live clock uses `tabular-nums` (`Hero.css:44`), a small detail done right.

## Problems
**Critical**
- None.

**High**
1. **Hierarchy inversion in Contact.** `.contact-title` "Let's build together." is 41.6px, while the email below it is 82px and the About/Projects `.section-title` is 68.8px (`1440-09-contact.png`). The closing statement is the quietest heading on the page, and it is a different step from every other section heading. Fix at `Contact.css` (title size) versus `index.css:233`.
2. **The serif-to-sans switch looks arbitrary.** Line 3 is Geist at 115px with -4.6px tracking (-0.04em) against serif lines at 134px, so the cap-height and x-height jump (`1440-01-hero.png`). Nothing in the sentence's meaning justifies the switch ("deployed server" is not more technical than "first sketch"), so it reads as an unexplained font change rather than a pairing. The sans line is also optically heavier and larger-looking than the serif lines above it.
3. **Mobile hero breaks badly.** At 390px, "server." is orphaned on its own line, followed by a thumbnail (`390-01-hero.png`). The result is four lines with a widow. At 768px the third thumbnail wraps (also noted in `00-current-state.md`). No `text-wrap: balance` is used anywhere. Grep found zero uses.
4. **Display type is large but not expressive.** The only typographic play is the hero's serif/sans switch. Italics are never used, although Instrument Serif ships a true italic that is not loaded. All other headings are plain upright 400 at one tracking value. The menu at 110px (`Navbar.css:186`) is the only other moment of scale. Compare Moiséz (giant type with inline imagery) and Yehor Herasymenko (sans/serif mix with thin serif words), which use contrast within one line.

**Medium**
5. **Orphaned heading sizes.** `.capabilities-title` and `.index-title` render at 25.5px with line-height **1.6** (inherited from body), unlike every other heading at 1.0-1.05. The "More projects" and "What I work with" subheads therefore sit with extra air and weak presence. They are serif at body-ish size, so the hierarchy between them and the `dt` group names (also 25.5px at 1.1) is flat.
6. **Heading line-height 1.0 plus negative tracking at small sizes.** At 390px `.contact-title` is 28px at 1.0 with -0.015em tracking and `.feature-title` is 40px at 1.0. Descenders and ascenders will touch if any title wraps to two lines. The feature title is also relatively small against the hero (68.8px vs 134px with no middle step).
7. **Mono usage is mostly decoration.** DM Mono carries only the clock, tech lists, and menu numerals at 12.5-12.8px (`Projects.css:81,171`, `Navbar.css:194`). Tech stacks are the one honest use. "01/02/03" in the menu is acceptable because it is a sequence, but the same mono face on the skip link and clock adds a third voice for ~1% of the text. That costs two extra font files (400 and 500) for very little. Also, the 12.5px mono at muted grey is the smallest text on the site.
8. **Single serif weight and no fallback metrics.** The serif is 400 only (no italic) and the fallback is Georgia, whose metrics differ a lot from Instrument Serif's narrow condensed shapes. There is no `size-adjust`, `ascent-override`, or `@font-face` fallback face (`index.css:63-65`), so with `swap` the 134px hero will reflow when the font arrives. Preload mitigates this, but the preloader curtain currently hides most of it; if the preloader is removed the shift will show.
9. **Menu entry reads as the loudest type on the site** (110px, `1440-11-menu-open.png`), louder than any section heading, which is fine for a menu but inconsistent with the page scale.

**Low**
10. Hero `hero-desc` at 17px is only slightly larger than 15.2px row descriptions; the body scale is too compressed (13.8 / 15.2 / 17), so labels, descriptions and body feel the same.
11. `btn-primary` uses 0.01em positive tracking at 600 while other UI is weight 500; two UI weights with no reason.
12. No `font-optical-sizing`, `font-feature-settings` (`'ss01'`, `'tnum'` on stats), `text-wrap: pretty` for paragraphs, or `hanging-punctuation`. The stats use serif numerals at 68.8px with proportional figures, so they will not align if counts change.

## Specific fixes
- **Contact title:** use `var(--step-3)` (clamp 2.5 to 4.5rem) with `line-height: 0.95`; keep the email at `--step-4` but cap at 6rem so title and email read as one two-line statement.
- **Hero line 3:** either make it Instrument Serif italic (same 134px, -0.025em) so the switch is roman to italic within one voice, or drop to a single family. If the sans line stays, set it to `font-size: 0.82em; font-weight: 300; letter-spacing: -0.035em; line-height: 1.05` and optically align baselines, with the second serif line carrying the italic.
- **Add `text-wrap: balance`** to `h1,h2,h3,.hero-line` and `text-wrap: pretty` to `p`. At 390px wrap hero lines at 11-13 characters and move the final thumbnail onto line 3 before "server." so there is no one-word line.
- **Load Instrument Serif Italic 400 (latin, ~20 KB woff2)** and use it for: the stat numerals' units, project kind labels, and the hero's second line. Use italic for whole phrases, not single accent words.
- **Fix small serif headings:** `.capabilities-title, .index-title { font-size: var(--step-1); line-height: 1.15; letter-spacing: -0.01em; }`.
- **Scale:** introduce a clear mid-step. Feature titles `clamp(2.75rem, 1.8rem + 3.2vw, 5.25rem)`; section titles `--step-4` (7rem max) so that titles are 2x body-to-display jumps.
- **Fallback metrics:** add `@font-face { font-family: 'Instrument Serif Fallback'; src: local('Times New Roman'); size-adjust: 88%; ascent-override: 95%; descent-override: 25%; line-gap-override: 0%; }` and similarly for Geist with local Arial (`size-adjust: 102%`), then put them second in the stacks. Verify with CLS in Lighthouse after removing the preloader's mask.
- **Numerals:** `.stat-number { font-variant-numeric: lining-nums tabular-nums; }`.
- **Mono:** raise to 13px and use `--ink-2` (not muted); keep it only for the clock and tech lists, and drop DM Mono 500 if unused (saves one request).
- **Motion tie-in:** animate the hero italic line with a 0.9s `cubic-bezier(0.16, 1, 0.3, 1)` mask reveal on `font-variation` is not possible with a static serif; use a 0.12s stagger already present and extend it to `.section-title` lines (translateY 100% to 0, 0.9s).

## Patterns referenced (from patterns.md)
- Moiséz: giant type with small project photos inline between words (already in the hero; extend contrast within the line).
- Yehor Herasymenko: sans/serif mix with thin serif words in an about statement; a model for justified, meaning-driven font switching.
- Giordano Betti: serif titles in strict text rows; a model for the "More projects" index.
- Maria Vasilyeva: giant serif menu with small labels, similar to the current menu (keep, but tie scale to the page).
- Text reveal (Denny Pratama, Moiséz): staggered line reveals for section titles.
- Typography trends (patterns.md section ~108): mono for micro-labels only, tight display at huge size.
