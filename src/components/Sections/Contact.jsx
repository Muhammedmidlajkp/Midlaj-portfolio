import React, { useState } from 'react';
import './Contact.css';

const EMAIL = 'midlaj2636@gmail.com';

const Contact = () => {
  const [status, setStatus] = useState('');

  // No backend exists, so submitting composes an email in the visitor's
  // mail app with the form contents — and tells them what happened.
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const subject = `Portfolio enquiry from ${data.get('name')}`;
    const body = `${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('Opening your email app to send the message…');
  };

  return (
    <section id="contact">
      <div className="contact-inner">
        <p className="section-label reveal" style={{ textAlign: 'center' }}>// Contact</p>
        <h2 className="contact-title reveal reveal-delay-1">Let's build<br /><span>together.</span></h2>
        <p className="contact-sub reveal reveal-delay-2">
          Have a project in mind or just want to say hello? I'm always open to interesting conversations and new opportunities.
        </p>

        <form className="contact-form reveal reveal-delay-3" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="visually-hidden" htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" placeholder="Name" autoComplete="name" required />
          </div>
          <div className="form-group">
            <label className="visually-hidden" htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" placeholder="Email" autoComplete="email" required />
          </div>
          <div className="form-group">
            <label className="visually-hidden" htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" placeholder="Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn-primary">Send Message</button>
          <p className="form-status" role="status">{status}</p>
        </form>

        <div className="contact-divider reveal reveal-delay-4"><span>OR</span></div>

        <a href={`mailto:${EMAIL}`} className="contact-email reveal reveal-delay-4">{EMAIL}</a>
        <div className="social-links reveal reveal-delay-4">
          <a href="https://github.com/Muhammedmidlajkp" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
          <a href="https://www.linkedin.com/in/muhammed-midlaj-kp/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
          <a href="https://www.instagram.com/__.midlaj.___/" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
