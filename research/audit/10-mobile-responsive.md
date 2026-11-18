# 10 — Mobile & Responsive Specialist
**Score: 6/10**

Tested with Playwright (touch + isMobile) at 320, 360, 390, 412, 600, 768, 1024 and 844x390 landscape. No horizontal overflow at any width (scrollWidth equals viewport everywhere). That is the floor, not an award signal.

## Top strengths (max 3)
1. Robust fundamentals: no overflow at any tested width, `100vh`+`100svh` fallback on hero (Hero.css:6-7), all hover effects wrapped in `@media (hover: hover)`, custom cursor disabled for coarse pointers (CustomCursor.css:53), fluid `clamp()` type scale (index.css:70-76).
2. Mobile hero is strong at 390: three-line headline fills the width, full-width lime CTA stacks above the text link, status row is tidy (390-01-hero.png).
3. Menu overlay copes with landscape: at 844x390 the panel scrolls (scrollHeight 482 vs 390) instead of clipping, and `<=600px` rules shrink menu grid and hide the section label.

## Problems

**Critical**
- None.

**High**
- **Breakpoint gap at 601–900px (tablet).** Hero thumbnail 3 orphans onto its own line under "to the deployed server." (768-01-hero.png; Hero.css:161-165 only hides thumb 2 at <=600). The line-3 thumb wraps because the line is full width at 768.
- **768 About is unresolved:** the portrait sits left at `max-width:320px` with ~400px of dead black to its right, then everything stacks (768-02-about.png; About.css:120-131). The 900px breakpoint flips straight to 1 column, skipping a 2-column tablet layout.
- **Fixed WhatsApp button collides with content on small phones.** At 320x640 the 52px FAB (x 238, y 558) sits over the hero intro text ("MERN stack" is covered; shot s-320x640-hero.png). `.hero-cta` reserves 88px on the right only above 900px; below, there is only bottom padding. It also overlaps the contact/footer links anywhere it lands on them while scrolling (WhatsAppButton.css:1-12, no section awareness).
- **No safe-area handling.** `index.html:7` has no `viewport-fit=cover`, and the FAB (`bottom:30px; right:30px`), fixed header and menu panel ignore `env(safe-area-inset-*)`. In landscape on notched iPhones the header content and menu go under the notch once cover is enabled; without cover, the page is letterboxed.

**Medium**
- **Touch targets below 44px (measured):** footer/menu social links 19px tall, `menu-email` 32px, `hero-mail` 26px, `feature-link` ("View live site") 26px, logo 24px, back-to-top similar. Menu button is 42px (just under 44). WCAG 2.5.8 minimum (24px) passes; the ideal does not. Contact/menu link rows are the worst offenders.
- **320px hero breaks down:** headline wraps to 6 lines (line heights 100/100/136), hero grows to 912px on a 640px viewport, thumbnail 2 is stranded on a line of its own and the stagger animation plays on lines that re-wrap (s-320x640-hero.png). The clamp floor `3.1rem` (49.6px) is too large for 320.
- **Tiny type:** `.menu-num`, `.stat-label`, `.feature-tech` render at 12.8px (--step--1 floor 0.8rem, index.css:70); mono tech lists at 12.8px on phones are hard to read.
- **Hero feels top-heavy on phone:** `margin:auto 0` plus 56px padding leaves ~120px of dead space between status row and headline and between headline and rule (390-01-hero.png). The primary CTA sits at y≈1360/2 = 680 of 844, which is thumb-reachable, but the stacked "Email me" is a 26px target.
- **`sizes` is approximate:** About `(max-width: 900px) 70vw, 480px` (About.jsx:20) but the photo is capped at 320px under 900 so a 70vw request at 768 (538px) over-fetches; Projects `92vw` ignores the 2px-wide gutters (--pad-x 24px) and >900 widths are a flat `760px` while the real column is 7/12 of the container. Slight over-download, no layout cost.
- **No `-webkit-tap-highlight-color` control or `touch-action: manipulation`:** default grey flash on tap over dark UI; 300ms-delay/double-tap-zoom risk on buttons.

**Low**
- WhatsApp pulse ring animates infinitely (`whatsapp-pulse 2s infinite`) on a mobile CPU alongside the hero reveal; the whole CSS kill switch covers reduced-motion only.
- Header has no `theme-color` meta, so the iOS/Android URL bar stays white/grey over a `#080808` page.
- Contact email is 232px wide at 320 (fits, good) but the menu email uses `word-break: break-all` which will split mid-word on narrow screens.
- Landscape 844x390: hero is 854px tall (taller than twice the viewport) and the 132px top padding burns a third of the screen.

## Specific fixes
1. **Breakpoints:** current set is 480 / 600 / 900 (plus 768 on the FAB). Add 360 (compact phones), 760 (tablet two-column) and a height query. Proposed set: `<=360`, `<=600`, `601–899`, `>=900`, plus `(max-height: 500px) and (orientation: landscape)`.
2. **Tablet hero (601–899):** hide thumb 3 as well (`.hero-line:nth-child(3) .hero-thumb{display:none}`) or reduce `.hero-thumb` to `height:.62em; margin-left:.12em`. Preferred: keep two thumbs and set title `font-size: clamp(3.4rem, 1rem + 7.4vw, 6rem)` at that range so line 3 + thumb fit.
3. **Tablet About (>=700px):** change the stacking breakpoint to 700px and use `grid-template-columns: 5fr 7fr; gap: 40px;` with photo `max-width:none`; the stats grid goes 4-up from 700px (not 2-up). Removes the dead right half.
4. **Safe areas:** `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">`; `.site-header{padding-left:max(var(--pad-x), env(safe-area-inset-left)); padding-right:max(var(--pad-x), env(safe-area-inset-right))}`; `.whatsapp-float{bottom:max(20px, calc(env(safe-area-inset-bottom) + 12px)); right:max(20px, env(safe-area-inset-right))}`; same for `.menu-panel` padding-bottom. Add `<meta name="theme-color" content="#080808">`.
5. **FAB:** at <=600px make it 48px, `bottom:16px; right:16px`, stop the pulse after 3 iterations (`animation-iteration-count:3`) and fade it to `opacity:.0 + pointer-events:none` while `#contact` or the open menu is in view (IntersectionObserver is already in the nav) so it never covers contact links. Give `.hero-desc` and `.hero-cta` `padding-right: 64px` only when `(max-width:600px) and (min-height: 0)` is not enough room; alternative: move the CTA row above the FAB with `padding-bottom: 104px` on the hero (currently 96px).
6. **Touch targets:** `.menu-links a, .contact-links a, .footer-inner a, .hero-mail, .feature-link{display:inline-flex; align-items:center; min-height:44px}` (keep the visible underline via `text-underline-offset`; extend hit area with `padding-block:12px; margin-block:-12px`). `.menu-toggle{min-height:44px; padding:12px 18px 12px 20px}`; logo `padding:10px 0`.
7. **320 hero:** at `(max-width:360px)` set `.hero-title{font-size:2.75rem; padding:32px 0}` and hide both thumbs; `#hero{padding-top:104px}`. Landscape: `@media (max-height:500px) and (orientation:landscape){#hero{min-height:auto;padding-top:88px} .hero-title{font-size:clamp(2.4rem,7vh,3.6rem); padding:24px 0} .menu-nav{padding:12px 0} .menu-list a{font-size:2.4rem}}`.
8. **Small type:** raise floors to `--step--1: clamp(0.8125rem, ...)` (13px) and set tech/stat labels to 13.5px on <=600px with `line-height:1.5`.
9. **Tap feel:** `html{-webkit-tap-highlight-color: transparent}` plus `:active` feedback on buttons (`transform:scale(.97); transition:120ms var(--ease-out)`) as the touch replacement for hover; `a,button{touch-action:manipulation}`.
10. **`sizes`:** About `(min-width:900px) 480px, (min-width:700px) 42vw, min(320px,100vw)`; Projects `(min-width:1200px) 700px, (min-width:900px) 58vw, calc(100vw - 48px)`.

## Patterns referenced (from patterns.md)
- Mobile-first rethink of hero composition (type-led hero scaled by `vw` with image-as-punctuation) as seen in the inline-thumbnail headline pattern; the same pattern needs per-breakpoint thumb counts.
- Menu overlay with staggered list (full-screen nav pattern from the reference portfolios): needs a short-viewport variant.
- Touch equivalents for hover-driven effects (press/active states, scroll-in reveals instead of hover-reveals), the approach used across the reference library; currently the site simply drops the hover effect on touch (feature image zoom, ledger dim, menu dim) with nothing replacing it.
