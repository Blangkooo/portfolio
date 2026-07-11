import useReveal from '../hooks/useReveal';

// Minimal ledger row shared by Education and Experience.
export function LedgerRow({ period, title, org, description, highlights, active, i }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="ledger-row reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
      <span className="ledger-period mono dim">
        {period}{active && <em className="live-dot" title="Active" />}
      </span>
      <div className="ledger-body">
        <h3>{title}</h3>
        <span className="ledger-org mono">{org}</span>
        {description && <p>{description}</p>}
        {highlights && (
          <ul className="ledger-list">
            {highlights.map((h) => <li key={h}>{h}</li>)}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Ledger({ children }) {
  return <div className="ledger">{children}</div>;
}
