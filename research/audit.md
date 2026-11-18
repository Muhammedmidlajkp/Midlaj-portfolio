# Portfolio audit: Director's synthesis

Audited commit `931109f` (live: https://midlaj-portfolio-psi.vercel.app/). Ten specialists reviewed screenshots at 1440, 768 and 390px plus the source; their full reports are in `research/audit/` (`01` to `10`, plus `00-current-state.md`). Screenshots: `research/screenshots/audit/`. The earlier redesign log is `research/audit-v1-redesign-log.md`.

Audit only. No code was changed.

---

## 1. Overall score and verdict

**Overall: 5.5 / 10. Awwwards readiness: not yet.**

| Specialist | Score | Headline |
|---|---|---|
| 01 Visual design | 5 | Clean and competent, not memorable |
| 02 Typography | 6 | Hero type is strong; hierarchy and expression are thin |
| 03 Colour & brand | 5 | AAA contrast, but a stock dark + lime identity |
| 04 Layout & grid | 5 | Solid grid, repeated composition, broken on ultrawide and tablet |
| 05 Motion | 4 | Nothing scroll-driven after the hero |
| 06 Interaction | 5 | No press states, one-state cursor |
| 07 UX & IA | 5 | No proof depth, contradictory stats |
| 08 Accessibility | 8 | axe clean, strong keyboard model |
| 09 Performance | 7 | Lean build; LCP and TBT limited by first render |
| 10 Mobile & responsive | 6 | No overflow anywhere; tablet band and safe areas unresolved |

Simple mean: 5.6. I weighted it the way Awwwards does (design 40%, usability 30%, creativity 20%, content 10%): design about 5.2, usability about 6.5, creativity about 4.7, content about 4, which gives about 5.4. I round to 5.5.

**Verdict.** The craft layer (accessibility, speed, clean build) is already at honourable-mention standard. What stops it reaching Site-of-the-Day is the layer jurors actually reward: a signature idea, scroll-driven pacing, and proof of the work. Those are all fixable, and none needs a framework change. These are my estimates, not Awwwards' own thresholds.

## 2. Executive summary: the five biggest problems

1. **No signature idea; the identity is a 2026 default.** Near-black, one acid-lime accent, serif plus mono is the common "dev portfolio" look. Lime disappears after the hero, the whole page is one flat black, and the hero's inline thumbnails (the only candidate for a memorable idea) are too small and dim. (01, 03)
2. **The page goes static after the hero.** No scroll reveals, no pacing, no transitions between sections; eleven durations and five easings, including an off-brand bounce on the WhatsApp button. (05)
3. **No proof behind the work, and contradictory claims.** Every project links straight out; there is no problem, role or result. Stats clash ("10+ happy clients" next to "3 live client sites"; "5 featured" while six are featured). The bio comes before the proof, there are no services, and the header hides contact behind a Menu button. (07)
4. **Repetitive composition and brittle layout.** Every section is the same left-aligned stack; all six features use the same 7/5 image-left row. On wide screens the hero and the other sections start at different left edges, and the 601-900px tablet band is unresolved (an orphaned hero thumbnail, a dead half-empty About). (04, 10)
5. **The interface has no tactility.** No `:active` state anywhere, a cursor with one state and no labels, feature cards that are only weakly clickable, and copy-email feedback that is a plain text swap. (06)

**What is already strong and must not be broken:** accessibility (axe 0 violations, focus trap, reduced motion), the lean dependency-free build, the hero headline type, the token system.

## 3. Reconciling the specialists

- **Hero's serif-to-sans line.** Visual called it the most authored thing on the page; Typography called it arbitrary. Decision: keep it, because it carries the "design + build" idea, but make it a system. Serif is the design/people voice; Geist is the build/tech voice and also carries tech lists and ledger values. Add the Instrument Serif italic.
- **Lime.** Visual suggested swapping or flooding it; Colour said the hue is fine and the distribution is the problem. Decision: keep lime strictly as the action colour, add one paper chapter, and let the clients' own colours (per-project tints) be the second tone.
- **Hero thumbnails.** Visual wants them bigger, Layout and Mobile want no orphans. Decision: larger at 1200px and up (about 0.9em tall, 14px radius, full colour), two thumbnails from 601 to 900px, none below 361px, with `text-wrap: balance`.
- **WhatsApp button.** Visual, UX, Colour and Mobile all flag it. Decision: restyle quiet (coal fill, hairline, green only on hover), safe-area aware, and fade it out while the hero CTA or the contact section is in view.
- **Motion libraries.** Motion specialist's sizes were from memory. I checked what matters: native scroll-driven animations are Baseline (Chrome and Edge 115, Safari 26, Firefox 159 per [web.dev, October 2026](https://web.dev/blog/web-platform-10-2026)) and GSAP including SplitText is now free under [Webflow's no-charge licence](https://webflow.com/blog/gsap-becomes-free). The gzip sizes of Lenis and GSAP are unverified here.
- **Caveats.** Interaction (06) worked from source only, without hover captures. Context7 was not available. Live mobile Lighthouse varies run to run (91 to 96).

## 4. Section-by-section audit

### Navigation
- **Issues:** only a Menu pill on desktop, no persistent contact action (07); after a menu link, focus returns to the Menu button instead of the target section (08, `Navbar.jsx:87`); link targets 19-32px tall (08, 10); hover-dim drops to about 2.8:1 contrast (08); no progress cue.
- **Redesign:** at 900px and up, a persistent header: wordmark left, text links Work, About, Contact, and a lime "Let's talk" pill (40px high). Keep the full-screen numbered menu below 900px. A 2px lime scroll-progress hairline under the header.
- **Animation:** section label crossfade 300ms; progress via `animation-timeline: scroll()`; menu hover-dim raised to opacity .55; focus moves to the target section after navigation.

### Hero
- **Issues:** thumbnails small and dim; who/for-whom sentence is small grey text at the fold edge (07); dead space; WhatsApp collides with the CTAs; 320px wraps to six lines (10).
- **Redesign:** keep the three-line headline. Thumbnails about 0.9em tall with 14px radius and full colour, cropped to a legible detail of each site. Move the "Websites and web apps for businesses in India and the UAE" line to 22px (`--step-1`, `#e8e8e8`) directly under the headline. CTAs: primary "Start a project", secondary "See the work". Give "Available for work" a detail line (needs your wording).
- **Animation:** preloader cut to 0.35s and shown once per session; headline rise 0.8s at 0.08s stagger; thumbnails reveal with `clip-path: inset(0 100% 0 0)` to `inset(0)` over 0.9s after the text lands; hover tilt (-3deg, scale 1.08) with siblings dimmed.

### About
- **Issues:** generic bio; stats contradict the project data; portrait is a plain rectangle with a green cast; at 768px the right half is empty (01, 04, 07, 10).
- **Redesign:** an 80-word specific bio in your voice (needs your input), the portrait regraded neutral on a coal card, three verifiable facts instead of four stats, two columns from 700px (`5fr 7fr`), one large serif sentence with an italic phrase.
- **Animation:** facts count up once over 1200ms; portrait clip-path reveal (transform and opacity only).

### Projects
- **Issues:** six identical rows with no pacing; no depth behind any project; image link is hidden from assistive tech so the only mouse affordance is a 2.5% zoom; index rows have no imagery and animate padding (layout cost) (01, 04, 06, 07).
- **Redesign:** lead project full-width, then alternate 7/5 and 5/7; large faint numerals overlapping image corners (blend-mode difference); the whole feature is one hit area; a case-study panel per project (client and location, role, problem, what I built, stack, real outcome; needs your facts); the index set on a bone (paper) chapter; per-project tint behind each row.
- **Animation:** image reveal `clip-path: inset(8% 0 0 0)` to `inset(0)` plus scale 1.08 to 1 over 1000ms via `animation-timeline: view()`; image parallax -6%; index hover with `transform` instead of `padding`; cursor label "View".

### Skills / Experience
- **Issues:** the ledger is tidy but inert and answers "how", not "what do I get" (07). There is no experience or process content.
- **Redesign:** replace it with "How I work": three offers (business website, web app, fixes and redesign), each with who it suits and typical delivery, then a four-step process (brief, design, build, launch), where numbering is justified because it is a real sequence. Keep the stack as one compact line. Add an experience timeline only if you have real entries.
- **Animation:** row reveal with a 60ms stagger.

### Contact
- **Issues:** inverted hierarchy (41.6px heading under an 82px email); generic invitation copy; WhatsApp buried; copy feedback is only a text swap (02, 06, 07).
- **Redesign:** heading "Tell me about your project." at `--step-3`; three equal actions (WhatsApp lime pill 56px, copy email, download CV); a reply-time line if true.
- **Animation:** copy confirmation: pill fixed at `min-width: 8.5rem`, check stroke draws over 300ms, pill turns lime for 2.4s, the email flashes accent once; email reveals with a line mask.

### Footer
- **Issues:** link rows 20-22px tall; the WhatsApp button can sit over it (08, 10).
- **Redesign:** keep it minimal; 44px targets; extra space above it. Placement of "Back to top" stays on the left.
- **Animation:** none beyond a hover colour change at 150ms.

## 5. Recommended visual direction: "Ink & Paper"

**One direction, with justification.** Direction 1 (minimal/editorial) was right, but the audit shows it stops at "clean". Ink & Paper keeps its restraint and adds what editorial sites actually have: a tonal chapter shift and a repeating visual motif. It is also the lowest-risk way to gain character without adding weight.

- **Mood:** calm, tactile, printed-matter. A dark page that turns to paper once (the Projects index or Contact), then back.
- **Motif:** the work itself. The thumbnail pills from the hero reappear as the project reveals and again as a small row beside the contact email, so the page keeps showing its proof.
- **Font pairing:** Instrument Serif (400 plus the italic) for display and people; Geist for UI, body and tech facts; DM Mono only for live data (clock, status). Fallback metrics via `size-adjust`.
- **Palette (named values):**

| Token | Value | Use |
|---|---|---|
| `--ink-black` | `#0A0A09` | page base |
| `--coal` / `--coal-2` | `#141412` / `#1D1D1A` | surfaces and hover |
| `--bone` | `#ECEBE3` | paper chapter, primary text on dark |
| `--ink-on-paper` | `#121210` | text on bone |
| `--lime` | `#C8F250` | action only: CTA, focus ring, availability dot, cursor |
| per-project tints | from each project (e.g. Weddesy `#E0306B`) | hover tint and index accents |

Hairlines raised to `rgba(255,255,255,.16)`. Hard-coded greys and lime alphas move to tokens. The WhatsApp green and the teal portrait cast go away.

## 6. Motion system

- **Easing:** `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)` for everything entering or revealing; `--ease-in-out: cubic-bezier(0.76, 0, 0.24, 1)` only for large moves (curtain, menu panel). Remove `ease`, `ease-in` and the WhatsApp overshoot.
- **Durations:** `--d-1: 150ms` (colour, underline), `--d-2: 300ms` (buttons, menu, cursor), `--d-3: 600ms` (reveals), `--d-4: 1000ms` (hero and image clip reveals).
- **Stagger:** 60ms for lists, 90ms for headline lines; total no more than 450ms.
- **One reveal rule:** clip or translate 24px up plus opacity, 600ms, triggered at 15% in view, once. Apply to section titles (line mask), project images and the portrait. Do not fade-slide every paragraph.
- **Scroll-linked:** header progress hairline; project image parallax -6%; count-up facts; contact email line reveal.
- **Which tool does what:**
  1. **Native CSS first:** `animation-timeline: view()` and `scroll()` for reveals, parallax and progress, behind `@supports`, with visible-by-default fallback. 0 KB.
  2. **Lenis** (small; size unverified) only if you want inertial scroll; disable on touch and reduced motion.
  3. **GSAP + ScrollTrigger + SplitText:** now free, but a larger download; only if you later want pinned or character-level storytelling. Not needed for the 90+ Lighthouse rule.
  4. **No Framer Motion** (removed already).
- **Preloader:** 0.35s, once per session (`sessionStorage`), on the in-out curve.
- **Reduced motion:** keep the kill switch; reveals render in their final state; no parallax, no count-up, no pulse.
- **Mobile:** reveals only (transform, opacity, clip-path), no parallax or pinning below 900px.

## 7. Prioritised implementation plan

Effort: S under half a day, M about a day, L two to three days. These are my estimates.

| # | Step | Effort | Depends on you |
|---|------|--------|----------------|
| 0 | **Quick wins, no design change:** `vercel.json` cache headers (assets and fonts immutable), `content-visibility: auto` below the fold, shorter preloader, menu focus fix, 44px touch targets, press states, `viewport-fit=cover`, safe-area and `theme-color`, contact heading scale, `text-wrap: balance`, tablet fixes, quieter WhatsApp | M | nothing |
| 1 | **Foundations:** spacing and motion tokens, shared `.wrap`, italic serif and fallback metrics, breakpoint set (360, 600, 700, 900), tokenise stray colours | M | approve palette |
| 2 | **Hero v2:** larger thumbnails, 22px who/for-whom line, CTA labels, mobile and 320px behaviour | M | hero wording |
| 3 | **Navigation v2:** persistent desktop header with "Let's talk", progress hairline | S | nothing |
| 4 | **Projects v2:** varied layout, numerals, whole-card hit area, paper chapter, reveals, case-study panel | L | per-project facts, screenshots |
| 5 | **Services, process and proof; About rewrite** | M to L | your bio, services, real stats, CV |
| 6 | **Contact and footer v2:** new heading, three actions, copy feedback, targets | S to M | reply time |
| 7 | **Motion layer:** scroll reveals, count-up, cursor labels ("View", "Copy") | M | none |
| 8 | **Signature interaction (stretch):** the hero pills carry into the project reveals as you scroll | L | none; riskiest item |
| 9 | **QA:** Lighthouse CI (3 mobile runs, median 93+), real-device check | S | a phone |

Rough total: 8 to 11 working days. Steps 0, 1, 3 and 7 need nothing from you and can start immediately.

## 8. Packages to install (not installed)

- **Runtime:** none needed for steps 0 to 7. Optional: `lenis` (only for inertial scroll).
- **Dev:** `sharp` (the image-variant script currently runs with `--no-save`), `@lhci/cli` (Lighthouse CI).
- **Config files, no package:** `vercel.json` (cache headers).
- **Not recommended now:** `gsap` (free, but unnecessary at this scope), `framer-motion`/`motion`.

## 9. What I cannot do for you (content needed)

I will not invent facts. To do steps 2, 4, 5 and 6 properly I need from you: your real stats; for each project one or two sentences on role, problem and outcome; what services you offer and whether to show prices; a CV file; a reply-time promise you will honour; what "available" means (freelance, full-time, from when); a short true bio; screenshots for Nizan Tech and the AI Voice Calling Agent.

---

## 10. Implementation outcome (after the audit)

Built and shipped to `main` in five commits, each verified before pushing:

| Step | Commit | What shipped |
|---|---|---|
| 0 + 1 Quick wins and foundations | `4f1498b` | Ink & Paper tokens, motion tokens (two curves, four durations), spacing tokens, shared page width, serif italic and metric fallback, `text-wrap`, cache headers (`vercel.json`), `content-visibility`, 0.4s once-per-session preloader, menu focus fix, 44px targets, press states, safe-area insets, quiet WhatsApp button that tucks away over the hero actions and contact, tablet and 320px hero fixes, two-column About from 700px |
| 2 + 3 Hero v2, Navigation v2 | `21866f4` | Larger rounded thumbnails, 22px who-and-for-whom line, "Start a project" / "See the work", persistent desktop header with "Let's talk", scroll-progress hairline, sections reordered Hero, Projects, About, Contact |
| 4 + 6 Projects v2, Contact v2 | `d5e0e14` | Alternating features, whole-card hit area, paper (bone) index chapter, row hover via transform, WhatsApp as primary action, copy feedback (lime pill, drawn check, email flash), thumbnails echo, "Featured projects" counted from data |
| 7 Motion layer | `89e6404` | Native scroll-linked reveals, image clip and settle, stats count-up, cursor labels (View, Open, Copy, Chat) |

**Live results** (https://midlaj-portfolio-psi.vercel.app/, after deploy of `89e6404`):

| Run | Performance | Accessibility | Best practices | SEO | FCP | LCP | TBT | CLS |
|---|---|---|---|---|---|---|---|---|
| Mobile 1 | 100 | 100 | 100 | 100 | 1.3 s | 1.7 s | 10 ms | 0 |
| Mobile 2 | 100 | 100 | 100 | 100 | 0.8 s | 1.5 s | 10 ms | 0 |
| Mobile 3 | 100 | 100 | 100 | 100 | 0.8 s | 1.5 s | 10 ms | 0 |
| Desktop | 100 | 100 | 100 | 100 | 0.3 s | 0.4 s | 0 ms | 0 |

Before this round the live mobile score was 91-96 with TBT 190-290 ms. axe: 0 violations at 1440, at 390 and with the menu open. No targets under 24px. Zero console errors. Hashed assets and fonts now ship `max-age=31536000, immutable`.

### Deliberately not done (needs your content, or a judgment call)
- **Case-study panels, services and process, proof strip, About rewrite, CV, reply-time promise:** these need facts only you have. Not invented.
- **"10+ happy clients" vs "3 live client sites":** still unchanged (you asked to keep your stats). "Featured projects" is now counted from the data, so it can no longer disagree with the page.
- **Large blend-mode numerals on project rows:** skipped. Numbering is only justified for real sequences, and the audit's own rule was to avoid the template look.
- **Signature interaction (hero pills carrying into the project reveals):** not built. It is the riskiest item; the scroll-linked reveals and the repeated thumbnails (hero and contact) give a lighter version of the motif.
- **Lenis and GSAP:** not added; native CSS covers the needs and keeps the page at 100.
- **Hero wording, "Available for work" detail, and the paper chapter's extent** (index only, not Contact): my calls; easy to change.
- **Not verified:** real-device behaviour (iOS safe areas, touch), and the metric-matched fallback font values were estimated, not measured (CLS is 0 in Lighthouse).
