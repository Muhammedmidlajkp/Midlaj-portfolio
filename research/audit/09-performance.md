# 09 — Performance Specialist
**Score: 7/10**

Honest read: the build is lean and disciplined. The remaining mobile gap is not a bundle problem; it is first-render layout work plus a hero that makes its own LCP wait.

## Top strengths (max 3)
1. Tiny, dependency-free payload: 68 KB JS (gz), 5.7 KB CSS, only 2 preloaded fonts (50 KB), 0 third-party requests, CLS 0, desktop 100. ~235 KB total transfer on first mobile load.
2. Image pipeline is right: WebP `srcset` with JPEG fallback, width/height set, lazy below fold, thumbnails/avatar preloaded (`ProjectImage.jsx`, `index.html`).
3. Animation is compositor-safe: only `transform`/`opacity` (heroRise, curtain, cursor via `translate3d` + rAF that stops when settled). Lighthouse reports no non-composited animations.

## Problems
| Run (live) | Perf | FCP | LCP | TBT | CLS |
|---|---|---|---|---|---|
| Mobile 1 | 91 | 1.6 s | 1.9 s | 290 ms | 0 |
| Mobile 2 | 96 | 1.4 s | 1.7 s | 190 ms | 0 |
| Desktop | 100 | 0.4 s | 0.5 s | 10 ms | 0 |

Mobile varies 91-96 run to run, so a 90+ target is only marginally safe.

**High**
- **H1. LCP waits ~1.8 s on render delay, not network.** LCP element is `p.hero-desc` (m1.json). TTFB 0.3 s, then 1.84 s element render delay. It is below the animated h1 and is held by the preloader curtain (`Preloader.css:10`, 0.2 s delay + 0.55 s, full-screen opaque layer) and the 1.1 s heroRise (`Hero.css:67-68`) on the same frame budget. The paragraph itself is static text, so the delay is main-thread and curtain driven.
- **H2. Main-thread layout cost is the TBT driver.** Mobile main thread: Style & Layout 826 ms, Script eval 288 ms, Rendering 239 ms (4x throttle). Long tasks: 231 ms and 184 ms, both in `index-*.js` (React mount), plus 69 ms HTML. I measured with CPU 4x: ~9-10 layouts, ~380-400 ms layout duration. Removing the noise overlay and the preloader made no difference (layout 388 and 369 ms vs 385), so they are not the cause. Adding `content-visibility:auto` to below-fold sections cut layout to ~245 ms (-35%) in my test. The "forced reflow" (111 ms, `index.js` line 8 col 37801) is inside React's reconciler commit (react-dom, not CustomCursor, Navbar, LiveClock or backdrop-filter): the first mount's style/layout flush. CustomCursor does nothing on touch (media query bails), Navbar observer/scroll handler are passive and cheap, the clock ticks every 15 s.
- **H3. Zero caching on live site.** `curl -I`: fonts, images, and hashed `/assets/index-*.js` all return `Cache-Control: public, max-age=0, must-revalidate`. Hashed assets should be immutable; every repeat visit pays revalidation round trips. No `vercel.json` exists.

**Medium**
- **M1. Over-delivered images on phones.** Lighthouse image delivery: 70 KiB savings. `weddesy-960.webp` (26 KB) renders at 364 px; `profile-800.webp` (21 KB) at 320 px; feature images only offer 640/960/1280, no 480. `profile-480.webp` exists but is not picked.
- **M2. 29 KiB unused JS (44%)** of the 67 KB bundle is React DOM paths; unavoidable with React 19, so low yield. Whole-page JS is a single 210 KB (uncompressed) chunk; CSS render-blocking 5.7 KB is acceptable.
- **M3. Font chain:** DM Mono 400 is discovered late via the CSS (dependency chain ends at 2.27 s) while only serif and Geist are preloaded. DM Mono 500 also ships. Each swap can add a relayout.
- **M4. Permanent `whatsapp-pulse 2s infinite`** (`WhatsAppButton.css:48`) and `wa-in` run alongside the load; keep off the critical window (animation starts 0.9 s in, overlapping TBT).

**Low**
- L1. `backdrop-filter: blur(14px)` on header (`Navbar.css:20`) is only applied after scroll; fine on desktop, small raster cost on low-end Android.
- L2. Fixed `body::before` feTurbulence noise (`index.css:158`, 4 octaves) rasterised once; measured harmless but costs GPU memory for a full-screen layer.
- L3. `html{scroll-behavior:smooth}` is fine; no `will-change` abuse (only cursor).
- L4. `og-image.jpg` 86 KB and favicon-64 4 KB are not on the critical path.

## Specific fixes (concrete values)
1. **Cache headers:** add `vercel.json` with `headers` for `/assets/(.*)`, `/fonts/(.*)`, `/img/(.*)` → `Cache-Control: public, max-age=31536000, immutable`. Expected: repeat-visit transfer ~0 KB, faster return LCP; image names are unversioned, so either keep `max-age=31536000` only after hashing names or use `max-age=604800, stale-while-revalidate=86400` for `/img`.
2. **Cut render delay (H1):** shorten curtain to 0.35 s total (`animation: ... 0.35s ... 0s`, delay 0) or drop the preloader on repeat visits (sessionStorage flag, skip render). Cap heroRise to 0.8 s with stagger 0.08 s. Expect LCP 1.7-1.9 s → ~1.2-1.4 s.
3. **Layout (H2):** put `content-visibility:auto; contain-intrinsic-size:auto 900px` on `#about`, each `.feature` row, the index list, `#contact` and footer (not `#hero`). Measured -35% layout under 4x throttle; expected TBT 290 → ~200 ms. Add `contain: layout paint` on `.feature-media`.
4. **Avoid the avoidable relayout:** `font-display: optional` on DM Mono, or preload DM Mono 400 and drop the 500 weight (use `font-synthesis` off, or one variable file) saving 15 KB and one reflow.
5. **Images:** add 480 w variants for feature screenshots (`sizes="(max-width:700px) 92vw, 60vw"`), and use `profile-480.webp` with `sizes="(max-width:700px) 80vw, 480px"`. Expect -50 to -70 KiB on mobile.
6. **Defer non-critical mount:** lazy `CustomCursor` (`React.lazy` gated by the existing media query) and mount `WhatsAppButton` in `requestIdleCallback` after load; saves ~3 KB script and one long-task slice.
7. **Pause pulse:** keep `whatsapp-pulse` off the load window (`animation-delay: 4s`) and only on `(prefers-reduced-motion: no-preference)`.
8. Test in CI with `lighthouse-ci` x3 mobile runs, median ≥ 93, to guard the 90+ rule against variance.

## Patterns referenced (from patterns.md)
- Preloader / curtain intros (several of the 30 sites use them): keep it, but time-box it under 0.4 s so it never delays LCP; reveal over already-rendered content.
- Line-mask text reveals (hero headline rise): good pattern; limit to one orchestrated moment, as already done, and keep transform-only.
- Scroll-driven reveals recommended by other specialists must stay transform/opacity with `IntersectionObserver`, not scroll listeners, and pair with `content-visibility:auto` so the added motion does not raise TBT.
