# 3 — UX & Information Architecture
**Score: 6.5/10 (current) · Target 9/10**

Tested live in Chromium at 1440x900 and 390x844. Screenshots are in `C:/Users/midlu/AppData/Local/Temp/claude/20279d98e22ad548/7896dcd1-a443-4c48-a5e7-c47f09d360c0/scratchpad/pw/` (fold-d.png, fold-m.png, menu-m.png, about-m.png, contact-d.png, about-d.png, projects-d.png). Items already fixed per audit.md s10 (persistent header, "Start a project", WhatsApp primary in Contact, section reorder, FAB tucking) are not repeated.

## 5-second test result (what a stranger would conclude, honestly)
- **Who:** clear. Logo "Midlaj.", then "I'm Muhammed Midlaj, a MERN stack developer" (Hero.jsx:80). On desktop it sits at y~770, inside the 900px fold; on mobile it is fully visible.
- **What / for whom:** found only in the grey paragraph under the hairline. The h1 ("One developer, from the first sketch to the deployed server.", Hero.jsx:5) is a craft slogan and the thumbnails are unlabelled. At 390 two of the three thumbnails shrink to ~50px blobs that say nothing.
- **Next step:** clear. One lime "Start a project", one text "See the work". But on mobile the header has no "Let's talk" and the WhatsApp FAB is tucked in the hero, so the only contact action is "Start a project", which scrolls rather than contacts.
- **Verdict:** a capable freelance developer with a good eye, but not yet a clear offer. The proof (named UAE/India client sites) is below the fold and shallow.

## Findings

### Critical
1. **In-page anchor navigation overshoots (real bug).** At 390, Menu then "About" lands with `#about` top = -1069px: the visitor sees the "What I work with" ledger and skips the portrait, bio and stats (about-m.png; measured `scrollY 6982`). On desktop the document height drifts 9734 to 8282 while scrolling and section tops are inconsistent. Cause: `content-visibility:auto; contain-intrinsic-size:auto 700px` on `#about`, `#projects .feature`, `#projects .index`, `#contact` (src/index.css:185-191). Placeholders are 700px but real heights are ~1,700px (About) and 800-950px (features), so smooth-scroll targets are computed from wrong heights. Direct `/#about` and `/#contact` loads land correctly (top=96). **Fix:** remove `content-visibility` from `#about`, `#contact` and `.feature` (keep it on `.index` only), or set measured `contain-intrinsic-size` per breakpoint. Acceptance: Menu to About at 390 gives `#about` top = 96. Re-run Lighthouse afterwards (the property was added for score).

### High
2. **No depth behind any project.** Every row links out (projectsData.js `link`); BizBook, Nizan Tech and AI Voice Agent have no screenshot (projects-d.png, link list). No role, problem or result anywhere. Fix: a `/work/:id` view or in-page `<dialog>` with Role / Problem / What I built / Outcome / Link, fed by four new fields in projectsData.js (content needed, see below).
3. **Hero value proposition is muted body copy.** Fix: set `.hero-desc` to the full ink colour at `--step-1`, and replace "Available for work" with a meaningful status (finding 13). Caption the three thumbnails with the client names (visible on focus/hover and in the accessible name).
4. **Stats contradict and one is unverifiable.** About.jsx:52-57: "10+ Happy clients" next to "3 Live client sites"; the hero index says "10 projects" while the stat says 7 featured (projects-d.png, about-d.png). Replace "10+" with a provable fact or remove it.
5. **No trust signals beyond the work itself:** no testimonial, process, services, engagement type, pricing signal or CV (0 `download` links, no "CV/Resume" text on the page). Recruiters have no route to a resume.
6. **Contact copy invites chat, not briefs** (Contact.jsx:60-62 "just want to say hello... interesting conversations"). No reply time or "what to include". Fix: "Tell me what you're building, who it's for and your deadline. I reply within [true time]." Hierarchy is otherwise right.

### Medium
7. **Contact path friction, measured.** Desktop hero: Let's talk then WhatsApp = 2 clicks (FAB tucked in hero). Work/About: FAB = 1 click (visible from scroll ~1000 to ~6000). Contact: 0. Mobile: Menu then WhatsApp/email = 2 taps. Fix: show a compact "Let's talk" beside Menu in the mobile header, or a WhatsApp link in the mobile hero.
8. **"Let's talk" stays lime on Contact** (contact-d.png) and points at where you already are. Fix: hide it when `active==='contact'`.
9. **Scroll-spy:** works (Work/About/Contact switch correctly at the 45-50% band), but the hero never gets `aria-current` and Work activates at scroll 500 while the hero still fills the screen. Minor; make the hero an explicit state or accept it.
10. **Back button:** after "Let's talk" then Back you return to the very top (`scrollY 0`, no hash), not where you were; the page does not break, but every anchor click adds history. Fix: `history.replaceState` for in-page nav if you want Back to leave the site.
11. **Footer misaligned** (contact-d.png): "Back to top" floats beside "© 2026" on a different baseline (Footer.css `.footer-inner`). Fix: `align-items:baseline` and `margin-left:auto` on the link, below the FAB zone.
12. **Mobile menu has no CTA hierarchy** (menu-m.png): WhatsApp is the same weight as GitHub. Make WhatsApp a lime pill in `.menu-foot`.

### Low
13. "Available for work" has no meaning (freelance, full-time, from when?).
14. Hero text ghosts under the translucent header at y~800 (projects-d.png): raise `.site-header.scrolled` opacity.
15. `<title>` is a job title with no service or place (index.html:8).
16. Hide or enlarge the sub-60px hero thumbnails below 480px.

## NEEDS MIDLAJ (not invented)
- Is "10+ happy clients" true? Otherwise a provable replacement stat.
- Per project: role, problem, what he built, real outcome, launch date, and permission to name the client.
- Real testimonials or quotes (Roots Business, BizBook, TrustCore, Team N Makeovers) with name and role.
- Services list, engagement types, typical timeline, price band or "quote in X hours".
- CV/resume PDF and a short work/freelance timeline.
- A reply-time promise he can keep; what "Available for work" means.
- Screenshots for BizBook, Nizan Tech and AI Voice Agent, or a decision to drop them.
- A specific About bio (where from, what he has shipped, what he is learning) to replace the generic copy and coffee line.
