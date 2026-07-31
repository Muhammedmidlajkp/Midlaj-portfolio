import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close the mobile menu with Escape (WCAG keyboard operability)
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  return (
    <div className="nav-wrapper">
      <nav className="pill-nav">
        {/* anchor instead of a div so the logo is keyboard-operable */}
        <a className="logo" href="#hero" aria-label="Midlaj — back to top">
          Midlaj<span>.</span>
        </a>
        
        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        
        {/* Desktop CTA */}
        <div className="nav-cta">
          <a href="#contact" className="btn-hire">Let's Talk</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="mobile-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
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

      {/* Mobile Modal Menu */}
      <div id="mobile-menu" className={`mobile-modal-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}>
        <div className="mobile-modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={closeMenu} aria-label="Close menu">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div className="mobile-nav-links">
            <a href="#hero" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
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

