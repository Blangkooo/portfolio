import { profile } from '../data/content';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo gradient-text">{profile.siteName}</div>
      <SocialLinks />
      <p>
        Designed &amp; built by <span className="gradient-text">{profile.fullName}</span>
      </p>
      <small>© {new Date().getFullYear()} {profile.siteName}. All rights reserved.</small>
    </footer>
  );
}
