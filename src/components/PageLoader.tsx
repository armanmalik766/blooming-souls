import React, { useEffect, useRef, useState } from 'react';
import { gsap, isReducedMotion, GSAP_EASING } from '../animations/gsapSetup';

interface PageLoaderProps {
  onComplete: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // If reduced motion is preferred or previously loaded in session, finish fast
    if (isReducedMotion()) {
      setIsVisible(false);
      onComplete();
      return;
    }

    const container = containerRef.current;
    const logo = logoRef.current;
    const line = lineRef.current;

    if (!container || !logo) {
      setIsVisible(false);
      onComplete();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        onComplete();
      },
    });

    // Initial state
    gsap.set(container, { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 });
    gsap.set(logo, { scale: 0.88, opacity: 0, y: 12 });
    if (line) gsap.set(line, { scaleX: 0, transformOrigin: 'center' });

    // 0.8s - 1.0s graceful entrance & swift curtain reveal
    tl.to(logo, {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 0.45,
      ease: GSAP_EASING.calm,
    })
      .to(line, {
        scaleX: 1,
        duration: 0.35,
        ease: 'power2.inOut',
      }, '-=0.15')
      .to(container, {
        clipPath: 'inset(0% 0% 100% 0%)',
        opacity: 0.98,
        duration: 0.45,
        ease: 'power3.inOut',
        delay: 0.15,
      });

    // Safety fallback: auto-complete after 1.4s max
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 1400);

    return () => {
      clearTimeout(timer);
      tl.kill();
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#FAF7FC] flex flex-col items-center justify-center pointer-events-auto select-none"
      style={{ willChange: 'clip-path, opacity' }}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Animated Brand Emblem - Logo Only */}
        <div ref={logoRef} className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#700486]/30 animate-[spin_24s_linear_infinite]" />
          <img
            src="/blooming-logo.webp"
            alt="Blooming Souls Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-md"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Minimal Progress Line */}
        <div className="w-28 sm:w-36 h-[2px] bg-[#E8DDED] rounded-full overflow-hidden mt-2">
          <div ref={lineRef} className="w-full h-full bg-gradient-to-r from-[#700486] to-[#8915A2]" />
        </div>
      </div>
    </div>
  );
};
