# 5 — Performance
**Score: 9/10 (current) · Target 10/10**

Live site, measured 2026-11-20 with Lighthouse (headless Chromium, simulated Slow 4G / 4x CPU for mobile). The deployed JS hash (`index-CeYvCpMq.js`) equals a fresh local build, so live equals repo. Note: the 100/100/100/100 mobile figures in `audit.md` section 10 were a best case; three fresh runs give Performance 99, not 100.

## Measurements
| Run | Perf | A11y | BP | SEO | FCP | LCP | TBT | CLS | SI |
|---|---|---|---|---|---|---|---|---|---|
| Mobile 1 | 99 | 100 | 100 | 100 | 1.4 s | 1.9 s | 80 ms | 0 | 1.8 s |
| Mobile 2 | 99 | 100 | 100 | 100 | 1.2 s | 1.8 s | 30 ms | 0 | 1.8 s |
| Mobile 3 | 99 | 100 | 100 | 100 | 1.3 s | 1.8 s | 30 ms | 0 | 1.7 s |
| **Mobile median** | **99** | 100 | 100 | 100 | 1.3 s | 1.8 s | 30 ms | 0 | 1.8 s |
| Desktop 1 / 2 | 100 / 100 | 100 | 100 | 100 | 0.4 s | 0.4 s | 0 ms | 0 | 0.6 s |

Spread: mobile perf 0 points, LCP 0.1 s, TBT 50 ms (run 1 had a 636 ms TTFB in the LCP breakdown). 95+ in all four categories holds on both form factors today.

**Core Web Vitals.** LCP element is `p.hero-desc` on every run. Phase split (m1): TTFB 636 ms, render delay 1,275 ms (load delay and load time 0: it is text). CLS 0 (Playwright: 0.0001). INP-style (Playwright event timing, Pixel 5, 4x CPU, wheel-scroll plus clicks on first 4 buttons/anchors): worst event 32 ms, typical 16-24 ms (good, under 200). Long tasks: two at load (118 ms and 65 ms in Lighthouse; 91+132 ms in my 4x run), both the React mount in `index-*.js`. Zero long tasks while scrolling the full page.

**Bundle (built to a temp dir; source-map attribution).** JS 214.4 KB raw / 67.7 KB gz, single chunk. By package (raw): react-dom 181 KB (85%), app code 24 KB (Navbar 4.1, projectsData 3.9, About 2.6, Contact 2.5), react 7.9 KB, scheduler 3.5 KB. CSS 26.1 KB raw / 6.4 KB gz (single render-blocking file, 0 unused rules per Lighthouse). HTML 1.1 KB gz. Unused JS 29 KB (43%, all react-dom paths). Third-party requests: 0. Total first mobile load 239 KiB, 14 requests, HTTP/2 (`h2` in Lighthouse network log).

**Images (public/img).** WebP everywhere with JPEG fallback; **no AVIF**. Project screenshots: 640w 5-27 KB, 960w 20-45 KB, 1280w 30-71 KB (WebP); 1280 JPEG 52-97 KB (fallback only, not served to modern browsers). Dimensions: shots 1280x800 (trustcore, makeovers 1280x608, traveezy 1024x459), thumbs 480x300, profile 480x640 / 800x1067, avatar 96/192. `sizes` is `(max-width:900px) 92vw, 760px`; on a 412 px phone the 960w is chosen for a 364 px slot. Lighthouse image-delivery: 67 KiB mobile, about 46 KiB desktop.

**Fonts.** 5 self-hosted latin WOFF2 (Geist variable 29.4 KB, Instrument Serif 21.0 + italic 22.1 KB, DM Mono 400 14.8 + 500 15.0 KB). All `font-display: swap`; serif and Geist preloaded with `crossorigin`; metric-matched serif fallback present (values estimated, not measured). DM Mono 400 is discovered via CSS (longest chain 454 ms) and fetched at VeryHigh after first paint. DM Mono 500 is declared; I found no `font-weight: 500` rule applied to the mono family in the component CSS I grepped, so it may be dead weight (unverified in browser).

**Caching/compression (curl -I, live).**
| Class | Cache-Control | Encoding |
|---|---|---|
| `/` HTML | `max-age=0, must-revalidate` | br |
| `/assets/*` JS, CSS | `max-age=31536000, immutable` | br |
| `/fonts/*` | `max-age=31536000, immutable` | none (WOFF2, correct) |
| `/img/*` | `max-age=604800, stale-while-revalidate=86400` | none (WebP) |
| `og-image.jpg`, `favicon-64.png`, `favicon.svg`, `apple-touch-icon` | `max-age=0, must-revalidate` | none |

**Effect experiments (Playwright, Pixel 5, 4x CPU, Slow 4G, live site).** Baseline LCP 1,564 ms (2 runs identical). Preloader hidden: 1,600 / 1,612 ms. All CSS animations off: 1,660 ms. `content-visibility` off: 1,696 ms. Conclusion: the 0.4 s preloader and the hero animations do **not** gate LCP (differences are noise); `content-visibility` is worth roughly 0.1 s at best.

## Findings
**Critical**: none.

**High**
1. **First paint is blocked on JS: `<div id="root"></div>` ships empty.** FCP 1.2-1.4 s and LCP 1.8-1.9 s both wait for the 68 KB bundle to download and React to mount (the two long tasks at 1.1-1.3 s). Phase data: 1,275 ms render delay on a text LCP. This is the only reason LCP sits 0.6 s above FCP territory and it is the main Lenis/GSAP headroom eater. Fix: prerender at build. Add a postbuild step that runs `renderToString(<App/>)` (react-dom/server, or `vite-react-ssg`) into `#root` and switch `main.jsx` to `hydrateRoot`; guard `sessionStorage` and `matchMedia` reads in `Preloader.jsx`/`CustomCursor.jsx` so server and client markup match. Expected: FCP about 0.6 s, LCP about 0.8-1.0 s mobile, TBT unchanged.
2. **Hero thumbnails over-delivered on the critical path.** `weddesy-thumb`, `trustcore-thumb`, `rootsbusiness-thumb` are 480x300 (45.6 KB total) displayed at about 48x30 px (`Hero.css:85`, `height:0.7em`), fetched at High priority during load. Lighthouse flags 10.9, 17.9 KB wasted. Fix: generate `*-thumb-96.webp` (96x60) and `*-thumb-192.webp` (192x120) via `scripts/img.mjs`, use `srcset="… 96w, … 192w" sizes="3em"`, keep the 480 version only for Contact. Saves about 40 KB on first load.

**Medium**
3. **Feature images have no small variant.** `weddesy-960`/`tayoki-960` (47 KB) render at 364x228. Add a 480w variant, `sizes="(max-width:900px) 92vw, 760px"` then picks 480w (1x) saving about 40 KB; add AVIF `<source type="image/avif">` (typically 30-50% under WebP, so about 8-25 KB per shot).
4. **Late DM Mono discovery.** Add `<link rel="preload" as="font" type="font/woff2" crossorigin href="/fonts/dm-mono-latin-400-normal.woff2">` and drop the 500 file if unused (15 KB deploy weight, no first-load cost if never requested).
5. **Vercel br is weaker than gzip here.** Live JS: br 68,704 B vs gzip 67,477 B; CSS br 7,182 vs gzip 6,416. Marginal (about 1 KB), noted so nobody trusts "br" as a win; cannot be fixed without a precompressed-asset setup.
6. **Mobile perf is 99, not 100, and TBT varies 30-80 ms.** Any additional JS reduces a thin cushion; see budget.

**Low**
7. `og-image.jpg` (86 KB), `favicon-64.png`, `favicon.svg`, `apple-touch-icon.png` are `max-age=0, must-revalidate`: add `/(.*)\.(png|jpg|svg|ico)` rules in `vercel.json` (`max-age=86400`). Off the critical path.
8. `/img/*` is not immutable because file names are unversioned (acceptable; 7 days + SWR).
9. 29 KB unused react-dom is inherent to React 19; only Preact aliasing (about 40 KB raw smaller) would change it, at compatibility risk. Not recommended.

## Budget for Phase 3 (Lenis + GSAP)
Estimates, not measurements (I did not build the additions). Approximate gz sizes: Lenis about 3-4 KB, GSAP core about 27 KB, ScrollTrigger about 12 KB, total about 43 KB gz (about +64% over today's 67.7 KB). Lighthouse mobile weights: TBT 30%, LCP 25%, CLS 25%, FCP 10%, SI 10%. Current cushion is about 0.6 s LCP and about 120-170 ms TBT before Performance drops from 99 to roughly 95.
- **If bundled into the main chunk** (JS 111 KB gz): extra download on simulated 1.6 Mbps about +200-250 ms on FCP/LCP (the JS blocks mount), plus about 60-100 ms of eval at 4x. Predicted mobile Performance 94-97: unsafe on the 95+ rule.
- **If loaded with dynamic `import()` after `load` / `requestIdleCallback`**, with the above-the-fold already prerendered: LCP unaffected, TBT +30-60 ms (one parse/eval task kept under 50 ms by splitting). Predicted 98-99. This is the only way to keep a safe margin.
- Hard limits to hold: initial (non-lazy) JS at most 70 KB gz (today's), deferred animation chunk at most 45 KB gz, no new long task over 50 ms, no layout work in scroll handlers (use ScrollTrigger transforms/opacity only), `will-change` only during active tweens. Keep native CSS scroll-driven reveals for simple fades and use GSAP only for orchestrated moments.
- Do Findings 1 and 2 first: they buy back about 0.6-0.9 s LCP and about 40 KB, which pays for the entire GSAP budget.
- Guard it: run Lighthouse 3x mobile in CI, fail if the median Performance is below 97 (a 2-point buffer to the 95 rule).

## NEEDS MIDLAJ
- Approve introducing a build-time prerender step (changes `main.jsx` to hydrate; adds a small build script). It is the largest available win and the precondition for GSAP at 95+.
- Is DM Mono 500 used anywhere (including Navbar status/labels)? If not, remove it.
- Confirm you are happy with AVIF added alongside WebP (deploy size grows; no user-facing risk).
- Decide whether Lenis is wanted at all: native `scroll-behavior` plus CSS scroll-driven reveals already deliver most of the feel at zero JS.
- Unverified: real-device mobile timing (my 4x/Slow 4G is emulation) and whether the repo's `scripts/img.mjs` is the image generator (referenced in `projectsData.js`, not opened).
