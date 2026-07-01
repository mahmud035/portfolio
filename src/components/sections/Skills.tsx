import { skills } from '../../data/skills';
import { Badge } from '../ui/Badge';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

/** Two-tier skills: primary grouped chips, then a subordinate "also worked with". */
export function Skills() {
  return (
    <section id="skills" className="border-border border-t">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="What I use"
            description="The stack I reach for day to day, grouped by where it lives."
          />
        </Reveal>

        <div className="mt-10 space-y-6">
          {skills.primary.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.05}>
              <div className="border-border grid gap-3 border-t pt-6 first:border-t-0 first:pt-0 sm:grid-cols-[180px_1fr] sm:gap-6">
                <h3 className="text-fg text-sm font-semibold tracking-wide uppercase">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="border-border mt-12 border-t pt-8">
          <h3 className="text-subtle text-sm font-semibold tracking-wide uppercase">
            Also worked with
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.secondary.map((item) => (
              <Badge key={item} variant="muted">
                {item}
              </Badge>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
