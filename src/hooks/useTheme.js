import { useEffect, useState } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem('mn-theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('mn-theme', theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  return [theme, toggle];
}
