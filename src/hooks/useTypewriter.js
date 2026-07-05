import { useEffect, useState } from 'react';

export default function useTypewriter(words, { typeMs = 85, deleteMs = 45, pauseMs = 1700 } = {}) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx % words.length];
    let timeout;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }, deleting ? deleteMs : typeMs);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIdx, words, typeMs, deleteMs, pauseMs]);

  return text;
}
