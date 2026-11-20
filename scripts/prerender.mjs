// Runs after `vite build` and `vite build --ssr` (see the "build" script).
//
// 1. Renders the app to HTML and writes it into dist/index.html, so crawlers,
//    link previews and slow connections see real content before any JS runs.
// 2. Generates the JSON-LD graph from src/data (WebSite, Person, ProfilePage and
//    one CreativeWork per project), so the structured data cannot drift.
// 3. Writes sitemap.xml and robots.txt from the one site URL (VITE_SITE_URL).
// 4. Fails the build if the inline script's hash is missing from the CSP.
import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { loadEnv } from 'vite';
import { projects } from '../src/data/projectsData.js';
import { site } from '../src/data/site.js';
import { skillGroups } from '../src/data/skillsData.js';

const root = process.cwd();
const env = loadEnv('production', root, 'VITE_');
const SITE_URL = (env.VITE_SITE_URL || 'https://midlaj-portfolio-psi.vercel.app').replace(/\/$/, '');
const today = new Date().toISOString().slice(0, 10);

const dist = (f) => path.join(root, 'dist', f);
let html = await readFile(dist('index.html'), 'utf8');

// ---- 1. prerendered app -------------------------------------------------
const { render } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);
const app = render();
if (!html.includes('<div id="root"></div>')) throw new Error('prerender: #root placeholder not found');
html = html.replace('<div id="root"></div>', `<div id="root">${app}</div>`);

// ---- 2. structured data -------------------------------------------------
const pitch = 'MERN stack developer building websites and web apps for clients in India and the UAE.';
const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: site.name,
      inLanguage: 'en',
      publisher: { '@id': `${SITE_URL}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: site.name,
      jobTitle: site.role,
      description: pitch,
      url: `${SITE_URL}/`,
      sameAs: site.socials.map((s) => s.href),
      knowsAbout: skillGroups.flatMap((g) => g.skills),
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/#profile`,
      url: `${SITE_URL}/`,
      name: `${site.name} | ${site.role}`,
      dateModified: today,
      mainEntity: { '@id': `${SITE_URL}/#person` },
    },
    ...projects.map((p) => ({
      '@type': 'CreativeWork',
      '@id': `${SITE_URL}/#${p.id}`,
      name: p.title,
      description: p.desc,
      creator: { '@id': `${SITE_URL}/#person` },
      ...(p.link ? { url: p.link } : {}),
      ...(p.image ? { image: `${SITE_URL}/img/${p.image.name}-${Math.max(...p.image.widths)}.jpg` } : {}),
    })),
  ],
};
// "<" is escaped so no string in the data can close the script element early
const jsonLd = JSON.stringify(graph).replace(/</g, '\\u003c');
if (!html.includes('<!--jsonld-->')) throw new Error('prerender: <!--jsonld--> marker not found');
html = html.replace('<!--jsonld-->', `<script type="application/ld+json">${jsonLd}</script>`);

// ---- 4. CSP hash for the one inline script -------------------------------
const inline = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
const vercel = await readFile(path.join(root, 'vercel.json'), 'utf8');
if (vercel.includes('Content-Security-Policy')) {
  for (const code of inline) {
    const hash = createHash('sha256').update(code).digest('base64');
    if (!vercel.includes(`sha256-${hash}`)) {
      throw new Error(
        `prerender: the inline script in index.html has changed. Put 'sha256-${hash}' in the ` +
          'Content-Security-Policy script-src in vercel.json.',
      );
    }
  }
}

await writeFile(dist('index.html'), html);

// ---- 3. sitemap and robots ----------------------------------------------
await writeFile(
  dist('sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `  <url>\n    <loc>${SITE_URL}/</loc>\n    <lastmod>${today}</lastmod>\n  </url>\n` +
    `</urlset>\n`,
);
await writeFile(dist('robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

console.log(`prerendered ${app.length} chars of HTML, ${projects.length} projects in JSON-LD, site url ${SITE_URL}`);
