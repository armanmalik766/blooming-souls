import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Calendar, 
  ChevronRight, 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  Radio, 
  Heart, 
  Users, 
  Mic, 
  CheckCircle2,
  Share2
} from 'lucide-react';
import { events, EventItem } from '../data/events';
import { Button } from '../components/Button';

interface EventsProps {
  onOpenQuickConnect: (context?: string) => void;
}

export const Events: React.FC<EventsProps> = ({ onOpenQuickConnect }) => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeEventModal, setActiveEventModal] = useState<EventItem | null>(null);

  // Check if deep linked via query param ?focus=id
  useEffect(() => {
    const focusId = searchParams.get('focus');
    if (focusId) {
      const found = events.find(e => e.id === focusId);
      if (found) {
        const el = document.getElementById(focusId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  }, [searchParams]);

  const categories = [
    'All',
    'Radio Show',
    'Wellness Retreat',
    'Workshops',
    'Podcast',
    'Celebration'
  ];

  const filteredEvents = selectedCategory === 'All'
    ? events
    : events.filter(e => e.category === selectedCategory);

  return (
    <div className="space-y-6 sm:space-y-8 pb-12">
      
      {/* ========================================================================= */}
      {/* PAGE HEADER: BREADCRUMBS + 'Events' TITLE                                 */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-b from-[#FAF7FC] via-[#F3EAF6]/30 to-white pt-6 sm:pt-8 pb-6 sm:pb-8 border-b border-[#E8DDED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          
          {/* Breadcrumbs Pill */}
          <div className="flex items-center justify-center mb-2.5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-xs sm:text-sm font-medium border border-[#E8DDED] text-[#700486] shadow-2xs">
              <Link to="/" className="text-[#666666] hover:text-[#700486] transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#700486]" />
              <span className="font-bold text-[#700486]">Events</span>
            </div>
          </div>

          {/* Clean Main Title matching design system */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#700486] tracking-tight mb-3 leading-tight">
            Events & Initiatives
          </h1>

          <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-3xl mx-auto font-normal">
            Inspiring and supporting personal growth and well-being at Blooming Souls through therapeutic retreats, radio programs, interactive podcasts, and community workshops.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4 sm:pt-5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#700486] text-white shadow-xs'
                    : 'bg-white text-[#555555] border border-[#E8DDED] hover:border-[#700486] hover:text-[#700486]'
                }`}
              >
                {cat === 'All' ? `All Initiatives (${events.length})` : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* EVENTS GRID: MATCHING SCREENSHOT 1 CARDS                                  */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredEvents.map((event) => (
            <article
              key={event.id}
              id={event.id}
              className="bg-white rounded-[28px] border border-[#E8DDED] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Event Content */}
              <div>
                {/* Event Photo Container matching Screenshot 1 */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF7FC]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: event.imagePosition || 'center' }}
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#700486] shadow-2xs backdrop-blur-xs border border-white/70">
                      {event.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-5 sm:p-6">
                  {/* Event Title in Purple */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#700486] mb-2 group-hover:text-[#550266] transition-colors leading-snug">
                    {event.title}
                  </h3>

                  {/* Event Exact Paragraph Text matching Screenshot 1 */}
                  <p className="text-sm text-[#555555] leading-relaxed mb-5">
                    {event.description}
                  </p>

                  {/* Highlights Bullet List */}
                  {event.highlights && event.highlights.length > 0 && (
                    <div className="space-y-2 pt-3 border-t border-[#F3EAF6]">
                      <h3 className="text-xs font-bold text-[#700486] uppercase tracking-wider">
                        Key Highlights
                      </h3>
                      <ul className="space-y-1.5">
                        {event.highlights.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs text-[#666666]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#700486] flex-shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 sm:p-7 pt-0 flex items-center gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onOpenQuickConnect(`Event Participation: ${event.title}`)}
                  className="flex-1 text-xs sm:text-sm"
                >
                  {event.ctaLabel}
                </Button>

                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: `${event.title} | Blooming Souls`,
                        text: event.description,
                        url: window.location.href
                      }).catch(() => {});
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                    }
                  }}
                  title="Share event"
                  className="w-10 h-10 rounded-full border border-[#E8DDED] text-[#700486] flex items-center justify-center hover:bg-[#FAF7FC] transition-colors cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

            </article>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* COLLABORATIVE PROPOSAL CALLOUT                                            */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#700486] rounded-[32px] p-6 sm:p-10 text-white shadow-xl relative overflow-hidden text-center">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 text-xs font-semibold backdrop-blur-xs border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              Community Partnerships & Workshops
            </span>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              Host a Mental Health Workshop or Event with Us
            </h2>

            <p className="text-white/85 text-sm sm:text-base leading-relaxed">
              We collaborate with colleges, corporates, medical institutions, and non-profits across India to conduct tailored wellness masterclasses, art therapy sessions, and psychiatric awareness campaigns.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Button
                variant="white"
                size="md"
                onClick={() => onOpenQuickConnect('Organizational Workshop Proposal')}
                icon={<Calendar className="w-4 h-4" />}
                iconPosition="left"
              >
                Inquire for Collaboration
              </Button>

              <a
                href="https://wa.me/918826533260"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white border border-white/60 hover:bg-white/10 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
