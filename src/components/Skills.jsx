import { skills } from '../data/content';
import useReveal from '../hooks/useReveal';
import Section from './Section';

// Marquee of every skill + category rows underneath.
export default function Skills() {
  const listRef = useReveal();
  const all = skills.flatMap((g) => g.items);
  const strip = [...all, ...all]; // duplicated for a seamless loop

  return (
    <Section id="skills" num="02" title="Skills">
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {strip.map((s, i) => (
            <span key={i} className="marquee-item">{s}<i>✦</i></span>
          ))}
        </div>
      </div>

      <div ref={listRef} className="skill-rows reveal">
        {skills.map((g) => (
          <div key={g.category} className="skill-row" data-hover>
            <h3 className="skill-cat">{g.category}</h3>
            <p className="skill-items mono">{g.items.join(' / ')}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
