# 06 — Interaction & Micro-interaction Specialist
**Score: 5/10**

Method: full read of every `:hover/:focus/:active/transition/cursor` rule and the cursor, Projects and Contact components. I did not run Playwright hover captures; all findings are from source, so measured feel (timing, repaint) is unverified.

## Top strengths (max 3)
1. Solid, accessible baseline. Global `:focus-visible` lime ring (`index.css:185`), hover gated behind `(hover: hover)` everywhere, reduced-motion kill switch (`index.css:268`), skip link, `role="status"` on copy feedback (`Contact.jsx:64`).
2. The menu list has real craft: focus-dim of siblings plus a `translateX(0.18em)` label nudge and a "you are here" dot (`Navbar.css:218-232`).
3. The custom cursor is performance-literate: rAF stops when settled, transform only, off on touch/reduced motion (`CustomCursor.jsx:32-34`, `:5`).

## Problems (ranked)

**Critical**
- None that break function.

**High**
- **No `:active` state anywhere.** Grep finds zero `:active` rules. The primary button, copy button, menu pill and rows give no press response. Nothing feels tactile. Evidence: `index.css:227-235` (hover only), `Contact.css:63`.
- **Cursor adds almost no value.** It is one binary state: ring scales 1.65x on any `a, button, input, textarea, label` (`CustomCursor.jsx:6,46`). No labels ("View", "Copy", "Open"), no distinction between a project image, a link and the menu, and it hides the native cursor (`index.css:135`, `cursor:none`) while giving less information than the native pointer. The dot uses `mix-blend-mode: difference` on lime, so it renders pinkish/purple over light areas, off-brand. Awwwards-level cursors change meaning per target (Brandon Yasin ring is the only cursor reference in patterns.md, and this matches it, not beats it).
- **Project cards are only partly clickable.** The feature image link is `aria-hidden`, `tabindex=-1` (`Projects.jsx:37-44`), fine for a11y, but the only mouse affordance is a 2.5% image zoom (`Projects.css:104`); there is no label, no arrow, no cursor change beyond the generic ring, and the title/description are not links. The visitor must find the small "View live site" underline. Index rows are good (full-row link, arrow nudge, padding slide).

**Medium**
- **Copy-email feedback is text-swap only.** Label flips "Copy email" to "Copied" (`Contact.jsx:43`), no icon, colour, or width-stable animation, so the pill resizes (layout jump) and nothing happens at the giant email itself. This is the page's key conversion moment and has no delight.
- **Hero thumbnails and primary CTA are inert beyond a 2px lift.** Hero.css has only `.hero-mail:hover`; thumbnails have no hover response at all (no tilt, no reveal, no link). Primary button: `translateY(-2px)` + glow opacity only, no arrow motion, no magnetic pull.
- **Inconsistent timings/easings.** Transitions 0.2s/0.25s/0.3s/0.35s/0.4s/0.9s mix `ease` and `--ease-out`; color transitions use `ease`, transforms `--ease-out`. WhatsApp uses a bouncy overshoot `cubic-bezier(.175,.885,.32,1.275)` (`WhatsAppButton.css:16`) alien to the rest.
- **Row hover animates `padding`** (`Projects.css:138,185`), which triggers layout every frame and shifts text width (wraps in `.row-desc`).

**Low**
- No sound-free delight/easter egg (no Konami, no cursor trail on the clock, no logo interaction, no text scramble on menu items).
- Menu toggle hover is colour/border only (`Navbar.css:75`); the burger lines animate on open but the pill has no press state.
- Footer "back to top" and social links are colour-only hovers.
- Cursor ring is `display:none` below 900px width even on a mouse laptop split-window; acceptable but the native cursor returns without notice.

## Specific fixes (concrete values)
1. **Press states (High, ~10 lines CSS).** `.btn-primary:active { transform: translateY(0) scale(.97); transition-duration:.08s }`; `.copy-btn:active, .menu-toggle:active { transform: scale(.96) }`; `.row:active { background: rgba(255,255,255,.06) }`. Return with `--ease-out` over .25s.
2. **Contextual cursor (High).** Keep ring at 36px. Add `data-cursor="View"` on `.feature-media`, `.feature-title`; `data-cursor="Copy"` on `.copy-btn` and `.contact-email`; `data-cursor="Open"` on `.row`. In `onOver`, read `e.target.closest('[data-cursor]')?.dataset.cursor` and write to a `<span>` in the ring. On label states grow ring to `scale(2.6)` (~94px), fill `var(--accent)`, label 11px Geist 600 `#000`, `transition: transform .35s cubic-bezier(.16,1,.3,1)`. Drop `mix-blend-mode`; set dot to `var(--ink)`. Shrink to `scale(.6)` on `pointerdown`. Hide the dot while labelled.
3. **Make the whole feature a target (High).** Stretch the title link: `.feature-link::after { content:''; position:absolute; inset:0 }` on `.feature { position:relative }` so image, title and body are one hit area with a pointer; on `.feature:hover` also `translateX(4px)` on the arrow and `scale(1.04)` on the image (0.9s -> 0.7s, `--ease-out`). Keep image link aria-hidden.
4. **Copy confirmation (Medium).** Fix pill `min-width: 8.5rem`; swap label with a 160ms translateY(-100% -> 0) mask; show a 16px check SVG with stroke-dashoffset 20 -> 0 over .3s; pill background -> `var(--accent)`, text `#000` for 2.4s; also flash the giant email colour to accent once (`.4s`) and spawn a 36px "Copied" tooltip at the cursor.
5. **Hero thumbnails (Medium).** On hover: `transform: rotate(-3deg) scale(1.08) translateY(-4px)`, `.45s --ease-out`, siblings `opacity .55`. Neighbouring text stays put (use inline-block with `will-change: transform`).
6. **Primary CTA magnetic (Medium).** Pointer-relative translate capped at 6px (x) / 4px (y), lerp .2, arrow glyph slides 4px; reset on leave over .4s `--ease-out`.
7. **Unify motion tokens (Medium).** `--dur-fast:.18s; --dur:.3s; --dur-slow:.7s` with `--ease-out` only; remove WhatsApp overshoot or give it to every button deliberately.
8. **Row hover without layout (Medium).** Replace padding animation with `transform: translateX(16px)` on `.row-name` and a `::before` background at `scaleY(0->1)` from bottom, .35s.
9. **One delight moment (Low).** Click the hero availability dot or footer wordmark to cycle accent colour among 3 curated tokens (stored in `localStorage`, try/catch), 0.4s `background-color` transition on `:root`. Or scramble-to-text on menu labels, 400ms, 30ms/char.

## Patterns referenced (from patterns.md)
- Micro-interactions #1 live-system chrome (Moiséz, Huy Phan): the clock already follows this; extend with a cursor readout.
- Micro-interactions #4 focus/blur list (Huy Phan): sibling-dim already used in the menu; reuse for the hero thumbnails and the index.
- Micro-interactions #5 playful physical objects (Moiséz, Jorge Riera): basis for the accent-cycle/delight moment.
- Contact #2 "copy email" pill (John Bolster) and #4 email-as-hero (Denny Pratama): upgrade the copy feedback.
- Projects: "card lift + brighten on hover" (Brandon Yasin) and Brandon Yasin custom ring: current cursor equals this baseline, not above it.
