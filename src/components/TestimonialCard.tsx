import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { Testimonial } from '../data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div
      id={`testimonial-card-${testimonial.id}`}
      className="bg-white rounded-[26px] p-7 sm:p-8 border border-[#E8DDED] shadow-sm hover:shadow-lg hover:shadow-[#700486]/5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
    >
      {/* Subtle quote watermark background */}
      <Quote className="absolute right-6 top-6 w-12 h-12 text-[#F3EAF6] pointer-events-none -scale-x-100 opacity-60" />

      <div>
        {/* Star Rating & Verified Pill */}
        <div className="flex items-center justify-between gap-2 mb-5">
          <div className="flex items-center space-x-1" aria-label={`${testimonial.rating} out of 5 stars`}>
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#700486] bg-[#F3EAF6] px-2.5 py-0.5 rounded-full">
            <CheckCircle className="w-3 h-3" />
            Verified Client
          </span>
        </div>

        {/* Service Tag */}
        <div className="text-xs font-semibold text-[#700486] uppercase tracking-wider mb-3">
          {testimonial.serviceReceived}
        </div>

        {/* Quote text */}
        <p className="text-[#333333] text-sm sm:text-base leading-relaxed italic mb-6">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Author Details */}
      <div className="pt-4 border-t border-[#E8DDED]/70 flex items-center justify-between">
        <div>
          <div className="font-heading font-bold text-base text-[#1D1D1F]">
            {testimonial.name}
          </div>
          <div className="text-xs text-[#666666]">
            {testimonial.role}
          </div>
        </div>
        <span className="text-[11px] text-[#888888] font-medium">
          {testimonial.duration}
        </span>
      </div>
    </div>
  );
};
