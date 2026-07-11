import { about, profile } from '../data/content';
import useReveal from '../hooks/useReveal';
import Section from './Section';

export default function About() {
  const body = useReveal();
  const aside = useReveal();

  return (
    <Section id="about" num="01" title="About">
      <div className="about-cols">
        <div ref={body} className="about-main reveal">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="about-p">{p}</p>
          ))}
          <div className="roles-list">
            {about.identities.map((it, i) => (
              <div key={it.label} className="role-row" data-hover>
                <span className="mono dim">{String(i + 1).padStart(2, '0')}</span>
                <span>{it.label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside ref={aside} className="about-aside mono reveal">
          <div className="aside-item">
            <span className="dim">UNIVERSITY</span>
            <span>{profile.university}</span>
          </div>
          <div className="aside-item">
            <span className="dim">DEGREE</span>
            <span>{profile.degree}</span>
          </div>
          <div className="aside-item">
            <span className="dim">LOCATION</span>
            <span>{profile.location}</span>
          </div>
          <div className="aside-item">
            <span className="dim">EMAIL</span>
            <a className="ulink" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`} target="_blank" rel="noopener noreferrer">
              {profile.email}
            </a>
          </div>
        </aside>
      </div>
    </Section>
  );
}
