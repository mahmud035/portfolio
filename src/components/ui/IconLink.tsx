import { cn } from '../../utils/cn';
import type { IconType } from './icons';

interface IconLinkProps {
  href: string;
  /** Accessible label; the icon itself is hidden from assistive tech. */
  label: string;
  icon: IconType;
  /** Opens in a new tab with a safe `rel`. Defaults to true. */
  external?: boolean;
  className?: string;
}

/** Square icon-only anchor, used for social links. */
export function IconLink({
  href,
  label,
  icon: Icon,
  external = true,
  className,
}: IconLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      className={cn(
        'border-border bg-surface hover:bg-surface-2 inline-flex size-10 items-center justify-center rounded-lg border text-slate-400 transition-colors hover:text-slate-50 focus-visible:text-slate-50',
        className,
      )}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <Icon className="size-5" aria-hidden="true" />
    </a>
  );
}
