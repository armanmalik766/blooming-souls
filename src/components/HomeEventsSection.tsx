import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { events } from '../data/events';
import { useScrollReveal } from '../animations/useScrollReveal';

interface HomeEventsSectionProps {
  onOpenQuickConnect?: (context?: string) => void;
}

export const HomeEventsSection: React.FC<HomeEventsSectionProps> = ({ onOpenQuickConnect }) => {
  const sectionRef = useScrollReveal<HTMLElement>({ y: 40, stagger: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 640) {
          setVisibleSlides(1);
        } else if (window.innerWidth < 1024) {
          setVisibleSlides(2);
        } else {
          setVisibleSlides(3);
        }
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, events.length - visibleSlides);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  // Auto-advance slider gently every 5 seconds unless hovered
  useEffect(() => {
    if (isPaused || maxIndex <= 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section 
      ref={sectionRef}
      id="home-events-slider-section"
      className="py-6 sm:py-8 lg:py-10 bg-white relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching Screenshot 2 */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          {/* Badge: horizontal line on left with "Events" in purple */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-10 sm:w-14 h-[1.5px] bg-[#333333]" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#700486] font-sans">
              Events
            </span>
          </div>

          {/* Main Headline matching Screenshot 2 */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-extrabold text-[#700486] tracking-tight leading-[1.2] font-heading">
            Inspire and support personal growth and well-being at Blooming Souls.
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative group/events">
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous event"
            className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 text-[#700486] border border-[#E8DDED] shadow-md flex items-center justify-center hover:bg-[#700486] hover:text-white transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#700486]/30 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next event"
            className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 text-[#700486] border border-[#E8DDED] shadow-md flex items-center justify-center hover:bg-[#700486] hover:text-white transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#700486]/30 active:scale-95"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Slide Window */}
          <div className="overflow-hidden px-1 py-2">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`
              }}
            >
              {events.map((event) => (
                <div
                  key={event.id}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3 sm:px-3.5"
                >
                  <div className="h-full bg-white rounded-3xl border border-[#E8DDED] p-5 sm:p-6 lg:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                    
                    {/* Top Content */}
                    <div>
                      {/* Event Image matching Screenshot 2 */}
                      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-5 bg-[#FAF7FC]">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          style={{ objectPosition: event.imagePosition || 'center' }}
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 text-[#700486] backdrop-blur-xs border border-white/60 shadow-2xs">
                            {event.categoryLabel}
                          </span>
                        </div>
                      </div>

                      {/* Event Title */}
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-[#700486] mb-2 group-hover:text-[#550266] transition-colors leading-snug">
                        {event.title}
                      </h3>

                      {/* Event Description matching Screenshot 2 */}
                      <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                        {event.description}
                      </p>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-5 mt-4 border-t border-[#F3EAF6] flex items-center justify-between">
                      <Link
                        to={`/events?focus=${event.id}`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#700486] hover:underline"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <button
                        onClick={() => {
                          if (onOpenQuickConnect) {
                            onOpenQuickConnect(`Inquiry for ${event.title}`);
                          }
                        }}
                        className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#FAF7FC] text-[#700486] border border-[#E8DDED] hover:bg-[#700486] hover:text-white transition-colors cursor-pointer"
                      >
                        Participate
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Pagination Dots Matching Screenshot 2 (`· · · · ⊙`) */}
          <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => {
              const isActive = dotIdx === currentIndex;
              return (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className="p-1 cursor-pointer transition-all focus:outline-none"
                >
                  {isActive ? (
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-[#700486] flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#700486]" />
                    </span>
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#700486]/40 hover:bg-[#700486] transition-colors block" />
                  )}
                </button>
              );
            })}
          </div>

        </div>

        {/* View All Events Link Button */}
        <div className="mt-8 text-center">
          <Link
            to="/events"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-[#700486] bg-[#FAF7FC] border border-[#E8DDED] hover:bg-[#700486] hover:text-white transition-all shadow-2xs active:scale-95"
          >
            <span>Explore All Events & Initiatives</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
