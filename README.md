# Muhammed Midlaj: portfolio

Personal portfolio of Muhammed Midlaj, a MERN stack developer building websites and web apps for clients in India and the UAE.

Live: https://midlaj-portfolio-psi.vercel.app/

## Stack

- React 19 and Vite 8, single page, plain CSS (no CSS framework).
- Build-time prerender: the page is rendered to HTML at build (`scripts/prerender.mjs`) and hydrated in the browser, so crawlers and slow connections get real content.
- Fonts self-hosted (Instrument Serif, Geist, DM Mono; latin subsets).
- Deployed on Vercel from `main`. Headers and caching live in `vercel.json`.

## Run it

```bash
npm install
npm run dev        # development server
npm run build      # client build, server build, prerender
npm run preview    # serve the production build locally
npm run lint
```

Needs Node 22 or newer.

## Where things are

| Path | What |
|---|---|
| `src/data/site.js` | name, role, email, WhatsApp, socials, clock time zone |
| `src/data/projectsData.js` | projects (title, description, tags, image, link, `featured`) |
| `src/data/skillsData.js` | the capabilities ledger |
| `src/components/Sections/` | Hero, Projects, About, Contact |
| `src/components/Layout/` | header and menu, footer, custom cursor |
| `src/index.css` | design tokens (colour, type, spacing, motion) and base styles |
| `public/` | fonts, project images, icons, manifest, 404 page |
| `scripts/` | build and image tooling (below) |
| `research/` | design research, audits and reports behind the redesign |

## Scripts

- `scripts/prerender.mjs`: runs after the build. Renders the page into `dist/index.html`, generates the JSON-LD from `src/data`, writes `sitemap.xml` and `robots.txt`, and fails the build if the inline script's hash is missing from the Content-Security-Policy in `vercel.json`.
- `scripts/make-variants.mjs`: creates the AVIF, 480px and thumbnail image variants from the largest WebP of each project (`node scripts/make-variants.mjs`).
- `scripts/make-icons.mjs`: creates every icon (favicon, apple-touch icon, manifest icons) from `public/favicon.svg`.
- `scripts/img.mjs`: the original image pipeline for new screenshots (see the comment at the top of the file).

## Configuration

- `VITE_SITE_URL` (in `.env`): the public address. It drives the canonical link, Open Graph URLs, JSON-LD, sitemap and robots. When a custom domain is connected, set this variable in Vercel (or change `.env`) and redeploy.
- `VITE_ENABLE_INSIGHTS=1`: turns on Vercel Web Analytics and Speed Insights. Enable both in the Vercel dashboard first; until then leave it unset (their scripts would return 404).

## Adding a project

Add an entry to `src/data/projectsData.js`. Put a screenshot at 1280px wide in `public/img/` (see `scripts/img.mjs`), then run `node scripts/make-variants.mjs` and list the widths in the entry. Leave out `link` if there is no live site (a quiet note is shown instead).

## Standards for changes

- Lighthouse 95 or higher in every category, on mobile and desktop.
- WCAG 2.2 AA: keyboard operable, visible focus, reduced motion respected.
- Only real content. Items waiting for Midlaj are marked `TODO-MIDLAJ` in the code (`grep -rn TODO-MIDLAJ src`).
