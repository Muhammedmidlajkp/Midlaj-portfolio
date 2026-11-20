# 8 — Code Quality & Security
**Score: 6.5/10 (current) · Target 10/10**
Code is clean and small; the score is held down almost entirely by missing HTTP security headers and an unpatched dev-tooling chain.

## Results
- **Lint:** `npm run lint` passes, zero errors/warnings.
- **npm audit (all):** 10 vulns (1 low, 1 moderate, 8 high). **`npm audit --omit=dev`: 0 vulnerabilities.** Production deps (react, react-dom) are clean. All 10 are build/dev tooling: vite (direct; dev-server `server.fs` advisories GHSA-rq7h-c2jc-7f22, GHSA-fx2h-pf6j-xcff), postcss, nanoid, source-map-js, browserslist, brace-expansion, js-yaml, zod, @babel/core, baseline-browser-mapping. None ship to visitors; they matter only on the dev machine (dev server) and CI.
- **Supply chain:** 2 prod deps + 9 dev deps; `package-lock.json` committed; all versions are caret ranges (not pinned), lockfile pins effective versions. `npm outdated`: react/react-dom 19.2.5 to 19.3.1, vite 8.0.9 to 8.3.8, @vitejs/plugin-react 6.0.1 to 6.3.0, eslint 9.39.4 to 9.39.5 (10.x is major, skip), globals, @types/*. `npm ls` shows extraneous `sharp`, `tslib`, `@img/sharp-*` in node_modules (used by scripts/img.mjs but NOT declared in package.json, so a fresh clone cannot run the image script).
- **Secrets:** none. No `.env*` tracked or ever added in history; regex scan (AKIA, sk_live, sk-, ghp_, api key, secret, token, password, Bearer) over last 60 commits of src/config: 0 hits; no `import.meta.env`/`process.env` use; no dist present. Only PII is the deliberately public email and WhatsApp number.
- **Live console (Playwright, full scroll + menu open/Escape + email click):** 0 console errors/warnings, 0 page errors. Only failed request was the `mailto:` navigation itself (expected). All resources same-origin (single host), so no third parties today.
- **Security headers on live (`curl -I /` and `/fonts/*.woff2`):**

| Header | Today |
|---|---|
| Strict-Transport-Security | PRESENT (`max-age=63072000; includeSubDomains; preload`, Vercel default) |
| Content-Security-Policy | MISSING |
| X-Frame-Options / frame-ancestors | MISSING (site is frameable, clickjacking possible) |
| X-Content-Type-Options | MISSING |
| Referrer-Policy | MISSING |
| Permissions-Policy | MISSING |
| Cross-Origin-Opener-Policy / Resource-Policy | MISSING |
| `Access-Control-Allow-Origin: *` | present on HTML and assets (Vercel static default; harmless for public static files) |
| HTML Cache-Control | `max-age=0, must-revalidate` (fine) |

## Findings
**Critical:** none.

**High**
1. No CSP, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy (see table; `vercel.json` only sets Cache-Control). Fix: block below.
2. Dev-tooling vulns (8 high) incl. vite dev-server file-read bypass. Evidence: `npm audit`. Fix (Midlaj runs it, I did not): `npm update vite @vitejs/plugin-react` then `npm audit`; run `npm audit fix` only after reviewing the diff. Prod impact: none.

**Medium**
3. No React error boundary (`grep ErrorBoundary src` = 0; `src/main.jsx` renders `<App/>` bare). A thrown render error white-screens the site. Fix: small class `ErrorBoundary` around `<App/>` with a plain fallback showing the email link.
4. `sharp` used by `scripts/img.mjs` but undeclared (`npm ls` extraneous). Fix: `npm i -D sharp` (reproducible image pipeline).
5. JSON-LD `"email": "mailto:midlaj2636@gmail.com"` (index.html:30) is a scrape target and uses a `mailto:` URI where schema.org expects a plain address; src/data/site.js says "keep in sync" manually. Fix: drop `email` from JSON-LD (already on the page) or accept the spam risk knowingly.
6. Email and WhatsApp number are plaintext in the JS bundle and DOM (`site.js:5-6`): normal for a portfolio, but harvestable. Mitigation optional (assemble at runtime / form later).

**Low**
7. Hard-coded values not tokenised: `#fff` (Navbar.css:30, WhatsAppButton.css:41), `#25d366` (WhatsAppButton.css:39-40, brand colour, fine), `#d6fb69` (index.css:280, looks like the accent, should be `var(--accent)` if one exists). 36 duration literals in CSS across files; consider `--dur-*`/`--ease-*` tokens.
8. TypeScript absent (plain JS, `@types/react` installed but unused). Acceptable for 25 files; `skillsData`/`projectsData` shape is unchecked. Optional JSDoc or `// @ts-check`.
9. `vite.config.js` has no `build.sourcemap` setting (default off, good) and no `base`; nothing to fix.
10. Image set `public/img` includes `avatar-192.jpg`, plus `-1280.jpg` fallbacks: names are built dynamically (`ProjectImage.jsx:10,14`), so I could not prove any file is orphaned; `avatar-192.jpg` has zero references in src/index.html: likely dead (verify before deleting).
11. `public/fonts/dm-mono-*` and DM Mono are used (index.css:40-52,84): not dead. Unused CSS classes: scripted cross-check found none. No `dangerouslySetInnerHTML`, `innerHTML`, `eval`, or `console.*` in src.

**Verified good:** all 8 `target="_blank"` links carry `rel="noopener noreferrer"` (Navbar.jsx:202,206; Contact.jsx:69,93; Projects.jsx:78 and multi-line at 40,61; WhatsAppButton.jsx:27 multi-line: re-check lines 40/61/27 include rel, as my grep only showed the first line of those); effects clean up listeners (CustomCursor.jsx:69-88); keys present on mapped lists; StrictMode on; no `tel:` links; clipboard copy has an execCommand fallback with try/catch (Contact.jsx:9-30). Note: the email anchor is a `mailto:` link, so clicking both copies and opens the mail client (confirmed by the mailto navigation during the test); decide if intentional.

## Ready-to-use vercel.json security headers
Add as a new first entry in `headers` (keep existing cache rules). Works today: all same-origin, self-hosted fonts, inline JSON-LD (needs a hash since no `unsafe-inline`), Vite emits external module script + CSS. React inline `style={{'--i':i}}` needs `style-src 'unsafe-inline'` (style attributes cannot be hashed).
```json
{
  "source": "/(.*)",
  "headers": [
    { "key": "Content-Security-Policy", "value": "default-src 'self'; script-src 'self' 'sha256-<HASH_OF_JSONLD>'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" },
    { "key": "X-Content-Type-Options", "value": "nosniff" },
    { "key": "X-Frame-Options", "value": "DENY" },
    { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
    { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()" },
    { "key": "Cross-Origin-Opener-Policy", "value": "same-origin" },
    { "key": "Cross-Origin-Resource-Policy", "value": "same-origin" }
  ]
}
```
- JSON-LD hash: compute with `node -e` over the exact text between the `<script type="application/ld+json">` tags (whitespace included) and use `sha256-<base64>`; the hash changes whenever that JSON is edited (CSP console error will print the expected hash). Alternative: move the JSON-LD into a build-injected file only if the hash upkeep is annoying (JSON-LD also cannot be loaded via `src`).
- Test in the preview deployment first; check the browser console for CSP violations. Cross-Origin-Resource-Policy `same-origin` will block other sites hotlinking your images but does NOT affect link previews fetched by crawlers (og-image is fetched server-side). If OG previews ever break, relax to `cross-origin` for `/og-image.jpg`.
- **Vercel Analytics / Speed Insights** would need: `script-src` add `'self'` (they load `/_vercel/insights/script.js` and `/_vercel/speed-insights/script.js`, same-origin on Vercel) and `connect-src 'self'` (beacons post to `/_vercel/insights/*`, `/_vercel/speed-insights/*`); usually no external hosts required. Verify in console after enabling.

## Contact form recommendation (none exists today)
- Prefer a **Vercel Serverless Function** (`/api/contact.js`) calling an email API (Resend/Postmark) over a third-party hosted form endpoint: keeps CSP at `connect-src 'self'`, no third-party scripts, and the destination email stays server-side.
- Controls: server-side validation of every field (length caps, email regex, strip CR/LF to block header injection); hidden honeypot field plus a minimum-fill-time check; rate limiting by IP via Vercel KV/Upstash (e.g. 3 per 10 min) or Vercel WAF rate-limit rule; JSON-only POST with `Content-Type` check and same-origin check on `Origin`; optional Cloudflare Turnstile if spam appears (requires `script-src`/`frame-src challenges.cloudflare.com`); never echo raw input into the email HTML; generic error messages; no secrets in client bundle (no `VITE_` prefix for the API key).
- Keep the `mailto`/WhatsApp as fallback when the request fails. Add `form-action 'self'` (already in CSP above).

## NEEDS MIDLAJ
- Decision: approve the CSP/headers block (he or I edit `vercel.json`, deploy, check console on a preview URL).
- Run dependency upgrades locally (`npm update`, then re-test build); I was read-only.
- For a contact form: a **Resend (or Postmark) account and API key** stored as a Vercel Environment Variable (`RESEND_API_KEY`), a verified sending domain or sender address, the destination inbox (currently midlaj2636@gmail.com), and optionally a Vercel KV/Upstash store (rate limiting) and a Cloudflare Turnstile site/secret key. I will not handle the keys; he must add them in Vercel project settings.
- Decide whether to keep `email` in JSON-LD and whether clicking the email should also open the mail client.
- Confirm `avatar-192.jpg` can be deleted.
