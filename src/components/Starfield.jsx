import { useEffect, useRef } from 'react';

// ═══════════════════════════════════════════════════════════
//  Theme-aware interactive background engine.
//  DARK  → twinkling stars with flares, shooting stars,
//          mouse parallax, click sparkle-bursts.
//  LIGHT → "daybreak": golden motes that drift upward and
//          flee the cursor, a glowing sun, click bursts.
// ═══════════════════════════════════════════════════════════
export default function Starfield() {
  const canvasRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let theme = document.documentElement.getAttribute('data-theme') || 'dark';
    let stars = [];
    let motes = [];
    let bursts = [];
    let shooting = null;
    let nextShot = performance.now() + 2500;
    let raf;
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const glow = { x: mouse.x, y: mouse.y };

    const themeObserver = new MutationObserver(() => {
      theme = document.documentElement.getAttribute('data-theme') || 'dark';
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      stars = Array.from({ length: 190 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        z: Math.random() * 0.8 + 0.2,              // depth → parallax strength
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 1.6 + 0.4,          // twinkle speed
        flare: Math.random() < 0.12,               // 12% of stars get cross flares
      }));

      motes = Array.from({ length: 46 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2.6 + 1,
        vy: Math.random() * 0.35 + 0.12,
        sway: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.015 + 0.006,
        hue: Math.random() < 0.7 ? 'gold' : 'sky', // mostly golden, some sky blue
        a: Math.random() * 0.5 + 0.3,
      }));
    }

    function spawnBurst(x, y) {
      const dark = theme === 'dark';
      for (let i = 0; i < 22; i++) {
        const ang = (Math.PI * 2 * i) / 22 + Math.random() * 0.4;
        const spd = Math.random() * 3 + 1.2;
        bursts.push({
          x, y,
          vx: Math.cos(ang) * spd,
          vy: Math.sin(ang) * spd,
          life: 1,
          r: Math.random() * 2 + 1,
          color: dark
            ? (Math.random() < 0.5 ? '99,140,255' : '170,120,255')
            : (Math.random() < 0.7 ? '251,191,36' : '56,189,248'),
        });
      }
    }

    function drawDark(t) {
      const px = (mouse.x - canvas.width / 2);
      const py = (mouse.y - canvas.height / 2);

      for (const s of stars) {
        const tw = 0.5 + 0.5 * Math.sin(t * 0.001 * s.speed + s.phase);
        const a = 0.15 + tw * 0.8;
        const x = s.x + px * s.z * 0.018;
        const y = s.y + py * s.z * 0.018;

        ctx.beginPath();
        ctx.arc(x, y, s.r * (0.7 + tw * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${a})`;
        ctx.fill();

        // bright cross-flare when a flare star peaks
        if (s.flare && tw > 0.85) {
          const len = s.r * 7 * (tw - 0.85) / 0.15;
          ctx.strokeStyle = `rgba(180,200,255,${(tw - 0.85) * 2.2})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(x - len, y); ctx.lineTo(x + len, y);
          ctx.moveTo(x, y - len); ctx.lineTo(x, y + len);
          ctx.stroke();
        }
      }

      // shooting stars
      if (!shooting && t > nextShot) {
        shooting = {
          x: Math.random() * canvas.width * 0.7 + canvas.width * 0.15,
          y: Math.random() * canvas.height * 0.3,
          vx: 7 + Math.random() * 5,
          vy: 3 + Math.random() * 2.5,
          life: 1,
        };
      }
      if (shooting) {
        shooting.x += shooting.vx;
        shooting.y += shooting.vy;
        shooting.life -= 0.016;
        const grad = ctx.createLinearGradient(
          shooting.x, shooting.y,
          shooting.x - shooting.vx * 11, shooting.y - shooting.vy * 11
        );
        grad.addColorStop(0, `rgba(255,255,255,${shooting.life})`);
        grad.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(shooting.x, shooting.y);
        ctx.lineTo(shooting.x - shooting.vx * 11, shooting.y - shooting.vy * 11);
        ctx.stroke();
        if (shooting.life <= 0 || shooting.x > canvas.width + 60) {
          shooting = null;
          nextShot = t + 2600 + Math.random() * 4200;
        }
      }
    }

    function drawLight() {
      for (const m of motes) {
        m.sway += m.swaySpeed;
        m.y -= m.vy;
        m.x += Math.sin(m.sway) * 0.35;

        // motes gently flee the cursor
        const dx = m.x - mouse.x;
        const dy = m.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 130 && dist > 0.01) {
          const push = (130 - dist) / 130 * 1.6;
          m.x += (dx / dist) * push;
          m.y += (dy / dist) * push;
        }

        if (m.y < -12) { m.y = canvas.height + 12; m.x = Math.random() * canvas.width; }
        if (m.x < -12) m.x = canvas.width + 12;
        if (m.x > canvas.width + 12) m.x = -12;

        const rgb = m.hue === 'gold' ? '251,191,36' : '56,189,248';
        const grad = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.r * 3);
        grad.addColorStop(0, `rgba(${rgb},${m.a})`);
        grad.addColorStop(1, `rgba(${rgb},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r * 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function drawBursts() {
      bursts = bursts.filter((p) => p.life > 0);
      for (const p of bursts) {
        p.x += p.vx; p.y += p.vy;
        p.vx *= 0.96; p.vy *= 0.96;
        p.life -= 0.022;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * p.life, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.life})`;
        ctx.fill();
      }
    }

    function frame(t) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (theme === 'dark') drawDark(t);
      else drawLight();
      drawBursts();

      // smooth cursor glow follow
      glow.x += (mouse.x - glow.x) * 0.08;
      glow.y += (mouse.y - glow.y) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glow.x}px, ${glow.y}px) translate(-50%, -50%)`;
      }

      raf = requestAnimationFrame(frame);
    }

    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onClick = (e) => spawnBurst(e.clientX, e.clientY);

    resize();
    raf = requestAnimationFrame(frame);
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('click', onClick);

    return () => {
      cancelAnimationFrame(raf);
      themeObserver.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <div className="starfield">
      <canvas ref={canvasRef} />
      <div className="sun"><div className="sun-rays" /></div>
      <div className="nebula nebula-a" />
      <div className="nebula nebula-b" />
      <div className="grid-overlay" />
      <div ref={glowRef} className="cursor-glow" />
    </div>
  );
}
