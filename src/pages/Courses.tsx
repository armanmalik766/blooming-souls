import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  GraduationCap, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  Award, 
  Sparkles, 
  X, 
  ArrowRight,
  UserCheck,
  ShieldCheck
} from 'lucide-react';
import { courses, Course } from '../data/courses';
import { CourseCard } from '../components/CourseCard';
import { Button } from '../components/Button';
import { StudentVideoTestimonials } from '../components/StudentVideoTestimonials';
import { useScrollReveal } from '../animations/useScrollReveal';

interface CoursesProps {
  onOpenQuickConnect: (serviceOrCourse?: string) => void;
}

export const Courses: React.FC<CoursesProps> = ({ onOpenQuickConnect }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null);
  const gridSectionRef = useScrollReveal<HTMLElement>({ y: 35, stagger: 0.08 });

  const categories = [
    'All',
    'Therapy & Healing',
    'Child & Parenting',
    'Assessments & Graphology',
    'Clinical Psychology'
  ];

  const filteredCourses = selectedCategory === 'All'
    ? courses
    : courses.filter(c => c.category === selectedCategory);

  return (
    <div className="space-y-6 sm:space-y-8 pb-12">
      
      {/* ========================================================================= */}
      {/* PAGE HEADER: BREADCRUMBS + 'Courses' TITLE (MATCHING SCREENSHOT)         */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-b from-[#FAF7FC] via-[#F3EAF6]/30 to-white pt-6 sm:pt-8 pb-6 sm:pb-8 border-b border-[#E8DDED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          
          {/* Breadcrumbs Pill: Home > Courses */}
          <div className="flex items-center justify-center mb-2.5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-xs sm:text-sm font-medium border border-[#E8DDED] text-[#700486] shadow-2xs">
              <Link to="/" className="text-[#666666] hover:text-[#700486] transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#700486]" />
              <span className="font-bold text-[#700486]">Courses</span>
            </div>
          </div>

          {/* Clean Main Title matching Screenshot */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#700486] tracking-tight mb-3 leading-tight">
            Courses
          </h1>

          <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-2xl mx-auto font-normal">
            Specialized psychology masterclasses, clinical mentorship programs, and therapeutic practitioner certifications.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4 sm:pt-5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#700486] text-white shadow-md shadow-[#700486]/20'
                    : 'bg-white text-[#555555] hover:text-[#700486] hover:bg-[#FAF7FC] border border-[#E8DDED]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9 COURSES GRID (3 COLUMNS ON DESKTOP, EXACTLY MATCHING SCREENSHOT)        */}
      {/* ========================================================================= */}
      <section ref={gridSectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onSelect={(c) => setActiveCourseModal(c)}
              onEnroll={(c) => onOpenQuickConnect(`Course Enrollment: ${c.title}`)}
            />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* STUDENT VIDEO TESTIMONIALS SECTION (MATCHING SCREENSHOT)                  */}
      {/* ========================================================================= */}
      <StudentVideoTestimonials />

      {/* ========================================================================= */}
      {/* INTERACTIVE COURSE DETAILS & ENROLLMENT MODAL                             */}
      {/* ========================================================================= */}
      {activeCourseModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveCourseModal(null)}
        >
          <div
            className="bg-white w-full max-w-2xl rounded-[28px] sm:rounded-[32px] shadow-2xl border border-[#E8DDED] max-h-[90vh] overflow-y-auto relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Pinned Modal Close Button */}
            <button
              onClick={() => setActiveCourseModal(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer shadow-md backdrop-blur-sm z-30"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Official Banner Flyer */}
            <div className="relative aspect-[44/23] w-full bg-[#FAF7FC] border-b border-[#E8DDED] overflow-hidden shrink-0">
              <img
                src={activeCourseModal.bannerImage || activeCourseModal.image}
                alt={activeCourseModal.title}
                className="w-full h-full object-contain block"
              />
            </div>

            {/* Course Meta Info Bar */}
            <div className="px-6 sm:px-7 py-3 bg-[#FAF7FC] border-b border-[#F0E6F4] flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-[#555555] shrink-0">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#700486] bg-[#F5EDF8] px-3 py-1 rounded-full text-xs border border-[#EADBEE]">
                  {activeCourseModal.category}
                </span>
                <span className="flex items-center gap-1 font-semibold text-[#1D1D1F]">
                  <Clock className="w-3.5 h-3.5 text-[#700486]" />
                  {activeCourseModal.duration}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span>{activeCourseModal.mode}</span>
                <span>•</span>
                <span>Instructor: {activeCourseModal.instructor}</span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-7 space-y-6 text-sm text-[#333333]">
              
              {/* Overview */}
              <div>
                <h4 className="font-bold text-[#1D1D1F] text-xs uppercase tracking-wider mb-2">
                  Program Overview
                </h4>
                <p className="text-sm text-[#555555] leading-relaxed">
                  {activeCourseModal.fullDescription}
                </p>
              </div>

              {/* Course Content / Topics */}
              {activeCourseModal.syllabusHighlights && activeCourseModal.syllabusHighlights.length > 0 && (
                <div>
                  <h4 className="font-bold text-[#1D1D1F] text-xs uppercase tracking-wider mb-2.5">
                    Course Content &amp; Key Topics
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeCourseModal.syllabusHighlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#555555] bg-[#FAF7FC] p-2.5 rounded-xl border border-[#F0E6F4]">
                        <CheckCircle2 className="w-4 h-4 text-[#700486] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Learning Outcomes */}
              {activeCourseModal.learningOutcomes && activeCourseModal.learningOutcomes.length > 0 && (
                <div>
                  <h4 className="font-bold text-[#1D1D1F] text-xs uppercase tracking-wider mb-2">
                    Learning Outcomes
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#555555]">
                    {activeCourseModal.learningOutcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#700486] font-bold">✔</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Certificate & Guarantee */}
              <div className="flex items-center gap-3 p-3.5 bg-[#FAF6FC] rounded-2xl border border-[#EFE8F3]">
                <Award className="w-5 h-5 text-[#700486] shrink-0" />
                <div className="text-xs text-[#555555]">
                  <span className="font-bold text-[#1D1D1F]">Verified Certificate Included: </span>
                  Upon completion, receive an official certificate from Blooming Souls Clinic &amp; Educational Division.
                </div>
              </div>

            </div>

            {/* Modal Footer (Sticky at the bottom of the card) */}
            <div className="sticky bottom-0 p-4 sm:p-5 bg-white/95 backdrop-blur-md border-t border-[#E8DDED] flex items-center justify-between gap-3 mt-auto shadow-sm z-20">
              <div>
                <div className="text-[11px] text-[#666666] font-medium uppercase tracking-wider">
                  Program Fee
                </div>
                <div className="font-heading font-extrabold text-xl text-[#700486]">
                  {activeCourseModal.price}
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={() => setActiveCourseModal(null)}
                  className="px-4 py-2 rounded-full border border-[#E8DDED] text-xs font-semibold text-[#555555] hover:bg-[#FAF7FC] transition-colors cursor-pointer"
                >
                  Close
                </button>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    const title = activeCourseModal.title;
                    setActiveCourseModal(null);
                    onOpenQuickConnect(`Course Enrollment: ${title}`);
                  }}
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Enroll Now
                </Button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
