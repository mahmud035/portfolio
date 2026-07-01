import { ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { profile } from '../../data/profile';
import { cn } from '../../utils/cn';
import { Button } from '../ui/Button';
import { ThemeToggle } from './ThemeToggle';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
];

/** Sticky top navigation: brand, anchor links, theme toggle, CV link. */
export function Navbar() {
  const [activeId, setActiveId] = useState('');
  // While a click-driven smooth scroll is in flight, the observer must not
  // change the active link (it would flash through intermediate sections).
  const isProgrammaticScroll = useRef(false);
  // Releases the in-flight scroll lock; also used to clear it early/on unmount.
  const releaseScrollLock = useRef<(() => void) | null>(null);

  // Scrollspy: highlight the nav link for whichever section is in view.
  useEffect(() => {
    const ids = NAV_LINKS.map((link) => link.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const visibility = new Map<string, boolean>();
    const observer = new IntersectionObserver(
      (entries) => {
        // Keep the visibility map fresh even during a programmatic scroll...
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.isIntersecting);
        }
        // ...but don't drive the active link while the click-scroll runs.
        if (isProgrammaticScroll.current) return;
        // The topmost section currently in the active band wins.
        const current = ids.find((id) => visibility.get(id));
        setActiveId(current ?? '');
      },
      // Offset for the sticky header; only the upper band counts as "active".
      { rootMargin: '-64px 0px -55% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Clear any pending scroll lock on unmount (no dangling listeners/timers).
  useEffect(() => () => releaseScrollLock.current?.(), []);

  const handleNavClick = (targetId: string) => {
    // Cancel any in-flight lock first so rapid clicks don't stack timers.
    releaseScrollLock.current?.();

    // Set the clicked target active immediately, before any observer callback.
    setActiveId(targetId);
    isProgrammaticScroll.current = true;

    let timer = 0;
    const release = () => {
      isProgrammaticScroll.current = false;
      window.removeEventListener('scrollend', release);
      window.clearTimeout(timer);
      releaseScrollLock.current = null;
    };

    // Release when the smooth scroll settles; fall back on a timer in case
    // `scrollend` never fires or isn't supported. Whichever fires first wins.
    window.addEventListener('scrollend', release, { once: true });
    timer = window.setTimeout(release, 1200);
    releaseScrollLock.current = release;
  };

  return (
    <header className="border-border bg-bg/80 sticky top-0 z-40 border-b backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-display text-fg text-lg font-bold tracking-tight"
        >
          {profile.brandName}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeId === sectionId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleNavClick(sectionId)}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'text-sm font-medium underline-offset-8 transition-colors',
                    isActive
                      ? 'text-accent underline decoration-2'
                      : 'text-muted hover:text-fg',
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            href={profile.cvUrl}
            external
            variant="secondary"
            size="sm"
            aria-label="Open Resume in a new tab"
          >
            <ExternalLink className="size-4" aria-hidden="true" />
            <span>Resume</span>
          </Button>
        </div>
      </nav>
    </header>
  );
}
