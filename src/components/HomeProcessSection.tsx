import React, { useState } from 'react';
import { ArrowRight, Heart, Calendar, CheckCircle2, Sparkles, X, Clock } from 'lucide-react';
import { useScrollReveal } from '../animations/useScrollReveal';
import { useMagneticButton } from '../animations/useMagneticButton';

export interface ProcessStepData {
  step: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  overlayBadge?: string;
  details?: string;
  keyPoints?: string[];
}

interface HomeProcessSectionProps {
  onBookAppointment?: (stepContext?: string) => void;
}

export const HomeProcessSection: React.FC<HomeProcessSectionProps> = ({
  onBookAppointment
}) => {
  const [activeModalStep, setActiveModalStep] = useState<ProcessStepData | null>(null);
  const sectionRef = useScrollReveal<HTMLElement>({ y: 40, stagger: 0.12 });
  const bookBtnRef = useMagneticButton<HTMLButtonElement>({ strength: 6, speed: 0.3 });

  const steps: ProcessStepData[] = [
    {
      step: '01',
      title: 'Book a Consultation',
      description: 'Choose your preferred mode (online or in-clinic) and a convenient date and time.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'Smartphone screen showing appointment booking interface',
      overlayBadge: 'Step 1: Booking',
      details: 'Our confidential booking portal lets you select between in-clinic sanctuary appointments or encrypted HD tele-health consultations. Pick your specialist and time slot in under 2 minutes.',
      keyPoints: [
        'Instant date and time confirmation via SMS and Email',
        'Choose between tele-consultation or serene in-clinic visit',
        'Pre-session intake form to save you clinical time',
        '100% encrypted and confidential client data'
      ]
    },
    {
      step: '02',
      title: 'Clinical Evaluation',
      description: 'A comprehensive assessment to understand your concerns and goals.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'Dr. Sadaf Malik or clinical psychologist consulting with patient warmly',
      overlayBadge: 'Step 2: Diagnosis',
      details: 'An unhurried, empathetic 45-60 minute evaluation. We listen to your symptoms, life stressors, medical background, and personal goals in an unconditionally safe environment.',
      keyPoints: [
        'Unhurried 45 to 60-minute deep diagnostic session',
        'Exploration of emotional, biological, and lifestyle factors',
        'DSM-5 and evidence-based clinical screening',
        'Clear clinical explanations in simple, comforting language'
      ]
    },
    {
      step: '03',
      title: 'Personalized Care Plan',
      description: 'A tailored plan with therapy, medication (if needed), and lifestyle guidance.',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'Writing on a personalized care plan document',
      overlayBadge: 'Step 3: Roadmap',
      details: 'Your bespoke mental health roadmap combining modern psychotherapy modalities (CBT, ACT, EFT), conservative medication if clinically indicated, and somatic calming drills.',
      keyPoints: [
        'Custom therapy roadmap tailored to your specific distress points',
        'Conservative pharmacology only when medically essential',
        'Somatic breathwork and emotional regulation toolkits',
        'Holistic lifestyle, sleep, and nutrition recommendations'
      ]
    },
    {
      step: '04',
      title: 'Ongoing Healing & Support',
      description: 'Regular follow-ups to help you stay on track and achieve lasting well-being.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'Woman smiling peacefully with closed eyes outdoors in calm sunlight',
      overlayBadge: 'Step 4: Wellbeing',
      details: 'Mental health is an ongoing journey of resilience. We provide periodic reviews, dosage adjustments, coping reinforcement, and relapse prevention tools to ensure sustained emotional stability.',
      keyPoints: [
        'Scheduled milestone reviews to measure emotional recovery',
        'Adaptive progress tracking and relapse prevention kits',
        'Dedicated care coordinator for between-session inquiries',
        'Lifetime access to Blooming Souls self-care resources'
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="how-it-works-section" 
      className="relative py-6 sm:py-8 lg:py-10 bg-gradient-to-b from-white via-[#FAF7FC]/50 to-white overflow-hidden"
    >
      {/* Botanical Silhouette Background Shadows */}
      <div 
        className="absolute -top-12 right-0 w-[420px] h-[500px] pointer-events-none opacity-[0.045] select-none -z-0"
        aria-hidden="true"
      >
        <svg viewBox="0 0 400 500" fill="none" className="w-full h-full text-[#700486]">
          <path 
            d="M30 450 C100 370 180 270 210 90 M210 90 C170 70 140 80 130 110 C120 140 160 150 210 90 M170 210 C120 200 100 230 110 260 C120 290 160 270 170 210 M195 170 C230 150 250 170 240 200 C230 230 200 210 195 170 M140 310 C100 310 90 340 100 370 C110 400 140 370 140 310" 
            stroke="currentColor" 
            strokeWidth="12" 
            strokeLinecap="round" 
          />
        </svg>
      </div>

      <div 
        className="absolute -bottom-16 -left-12 w-[380px] h-[460px] pointer-events-none opacity-[0.04] select-none -z-0"
        aria-hidden="true"
      >
        <svg viewBox="0 0 400 500" fill="none" className="w-full h-full text-[#700486]">
          <path 
            d="M350 480 C270 390 210 260 190 100 M190 100 C230 80 250 100 240 130 C230 160 200 150 190 100 M200 220 C250 210 270 240 260 270 C250 300 210 280 200 220 M180 180 C140 160 130 190 140 220 C150 250 180 220 180 180" 
            stroke="currentColor" 
            strokeWidth="10" 
            strokeLinecap="round" 
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* TOP ROW: HEADLINE + RIGHT SIDE CTA & SCRIPT ACCENT                       */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16 sm:mb-20">
          
          {/* Left Column: Eyebrow + Display Headline + Subtitle */}
          <div className="max-w-2xl text-left space-y-4">
            {/* Eyebrow with horizontal line: — OUR PROCESS */}
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-[2px] bg-[#700486]" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#700486] uppercase font-sans">
                OUR PROCESS
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#1D1D1F] tracking-tight leading-[1.18] font-heading">
              Simple Steps to <br />
              Better <span className="text-[#700486]">Mental Wellbeing</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#555555] leading-relaxed font-normal">
              A clear, compassionate process designed to support you at every step of your mental health journey.
            </p>
          </div>

          {/* Right Column: Book Appointment CTA + Cursive Script Overlay */}
          <div className="flex flex-col items-start lg:items-end self-start pt-1">
            {/* Pill CTA Button */}
            <button
              ref={bookBtnRef}
              onClick={() => onBookAppointment && onBookAppointment()}
              id="process-book-appointment-btn"
              className="group inline-flex items-center gap-3.5 bg-[#700486] hover:bg-[#58036B] text-white pl-7 pr-3 py-3 rounded-full font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-[#700486]/25 transition-all duration-300 hover:scale-102 active:scale-98 cursor-pointer"
            >
              <span>Book Appointment</span>
              <span className="w-8 h-8 rounded-full bg-white text-[#700486] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shadow-xs">
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </span>
            </button>

            {/* Handwritten Cursive Script: "A Calmer Mind, A Brighter You" */}
            <div className="mt-4 text-left lg:text-right pr-2 select-none pointer-events-none">
              <div 
                className="text-[#700486]/80 font-bold text-2xl sm:text-3xl tracking-wide -rotate-3 leading-tight"
              >
                A Calmer Mind <br />
                <span className="ml-4 lg:ml-0 inline-block">A Brighter You</span>
              </div>
              <div className="w-20 h-0.5 bg-[#700486]/35 ml-4 lg:ml-auto mt-1 rounded-full" />
            </div>
          </div>

        </div>


        {/* ========================================================================= */}
        {/* CENTER PROCESS TIMELINE: 4 CIRCULAR STEP CARDS WITH CONNECTING FLOW WAVE   */}
        {/* ========================================================================= */}
        <div className="relative">

          {/* Desktop Curved Organic Connecting Line with Glowing Gradient Wave */}
          <div className="hidden lg:block absolute top-[80px] left-[6%] right-[6%] h-[40px] pointer-events-none z-0">
            <svg 
              className="w-full h-full overflow-visible" 
              viewBox="0 0 1000 60" 
              fill="none" 
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="processWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#700486" stopOpacity="0.25" />
                  <stop offset="35%" stopColor="#700486" stopOpacity="0.5" />
                  <stop offset="70%" stopColor="#700486" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#700486" stopOpacity="0.25" />
                </linearGradient>
              </defs>

              {/* Gentle curved waveform path */}
              <path
                d="M 100 30 C 230 45, 270 15, 380 30 C 490 45, 530 15, 640 30 C 750 45, 790 15, 900 30"
                stroke="url(#processWaveGradient)"
                strokeWidth="2.5"
                strokeDasharray="5 5"
                className="transition-all duration-700"
              />

              {/* Accent Purple Indicator Dots Between Nodes */}
              {/* Dot 1 between Step 1 & 2 */}
              <circle cx="245" cy="38" r="4.5" fill="#700486" />
              <circle cx="233" cy="35" r="2.5" fill="#700486" opacity="0.6" />
              
              {/* Dot 2 between Step 2 & 3 */}
              <circle cx="510" cy="22" r="4.5" fill="#700486" />

              {/* Dot 3 between Step 3 & 4 */}
              <circle cx="765" cy="38" r="4.5" fill="#700486" />
              <circle cx="777" cy="35" r="2.5" fill="#700486" opacity="0.6" />
            </svg>
          </div>

          {/* 4 Step Nodes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className="group flex flex-col items-center text-center cursor-pointer select-none"
                onClick={() => setActiveModalStep(item)}
              >
                
                {/* Circular Node with Double Frame & Top-Left Number Pill */}
                <div className="relative mb-5">
                  
                  {/* Outer Ambient Glow Ring on Hover */}
                  <div className="absolute -inset-2.5 rounded-full bg-radial from-[#700486]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md pointer-events-none" />

                  {/* Outer Circular Frame */}
                  <div className="w-36 h-36 sm:w-40 sm:h-40 lg:w-42 lg:h-42 rounded-full p-2 bg-white border-2 border-[#EADDF0] shadow-lg shadow-[#700486]/5 group-hover:border-[#700486] group-hover:shadow-2xl group-hover:shadow-[#700486]/20 transition-all duration-500 group-hover:-translate-y-2 flex items-center justify-center relative z-10">
                    
                    {/* Inner Masked Image Container */}
                    <div className="w-full h-full rounded-full overflow-hidden relative bg-[#FAF7FC]">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-110"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />

                      {/* Gentle Purple Tint on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#700486]/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Subtle Inset Ring */}
                      <div className="absolute inset-0 rounded-full border border-black/5 pointer-events-none" />
                    </div>
                  </div>

                  {/* Number Badge (01, 02, 03, 04) - Perfectly placed at top-left overlapping circle */}
                  <div className="absolute -top-1.5 -left-1.5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#700486] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center border-2 border-white shadow-md shadow-[#700486]/40 group-hover:scale-110 transition-transform duration-300 z-20">
                    {item.step}
                  </div>

                  {/* Floating Action Pill on hover */}
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-white border border-[#E8DDED] text-[10px] font-bold text-[#700486] opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm whitespace-nowrap z-20">
                    View Details
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg sm:text-xl text-[#1D1D1F] group-hover:text-[#700486] transition-colors duration-300 mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed max-w-[260px] font-normal">
                  {item.description}
                </p>

              </div>
            ))}
          </div>

        </div>


        {/* ========================================================================= */}
        {/* BOTTOM DIVIDER: YOUR WELLBEING MATTERS + HEART ICON                       */}
        {/* ========================================================================= */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-4 w-full max-w-md">
            <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent to-[#700486]/35" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] text-[#700486] uppercase font-sans whitespace-nowrap select-none">
              YOUR WELLBEING MATTERS
            </span>
            <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent to-[#700486]/35" />
          </div>

          <button 
            type="button"
            onClick={() => onBookAppointment && onBookAppointment()}
            className="mt-3.5 text-[#700486] hover:scale-115 transition-transform duration-300 cursor-pointer p-1"
            aria-label="Your wellbeing matters - Book a consultation"
          >
            <Heart className="w-6 h-6 stroke-[1.8] fill-[#700486]/10 hover:fill-[#700486]/30 transition-colors" />
          </button>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* STEP DETAILS MODAL (Smoothly reveals on clicking any circle)              */}
      {/* ========================================================================= */}
      {activeModalStep && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalStep(null)}
        >
          <div 
            className="bg-white w-full max-w-lg rounded-[28px] shadow-2xl border border-[#E8DDED] overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#58036B] text-white p-6 relative">
              <button
                onClick={() => setActiveModalStep(null)}
                className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-semibold text-white/90 mb-2 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{activeModalStep.overlayBadge}</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shrink-0 shadow-md">
                  <img 
                    src={activeModalStep.image} 
                    alt={activeModalStep.imageAlt}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <div className="text-xs text-white/70 font-semibold">Step {activeModalStep.step} of 04</div>
                  <h3 className="text-xl font-bold font-heading text-white">
                    {activeModalStep.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-5 text-sm text-[#333333]">
              <p className="text-sm text-[#555555] leading-relaxed">
                {activeModalStep.details}
              </p>

              {activeModalStep.keyPoints && (
                <div>
                  <h4 className="font-bold text-[#1D1D1F] text-xs uppercase tracking-wider mb-2.5">
                    What to Expect
                  </h4>
                  <div className="space-y-2">
                    {activeModalStep.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#555555]">
                        <CheckCircle2 className="w-4 h-4 text-[#700486] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#FAF7FC] border-t border-[#E8DDED] flex items-center justify-between">
              <button
                onClick={() => setActiveModalStep(null)}
                className="px-4 py-2 rounded-full border border-[#E8DDED] text-xs font-semibold text-[#555555] hover:bg-white transition-colors cursor-pointer"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const stepTitle = activeModalStep.title;
                  setActiveModalStep(null);
                  if (onBookAppointment) {
                    onBookAppointment(stepTitle);
                  }
                }}
                className="px-6 py-2.5 rounded-full bg-[#700486] hover:bg-[#58036B] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#700486]/20 transition-all cursor-pointer flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Proceed to Consultation →</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
