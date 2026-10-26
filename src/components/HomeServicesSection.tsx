import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  Flower2, 
  ShieldCheck, 
  Users, 
  Heart 
} from 'lucide-react';
import { ServicesSlider } from './ServicesSlider';
import { useScrollReveal } from '../animations/useScrollReveal';
import { useParallax } from '../animations/useParallax';
import { useMagneticButton } from '../animations/useMagneticButton';

interface HomeServicesSectionProps {
  onBookService?: (serviceTitle: string) => void;
  onWatchApproach?: () => void;
}

export const HomeServicesSection: React.FC<HomeServicesSectionProps> = ({
  onBookService,
  onWatchApproach
}) => {
  const sectionRef = useScrollReveal<HTMLElement>({ y: 45, stagger: 0.1 });
  const portalParallaxRef = useParallax<HTMLDivElement>({ speed: 16, direction: 'up' });
  const exploreBtnRef = useMagneticButton<HTMLAnchorElement>({ strength: 6, speed: 0.3 });

  return (
    <section 
      ref={sectionRef}
      id="our-services-section" 
      className="relative py-6 sm:py-8 lg:py-10 overflow-hidden bg-gradient-to-b from-[#FAF7FC]/50 via-white to-[#FAF7FC]/40"
    >
      {/* Decorative Botanical Branch Shadows in Background */}
      <div 
        className="absolute top-10 right-0 w-[450px] h-[550px] pointer-events-none opacity-[0.05] select-none -z-0"
        aria-hidden="true"
      >
        <svg viewBox="0 0 400 500" fill="none" className="w-full h-full text-[#700486]">
          <path 
            d="M50 450 C120 380 200 280 220 100 M220 100 C180 80 150 90 140 120 C130 150 170 160 220 100 M180 220 C130 210 110 240 120 270 C130 300 170 280 180 220 M205 180 C240 160 260 180 250 210 C240 240 210 220 205 180 M150 320 C110 320 100 350 110 380 C120 410 150 380 150 320 M195 280 C230 270 250 300 235 330 C220 350 200 320 195 280" 
            stroke="currentColor" 
            strokeWidth="12" 
            strokeLinecap="round" 
          />
        </svg>
      </div>

      <div 
        className="absolute -bottom-10 -left-10 w-[380px] h-[480px] pointer-events-none opacity-[0.04] select-none -z-0"
        aria-hidden="true"
      >
        <svg viewBox="0 0 400 500" fill="none" className="w-full h-full text-[#700486]">
          <path 
            d="M350 480 C280 400 220 280 200 120 M200 120 C240 100 260 120 250 150 C240 180 210 170 200 120 M210 240 C260 230 280 260 270 290 C260 320 220 300 210 240 M190 200 C150 180 140 210 150 240 C160 270 190 240 190 200" 
            stroke="currentColor" 
            strokeWidth="10" 
            strokeLinecap="round" 
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* TOP ROW: HEADLINE + RIGHT SIDE ORGANIC PORTAL                             */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-14">
          
          {/* Left Column: Heading & Calls to Action */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-5 text-left">
            {/* Eyebrow with horizontal line: — OUR SERVICES */}
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-[2px] bg-[#700486]" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#700486] uppercase font-sans">
                OUR SERVICES
              </span>
            </div>

            {/* Display Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#1D1D1F] tracking-tight leading-[1.08]">
              Empowering <br />
              <span className="text-[#700486]">Healthier Minds</span> <br />
              Brighter Tomorrows
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-lg font-normal">
              Evidence-based, compassionate, and personalized mental healthcare for every stage of life.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-5 pt-2 sm:pt-4">
              {/* Purple Pill Button */}
              <Link
                ref={exploreBtnRef}
                to="/services"
                id="explore-all-services-btn"
                className="group inline-flex items-center gap-2.5 bg-[#700486] hover:bg-[#58036B] text-white px-7 py-3.5 rounded-full font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-[#700486]/25 transition-all duration-300 hover:scale-102 active:scale-98 cursor-pointer"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Watch Our Approach Button */}
              <button
                onClick={() => {
                  if (onWatchApproach) {
                    onWatchApproach();
                  } else {
                    const el = document.getElementById('how-it-works-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group flex items-center gap-3 py-1 cursor-pointer transition-transform hover:translate-x-0.5 text-left"
                aria-label="Watch our approach video"
              >
                <div className="w-11 h-11 rounded-full border border-[#8915A2]/30 bg-white/90 backdrop-blur-sm text-[#700486] flex items-center justify-center shadow-sm group-hover:bg-[#700486] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-[#1D1D1F] group-hover:text-[#700486] transition-colors leading-tight">
                    Watch Our Approach
                  </div>
                  <div className="text-xs text-[#777777] font-medium">
                    1-min video
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Organic Portal Visual Composition */}
          <div 
            ref={portalParallaxRef}
            className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[540px] flex items-center justify-center">
              
              {/* Fluid Organic Wave Backdrop */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-[#EDE3F2]/90 via-[#F7F2FA] to-[#E5D7EC] rounded-[60px] sm:rounded-[80px] lg:rounded-[100px] scale-105 -z-0 opacity-90 shadow-inner"
              />

              {/* Soft Radial Ambient Glow */}
              <div className="absolute -inset-4 bg-radial from-[#700486]/10 to-transparent blur-2xl -z-10" />

              {/* Circular Portal Frame with Cozy Armchair Photo */}
              <div className="relative z-10 w-full aspect-[4/3.2] sm:aspect-[4/3] rounded-[48px] sm:rounded-[64px] overflow-hidden border-4 border-white shadow-2xl bg-[#FAF7FC]">
                <img
                  src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=85"
                  alt="A Calmer Brighter You - Peaceful and tranquil therapy room at Blooming Souls"
                  className="w-full h-full object-cover object-center filter brightness-[1.03] contrast-[1.02]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.fallback) {
                      target.dataset.fallback = 'true';
                      target.src = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85';
                    }
                  }}
                />

                {/* Soft gradient vignette to enhance contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#58036B]/20 via-transparent to-transparent pointer-events-none" />

                {/* Floating Handwritten Script Overlay: "A Calmer Brighter You" */}
                <div className="absolute top-6 left-6 sm:top-8 sm:left-10 select-none pointer-events-none drop-shadow-sm">
                  <div 
                    className="text-[#700486] font-bold text-3xl sm:text-4xl lg:text-[42px] tracking-wide leading-tight -rotate-3"
                  >
                    A Calmer <br />
                    <span className="ml-6 sm:ml-10 inline-block">Brighter You</span>
                  </div>
                </div>
              </div>

              {/* Floating Pill Droplet Badge on Upper Right */}
              <div className="absolute -top-4 right-3 sm:-top-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-[24px] px-3.5 py-4 sm:px-4 sm:py-5 shadow-xl border border-[#E8DDED] text-center z-20 transition-transform duration-300 hover:scale-105">
                <div className="w-8 h-8 rounded-full bg-[#FAF7FC] text-[#700486] flex items-center justify-center mx-auto mb-2 border border-[#E8DDED]">
                  <Flower2 className="w-4 h-4 stroke-[2]" />
                </div>
                <div className="text-[10.5px] sm:text-[11px] font-semibold text-[#555555] space-y-0.5 tracking-tight leading-snug">
                  <div>Support</div>
                  <div>Heal</div>
                  <div>Grow</div>
                  <div>Thrive</div>
                </div>
                <div className="w-4 h-[1.5px] bg-[#700486]/40 mx-auto mt-2" />
              </div>

              {/* Vertical Text Along Far Right Margin */}
              <div className="hidden xl:flex absolute -right-14 top-1/2 -translate-y-1/2 flex-col items-center gap-2 text-[#777777]/80 select-none">
                <div className="[writing-mode:vertical-rl] tracking-[0.28em] text-[10px] font-bold uppercase text-[#777777]">
                  YOUR MENTAL HEALTH MATTERS
                </div>
                <div className="w-[1.5px] h-8 bg-[#888888]/30" />
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* SINGLE-ROW SERVICES SLIDER SHOWCASING ALL 8 SERVICE CARDS                 */}
        {/* ========================================================================= */}
        <div className="relative mb-6">
          <ServicesSlider
            showHeading={false}
            onBookService={onBookService}
          />
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM FEATURE STRIP / TRUST RIBBON                                       */}
        {/* ========================================================================= */}
        <div className="mt-6 sm:mt-8 bg-[#FAF6FC] rounded-[24px] sm:rounded-full py-4 sm:py-5 px-6 sm:px-10 border border-[#EFE8F3] shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#E5D9EB]">
            
            {/* Feature 1: Confidential & Secure */}
            <div className="flex items-center gap-3.5 md:justify-center md:px-6 pt-2 md:pt-0">
              <div className="w-10 h-10 rounded-full bg-white text-[#700486] flex items-center justify-center border border-[#E8DDED] shadow-2xs shrink-0">
                <ShieldCheck className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-[#1D1D1F]">
                  Confidential &amp; Secure
                </div>
                <div className="text-xs text-[#666666]">
                  Your privacy is our priority
                </div>
              </div>
            </div>

            {/* Feature 2: Personalized Care */}
            <div className="flex items-center gap-3.5 md:justify-center md:px-6 pt-4 md:pt-0">
              <div className="w-10 h-10 rounded-full bg-white text-[#700486] flex items-center justify-center border border-[#E8DDED] shadow-2xs shrink-0">
                <Users className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-[#1D1D1F]">
                  Personalized Care
                </div>
                <div className="text-xs text-[#666666]">
                  Tailored to your unique needs
                </div>
              </div>
            </div>

            {/* Feature 3: Compassionate Support */}
            <div className="flex items-center gap-3.5 md:justify-center md:px-6 pt-4 md:pt-0">
              <div className="w-10 h-10 rounded-full bg-white text-[#700486] flex items-center justify-center border border-[#E8DDED] shadow-2xs shrink-0">
                <Heart className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-[#1D1D1F]">
                  Compassionate Support
                </div>
                <div className="text-xs text-[#666666]">
                  With you at every step
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
