# 08 — Accessibility Specialist
**Score: 8/10**
Method: axe-core 4.x (wcag2a/aa, 21aa, 22aa, best-practice) on localhost:5175 at 1440 and 390, page and menu-open; real Tab walk (45 stops) on both; 320px reflow; reduced-motion emulation; contrast maths; source read. Scripts in the scratchpad `pw/a11y.js`, `pw/a2.js`.

## Top strengths (max 3)
1. Axe is clean: 0 WCAG violations on page and with menu open, desktop and mobile. Only finding is best-practice `region` on `.whatsapp-float`.
2. Keyboard model is solid: skip link first, global `:focus-visible` 2px lime ring (index.css:185) measured on every stop, menu focus-trap + Esc + focus return (Navbar.jsx:58-90), no stop hidden under the 83px header (2.4.11 passes, smooth scroll disabled for the test), no overflow at 320px (scrollWidth 320).
3. Semantics are right: lang="en", one h1, h2/h3 order with no skips, header/nav/main/footer, `role=dialog aria-modal` + label, `role=status` for copy feedback (Contact.jsx:64), every img has alt (decorative `alt=""`), link names say "(opens in a new tab)", hero h1 `aria-label` reads once. Reduced motion: 0 running animations after emulation; cursor disabled under it (CustomCursor.jsx:5); native cursor only hidden while custom one runs. Muted text 7.2:1, accent 15.5:1.

## Problems
**Critical:** none.

**High:** none.

**Medium**
- Menu link click loses the destination: `onClick={closeMenu}` then cleanup runs `toggle?.focus()` (Navbar.jsx:87-88), so after choosing "Projects" keyboard focus lands on the Menu button at the top, not the section. Next Tab walks from the header again. Verify: open menu, Enter on a link, read `document.activeElement` (my run: Esc returns to `menu-toggle`; the link path uses the same cleanup).
- Small targets below the 24px 2.5.8 minimum: `.feature-link` 130x27 (ok) but footer/contact links 22px tall (WhatsApp 80x22, GitHub 53x22, LinkedIn 66x22, Instagram 79x22, Back to top 73x22 desktop; 68x20 and 50x21 mobile); `.contact-email` 256x34 mobile; `.logo` 54x24. These pass only via the spacing exception and miss the 44px comfort size on touch. Evidence: a11y.js "small" output at 390; screenshot 390 footer.
- `.whatsapp-float` sits outside any landmark (axe `region`), and is last in DOM so keyboard users hit it only after the footer, covering content at 52-60px in the lower corner (can overlap the footer links on reflow/zoom).

**Low**
- Hover-dim leaves non-hovered menu items at opacity .35 (Navbar.css:222) and ledger rows at .4 (About.css:112): about 2.8:1 while the pointer is on the list. Hover-only, but it fails contrast during that state.
- Hairline UI borders `--line` are 1.36:1; fine for decoration, but the `.copy` button and project-row boundaries rely on them to show where targets are.
- `aria-label` on the h1 makes the real text invisible to find-in-page translators and some SR "read by word" modes; `aria-hidden` lines also hide the text from page translation. Works, but fragile.
- Menu open does not make the page behind `inert`; `aria-modal` covers modern SRs, older ones can still reach the page.
- Live clock `<time>` has no `datetime` attribute, so it conveys nothing machine-readable.
- `html{scroll-behavior:smooth}` (index.css:104) plus a bare 0 `scroll-margin-top` works only because sections have top padding; any anchor to a heading directly would sit under the 83px header.

## Specific fixes
- Menu navigation: in `closeMenu` for link clicks, skip the focus return and instead after scroll set `tabindex="-1"` on the target section and call `focus({preventScroll:true})`. Keep Esc/Close returning to the toggle.
- Targets: set `min-height:44px; display:inline-flex; align-items:center` on `.footer a`, contact social row and `.feature-link` (padding-block 10px), and `.contact-email` `padding-block:8px`. Minimum 24px everywhere, 44px on `(pointer:coarse)`.
- WhatsApp: wrap in `<aside aria-label="Quick contact">` or render inside `<footer>`; add `bottom: calc(16px + env(safe-area-inset-bottom))`; keep 52px on mobile minimum.
- Hover-dim: change to `opacity:.55` (about 4.6:1 on #080808) with 250ms `cubic-bezier(0.16,1,0.3,1)`.
- Add `html{scroll-padding-top:96px}` so any future anchor clears the 83px header; add `inert` to `#root > :not(.menu-overlay)` while open.
- `<time datetime={iso}>` updated with the clock.
- Focus ring: keep 2px lime; add a 4px `#080808` inner offset ring (`box-shadow:0 0 0 2px #080808`) so it holds on lime buttons and photos.

## Patterns referenced (from patterns.md)
Full-screen menu overlay with number list (as built: keep focus management, add inert); hover-dim-siblings lists (dim must stay above 4.5:1); persistent corner CTA/contact floats (keep outside the reading order and in a landmark); preloader and cursor-follower patterns (both already gated on prefers-reduced-motion, which is the right standard to hold future scroll-driven reveals to).
