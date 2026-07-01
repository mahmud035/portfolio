import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Bordered surface container. Presentational; hover/motion effects are applied
 * by the caller (e.g. project cards add a subtle lift).
 */
export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'border-border bg-surface rounded-2xl border p-6 md:p-8',
        className,
      )}
    >
      {children}
    </div>
  );
}
