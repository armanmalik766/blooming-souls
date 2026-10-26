import React from 'react';
import { StepItem } from '../data/process';

interface ProcessSectionProps {
  steps: StepItem[];
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ steps }) => {
  return (
    <div className="relative">
      {/* Desktop Horizontal Connecting Line / Curve */}
      <div className="hidden lg:block absolute top-[72px] left-[10%] right-[10%] h-[3px] z-0">
        <svg className="w-full h-12 overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 40">
          <path
            d="M 0 20 Q 250 35, 500 20 T 1000 20"
            fill="none"
            stroke="#E8DDED"
            strokeWidth="3"
            strokeDasharray="6 6"
          />
        </svg>
      </div>

      {/* Grid of Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {steps.map((item, index) => (
          <div
            key={item.step}
            className="group flex flex-col items-center text-center relative"
          >
            {/* Step Node with Circular Image & Badge */}
            <div className="relative mb-6">
              {/* Outer soft ring */}
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-2 bg-white border-2 border-[#E8DDED] group-hover:border-[#700486] transition-all duration-300 shadow-md flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#700486]/10 group-hover:bg-transparent transition-colors" />
                </div>
              </div>

              {/* Circular Step Number Badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#700486] text-white text-xs sm:text-sm font-bold w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shadow-md shadow-[#700486]/30 border-2 border-white group-hover:scale-110 transition-transform">
                {item.step}
              </div>
            </div>

            {/* Title & Description */}
            <h3 className="font-heading font-bold text-lg sm:text-xl text-[#1D1D1F] group-hover:text-[#700486] transition-colors mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-[#666666] leading-relaxed max-w-xs">
              {item.description}
            </p>

            {item.duration && (
              <span className="mt-3 text-[11px] font-medium text-[#700486] bg-[#F3EAF6] px-2.5 py-0.5 rounded-full">
                {item.duration}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
