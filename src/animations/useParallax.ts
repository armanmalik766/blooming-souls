import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, isReducedMotion, isMobile } from './gsapSetup';

interface ParallaxOptions {
  speed?: number; // Movement speed in px (10-25px)
  direction?: 'up' | 'down';
}

/**
 * Subtle ScrollTrigger image parallax hook.
 * Maximum movement is limited to ~15-25px to keep motion calm and medical-grade.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(options: ParallaxOptions = {}) {
  const ref = useRef<T | null>(null);
  const { speed = 20, direction = 'up' } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el || isReducedMotion() || isMobile()) return;

    const yVal = direction === 'up' ? -speed : speed;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: -yVal * 0.5 },
        {
          y: yVal * 0.5,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        }
      );
    }, el);

    return () => {
      ctx.revert();
    };
  }, [speed, direction]);

  return ref;
}
