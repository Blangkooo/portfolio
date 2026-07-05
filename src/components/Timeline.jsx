import useReveal from '../hooks/useReveal';
import Icon from './Icon';

// Shared vertical timeline used by Education and Experience.
export function TimelineItem({ icon, title, org, period, active, description, highlights, tags, index }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="tl-item reveal" style={{ transitionDelay: `${index * 0.08}s` }}>
      <div className={`tl-dot ${active ? 'glow' : ''}`} />
      <div className="tl-card">
        <div className="tl-head">
          <span className="tl-icon"><Icon name={icon} size={18} /></span>
          <div>
            <h3>{title}</h3>
            <span className="tl-org">{org}</span>
          </div>
        </div>
        <div className="tl-period">
          {period}
          {active && <span className="badge-live">Active</span>}
        </div>
        <p className="tl-desc">{description}</p>
        {highlights && (
          <ul className="tl-highlights">
            {highlights.map((h) => (
              <li key={h}><Icon name="check" size={14} /><span>{h}</span></li>
            ))}
          </ul>
        )}
        {tags && (
          <div className="tag-row">
            {tags.map((t) => <span key={t} className="tag tag-alt">{t}</span>)}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Timeline({ children }) {
  return <div className="timeline">{children}</div>;
}
