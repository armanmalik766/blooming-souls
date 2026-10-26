import React from 'react';
import { Clock, ArrowRight, CheckCircle2, Sparkles, Award } from 'lucide-react';
import { Course } from '../data/courses';

interface CourseCardProps {
  course: Course;
  onEnroll?: (course: Course) => void;
  onSelect?: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onEnroll, onSelect }) => {
  const bannerGradient = course.bannerTheme?.gradient || 'from-[#1E5C6B] via-[#2A7587] to-[#3993A8]';
  const accentColor = course.bannerTheme?.accentColor || '#4DE6D1';

  const handleClick = () => {
    if (onSelect) {
      onSelect(course);
    } else if (onEnroll) {
      onEnroll(course);
    }
  };

  return (
    <div
      id={`course-card-${course.id}`}
      onClick={handleClick}
      className="group cursor-pointer bg-white rounded-[26px] p-3 sm:p-3.5 border border-[#E8DDED] shadow-sm hover:shadow-xl hover:shadow-[#700486]/10 hover:border-[#D9C4E3] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
    >
      <div>
        {/* ========================================================================= */}
        {/* VISUAL BANNER FLYER (OFFICIAL COURSE BANNER)                              */}
        {/* ========================================================================= */}
        <div className="relative aspect-[44/23] w-full rounded-[20px] overflow-hidden bg-[#FAF7FC] border border-[#E8DDED] shadow-xs group-hover:shadow-md transition-all duration-300">
          <img
            src={course.bannerImage || course.image}
            alt={course.title}
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
          {/* Subtle top-right category badge pill */}
          <div className="absolute top-2.5 right-2.5 z-10 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10.5px] font-bold text-[#700486] border border-white/70 shadow-xs flex items-center gap-1 uppercase tracking-wider">
            <Sparkles className="w-2.5 h-2.5 text-[#700486]" />
            <span>{course.category}</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TITLE & DETAILS BELOW BANNER                                              */}
        {/* ========================================================================= */}
        <div className="pt-3.5 pb-1 px-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading font-bold text-lg sm:text-[20px] text-[#700486] tracking-tight group-hover:text-[#58036B] transition-colors leading-snug">
              {course.title}
            </h3>
            <span className="shrink-0 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#F5EDF8] text-[#700486] border border-[#EADBEE]">
              <Clock className="w-3 h-3 text-[#700486]" />
              {course.duration}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#666666] line-clamp-2 mt-1.5 leading-relaxed font-normal">
            {course.shortDescription}
          </p>

          <div className="mt-3 flex items-center justify-between pt-2.5 border-t border-[#F5EDF8] text-xs">
            <div className="flex items-center gap-1.5 text-[#700486] font-semibold">
              <Award className="w-3.5 h-3.5 text-[#700486]" />
              <span>Certified Program</span>
            </div>

            <span className="font-bold text-[#700486] group-hover:text-[#58036B] flex items-center gap-1">
              <span>View Syllabus &amp; Enroll</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
