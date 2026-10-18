import { site } from '../../data/site';
import './Footer.css';

const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
  { label: 'Email', href: `mailto:${site.email}` },
  ...site.socials.slice(0, 2).map((s) => ({ ...s, external: true })),
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
          <p>© {new Date().getFullYear()} Muhammed Midlaj. All rights reserved.</p>
          <p>Designed &amp; built with React.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
