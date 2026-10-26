import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  highlightedText?: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
  lightMode?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeIcon,
  title,
  highlightedText,
  description,
  align = 'center',
  className = '',
  lightMode = false
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-2.5 transition-all ${
          lightMode 
            ? 'bg-white/20 text-white border border-white/30 backdrop-blur-sm'
            : 'bg-[#F3EAF6] text-[#700486] border border-[#E8DDED]'
        }`}>
          {badgeIcon && <span className="w-3.5 h-3.5">{badgeIcon}</span>}
          <span>{badge}</span>
        </div>
      )}

      <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-2.5 ${
        lightMode ? 'text-white' : 'text-[#1D1D1F]'
      }`}>
        {title}{' '}
        {highlightedText && (
          <span className={lightMode ? 'text-[#F3EAF6] underline decoration-white/30' : 'text-[#700486]'}>
            {highlightedText}
          </span>
        )}
      </h2>

      {description && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          lightMode ? 'text-white/85' : 'text-[#666666]'
        } ${isCenter ? 'mx-auto max-w-2xl' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
};
