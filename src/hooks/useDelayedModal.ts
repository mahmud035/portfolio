import { useCallback, useEffect, useState } from 'react';

interface UseDelayedModalOptions {
  /** Auto-open after this many ms on the page. */
  delayMs?: number;
  /** Auto-open once scrolled past this fraction of the page (0–1). */
  scrollThreshold?: number;
  /** sessionStorage key guarding one appearance per browser session. */
  sessionKey?: string;
}

/**
 * Opens a modal once per browser session — after a delay OR at a scroll-depth
 * threshold, whichever comes first. Guarded by sessionStorage so it never
 * re-appears (or nags) again in the same session, including after dismissal.
 */
export function useDelayedModal({
  delayMs = 11000,
  scrollThreshold = 0.5,
  sessionKey = 'talk-modal-seen',
}: UseDelayedModalOptions = {}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem(sessionKey)) return;

    let timer = 0;

    const open = () => {
      // Mark seen on first appearance so a refresh mid-view won't re-trigger.
      sessionStorage.setItem(sessionKey, '1');
      setIsOpen(true);
      cleanup();
    };

    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      if (window.scrollY / scrollable >= scrollThreshold) open();
    };

    const cleanup = () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };

    timer = window.setTimeout(open, delayMs);
    window.addEventListener('scroll', onScroll, { passive: true });

    return cleanup;
  }, [delayMs, scrollThreshold, sessionKey]);

  const close = useCallback(() => setIsOpen(false), []);

  return { isOpen, close };
}
