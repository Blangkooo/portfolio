import { useEffect, useRef } from 'react';

// Twinkling four-point sparks (the ✦ motif) scattered across the page.
// Mostly foreground-colored at low opacity, a few in acid yellow.
export default function Twinkles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let sparks = [];
    let raf;

    const isLight = () =>
      document.documentElement.getAttribute('data-theme') === 'light';

    const resize = () => {
      const w = window.innerWidth || document.documentElement.clientWidth;
      const h = window.innerHeight || document.documentElement.clientHeight;
      if (!w || !h) return;                     // skip until the layout has real size
      canvas.width = w;
      canvas.height = h;
      sparks = Array.from({ length: 44 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        s: Math.random() * 5 + 2.5,             // size
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 1.4 + 0.5,
        yellow: Math.random() < 0.22,
        drift: (Math.random() - 0.5) * 0.08,
      }));
    };

    const drawSpark = (x, y, s, alpha, yellow) => {
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = yellow
        ? (isLight() ? '#E0B400' : '#F5D90A')   // deeper gold reads on cream
        : isLight() ? '#20201C' : '#F2F2F2';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x - s, y); ctx.lineTo(x + s, y);
      ctx.moveTo(x, y - s); ctx.lineTo(x, y + s);
      ctx.stroke();
      // small diagonal ticks for the ✦ feel
      const d = s * 0.42;
      ctx.beginPath();
      ctx.moveTo(x - d, y - d); ctx.lineTo(x + d, y + d);
      ctx.moveTo(x - d, y + d); ctx.lineTo(x + d, y - d);
      ctx.globalAlpha = alpha * 0.5;
      ctx.stroke();
      ctx.globalAlpha = 1;
    };

    const frame = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const light = isLight();
      for (const sp of sparks) {
        const tw = 0.5 + 0.5 * Math.sin(t * 0.001 * sp.speed + sp.phase);
        sp.x += sp.drift;
        if (sp.x < -10) sp.x = canvas.width + 10;
        if (sp.x > canvas.width + 10) sp.x = -10;
        // stronger in light mode so the sparks read against the cream page
        const base = sp.yellow ? (light ? 0.65 : 0.5) : (light ? 0.42 : 0.28);
        const alpha = base * tw;
        if (alpha > 0.03) drawSpark(sp.x, sp.y, sp.s * (0.6 + tw * 0.4), alpha, sp.yellow);
      }
      raf = requestAnimationFrame(frame);
    };

    resize();
    raf = requestAnimationFrame(frame);
    // ResizeObserver reliably catches the first real layout size (the preview
    // iframe can report 0 at mount) and every later viewport change.
    const ro = new ResizeObserver(resize);
    ro.observe(document.documentElement);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="twinkles" />;
}
