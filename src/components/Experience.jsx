import { experience } from '../data/content';
import Section from './Section';
import Timeline, { TimelineItem } from './Timeline';

export default function Experience() {
  return (
    <Section id="experience" tag="MY JOURNEY" title="Work" accent="Experience" alt>
      <Timeline>
        {experience.map((e, i) => (
          <TimelineItem
            key={e.role}
            index={i}
            icon={e.icon}
            title={e.role}
            org={e.org}
            period={e.period}
            active={e.active}
            description={e.description}
            highlights={e.highlights}
            tags={e.tags}
          />
        ))}
      </Timeline>
    </Section>
  );
}
