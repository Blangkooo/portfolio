import { useState } from 'react';
import { profile, socials } from '../data/content';
import useReveal from '../hooks/useReveal';
import Section from './Section';

export default function Contact() {
  const ref = useReveal();
  const [status, setStatus] = useState(null);
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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      setStatus({ ok: data.success, msg: data.message });
      if (data.success) form.reset();
    } catch {
      // Static hosting → open Gmail compose addressed to Ally
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
    <Section id="contact" num="06" title="Contact">
      <div ref={ref} className="contact reveal">
        <p className="contact-lead">
          Open to internships, freelance work, and collaborations.
        </p>
        <a
          className="contact-mail"
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {profile.email}
        </a>

        <form className="mform" onSubmit={handleSubmit} noValidate>
          <div className="mform-row">
            <input name="name" type="text" placeholder="NAME" required />
            <input name="email" type="email" placeholder="EMAIL" required />
          </div>
          <textarea name="message" rows="4" placeholder="MESSAGE" required />
          <button className="mform-send" type="submit" disabled={sending} data-hover>
            {sending ? 'SENDING…' : 'SEND →'}
          </button>
          {status && (
            <p className={`mform-status mono ${status.ok ? '' : 'err'}`}>{status.msg}</p>
          )}
        </form>

        <div className="contact-socials mono">
          {socials.filter((s) => s.id !== 'email').map((s) => (
            <a key={s.id} className="ulink" href={s.url} target="_blank" rel="noopener noreferrer">
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
