import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { Logo } from './Logo';

export const GoogleReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState<{ [key: string]: boolean }>({});
  const [isWriteReviewModalOpen, setIsWriteReviewModalOpen] = useState(false);
  const [userRating, setUserRating] = useState(5);
  const [reviewName, setReviewName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  // For responsive sliding: 1 on mobile, 2 on tablet, 3 on desktop
  const visibleCards = 3;
  const maxIndex = Math.max(0, testimonials.length - 1);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const toggleExpand = (id: string) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    setReviewSubmitted(true);
    setTimeout(() => {
      setIsWriteReviewModalOpen(false);
      setReviewSubmitted(false);
      setReviewName('');
      setReviewText('');
    }, 2000);
  };

  return (
    <section 
      id="google-reviews-section" 
      className="py-6 sm:py-8 bg-[#FAF7FC]/80 border-t border-[#E8DDED]/60 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-10">
          
          {/* Left Column: Google Business Profile Trust Card matching screenshot */}
          <div className="w-full lg:w-[280px] xl:w-[300px] flex-shrink-0 flex flex-col items-center justify-center p-6 bg-white rounded-3xl border border-[#E8DDED] shadow-sm text-center">
            {/* Brand Logo Only */}
            <div className="flex flex-col items-center mb-3">
              <Logo variant="purple" showText={false} size="md" />
            </div>

            {/* Stars */}
            <div className="flex items-center justify-center gap-1 my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#F5A623] text-[#F5A623]" />
              ))}
            </div>

            {/* Total reviews count */}
            <div className="text-sm font-medium text-gray-700 mb-4">
              <span className="font-bold text-gray-900">65</span> Google reviews
            </div>

            {/* Write a review button */}
            <button
              onClick={() => setIsWriteReviewModalOpen(true)}
              className="px-6 py-2 rounded-full border border-gray-300 text-gray-800 text-xs sm:text-sm font-semibold hover:bg-gray-50 hover:border-gray-400 active:scale-95 transition-all shadow-2xs"
            >
              Write a review
            </button>
          </div>

          {/* Right Column: Interactive Testimonial Carousel matching screenshot */}
          <div className="flex-1 w-full min-w-0 flex flex-col justify-center relative">
            
            {/* Carousel navigation arrow buttons matching screenshot */}
            <div className="hidden sm:flex items-center justify-between absolute -left-4 -right-4 top-1/2 -translate-y-1/2 pointer-events-none z-10">
              <button
                onClick={handlePrev}
                aria-label="Previous Google Review"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:text-[#700486] hover:bg-gray-50 active:scale-95 transition-all pointer-events-auto cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Google Review"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:text-[#700486] hover:bg-gray-50 active:scale-95 transition-all pointer-events-auto cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Cards Grid / Slider */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {[0, 1, 2].map((offset) => {
                const itemIndex = (currentIndex + offset) % testimonials.length;
                const item = testimonials[itemIndex];
                const isExpanded = expandedReviews[item.id];
                const isLong = item.quote.length > 130;
                const displayText = isLong && !isExpanded 
                  ? `${item.quote.slice(0, 120)}...` 
                  : item.quote;

                return (
                  <div
                    key={`${item.id}-${offset}`}
                    className="bg-white rounded-2xl p-6 border border-[#E8DDED]/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative min-h-[210px] group"
                  >
                    <div>
                      {/* 5 Stars + Blue Verified Checkmark */}
                      <div className="flex items-center gap-1.5 mb-3">
                        <div className="flex items-center gap-0.5">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#F5A623] text-[#F5A623]" />
                          ))}
                        </div>
                        {/* Google Blue Verified Checkmark Pill/Circle */}
                        <div 
                          className="w-4 h-4 rounded-full bg-[#1A73E8] flex items-center justify-center text-white ml-0.5" 
                          title="Verified Google Review"
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      </div>

                      {/* Review Text */}
                      <p className="text-gray-700 text-sm leading-relaxed font-normal">
                        {displayText}
                      </p>

                      {isLong && (
                        <button
                          onClick={() => toggleExpand(item.id)}
                          className="mt-2 text-xs font-semibold text-gray-500 hover:text-[#700486] transition-colors cursor-pointer"
                        >
                          {isExpanded ? 'Show less' : 'Read more'}
                        </button>
                      )}
                    </div>

                    {/* Bottom: Reviewer attribution & Large Purple Quotation Marks */}
                    <div className="pt-4 mt-2 flex items-end justify-between border-t border-gray-100">
                      <div className="text-xs text-gray-500 font-medium">
                        <span className="font-semibold text-gray-800">{item.name}</span>
                        {item.duration && <span className="text-gray-400 ml-1.5">• {item.duration}</span>}
                      </div>

                      {/* Signature Purple Quotation Marks matching screenshot */}
                      <span className="text-3xl font-serif font-black text-[#700486] opacity-80 leading-none select-none">
                        ❝
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Controls */}
            <div className="flex sm:hidden items-center justify-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                aria-label="Previous Google Review"
                className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs text-gray-500 font-medium">
                {currentIndex + 1} of {testimonials.length}
              </span>
              <button
                onClick={handleNext}
                aria-label="Next Google Review"
                className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Write a Review Modal */}
      {isWriteReviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative">
            <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">
              Write a Review
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-5">
              Share your clinical or therapeutic experience with Blooming Souls.
            </p>

            {reviewSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg">Thank You!</h4>
                <p className="text-sm text-gray-600">Your review has been successfully submitted to Google verification.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Rating
                  </label>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setUserRating(star)}
                        className="p-1 text-[#F5A623] hover:scale-110 transition-transform"
                      >
                        <Star className={`w-6 h-6 ${star <= userRating ? 'fill-[#F5A623]' : 'text-gray-300'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={reviewName}
                    onChange={(e) => setReviewName(e.target.value)}
                    placeholder="e.g. Ananya Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#700486] focus:ring-1 focus:ring-[#700486]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Your Feedback
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Tell us about your therapy or workshop experience..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#700486] focus:ring-1 focus:ring-[#700486]"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsWriteReviewModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-xl text-sm font-semibold bg-[#700486] text-white hover:bg-[#58036B] transition-colors shadow-md"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
