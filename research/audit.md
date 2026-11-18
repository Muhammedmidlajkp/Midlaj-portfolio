# Audit: current portfolio vs minimal / editorial direction

Chosen direction: **1. Minimal / editorial** (see `patterns.md`, "Three overall visual directions").
Reference sites for this direction: Moiséz, Denny Pratama, Arshawn Arbabi, Giordano Betti, with borrowed ideas from Brandon Yasin (menu) and Yehor Herasymenko (slide transition, projects only).

Audited: the dev build at commit `4773a8b`, captured at 1440px and 390px (`research/screenshots/midlaj-current-*.png`). Source read: `App.jsx`, `Hero.jsx`, `Projects.jsx`, `About.jsx`, `Contact.jsx`, `Navbar.jsx`, `index.css`, `data/*`, `index.html`. No code was changed.

Not measured yet: Lighthouse. A dev-server run is misleading, so the baseline should be taken on a production build before the first change.

---

## 0. Blocking issue found: undeclared dependency

`src/components/Sections/Hero.jsx` imports `framer-motion`, but it is **not in `package.json` or `package-lock.json`**. It currently resolves only because a copy sits in the parent checkout's `node_modules`.

- On a clean clone (what Vercel does), `vite build` should fail with an unresolved import. I could not reproduce that cleanly here because this worktree sits inside the parent checkout and picks the parent's copy up. Treat it as very likely, not proven.
- The cause is commit `4773a8b` ("new chnages"), which also stopped using `HeroBackdrop`/`HeroThreads`. Those files and `LightRays.jsx` (562 lines) are now unused code.
- Side effect I hit: running `npm ci` inside the worktree produced two copies of React and a blank page ("Invalid hook call"). I removed that `node_modules`; the worktree is back to its original state.

Fix options: (a) add `framer-motion` to dependencies, or (b) drop it when the hero is rebuilt for this direction. Option (b) fits the minimal direction and removes about 100 KB of JS, but it should only happen as part of the hero rewrite. **Check your Vercel dashboard: if the latest deploy failed, this is why.**

---

## 1. Overall system

| Aspect | Today | Minimal / editorial target |
|---|---|---|
| Palette | Near-black `#080808`, lime accent `#c8f250`, grey text | Keep the dark + lime identity (it is yours and it works); use lime sparingly, only for status/CTA/focus |
| Type | Syne 800 (very wide, 128px hero), DM Mono body, Instrument Serif italic loaded but barely used | Pick one display voice and one mono. Syne's extra-wide letterforms are the least editorial part of the site; consider a tighter grotesk for headings and using the serif for one accent word. This is the biggest single "feel" change |
| Backgrounds | Grid overlay, hero glow, noise overlay, preloader curtain | Reduce to noise at most; editorial sites rely on whitespace, hairlines and type |
| Layout | Centred max-width cards, `// Label` section tags | 12-column grid with hairline rules, numbered sections, mono micro-labels |
| Motion | Per-character hero animation, reveal-on-scroll, custom cursor | Fewer, better moments: blur-to-sharp text reveals, one scroll-linked detail |
| Chrome | Floating WhatsApp button on every screen, custom cursor | Keep WhatsApp but make it quieter; keep custom cursor only if it adds a state (hover label) |

---

## 2. Section by section

### Hero (`midlaj-current-hero.png`, `midlaj-current-mobile-hero.png`)
**Today:** Giant three-line headline "Building the web of tomorrow." with the middle line in lime, mono paragraph, two pill buttons, "Available for work" tag, grid and glow background.
**Strengths:** Clear, bold, the availability tag is exactly the right idea (Moiséz, Arshawn do this).
**Gaps vs best patterns**
- The headline is generic. Nothing in it says who you are or what you build; top editorial heroes (Denny Pratama, Moiséz) state the pitch concretely and show work or an object.
- No live detail (clock, location, status) beyond the static tag.
- No work visible above the fold.
- **Mobile bug:** on 390px the period of "tomorrow." is clipped at the right edge (visible in the mobile screenshot).
- Per-character animation in `Hero.jsx` is 200 lines of custom splitting; it would be replaced, not extended.
**Plan:** Re-state the headline in your own voice (needs your input), set it in the new type system with 2-3 small project thumbnails inline between words (Moiséz pattern), add a live Kochi/IST clock and availability dot, keep one primary CTA.

### Navigation (`midlaj-current-hero.png`)
**Today:** Floating pill with logo, four links, lime "Let's Talk" button, active-section underline, focus-trapped mobile menu (well built).
**Strengths:** Accessibility is genuinely good (focus trap, Escape, skip link, `aria-label`). Scroll-spy works.
**Gaps:** It is a standard SaaS pill. Nothing memorable.
**Plan:** Keep the logic and accessibility; restyle as a minimal fixed header (wordmark left, MENU + "Let's talk" right), and make the mobile/desktop menu a full-screen numbered overlay (John Bolster / Brandon Yasin pattern). The zoom-out spatial menu is possible but costs a lot of work for four sections; recommend the numbered overlay first.

### Skills (no direct reference section)
**Today:** Three large cards of tool tiles with icons (Render, GitHub, AI APIs, Postman, Swagger, and so on), roughly 240 lines of CSS.
**Gaps:** Tile grids of logos are the most "template" part of the site; none of the 30 reference portfolios use one.
**Plan:** Collapse into a quiet mono list or a single "Capabilities" ledger inside About (Huy Phan credential-ledger pattern), freeing a whole screen.

### Projects (`midlaj-current-work.png`, `midlaj-current-about.png`)
**Today:** Nine cards in a 2-column grid, first one featured, each with screenshot, number, title, long paragraph, tag chips and "View Project". Two projects (Nizan Tech, AI Voice Calling Agent) show an initials placeholder instead of an image. Good responsive image setup (WebP sets).
**Strengths:** Real, varied, live projects including client work in India and the UAE; this is your strongest asset.
**Gaps**
- Every project gets equal weight and a paragraph; nine cards of the same shape means nothing stands out. Top showcases give each project a moment and an index.
- Tag chips and long descriptions add visual noise.
- The two placeholders look unfinished next to real screenshots.
- Numbering is inconsistent ("03 — Client Work" is baked into the number string).
**Plan:** Editorial index list (Giordano Betti / Huy Phan): number, title, one-line description, year/role, tech in mono, with a hover/active image preview. Feature 3-4 best projects with large images and slide transition (Yehor pattern) and keep the rest as list rows. Decide what to do about the two placeholders (screenshots needed from you).

### About (`midlaj-current-*`; no dedicated screenshot captured, About sits between hero and skills)
**Today:** Heading "Crafting code with purpose.", two generic paragraphs, four stats and a custom ProfileCard component with the avatar.
**Gaps**
- Copy is generic ("clean code and thoughtful design", "brewing the perfect cup of coffee"); the best About sections prove personality in one gesture and still give facts.
- **Content consistency:** stats say "5 Featured Projects", "10+ Happy Clients" and "3 Live Client Sites", while the site lists 9 projects and 2 client sites tagged "Client Work" (Roots Business, BizBook) plus TrustCore and Team N. I did not change these; **please confirm the true numbers** before they are reused.
**Plan:** One strong gesture (e.g. a small interactive typographic element, Moiséz-style, kept lightweight), a short factual bio in your own words, your real stats, and the capabilities ledger from Skills. Replace the ProfileCard with a simple photo treatment.

### Contact / Footer (`midlaj-current-contact.png`)
**Today:** "Let's build together." headline, three-field form that opens the visitor's mail app (no backend), "OR", email in large type with lime underline, three pill social links, a big name wordmark footer.
**Strengths:** Email is large and visible, social links present, form tells the visitor what happens.
**Gaps:** The mailto form is a weak experience and duplicates the email; the footer repeats navigation. The closing moment is not memorable.
**Plan:** Make the closing line the email itself in giant type (Denny Pratama pattern) with a "copy email" button (John Bolster), keep WhatsApp and socials as a mono link row, and drop the form unless you want a real backend. Keep the oversized name wordmark; it already suits the direction.

### Micro-interactions
**Today:** Reveal-on-scroll, per-character hero, custom cursor (`has-custom-cursor` guard is well done), preloader curtain.
**Plan:** Add live clock + availability dot, blur-to-sharp headline reveals, a hover image preview on project rows, and a scroll-linked section counter in the header. Respect `prefers-reduced-motion` as the existing code already does.

---

## 3. What to keep

- Dark theme + lime accent, DM Mono as the micro-label voice.
- All accessibility work (skip link, focus ring, focus-trapped menu, reduced-motion handling, visually-hidden labels).
- Responsive image pipeline (`scripts/img.mjs`, WebP sets) and SEO/JSON-LD in `index.html`.
- Data-driven structure (`data/site.js`, `data/projectsData.js`), which makes the projects rewrite cheap.

## 4. Performance and mobile notes (to verify with Lighthouse)

- Current JS bundle was 369 KB (121 KB gzip) in the build I ran; most of that is React plus `react-icons` and `framer-motion`. Removing `framer-motion` and trimming icon imports would help.
- About 560 lines of unused WebGL code (`LightRays.jsx`, `Threads`) are not imported by `App.jsx` after `4773a8b`; they can be deleted.
- Three Google font families are loaded (Syne, DM Mono, Instrument Serif). The new type system should load at most two, with `font-display: swap` and a preload for the hero face.
- Mobile hero clipping bug above should be fixed in the hero rewrite.

---

## 5. Proposed order of work (one section at a time, shown to you before moving on)

| # | Step | Result |
|---|------|--------|
| 0 | Baseline + hygiene: resolve the `framer-motion` dependency, take a production Lighthouse baseline | Safe deploys, a number to beat |
| 1 | Design tokens + type system | New fonts, spacing, hairline/grid utilities |
| 2 | Hero | New headline, inline project thumbnails, live clock, mobile fix |
| 3 | Navigation | Minimal header + numbered overlay menu |
| 4 | Projects | Editorial index + 3-4 featured slides |
| 5 | About + Skills merge | One gesture, factual bio, capabilities ledger |
| 6 | Contact / Footer | Giant copyable email, link row |
| 7 | Micro-interactions + performance pass | Final polish, Lighthouse 90+, mobile QA |

Each step ends with a screenshot review and a commit.

## 6. Decisions (answered by you)

1. **Hero angle:** "Design + build", the front-end craft plus full-stack backend pairing. I will draft the wording and show you options before using it.
2. **About stats:** keep as they are (1.5 years, 5 featured projects, 10+ happy clients, 3 live client sites). I will not change the numbers.
3. **Nizan Tech and AI Voice Calling Agent:** you will supply screenshots. Until they arrive, these two keep the typographic placeholder.
4. **Contact:** email + WhatsApp only. The mailto form is removed in the Contact step, replaced by a giant copyable email and a link row.
5. **WhatsApp floating button:** not answered; default is to keep it, restyled to be quieter.

---

## 7. Outcome (final pass)

All seven steps are built, each as its own commit on `claude/portfolio-upgrade-setup-d7ec4c`:
dependency fix, type system, hero, navigation, projects, about (with skills merged), contact and footer, then a final performance and accessibility pass.

**Lighthouse on the production build (localhost, `vite preview`)**

| | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|
| Mobile before final pass | 58 | 100 | 100 | 100 |
| Mobile after | 98 | 100 | 100 | 100 |
| Desktop before | 99 | 100 | 100 | 100 |
| Desktop after | 100 | 100 | 100 | 100 |

Mobile after: FCP 1.4 s, LCP 2.4 s, TBT 30 ms, CLS 0.

What moved mobile from 58 to 98:
- Fonts self-hosted in `public/fonts` (latin subset, OFL). The Google Fonts stylesheet was a cross-origin render-blocking request worth about 5 s under Lighthouse's slow-4G simulation.
- The first featured project image is lazy-loaded (it is far below the fold).
- Hero thumbnails use 320px files (6-9 KB) instead of 640px files.

Bundle: JS 368 KB to 211 KB (gzip 120 to 67 KB) after dropping framer-motion and react-icons; about 1,900 lines of unused code removed (old hero WebGL, skills tiles, profile card, reveal hook).

**Checks run on the production build:** no horizontal overflow from 320 to 1920px; every control reachable by keyboard with a visible focus ring; menu focus trap, Escape and focus return; reduced motion respected (preloader hidden, entrance animation neutralised); custom cursor only with a mouse; zero console errors.

**Known and left alone**
- Lighthouse still lists about 57 KiB of possible image savings (down from 96 KiB after adding 960px variants of the three featured screenshots); the rest is the 1280px fallback and Traveezy at 1024px.
- Hover states were checked by code and in screenshots of focus/menu, not exhaustively by hand.
- Lighthouse was run on localhost against a simulated slow-4G profile; re-run it on the Vercel URL after deploy for the real number.
- Nizan Tech and the AI Voice Calling Agent still have no screenshots (waiting on you).
- The bio copy is the original wording; it is generic and worth rewriting once you share more about yourself.

### Live site check (https://midlaj-portfolio-psi.vercel.app/, commit 4379a45)

| Run | Performance | Accessibility | Best practices | SEO | FCP | LCP | TBT | CLS |
|---|---|---|---|---|---|---|---|---|
| Mobile (1) | 92 | 100 | 100 | 100 | 1.5 s | 1.9 s | 270 ms | 0 |
| Mobile (2) | 93 | 100 | 100 | 100 | 1.3 s | 1.7 s | 290 ms | 0 |
| Desktop | 100 | 100 | 100 | 100 | 0.3 s | 0.4 s | 0 ms | 0 |

Above the 90 target everywhere. Mobile TBT is higher live than on localhost (about 20-30 ms there): one forced layout of about 100 ms plus style and layout work on a CPU-throttled run. The same code scored 98 locally, so part of the gap is run-to-run noise on a busy machine. If mobile needs to go higher, the first thing to look at is that forced layout (top function in the main JS bundle).
