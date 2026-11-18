# 04 — Layout & Grid Specialist
**Score: 5/10**

Measured with Playwright against localhost:5175 at 2560/1920/1440/768/390 (no horizontal overflow at any width).

## Top strengths (max 3)
1. Disciplined 1320px content column on desktop: About, Projects, Contact and (at 1440) Hero/Footer share one left edge (x=60 at 1440, x=24 at 390). One `--pad-x` token drives the gutter.
2. A real 12-col grid (`repeat(12,1fr)`, 32px column gap) in About (About.css:11) and Projects features (Projects.css:30) with a 7/5 split, and a hairline-separated index with its own 4-track row grid (Projects.css:131). Rows are scannable.
3. Section padding is identical across About/Projects/Contact (`clamp(80px,11vw,150px)`): 150px at 1440, 84px at 768, 80px at 390. Predictable rhythm.

## Problems

**Critical**
- None.

**High**
- **Ultrawide breaks the shared grid.** Hero has no max-width (Hero.css:10): at 1920 its content spans x=60..1860 while About/Projects/Contact sit at 300..1620; at 2560 hero is 60..2500 vs sections 620..1940. The headline and the first section below it start at different left edges (170px/560px apart). Footer (`.footer-inner` max-width 1440 + gutter, Footer.css:5) lands at x=240 at 1920 and 560 at 2560, a third edge. Evidence: measured, no screenshot at those widths. Also the 1440px cap includes padding, so "1440" is really a 1320 column; it is mislabelled.
- **Same composition repeated every section.** About, Projects head, Contact are all: left-aligned heading, left-aligned 52ch paragraph, content below, same 150px padding, same hairline divider. Only the feature rows alternate nothing: image is always left at 7 cols, text always right (Projects.css:30ff, 1440-05/06/07). The page reads as one long list, with no asymmetric break, no full-bleed moment, no oversized numeral or offset. This is the main gap against award sites (see patterns below).
- **768 About is half-dead.** At <=900px About collapses to one column (About.css:120-141) but the portrait is capped at 320px, so the entire right 55% of the first screen is empty (768-02-about.png), then the stats fall in a 2-col grid whose second column sits at x=396, aligned to nothing else. Tablet gets the phone layout stretched, not a tablet layout.

**Medium**
- **Hero third thumbnail orphaned at 768** (768-01-hero.png): the headline line 3 fills the width, so the inline pill wraps onto its own row at x=50, looking like a bug. Mobile fix only hides the middle one at <=600 (Hero.css:161).
- **Hero vertical dead zone at 768/390:** `min-height:100svh` with 120px top and 96px bottom pad leaves ~160px of empty space between the headline and the hairline (768-01-hero.png) and the intro and CTA sit at the very bottom; hero is 900 tall at 768 and the rule floats.
- **Spacing scale is scattered, not tokenised.** Roughly 25 distinct values: 132, 120, 96, 56, 40, 28, 24, 22 px plus clamps `(80,11vw,150)`, `(64,9vw,120)`, `(48,7vw,96)`, `(40,6vw,80)`, `(40,6vw,72)`, `(64,9vw,120)` repeated in About/Projects/Contact/Hero with no `--space-*` tokens (only type and `--pad-x` are tokenised, index.css:70-83). Gaps 8/12/16/24/32/40/64 are mixed freely.
- **Feature text alignment is inconsistent.** `align-items:end` on features (Projects.css:32) yet at 1440 the text block reads vertically centred beside the image (1440-05); when copy is shorter than the image, the title floats mid-image rather than aligning to the image top or baseline. Weak anchoring.

**Low**
- Contact bottom padding (120px) differs from top (150px) and footer begins directly with no breathing room (1440-10); About ends 150px then 120px margin before the ledger (About.css:76), so About has a 270px gap before its ledger vs 150px between others.
- Index row columns `1.1fr 1.7fr 1fr 24px` at 768 collapse to 2 columns and lose the table feel.

## Specific fixes
1. Add one shared wrapper: `.wrap{width:min(100% - 2*var(--pad-x), 1320px);margin-inline:auto}` and use it in Hero, Footer, sections. Drop the 1440 max-width on sections. At >=1920 consider `--pad-x` fixed 60px and a 1560px max so the layout feels bigger without stretching.
2. Spacing tokens: `--space-section: clamp(88px, 10vw, 144px)`; `--space-block: clamp(48px, 6vw, 88px)`; `--space-gap: 32px`; `--space-sm: 16px`; `--space-xs: 8px`. Replace the five section clamps with these two. Use 144/88/48 consistently.
3. About at 768: keep two columns down to 700px: portrait `grid-column:1/6` (about 280px), text `grid-column:6/13`, stats full width in 4 columns at >=768 (no 2-col). Gap 32px. Below 700 go single column with portrait 100% width max 360px.
4. Vary composition: make Weddesy full-width hero feature (image spans 1/13, text overlapped bottom-left at -48px margin on a `--card` panel), alternate others 7/5 then 5/7 (`order:2` on `:nth-child(even)`) with 1px hairline shifts; push About heading to cols 1/6 with an oversized numeral (step-5, 10rem, muted 12% opacity) offset -24px. Add one full-bleed band (ledger or marquee) to break the 1320 rhythm.
5. Hero at <=900: set `min-height:auto; padding:112px var(--pad-x) 56px`; use `gap:40px` between status row, headline, intro. Hide thumbnails 2 and 3 at <=900 (or `white-space:nowrap` the line and reduce thumb to 0.7em height) so no orphan.
6. Features: `align-items:start`, text block `position:sticky;top:120px` with `padding-top:8px` so title aligns to image top edge; transition none.
7. Contact: pad `var(--space-section) var(--pad-x) var(--space-block)`; add 48px `margin-top` to footer.

## Patterns referenced (from patterns.md)
- Giordano Betti's strict 4-column text rows (Projects showcase): validates the index grid; hold the 4-col alignment at tablet instead of collapsing to 2.
- Huy Phan oversized numerals flanking the portrait (About) and numeral-over-image overlap (Projects): the missing asymmetric break to cure repetition.
- Gianluca Boccia / Yehor Herasymenko "each project gets its own moment, not a uniform grid" (Projects pattern summary): vary feature layout and scale instead of one 7/5 row repeated six times.
- Denny Pratama headline split around a hero object (Hero): inline thumbnails should stay on line and not wrap at tablet.
