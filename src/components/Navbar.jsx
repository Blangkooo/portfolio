import { useEffect, useState } from 'react';
import { nav, profile } from '../data/content';

export default function Navbar({ theme, onToggleTheme }) {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      let current = 'home';
      for (const { id } of nav) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) current = id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="topbar">
      <button className="wordmark" onClick={() => go('home')}>
        {profile.siteName}
      </button>

      <nav className={`menu ${open ? 'open' : ''}`}>
        {nav.map(({ id, label }, i) => (
          <button
            key={id}
            className={`menu-link ${active === id ? 'on' : ''}`}
            onClick={() => go(id)}
          >
            <sup>{String(i).padStart(2, '0')}</sup> {label}
          </button>
        ))}
      </nav>

      <div className="topbar-right">
        <button className="theme-switch" onClick={onToggleTheme} aria-label="Toggle theme">
          <span className={`switch-dot ${theme === 'light' ? 'right' : ''}`} />
        </button>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span />
        </button>
      </div>
    </header>
  );
}
