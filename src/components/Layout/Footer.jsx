import React from 'react';
import './Footer.css';

const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
  { label: 'Email', href: 'mailto:midlaj2636@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/Muhammedmidlajkp', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammed-midlaj-kp/', external: true },
];

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-name">Muhammed Midlaj<span>.</span></p>
            <p className="footer-tagline">
              MERN Stack Developer — building fast,<br />accessible web apps.
            </p>
          </div>

          <nav className="footer-links" aria-label="Footer">
            {FOOTER_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noopener noreferrer' : undefined}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Muhammed Midlaj. All rights reserved.</p>
          <p>Designed &amp; built with React.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
