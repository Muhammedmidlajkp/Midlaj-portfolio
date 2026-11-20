# 6 — Technical SEO
**Score: 6/10 (current) · Target 10/10**

Lighthouse SEO is 100 (audit.md s10), but that checks basics only. It does not test crawlability of content, structured-data quality or brand discoverability.

## Raw HTML vs rendered DOM (what a crawler sees)
- `curl https://midlaj-portfolio-psi.vercel.app/` returns 3,099 bytes: head metadata + one JSON-LD block + `<body><div id="root"></div>`. **Zero H1/H2, zero body text, zero links, zero images** in raw HTML.
- Rendered (Playwright): 937 chars of text, one H1, 3 H2, 8 H3, 17 anchors-to-ids, 7 project articles, 13 external client links.
- Googlebot does render JS, so content is eventually indexed, but only after the render queue; Bing and social/AI crawlers (LinkedIn, WhatsApp, GPT/Claude bots) mostly see the empty shell. The head tags are static, so link previews work.
- **Fix sized to a one-page site:** build-time prerender of `/`. Cheapest: `vite-react-ssg` or `vite-plugin-prerender`/`@prerenderer/rollup-plugin` (Puppeteer snapshots `/` into `dist/index.html` during `vite build`; Vercel build works). Keep `createRoot` for dev; use `hydrateRoot` in prod. Ensure the preloader/reveal code does not hide text in the snapshot (check `opacity:0` states are CSS-only). Fallback with no tooling: put a `<noscript>` block in `index.html` with H1, one-paragraph summary, and a list of the 7 project names plus live URLs. Roughly 1 hour of work.

## Findings
**Critical**
1. **No prerendered content** (above). Evidence: curl output; `index.html:46-47`. Fix: prerender as described.
2. **Not discoverable by name.** WebSearch `site:midlaj-portfolio-psi.vercel.app` returned nothing from the domain; "Muhammed Midlaj MERN stack developer portfolio" surfaced a *different* Muhammed Midlaj (midlaj-muhammed.github.io, AI/ML), a Fiverr profile `ft_midlaj`, a Twine profile and a LinkedIn `/in/midlajmj`. This portfolio is not visible in results (WebSearch is a proxy; confirm in Search Console). Namesake competition is real. Fix: Search Console verify and request indexing; custom domain; link the site from GitHub/LinkedIn/Instagram bios (already `sameAs`, so make the reverse links exist).

**High**
3. **`*.vercel.app` host, no custom domain.** Weak brand and trust signal; canonical, OG, sitemap and JSON-LD all hard-code this host, so a later move needs a coordinated change plus 301s (Vercel redirects domain-to-domain). Fix: buy e.g. a `midlaj.dev`-style domain (NEEDS MIDLAJ), then replace the host in `index.html`, `public/robots.txt`, `public/sitemap.xml`.
4. **JSON-LD thin and slightly wrong** (`index.html:21-35`). Person only. `"email": "mailto:midlaj2636@gmail.com"` should be the bare address (or dropped; it is also exposed in page links, so harvesting risk is already present). Missing: `image`, `@id`, `description`, `address`/`workLocation`, `WebSite` node, `hasPart`/project `CreativeWork`s. No author mismatch with namesakes is resolved: add `sameAs` consistently.
5. **Project images all `alt=""`** (13 of 14 images; only the portrait has alt). Many are in links that have text, so decorative may be defensible for the thumbs, but the 1280px screenshots are the real content. Fix: `alt="Weddesy homepage screenshot"` style on the feature images.
6. **Many link texts empty/duplicate**: 20+ anchors with no text or aria-label (the project image links, social icons, whole-card link duplicates). Lighthouse passes, but screen readers and crawlers get no anchor text. Fix: aria-label on every icon/image link ("GitHub profile", "LinkedIn profile", "Visit Roots Business").

**Medium**
7. **Sitemap has no `<lastmod>`** and `changefreq/priority` (ignored by Google). Valid otherwise, absolute canonical host, HTTP 200 `application/xml`. Add `<lastmod>2026-11-20</lastmod>` and keep it updated at build.
8. **og:image is a tile collage with no name/brand.** `/og-image.jpg` 200, image/jpeg, 1200x630 (correct), 86,371 bytes (good). Content: lime accent bar plus screenshots of TrustCore, Traveezy and Team N Makeovers, **no text, name or role**. In a feed it reads as "random screenshots". Fix: add "Muhammed Midlaj, MERN Stack Developer" in the type and portrait; add `og:image:alt`, `og:site_name`, `og:locale=en`.
9. **OG/Twitter description differs from meta description** and the Twitter one drops the India/UAE line. Harmless; unify.
10. **No web manifest** (`/manifest.webmanifest` 404) and **no `favicon.ico`** (404; browsers and some crawlers request it by default). Fix: add `favicon.ico`, `<link rel="icon" type="image/svg+xml" href="/favicon.svg">` (the SVG exists in `public/` but is unreferenced), and a minimal manifest with name, theme_color `#0a0a09`, 192/512 icons.

**Low**
11. Title 38 chars (under the 50-60 guidance; room for keywords). Description 152 chars (fine).
12. `theme-color` present (`#0a0a09`); consider `color-scheme` meta.
13. No `hreflang` needed (single language). `lang="en"` set.
14. Good, keep: canonical absolute and matches host; robots allows all and points at sitemap; no noindex, no `X-Robots-Tag` (checked with a Googlebot UA); unknown paths return a true 404 (no soft-404); `rel="noopener noreferrer"` on every external link; exactly one H1; landmarks (header, 2 labelled navs, main, section/article, footer, aside); skip link; apple-touch-icon 200; favicon-64 200; cache headers sane; hash anchors only (fine for a single page).

**Heading outline:** H1 "One developer, from the first sketch to the deployed server." > H2 Selected work > H3 x7 project names (Weddesy, Tayoki, Roots Business, Traveezy, TrustCore Contracting, Yas Clinic HSCT Protocol System, Team N Makeovers) + H3 More projects > H2 "Crafting code with purpose." > H3 What I work with > H2 "Let's build together." Logical. **Weakness:** the H1 and the title carry no keyword ("MERN", "developer" appear only in the visible hero label/meta). Keep the poetic H1, but make sure "MERN stack developer" appears in an adjacent visible line (verify in hero eyebrow) so on-page text matches the title.

**Page speed signals:** Lighthouse mobile 100/100/100/100 (LCP 1.5 s, CLS 0, TBT 10 ms) per audit.md. Mobile viewport set with `viewport-fit=cover`. No issues.

## Proposed metadata (real facts only)
- **Title (54):** `Muhammed Midlaj | MERN Stack Developer for India & UAE`
  Alt (38, current): `Muhammed Midlaj — MERN Stack Developer`. Alt: `Muhammed Midlaj — Full-Stack MERN Developer, India & UAE` (55).
- **Description (158):** `Muhammed Midlaj is a MERN stack developer who builds, ships and hosts full-stack web apps. Live client projects in India and the UAE: React, Node.js, MongoDB.`
- Keyword targets: "Midlaj", "MERN stack developer", "full stack developer Kerala" (only if Kerala is confirmed), "React developer India", "web developer UAE". Brand name first because queries are name queries.
- **JSON-LD outline (graph):**
  - `WebSite` {`@id` `#website`, name, url, `inLanguage: en`, `publisher: #person`}
  - `Person` {`@id` `#person`, name "Muhammed Midlaj", `jobTitle` "MERN Stack Developer", url, `image` (absolute portrait URL, e.g. `/img/profile-800.jpg`), `email` plain, `sameAs` [GitHub, LinkedIn, Instagram; add Fiverr/Twine only if they are his], `knowsAbout` (existing list), `description`}
  - `ProfilePage` {`mainEntity: #person`, `dateModified`} (Google supports ProfilePage for creator profiles)
  - Project `CreativeWork` x7 with `name`, `url` (live URL), `creator: #person`, `image`.
  - Rich Results is not triggered for any of this; the value is entity disambiguation and name-query matching.

## NEEDS MIDLAJ
- Custom domain choice and purchase (and confirm he will control it long-term).
- Google Search Console access (verify, submit sitemap, request indexing) and Bing Webmaster.
- Which of Fiverr `ft_midlaj`, Twine "Muhammed Midlaj T", LinkedIn `/in/midlajmj` are actually his (for `sameAs`; the site currently uses `/in/muhammed-midlaj-kp/`). Never guess.
- Location (town/state, country) for `address`/local keywords; whether he wants an email address visible (currently in plain mailto and JSON-LD).
- Permission to put his name and portrait in a new OG image.
- Confirm "Full Stack Web Developer" vs "MERN Stack Developer" as the primary label (title and OG title currently differ in wording).
