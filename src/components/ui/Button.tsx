import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md';

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  /** When set, renders an anchor instead of a button. */
  href?: string;
  /** Opens the link in a new tab with a safe `rel`. */
  external?: boolean;
  /** Adds the `download` attribute (anchor only). */
  download?: boolean | string;
  /** Native button type (button only). */
  type?: 'button' | 'submit';
  onClick?: () => void;
  'aria-label'?: string;
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors disabled:pointer-events-none disabled:opacity-60';

const variantStyles: Record<Variant, string> = {
  primary: 'bg-accent text-accent-fg hover:opacity-90',
  secondary: 'border border-border bg-surface text-fg hover:bg-surface-2',
  ghost: 'text-muted hover:bg-surface-2 hover:text-fg',
};

const sizeStyles: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-sm',
  md: 'h-11 px-5 text-sm',
};

/**
 * Shared CTA. Renders an anchor when `href` is provided, otherwise a native
 * button, so link and action buttons look identical without duplicated styles.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  external,
  download,
  type = 'button',
  onClick,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = cn(base, variantStyles[variant], sizeStyles[size], className);

  if (href !== undefined) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
        {...(download !== undefined ? { download } : {})}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
