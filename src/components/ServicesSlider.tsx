import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  Calendar, 
  ChevronRight, 
  CheckCircle2,
  X,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { services, Service } from '../data/services';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesSliderProps {
  onBookService?: (serviceTitle: string) => void;
  onSelectService?: (service: Service) => void;
  showHeading?: boolean;
}

export const ServicesSlider: React.FC<ServicesSliderProps> = ({ 
  onBookService, 
  onSelectService,
  showHeading = true 
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [modalService, setModalService] = useState<Service | null>(null);
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

  const totalServices = services.length;
  const maxStartIndex = Math.max(0, totalServices - itemsPerPage);

  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, maxStartIndex]);

  const handlePrev = () => {
    setStartIndex((prev) => (prev <= 0 ? maxStartIndex : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1));
  };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleCardClick = (service: Service) => {
    if (onSelectService) {
      onSelectService(service);
    } else {
      setModalService(service);
    }
  };

  return (
    <div 
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Section Heading matching Screenshot 1 & 2 */}
      {showHeading && (
        <div className="mb-8 sm:mb-12">
          {/* Badge: — Our Services */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-0.5 bg-[#700486] rounded-full" />
            <span className="text-sm font-semibold tracking-wider text-[#700486] uppercase">
              Our Services
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#700486] tracking-tight leading-[1.18] max-w-2xl">
              Comprehensive services care for mind and wellness
            </h2>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous services slide"
                className="w-11 h-11 rounded-full border border-[#E8DDED] bg-white text-[#1D1D1F] hover:bg-[#700486] hover:text-white hover:border-[#700486] flex items-center justify-center transition-all duration-200 shadow-2xs hover:shadow-md cursor-pointer active:scale-95"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next services slide"
                className="w-11 h-11 rounded-full border border-[#E8DDED] bg-white text-[#1D1D1F] hover:bg-[#700486] hover:text-white hover:border-[#700486] flex items-center justify-center transition-all duration-200 shadow-2xs hover:shadow-md cursor-pointer active:scale-95"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Side Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        aria-label="Previous services slide"
        className="absolute -left-3 sm:-left-5 top-[38%] -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-[#E8DDED] bg-white/95 text-[#700486] hover:bg-[#700486] hover:text-white hover:border-[#700486] flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer active:scale-95 group backdrop-blur-xs"
      >
        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        aria-label="Next services slide"
        className="absolute -right-3 sm:-right-5 top-[38%] -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-[#E8DDED] bg-white/95 text-[#700486] hover:bg-[#700486] hover:text-white hover:border-[#700486] flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer active:scale-95 group backdrop-blur-xs"
      >
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* Slider Viewport with smooth overflow */}
      <div 
        className="overflow-hidden pb-4 select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transform: `translateX(-${startIndex * (100 / itemsPerPage)}%)`
          }}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.slug}`}
              className="flex-shrink-0 px-2.5 sm:px-3"
              style={{ width: `${100 / itemsPerPage}%` }}
            >
              <div
                onClick={() => handleCardClick(service)}
                className="group cursor-pointer flex flex-col h-full bg-white rounded-[28px] p-3 border border-[#EFE8F3] hover:border-[#CBAED4] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Large Rounded Image Frame matching Screenshot 2 */}
                <div className="relative aspect-[4/3.2] w-full rounded-[22px] overflow-hidden bg-[#FAF7FC] border border-[#E8DDED]/80 shadow-xs group-hover:shadow-md transition-all duration-500">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Duration Tag Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#1D1D1F] border border-white/60 shadow-xs flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#700486]" />
                    <span>{service.duration}</span>
                  </div>

                  {/* Hover Arrow Badge */}
                  <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white text-[#700486] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Service Title matching Screenshot 2 typography */}
                <div className="pt-4 pb-2 px-2 text-center flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-[20px] text-[#700486] tracking-tight group-hover:text-[#58036B] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    
                    <p className="text-xs sm:text-[13px] text-[#666666] line-clamp-2 mt-1.5 leading-relaxed font-normal">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="mt-3.5 pt-2.5 border-t border-[#F5EDF8] flex items-center justify-center gap-1.5 text-xs font-bold text-[#700486] group-hover:text-[#58036B]">
                    <span>Explore Care Details</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots with Active Ring Indicator matching Screenshot 2 */}
      <div className="flex items-center justify-center gap-2.5 mt-8">
        {Array.from({ length: maxStartIndex + 1 }).map((_, idx) => {
          const isActive = idx === startIndex;
          return (
            <button
              key={idx}
              onClick={() => setStartIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className="relative p-1.5 flex items-center justify-center cursor-pointer transition-all"
            >
              {isActive ? (
                // Active Dot with Ring (matches screenshot dot with circle)
                <span className="relative flex items-center justify-center w-5 h-5">
                  <span className="absolute w-5 h-5 rounded-full border border-[#700486] opacity-80 animate-ping scale-75" />
                  <span className="w-4 h-4 rounded-full border-2 border-[#700486] flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#700486]" />
                  </span>
                </span>
              ) : (
                <span className="w-2 h-2 rounded-full bg-[#D1C2D8] hover:bg-[#700486] transition-colors" />
              )}
            </button>
          );
        })}
      </div>

      {/* Interactive Service Detail & Booking Modal */}
      <AnimatePresence>
        {modalService && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setModalService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-white w-full max-w-2xl rounded-[32px] shadow-2xl border border-[#E8DDED] overflow-hidden flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Image Banner */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-[#FAF7FC]">
                <img
                  src={modalService.image}
                  alt={modalService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

                <button
                  onClick={() => setModalService(null)}
                  aria-label="Close modal"
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-1.5 bg-[#700486] px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3 h-3" />
                    <span>{modalService.category}</span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
                    {modalService.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#555555]">
                  <span className="inline-flex items-center gap-1.5 bg-[#FAF7FC] border border-[#E8DDED] px-3 py-1.5 rounded-full font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#700486]" />
                    {modalService.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-[#FAF7FC] border border-[#E8DDED] px-3 py-1.5 rounded-full font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {modalService.format}
                  </span>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#700486] uppercase tracking-wider mb-2">
                    Clinical Overview
                  </h4>
                  <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
                    {modalService.fullDescription}
                  </p>
                </div>

                {/* Key Benefits */}
                {modalService.benefits && (
                  <div>
                    <h4 className="text-xs font-bold text-[#700486] uppercase tracking-wider mb-3">
                      Core Therapeutic Outcomes
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {modalService.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2.5 bg-[#FAF7FC] p-3 rounded-2xl border border-[#E8DDED]/80">
                          <CheckCircle2 className="w-4 h-4 text-[#700486] flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-[#333333] font-medium leading-snug">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Ideal For */}
                <div className="bg-[#F3EAF6]/40 p-4 rounded-2xl border border-[#E8DDED]">
                  <h4 className="text-xs font-bold text-[#700486] uppercase tracking-wider mb-1">
                    Who Is This Best Suited For?
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {modalService.idealFor}
                  </p>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="p-4 sm:p-6 bg-[#FAF7FC] border-t border-[#E8DDED] flex flex-col sm:flex-row items-center justify-between gap-3">
                <Link
                  to={`/services?focus=${modalService.slug}`}
                  onClick={() => setModalService(null)}
                  className="text-xs font-semibold text-[#700486] hover:underline"
                >
                  View Full Service Syllabus & Details &rarr;
                </Link>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setModalService(null)}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-full border border-[#E8DDED] text-[#666666] text-xs font-semibold hover:bg-white transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const title = modalService.title;
                      setModalService(null);
                      if (onBookService) onBookService(title);
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#700486] text-white text-xs sm:text-sm font-semibold hover:bg-[#58036B] transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book {modalService.title}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
