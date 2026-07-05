import { useEffect, useState } from 'react';
import { profile } from '../data/content';

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`loader ${hidden ? 'hidden' : ''}`}>
      <div className="loader-logo">{profile.siteName}</div>
      <div className="loader-bar"><div className="loader-progress" /></div>
      <p className="loader-text">Booting {profile.siteName}…</p>
    </div>
  );
}
