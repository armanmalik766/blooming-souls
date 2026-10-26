import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'colored' | 'white' | 'purple';
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'purple',
  showText = false,
  size = 'md',
}) => {
  const isWhite = variant === 'white';
  const textColor = isWhite ? '#FFFFFF' : '#700486';

  // Proportional sizing for the Blooming Souls logo so it has strong, clear presence
  const sizeClasses = {
    sm: 'h-9 sm:h-10',
    md: 'h-11 sm:h-12 md:h-14',
    lg: 'h-16 sm:h-18 md:h-20',
    xl: 'h-20 sm:h-24 md:h-28',
  }[size] || 'h-11 sm:h-12 md:h-14';

  return (
    <Link 
      to="/" 
      id="main-brand-logo"
      className={`inline-flex items-center group transition-all duration-300 hover:opacity-90 ${className}`}
      aria-label="Blooming Souls"
    >
      {/* Official Blooming Souls Logo - Logo Only */}
      <div className="relative flex items-center justify-center">
        <img
          src="/blooming-logo.webp"
          alt="Blooming Souls"
          className={`${sizeClasses} w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
            isWhite 
              ? 'brightness-0 invert drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)]' 
              : 'drop-shadow-xs'
          }`}
          loading="eager"
          decoding="async"
        />
      </div>

      {showText && (
        <div className="flex flex-col text-left ml-2.5">
          <span 
            className="font-heading font-extrabold text-lg sm:text-xl tracking-wider leading-none"
            style={{ color: textColor }}
          >
            BLOOMING SOULS
          </span>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="h-[1px] w-2.5 bg-current opacity-40" />
            <span 
              className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase"
              style={{ color: isWhite ? 'rgba(255, 255, 255, 0.85)' : '#8915A2' }}
            >
              PSYCHIATRIC CARE
            </span>
            <span className="h-[1px] w-2.5 bg-current opacity-40" />
          </div>
        </div>
      )}
    </Link>
  );
};
