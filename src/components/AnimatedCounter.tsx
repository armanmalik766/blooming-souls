import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, isReducedMotion } from '../animations/gsapSetup';

interface AnimatedCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

/**
 * Smooth number count-up animated with GSAP when entering the viewport
 */
export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  prefix = '',
  suffix = '',
  duration = 1.6,
  className = '',
}) => {
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    if (isReducedMotion()) {
      el.textContent = `${prefix}${end.toLocaleString()}${suffix}`;
      return;
    }

    const obj = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: end,
        duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          once: true,
        },
        onUpdate: () => {
          if (el) {
            el.textContent = `${prefix}${Math.floor(obj.val).toLocaleString()}${suffix}`;
          }
        },
      });
    }, el);

    return () => {
      ctx.revert();
    };
  }, [end, prefix, suffix, duration]);

  return (
    <span ref={spanRef} className={className}>
      {prefix}0{suffix}
    </span>
  );
};
