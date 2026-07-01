/**
 * Join conditional class names, dropping falsy values. A tiny local helper so
 * we avoid a dependency; no Tailwind conflict-resolution — keep class lists
 * non-overlapping at call sites.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}
