# 1 — Content Integrity
**Score: 7/10 (current) · Target 10/10**

## Verdict
No non-Midlaj content was found. A case-insensitive search of working tree, built live bundle, index.html, JSON-LD, sitemap, robots, package files, and all 48 commits (`git log --all -S"Fayis"/"fayiz"`, name/email scan) returned zero hits for fayis, fayiz, fayoo, lorem, "john doe" (in code), "your name", or any other person's name. Every email, phone, handle and social URL matches the ground truth. The score is held down by one featured project link that is dead (expired domain), a portrait carrying an AI-tool watermark, a boilerplate README, and a few placeholder-ish items inside screenshots and git metadata.

## Findings

### Critical
- **Traveezy link is dead: the domain is expired.** `src/data/projectsData.js:47` links `https://www.traveezy.online/`. HTTPS fails (TLS alert internal error, HTTP 000); `http://www.traveezy.online/` serves a registrar page titled "Your domain is expired" (IP 2.57.91.92). Traveezy is a `featured` project, so a flagship card sends visitors to a parked page. Fix: renew the domain, or point `link` at a live deployment (e.g. a Vercel/Render URL), or drop `link` and show a "case study" instead until live.

### High
- **Portrait carries a visible Gemini sparkle watermark.** `public/img/profile-800.jpg` (and likely the .webp), bottom-right corner, shows the Google Gemini star glyph, so the photo is AI-generated or AI-edited. It is rendered in About (`About.jsx:72`, alt "Portrait of Muhammed Midlaj"). Visitors and clients may read it as not his real face; the watermark itself looks careless. Fix: replace with an unedited photo of Midlaj, or crop the corner out and be honest about edits. See NEEDS MIDLAJ.
- **Git commit identity is a placeholder: `Muhammed midlaj <you@example.com>` on all 48 commits** (author and committer). Informational for shipping, but it is public on GitHub: commits will not link to his account and show `example.com`. Fix: `git config user.email "<his GitHub noreply or real email>"` going forward; history rewrite optional. (The `fayizfayoo` email did not appear anywhere.)

### Medium
- **README.md is generic boilerplate** (lines 1-80): "Modern Developer Portfolio", `git clone https://github.com/yourusername/portfolio.git`, claims Framer Motion/Lucide/FontAwesome/glassmorphism and a `profileInfo.js`/`vite.config.js` that no longer exist or are unused. Public in the GitHub repo, so a recruiter reading it sees a template. Fix: rewrite with the real name, live URL, actual stack (React 19, Vite, plain CSS), real structure (`src/data/site.js`, `projectsData.js`).
- **`package.json` name is `portfolio-2`**, version 0.0.0, no author/repository/homepage. Fix: `"name": "midlaj-portfolio"`, add `"author": "Muhammed Midlaj"`, `"repository"`, `"homepage"`.
- **Placeholder text visible in project screenshots.** `public/img/traveezy-1024.jpg` shows the login placeholder `john.doe@example.com`, and the same screenshot appears in `public/og-image.jpg` (the social-share card). Not Midlaj's content leaking, but a stock "John Doe" in the share image. Fix: re-shoot the Traveezy screen on the dashboard/itinerary view, or use a filled demo account; regenerate og-image.
- **Two projects rely on a LinkedIn post and no screenshot.** `voice-agent` link (`projectsData.js:90`) is a LinkedIn ugcPost; LinkedIn returns 999 to bots, so liveness could not be machine-verified. Nizan Tech and Voice Agent have `image: null`.
- **Project-ownership signals worth stating.** Weddesy is hosted at `weddesy.nizantech.com` and Nizan Tech is also listed, suggesting an employer/agency relationship; client projects (Roots, BizBook, TrustCore, Team N) are on clients' domains. That is legitimate but the site claims them all as personal work with no role/credit line. Fix: add "Role: Developer at Nizan Tech" or similar where true.

### Low
- Weddesy tags say "Flutter, Dart" yet the link is a web build and the desc says "Web App"; confirm accuracy.
- `index.html` JSON-LD `email` is `mailto:...` (schema.org expects the bare address). Change to `midlaj2636@gmail.com`.
- `og:description` ("Full Stack Web Developer") and `description` differ slightly from the title role "MERN Stack Developer"; harmonize.
- `public/favicon.svg` (m-mark, lime square) differs from `apple-touch-icon.png` (green `</>` glyph on black); two different brand marks. Also `index.html` links only `favicon-64.png`, not the SVG.
- sitemap has a single URL with no `lastmod` (fine for one page).
- Git history contains orphaned assets from older versions (`public/timesheet_mockup.png`, `traveezy-visual*.png`, `icons.svg`); none is Fayis-related, no action needed.

## Checked and clean
- Zero matches for fayis/fayiz/fayoo/lorem/template-owner names in `src/`, `public/`, `index.html`, built JS (`/assets/index-CeYvCpMq.js`), and all git history (`-S` and author scan).
- Live HTML matches repo `index.html` (only Vite-injected asset tags differ).
- Title, og:title, twitter:title: "Muhammed Midlaj — MERN Stack Developer". og:url/canonical/og:image/sitemap/robots all point to `midlaj-portfolio-psi.vercel.app`; og-image returns 200.
- JSON-LD sameAs: GitHub Muhammedmidlajkp, LinkedIn muhammed-midlaj-kp, Instagram __.midlaj.___ (matches ground truth); `site.js` mirrors them. Email midlaj2636@gmail.com; WhatsApp `wa.me/919746927146`.
- GitHub origin `Muhammedmidlajkp/Midlaj-portfolio` (200). Profile 200; Instagram 200; LinkedIn 999 (bot-block, not a failure).
- HTTP 200: weddesy.nizantech.com, muhammedmidlajkp.github.io/tayoki-userside, rootsbusiness.in, bizbookconsultancy.com, trustcorecontracting.ae, muhammedmidlajkp.github.io/Yas-Clinic-HSCT-Prototype, team-n-makeovers.vercel.app, nizan-tech.vercel.app. Two are under Midlaj's own GitHub Pages account.
- Images viewed: og-image (TrustCore, Traveezy, Team N collage), profile-800, apple-touch-icon, Weddesy and Traveezy screenshots: all work from the listed projects; no foreign brands. Footer: "© year Muhammed Midlaj". No CV file, form endpoint, analytics ID, or manifest present (no third-party IDs to leak).

## NEEDS MIDLAJ
- Renew `traveezy.online` or supply the live URL.
- A genuine, unwatermarked portrait.
- The email to set in git config / confirm that `you@example.com` history is acceptable.
- Confirm roles/credits for Weddesy, Nizan Tech and client work, and that Weddesy is actually Flutter.
- Whether he wants a CV/resume PDF linked (none exists), and a Voice Agent demo/screenshot.
- Confirm LinkedIn URL and post link are live (bot-blocked from here).
