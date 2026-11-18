import { useEffect, useRef, useState } from 'react';
import { site, whatsappUrl } from '../../data/site';
import './Contact.css';

// The same three projects that sit inside the hero headline return here.
const THUMBS = ['weddesy', 'rootsbusiness', 'trustcore'];

// Clipboard API where available, a hidden textarea where it is not
// (older browsers, or pages the browser considers insecure).
const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const field = document.createElement('textarea');
    field.value = text;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch {
      ok = false;
    }
    document.body.removeChild(field);
    return ok;
  }
};

const Check = () => (
  <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="copy-check">
    <path d="M3.5 8.5l3 3 6-7" />
  </svg>
);

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle | copied | failed
  const timer = useRef(0);

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleCopy = async () => {
    const ok = await copyText(site.email);
    setStatus(ok ? 'copied' : 'failed');
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus('idle'), 2400);
  };

  const label = { idle: 'Copy email', copied: 'Copied', failed: 'Copy failed' }[status];

  return (
    <section id="contact" aria-labelledby="contact-heading" data-hide-fab>
      <h2 id="contact-heading" className="contact-title">
        Let's build together.
      </h2>
      <p className="contact-sub">
        Have a project in mind or just want to say hello? I'm always open to interesting
        conversations and new opportunities.
      </p>

      <a className={`contact-email${status === 'copied' ? ' is-copied' : ''}`} href={`mailto:${site.email}`}>
        {site.email}
      </a>

      <div className="contact-actions">
        <a className="btn-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          Message on WhatsApp
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
        <button type="button" className="copy-btn" data-state={status} onClick={handleCopy}>
          {status === 'copied' && <Check />}
          {label}
        </button>
        {/* announces the result without moving focus */}
        <span className="visually-hidden" role="status">
          {status === 'copied' ? 'Email address copied to the clipboard' : ''}
          {status === 'failed' ? `Could not copy. The address is ${site.email}` : ''}
        </span>

        <div className="contact-thumbs" aria-hidden="true">
          {THUMBS.map((name) => (
            <img key={name} src={`/img/${name}-thumb.webp`} width="480" height="300" alt="" loading="lazy" decoding="async" />
          ))}
        </div>
      </div>

      <ul className="contact-links">
        {site.socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contact;
