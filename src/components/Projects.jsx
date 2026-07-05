import { projects } from '../data/content';
import useReveal from '../hooks/useReveal';
import Section from './Section';
import Icon from './Icon';

function ProjectCard({ project, index }) {
  const ref = useReveal();
  return (
    <article
      ref={ref}
      className="project-card reveal"
      style={{ '--accent': project.accent, transitionDelay: `${index * 0.08}s` }}
    >
      <div className="project-media">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          /* 🔶 Generated placeholder art — set project.image in content.js to replace */
          <div className="project-placeholder">
            <span className="project-num">0{project.id}</span>
            <Icon name="spark" size={26} className="project-spark" />
          </div>
        )}
      </div>
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="tag-row">
          {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
        <div className="project-actions">
          <a className="btn btn-small btn-primary" href={project.github} target="_blank" rel="noopener noreferrer">
            <Icon name="github" size={15} /> GitHub
          </a>
          <a className="btn btn-small btn-ghost" href={project.demo} target="_blank" rel="noopener noreferrer">
            <Icon name="external" size={14} /> Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" tag="WHAT I'VE BUILT" title="Featured" accent="Projects" alt>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
