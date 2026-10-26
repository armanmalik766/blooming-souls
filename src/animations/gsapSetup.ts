import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

// Register GSAP Plugins safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

/**
 * Checks if the user prefers reduced motion
 */
export const isReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Checks if current viewport is mobile (< 768px)
 */
export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

/**
 * Common calm, sophisticated GSAP animation curves for psychiatric healthcare
 */
export const GSAP_EASING = {
  calm: 'power3.out',
  gentle: 'power2.out',
  smooth: 'expo.out',
  floating: 'sine.inOut',
};

export { gsap, ScrollTrigger, SplitText };
