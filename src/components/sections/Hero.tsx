import { ArrowRight } from 'lucide-react';
import { Fragment } from 'react';
import { profile } from '../../data/profile';
import { Avatar } from '../ui/Avatar';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { IconLink } from '../ui/IconLink';
import { GithubIcon, LinkedinIcon } from '../ui/icons';
import { Reveal } from '../ui/Reveal';

/** Above-the-fold intro: headshot, name, headline, tagline, CTAs, socials. */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Single restrained accent glow behind the hero. */}
      <div
        aria-hidden="true"
        className="bg-accent/10 pointer-events-none absolute -top-32 right-[-10%] h-96 w-96 rounded-full blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-12 md:py-24">
        <Reveal>
          <h1 className="font-display text-fg text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {profile.displayName}
          </h1>

          <div className="text-muted mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium sm:text-base">
            {profile.headlineParts.map((part, index) => (
              <Fragment key={part}>
                {index > 0 ? (
                  <span aria-hidden="true" className="text-subtle/60">
                    |
                  </span>
                ) : null}
                <span>{part}</span>
              </Fragment>
            ))}
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-linkedin ml-1 inline-flex items-center transition hover:brightness-110"
            >
              <LinkedinIcon className="size-4" aria-hidden="true" />
            </a>
          </div>

          <p className="text-muted mt-6 max-w-lg text-lg sm:text-xl">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#projects" variant="primary">
              View Work
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button href={profile.linkedinUrl} external variant="secondary">
              <LinkedinIcon className="size-4" aria-hidden="true" />
              Message me on LinkedIn
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-2">
            <IconLink
              href={profile.githubUrl}
              label="GitHub profile"
              icon={GithubIcon}
            />
            <IconLink
              href={profile.linkedinUrl}
              label="LinkedIn profile"
              icon={LinkedinIcon}
            />
          </div>

          {/* Proof chips: concrete evidence a recruiter sees above the fold. */}
          <ul role="list" className="mt-8 flex flex-wrap gap-2">
            {profile.proofPoints.map((point) => (
              <li key={point}>
                <Badge>
                  <span
                    aria-hidden="true"
                    className="bg-accent mr-2 size-1.5 rounded-full"
                  />
                  {point}
                </Badge>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          delay={0.1}
          className="order-first flex justify-center md:order-last md:justify-end"
        >
          <Avatar
            src={profile.headshotSrc}
            alt={profile.headshotAlt}
            initials={profile.initials}
            className="border-border aspect-4/5 w-56 rounded-3xl border object-top shadow-sm sm:w-72 md:w-80"
          />
        </Reveal>
      </div>
    </section>
  );
}
