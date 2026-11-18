# 01 — Visual Design Lead
**Score: 5/10**

Competent, clean, fast and legible. It is not yet memorable. At 1440 it reads as a well-made 2024 "dark editorial dev portfolio"; nothing would make a juror remember it a day later.

## Top strengths (max 3)
1. **The hero headline.** Instrument Serif at about 150px, two serif lines then a Geist line, creates a real typographic moment (1440-01-hero.png). The serif-to-grotesk switch mid-sentence is the most authored thing on the site.
2. **Restraint and legibility.** Consistent gutters, hairline structure, lime used only for status dot, wordmark period and the primary CTA. Dark UI never feels cluttered; the project rows (1440-05-feature-weddesy.png) are clean and scannable.
3. **Live details and a strong contact close.** Availability dot, India clock, copy-email and the giant serif email give a "working studio" feel (Moiséz / Denny Pratama patterns).

## Problems
**Critical**
- **No single memorable idea.** The hero thumbnails are the only candidate and they are too weak (see High). Everything else is hero, portrait+bio, list, big email: the standard order. Evidence: 1440-00-fullpage.png reads as one repeated block rhythm from top to bottom.
- **Identity is a documented 2026 default.** Near-black plus one acid-lime accent plus high-contrast serif plus DM Mono for small data is exactly the generic "AI-built dev portfolio" cluster. Lime appears only as a tiny dot and one button, so it is not even owned. Evidence: 1440-01-hero.png, token list in 00-current-state.md.

**High**
- **Hero thumbnails do not land.** The pills are about 150x95px, dark, low-contrast and tucked at line ends, so they read as dim smudges rather than work peeking through type (1440-01-hero.png). The third one sits flush against the period and the line 3 pill is cropped to illegible text ("gineering e Future of"). At 768 the third pill drops alone onto a fourth line, which looks like a bug (768-01-hero.png). Moiséz makes the photos legible, high-key and tall enough to read as content.
- **Hero is empty and bottom-heavy.** About 150px of dead black between the status row and headline and again below the headline; the CTA row floats at the bottom right next to the WhatsApp FAB, which collides with it visually (1440-01-hero.png, 1440-09-contact.png).
- **About looks templated.** "Crafting code with purpose." and the "coffee" bio are stock copy; the portrait is a plain rectangle with a stray star glyph; the stat row (1.5 / 5 / 10+ / 3) is the default SaaS stat strip (1440-02-about.png). The portrait is the one personal asset and it is treated like a placeholder.
- **Project section has no pacing.** Six identical 7/5 rows, same image treatment, same alignment (1440-00-fullpage.png). No project gets its own moment, no index numerals, no colour change (Huy Phan / Gianluca Boccia patterns).

**Medium**
- Contact is left-aligned with a huge empty right half; the email at about 82px is the headline but the heading above it is small and quiet, so the hierarchy is inverted (1440-09-contact.png). No hero callback.
- Capabilities ledger (1440-03-capabilities.png) is tidy but visually inert; it is a table, not a design moment.
- Typography is used on one axis only: size. No tracking, weight or width play; DM Mono appears so rarely that it feels like decoration.
- Index rows (1440-08-index.png) have no imagery, so the three weakest projects sit visually flat compared with the six above.

**Low**
- Wordmark "Midlaj." is the only brand mark; no favicon-level identity, no grain or texture anywhere, so large black areas feel digital and flat.
- WhatsApp green FAB is the loudest colour on the page and clashes with the lime accent (every screenshot).

## Specific fixes
1. **Choose one hero object and commit.** Make the thumbnails big: height 1.0x the cap-height of the line (about 0.8em, roughly 120px tall x 200px wide at 1440), 12px radius instead of a full pill, full-colour with no dimming, `object-fit: cover` on a cropped, high-contrast detail of each site (not the whole screenshot). Reveal with a 0.9s `cubic-bezier(0.16,1,0.3,1)` clip-path `inset(0 100% 0 0)` to `inset(0)` after the text lands, then a 4s slow slide between 2 to 3 project images per pill. At 768 and below, keep all three but let them be 0.7em and force `white-space: nowrap` per line via `clamp()` font sizes so the third never orphans.
2. **Give lime a job.** Use it as a full-bleed block: for example the Projects hover state where the whole row background floods lime (`#c8f250`) with `#080808` text over 350ms, or an inverted lime contact section. Alternatively drop lime for an owned hue drawn from the work (Weddesy rose `#e8386d`). Pick one; do not keep a decorative dot.
3. **Pull the hero together.** Cut hero padding so headline sits at about 38% viewport height; move the CTA row directly under the headline at 32px gap; move WhatsApp into the contact/nav rather than a fixed FAB, or shrink it to 44px and colour it `#e8e8e8` on `#141414`.
4. **Rework About into one gesture.** Replace the headline with a specific sentence in the first person, set at `--step-4` serif with one Geist phrase mid-line (echoing the hero). Treat the portrait as an object: duotone to `#0b1a10` with lime rim, or reveal on hover to a colour version over 500ms. Cut stats to 2 honest ones or fold them into the clock-style mono line.
5. **Project rows with identity.** Add a 120px serif numeral (`opacity .12`, `mix-blend-mode: difference`) overlapping each image corner (Huy Phan), alternate image side every row, and give each row a 1.04 scale-in on scroll over 900ms. Add 3 screenshots or generated cover cards for the two imageless index projects.
6. **Contact payoff.** Make the heading and email the same scale: "Let's build together." at about 140px, email at 64px on one line, right-aligned detail column with socials stacked. Echo the hero by reusing the three thumbnails at 60px in a row beside the email. Add a faint 3% grain overlay (`opacity .04` SVG noise) site-wide to remove the flat-black feel.
7. **Type system.** Add one tracking rule: serif display at `letter-spacing: -0.035em`, Geist body at `0`; use DM Mono for every status, tag and index label consistently at 12px so it reads as a system.

## Patterns referenced (from patterns.md)
- **Moiséz**: hero with inline project photos, live clock and availability bar (the existing idea, executed too timidly); giant CTA and physical payoff in contact.
- **Denny Pratama**: headline split around a single hero object; full-width oversized email between hairlines.
- **Huy Phan**: blend-mode numeral over project images; focus/blur list.
- **Gianluca Boccia**: per-project colour scenes and numbered index (project pacing).
- **John Bolster**: copy-email pill and scroll rail; one line motif tying the page together.
- **Jaspreet Singh**: hero callback at the contact end.
- Direction 1 (minimal/editorial) is correctly the base, but at present it stops at "clean". Site-of-the-Day needs one signature interaction (for example the hero pills scrubbing into the project rows as you scroll) plus scroll-driven pacing, neither of which exists today.
