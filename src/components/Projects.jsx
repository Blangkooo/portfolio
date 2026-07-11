import { projects } from '../data/content';
import useReveal from '../hooks/useReveal';
import Section from './Section';

// Editorial index: each project is a full-width row that inverts on hover.
function ProjectRow({ p, i }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="proj-row reveal" style={{ transitionDelay: `${i * 0.06}s` }} data-hover>
      <span className="proj-num mono">{String(p.id).padStart(2, '0')}</span>
      <div className="proj-main">
        <h3 className="proj-title">{p.title}</h3>
        <p className="proj-desc">{p.description}</p>
      </div>
      <span className="proj-tags mono">{p.tags.join(' / ')}</span>
      <div className="proj-links mono">
        <a className="ulink" href={p.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        <a className="ulink" href={p.demo} target="_blank" rel="noopener noreferrer">Demo ↗</a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" num="03" title="Selected Projects">
      <div className="proj-index">
        {projects.map((p, i) => (
          <ProjectRow key={p.id} p={p} i={i} />
        ))}
      </div>
      <p className="proj-note mono dim">More on GitHub → github.com/Blangkooo</p>
    </Section>
  );
}
