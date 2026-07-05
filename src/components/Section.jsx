import useReveal from '../hooks/useReveal';

// Shared section shell: kicker tag + gradient title + revealed content.
export default function Section({ id, tag, title, accent, children, alt = false }) {
  const ref = useReveal();
  return (
    <section id={id} className={`section ${alt ? 'section-alt' : ''}`}>
      <div className="container">
        <div ref={ref} className="section-head reveal">
          <span className="section-tag">{tag}</span>
          <h2 className="section-title">
            {title} <span className="gradient-text">{accent}</span>
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
