import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

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

const SECTION_IDS = LINKS.map((l) => l.id);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const toggleRef = useRef(null);
  const dialogRef = useRef(null);

  const closeMenu = () => setIsMenuOpen(false);

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
    <div className="nav-wrapper">
      <nav className="pill-nav" aria-label="Primary">
        <a className="logo" href="#hero" aria-label="Midlaj — back to top">
          Midlaj<span>.</span>
        </a>

        <div className="nav-links">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? 'active' : undefined}
              aria-current={active === l.id ? 'location' : undefined}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="nav-cta">
          <a href="#contact" className="btn-hire">Let's Talk</a>
        </div>

        <button
          ref={toggleRef}
          className="mobile-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </nav>

      <div id="mobile-menu" className={`mobile-modal-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}>
        <div
          ref={dialogRef}
          className="mobile-modal-content"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close-btn" onClick={closeMenu} aria-label="Close menu">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="mobile-nav-links">
            <a href="#hero" onClick={closeMenu}>Home</a>
            {LINKS.map((l) => (
              <a key={l.id} href={`#${l.id}`} onClick={closeMenu}>{l.label}</a>
            ))}
          </div>

          <div className="mobile-cta">
            <a href="#contact" className="btn-contact-mobile" onClick={closeMenu}>Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
