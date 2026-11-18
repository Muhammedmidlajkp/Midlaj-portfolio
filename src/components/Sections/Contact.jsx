import { useEffect, useRef, useState } from 'react';
import { site, whatsappUrl } from '../../data/site';
import './Contact.css';

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

      <a className="contact-email" href={`mailto:${site.email}`}>
        {site.email}
      </a>

      <div className="contact-actions">
        <button type="button" className="copy-btn" onClick={handleCopy}>
          {label}
        </button>
        {/* announces the result without moving focus */}
        <span className="visually-hidden" role="status">
          {status === 'copied' ? 'Email address copied to the clipboard' : ''}
          {status === 'failed' ? `Could not copy. The address is ${site.email}` : ''}
        </span>
      </div>

      <ul className="contact-links">
        <li>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            WhatsApp
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </li>
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
