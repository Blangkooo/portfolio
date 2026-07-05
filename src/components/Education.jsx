import { education } from '../data/content';
import Section from './Section';
import Timeline, { TimelineItem } from './Timeline';

export default function Education() {
  return (
    <Section id="education" tag="MY BACKGROUND" title="Education" accent="Timeline">
      <Timeline>
        {education.map((e, i) => (
          <TimelineItem
            key={e.program}
            index={i}
            icon={e.icon}
            title={e.program}
            org={e.school}
            period={e.period}
            description={e.description}
            tags={e.tags}
          />
        ))}
      </Timeline>
    </Section>
  );
}
