import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  CheckCircle, 
  Star, 
  Shield, 
  Heart, 
  Brain, 
  Users, 
  Award, 
  GraduationCap, 
  HeartHandshake,
  Stethoscope,
  Clock,
  Play,
  X,
  FileCheck,
  Video
} from 'lucide-react';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { HomeServicesSection } from '../components/HomeServicesSection';
import { DoctorCard } from '../components/DoctorCard';
import { CourseCard } from '../components/CourseCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { GoogleReviewsSection } from '../components/GoogleReviewsSection';
import { BlogCard } from '../components/BlogCard';
import { ProcessSection } from '../components/ProcessStep';
import { HomeProcessSection } from '../components/HomeProcessSection';
import { HomeProfessionalsSection } from '../components/HomeProfessionalsSection';
import { HomeAboutIntroSection } from '../components/HomeAboutIntroSection';
import { HomeEventsSection } from '../components/HomeEventsSection';
import { gsap, ScrollTrigger, isReducedMotion, isMobile, GSAP_EASING } from '../animations/gsapSetup';
import { useMagneticButton } from '../animations/useMagneticButton';

import { services } from '../data/services';
import { courses } from '../data/courses';
import { professionals, Professional } from '../data/professionals';
import { testimonials } from '../data/testimonials';
import { blogs } from '../data/blogs';
import { processSteps } from '../data/process';

interface HomeProps {
  onOpenQuickConnect: (service?: string, doctor?: string) => void;
  onViewDoctorBio: (doctor: Professional) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenQuickConnect, onViewDoctorBio }) => {
  const [isHowWeWorkOpen, setIsHowWeWorkOpen] = useState(false);

  // GSAP Hero Animation References
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const heroBadgeRef = useRef<HTMLDivElement | null>(null);
  const heroDescRef = useRef<HTMLParagraphElement | null>(null);
  const heroCtaRef = useRef<HTMLDivElement | null>(null);
  const heroSocialRef = useRef<HTMLDivElement | null>(null);
  const heroDoctorCircleRef = useRef<HTMLDivElement | null>(null);
  const heroDoctorTagRef = useRef<HTMLDivElement | null>(null);
  const heroOrbitRef = useRef<SVGSVGElement | null>(null);
  const heroBadgeBrainRef = useRef<HTMLDivElement | null>(null);
  const heroBadgeHeartRef = useRef<HTMLDivElement | null>(null);

  // Subtle magnetic cursor effect on CTA button (desktop only)
  const heroScheduleBtnRef = useMagneticButton<HTMLButtonElement>({ strength: 6, speed: 0.3 });

  // Main GSAP Hero Entrance Timeline
  useEffect(() => {
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });

      // 1. Hero badge
      if (heroBadgeRef.current) {
        tl.fromTo(
          heroBadgeRef.current,
          { opacity: 0, y: 22, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: GSAP_EASING.calm }
        );
      }

      // 2. Main heading line-by-line with subtle blur reduction
      tl.fromTo(
        '.hero-split-line',
        { opacity: 0, y: 38, filter: 'blur(4px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.85,
          stagger: 0.16,
          ease: GSAP_EASING.calm,
        },
        '-=0.35'
      );

      // 3. Description
      if (heroDescRef.current) {
        tl.fromTo(
          heroDescRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out' },
          '-=0.45'
        );
      }

      // 4. CTA buttons & Social Proof
      if (heroCtaRef.current) {
        tl.fromTo(
          heroCtaRef.current.children,
          { opacity: 0, y: 18, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.12, ease: 'power2.out' },
          '-=0.35'
        );
      }

      if (heroSocialRef.current) {
        tl.fromTo(
          heroSocialRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
          '-=0.25'
        );
      }

      // 5. Doctor image reveal using clip-path & subtle scale (1–1.4s with smooth easing)
      if (heroDoctorCircleRef.current) {
        tl.fromTo(
          heroDoctorCircleRef.current,
          { opacity: 0, scale: 1.08, clipPath: 'inset(0% 0% 100% 0%)' },
          {
            opacity: 1,
            scale: 1,
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.25,
            ease: 'power3.out',
          },
          '-=0.55'
        );
      }

      if (heroDoctorTagRef.current) {
        tl.fromTo(
          heroDoctorTagRef.current,
          { opacity: 0, y: 12, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: 'back.out(1.4)' },
          '-=0.4'
        );
      }

      // 6. Circular orbit continuous slow rotation (30-40s, repeat -1, ease: none)
      if (heroOrbitRef.current) {
        gsap.to(heroOrbitRef.current, {
          rotation: 360,
          repeat: -1,
          ease: 'none',
          duration: 36,
          transformOrigin: '50% 50%',
        });
      }

      // 7. Floating mental health badges around hero (subtle organic floating: y: 8-15px, sine.inOut, yoyo)
      if (heroBadgeBrainRef.current) {
        gsap.fromTo(
          heroBadgeBrainRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.5)' }
        );
        gsap.to(heroBadgeBrainRef.current, {
          y: -11,
          duration: 3.2,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
          delay: 0.8,
        });
      }

      if (heroBadgeHeartRef.current) {
        gsap.fromTo(
          heroBadgeHeartRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.5)' }
        );
        gsap.to(heroBadgeHeartRef.current, {
          y: 11,
          duration: 3.7,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
          delay: 1.1,
        });
      }
    }, heroSectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="space-y-4 sm:space-y-8 lg:space-y-10 pb-10">
      {/* ========================================================================= */}
      {/* SECTION 1: HERO SECTION MATCHING UPLOADED REFERENCE DESIGN                */}
      {/* ========================================================================= */}
      <section 
        ref={heroSectionRef}
        id="hero-section"
        className="relative pt-2 sm:pt-6 pb-10 sm:pb-8 overflow-hidden bg-[#FAF7FC]"
      >
        {/* Organic curved background wave matching screenshot in primary brand purple */}
        <div 
          className="absolute top-0 right-0 hidden lg:block lg:w-[54%] h-full bg-gradient-to-br from-[#8915A2] via-[#700486] to-[#58036B] rounded-bl-[260px] pointer-events-none -z-0 opacity-95 transition-all shadow-2xl shadow-[#700486]/10"
        />

        {/* Organic curved background wave on mobile sweeping behind the doctor circle at bottom */}
        <div className="absolute inset-0 w-full h-full lg:hidden pointer-events-none -z-0 overflow-hidden">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full filter drop-shadow-[0_-6px_18px_rgba(112,4,134,0.18)]"
          >
            <defs>
              <linearGradient id="mobileHeroWaveGrad" x1="0.8" y1="0.2" x2="0.2" y2="1">
                <stop offset="0%" stopColor="#7A1D8F" />
                <stop offset="35%" stopColor="#700486" />
                <stop offset="70%" stopColor="#58036B" />
                <stop offset="100%" stopColor="#4A025A" />
              </linearGradient>
            </defs>
            <path
              d="M 100 42 C 90 53, 70 59, 48 62 C 26 64, 12 63, 0 65 L 0 100 L 100 100 Z"
              fill="url(#mobileHeroWaveGrad)"
            />
          </svg>
        </div>

        {/* Soft atmospheric lavender & purple glow balancing the left canvas (Desktop only) */}
        <div className="absolute -top-10 -left-10 w-[420px] h-[420px] rounded-full bg-[#F3EAF6]/80 blur-3xl pointer-events-none -z-0 hidden lg:block" />
        <div className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full bg-[#FAF7FC] blur-2xl pointer-events-none -z-0 hidden lg:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-6 items-center">
            
            {/* Left Column: Content matching screenshot typography & layout */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4 lg:space-y-5 text-left">
              {/* Eyebrow badge matching layout */}
              <div 
                ref={heroBadgeRef}
                className="inline-flex items-center gap-1.5 px-1.5 py-1 rounded-full bg-white/85 backdrop-blur-xl border border-[#CFA6D8] shadow-[0_6px_18px_rgba(112,4,134,0.10),inset_0_1px_0_rgba(255,255,255,0.95)]"
              >
                <span className="bg-gradient-to-br from-[#8915A2] to-[#58036B] text-white font-extrabold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-[0.12em] shadow-[0_2px_6px_rgba(88,3,107,0.22)]">
                  New
                </span>
                <span className="text-[#58036B] font-semibold text-xs sm:text-sm tracking-[-0.01em] pr-1.5">
                  Compassionate Psychiatric & Wellness Care
                </span>
              </div>

              {/* Display Headline matching exact user specification with word/line stagger */}
              <h1 className="font-heading text-[clamp(34px,8.8vw,42px)] sm:text-[clamp(42px,5vw,56px)] lg:text-[clamp(48px,5vw,72px)] font-extrabold text-[#3B0A4B] tracking-tight leading-[1.08] sm:leading-[1.04]">
                <span className="hero-split-line block">
                  <span className="text-[#1D1D1F] [text-shadow:3px_3px_0_rgba(211,163,216,0.7),0_5px_14px_rgba(29,29,31,0.12)]">
                    Care for Your Mind,
                  </span>
                </span>
                <span className="hero-split-line block">
                  <span className="relative block sm:inline-block text-[#7A2C82] [text-shadow:3px_3px_0_rgba(211,163,216,0.85),0_5px_14px_rgba(112,4,134,0.16)]">
                    When You Need It
                  </span>{' '}
                  <span className="block sm:inline-block text-[#1D1D1F] [text-shadow:3px_3px_0_rgba(211,163,216,0.7),0_5px_14px_rgba(29,29,31,0.12)]">
                    the Most
                  </span>
                </span>
              </h1>

              {/* Subtitle matching exact user specification */}
              <p 
                ref={heroDescRef}
                className="text-sm sm:text-base lg:text-[17px] text-[#58036B]/85 leading-relaxed max-w-lg font-normal"
              >
                Friendly Private Psychiatrists, Psychotherapists &amp; Wellness Specialists delivering exceptional mental health care.
              </p>

              {/* Dual CTA Buttons matching screenshot layout */}
              <div 
                ref={heroCtaRef}
                className="flex flex-wrap items-center gap-4 pt-1 sm:pt-2"
              >
                {/* Primary Pill Button with circular white arrow icon */}
                <button
                  ref={heroScheduleBtnRef}
                  id="hero-schedule-btn"
                  onClick={() => onOpenQuickConnect()}
                  className="group flex items-center gap-3 bg-[#700486] hover:bg-[#58036B] text-white pl-6 pr-2.5 py-3 rounded-full font-bold text-sm tracking-wide shadow-lg shadow-[#700486]/30 transition-all duration-300 hover:scale-102 active:scale-98 cursor-pointer"
                >
                  <span>Book Appointment</span>
                  <div className="w-8 h-8 rounded-full bg-white text-[#700486] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shadow-xs">
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {/* Secondary CTA "Learn More" play button with underlined text */}
                <button
                  onClick={() => setIsHowWeWorkOpen(true)}
                  aria-label="Learn more about how we work"
                  className="group flex items-center gap-3 py-2 cursor-pointer transition-transform hover:translate-x-0.5"
                >
                  <div className="w-10 h-10 rounded-full bg-[#8915A2] text-white flex items-center justify-center shadow-md shadow-[#8915A2]/20 group-hover:scale-105 transition-transform">
                    <Play className="w-4 h-4 fill-white text-transparent ml-0.5" />
                  </div>
                  <span className="font-bold text-[#58036B] underline underline-offset-4 text-sm sm:text-base group-hover:text-[#700486] transition-colors">
                    Learn More
                  </span>
                </button>
              </div>

              {/* Social Proof Review Stack matching screenshot */}
              <div 
                ref={heroSocialRef}
                className="flex pt-2 sm:pt-4 items-center gap-3"
              >
                {/* Overlapping client avatars + 1K badge */}
                <div className="flex items-center -space-x-2.5 overflow-hidden">
                  {[
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Verified Patient"
                      className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white object-cover shadow-2xs"
                    />
                  ))}
                  <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-[#700486] text-white text-[11px] font-bold flex items-center justify-center ring-2 ring-white shadow-2xs">
                    1K
                  </div>
                </div>

                {/* Stars + 1k Satisfied Reviews text */}
                <div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-[11px] font-bold text-[#58036B] mt-0.5 tracking-tight">
                    1k Satisfied Reviews
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Doctor Hero with Concentric Reticle Graphic Rings & Floating Mental Health Badges */}
            <div className="lg:col-span-5 relative flex items-center justify-center pt-8 pb-14 sm:py-12 lg:py-0">
              <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] lg:w-[460px] lg:h-[460px] xl:w-[490px] xl:h-[490px] aspect-square shrink-0 flex items-center justify-center">

                {/* Concentric Technical Reticle Rings rotating continuously */}
                <div 
                  className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none animate-[spin_36s_linear_infinite]"
                  style={{ transformOrigin: 'center' }}
                >
                  {/* Outer Dashed Segmented Circle with radial tick lines */}
                  <svg 
                    ref={heroOrbitRef}
                    className="w-full h-full text-black lg:text-white/75"
                    viewBox="0 0 500 500" 
                    preserveAspectRatio="xMidYMid meet"
                    fill="none"
                  >
                    {/* Concentric Circle 1 (Outer line) */}
                    <circle cx="250" cy="250" r="215" stroke="currentColor" strokeWidth="2.5" strokeDasharray="14 10" opacity="0.85" />
                    
                    {/* Concentric Circle 2 (Middle line) */}
                    <circle cx="250" cy="250" r="185" stroke="currentColor" strokeWidth="2" opacity="0.9" />
                    
                    {/* Concentric Circle 3 (Inner dashed line) */}
                    <circle cx="250" cy="250" r="150" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.75" />

                    {/* Radial Crosshairs & Reticle Ticks matching screenshot */}
                    <line x1="35" y1="250" x2="65" y2="250" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="435" y1="250" x2="465" y2="250" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="250" y1="35" x2="250" y2="65" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="250" y1="435" x2="250" y2="465" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

                    {/* Angled ticks at 45 degrees */}
                    <line x1="98" y1="98" x2="120" y2="120" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="380" y1="380" x2="402" y2="402" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="402" y1="98" x2="380" y2="120" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="120" y1="380" x2="98" y2="402" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Floating Badge 1: Top Left (Brain/Mind Icon in Dark Purple Circle) */}
                <div 
                  ref={heroBadgeBrainRef}
                  className="absolute top-[20%] left-[2%] sm:left-[4%] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#58036B] border-2 border-white shadow-xl flex items-center justify-center text-white z-20 hover:scale-110 transition-transform duration-300"
                  title="Specialized Psychiatry & Psychotherapy"
                >
                  <Brain className="w-6 h-6 sm:w-7 sm:h-7 stroke-white" />
                </div>

                {/* Floating Badge 2: Bottom Right (HeartHandshake / Wellness Icon in Dark Purple Circle) */}
                <div 
                  ref={heroBadgeHeartRef}
                  className="absolute bottom-[16%] right-[2%] sm:right-[4%] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#58036B] border-2 border-white shadow-xl flex items-center justify-center text-white z-20 hover:scale-110 transition-transform duration-300"
                  title="Emotional Wellbeing & Holistic Counselling"
                >
                  <HeartHandshake className="w-6 h-6 sm:w-7 sm:h-7 stroke-white" />
                </div>

                {/* Primary Doctor Portrait in Circular Design: Dr. Sadaf Malik */}
                <div className="relative z-10 w-[76%] h-[76%] aspect-square flex items-center justify-center">
                  <div 
                    ref={heroDoctorCircleRef}
                    className="w-full h-full aspect-square rounded-full overflow-hidden border-4 sm:border-[6px] border-white/95 shadow-2xl relative bg-[#FAF7FC] group"
                    style={{ willChange: 'clip-path, transform, opacity' }}
                  >
                    <img
                      src="/images/sadaf-malik.webp"
                      alt="Dr. Sadaf Malik - Lead Consultant Psychiatrist & Medical Director at Blooming Souls"
                      className="w-full h-full object-cover object-top filter brightness-102 contrast-102 transition-transform duration-500 group-hover:scale-105"
                      loading="eager"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.fallback) {
                          target.dataset.fallback = 'true';
                          target.src = 'https://bloomingsouls.in/wp-content/uploads/2025/12/sadaf-saeed.webp';
                        }
                      }}
                    />
                    {/* Subtle soft gradient fade at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#58036B]/30 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Doctor Name Tag Badge floating at bottom of circle */}
                  <div 
                    ref={heroDoctorTagRef}
                    className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#8915A2]/30 shadow-xl flex items-center gap-2 whitespace-nowrap z-20"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-[#58036B]">Dr. Sadaf Malik</span>
                    <span className="text-[10px] sm:text-xs text-[#700486] font-medium hidden xs:inline">• Psychiatrist</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* "How We Work" Interactive Walkthrough Modal */}
      {isHowWeWorkOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setIsHowWeWorkOpen(false)}
        >
          <div 
            className="bg-white w-full max-w-2xl rounded-[32px] shadow-2xl border border-[#E8DDED] overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#58036B] text-white p-6 relative">
              <button
                onClick={() => setIsHowWeWorkOpen(false)}
                className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-semibold text-white/90 mb-2 backdrop-blur-sm">
                <Video className="w-3.5 h-3.5" />
                Mental Health Care Walkthrough
              </div>
              <h3 className="font-heading text-2xl font-bold">
                How We Work at Blooming Souls
              </h3>
              <p className="text-white/80 text-xs sm:text-sm mt-1">
                Your seamless 4-step journey toward emotional balance, clarity, and peace of mind.
              </p>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#333333]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#FAF7FC] border border-[#E8DDED] space-y-2">
                  <div className="w-8 h-8 rounded-full bg-[#700486] text-white font-bold flex items-center justify-center text-xs">
                    01
                  </div>
                  <h4 className="font-bold text-[#58036B] text-base">
                    1. Consultation &amp; Triage
                  </h4>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    We listen attentively to your emotional concerns, personal journey, and immediate goals in a calm, judgment-free space.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF7FC] border border-[#E8DDED] space-y-2">
                  <div className="w-8 h-8 rounded-full bg-[#700486] text-white font-bold flex items-center justify-center text-xs">
                    02
                  </div>
                  <h4 className="font-bold text-[#58036B] text-base">
                    2. Psychological Assessment
                  </h4>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    Comprehensive psychiatric and psychometric evaluations pinpoint underlying factors with clinical precision.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF7FC] border border-[#E8DDED] space-y-2">
                  <div className="w-8 h-8 rounded-full bg-[#700486] text-white font-bold flex items-center justify-center text-xs">
                    03
                  </div>
                  <h4 className="font-bold text-[#58036B] text-base">
                    3. Tailored Therapy Plan
                  </h4>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    Our psychiatrists and psychotherapists create an individualized program combining psychotherapy, mindfulness, and lifestyle support.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF7FC] border border-[#E8DDED] space-y-2">
                  <div className="w-8 h-8 rounded-full bg-[#700486] text-white font-bold flex items-center justify-center text-xs">
                    04
                  </div>
                  <h4 className="font-bold text-[#58036B] text-base">
                    4. Continuous Healing &amp; Support
                  </h4>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    Ongoing therapeutic sessions, coping toolkits, and proactive care to maintain lasting resilience and wellbeing.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-[#FAF7FC] border-t border-[#E8DDED] flex items-center justify-between gap-3">
              <button
                onClick={() => setIsHowWeWorkOpen(false)}
                className="px-4 py-2 rounded-full border border-[#E8DDED] text-xs font-semibold text-[#555555] hover:bg-white transition-colors cursor-pointer"
              >
                Close
              </button>

              <button
                onClick={() => {
                  setIsHowWeWorkOpen(false);
                  onOpenQuickConnect();
                }}
                className="px-5 py-2 rounded-full bg-[#700486] hover:bg-[#58036B] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
              >
                Book Appointment →
              </button>
            </div>
          </div>
        </div>
      )}


      {/* ========================================================================= */}
      {/* SECTION 2: TRUST / INTRODUCTION (BUILDING A HEALTHIER MIND, ONE STEP)      */}
      {/* ========================================================================= */}
      <HomeAboutIntroSection
        onBookConsultation={() => onOpenQuickConnect()}
      />

      {/* ========================================================================= */}
      {/* SECTION 3: COMPREHENSIVE SERVICES CARE (MATCHING USER SCREENSHOT)         */}
      {/* ========================================================================= */}
      <HomeServicesSection
        onBookService={(title) => onOpenQuickConnect(title)}
        onWatchApproach={() => setIsHowWeWorkOpen(true)}
      />

      {/* ========================================================================= */}
      {/* SECTION 4: WHY BLOOMING SOULS                                             */}
      {/* ========================================================================= */}
      <section id="why-blooming-souls-section" className="bg-[#FAF7FC] py-6 sm:py-8 lg:py-10 border-y border-[#E8DDED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: 4 Feature Cards with circular numbers */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                badge="The Blooming Souls Distinction"
                badgeIcon={<Shield className="w-3.5 h-3.5" />}
                title="Care That"
                highlightedText="Understands You"
                description="We avoid assembly-line therapy. Our core philosophy centers on deep medical understanding, unconditional empathy, and personalized pacing."
                align="left"
                className="mb-8"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    num: '01',
                    title: 'Evidence-Based Medicine',
                    desc: 'Scientifically validated psychiatric assessments, minimal effective pharmacological dosing, and gold-standard clinical protocols.'
                  },
                  {
                    num: '02',
                    title: 'Compassionate Listening',
                    desc: 'A dedicated, empathetic therapeutic presence that hears your full story without judgment, rush, or clinical detachment.'
                  },
                  {
                    num: '03',
                    title: 'Safe Confidential Space',
                    desc: 'Zero-breach privacy adherence aligned with the Mental Healthcare Act 2017 and strict international doctor-patient confidentiality.'
                  },
                  {
                    num: '04',
                    title: 'Holistic Mind-Body Approach',
                    desc: 'Integrating neurobiology, psychological therapy, sleep hygiene, somatic calming drills, and lifestyle restoration.'
                  }
                ].map((item) => (
                  <div
                    key={item.num}
                    className="p-6 rounded-[24px] bg-white border border-[#E8DDED] shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#F3EAF6] text-[#700486] font-bold text-sm flex items-center justify-center mb-4 group-hover:bg-[#700486] group-hover:text-white transition-colors">
                      {item.num}
                    </div>
                    <h3 className="font-heading font-bold text-lg text-[#1D1D1F] mb-2 group-hover:text-[#700486] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#666666] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Therapist in Consultation Photo */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="rounded-[36px] overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                    alt="Doctor discussing health calmly"
                    className="w-full h-[460px] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-5 right-4 bg-white p-4 rounded-2xl shadow-xl border border-[#E8DDED] max-w-[240px]">
                  <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold mb-1">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Bio-Psycho-Social Care</span>
                  </div>
                  <p className="text-[11px] text-[#666666]">
                    Combining clinical science with holistic emotional empathy.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: HOW IT WORKS (STREAMLINED PATIENT EXPERIENCE)                   */}
      {/* ========================================================================= */}
      <HomeProcessSection
        onBookAppointment={(stepContext) => onOpenQuickConnect(stepContext)}
      />

      {/* ========================================================================= */}
      {/* SECTION 6: MEET OUR PROFESSIONALS (STREAMLINED DOCTORS SECTION)           */}
      {/* ========================================================================= */}
      <HomeProfessionalsSection
        onBookConsultation={(name) => onOpenQuickConnect(undefined, name)}
        onViewProfile={onViewDoctorBio}
      />

      {/* ========================================================================= */}
      {/* SECTION 7: SPECIALIZED PROGRAMS / COURSES                                 */}
      {/* ========================================================================= */}
      <section id="courses-preview-section" className="bg-[#FAF7FC] py-6 sm:py-8 lg:py-10 border-y border-[#E8DDED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Courses & Programs"
            badgeIcon={<GraduationCap className="w-3.5 h-3.5" />}
            title="Featured Certificate"
            highlightedText="Courses & Programs"
            align="center"
            className="mb-6 sm:mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {courses.slice(0, 6).map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onEnroll={() => onOpenQuickConnect(`Course Enrollment: ${course.title}`)}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button
              variant="secondary"
              size="lg"
              to="/courses"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Explore All 8 Courses & Programs
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: EVENTS SLIDER (MATCHING SCREENSHOT 2)                          */}
      {/* ========================================================================= */}
      <HomeEventsSection onOpenQuickConnect={onOpenQuickConnect} />

      {/* ========================================================================= */}
      {/* SECTION 8: RELATIONSHIP SUPPORT                                           */}
      {/* ========================================================================= */}
      <section id="relationship-feature-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-gradient-to-br from-[#FAF7FC] via-[#F3EAF6]/80 to-white border border-[#E8DDED] p-6 sm:p-8 lg:p-10 shadow-sm overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#700486] border border-[#E8DDED] text-xs font-semibold">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Couples & Family Care</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1F] tracking-tight leading-[1.15]">
                Better Understanding. <br />
                <span className="text-[#700486]">Healthier Relationships.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
                Even the strongest relationships encounter communication impasses, trust disruptions, or parenting tensions. Our certified therapists provide a balanced, neutral sanctuary where both voices are respected.
              </p>

              {/* Service tags */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {[
                  'Couples Counselling',
                  'Pre-Marital Counselling',
                  'Communication Support',
                  'Conflict Resolution',
                  'Emotional Connection',
                  'Family Dynamics'
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 rounded-full bg-white border border-[#E8DDED] text-xs font-semibold text-[#1D1D1F] shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                <Button
                  variant="primary"
                  size="md"
                  to="/relationship"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Explore Relationship Support
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-[30px] overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&w=800&q=80"
                  alt="Couple holding hands in peaceful therapy"
                  className="w-full h-80 sm:h-96 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: INTERNSHIP PROMOTION                                           */}
      {/* ========================================================================= */}
      <section id="internship-promo-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-[#700486] text-white p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden">
          
          {/* Subtle background graphics */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 rounded-full bg-black/15 blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 text-[#FAF7FC] text-xs font-semibold backdrop-blur-sm border border-white/20">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Clinical Internship Program</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Learn From Experience. <br />
                Build Your Future in Mental Health.
              </h2>

              <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-2xl">
                Bridge the gap between theoretical textbooks and real psychiatric and psychological practice. Gain immersive case-based exposure, clinical mentorship, and career-defining credentials.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F3EAF6] flex-shrink-0" />
                  <span>Practical Clinical Exposure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F3EAF6] flex-shrink-0" />
                  <span>Doctor Mentorship</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F3EAF6] flex-shrink-0" />
                  <span>Case-Based Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F3EAF6] flex-shrink-0" />
                  <span>Verified Certificate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F3EAF6] flex-shrink-0" />
                  <span>Flexible Batches</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F3EAF6] flex-shrink-0" />
                  <span>Career Guidance</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <Button
                variant="white"
                size="lg"
                to="/internship"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="w-full sm:w-auto shadow-xl text-center"
              >
                Explore Internship
              </Button>
              <span className="text-xs text-white/70 mt-3">
                Applications open for upcoming cohorts
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 11: BLOG INSIGHTS                                                 */}
      {/* ========================================================================= */}
      <section id="blog-preview-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Clinical Articles & Mind Care"
          badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
          title="Insights for a"
          highlightedText="Healthier Mind"
          description="Practical mental health tips, psychiatric knowledge, and relationship insights written by our practising clinical specialists."
          align="center"
          className="mb-6 sm:mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogs.slice(0, 3).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button
            variant="secondary"
            size="lg"
            to="/blog"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            Read All Articles
          </Button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 12: GOOGLE REVIEWS CAROUSEL (Directly Above Footer)              */}
      {/* ========================================================================= */}
      <GoogleReviewsSection />
    </div>
  );
};
