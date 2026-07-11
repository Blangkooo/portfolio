import { useEffect, useState } from 'react';
import { profile } from '../data/content';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString('en-PH', {
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false, timeZone: 'Asia/Manila',
      }));
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, []);

  return (
    <footer className="footer mono">
      <span>© {new Date().getFullYear()} {profile.siteName}</span>
      <span className="dim">NAGA CITY — {time} PHT</span>
      <button
        className="ulink"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        BACK TO TOP ↑
      </button>
    </footer>
  );
}
