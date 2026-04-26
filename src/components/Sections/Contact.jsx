import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-inner">
        <p className="section-label reveal" style={{ textAlign: 'center' }}>// Contact</p>
        <h2 className="contact-title reveal reveal-delay-1">Let's build<br /><span>together.</span></h2>
        <p className="contact-sub reveal reveal-delay-2">
          Have a project in mind or just want to say hello? I'm always open to interesting conversations and new opportunities.
        </p>
        
        <form className="contact-form reveal reveal-delay-3" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>

        <div className="contact-divider reveal reveal-delay-4"><span>OR</span></div>
        
        <a href="mailto:midlaj2636@gmail.com" className="contact-email reveal reveal-delay-4">midlaj2636@gmail.com</a>
        <div className="social-links reveal reveal-delay-4">
          <a href="#" className="social-link">GitHub</a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
          <a href="https://x.com/compose/post" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
          <a href="https://www.instagram.com/__.midlaj.___/" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
