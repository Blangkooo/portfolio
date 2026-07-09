import { socials } from '../data/content';
import Icon from './Icon';

// Animated social icon buttons. URLs live in src/data/content.js (🔶 placeholders).
export default function SocialLinks({ className = '' }) {
  return (
    <div className={`socials ${className}`}>
      {socials.map((s) => (
        <a
          key={s.id}
          className="social-btn"
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          data-label={s.label}
        >
          <Icon name={s.id} size={18} />
        </a>
      ))}
    </div>
  );
}
