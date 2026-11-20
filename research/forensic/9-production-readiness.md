# 9 — Production Readiness
**Score: 6/10 (current) · Target 10/10**

Performance and cross-browser basics are solid. The gaps are all edge states: 404, no-JS, failed assets, favicon/manifest completeness, monitoring, domain readiness and repo hygiene.

## Verified results

**404 (live, curl):** `/nope`, `/projects/x`, `/manifest.webmanifest`, `/assets/nope.js` all return `404 Not Found`, `text/plain`, 79-byte body ("The page could not be found / NOT_FOUND / bom1::..."). No SPA fallback, no custom page, no branding. The `/assets/nope.js` 404 also carries `Cache-Control: public, max-age=31536000, immutable` (from the `/assets/(.*)` rule in `vercel.json`). HTTP redirects to HTTPS with 308; HSTS `max-age=63072000; includeSubDomains; preload`; HTML served brotli; `/robots.txt` and `/sitemap.xml` return 200 with correct types. No X-Frame-Options, CSP, Referrer-Policy, Permissions-Policy or X-Content-Type-Options headers.

**No JS** (`research/forensic/screenshots/nojs-1440.png`): a completely empty dark page. `index.html` has only `<div id="root"></div>`, no `<noscript>`, no static text. Title, meta and JSON-LD exist; body text is empty. There is no React error boundary (grep `ErrorBoundary` in `src/` returns nothing; `src/main.jsx` renders `<App/>` bare), so any render throw gives a blank page. With the JS bundle blocked: also empty body, no error UI.

**Failed images** (`img-fail-1440.png`, all `/img/**` aborted): 14/14 images broken; hero thumbnails show native broken-image icons in empty boxes. Layout holds, headline stays readable, no fallback styling.

**Slow network** (CDP 50 KB/s, 400 ms latency, 390 px; `slow-3000.png`, `slow-5000.png`): blank screen (`#root` empty) until about 5 s, because the app is client-rendered; the preloader only appears after React mounts. Preloaded fonts were in by 3-5 s; no font-swap shift observed.

**Per-browser** (live, 1440x900; local Playwright Chromium, Firefox build 1555 (older than current stable), WebKit 2370):

| Check | Chromium | Firefox | WebKit |
|---|---|---|---|
| Console errors | 0 | 0 | 0 |
| Warnings | avatar preload unused | same | same |
| Horizontal overflow | none | none | none |
| Fonts (Instrument Serif, Geist, DM Mono) | loaded | loaded | loaded |
| `animation-timeline: view()` | supported | not supported (this build) | supported |
| Content visible where unsupported | n/a | yes: 0 of 19 reveal targets hidden, `@supports` guard works | n/a |
| `text-wrap`, `content-visibility`, `clip-path` paper (`inset(0 -1440px)`) | yes | yes | yes |
| Custom cursor element | present | present | present |
| Copy email | clipboard holds email | clipboard holds email | no error; clipboard read denied in headless (permission, expected) |
| Screenshot | not saved | `b-firefox-1440.png` | `b-webkit-1440.png` |

Menu was not exercised at 1440 (desktop nav, no hamburger). The aria-live text after copy read empty in my probe for all three, so the "copied" feedback is unconfirmed here (selector may be wrong). Screenshots viewed for Chromium 2560 and no-JS and image-fail only; Firefox/WebKit shots were measured, not eyeballed.

**Viewports** (Chromium; `vp-360.png`, `vp-2560.png`, `vp-844.png`): no horizontal overflow and no tap target under 24 px at any size.

| Size | H1 | Content width | Overflow | Nav |
|---|---|---|---|---|
| 360x740 | 44px | 312 | none | hamburger |
| 390x844 | 49.6 | 342 | none | hamburger |
| 430x932 | 49.6 | 382 | none | hamburger |
| 768x1024 | 74 | 691 | none | hamburger |
| 1024x768 | 94 | 922 | none | desktop |
| 1440x900 | 125 | 1320 | none | desktop |
| 1920x1080 | 132 | 1320 (capped) | none | desktop |
| 2560x1440 | 132 | 1320 (capped) | none | desktop |
| 844x390 landscape | 80 | 760 | none | hamburger |

**linkinator:** 11 links scanned, 0 broken (all 200). LinkedIn was not crawled by the tool, so it is unverified.

## Findings

**High**
1. **No 404 page.** Evidence: curl above. Mistyped URLs get a raw Vercel text page. Fix: add `public/404.html` (branded, link to `/`, `<meta name="robots" content="noindex">`); Vercel serves it for unmatched paths on a static deployment.
2. **Blank page without JS, on JS failure and on slow links; no error boundary.** Evidence: `nojs-1440.png`, `src/main.jsx`, slow test. Fix: (a) `<noscript>` in `index.html` with name, role, one-line pitch, email, GitHub/LinkedIn links; (b) a small class `ErrorBoundary` around `<App/>` in `src/main.jsx` with a plain fallback (name, email link, reload); (c) put minimal static content inside `<div id="root">` (React replaces it on mount) so crawlers and slow users see something.
3. **Dead preload.** `index.html:47-48` preloads `/img/avatar-96.webp`, but nothing in `src/` references "avatar" (grep = 0). Every visit downloads an unused image and all three browsers warn. Fix: delete those lines (and `public/img/avatar-*` if truly unused).

**Medium**
4. **Favicon set incomplete.** `public/favicon.svg` (255 B, fine) exists but `index.html:4` links only `favicon-64.png` (64x64 verified); `apple-touch-icon.png` is 180x180 (ok). No `favicon.ico`, so the browser's default `/favicon.ico` request 404s. Fix: add `<link rel="icon" href="/favicon.svg" type="image/svg+xml">`, keep the PNG, add a 32x32 `public/favicon.ico`.
5. **No web manifest** (`/manifest.webmanifest` 404). Fix: add one with name, short_name, `theme_color #0a0a09`, `background_color`, 192/512 icons; link it.
6. **No analytics or monitoring.** Neither `@vercel/analytics` nor `@vercel/speed-insights` is in `package.json`. Needed: `npm i @vercel/analytics @vercel/speed-insights`, render `<Analytics/>` and `<SpeedInsights/>` in `src/App.jsx`, enable both in the Vercel dashboard (or use a cookie-free tool like Plausible).
7. **Landscape-notch safe area on content.** `env(safe-area-inset-*)` is used only in `Navbar.css:300-307` and `WhatsAppButton.css:5-6`. Hero, Projects, About, Contact and Footer use bare `var(--pad-x)` (`Hero.css:10`, `Projects.css:6`, `About.css:6`, `Contact.css:6`, `Footer.css:2`). At 844 wide `--pad-x` (`index.css:125`, clamp 24-60px) is 42px, which is below a typical landscape notch inset, so text may sit under it. Reasoned from CSS, not device-tested. Fix: `padding-inline: max(var(--pad-x), env(safe-area-inset-left)) max(var(--pad-x), env(safe-area-inset-right))` on those containers. `viewport-fit=cover` is already set.
8. **Missing security headers.** Add a `/(.*)` rule in `vercel.json`: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`.
9. **README inaccurate, package name stale.** README describes glassmorphism, React 18+, Lucide/FontAwesome, Framer Motion, `useTypewriter` and a `Layout/Sections/UI` tree that do not match the current build; `package.json` name is `portfolio-2`. Fix: rewrite README (React 19, Vite 8, plain CSS, self-hosted fonts, Vercel) and rename to `midlaj-portfolio`.

**Low**
10. **No pinned Node version, no `.vercelignore`.** No `engines` in `package.json`, no `.nvmrc`. Add `"engines": {"node": ">=22"}`. Add `.vercelignore` with `research` and `scripts` to trim upload. No build command override is needed (Vite auto-detected).
11. **2560 px header misalignment.** `vp-2560.png`: logo and nav hug the viewport edges while content is capped at about 1320px and centered. Fix: give `.site-header` the same max-width/inner wrapper.
12. **Broken-image styling.** Give thumbnail boxes a paper-dark background and confirm meaningful `alt` text (`img-fail-1440.png`).
13. **No `<meta name="color-scheme" content="dark">`** and no inline `html{background:#0a0a09}` in `index.html`, so a light flash is possible before CSS loads on slow links (`color-scheme: dark` exists at `index.css:127`).
14. The immutable `/assets/` header also applies to 404s for missing hashed files; low risk, noted.

## Custom-domain change list
Every occurrence of `midlaj-portfolio-psi.vercel.app` (grep of the repo outside node_modules and research):
- `index.html`: canonical (line 11), `og:url`, `og:image`, `twitter:image`, JSON-LD `url`.
- `public/robots.txt`: `Sitemap:` line.
- `public/sitemap.xml`: `<loc>`.

Better to drive these from one value (Vite `transformIndexHtml` or a prebuild replace) so the next change is one line. Then: add the domain in Vercel, pick apex or www as canonical and let Vercel 308-redirect the other, add a `redirects` rule in `vercel.json` (with a `has: host` condition) from the old `*.vercel.app` URL to the new domain, re-scrape OG cards (LinkedIn Post Inspector, Facebook Debugger), update the GitHub repo website field and social bios, and add the domain as a Search Console property and submit the sitemap.

## NEEDS MIDLAJ
- Will you buy/use a custom domain, and apex or www?
- Analytics choice: Vercel Analytics plus Speed Insights, or a cookie-free tool?
- Wording for the noscript, error and 404 pages.
- A real iPhone (or BrowserStack) check for the landscape-notch finding and Safari reveals.
- Confirm the LinkedIn URL loads (not crawled by linkinator).
