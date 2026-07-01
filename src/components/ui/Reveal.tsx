import { motion, useReducedMotion, type HTMLMotionProps } from 'motion/react';

interface RevealProps extends HTMLMotionProps<'div'> {
  /** Stagger delay in seconds. */
  delay?: number;
}

/**
 * Fade/slide a block into view once it scrolls near the viewport. Motion is
 * disabled entirely when the user prefers reduced motion — the block renders
 * in its final state with no transform.
 */
export function Reveal({ delay = 0, children, ...props }: RevealProps) {
  const reduceMotion = useReducedMotion();

  // When reduced motion is requested, omit the animation props entirely so the
  // block renders statically in its final state.
  const motionProps: HTMLMotionProps<'div'> = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-80px' },
        transition: { duration: 0.5, delay, ease: 'easeOut' },
      };

  return (
    <motion.div {...motionProps} {...props}>
      {children}
    </motion.div>
  );
}
