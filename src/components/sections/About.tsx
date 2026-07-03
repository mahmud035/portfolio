import { GraduationCap } from 'lucide-react';
import { profile } from '../../data/profile';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

/** Honest freelance framing plus a subtle "currently building" callout. */
export function About() {
  return (
    <section id="about" className="border-border border-t">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionHeading eyebrow="About" title="Full-stack, end to end." />
        </Reveal>

        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-12">
          <Reveal delay={0.05} className="space-y-6 md:col-span-2">
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="text-muted text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="border-border border-l-accent bg-surface rounded-xl border border-l-4 p-5">
              <p className="text-accent text-sm font-semibold tracking-wide uppercase">
                Currently building
              </p>
              <p className="text-muted mt-2">{profile.currentlyBuilding}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-border bg-surface rounded-xl border p-6">
              <div className="bg-accent-soft text-accent inline-flex size-10 items-center justify-center rounded-lg">
                <GraduationCap className="size-5" aria-hidden="true" />
              </div>
              <h3 className="text-subtle mt-4 text-sm font-semibold tracking-wide uppercase">
                Education
              </h3>
              {profile.education.map((item) => (
                <div key={item.degree} className="mt-2">
                  <p className="text-fg font-medium">{item.degree}</p>
                  <p className="text-muted mt-1 text-sm">{item.institution}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
