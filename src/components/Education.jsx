import { education } from '../data/content';
import Section from './Section';
import Ledger, { LedgerRow } from './Timeline';

export default function Education() {
  return (
    <Section id="education" num="04" title="Education">
      <Ledger>
        {education.map((e, i) => (
          <LedgerRow
            key={e.program}
            i={i}
            period={e.period}
            title={e.program}
            org={e.school}
            description={e.description}
          />
        ))}
      </Ledger>
    </Section>
  );
}
