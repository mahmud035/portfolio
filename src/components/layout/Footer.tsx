import { Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../../data/profile';
import { IconLink } from '../ui/IconLink';
import { GithubIcon, LinkedinIcon } from '../ui/icons';

/** "Reach me" contact block — social links, email pill, phone. No form. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="border-border bg-surface border-t"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <h2
              id="contact-heading"
              className="font-display text-fg text-2xl font-bold tracking-tight"
            >
              Reach me
            </h2>
            <p className="text-muted mt-3">
              Open to full-stack roles and freelance work. The fastest way to
              reach me is email or LinkedIn.
            </p>
            <p className="text-subtle mt-4 inline-flex items-center gap-2 text-sm">
              <MapPin className="size-4" aria-hidden="true" />
              {profile.location}
            </p>
          </div>

          <div className="flex flex-col items-start gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="bg-accent text-accent-fg inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90"
            >
              <Mail className="size-4" aria-hidden="true" />
              {profile.email}
            </a>

            <a
              href={profile.phoneHref}
              className="text-muted hover:text-fg inline-flex items-center gap-2 text-sm font-medium transition-colors"
            >
              <Phone className="size-4" aria-hidden="true" />
              {profile.phoneDisplay}
            </a>

            <div className="mt-1 flex items-center gap-2">
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
          </div>
        </div>

        <div className="border-border text-subtle mt-12 border-t pt-8 text-center text-sm">
          © {year} {profile.displayName}. Built with React, TypeScript &amp;
          Tailwind.
        </div>
      </div>
    </footer>
  );
}
