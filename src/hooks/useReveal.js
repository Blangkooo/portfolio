import { useEffect, useRef } from 'react';

// Adds .visible when the element scrolls into view. Usage:
//   const ref = useReveal();
//   <div ref={ref} className="reveal">…</div>
export default function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
