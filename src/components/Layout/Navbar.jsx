import { useState, useEffect, useRef } from 'react';
import { site, whatsappUrl } from '../../data/site';
import './Navbar.css';

// Page order. The menu numbers these, so keep the array in the same order
// as the sections in App.jsx.
const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

// Highlights the section currently in the middle band of the viewport
const useActiveSection = (ids) => {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    const targets = ['hero', ...ids].map((id) => document.getElementById(id)).filter(Boolean);
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);
  return active;
};

// true once the page has scrolled, so the header can gain a backdrop
const useScrolled = (threshold = 24) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
};

const SECTION_IDS = LINKS.map((l) => l.id);
const pad = (n) => String(n).padStart(2, '0');

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const scrolled = useScrolled();
  const toggleRef = useRef(null);
  const dialogRef = useRef(null);

  const closeMenu = () => setIsMenuOpen(false);
  const currentLabel = LINKS.find((l) => l.id === active)?.label;

  useEffect(() => {
    if (!isMenuOpen) return;
    const toggle = toggleRef.current;
    const dialog = dialogRef.current;
    document.body.style.overflow = 'hidden';
    dialog.querySelector('a, button')?.focus();

    // Escape closes; Tab cycles inside the open menu (focus trap)
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
        return;
      }
      if (e.key !== 'Tab') return;
      const focusables = dialog.querySelectorAll('a, button');
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      // hand focus back to the control that opened the menu
      toggle?.focus();
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <a className="logo" href="#hero" aria-label="Midlaj — back to top">
          Midlaj<span>.</span>
        </a>

        <div className="header-right">
          {/* tells you where you are without a second row of links */}
          <p className={`header-section${currentLabel ? ' visible' : ''}`} aria-hidden="true">
            {currentLabel}
          </p>
          <button
            ref={toggleRef}
            className="menu-toggle"
            onClick={() => setIsMenuOpen(true)}
            aria-expanded={isMenuOpen}
            aria-controls="site-menu"
          >
            Menu
            <span className="menu-icon" aria-hidden="true">
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </header>

      <div id="site-menu" className={`menu-overlay${isMenuOpen ? ' active' : ''}`}>
        <div
          ref={dialogRef}
          className="menu-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="menu-top">
            <a className="logo" href="#hero" onClick={closeMenu} aria-label="Midlaj — back to top">
              Midlaj<span>.</span>
            </a>
            <button className="menu-toggle" onClick={closeMenu}>
              Close
              <span className="menu-icon open" aria-hidden="true">
                <span></span>
                <span></span>
              </span>
            </button>
          </div>

          <nav className="menu-nav" aria-label="Sections">
            <ol className="menu-list">
              {LINKS.map((l, i) => (
                <li key={l.id} style={{ '--i': i }}>
                  <a
                    href={`#${l.id}`}
                    onClick={closeMenu}
                    aria-current={active === l.id ? 'location' : undefined}
                  >
                    <span className="menu-num" aria-hidden="true">{pad(i + 1)}</span>
                    <span className="menu-label">{l.label}</span>
                    <span className="menu-here" aria-hidden="true"></span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="menu-foot">
            <a className="menu-email" href={`mailto:${site.email}`}>{site.email}</a>
            <ul className="menu-links">
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </li>
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
