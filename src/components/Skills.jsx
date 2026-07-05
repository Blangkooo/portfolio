import { skills } from '../data/content';
import useReveal from '../hooks/useReveal';
import Section from './Section';
import Icon from './Icon';

function SkillCard({ group, index }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="skill-card reveal" style={{ transitionDelay: `${index * 0.08}s` }}>
      <div className="skill-card-head">
        <span className="skill-card-icon"><Icon name={group.icon} size={20} /></span>
        <h3>{group.category}</h3>
      </div>
      <div className="chip-row">
        {group.items.map((item) => (
          <span key={item} className="chip">{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" tag="WHAT I KNOW" title="My" accent="Skills">
      <div className="skills-grid">
        {skills.map((group, i) => (
          <SkillCard key={group.category} group={group} index={i} />
        ))}
      </div>
    </Section>
  );
}
