import { useRef, useState } from 'react';
import { profile, socials } from '../data/content';
import useTypewriter from '../hooks/useTypewriter';

const LINES = ['MARK', 'CHRISTIAN', 'ALLYSON', 'FEDERIO.'];

// Split a line into letters that roll over on hover.
function Letters({ text, lineIdx }) {
  return text.split('').map((ch, i) => (
    <span
      className="lt"
      data-ch={ch}
      key={i}
      style={{ animationDelay: `${2 + lineIdx * 0.1 + i * 0.028}s` }}
    >
      <span className="lt-in">{ch}</span>
    </span>
  ));
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);
  const cardRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(true);

  // 3D tilt for the photo card only.
  const onMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const c = card.getBoundingClientRect();
    const dx = (e.clientX - (c.left + c.width / 2)) / c.width;
    const dy = (e.clientY - (c.top + c.height / 2)) / c.height;
    card.style.transform =
      `rotate(3deg) perspective(900px) rotateY(${dx * 9}deg) rotateX(${-dy * 9}deg)`;
  };
  const onLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = 'rotate(3deg) perspective(900px)';
  };

  return (
    <section id="home" className="hero" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="hero-meta mono">
        <span>{profile.location.toUpperCase()}</span>
        <span className="avail"><i className="avail-dot" />{profile.status.toUpperCase()}</span>
        <span>CS @ ADNU</span>
      </div>

      <div className="hero-stage">
        <h1 className="hero-title">
          <span className="line">
            <Letters text={LINES[0]} lineIdx={0} />
            <span className="line-note mono dim">— {profile.nickname.toUpperCase()} FOR SHORT</span>
          </span>
          <span className="line"><Letters text={LINES[1]} lineIdx={1} /></span>
          <span className="line indent accent"><Letters text={LINES[2]} lineIdx={2} /></span>
          <span className="line"><Letters text={LINES[3]} lineIdx={3} /></span>
        </h1>

        {/* tilting photo card — overlaps the name, poster style */}
        <div className="photo-card" ref={cardRef}>
          <div className="photo-media">
            {hasPhoto ? (
              <img
                src={profile.photo}
                alt={profile.fullName}
                onError={() => setHasPhoto(false)}
              />
            ) : (
              <div className="photo-fallback">
                <span className="photo-mark">{profile.initials}</span>
                <span className="mono dim">ADD /public/me.jpg</span>
              </div>
            )}
          </div>
          <span className="sticker mono">★ OPEN TO WORK</span>
          <span className="photo-caption mono">FIG. 01 — {profile.nickname.toUpperCase()}, {profile.location.split(',')[0].toUpperCase()}</span>
        </div>
      </div>

      <div className="hero-foot">
        <p className="hero-role"><span className="role-tag mono">{typed}<span className="caret">_</span></span></p>
        <p className="hero-bio">{profile.tagline}</p>
        <div className="hero-links">
          {/* CV lives at public/cv/cv.pdf */}
          <a className="ulink" href={profile.cvUrl} download>Download CV ↓</a>
          <a className="ulink" href="#contact">Contact me →</a>
        </div>
      </div>

      <div className="hero-socials mono">
        {socials.map((s) => (
          <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer">
            {s.label}
          </a>
        ))}
        <span className="hero-scroll dim">SCROLL ↓</span>
      </div>

      {/* runway ticker */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...profile.roles, ...profile.roles, ...profile.roles].map((r, i) => (
            <span key={i}>{r.toUpperCase()} <b>✦</b></span>
          ))}
        </div>
      </div>
    </section>
  );
}
