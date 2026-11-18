# 05 — Motion Design Specialist
**Score: 4/10**

## Top strengths (max 3)
1. One well-chosen expo-out curve (`--ease-out: cubic-bezier(0.16,1,0.3,1)`, index.css) is reused for the hero rise, menu stagger, image zoom and button lifts. It is a real seed of a motion language.
2. Hero entrance is a proper orchestrated moment: 1.1s rise, 0.12s stagger per line (Hero.css:67-68), after a 0.55s curtain (Preloader.css:10).
3. Accessibility and cost are handled: global reduced-motion kill switch (index.css:268), cursor gated by `(hover:hover) and (pointer:fine) and prefers-reduced-motion` (CustomCursor.jsx:5), rAF loop stops when settled (CustomCursor.jsx:34). Zero animation JS libraries, so Lighthouse mobile stays 92+.

## Problems
**Critical**
- **Nothing is scroll-driven.** After the hero, About, Projects and Contact appear static: no reveals, no parallax, no scroll-linked progress. The page reads as a flat document, not a story (compare 1440-00-fullpage.png; grep found only one IntersectionObserver, for scroll-spy, Navbar.jsx:17).

**High**
- **Isolated effects, not a system.** Eleven different durations (0.2, 0.25, 0.3, 0.35, 0.4, 0.55, 0.7, 0.8, 0.9, 1.1s) and five easings (`ease`, `ease-in`, `ease-out` var, preloader `cubic-bezier(.76,0,.24,1)`, WhatsApp overshoot `cubic-bezier(.175,.885,.32,1.275)`, WhatsAppButton.css:16-17). The overshoot spring is off-brand against the calm expo curve. Menu uses `ease` for opacity and `--ease-out` for transform in the same element (Navbar.css:166).
- **Project rows have no transition language.** Only a 0.9s image scale on hover (Projects.css:49) and a padding nudge on index rows (Projects.css:138). No row reveal, no image clip/mask reveal, no cursor "View" state tied to rows, no hover touch equivalent on mobile.
- **Heavy preloader for little payoff.** 0.75s curtain delays LCP-visible content on every load and is not tied to real asset loading; it plays on every visit (Preloader.css:10-19).

**Medium**
- **No text/number effects.** About stats (4 numbers) are static: a prime counter-up/odometer slot. Section titles (`.section-title`) do not reveal; the huge serif email in Contact is the most dramatic type on the page and just sits there.
- **No section transitions.** Hard cuts between sections; no pinned or colour/scale handover; native `scroll-behavior: smooth` (index.css:104) is the only scroll feel, with no inertia.
- **Reduced-motion rule is blunt.** `0.001ms !important` still leaves elements in end-state (fine) but also strips the menu fade; the pulse `whatsapp-pulse 2s infinite` (WhatsAppButton.css:48) is an always-on attention loop that competes with content.

**Low**
- Hover transitions are inconsistent (0.2 vs 0.25s on near-identical link underlines: Footer.css:23, Contact.css:36, Hero.css:134).
- Nav scroll-spy label swaps with no transition (opacity only, Navbar.css:49).

## Specific fixes

### Proposed motion system
- **Easing:** `--ease-out: cubic-bezier(0.16,1,0.3,1)` for everything entering/revealing; `--ease-in-out: cubic-bezier(0.76,0,0.24,1)` only for large moves (curtain, menu panel, pinned handovers). Delete `ease`, `ease-in`, and the WhatsApp overshoot (use ease-out).
- **Durations (tokens):** `--d-1: 150ms` (colour/underline hover), `--d-2: 300ms` (buttons, menu items, cursor), `--d-3: 600ms` (reveals, image zoom hover; reduce 0.9s to 0.7s), `--d-4: 1000ms` (hero headline, curtain-class moments). Replace all 0.2/0.25 with 150ms/300ms.
- **Stagger:** 60ms for lists/menu/stats; 90ms for headline words/lines; max total stagger 450ms.
- **Reveal rule:** one reveal only: clip/translate 24px up + opacity, 600ms ease-out, trigger at 15% in view, once. Apply to section titles (line mask, `clip-path`/overflow hidden, y 105% to 0), project rows (image `clip-path: inset(8% 0 0 0)` to `inset(0)` + scale 1.08 to 1 over 1000ms), About portrait. Do NOT fade-slide every paragraph (generic).
- **Scroll-linked rules:** (a) 1 progress bar or hero-parallax (image translateY -6% over the row's travel); (b) About stats count-up over 1200ms on first view; (c) Contact email letter-spacing/clip reveal; (d) per-row image parallax with `animation-timeline: view()`, range `cover 0% cover 100%`.
- **Libraries:** 
  1. **Native CSS first:** `animation-timeline: view()` + `animation-range` for reveals, row parallax and progress bar (`scroll()`). Support: Chrome/Edge 115+, Safari 26, Firefox now default-on per web.dev (Firefox 159, verify on caniuse). Wrap in `@supports (animation-timeline: view())` with a static fallback (content visible, no motion). 0 KB.
  2. **Lenis** (~3 KB gzip, MIT; verify current version, v1.x) only if inertial scroll is wanted; disable on touch and reduced motion. Optional; native CSS covers the essentials.
  3. **Motion (motion.dev) `animate`/`inView`** (~2-4 KB gzip hybrid build) for the count-up and the menu if JS sequencing is needed.
  4. **GSAP + ScrollTrigger + SplitText** are now free (Webflow acquisition, "No Charge" licence, SplitText included, 2025) but ~30-40 KB gzip combined; recommend only if pinned horizontal storytelling or char-level text is required. Not needed for a Lighthouse-90 target.
- **Preloader:** shorten to 600ms total, play once per session (`sessionStorage`), keep curtain on `--ease-in-out`.
- **Reduced motion:** keep the kill switch, but also set `animation-timeline: none` reveals to final state, hide the WhatsApp pulse, and skip Lenis/count-up (show final numbers).
- **Mobile:** disable parallax and pinning under 900px; reveals only (transform/opacity/clip-path, composited), no scroll listeners.

## Patterns referenced (from patterns.md)
Section order and wording follow the Hero / Projects showcase / Micro-interactions headings of `research/patterns.md`: staggered line-mask headline reveals (common in the 30-site library), image clip-path reveals plus parallax on project rows, scroll-linked count-up stats on About, and a single orchestrated entrance rather than per-element fades. Citations are at pattern level; I did not re-verify per-site notes in `research/notes/`.
