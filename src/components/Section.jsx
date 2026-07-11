import useReveal from '../hooks/useReveal';

// Editorial section shell: "01 — Title" header over a hairline rule.
export default function Section({ id, num, title, children }) {
  const ref = useReveal();
  return (
    <section id={id} className="sec">
      <div ref={ref} className="sec-head reveal">
        <span className="sec-num mono">{num}</span>
        <h2 className="sec-title">{title}</h2>
      </div>
      {children}
    </section>
  );
}
