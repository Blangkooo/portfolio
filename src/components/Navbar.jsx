import { useEffect, useState } from 'react';
import { nav, profile } from '../data/content';
import Icon from './Icon';

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      let current = 'home';
      for (const { id } of nav) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) current = id;
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
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <button className="logo" onClick={() => go('home')}>{profile.siteName}</button>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {nav.map(({ id, label }) => (
            <button
              key={id}
              className={`nav-link ${active === id ? 'active' : ''}`}
              onClick={() => go(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle theme">
            <Icon name={theme === 'dark' ? 'moon' : 'sun'} size={18} />
          </button>
          <button className="icon-btn nav-burger" onClick={() => setOpen(!open)} aria-label="Menu">
            <Icon name={open ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
