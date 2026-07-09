import { useState } from 'react';
import { profile } from '../data/content';
import useReveal from '../hooks/useReveal';
import Section from './Section';
import SocialLinks from './SocialLinks';
import Icon from './Icon';

export default function Contact() {
  const left = useReveal();
  const right = useReveal();
  const [status, setStatus] = useState(null); // { ok, msg }
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      setStatus({ ok: false, msg: 'Please fill in all fields.' });
      return;
    }

    setSending(true);
    setStatus(null);
    try {
      // Works when served behind the Express backend (server.js /api/contact).
      // On a static-only deploy it falls back to opening the mail client.
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      setStatus({ ok: data.success, msg: data.message });
      if (data.success) form.reset();
    } catch {
      // No backend (static hosting) → open Gmail compose addressed to Ally
      const gmail =
        `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}` +
        `&su=${encodeURIComponent('Portfolio message from ' + name)}` +
        `&body=${encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')')}`;
      window.open(gmail, '_blank');
      setStatus({ ok: true, msg: 'Opening Gmail with your message…' });
    } finally {
      setSending(false);
    }
  }

  return (
    <Section id="contact" tag="GET IN TOUCH" title="Contact" accent="Me">
      <div className="contact-grid">
        <div ref={left} className="contact-info reveal">
          <h3 className="gradient-text">Let's Build Something Together</h3>
          <p>
            I'm currently open to internship opportunities, freelance projects, and collaborations.
            If you have an exciting project or just want to say hello, my inbox is always open.
          </p>
          <div className="contact-rows">
            <div className="contact-row">
              <span className="contact-ic"><Icon name="email" size={17} /></span>
              <div><small>Email</small><strong>{profile.email}</strong></div>
            </div>
            <div className="contact-row">
              <span className="contact-ic"><Icon name="location" size={17} /></span>
              <div><small>Location</small><strong>{profile.location}</strong></div>
            </div>
            <div className="contact-row">
              <span className="contact-ic"><Icon name="check" size={17} /></span>
              <div><small>Status</small><strong>{profile.status}</strong></div>
            </div>
          </div>
          <SocialLinks />
        </div>

        <form ref={right} className="contact-form reveal" onSubmit={handleSubmit} noValidate>
          <label>
            Your Name
            <input name="name" type="text" placeholder="Mark Federio" required />
          </label>
          <label>
            Your Email
            <input name="email" type="email" placeholder="hello@example.com" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" placeholder="Tell me about your project or opportunity…" required />
          </label>
          <button className="btn btn-primary btn-full" type="submit" disabled={sending}>
            <Icon name="send" size={15} /> {sending ? 'Sending…' : 'Send Message'}
          </button>
          {status && (
            <p className={`form-status ${status.ok ? 'success' : 'error'}`}>{status.msg}</p>
          )}
        </form>
      </div>
    </Section>
  );
}
