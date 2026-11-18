# 03 — Colour & Brand Specialist
**Score: 5/10**

Measured WCAG 2.x contrast (script in scratchpad): on #080808 / #141414 — text #e8e8e8 16.35 / 15.04; ink #f4f4ef 18.15 / 16.70; ink-2 (72% ink, blended) 9.42 / 8.96; muted #9b9b9b 7.21 / 6.63; accent #c8f250 15.52 / 14.28; black button text on lime 16.27. Every text pair passes AAA. Hairlines are 1.32:1 (--line-strong .12) and 1.18:1 (--line .08): decorative, fine, but faint on cheap monitors. Accessibility is not the problem. Brand is.

## Top strengths (max 3)
1. Disciplined, fully accessible tonal scale: only 2 greys of text plus ink, all AAA, one hue family (warm off-white #f4f4ef rather than pure white).
2. Restraint: lime appears as the hero CTA, status dot, wordmark full stop, hover/focus states and cursor. Nothing is tinted lime by default, so the page stays calm.
3. Project screenshots are framed neutrally (no borders or tints fighting them); Weddesy pink, Tayoki white, Team N crimson all read clearly against the black (`1440-05-feature-weddesy.png`, `1440-07-feature-makeovers.png`).

## Problems (ranked)
**Critical**
- None that break function. The biggest issue is identity (see High).

**High**
- Palette is the stock "dev portfolio" default: near-black plus single acid-lime, with Instrument Serif + Geist + mono. It is tasteful but indistinguishable from a hundred 2024-26 templates, and nothing in it says "design + build" or Kochi/India/UAE. `1440-01-hero.png`.
- The accent is nearly invisible after the hero. About, capabilities and all project rows (`1440-02-about.png`, `1440-05-feature-weddesy.png`) contain zero lime at rest; "Client work" (`Projects.css:60`) is the lone stray. The brand colour does not carry a rhythm down the page, so the site reads as grey-on-black after the first screen. Restraint has tipped into absence.
- Competing greens: the WhatsApp button (#25D366-ish with green glow) sits on every screen next to the lime CTA (`1440-01-hero.png` bottom right) and the portrait has a dark-green grade with a green rim. Three unrelated greens (lime, WhatsApp, teal portrait) muddy the single-accent story.
- Mood contradicts the claim: a pure-black, all-dark scroll is "developer terminal". "Design" is only evidenced by type. No second tone, no light moment, no tonal change between sections (patterns: Gianluca Boccia colour shifts per chapter, Moiséz dark/light inversion).

**Medium**
- Portrait treatment: green-tinted dark photo on #080808 is moody but the frame edge dissolves into the bg (`1440-02-about.png`); the rim light is teal-green, not lime, so it does not tie to the accent. The photo also flattens the person's warmth.
- Card #141414 and --surface #0f0f0f are barely distinguishable from #080808 (≈1.1:1), so there is effectively no surface hierarchy; depth relies only on 1.18-1.32:1 hairlines.
- Hardcoded values bypass tokens: `#333`/`#555` (`index.css:96,100`), `#000` (`index.css:172,210`), raw rgba lime in 4 places (`Hero.css:38`, `index.css:221`, `CustomCursor.css:50`). A palette change needs a find/replace, not a token edit.
- Lime hover glow `box-shadow 0 10px 36px rgba(200,242,80,.35)` (`index.css:221`) is a template-y neon tell.

**Low**
- Mono tech lists are #9b9b9b at small size on black: passes (7.2) but visually the weakest text on the page.
- Project screenshots have no consistent frame (radius/matte), so mixed light/dark shots feel pasted: Tayoki and Team N are bright white slabs on black.

## Specific fixes
**Proposed palette (one system, ~6 named values)**
- `--ink-black #0A0A09` — page base (slightly warm, not neutral #080808).
- `--coal #141412` — raised surfaces/index rows; plus `--coal-2 #1D1D1A` for hover (bump surface step from 1.1 to ~1.25:1).
- `--bone #EFEBE1` — paper section and primary text on dark (warm paper, not cream-beige cliché: keep it slightly cool-green leaning, i.e. `#ECEBE3`).
- `--ink-on-paper #121210` — text on bone.
- `--lime #C8F250` — keep as the *action* accent only (CTA, focus ring, availability dot, cursor). Keep it: it is the one memorable signal and already tested at 15:1.
- `--ember #FF5A36` — second tone, used ONLY on bone sections and for one-off "live"/"client work" tags and the footer; contrast on #ECEBE3 is ~3.0:1 so use for large text/graphics only, never body (use `#D9411E` ≈4.3:1 for small text on bone).
Decision: change the dark base only slightly, keep lime, add ONE paper section and ONE warm second tone. Do not swap the accent: lime is fine, the problem is distribution, not hue.

**Distribution rules**
1. Invert the Projects index ("More projects", 3 rows) or the Contact section to `--bone` with `--ink-on-paper` text: a single dark→paper→dark transition gives a "chapter" shift. Use a 0.5s `background-color` change on scroll via IntersectionObserver (`cubic-bezier(0.16,1,0.3,1)`); keep `prefers-reduced-motion` instant.
2. Lime at rest in 3 more places: stat numerals' units (the "+" in 10+), a 2px lime progress hairline under the header (scroll progress), and the project number/index. Maximum one lime element per viewport apart from the CTA.
3. Portrait: regrade to neutral-warm (remove green cast, apply `mix-blend-mode`-free CSS: `filter: grayscale(.2) contrast(1.05)`), place on a `--coal` card with a 1px lime-tinted rim (`rgba(200,242,80,.35)`) only at hover. Rim light then echoes the accent instead of teal.
4. WhatsApp button: restyle to `--coal-2` fill, 1px hairline, bone icon; show the WhatsApp green only on hover. Removes the third green.
5. Screenshot frames: uniform `border-radius: 14px`, `outline: 1px solid rgba(255,255,255,.10)`, and `box-shadow: 0 30px 80px -30px rgba(0,0,0,.8)`. Wrap light screenshots in a `--coal` matte with 12px padding so white slabs do not glare; hover tint to each project's own dominant colour (store `data.tint`, e.g. Weddesy #E0306B) at 8% opacity behind the card: per-project colour scenes.
6. Tokenise: replace `#333,#555,#000` with `--grey-700 #2A2A27`, `--grey-600 #4A4A46`, `--on-lime #0A0A09`, and `--lime-rgb: 200 242 80` for alpha uses. Hairline raise: `--line-strong: rgba(255,255,255,.16)` (≈1.7:1).
7. Drop the neon hover glow; use `transform: translateY(-2px)` and a bone-to-lime fill swap over 240ms.

## Patterns referenced (from patterns.md)
- Scroll-linked world change / colour per chapter: Gianluca Boccia, Jaspreet Singh (micro-interaction #3).
- Dark/light inversion: Moiséz (About #3).
- Per-project colour scenes: Gianluca Boccia (Projects #3).
- Minimal/editorial direction with one accent: Denny Pratama, Giordano Betti, Arshawn Arbabi (visual direction 1). The site is there already; the gap is the "second tone" that those sites use (coral at Huy Phan) to escape the single-accent default.
- Brand-coloured payoff at the footer: Moiséz contact.
