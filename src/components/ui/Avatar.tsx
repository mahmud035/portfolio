import { useState } from 'react';
import { cn } from '../../utils/cn';

interface AvatarProps {
  src: string;
  /** Responsive candidates, e.g. `/a-320.webp 320w, /a-640.webp 640w`. */
  srcSet?: string;
  /** Rendered-width hints matching the layout breakpoints. */
  sizes?: string;
  /** Intrinsic dimensions — reserve space and avoid layout shift. */
  width?: number;
  height?: number;
  /** Set to `high` for the above-the-fold LCP image. */
  fetchPriority?: 'high' | 'low' | 'auto';
  alt: string;
  /** Shown when the image is missing or fails to load. */
  initials: string;
  className?: string;
}

/**
 * Headshot image with a tasteful initials fallback, so a missing photo file
 * never breaks the layout. The fallback keeps the same footprint as the image.
 */
export function Avatar({
  src,
  srcSet,
  sizes,
  width,
  height,
  fetchPriority,
  alt,
  initials,
  className,
}: AvatarProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          'from-surface-2 to-accent-soft font-display text-accent flex items-center justify-center bg-linear-to-br text-4xl font-bold select-none sm:text-5xl',
          className,
        )}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      width={width}
      height={height}
      fetchPriority={fetchPriority}
      alt={alt}
      onError={() => setFailed(true)}
      loading="eager"
      decoding="async"
      className={cn('object-cover', className)}
    />
  );
}
