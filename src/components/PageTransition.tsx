import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap, isReducedMotion, isMobile } from '../animations/gsapSetup';

interface PageTransitionProps {
  children: React.ReactNode;
}

/**
 * High-end, lightweight GSAP Page Transition for React Router.
 * Sweeps a subtle purple overlay across the viewport for ~450ms when navigating.
 * Completely respects prefers-reduced-motion.
 */
export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const prevPathRef = useRef<string>(location.pathname);

  useEffect(() => {
    // Only animate on actual path changes (not initial render)
    if (prevPathRef.current === location.pathname) return;
    prevPathRef.current = location.pathname;

    if (isReducedMotion() || isMobile()) {
      // Light immediate fade on mobile or reduced motion
      if (contentRef.current) {
        gsap.fromTo(contentRef.current, { opacity: 0.7 }, { opacity: 1, duration: 0.25, ease: 'power2.out' });
      }
      return;
    }

    const overlay = overlayRef.current;
    const content = contentRef.current;
    if (!overlay || !content) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Swift, elegant curtain wipe: In from top, Out to bottom (~450ms total)
      tl.set(overlay, { transformOrigin: 'top', scaleY: 0, opacity: 0.96 })
        .to(overlay, {
          scaleY: 1,
          duration: 0.22,
          ease: 'power3.in',
        })
        .set(overlay, { transformOrigin: 'bottom' })
        .set(content, { opacity: 0, y: 12 })
        .to(overlay, {
          scaleY: 0,
          duration: 0.24,
          ease: 'power3.out',
        })
        .to(
          content,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
          },
          '-=0.18'
        );
    });

    return () => {
      ctx.revert();
    };
  }, [location.pathname]);

  return (
    <div className="relative w-full">
      {/* Wipe Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[9990] bg-gradient-to-b from-[#700486] via-[#58036B] to-[#450252] pointer-events-none"
        style={{ transform: 'scaleY(0)', willChange: 'transform' }}
        aria-hidden="true"
      />

      {/* Content wrapper */}
      <div ref={contentRef} className="w-full">
        {children}
      </div>
    </div>
  );
};
