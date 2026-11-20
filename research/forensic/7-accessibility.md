# 7 — Accessibility
**Score: 8/10 (current) · Target 10/10**
Method: live site https://midlaj-portfolio-psi.vercel.app/ (Chromium via Playwright, axe-core, real Tab walk, computed-style contrast, emulation). Scripts in scratchpad `pw/f7*.js`. Source cross-checked in W/src.

## Verified results
**axe (wcag2a, 2aa, 21aa, 22aa, best-practice), page fully scrolled so content-visibility sections are rendered:**
| Scenario | Violations | Incomplete |
|---|---|---|
| 1440 closed, not scrolled / scrolled | 0 / 0 | 1 (color-contrast) |
| 390 closed, not scrolled / scrolled | 0 / 0 | 1 (color-contrast) |
| 390 menu open | 0 | 1 (color-contrast) |
| **Total** | **0** | contrast "incomplete" only; I computed those pairs by hand (below) |
Menu is hidden at ≥900px, so "menu open" exists only at 390.

**Keyboard walk (Tab, 1440: 25 stops; 390: 22 stops):** skip link is stop 1 and shows; order is logical; every stop has a 2px lime outline; no stop is hidden under the 85px header (2.4.11/2.4.12 pass, `scroll-padding-top:96px`). Menu: Enter opens, focus goes to the logo link, Tab/Shift+Tab cycle inside (Close, 01-03, email, WhatsApp, GitHub, LinkedIn, Instagram), Esc returns focus to "Menu" button, choosing a link moves focus to the section (`#about`) and the next Tab continues from there. Closed menu is `visibility:hidden` (not tabbable). Dialog has `aria-modal="true"` + label. Previous-audit target-size and menu-focus findings are fixed (footer/social links now 44px high).
**Semantics:** `lang=en`; one H1 (aria-label carries the sentence); H2/H3 order has no skips; landmarks header, nav "Primary", nav "Sections", main, footer, aside "Quick contact"; `aria-current="location"` set on active link; copy button announces through `role=status`; 10 of 14 images are `alt=""` (hero/contact thumbs, aria-hidden project media), portrait has alt; the live clock uses `<time dateTime>` and updates every 15 s (it is not user-interrupting; fine under 2.2.2).
**Reduced motion (emulated):** preloader `display:none`; 0 running animations; reveals at opacity 1; progress hairline `display:none`; custom cursor not started (`html` class empty), native cursor kept; `scroll-behavior:auto`; count-up shows final values.
**Reflow/spacing:** scrollWidth equals viewport at 320, 720 (200%), 1280; text-spacing override (line-height 1.5, letter 0.12em, word 0.16em, p margin 2em): no clipped or overflowing text.
**Targets:** everything ≥24px (2.5.8 pass). Below 44px: `.feature-link` 130x27 desktop / 124x26 mobile (7 links), `.header-nav` "Work" 38x44 and "About" 43x44, "Let's talk" 105x40, `.contact-email` 256x34 mobile. No dragging interactions (2.5.7 n/a); no repeated help or forms (3.2.6, 3.3.7, 3.3.8 n/a).

**Contrast, worst pairs (computed, opacity and alpha composited):**
| Pair | Ratio |
|---|---|
| `.row-tech` rgba(18,18,16,.62) on bone #ecebe3, 12.5px mono | 4.93 (passes; thinnest margin) |
| `--muted` #9b9b9b on #0a0a09 (clock, stats, counts, tech, footer) | 7.13 |
| `.row-desc` on paper (.78 alpha) | above 7 |
| Header (rgba(10,10,9,.86)) stays dark over the paper, white text | pass |
| **Focus ring lime #c8f250 on paper bone #ecebe3** | **1.08 — fails** |

## Findings
**High**
1. **First click on a header/menu link lands in the wrong place.** Measured on a cold load: desktop "About" ends with `#about` top at -1429px (viewport is 1429px into the section, heading off-screen; focus is also moved to `#about`, which is off-screen); mobile menu "About" -896px; mobile "Contact" +233px instead of 96px. After a prior full scroll it lands correctly (top 96). Cause: `content-visibility:auto` with a single `contain-intrinsic-size: auto 700px` for `#about`, `.feature`, `.index`, `#contact` (src/index.css:189-190); real heights are About 1441 (1922 on mobile), features 468-602 (524-615 mobile), index 438/609, contact 779/612. Affects keyboard and menu users first (2.4.3 focus order/visible position). Fix: split the rule, `#about{contain-intrinsic-size:auto 1450px}` `#projects .feature{...auto 600px}` `#projects .index{...auto 440px}` `#contact{...auto 780px}`, and in the `@media (max-width:900px)` override `#about` to 1920px, `.feature` 580px, `.index` 610px, `#contact` 620px. Or drop `content-visibility` from `#projects .feature` (cheapest, it contributes most of the error).
2. **Focus ring is nearly invisible on the paper chapter.** Global `:focus-visible{outline:2px solid var(--accent)}` (src/index.css:251) is lime on bone: 1.08:1 (1.4.11 needs 3:1). Seen in screenshot: focused "Nizan Tech" row shows only a faint line. Applies to all 3 `.paper .row` stops. Fix in Projects.css: `.paper :focus-visible{outline:2px solid var(--ink-on-paper);outline-offset:-4px;}` (≈17:1 on bone; negative offset keeps the ring inside the row).

**Medium**
3. **WhatsApp float is unreachable by keyboard.** It is last in the DOM and gets `tabIndex=-1` + `opacity:0` + `pointer-events:none` whenever hero actions or contact are on screen (WhatsAppButton.jsx:31); by the time Tab reaches the end of the document the contact section is in view, so my 25-stop walk never visits it. Also still in the accessibility tree when tucked. Fix: when tucked also set `aria-hidden="true"` and `inert`; accept that keyboard users use the in-page WhatsApp button (they already do), or leave the float out of tab order intentionally and document it.
4. **Targets under 44px:** `.feature-link` (Projects.css:87, 26-27px, 7 links), `.contact-email` 34px at 390 (Contact.css), "Let's talk" 40px. Fix: `.feature-link{min-height:44px;padding-block:8px}`, `.contact-email{padding-block:10px}` at ≤900px, `.btn-sm{min-height:44px}`. Meets 2.5.8 today; this is comfort target.
5. **Menu external links lack the "opens in a new tab" note** (Navbar.jsx:202-208: WhatsApp, GitHub, LinkedIn, Instagram) though every other external link has it. Add `<span className="visually-hidden"> (opens in a new tab)</span>`.

**Low**
6. `.row-tech` at 12.5px with 4.93:1 has little margin; raise alpha to .72 (≈6.8:1) in Projects.css (`.paper .row-tech,.paper .row-go`).
7. Menu hover-dim now `opacity:.55` (Navbar.css:209), about 4.4:1 on #0a0a09, hover-only; set .6 to clear 4.5:1.
8. Menu open focuses the logo (first link) not the Close button; set initial focus to `.menu-toggle` Close for a more predictable start. Page behind the dialog is not `inert` (`.app>*` all `inert:false`); `aria-modal` covers modern SRs, add `inert` to `header,main,footer,aside` while open.
9. Clock comment says "once a minute" but the interval is 15000ms (Hero.jsx); harmless, correct the comment.

## NEEDS MIDLAJ
- Decide whether the WhatsApp float should be keyboard-focusable (finding 3) or deliberately skipped because the contact section and menu already offer WhatsApp.
- Confirm the numbers in the About stats ("10+ Happy clients", "1.5 years") are true; not an a11y matter but they are read by screen readers as written.
