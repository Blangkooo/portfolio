import { useEffect, useState } from 'react';
import { profile } from '../data/content';

// Minimal loader: wordmark, a counting percentage, a thin line.
export default function Loader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let v = 0;
    const iv = setInterval(() => {
      v = Math.min(100, v + Math.ceil(Math.random() * 14));
      setPct(v);
      if (v >= 100) {
        clearInterval(iv);
        setTimeout(() => setDone(true), 350);
      }
    }, 90);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className={`loader ${done ? 'done' : ''}`}>
      <span className="loader-mark">{profile.siteName}</span>
      <span className="loader-pct">{pct}</span>
    </div>
  );
}
