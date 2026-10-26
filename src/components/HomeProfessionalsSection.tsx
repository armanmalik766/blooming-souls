import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Share2, Award, Check } from 'lucide-react';
import { Professional, professionals } from '../data/professionals';
import { useScrollReveal } from '../animations/useScrollReveal';

interface HomeProfessionalsSectionProps {
  onBookConsultation?: (doctorName: string) => void;
  onViewProfile: (doctor: Professional) => void;
}

export const HomeProfessionalsSection: React.FC<HomeProfessionalsSectionProps> = ({
  onBookConsultation,
  onViewProfile
}) => {
  const sectionRef = useScrollReveal<HTMLElement>({ y: 45, stagger: 0.08 });
  // Start index for carousel pagination/sliding
  const [startIndex, setStartIndex] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Dynamically calculate visible items per page based on window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerPage(1);
      } else if (width < 1024) {
        setItemsPerPage(2);
      } else if (width < 1280) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxStartIndex = Math.max(0, professionals.length - itemsPerPage);

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxStartIndex));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < maxStartIndex ? prev + 1 : 0));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleShare = (e: React.MouseEvent, doc: Professional) => {
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin}/#professionals-section?doc=${doc.id}`);
      setCopiedId(doc.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  // Slice visible professionals based on startIndex
  const visibleProfessionals = professionals.slice(startIndex, startIndex + itemsPerPage);
  if (visibleProfessionals.length < itemsPerPage) {
    visibleProfessionals.push(...professionals.slice(0, itemsPerPage - visibleProfessionals.length));
  }

  return (
    <section 
      ref={sectionRef}
      id="professionals-section" 
      className="relative py-6 sm:py-8 lg:py-10 bg-[#FAF7FC]/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading matching user prompt */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#700486]" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#700486] uppercase font-sans">
              CLINICAL EXCELLENCE
            </span>
            <span className="w-6 h-[2px] bg-[#700486]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1D1D1F] tracking-tight leading-tight font-heading">
            Meet Our Mental <br className="hidden sm:inline" />
            <span className="text-[#700486]">Healthcare Professionals</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed font-normal">
            Our clinical team comprises highly qualified psychiatrists, licensed psychologists, and relationship specialists committed to ethical care.
          </p>
        </div>

        {/* Carousel / Navigation wrapper with left & right floating arrows */}
        <div 
          className="relative group/carousel touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            id="professionals-prev-btn"
            aria-label="Previous professionals"
            className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-[#700486] shadow-lg border border-[#E8DDED] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2]" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            id="professionals-next-btn"
            aria-label="Next professionals"
            className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-[#700486] shadow-lg border border-[#E8DDED] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 stroke-[2]" />
          </button>

          {/* Professional Cards Grid (1 on mobile, 2 on tablet, 4 on desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-7 max-w-sm sm:max-w-none mx-auto">
            {visibleProfessionals.map((doc) => {
              const isFounder = doc.isFounder || doc.id === 'sadaf-malik';

              return (
                <div
                  key={doc.id}
                  id={`professional-card-${doc.id}`}
                  onClick={() => onViewProfile(doc)}
                  className="group relative bg-white rounded-[20px] overflow-hidden border border-[#EADDF0]/80 shadow-md hover:shadow-2xl hover:shadow-[#700486]/12 transition-all duration-500 hover:-translate-y-2 flex flex-col cursor-pointer"
                >
                  
                  {/* Photo Container */}
                  <div className="relative h-[320px] sm:h-[350px] lg:h-[360px] w-full overflow-hidden bg-[#FAF7FC]">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top filter brightness-[1.01] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.fallback && doc.id === 'sadaf-malik') {
                          target.dataset.fallback = 'true';
                          target.src = 'https://bloomingsouls.in/wp-content/uploads/2025/12/sadaf-saeed.webp';
                        }
                      }}
                    />

                    {/* Subtle Gradient Veil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />

                    {/* Floating Quick Action Pill on Hover */}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                      <span className="px-3 py-1 rounded-full bg-white/95 text-[#700486] font-bold text-xs shadow-md backdrop-blur-xs flex items-center gap-1">
                        View Bio →
                      </span>
                    </div>
                  </div>

                  {/* Bottom Information Box */}
                  <div
                    className={`relative p-5 sm:p-6 flex flex-col justify-between flex-grow transition-colors duration-300 ${
                      isFounder
                        ? 'bg-[#58036B] text-white'
                        : 'bg-white text-[#1D1D1F]'
                    }`}
                  >
                    {/* Top-Left Floating Badge (LinkedIn for Founder / Share for Others) */}
                    <div className="absolute -top-4 left-5 z-10">
                      {isFounder ? (
                        <a
                          href={doc.linkedinUrl || 'https://www.linkedin.com/in/sortoutwithsadaf/'}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-8 h-8 rounded-[8px] bg-[#58036B] hover:bg-[#700486] text-white border-2 border-white shadow-md flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer"
                          aria-label="LinkedIn profile of Sadaf Malik"
                          title="LinkedIn Profile"
                        >
                          <Linkedin className="w-4 h-4 fill-white" />
                        </a>
                      ) : (
                        <button
                          onClick={(e) => handleShare(e, doc)}
                          className="w-8 h-8 rounded-[8px] bg-white hover:bg-[#FAF7FC] text-[#700486] border border-[#E8DDED] shadow-sm flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer"
                          aria-label={`Share ${doc.name}'s profile`}
                          title={copiedId === doc.id ? 'Link copied!' : 'Share profile'}
                        >
                          {copiedId === doc.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                          ) : (
                            <Share2 className="w-3.5 h-3.5 stroke-[2.2]" />
                          )}
                        </button>
                      )}
                    </div>

                    {/* Name & Title */}
                    <div className="pt-2">
                      <h3
                        className={`font-heading font-extrabold text-base sm:text-lg tracking-wide uppercase leading-snug transition-colors ${
                          isFounder
                            ? 'text-white'
                            : 'text-[#700486] group-hover:text-[#58036B]'
                        }`}
                      >
                        {doc.name}
                      </h3>

                      <p
                        className={`text-xs sm:text-sm mt-1 font-normal leading-normal ${
                          isFounder ? 'text-[#E8DDED]' : 'text-[#666666]'
                        }`}
                      >
                        {doc.designation}
                      </p>
                    </div>

                    {/* Clinical Experience / Credential */}
                    <div className="mt-4 pt-3 border-t border-black/5 flex items-center gap-1.5">
                      <Award className={`w-3.5 h-3.5 shrink-0 ${isFounder ? 'text-white/80' : 'text-[#700486]'}`} />
                      <span
                        className={`text-xs font-medium ${
                          isFounder ? 'text-white/90' : 'text-[#666666]'
                        }`}
                      >
                        {doc.experience}
                      </span>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

          {/* Dots pagination for mobile / desktop */}
          <div className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: professionals.length - itemsPerPage + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setStartIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  startIndex === idx
                    ? 'w-7 bg-[#700486]'
                    : 'w-2 bg-[#E8DDED] hover:bg-[#700486]/40'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
