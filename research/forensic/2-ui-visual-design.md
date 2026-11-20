# 2 — UI / Visual Design
**Score: 6.5/10 (current) · Target 9/10**

Evidence: fresh live captures in `research/forensic/screenshots/` (`ui-1440-*`, `ui-390-*`: hero, feature, paper, about, contact). Source: `src/components/Sections/*.css`.

## Section scores
| Section | Design | Usability | Creativity | Content | Weighted |
|---|---|---|---|---|---|
| Header | 7.5 | 8 | 5.5 | 7 | 7.2 |
| Hero | 7.5 | 7.5 | 6.5 | 7 | 7.2 |
| Projects (features) | 7 | 7 | 5.5 | 6 | 6.6 |
| Paper index | 7 | 6.5 | 6 | 5 | 6.5 |
| About | 5.5 | 6.5 | 4 | 3.5 | 5.3 |
| Contact | 6 | 8 | 4.5 | 4 | 6.0 |
| **Overall** | **6.8** | **7.2** | **5.3** | **5.4** | **6.5** |

Weighted 40/30/20/10. Performance and accessibility are already at 100 (audit.md section 10); they lift Usability but not Design.

## Memorable idea
Only one: the serif-to-sans headline with project screenshots set inside the sentence (`ui-1440-1-hero.png`). It is a real idea, borrowed in spirit from Moiséz and Denny Pratama (patterns.md, Hero #1-2). It is not carried through: About, the features and Contact use no related visual device. The Contact thumbnail trio echoes it, but only as a small decoration. The rest is a clean ink-black, lime and serif page, which is the common 2026 look.

## Findings

### Critical
None. Nothing is broken.

### High
1. **The idea stops after the hero, so it reads as a template.** Seven features are one repeated 7/5 row, text left and image right, on a flat hairline (`ui-1440-7-feature.png`). Three have a different height (468, 491 and 602px at 1440), but the composition is the same. Fix: make the lead project (Weddesy) full-bleed at 100vw and 640px high, with the title overlapping the image edge (-0.35em offset, `mix-blend-mode: difference`). Flip the layout to 5/7 on features 2 and 4. Add `position: sticky; top: 96px` to the text column so it travels beside tall images (cf. Huy Phan, Gianluca Boccia: each project gets its own moment).
2. **About is the weakest section and the most template-like.** The headline "Crafting code with purpose." and the copy ("passion for clean code", "perfect cup of coffee") are stock. The portrait keeps a green cast on a black box (`ui-1440-4-about.png`); the four stats are shown in the same style as the hero. "10+ happy clients" sits beside "3 live client sites". The 1440 layout has an empty gutter between portrait and text. Fix: grade the portrait neutral with `filter: grayscale(.25) contrast(1.05)` on a `--coal` card; drop two stats; reduce the section to one 40px serif sentence; set the stats row in `--step-4`, the same scale as the hero.
3. **Hero thumbnails are cropped and dim.** At 1440 they are 0.86em high, so the third reads "ngineering e Future of obal" (`object-position: top` cuts the left side; `Hero.css:88-89`). The middle one is near-black and unreadable. At 390 they are about 28px high, too small to read as sites (`ui-390-1-hero.png`). Fix: use hand-cropped 8:5 thumbnails per project at `object-position: left top` with a legible headline; raise the 1200px+ height to `1em`; at 390 enlarge to 0.9em and let them wrap onto line 3.
4. **Contact is generic and its hierarchy is inverted.** "Let's build together." and "Have a project in mind… always open to interesting conversations" are default copy. The email (82px) outweighs the heading, and the right half of the page is empty apart from 3 tiny thumbnails (`ui-1440-5-contact.png`). Fix: use the same giant-email-as-hero pattern as Denny Pratama, but fill the width: the email at `clamp(3rem, 8.5vw, 8rem)` on a single line, the CTA row beneath, the thumbnails at 120px high. Replace the copy with one concrete line (see NEEDS MIDLAJ).

### Medium
5. **The paper chapter is a good change, but it is only 672px and mostly an index of three rows** (`ui-1440-6-paper.png`). The tonal shift reads as a banner, not a chapter. Mono tech text is 12px grey (`#6b6b66`-ish) on bone: raise it to 13px `#3a3a35`. Extend the chapter to include the full project list or the About and lead into Contact with a bone-to-black seam of 120px.
6. **Footer baseline bug**: "Back to top" sits 11px lower than "© 2026" (`ui-1440-5-contact.png`: y 838 vs 827; also at 390). Fix: `align-items: baseline` on the footer row (`Footer.css`, currently `center` at line 34 for the row) and `margin-left: auto`.
7. **No numerals, counters or index on features.** The audit chose to skip them, which is fine, but the page now lacks any wayfinding in a 5,000px project run. Add one sticky "03 / 07" counter at left edge (mono 12px, `--lime` on the current only), since this content is a real sequence.
8. **Lime is used well but only in the header, CTAs and progress**; elsewhere the page is greyscale. Fix: give each project its own tint on hover (Weddesy `#E0306B` etc.) as the audit proposed; it is not yet built.

### Low
9. Skills ledger below About is inert and uses the lowest-contrast greys (`ui-1440-4-about.png`, bottom).
10. WhatsApp button overlaps the feature image corner at 1440 (`ui-1440-7-feature.png`, y 830). It should fade while an image is behind it.
11. Type scale: only two display sizes are really used (82px and 41px); the jump between hero (about 130px) and section titles is large, with nothing between.

## What is strong
1. Hero headline: tight Instrument Serif against Geist, with images in the line, is the most authored element on the page.
2. The persistent header with the lime "Let's talk" pill and scroll hairline: clear, calm, well spaced.
3. Feature images: real, legible full-site captures with consistent 1440 widths and clean spacing.

## NEEDS MIDLAJ
- A real, specific one-line contact invitation and a reply time you will honour.
- A short true bio (about 40 words) to replace the About copy; which stats are real.
- Per-project role and outcome sentences, and a neutral-graded portrait or a new photo.
- Which one project should lead as the full-bleed hero (suggested: Weddesy).
