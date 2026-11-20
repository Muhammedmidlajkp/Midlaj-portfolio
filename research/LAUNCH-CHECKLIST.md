# Launch checklist (steps only Midlaj can do)

## Before launch
- [ ] Buy or connect a custom domain in Vercel, then set `VITE_SITE_URL` to it (Vercel env + `.env`) and redeploy. Canonical, Open Graph, JSON-LD, sitemap and robots all follow it.
- [ ] Submit `/sitemap.xml` in Google Search Console (add the property, verify, Sitemaps, submit). Do the same in Bing Webmaster Tools.
- [ ] Turn on Web Analytics and Speed Insights in the Vercel dashboard, then set `VITE_ENABLE_INSIGHTS=1` and redeploy.
- [ ] Replace the LinkedIn and Instagram links in `src/data/site.js` if they are not yours, and tell us which profiles to list in the JSON-LD `sameAs`.

## Content only you can supply (`grep -rn TODO-MIDLAJ src`)
- Traveezy live URL (the old domain traveezy.online has expired) or keep it without a link.
- A real portrait without a watermark.
- Whether "10+ happy clients" and "1.5 years" are accurate.
- Your role and credits on Weddesy, Nizan Tech and client projects; permission to name clients.
- Per project: the problem, the outcome, launch date.
- Short About bio (about 40 words) and the contact invitation line.
- Screenshots for BizBook, Nizan Tech and AI Voice Agent.
- Testimonials, services, price band, CV PDF and timeline, reply-time promise (only if true).
- Your city, for local SEO.

## After launch
- [ ] Open the live site on a real iPhone and a real Android phone and scroll the whole page.
- [ ] Submit to Awwwards once the content gaps above are filled.
- [ ] Re-run Lighthouse on the custom domain.
