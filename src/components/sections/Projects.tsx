import { ExternalLink } from 'lucide-react';
import { Fragment } from 'react';
import type { Project, ProjectLinkType } from '../../data/projects';
import { projects } from '../../data/projects';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { GithubIcon, type IconType } from '../ui/icons';

const LINK_META: Record<
  ProjectLinkType,
  { label: string; icon: IconType; variant: 'primary' | 'secondary' }
> = {
  live: { label: 'Live', icon: ExternalLink, variant: 'primary' },
  code: { label: 'Code', icon: GithubIcon, variant: 'secondary' },
  'Case Study': { label: 'Case Study', icon: GithubIcon, variant: 'secondary' },
  Docs: { label: 'Docs', icon: GithubIcon, variant: 'secondary' },
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="font-display text-fg text-xl font-bold tracking-tight">
        {project.name}
      </h3>
      <p className="text-muted mt-1 text-sm">{project.subtitle}</p>

      <p className="text-subtle mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium">
        {project.tech.map((tech, index) => (
          <Fragment key={tech}>
            {index > 0 ? (
              <span aria-hidden="true" className="text-border">
                |
              </span>
            ) : null}
            <span>{tech}</span>
          </Fragment>
        ))}
      </p>

      <ul className="mt-5 space-y-3">
        {project.bullets.map((bullet) => (
          <li
            key={bullet}
            className="text-muted flex gap-3 text-sm leading-relaxed"
          >
            <span
              aria-hidden="true"
              className="bg-accent mt-2 size-1.5 shrink-0 rounded-full"
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {project.links.length > 0 ? (
        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {project.links.map((link) => {
            const meta = LINK_META[link.type];
            const Icon = meta.icon;
            return (
              <Button
                key={link.type}
                href={link.href}
                external
                variant={meta.variant}
                size="sm"
                aria-label={`${meta.label}: ${project.name}`}
              >
                <Icon className="size-4" aria-hidden="true" />
                {meta.label}
              </Button>
            );
          })}
        </div>
      ) : null}
    </Card>
  );
}

/** Three flagship project cards, rendered from typed data. */
export function Projects() {
  return (
    <section id="projects" className="border-border border-t">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            description="Production apps I designed, built, and shipped end to end."
          />
        </Reveal>

        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.08} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
