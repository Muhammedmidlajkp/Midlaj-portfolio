# Forensic audit: Director's report (Phase 1)

Audited: https://midlaj-portfolio-psi.vercel.app/ at commit `dee9119` (React 19 + Vite single-page site, plain CSS, no animation library). Nine specialists, reports in `research/forensic/1` to `9`. Read-only: no code was changed. Builds on `research/audit.md` and `research/audit/`; finished work is not repeated.

## 1. The question you asked first: is there any non-Midlaj content?

**No.** The Content Integrity specialist searched the working tree, the live bundle, `index.html`, JSON-LD, sitemap, robots, package files and all 48 commits for fayis, fayiz, fayoo, lorem, placeholder names and other people's names: zero hits. Every email, phone, handle and social link is Midlaj's, and the 8 outbound project links that could be checked return HTTP 200. Three things came close and are listed below (a dead Traveezy link, an AI watermark on the portrait, placeholder text inside a screenshot), but none is another person's content.

## 2. Scorecard: current vs target

| # | Category | Current | Target | One-line reason |
|---|---|---|---|---|
| 1 | Content integrity | 7.0 | 10 | Clean of foreign content; dead Traveezy link, watermarked portrait, boilerplate README |
| 2 | UI / visual design | 6.5 | 9 | One memorable idea (hero) that stops after the hero; features repeat; About weakest (5.3) |
| 3 | UX & information architecture | 6.5 | 9 | Offer buried in muted copy; no depth behind projects; contradictory stats; anchor bug |
| 4 | Motion & scroll | 6.0 | 9 | Frame rate healthy (p95 16.7 ms) but anchor geometry broken; no motion system in one place |
| 5 | Performance | 9.0 | 10 | Mobile median 99, desktop 100; empty HTML shell holds LCP back |
| 6 | Technical SEO | 6.0 | 10 | Lighthouse SEO 100, but a crawler sees an empty page; thin JSON-LD; not visible in search |
| 7 | Accessibility | 8.0 | 10 | axe 0 violations; focus ring invisible on the paper chapter; anchor landing |
| 8 | Code quality & security | 6.5 | 10 | Clean code, 0 prod vulnerabilities; only HSTS header present |
| 9 | Production readiness | 6.0 | 10 | No custom 404, blank page without JS, no error boundary, no analytics, no manifest |
| | **Average** | **6.8** | **9.7** | |

Lighthouse today (3 mobile runs, 2 desktop, live): **mobile median 99 / 100 / 100 / 100, desktop 100 across the board.** The 95+ rule holds. Note: my earlier "mobile 100" was a best case; the fresh median is 99.

## 3. Top 10 issues

1. **In-page links overshoot (Critical, and my own regression).** From a cold load, header and menu links land far past their target: desktop `#about` ends 1,429px past it; the mobile menu's About lands 896-1,069px past it, so the visitor misses the portrait, bio and stats. Three specialists confirmed it independently. Cause: the `content-visibility` placeholder size I added in the quick-wins step (`src/index.css:185-191`) is 700px where real sections are 440-1,900px, so smooth-scroll targets are computed from wrong heights. Fix: remove it from About, features and Contact.
2. **Traveezy (a featured project) links to an expired domain.** `traveezy.online` shows a registrar "domain expired" page. Needs your decision.
3. **The page ships as an empty shell.** The raw HTML has no heading, text or links; with JavaScript off, failed or slow, visitors and crawlers (Bing, LinkedIn, WhatsApp, AI bots) get a blank page, and there is no error boundary. Fix: build-time prerender plus a `<noscript>` fallback and an error boundary. This is also the largest performance win (about 0.6-0.9 s LCP).
4. **Poor discoverability.** No result for the site in search, other people named Midlaj outrank the name, the host is `*.vercel.app`, JSON-LD is thin, and the social-share image is a screenshot collage with no name or role. Fix: custom domain, Search Console, richer JSON-LD, designed OG image.
5. **Missing security headers.** Only HSTS is set; no CSP, frame, nosniff, referrer or permissions headers. A ready-to-use block is in report 8.
6. **Edge states are missing.** No custom 404 (plain text from Vercel), a dead avatar preload that warns in Chromium, Firefox and WebKit, no manifest, no `favicon.ico`, no analytics.
7. **The portrait carries a visible Gemini sparkle watermark.** Visitors may read it as not his real photo. Needs a genuine photo from you.
8. **Keyboard focus ring is nearly invisible on the paper chapter** (lime on cream, 1.08:1; needs 3:1). Fix: dark ring on paper.
9. **Thin proof and generic copy.** No case studies, testimonials, services or CV; "10+ happy clients" contradicts "3 live client sites"; About and Contact copy is stock; the offer (who he is, who for) sits in muted text under a slogan headline. Needs real content from you.
10. **The design idea stops after the hero.** Seven features are one repeated 7/5 row; hero thumbnails are cropped and dim (the third reads "ngineering e Future of obal") and only about 28px tall on a phone; they also load at 480px to display at about 48px.

Also noted: all 48 commits carry the placeholder author email `you@example.com`; the README and `package.json` name (`portfolio-2`) are template leftovers; 10 dev-tool vulnerabilities (0 in production).

## 4. NEEDS MIDLAJ

I will not invent any of this.

**Blocking accuracy**
- Traveezy: renew `traveezy.online`, or give the live URL.
- A real, unwatermarked portrait photo.
- Which stats are true ("10+ happy clients", "1.5 years"). The "3 live client sites" and project count are checkable.
- Your role or credit on Weddesy and Nizan Tech and the client sites, and whether Weddesy is really Flutter.
- The email to use for git commits (a GitHub noreply address works).

**Content for the proof layer**
- Per project: role, problem, what you built, real outcome, launch date, and whether the client may be named. Needed for BizBook, Nizan Tech and AI Voice Agent especially, plus screenshots or a decision to drop them.
- Testimonials with name and role (only if real).
- Services you offer, how you engage, typical timeline, and a price band or "quote within X hours".
- A CV PDF and a short work or freelance timeline.
- A reply time you will honour; what "Available for work" means (freelance, full-time, from when).
- A specific About bio (about 40 words: where you are from, what you have shipped, what you are learning) and one concrete contact invitation line.
- Town or state if you want location in the search metadata.

**Accounts and decisions**
- Custom domain (buy it; apex or www).
- Google Search Console and Bing Webmaster access.
- Which of the other "Midlaj" profiles (Fiverr, Twine, a different LinkedIn) are really yours, for `sameAs`; the site uses `/in/muhammed-midlaj-kp/`.
- Primary label: "MERN Stack Developer" or "Full Stack Web Developer".
- Permission to put your name and portrait in a new social-share image.
- Analytics: Vercel Analytics + Speed Insights, or a cookie-free tool; both need enabling in your Vercel dashboard.
- Contact form: only if wanted. Needs a Resend or Postmark account and API key as a Vercel environment variable, a verified sender, and optionally rate-limit storage. I will not handle the keys.
- Approve the prerender build step; approve AVIF alongside WebP; is DM Mono 500 used anywhere?
- Is inertial smooth scrolling (Lenis) worth its cost? Reveals that play once (ScrollTrigger style) or scrub with scroll as now? Is the GSAP "no charge" licence fine for client work?
- Delete the unused avatar images? Should WhatsApp's floating button be keyboard-focusable? Should clicking the email also open the mail app?
- A real-iPhone check (landscape notch, Safari). Everything here was tested in browsers on this machine only.

## 5. Prioritised plan

### Phase 2: foundation fixes (production, SEO, security)
In this order, ending with a before/after table:
1. **Hotfix first:** remove `content-visibility` from About, features and Contact (keep or measure it for the index only); verify Menu to About lands at 96px on desktop and mobile; re-run Lighthouse.
2. **Content integrity:** rewrite README; rename package and add author, repository, homepage, engines; set git email going forward; fix JSON-LD email to a plain address; give every project image meaningful alt text and every icon or image link an accessible name. Traveezy link and portrait wait on you (leave a `TODO-MIDLAJ`).
3. **SEO:** title 50-60 characters and description 140-160 around "Midlaj" + real profession (proposals in report 6); canonical, OG and Twitter unified with `og:image:alt`, `site_name`, locale; a designed 1200x630 OG image with your name and role (needs your permission and portrait); JSON-LD graph (WebSite, Person with plain email and image, ProfilePage, one CreativeWork per project); sitemap `lastmod`; `favicon.ico`, SVG favicon link, manifest; **prerender `/` at build time and hydrate**, plus `<noscript>` content.
4. **Security and resilience:** the `vercel.json` header block (CSP with a hash for the JSON-LD, nosniff, frame, referrer, permissions), React error boundary, custom `404.html`, dev-dependency updates (vite, plugin-react), `sharp` declared as a dev dependency.
5. **Production:** Vercel Analytics and Speed Insights (you enable them), safe-area padding on content containers, `color-scheme` meta and inline background, header width capped at 1920px and up, remove the dead avatar preload, DM Mono preload (drop weight 500 if unused), 96/192px hero thumbnail variants, 480px feature variants and AVIF.
6. **Accessibility quick wins:** dark focus ring on paper, "opens in a new tab" on menu links, 44px targets, tucked WhatsApp button `aria-hidden`/inert, hover-dim .6, menu initial focus on Close.

Gate: Lighthouse 95+ in all categories, mobile and desktop, before I stop.

### Phase 3: smooth scroll and motion
Prerequisites from the forensic audit: Phase 2 hotfix and prerender done; delete `scroll-behavior: smooth`; remove the native `view()` reveals the moment ScrollTrigger reveals go in (otherwise elements animate twice; keep the progress bar native); anchors via `lenis.scrollTo` with a -96px offset; `lenis.stop()` in the menu effect; never pin `.paper`; no Lenis under reduced motion; touch stays native. **Budget:** Lenis + GSAP + ScrollTrigger is about 43 KB gzipped (an estimate); bundled into the main chunk it likely drops mobile to 94-97, so it will load after idle on top of the prerendered hero, with an initial-JS cap of 70 KB gz and an animation chunk cap of 45 KB. One shared motion-token file mirrored to CSS variables. Then the section-by-section motion list you specified, using transform, opacity and clip-path only. Verify with a scroll recording, frame times, no console errors and Lighthouse 95+.

### Phase 4: polish and QA
Re-run all nine audits with before/after scores; hover and focus finesse; the design items from reports 2-3 (lead project full-bleed, alternating 5/7 rows with sticky text, hand-cropped legible hero thumbnails, About and Contact rework once real content exists, footer baseline fix); axe 0, linkinator 0 broken, Rich-Results-ready JSON-LD, `research/LAUNCH-CHECKLIST.md`, then push and confirm the live deploy.

## 6. Caveats on this audit
- Context7 was not connected; library facts came from web search and are marked where uncertain (the Lenis and GSAP sizes are estimates, not builds).
- Playwright was driven through Node scripts, not the Playwright MCP.
- Search visibility was checked through web search only; confirm it in Search Console.
- Firefox was an older local build and did not support scroll-driven animations (content stayed visible, as designed); WebKit clipboard tests were permission-limited.
- Safe-area and notch behaviour is reasoned from CSS, not tested on a device.
- The CSP in report 8 is untested; test it on a preview deployment before shipping.
