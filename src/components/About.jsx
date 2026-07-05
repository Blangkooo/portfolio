import { about, profile } from '../data/content';
import useReveal from '../hooks/useReveal';
import Section from './Section';
import Icon from './Icon';

export default function About() {
  const left = useReveal();
  const right = useReveal();

  return (
    <Section id="about" tag="WHO I AM" title="About" accent="Me" alt>
      <div className="about-grid">
        <div ref={left} className="about-visual reveal">
          {/* 🔶 PLACEHOLDER — replace with <img src="/profile.jpg" /> when ready */}
          <div className="portrait">
            <div className="portrait-inner">
              <span className="portrait-initials">{profile.initials}</span>
              <span className="portrait-hint">Profile Photo</span>
            </div>
            <div className="portrait-ring r1" />
            <div className="portrait-ring r2" />
          </div>
        </div>

        <div ref={right} className="about-body reveal">
          <h3 className="about-heading gradient-text">{about.heading}</h3>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="about-text">{p}</p>
          ))}

          <div className="fact-row">
            <div className="fact"><Icon name="graduation" size={15} /><span>{profile.university}</span></div>
            <div className="fact"><Icon name="book" size={15} /><span>{profile.degree}</span></div>
            <div className="fact"><Icon name="location" size={15} /><span>{profile.location}</span></div>
            <div className="fact"><Icon name="email" size={15} /><span>{profile.email}</span></div>
          </div>

          <div className="identity-grid">
            {about.identities.map((it) => (
              <div key={it.label} className="identity-card">
                <span className="identity-icon"><Icon name={it.icon} size={18} /></span>
                <span>{it.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
