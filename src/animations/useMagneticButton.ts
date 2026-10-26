import { useEffect, useRef } from 'react';
import { gsap, isReducedMotion, isMobile } from './gsapSetup';

interface MagneticOptions {
  strength?: number; // Maximum movement in px (default 6px for subtle, calm effect)
  speed?: number;
}

/**
 * Attaches a calm, subtle magnetic cursor pull effect to buttons using gsap.quickTo
 * Automatically disabled on mobile and when reduced motion is preferred.
 */
export function useMagneticButton<T extends HTMLElement = HTMLButtonElement>(options: MagneticOptions = {}) {
  const elementRef = useRef<T | null>(null);
  const { strength = 6, speed = 0.35 } = options;

  useEffect(() => {
    const el = elementRef.current;
    if (!el || isReducedMotion() || isMobile()) return;

    const xTo = gsap.quickTo(el, 'x', { duration: speed, ease: 'power2.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: speed, ease: 'power2.out' });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);

      // Clamp movement subtly
      xTo(deltaX * strength);
      yTo(deltaY * strength);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      gsap.killTweensOf(el);
    };
  }, [strength, speed]);

  return elementRef;
}
