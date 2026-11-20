# 4 — Motion & Scroll Forensics
**Score: 6/10 (current) · Target 9/10**
Method: Playwright Chromium against the live site (wheel scroll, rAF probe, longtask and layout-shift observers, 1x and 4x CPU throttle), plus a code read. Video was recorded, but the numbers below are from separate no-video runs. Lenis/GSAP versions come from WebSearch; claims marked "(memory)" are not verified.

## Animation inventory
| Effect | file:line | Trigger | Duration / easing | Properties | Jank risk |
|---|---|---|---|---|---|
| Scroll reveals (rise) on title, stat, ledger-row, feature-body, index-title, contact | index.css:340-352, 370 | `animation-timeline: view()`, entry 0-55% | scroll-linked, linear | opacity, transform | Low (compositor). Scrubbed, so it reverses on scroll up |
| Image clip reveal | index.css:355-359, 382 | view(), entry 0-65% | scroll-linked | clip-path inset | Medium: clip-path is main-thread (memory) |
| Image settle | index.css:361-365, 393 | view(), entry to cover 45% | scroll-linked | `scale` | Low |
| Reading progress bar | Navbar.css:382-394 | `scroll(root)` | scroll-linked | transform scaleX | Low |
| Hero line rise | Hero.css:68-70, 129 | load | 800ms, --ease-out, 0.09s stagger | transform | Low |
| Hero thumb wipe | Hero.css:95-106 | load | 1000ms, --ease-out | clip-path | Low |
| Hero thumb hover | Hero.css:97 | hover | 300ms | transform, opacity | Low |
| Preloader curtain / mark | Preloader.css:10,19 | load, once per session | 400ms (+100ms delay), --ease-in-out | transform, opacity | Low |
| Menu overlay | Navbar.css:114-189 | click | 250-800ms, mixed `ease` and --ease-out | opacity, transform, visibility | Low, inconsistent easing |
| Header bg, links | Navbar.css:13,58,250,353 | scroll/hover | 200-300ms `ease` | colour | Low |
| Draw-check | Contact.css:128 | form success | 300ms | stroke | Low |
| WhatsApp FAB in / tuck | WhatsAppButton.css:18-20 | load +1s, IO | 600ms / 300ms | transform, opacity | Low |
| Cursor | CustomCursor.jsx:34-46, .css:11,43 | pointermove, rAF | lerp 0.35 | transform | Low (rAF sleeps when settled) |
| Count-up | About.jsx:23-34 | IO, threshold 0.6 | 1200ms, cubic-out | `setState` per frame, 4 stats | Low-Medium: React re-render each frame |
| Scroll-spy | Navbar.jsx:20 | IO, -45%/-50% band | n/a | state | Low |
| Header "scrolled" | Navbar.jsx:38-42 | passive scroll | n/a | setState (bails when unchanged) | Low |
| Smooth scroll | index.css:149 | anchors | browser default | scroll | See finding 1 |
| Off-token hovers | Footer.css:23, Contact.css:36,92, About.css:96, Projects.css:96,180 | hover | 0.2-0.25s `ease` | colour | None, but breaks the token system |

## Measured scroll performance (live site, no video)
| Viewport | Frames | p95 | max | Frames >20ms | Long tasks | CLS |
|---|---|---|---|---|---|---|
| 1440x900, 1x CPU | 331 | 16.7ms | 33.3ms | 1 (y≈2000, first feature image entering) | 0 | 0.00001 (hero-clock only) |
| 1440x900, 4x CPU | 347 | 16.8ms | 33.3ms | 1 (y=0) | 1x 54ms at load | not measured |
| 390x844, 1x CPU | 300 | 16.8ms | 16.8ms | 0 | 0 | 0 |
| 390x844, 4x CPU | 309 | 16.8ms | 16.8ms | 0 | 1x 57ms at load | not measured |

The video-recorded run showed 18 frames at 33ms on desktop; that was recorder overhead, since the no-video repeat shows 1. Frame time is healthy. The problem is geometry, not frame rate.

## Findings
**Critical**
1. **Anchor navigation overshoots (content-visibility plus smooth scroll).** From the top, `#about` on desktop settles at top = -1429px and stays there (1.5k px past target; an earlier run gave -1070). `#contact` converges correctly at 96. On mobile, the menu link to `#contact` ended 1077px off and `#about` at -650. With reduced motion (instant jump) or with content-visibility forced off, every anchor lands exactly at 96. Cause: `contain-intrinsic-size: auto 700px` (index.css:189) is a wrong estimate. Document height drifts while scrolling: 10188 -> 8282px on desktop (true height 8282, estimated 9734), 9285 -> 8556 on mobile. The smooth-scroll target is computed against the estimate. The same drift distorts scroll-spy and the progress bar.
   Fix: delete `content-visibility` from `#projects .feature`, `#projects .index` and `#about` (index.css:185-191). If you keep it anywhere, use per-element measured `contain-intrinsic-size`. It saves little on an 8.3k px page.

**High**
2. **`.about-photo` has two competing animations** (index.css:343-358). The `image-in` declaration overrides `rise`, so the rise is silently dropped. Fix: remove `.about-photo` from the first selector list.
3. **Reveals are scrubbed, not triggered.** `linear both` on `view()` means content fades back out when scrolling up and sits half-visible if you stop mid-entry. This is the main behavioural difference from ScrollTrigger once/toggleActions reveals.
4. **Motion tokens are bypassed.** Seven hardcoded `0.2s/0.25s/0.3s ease` and the 0.7s/0.8s menu transitions (Navbar.css:153) ignore the `--d-*` and `--ease-*` tokens declared at index.css:100-107. Fix: replace with `var(--d-1/2/3)` and `var(--ease-out)`.

**Medium**
5. Count-up calls `setState` every frame for 4 counters (About.jsx:31), re-rendering React about 240 times. No jank measured. Fix: write `ref.current.textContent` instead.
6. Menu scroll lock (`body.style.overflow='hidden'`, Navbar.jsx:72) verified on mobile (scrollY stayed 2500 with menu open). It will not stop Lenis (see below).
7. Anchor offset is correct natively: `scroll-padding-top: 96px` vs an 85px header gives top = 96 (verified for `#projects`).
8. Reduced motion verified: progress bar hidden, reveals `none`, scroll-behavior `auto`, cursor off, pulse off. The `.preloader` node was still in the DOM; confirm Preloader.css:34 hides it.

**Low**
9. Cleanup is good: cursor cancels rAF and removes all five listeners and the mq listener (CustomCursor.jsx:70-88); Navbar, About and WhatsApp disconnect their observers; About cancels its rAF. The Navbar focus rAF (Navbar.jsx:102) is uncancelled but one-shot. Not verified: `clearInterval` for Hero's 15s clock (Hero.jsx:35) and `clearTimeout` for Contact's timer (Contact.jsx:49).
10. A 54-57ms long task at load on both viewports (4x throttle): app mount, not scroll.

## Readiness for Lenis + GSAP
Versions (WebSearch; snapshots disagree): Lenis is MIT, highest seen 1.3.25 (confirm with `npm view lenis version`). GSAP 3.14.x seen (3.13.0 on the npm page), GreenSock "no charge" licence, not MIT; ScrollTrigger is included and free for commercial use since the Webflow acquisition. Read gsap.com/standard-license before shipping.

Remove or change first:
1. **Fix finding 1 before anything else.** ScrollTrigger measures positions from layout; with content-visibility the heights are wrong until sections render, so triggers fire early or late. If you keep it, call `ScrollTrigger.refresh()` after sections render (memory).
2. **Delete `scroll-behavior: smooth`** (index.css:149). It conflicts with Lenis, which expects `auto` (memory). Use `lenis.scrollTo`.
3. **One reveal engine only.** Delete the native `animation-timeline: view()` block (index.css:340-368) the moment ScrollTrigger reveals go in, or elements animate twice. The progress bar (`scroll(root)`) can stay native; it follows the scroll position that Lenis writes.
4. **Anchors:** native `scroll-padding-top` does not apply to `lenis.scrollTo`. Intercept `a[href^="#"]` and pass `offset: -96` (memory), keeping the reduced-motion instant path.
5. **Menu lock:** call `lenis.stop()` / `lenis.start()` inside the `isMenuOpen` effect (Navbar.jsx:70-98) alongside `body.overflow`; add `data-lenis-prevent` to `.menu-panel` if it ever scrolls.
6. **Fixed header, FAB, cursor:** all `position: fixed`, unaffected (Lenis keeps native scroll). Keep touch on native scrolling (default `syncTouch: false`).
7. **`.paper` trick** (Projects.css:262-270, `box-shadow: 0 0 0 100vmax` plus `clip-path: inset(0 -100vmax)`): do not pin `.paper` or any ancestor, because the clip would cut the pin spacer. Animate children only. Avoid `will-change: transform` or `transform` on it (creates a containing block).
8. **Wiring in React:** drive Lenis from `gsap.ticker`, call `ScrollTrigger.update` on its scroll event, create both in one effect, and clean up (`lenis.destroy()`, `ctx.revert()`) so StrictMode does not double-initialise. IO-based scroll-spy and count-up keep working.
9. **Reduced motion:** do not instantiate Lenis when `prefers-reduced-motion: reduce`; the CSS kill switch does not reach JS.

Unified motion token file (one `motion.js` mirrored to CSS variables): durations 150/300/600/1000ms and the 0.09s stagger; eases `out 0.16,1,0.3,1` and `inOut 0.76,0,0.24,1`; reveal distance 24px; clip inset 8%; trigger point (e.g. `top 85%`, once); Lenis `lerp`/`duration`; header offset 96; breakpoints 900 (wide nav) and 901 (cursor), so JS and CSS share one source.

## NEEDS MIDLAJ
- Drop content-visibility (recommended) or keep it with measured sizes?
- Reveals once (ScrollTrigger style) or scrubbed as now?
- Is inertial smooth scroll worth the added kilobytes against the Lighthouse 90 target?
- Is the GSAP "no charge" licence acceptable for client work?

Sources: https://npmjs.com/package/lenis , https://npmjs.com/package/gsap , https://github.com/greensock/GSAP
