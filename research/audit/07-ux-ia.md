# 07 — UX & Information Architecture Specialist
**Score: 5/10**
The page is clean and fast, but it reads as a design exercise, not a sales page. Nothing is built to turn a client or recruiter visit into an enquiry.

## Top strengths (max 3)
1. Hero answers "who, what, for whom" in text: "I'm Muhammed Midlaj, a MERN stack developer... clients in India and the UAE" (Hero.jsx:80-83), with a live availability dot and IST clock (1440-01-hero.png). Matches the live-system chrome pattern (Moiséz, Huy Phan).
2. Short, honest structure: 4 sections, no filler, one primary CTA (lime pill) and a text fallback. Contact ends in a giant copyable email, as in the Denny Pratama / John Bolster footers.
3. Real client work with named locations (Bangalore, Abu Dhabi, UAE) and live URLs, which is real proof when surfaced.

## Problems

**Critical**
- **No depth behind any project.** Every row is an external link (projectsData.js `link`). There is no problem / role / stack / result, so the visitor leaves the site to judge the work. For a client the main question is "what did you do for them and what happened", and it is unanswered. Evidence: 1440-05-feature-weddesy.png (title, one-line desc, tags only). Two index projects have no screenshot at all.
- **Hero says what he is, not what he sells.** The h1 "One developer, from the first sketch to the deployed server." (Hero.jsx:5) is a craft claim. The who/for-whom/what only appears in 14px grey body copy under a hairline at the fold's bottom edge (1440-01-hero.png, y~790). "Websites and web apps for businesses in India and UAE" must be in the 5-second read, and the visible CTA must also name the second action.
- **Stats are not credible and contradict themselves.** About.jsx:96-101: "10+ happy clients" next to "3 live client sites", and "5 featured projects" while projectsData.js has 6 featured (9 total). "1.5 years" is honest, but a sceptical recruiter sees the 10+ as padding, and it erodes the rest. Evidence: 1440-02-about.png.

**High**
- **Order sells bio before proof.** Hero, About (generic bio + stats + skills), Projects, Contact. "Crafting code with purpose... brewing the perfect cup of coffee" (About.jsx:127-137) is interchangeable with any junior's. Evidence: 1440-02-about.png, 1440-03-capabilities.png. The strongest asset (live UAE/India client sites) sits at about 2.5 screens down.
- **Missing trust signals:** no testimonial or client quote, no process, no services or "what I build" with plain outcomes, no pricing signal or engagement type, no CV/resume download (a recruiter dead end), no timeline of employment or freelance work. The current "What I work with" is a stack list (ledger) and answers "how", not "what for me".
- **Menu hides a 3-item nav.** Desktop shows only a "Menu" pill (1440-01-hero.png top right). Three items do not justify a full-screen overlay (Navbar.jsx:8-10). John Bolster and Yehor Herasymenko show the overlay or pills both work, but the best ones keep contact visible. Here there is no persistent Contact/Hire button in the header, so conversion needs 2 clicks or a full-page scroll.
- **CTA hierarchy points the wrong way.** Primary CTA is "View selected work" (scroll), the buy action "Email me" is a plain underlined link, and the page's only high-visibility action is a floating WhatsApp (1440-01-hero.png, bottom right) that overlaps the CTA row at 1440 and is unlabeled.

**Medium**
- **Contact friction and tone.** Email, copy button and a link row; no brief form, no response-time promise, no "what to include" line. Copy is generic: "just want to say hello... interesting conversations" (Contact.jsx:216-217) invites chat, not briefs. WhatsApp, the preferred channel for India/UAE, is buried in the small link row (1440-09-contact.png) even though it floats elsewhere.
- **SEO/meta copy is a job title, not a query match.** `<title>` "Muhammed Midlaj — MERN Stack Developer" (index.html:8). Clients search "website developer Kerala / Dubai"; the title should carry service + geography. og:description and twitter:description differ from each other and from the meta description (index.html:9,15,22); one says "Full Stack", one "MERN".
- **Scroll-spy label and numbered menu convey little.** The header shows the current section but nothing about scroll length; there is no progress cue (John Bolster rail pattern).

**Low**
- Resume/LinkedIn/GitHub appear only inside the menu and contact row; no footer sitemap (1440-10-footer.png).
- "Available for work" has no detail (freelance? full-time? from when?). A recruiter cannot tell what "available" means.
- 768 hero wraps the third thumbnail onto its own line (768-01-hero.png): small, but it breaks the first-impression rhythm for tablet visitors.

## Revised IA and specific fixes

**New order and the question each answers**
1. **Hero:** "Who, for whom, do what, what next?" Make the first supporting line 22px (`--step-1`), `max-width: 38ch`, colour `#e8e8e8` (not muted), placed directly under the h1 with 24px gap, above the fold at 1440x900 and 390x844. Text: "Websites and web apps for growing businesses in India and the UAE. Available for freelance projects from [month]." Keep the h1 but shorten to 2 lines if needed.
2. **Proof strip (new, 1 viewport):** 3 logo/name chips of live client sites (Roots Business, TrustCore, BizBook) with a short result each ("9-stage process site, live since 2025" must be a real fact). Gap 32px, hairline `rgba(255,255,255,.12)`.
3. **Selected work with depth:** "Can he deliver?" Keep rows, but each opens a case-study route/modal with: Client + location, Role, Problem (1 line), What I built (3 bullets), Stack, Outcome (only real metrics), live link. Add two screenshots for Nizan Tech and AI Voice Calling Agent or drop them from the index. Template: one h3 at `--step-3`, 3 labelled facts in a 3-col grid, 680px max text width.
4. **Services / how I work:** "What do I get and how?" 3 offers (Business website, Web app / MERN, Fixes & redesign), each with who it suits, typical delivery window and a start-from price or "quote in 24h". Followed by a 4-step process (Brief, Design, Build, Launch) where numbering is justified as a real sequence.
5. **About (short):** "Who is the person?" 80 words, specific (where he is from, what he has shipped, what he is working to learn), portrait left. Replace stats with 3 facts that are true and verifiable: "6 featured projects", "3 live client sites in UAE/India", "1.5 yrs shipping". Delete "10+ happy clients" unless real. Add stack ledger as compact line, 14px mono.
6. **Contact:** "How do I start?" Headline "Tell me about your project." Three actions at equal weight: WhatsApp button (lime pill, 56px high), Email (copy button), Download CV (outline pill). Underneath: "Reply within 24 hours (IST)." Optional 3-field brief form (name, budget, message).

**Nav:** show a persistent header on desktop at >=900px: logo left, "Work / Services / About" text links 15px, and a lime "Let's talk" pill (height 40px, radius 999px) right. Keep the overlay menu only below 900px. This follows the Yehor Herasymenko always-visible pills.

**CTA hierarchy:** one primary per view. Hero: primary "Start a project" (scroll to Contact or open WhatsApp), secondary "See the work". Move the floating WhatsApp bubble 24px higher at >=1200px or hide it in the hero so it does not collide with the CTAs (1440-01-hero.png).

**Meta:** title `Muhammed Midlaj — Website & Web App Developer, India and UAE` (<=60 chars); one shared description of <=155 chars: "Freelance MERN developer building business websites and web apps for clients in India and the UAE. See live work and start a project." Use it in og and twitter, add Person + Service JSON-LD, plus `areaServed`.

**Motion for IA:** a 2px lime scroll-progress rail on the right edge (height linked to scroll, no easing) as John Bolster does; section entrance only for the proof strip: fade 600ms `cubic-bezier(0.16,1,0.3,1)`, 24px rise, single trigger.

## Patterns referenced (from patterns.md)
- Live-system chrome (clock, availability dot): Moiséz, Huy Phan, Yehor Herasymenko. Already present; add detail to "Available".
- Always-visible nav pills with a filled active state: Yehor Herasymenko (replaces the hidden Menu on desktop).
- Persistent right-edge scroll rail with section number: John Bolster.
- Inline project images inside the headline: Moiséz (existing hero).
- About with a credibility ledger (awards, talks, clients): Huy Phan, to replace the bio and invalid stats.
- Contact with one giant copyable email plus short links: Denny Pratama, John Bolster, JLD'2ND for CTA hierarchy.
- Career told as chapters: Gianluca Boccia, applicable to the experience timeline and the 4-step process.
