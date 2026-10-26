import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, isReducedMotion, isMobile, GSAP_EASING } from './gsapSetup';

interface ScrollRevealOptions {
  selector?: string; // Child selector to animate (e.g., '.reveal-item')
  y?: number; // Distance in pixels (default 50)
  duration?: number; // Duration in seconds (default 0.9)
  stagger?: number; // Stagger between children (default 0.1)
  start?: string; // ScrollTrigger start point (default 'top 85%')
  scale?: number; // Optional subtle scale entrance (e.g. 0.98)
  delay?: number;
}

/**
 * Reusable GSAP ScrollTrigger hook for graceful section and card reveals.
 * Automatically cleans up with gsap.context() and kills ScrollTrigger on unmount.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options: ScrollRevealOptions = {}) {
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduced = isReducedMotion();
    const mobile = isMobile();

    const distance = reduced ? 0 : mobile ? Math.min(25, options.y ?? 30) : (options.y ?? 45);
    const duration = reduced ? 0.3 : (options.duration ?? 0.85);
    const stagger = reduced ? 0 : (options.stagger ?? 0.1);
    const start = options.start ?? 'top 85%';
    const initialScale = reduced ? 1 : (options.scale ?? 1);

    const ctx = gsap.context(() => {
      const targets = options.selector ? container.querySelectorAll(options.selector) : container;

      if (!targets || (targets instanceof NodeList && targets.length === 0)) return;

      gsap.fromTo(
        targets,
        {
          opacity: 0,
          y: distance,
          scale: initialScale,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration,
          stagger,
          delay: options.delay ?? 0,
          ease: GSAP_EASING.calm,
          scrollTrigger: {
            trigger: container,
            start,
            once: true,
          },
        }
      );
    }, container);

    return () => {
      ctx.revert();
    };
  }, [options.selector, options.y, options.duration, options.stagger, options.start, options.scale, options.delay]);

  return containerRef;
}
