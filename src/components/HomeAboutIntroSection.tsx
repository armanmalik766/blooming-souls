import React from 'react';
import { ArrowRight, Star, Flower2 } from 'lucide-react';
import { useScrollReveal } from '../animations/useScrollReveal';
import { useParallax } from '../animations/useParallax';
import { useMagneticButton } from '../animations/useMagneticButton';
import { AnimatedCounter } from './AnimatedCounter';

interface HomeAboutIntroSectionProps {
  onBookConsultation: () => void;
}

export const HomeAboutIntroSection: React.FC<HomeAboutIntroSectionProps> = ({
  onBookConsultation
}) => {
  const sectionRef = useScrollReveal<HTMLElement>({ y: 40, stagger: 0.12 });
  const photoParallaxRef = useParallax<HTMLDivElement>({ speed: 18, direction: 'up' });
  const rightCircleParallaxRef = useParallax<HTMLDivElement>({ speed: 14, direction: 'down' });
  const bookBtnRef = useMagneticButton<HTMLButtonElement>({ strength: 6, speed: 0.3 });

  return (
    <section 
      ref={sectionRef}
      id="about-intro-section" 
      className="relative py-6 sm:py-8 lg:py-10 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* ========================================================================= */}
        {/* UPPER RIGHT SCRIPT ACCENT ("A Calmer Mind, A Brighter You")               */}
        {/* ========================================================================= */}
        <div className="hidden md:block absolute top-0 right-4 lg:right-12 select-none pointer-events-none text-right z-10">
          <div 
            className="text-[#700486]/70 font-bold text-2xl sm:text-3xl tracking-wide -rotate-6 leading-tight"
          >
            A Calmer Mind <br />
            <span className="inline-block ml-4">A Brighter You</span>
          </div>
          <div className="w-20 h-0.5 bg-[#700486]/35 ml-auto mt-1 rounded-full" />
        </div>

        {/* ========================================================================= */}
        {/* TOP CENTER HEADLINE & EYEBROW                                             */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          
          {/* Centered Pill Badge: Lotus + "Your Wellbeing Matters" */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5FC] border border-[#EADDF0] text-[#700486] text-xs sm:text-sm font-semibold mb-5 shadow-xs">
            <Flower2 className="w-4 h-4 stroke-[2.2] text-[#700486]" />
            <span>Your Wellbeing Matters</span>
          </div>

          {/* Main Display Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-extrabold text-[#1D1D1F] tracking-tight leading-[1.16] font-heading">
            Building a Healthier Mind, <br />
            <span className="text-[#700486]">One Step</span> at a Time
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed font-normal max-w-2xl mx-auto">
            Compassionate, evidence-based mental healthcare to help you feel better, live fuller, and create a brighter tomorrow.
          </p>
        </div>


        {/* ========================================================================= */}
        {/* MAIN BODY: LEFT CONTENT (IMAGE + STATS + COPY + CTA) | RIGHT CIRCLE PORTAL */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Photo Card (about.png) + 10+ Years Stat + Story + CTA & Rating */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-6 sm:gap-7 items-start">
            
            {/* Rounded Rectangle Photo: Clinic Sanctuary (about.png) */}
            <div 
              ref={photoParallaxRef}
              className="relative w-full max-w-[270px] xs:max-w-[300px] sm:max-w-none sm:w-[220px] md:w-[230px] aspect-[4/5] sm:aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-[22px] overflow-hidden shadow-lg border border-[#EADDF0] shrink-0 bg-[#FAF7FC] mx-auto md:mx-0 group"
            >
              <img
                src="/images/about.png"
                alt="Blooming Souls Clinic Sanctuary"
                className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.fallback) {
                    target.dataset.fallback = 'true';
                    target.src = '/images/about.png';
                  }
                }}
              />
              
              {/* Framed art sticker */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs border border-[#E8DDED] rounded-lg px-2 py-1 text-[10px] font-semibold text-[#700486] shadow-xs select-none">
                A Brighter You ♡
              </div>
            </div>

            {/* Right block of Left Column: 10+ Years Stat + Description + CTAs */}
            <div className="flex-1 flex flex-col justify-between">
              
              {/* Stat: 10+ YEARS OF CLINICAL EXCELLENCE */}
              <div className="flex items-center gap-3.5">
                <span className="text-4xl sm:text-5xl font-extrabold text-[#700486] font-heading leading-none tracking-tight">
                  <AnimatedCounter end={10} suffix="+" />
                </span>
                <div className="flex flex-col">
                  <span className="text-[11px] sm:text-xs font-extrabold tracking-wider text-[#1D1D1F] uppercase font-heading leading-tight">
                    YEARS OF
                  </span>
                  <span className="text-[11px] sm:text-xs font-extrabold tracking-wider text-[#1D1D1F] uppercase font-heading leading-tight">
                    CLINICAL EXCELLENCE
                  </span>
                </div>
              </div>

              {/* Delicate Divider Line */}
              <div className="h-px bg-[#EADDF0] w-full my-3.5" />

              {/* Descriptive Paragraphs */}
              <div className="space-y-3 text-xs sm:text-sm text-[#555555] leading-relaxed">
                <p>
                  At Blooming Souls, we provide personalized psychiatric care and psychological counselling tailored to your unique needs, in a safe, supportive, and non-judgmental space.
                </p>
                <p>
                  From managing anxiety, depression, and stress to navigating life transitions, our experienced team is here to guide you towards a healthier, happier, and more balanced life.
                </p>
              </div>

              {/* Action Bar: Book a Consultation Pill + Social Proof Avatar Stack & Stars */}
              <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6">
                
                {/* Book a Consultation Pill Button */}
                <button
                  ref={bookBtnRef}
                  onClick={onBookConsultation}
                  id="intro-book-consultation-btn"
                  className="group inline-flex items-center gap-3 bg-[#700486] hover:bg-[#58036B] text-white pl-6 pr-2.5 py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-[#700486]/25 transition-all duration-300 hover:scale-102 active:scale-98 cursor-pointer"
                >
                  <span>Book a Consultation</span>
                  <span className="w-7 h-7 rounded-full bg-white text-[#700486] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shadow-xs">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                </button>

                {/* Social Proof: Avatars + 1K+ Badge + Rating Stars */}
                <div className="flex items-center gap-3">
                  
                  {/* Overlapping Avatars */}
                  <div className="flex -space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
                      alt="Satisfied client"
                      className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-xs"
                      loading="lazy"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                      alt="Satisfied client"
                      className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-xs"
                      loading="lazy"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                      alt="Satisfied client"
                      className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-xs"
                      loading="lazy"
                    />
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-[#700486] text-white text-[10px] font-extrabold flex items-center justify-center shadow-xs">
                      1K+
                    </div>
                  </div>

                  {/* Stars + Satisfied Clients Text */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-[#1D1D1F] tracking-tight">
                      1K+ Satisfied Clients
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* Right Column: Large Circular Portal with Watch Dial & Studio Recording (about1.png) */}
          <div 
            ref={rightCircleParallaxRef}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            
            {/* Outer Decorative Arc with purple node dot */}
            <div className="relative w-full max-w-[310px] xs:max-w-[340px] sm:max-w-[390px] lg:max-w-[430px] aspect-square mx-auto">
              
              {/* Outer Watch Dial & Clockwise Progress Orbit */}
              <svg 
                className="absolute -inset-3 sm:-inset-4 w-[calc(100%+24px)] sm:w-[calc(100%+32px)] h-[calc(100%+24px)] sm:h-[calc(100%+32px)] pointer-events-none overflow-visible z-20"
                viewBox="0 0 460 460"
                fill="none"
              >
                <defs>
                  {/* Brand gradient for the clockwise progress bar */}
                  <linearGradient id="watchProgressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#700486" />
                    <stop offset="50%" stopColor="#9C27B0" />
                    <stop offset="100%" stopColor="#E056FD" />
                  </linearGradient>

                  {/* Soft radiant drop-shadow glow for the running dot */}
                  <filter id="watchDotGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="0" stdDeviation="3.5" floodColor="#700486" floodOpacity="0.65" />
                  </filter>
                </defs>

                {/* 1. Base Delicate Dotted Watch Dial Ring */}
                <circle 
                  cx="230" 
                  cy="230" 
                  r="215" 
                  stroke="#700486" 
                  strokeWidth="1.5" 
                  strokeOpacity="0.2" 
                  strokeDasharray="3 6"
                />

                {/* 2. Watch Dial Hour Marker Dots around the round */}
                <g className="text-[#700486]">
                  {/* 12 o'clock */}
                  <circle cx="230" cy="15" r="3.5" fill="#700486" fillOpacity="0.45" />
                  <circle cx="230" cy="15" r="6.5" stroke="#700486" strokeWidth="1" strokeOpacity="0.25" />
                  
                  {/* 3 o'clock */}
                  <circle cx="445" cy="230" r="3.5" fill="#700486" fillOpacity="0.45" />
                  <circle cx="445" cy="230" r="6.5" stroke="#700486" strokeWidth="1" strokeOpacity="0.25" />
                  
                  {/* 6 o'clock */}
                  <circle cx="230" cy="445" r="3.5" fill="#700486" fillOpacity="0.45" />
                  <circle cx="230" cy="445" r="6.5" stroke="#700486" strokeWidth="1" strokeOpacity="0.25" />
                  
                  {/* 9 o'clock */}
                  <circle cx="15" cy="230" r="3.5" fill="#700486" fillOpacity="0.45" />
                  <circle cx="15" cy="230" r="6.5" stroke="#700486" strokeWidth="1" strokeOpacity="0.25" />

                  {/* 1:30, 4:30, 7:30, 10:30 Intermediate Milestone Dots */}
                  <circle cx="382" cy="78" r="2.5" fill="#700486" fillOpacity="0.3" />
                  <circle cx="382" cy="382" r="2.5" fill="#700486" fillOpacity="0.3" />
                  <circle cx="78" cy="382" r="2.5" fill="#700486" fillOpacity="0.3" />
                  <circle cx="78" cy="78" r="2.5" fill="#700486" fillOpacity="0.3" />
                </g>

                {/* 3. Clockwise Progress Bar Fill Ring (Fills 0% to 100% round like a watch) */}
                <circle
                  cx="230"
                  cy="230"
                  r="215"
                  stroke="url(#watchProgressGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="1351"
                  strokeDashoffset="1351"
                  className="watch-circle-progress"
                  transform="rotate(-90 230 230)"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="1351; 0; 0; 1351"
                    keyTimes="0; 0.92; 0.97; 1"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.95; 1; 0; 0"
                    keyTimes="0; 0.92; 0.97; 1"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* 4. Clockwise Running Dot Beacon Completing Round */}
                <g 
                  className="watch-dot-runner"
                  style={{ transformOrigin: '230px 230px' }}
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 230 230"
                    to="360 230 230"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                  {/* Trailing Soft Halo Pulsing */}
                  <circle 
                    cx="230" 
                    cy="15" 
                    r="12" 
                    fill="#9C27B0" 
                    fillOpacity="0.22" 
                    className="watch-dot-pulse"
                  >
                    <animate attributeName="r" values="9; 14; 9" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.35; 0.75; 0.35" dur="2s" repeatCount="indefinite" />
                  </circle>
                  {/* Outer delicate ring */}
                  <circle 
                    cx="230" 
                    cy="15" 
                    r="9" 
                    stroke="#700486" 
                    strokeWidth="1.2" 
                    strokeOpacity="0.5" 
                  />
                  {/* Vibrant Purple Core with Glow */}
                  <circle 
                    cx="230" 
                    cy="15" 
                    r="5.5" 
                    fill="#700486" 
                    filter="url(#watchDotGlow)"
                  />
                  {/* Crisp White Jewel Center */}
                  <circle 
                    cx="230" 
                    cy="15" 
                    r="2" 
                    fill="#FFFFFF" 
                  />
                </g>
              </svg>

              {/* Soft Lavender Halo Background */}
              <div className="absolute inset-0 rounded-full bg-[#FAF5FC] border-4 border-white shadow-2xl shadow-[#700486]/10 overflow-hidden group">
                
                {/* Botanical Line Art Shadow in Background */}
                <div 
                  className="absolute -bottom-8 -left-8 w-48 h-56 pointer-events-none opacity-20 text-[#700486]"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 200 240" fill="none" className="w-full h-full">
                    <path 
                      d="M20 220 C60 170 110 110 130 30 M130 30 C100 20 80 30 75 50 C70 70 95 80 130 30 M105 95 C75 90 60 110 65 130 C70 150 95 140 105 95" 
                      stroke="currentColor" 
                      strokeWidth="3.5" 
                      strokeLinecap="round" 
                    />
                  </svg>
                </div>

                {/* Studio Recording Photo (about1.png) */}
                <img
                  src="/images/about1.png"
                  alt="Clinical consultation and media recording at Blooming Souls"
                  className="w-full h-full object-cover object-[center_35%] filter brightness-[1.03] contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.fallback) {
                      target.dataset.fallback = 'true';
                      target.src = '/images/about1.png';
                    }
                  }}
                />

                {/* Subtle warm interior glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#58036B]/30 via-transparent to-black/10 pointer-events-none" />

                {/* Inset clinic framed badge */}
                <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md border border-[#E8DDED] rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold text-[#58036B] shadow-lg flex items-center gap-1.5 whitespace-nowrap select-none pointer-events-none">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Our Therapy Sanctuary</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
