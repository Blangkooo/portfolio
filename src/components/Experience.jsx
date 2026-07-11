import { experience } from '../data/content';
import Section from './Section';
import Ledger, { LedgerRow } from './Timeline';

export default function Experience() {
  return (
    <Section id="experience" num="05" title="Experience">
      <Ledger>
        {experience.map((e, i) => (
          <LedgerRow
            key={e.role}
            i={i}
            period={e.period}
            active={e.active}
            title={e.role}
            org={e.org}
            description={e.description}
            highlights={e.highlights}
          />
        ))}
      </Ledger>
    </Section>
  );
}
