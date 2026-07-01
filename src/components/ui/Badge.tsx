import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

type BadgeVariant = 'solid' | 'muted';

interface BadgeProps {
  children: ReactNode;
  /** `muted` renders a subordinate chip (used for Tier 2 skills). */
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  solid: 'border-border bg-surface-2 text-fg',
  muted: 'border-border/60 bg-transparent text-subtle',
};

/** Small pill for skill and tech chips. Presentational only. */
export function Badge({ children, variant = 'solid', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
