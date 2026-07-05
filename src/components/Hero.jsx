import { profile } from '../data/content';
import useTypewriter from '../hooks/useTypewriter';
import SocialLinks from './SocialLinks';
import Icon from './Icon';

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="home" className="hero">
      <div className="hero-grid">

        {/* ── Left: intro ── */}
        <div className="hero-left">
          <p className="hero-kicker">
            <Icon name="spark" size={13} /> {profile.status.toUpperCase()}
          </p>
          <p className="hero-greeting">HELLO, I'M</p>
          <h1 className="hero-name">
            Mark Christian <span className="gradient-text">Allyson</span> C. Federio
          </h1>
          <p className="hero-alias">— {profile.nickname} for short.</p>

          <div className="hero-typed">
            <span>{typed}</span>
            <span className="caret">|</span>
          </div>

          <p className="hero-bio">{profile.tagline}</p>

          <div className="hero-actions">
            {/* 🔶 CV placeholder — put your real file at public/cv/cv.pdf */}
            <a className="btn btn-primary" href={profile.cvUrl} download>
              <Icon name="download" size={17} /> Download CV
            </a>
            <a className="btn btn-ghost" href="#contact">
              <Icon name="send" size={15} /> Contact Me
            </a>
          </div>

          <SocialLinks className="hero-socials" />
        </div>

        {/* ── Right: live code card ── */}
        <div className="hero-right">
          <div className="code-card">
            <div className="code-titlebar">
              <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
              <span className="code-filename">ally.js</span>
            </div>
            <pre className="code-body">
              <code>
                <span className="c-kw">const</span> <span className="c-var">ally</span> = {'{'}{'\n'}
                {'  '}<span className="c-key">name</span>: <span className="c-str">'{profile.nickname} Federio'</span>,{'\n'}
                {'  '}<span className="c-key">school</span>: <span className="c-str">'Ateneo de Naga'</span>,{'\n'}
                {'  '}<span className="c-key">degree</span>: <span className="c-str">'BS Computer Science'</span>,{'\n'}
                {'  '}<span className="c-key">role</span>: <span className="c-str">'{typed}<span className="caret">|</span>'</span>,{'\n'}
                {'  '}<span className="c-key">location</span>: <span className="c-str">'Naga City, PH'</span>,{'\n'}
                {'  '}<span className="c-key">openToWork</span>: <span className="c-bool">true</span>,{'\n'}
                {'}'};{'\n\n'}
                <span className="c-var">ally</span>.<span className="c-fn">build</span>(<span className="c-str">'the future'</span>);
              </code>
            </pre>
            <div className="code-glow" />
          </div>

          <div className="float-chip chip-a"><Icon name="brain" size={14} /> AI Enthusiast</div>
          <div className="float-chip chip-b"><Icon name="server" size={14} /> Cloud Explorer</div>
          <div className="float-chip chip-c"><Icon name="teach" size={14} /> Tutor</div>
        </div>
      </div>

      <a className="scroll-hint" href="#about" aria-label="Scroll down">
        <span>SCROLL</span>
        <div className="scroll-track"><div className="scroll-thumb" /></div>
      </a>
    </section>
  );
}
