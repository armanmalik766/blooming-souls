import React, { useEffect, useRef, useState } from 'react';
import { 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  ArrowRight,
  CheckCircle2,
  Calendar,
  ChevronDown,
  Brain,
  Compass,
  Feather,
  Leaf,
  Lock,
  Clock,
  Activity,
  FileCheck,
  Star,
  Users
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { DoctorCard } from '../components/DoctorCard';
import { professionals, Professional } from '../data/professionals';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { gsap, ScrollTrigger, SplitText, isReducedMotion, isMobile } from '../animations/gsapSetup';

interface AboutProps {
  onOpenQuickConnect: (service?: string, doctor?: string) => void;
  onViewDoctorBio: (doctor: Professional) => void;
}

interface SpecializationItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  modalities: string[];
}

const SPECIALIZATIONS_DATA: SpecializationItem[] = [
  {
    id: 'anxiety',
    title: 'Anxiety & Panic Spectrum Disorders',
    subtitle: 'Generalized Anxiety, Panic Attacks, Agoraphobia & Health Anxiety',
    description: 'We dismantle the acute physiological loops of fear and catastrophic rumination using bio-behavioral regulation, cognitive reframing, and gentle somatic grounding.',
    modalities: ['Cognitive Restructuring', 'Somatic Nervous System Resets', 'Exposure Therapy', 'Mindfulness Grounding']
  },
  {
    id: 'depression',
    title: 'Depression & Affective Mood Disorders',
    subtitle: 'Major Depression, Persistent Dysthymia & Emotional Numbness',
    description: 'Going beyond passive symptom suppression, our clinical approach reconnects you with vitality, self-compassion, cognitive clarity, and restorative daily behavioral rhythms.',
    modalities: ['Behavioral Activation', 'Emotionally Focused Interventions', 'Cognitive Behavioral Therapy (CBT)', 'Mindful Pharmacotherapy']
  },
  {
    id: 'trauma',
    title: 'Trauma, PTSD & Somatic Recovery',
    subtitle: 'Childhood Neglect, Acute Traumatic Events & Relational Wounds',
    description: 'Trauma is stored in the nervous system as much as memory. We guide clients through deep emotional safety, narrative processing, and somatic settling without re-traumatization.',
    modalities: ['Trauma-Informed Psychotherapy', 'Somatic Experiencing', 'Polyvagal Stabilization', 'Narrative Exposure']
  },
  {
    id: 'relationships',
    title: 'Relationship, Marriage & Family Dynamics',
    subtitle: 'Intimacy Crises, Communication Breakdown & Codependency',
    description: 'Transforming painful conflict cycles into secure emotional bonds. We help partners restore emotional attunement, clear boundaries, and empathetic mutual validation.',
    modalities: ['Emotionally Focused Therapy (EFT)', 'Gottman Method Principles', 'Systemic Relational Counseling', 'Boundary Restoration']
  },
  {
    id: 'ocd',
    title: 'OCD & Intrusive Thought Management',
    subtitle: 'Obsessive Thinking, Mental Neutralization & Checking Compulsions',
    description: 'Specialized gold-standard exposure and response prevention protocol to break intrusive thought loops and restore cognitive autonomy and daily peace of mind.',
    modalities: ['Exposure & Response Prevention (ERP)', 'Inference-Based CBT', 'Metacognitive Conditioning', 'Acceptance Training']
  },
  {
    id: 'burnout',
    title: 'Executive Burnout & Workplace Stress',
    subtitle: 'Occupational Exhaustion, Imposter Syndrome & Decision Fatigue',
    description: 'Tailored for professionals, executives, and clinicians facing persistent exhaustion, chronic stress, and existential disillusionment with professional demands.',
    modalities: ['Stress Inoculation Training', 'Values Realignment', 'Somatic Decompression', 'Executive Psychological Coaching']
  },
  {
    id: 'adolescent',
    title: 'Adolescent & Young Adult Wellbeing',
    subtitle: 'Academic Stress, Identity Formation & Emotional Volatility',
    description: 'Compassionate, non-judgmental spaces for adolescents and college students navigating performance anxiety, peer dynamics, self-worth, and life transitions.',
    modalities: ['Dialectical Behavioral Skills', 'Solution-Focused Brief Therapy', 'Family Systems Support', 'Self-Esteem Architecture']
  },
  {
    id: 'grief',
    title: 'Grief, Loss & Psycho-Oncology',
    subtitle: 'Bereavement, Chronic Illness Support & Caregiver Fatigue',
    description: 'Specialized psycho-oncological care and bereavement therapy offering deep dignity, existential holding, and emotional strength for patients and caregiving families.',
    modalities: ['Psycho-Oncology Support', 'Dignity Therapy', 'Grief Processing', 'Caregiver Resilience Coaching']
  }
];

export const About: React.FC<AboutProps> = ({ onOpenQuickConnect, onViewDoctorBio }) => {
  const [expandedSpec, setExpandedSpec] = useState<string | null>('anxiety');

  // Master container ref for GSAP context cleanup
  const pageContainerRef = useRef<HTMLDivElement>(null);

  // Section Refs for GSAP
  const heroRef = useRef<HTMLElement>(null);
  const heroBadgeRef = useRef<HTMLDivElement>(null);
  const heroHeadingRef = useRef<HTMLHeadingElement>(null);
  const heroParagraphRef = useRef<HTMLDivElement>(null);
  const heroImageContainerRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);
  const heroBadgeFloatRef = useRef<HTMLDivElement>(null);

  // Section 2: Why Blooming Souls Works
  const whyWorksRef = useRef<HTMLElement>(null);
  const whyWorksItemsRef = useRef<HTMLDivElement>(null);
  const decorativeFloatingRef = useRef<HTMLDivElement>(null);

  // Section 3: Founder Section
  const founderSectionRef = useRef<HTMLElement>(null);
  const founderImageContainerRef = useRef<HTMLDivElement>(null);
  const founderImageRef = useRef<HTMLImageElement>(null);
  const founderContentRef = useRef<HTMLDivElement>(null);

  // Section 4: Qualifications & Milestones
  const qualificationsRef = useRef<HTMLElement>(null);

  // Section 5: Specializations Accordion
  const specializationsRef = useRef<HTMLElement>(null);

  // Section 6: Therapy Philosophy
  const philosophyRef = useRef<HTMLElement>(null);

  // Section 7: Clinical Team
  const teamRef = useRef<HTMLElement>(null);

  // Section 8: Final CTA
  const ctaRef = useRef<HTMLElement>(null);

  // Get Founder details from data
  const founderData = professionals.find((p) => p.isFounder || p.id === 'sadaf-malik') || {
    id: 'sadaf-malik',
    name: 'SADAF MALIK',
    designation: 'Founder and Psychologist',
    qualification: 'M.Sc. Clinical Psychology, Trauma & Relationship Specialist',
    specialization: 'Evidence-Based Psychotherapy, Trauma Recovery & Holistic Wellbeing',
    experience: '12+ Years Clinical Leadership',
    image: '/images/sadaf-malik.webp',
    languages: ['English', 'Hindi', 'Urdu'],
    bio: 'Sadaf Malik is the founder of Blooming Souls and one of India’s most trusted psychologists, renowned for her scientific rigor, uncompromising ethics, and compassionate clinical style. Her experience includes working at Rashtrapati Bhawan with Dr. M. Wali (former Presidential Physician of India) and training under Presidential Gold Medalist Ms. Gagandeep Kaur.',
    focusAreas: ['Trauma & PTSD', 'Depression Care', 'Relationship Counselling', 'Executive Burnout'],
    availability: 'Mon - Fri (10:00 AM - 7:00 PM)',
    isFounder: true
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reduced = isReducedMotion();
    const mobile = isMobile();

    const ctx = gsap.context(() => {
      // -------------------------------------------------------------
      // 1. ABOUT HERO ANIMATION
      // -------------------------------------------------------------
      if (heroRef.current) {
        const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Badge draw / reveal
        if (heroBadgeRef.current) {
          heroTl.fromTo(
            heroBadgeRef.current,
            { opacity: 0, x: -24, filter: 'blur(4px)' },
            { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.8 }
          );
        }

        // Heading SplitText or Line Reveal
        if (heroHeadingRef.current) {
          try {
            const split = new SplitText(heroHeadingRef.current, { type: 'lines,words' });
            heroTl.fromTo(
              split.lines,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 1.0,
                stagger: 0.12,
                ease: 'power3.out'
              },
              '-=0.5'
            );
          } catch {
            // Fallback if SplitText cannot parse DOM
            heroTl.fromTo(
              heroHeadingRef.current,
              { opacity: 0, y: 40 },
              { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' },
              '-=0.5'
            );
          }
        }

        // Paragraph stagger
        if (heroParagraphRef.current) {
          const paragraphs = heroParagraphRef.current.querySelectorAll('.hero-anim-item');
          heroTl.fromTo(
            paragraphs,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out' },
            '-=0.6'
          );
        }

        // Team image clip-path reveal
        if (heroImageRef.current) {
          heroTl.fromTo(
            heroImageRef.current,
            {
              clipPath: 'inset(0 0 100% 0)',
              scale: 1.08,
              opacity: 0
            },
            {
              clipPath: 'inset(0 0 0% 0)',
              scale: 1,
              opacity: 1,
              duration: 1.3,
              ease: 'power3.inOut'
            },
            '-=1.0'
          );
        }

        // Floating social proof badge
        if (heroBadgeFloatRef.current) {
          heroTl.fromTo(
            heroBadgeFloatRef.current,
            { opacity: 0, y: 24, scale: 0.94 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power2.out' },
            '-=0.5'
          );
        }

        // Subtle Parallax on Hero Image on Scroll
        if (!reduced && !mobile && heroImageContainerRef.current) {
          gsap.to(heroImageContainerRef.current, {
            y: 25,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1
            }
          });
        }
      }

      // -------------------------------------------------------------
      // 2. WHY BLOOMING SOULS WORKS (STAGGERED EDITORIAL STORYTELLING)
      // -------------------------------------------------------------
      if (whyWorksRef.current) {
        // Decorative floating calm element
        if (!reduced && decorativeFloatingRef.current) {
          gsap.to(decorativeFloatingRef.current, {
            y: 12,
            rotation: 4,
            repeat: -1,
            yoyo: true,
            duration: 5,
            ease: 'sine.inOut'
          });
        }

        const whyTl = gsap.timeline({
          scrollTrigger: {
            trigger: whyWorksRef.current,
            start: 'top 78%',
            once: true
          }
        });

        const headerElements = whyWorksRef.current.querySelectorAll('.why-header-anim');
        whyTl.fromTo(
          headerElements,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        );

        if (whyWorksItemsRef.current) {
          const items = whyWorksItemsRef.current.querySelectorAll('.why-work-card');
          const lines = whyWorksItemsRef.current.querySelectorAll('.divider-line');

          whyTl.fromTo(
            items,
            { opacity: 0, y: 35 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.14, ease: 'power3.out' },
            '-=0.4'
          );

          if (lines.length > 0) {
            whyTl.fromTo(
              lines,
              { scaleX: 0, transformOrigin: 'left center' },
              { scaleX: 1, duration: 0.8, stagger: 0.12, ease: 'power2.inOut' },
              '-=0.6'
            );
          }
        }
      }

      // -------------------------------------------------------------
      // 3. FOUNDER & PSYCHOTHERAPIST (EDITORIAL PINNED / REVEAL)
      // -------------------------------------------------------------
      if (founderSectionRef.current) {
        const founderTl = gsap.timeline({
          scrollTrigger: {
            trigger: founderSectionRef.current,
            start: 'top 75%',
            once: true
          }
        });

        // Founder image clip path reveal
        if (founderImageRef.current) {
          founderTl.fromTo(
            founderImageRef.current,
            {
              clipPath: 'inset(100% 0 0 0)',
              scale: 1.08,
              opacity: 0
            },
            {
              clipPath: 'inset(0% 0 0 0)',
              scale: 1,
              opacity: 1,
              duration: 1.2,
              ease: 'power3.out'
            }
          );
        }

        // Content items stagger
        if (founderContentRef.current) {
          const founderItems = founderContentRef.current.querySelectorAll('.founder-anim');
          const lines = founderContentRef.current.querySelectorAll('.founder-line');

          founderTl.fromTo(
            founderItems,
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
            '-=0.8'
          );

          if (lines.length > 0) {
            founderTl.fromTo(
              lines,
              { scaleX: 0, transformOrigin: 'left' },
              { scaleX: 1, duration: 0.7, stagger: 0.1, ease: 'power2.out' },
              '-=0.6'
            );
          }
        }

        // Subtle Parallax on Founder Image
        if (!reduced && !mobile && founderImageContainerRef.current) {
          gsap.to(founderImageContainerRef.current, {
            y: 20,
            ease: 'none',
            scrollTrigger: {
              trigger: founderSectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2
            }
          });
        }
      }

      // -------------------------------------------------------------
      // 4. QUALIFICATIONS & CLINICAL EXPERIENCE
      // -------------------------------------------------------------
      if (qualificationsRef.current) {
        const cards = qualificationsRef.current.querySelectorAll('.qual-card');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: qualificationsRef.current,
              start: 'top 80%',
              once: true
            }
          }
        );
      }

      // -------------------------------------------------------------
      // 5. SPECIALIZATIONS LIST REVEAL
      // -------------------------------------------------------------
      if (specializationsRef.current) {
        const specRows = specializationsRef.current.querySelectorAll('.spec-row');
        specRows.forEach((row, i) => {
          gsap.fromTo(
            row,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              delay: i * 0.05,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: row,
                start: 'top 88%',
                once: true
              }
            }
          );
        });
      }

      // -------------------------------------------------------------
      // 6. THERAPY PHILOSOPHY SECTION
      // -------------------------------------------------------------
      if (philosophyRef.current) {
        const philCards = philosophyRef.current.querySelectorAll('.phil-card');
        const connectors = philosophyRef.current.querySelectorAll('.phil-connector');

        const philTl = gsap.timeline({
          scrollTrigger: {
            trigger: philosophyRef.current,
            start: 'top 75%',
            once: true
          }
        });

        philTl.fromTo(
          philCards,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        );

        if (connectors.length > 0) {
          philTl.fromTo(
            connectors,
            { scaleX: 0, opacity: 0, transformOrigin: 'center' },
            { scaleX: 1, opacity: 1, duration: 0.8, ease: 'power2.inOut' },
            '-=0.6'
          );
        }
      }

      // -------------------------------------------------------------
      // 7. CLINICAL TEAM
      // -------------------------------------------------------------
      if (teamRef.current) {
        const teamCards = teamRef.current.querySelectorAll('.team-doc-card');
        gsap.fromTo(
          teamCards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: teamRef.current,
              start: 'top 82%',
              once: true
            }
          }
        );
      }

      // -------------------------------------------------------------
      // 8. FINAL CTA BANNER
      // -------------------------------------------------------------
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 85%',
              once: true
            }
          }
        );
      }
    }, pageContainerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const toggleSpecialization = (id: string) => {
    setExpandedSpec((prev) => (prev === id ? null : id));
  };

  return (
    <div ref={pageContainerRef} className="space-y-12 sm:space-y-16 lg:space-y-20 pb-16 bg-[#FAF7FC]">

      {/* ========================================================================= */}
      {/* SECTION 1 — ABOUT HERO                                                    */}
      {/* ========================================================================= */}
      <section 
        ref={heroRef}
        className="relative pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 bg-gradient-to-b from-[#FAF7FC] via-white to-[#FAF7FC] border-b border-[#E8DDED] overflow-hidden"
      >
        {/* Soft background ambient gradient glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F3EAF6]/60 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#FAF5FC] rounded-full blur-2xl pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: Section Label, SplitText Heading, Narrative & Trust */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Small "About Us" Label with line reveal */}
              <div ref={heroBadgeRef} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F3EAF6] text-[#700486] text-xs sm:text-sm font-semibold border border-[#E8DDED]">
                <Heart className="w-3.5 h-3.5 fill-[#700486]" />
                <span className="tracking-wide">About Us</span>
                <span className="w-6 h-px bg-[#700486]/40 ml-1 inline-block" />
              </div>

              {/* Large Editorial Heading */}
              <h1 
                ref={heroHeadingRef}
                className="font-heading text-3xl sm:text-4xl lg:text-[50px] font-extrabold text-[#1D1D1F] tracking-tight leading-[1.18]"
              >
                About Blooming Souls <br />
                <span className="text-[#700486]">and Psyche Private</span> <br />
                Limited
              </h1>

              {/* Complete Introductory Company Description */}
              <div ref={heroParagraphRef} className="space-y-4">
                <p className="hero-anim-item text-base sm:text-lg text-[#555555] leading-relaxed">
                  Blooming Souls and Psyche Private Limited is dedicated to transforming mental healthcare into an accessible, compassionate, and deeply personalized healing sanctuary. We bridge the gap between scientific psychological rigor and empathetic human warmth, empowering every individual to navigate emotional distress with dignity and lifelong resilience.
                </p>

                <p className="hero-anim-item text-sm sm:text-base text-[#666666] leading-relaxed">
                  Founded with a clear vision to dismantle mental health stigma across India and internationally, our clinical network unites licensed psychologists, psychometricians, psycho-oncologists, and relationship counselors under one integrated ethical standard.
                </p>

                {/* Editorial Trust Badges */}
                <div className="hero-anim-item pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-white border border-[#E8DDED] shadow-xs">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#700486]">
                      <ShieldCheck className="w-4 h-4 text-[#700486]" />
                      <span>Certified Clinical Team</span>
                    </div>
                    <div className="text-[11px] text-[#666666] mt-1">
                      Licensed psychologists & psychotherapists
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-[#E8DDED] shadow-xs">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#700486]">
                      <Lock className="w-4 h-4 text-[#700486]" />
                      <span>100% Confidential</span>
                    </div>
                    <div className="text-[11px] text-[#666666] mt-1">
                      Strict HIPAA & Mental Healthcare Act 2017 ethics
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-[#E8DDED] shadow-xs col-span-2 sm:col-span-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#700486]">
                      <Clock className="w-4 h-4 text-[#700486]" />
                      <span>In-Person & Online</span>
                    </div>
                    <div className="text-[11px] text-[#666666] mt-1">
                      Delhi NCR Clinic + Global Tele-Psychotherapy
                    </div>
                  </div>
                </div>

                {/* Primary Action Button */}
                <div className="hero-anim-item pt-3 flex flex-wrap items-center gap-4">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => onOpenQuickConnect()}
                    icon={<Calendar className="w-4 h-4" />}
                    iconPosition="left"
                  >
                    Schedule a Consultation
                  </Button>
                  <span className="text-xs text-[#666666] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Confidential intake within 24 hours</span>
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Team Image Composition + Customer Badge */}
            <div className="lg:col-span-5 relative">
              <div ref={heroImageContainerRef} className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Image Container with Clip-Path Reveal */}
                <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-white aspect-[4/4.8]">
                  <img
                    ref={heroImageRef}
                    src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1000&q=80"
                    alt="Blooming Souls dedicated mental healthcare sanctuary"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  
                  {/* Subtle gradient overlay at base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1F]/50 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-none">
                    <div className="text-xs uppercase tracking-widest font-semibold text-white/80">
                      Our Clinical Sanctuary
                    </div>
                    <div className="font-heading text-lg font-bold">
                      A Safe Space for Mindful Healing
                    </div>
                  </div>
                </div>

                {/* Floating Customer / Social Proof Badge */}
                <div 
                  ref={heroBadgeFloatRef}
                  className="absolute -bottom-6 -left-4 sm:bottom-6 sm:-left-8 bg-white p-5 rounded-2xl shadow-xl border border-[#E8DDED] max-w-[260px] z-20"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#1D1D1F]">4.9 / 5.0</span>
                  </div>
                  <div className="text-xs font-bold text-[#700486] uppercase tracking-wider mb-1">
                    Client Trust & Impact
                  </div>
                  <p className="text-xs text-[#555555] leading-snug">
                    Over <strong className="text-[#1D1D1F]">5,000+ individuals</strong> and families guided through emotional recovery.
                  </p>
                </div>

                {/* Floating Founding Principle sticker */}
                <div className="hidden sm:block absolute -top-4 -right-4 bg-white/95 backdrop-blur-xs px-4 py-2.5 rounded-2xl border border-[#E8DDED] shadow-md max-w-[210px] z-20">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#700486]">
                    Founding Principle
                  </div>
                  <p className="text-[11px] text-[#555555] italic leading-tight mt-0.5">
                    "No one should battle emotional overwhelm alone."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2 — WHY BLOOMING SOULS WORKS                                      */}
      {/* ========================================================================= */}
      <section 
        ref={whyWorksRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="bg-white rounded-[36px] border border-[#E8DDED] p-8 sm:p-12 lg:p-16 shadow-xs relative overflow-hidden">
          
          {/* Decorative Calm Floating Element */}
          <div 
            ref={decorativeFloatingRef}
            className="absolute top-10 right-10 w-24 h-24 rounded-full bg-gradient-to-br from-[#F3EAF6] to-transparent border border-[#E8DDED]/60 pointer-events-none flex items-center justify-center opacity-70"
          >
            <Leaf className="w-8 h-8 text-[#700486]/40" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Heading and Narrative */}
            <div className="lg:col-span-5 space-y-5">
              <div className="why-header-anim inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EAF6] text-[#700486] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Clinical Edge</span>
              </div>

              <h2 className="why-header-anim font-heading text-3xl sm:text-4xl font-bold text-[#1D1D1F] leading-tight">
                Why Blooming Souls <br />
                <span className="text-[#700486]">Creates Lasting Change</span>
              </h2>

              <p className="why-header-anim text-base text-[#555555] leading-relaxed">
                Traditional therapy can sometimes feel transactional, while clinical psychiatry often isolates mental distress into pure neurochemistry. At Blooming Souls, we believe sustainable emotional healing requires both: medical-grade psychometrics and deeply attuned human connection.
              </p>

              <p className="why-header-anim text-sm text-[#666666] leading-relaxed">
                Every consultation is designed around your unique nervous system, past trauma architecture, cognitive habits, and interpersonal relationships.
              </p>

              <div className="why-header-anim pt-4">
                <div className="p-4 rounded-2xl bg-[#FAF7FC] border border-[#E8DDED] space-y-2">
                  <div className="text-xs font-bold text-[#700486] uppercase tracking-wider">
                    Our Core Promise
                  </div>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed italic">
                    "We do not apply a generic therapy template. We co-create a scientific roadmap that honors your personal pacing and builds lifelong emotional autonomy."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Staggered Content Points with divider lines */}
            <div ref={whyWorksItemsRef} className="lg:col-span-7 space-y-6">
              
              {/* Point 1 */}
              <div className="why-work-card space-y-3">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F3EAF6] text-[#700486] flex items-center justify-center shrink-0 font-bold text-sm">
                    01
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#1D1D1F]">
                      Comprehensive Bio-Psycho-Social Diagnostics
                    </h3>
                    <p className="text-sm text-[#555555] leading-relaxed mt-1">
                      Before prescribing interventions, we evaluate lifestyle factors, sleep architecture, hormonal and neurobiological markers, family relational patterns, and core emotional scripts.
                    </p>
                  </div>
                </div>
                <div className="divider-line w-full h-px bg-[#E8DDED] mt-4" />
              </div>

              {/* Point 2 */}
              <div className="why-work-card space-y-3">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F3EAF6] text-[#700486] flex items-center justify-center shrink-0 font-bold text-sm">
                    02
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#1D1D1F]">
                      Evidence-Based, Multi-Modal Interventions
                    </h3>
                    <p className="text-sm text-[#555555] leading-relaxed mt-1">
                      We synthesize validated psychological frameworks including Cognitive Behavioral Therapy (CBT), Emotionally Focused Therapy (EFT), Somatic Experiencing, and Psychometrics tailored to acute anxiety, depression, and trauma.
                    </p>
                  </div>
                </div>
                <div className="divider-line w-full h-px bg-[#E8DDED] mt-4" />
              </div>

              {/* Point 3 */}
              <div className="why-work-card space-y-3">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F3EAF6] text-[#700486] flex items-center justify-center shrink-0 font-bold text-sm">
                    03
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#1D1D1F]">
                      Uncompromising Discretion & Psychological Safety
                    </h3>
                    <p className="text-sm text-[#555555] leading-relaxed mt-1">
                      Strict compliance with the Mental Healthcare Act 2017 and international data privacy norms. Our therapy suites and tele-health rooms are non-judgmental, confidential sanctuaries.
                    </p>
                  </div>
                </div>
                <div className="divider-line w-full h-px bg-[#E8DDED] mt-4" />
              </div>

              {/* Point 4 */}
              <div className="why-work-card space-y-3">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F3EAF6] text-[#700486] flex items-center justify-center shrink-0 font-bold text-sm">
                    04
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#1D1D1F]">
                      Sustainable Relapse Prevention & Self-Sufficiency
                    </h3>
                    <p className="text-sm text-[#555555] leading-relaxed mt-1">
                      Our ultimate clinical objective is not permanent therapy dependence. We empower you with lifelong cognitive tools, somatic nervous system drills, and resilience mechanisms to prevent relapses.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3 — FOUNDER & PSYCHOTHERAPIST (EDITORIAL VISUAL STORYTELLING)      */}
      {/* ========================================================================= */}
      <section 
        ref={founderSectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="bg-[#FAF7FC] border border-[#E8DDED] rounded-[36px] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* LEFT: Founder Portrait with Clip-Path Reveal and Parallax */}
            <div className="lg:col-span-5 relative">
              <div ref={founderImageContainerRef} className="relative mx-auto max-w-sm lg:max-w-none">
                
                <div className="rounded-[30px] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-white relative">
                  <img
                    ref={founderImageRef}
                    src={founderData.image}
                    alt={`${founderData.name} - Founder & Clinical Leader`}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.fallback) {
                        target.dataset.fallback = 'true';
                        target.src = 'https://bloomingsouls.in/wp-content/uploads/2025/12/sadaf-saeed.webp';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1F]/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-5 bg-[#700486] text-white px-5 py-3.5 rounded-2xl shadow-xl border border-purple-900/30">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[#F3EAF6]">
                    Clinical Leadership
                  </div>
                  <div className="font-heading font-bold text-lg sm:text-xl">
                    <AnimatedCounter end={12} suffix="+ Years Experience" />
                  </div>
                </div>

                {/* Presidential engagement badge */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white text-[#700486] p-3 rounded-2xl shadow-lg border border-[#E8DDED] text-center max-w-[150px]">
                  <Award className="w-5 h-5 mx-auto mb-1 text-[#700486]" />
                  <div className="text-[10px] font-bold leading-tight">
                    Rashtrapati Bhawan Engagement
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Progressive Storytelling, Credentials & Philosophy */}
            <div ref={founderContentRef} className="lg:col-span-7 space-y-6">
              
              <div className="founder-anim inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EAF6] text-[#700486] text-xs font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>Founder & Medical Director</span>
              </div>

              <div className="founder-anim">
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1D1D1F] tracking-tight">
                  {founderData.name}
                </h2>
                <p className="text-base font-semibold text-[#700486] mt-1.5">
                  {founderData.qualification}
                </p>
                <div className="founder-line w-24 h-0.5 bg-[#700486] mt-3" />
              </div>

              {/* Founder Philosophy Quote */}
              <blockquote className="founder-anim text-base sm:text-lg italic text-[#333333] border-l-4 border-[#700486] pl-5 py-1.5 leading-relaxed bg-white/60 rounded-r-2xl border-y border-r border-[#E8DDED]">
                "Psychotherapy is not about fixing broken pieces—it is about honoring the human story, understanding the neural and emotional architecture, and illuminating the inherent strength within every soul."
              </blockquote>

              {/* Progressive Narrative Paragraphs */}
              <p className="founder-anim text-sm sm:text-base text-[#555555] leading-relaxed">
                {founderData.bio}
              </p>

              <p className="founder-anim text-sm sm:text-base text-[#555555] leading-relaxed">
                Under her guidance, Blooming Souls has established itself as an institution renowned for compassionate, evidence-based care, combining advanced cognitive behavioral techniques, trauma-informed somatics, and ethical clinical practice.
              </p>

              {/* Specialization tags */}
              <div className="founder-anim pt-1">
                <div className="text-xs font-bold text-[#1D1D1F] mb-2 uppercase tracking-wider">
                  Core Clinical Specializations:
                </div>
                <div className="flex flex-wrap gap-2">
                  {founderData.focusAreas.map((area, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-white border border-[#E8DDED] text-[#700486] text-xs rounded-full font-medium shadow-2xs"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions: Book with Founder + View Full Bio */}
              <div className="founder-anim pt-4 flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onOpenQuickConnect('Psychotherapy Consultation', founderData.name)}
                  icon={<Calendar className="w-4 h-4" />}
                  iconPosition="left"
                >
                  Consult with {founderData.name}
                </Button>

                <button
                  type="button"
                  onClick={() => onViewDoctorBio(founderData as Professional)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#700486] hover:text-[#520362] transition-colors py-2 px-3 rounded-xl hover:bg-[#F3EAF6]/50"
                >
                  <span>View Full Biography & Credentials</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4 — QUALIFICATIONS & CLINICAL EXPERIENCE                          */}
      {/* ========================================================================= */}
      <section 
        ref={qualificationsRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <SectionHeading
          badge="Verified Credentials"
          badgeIcon={<Award className="w-3.5 h-3.5" />}
          title="Clinical Qualifications &"
          highlightedText="Institutional Experience"
          description="Built on rigorous medical and psychological credentials, verified clinical training, and uncompromising ethical standards."
          align="center"
          className="mb-12"
        />

        {/* Top Quantitative Milestones */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10">
          <div className="qual-card p-6 rounded-[24px] bg-white border border-[#E8DDED] text-center shadow-xs">
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#700486]">
              <AnimatedCounter end={12} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#1D1D1F] mt-1">
              Years Clinical Practice
            </div>
            <div className="text-[11px] text-[#666666] mt-0.5">
              Continuous patient-centered leadership
            </div>
          </div>

          <div className="qual-card p-6 rounded-[24px] bg-white border border-[#E8DDED] text-center shadow-xs">
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#700486]">
              <AnimatedCounter end={5000} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#1D1D1F] mt-1">
              Lives Reconnected
            </div>
            <div className="text-[11px] text-[#666666] mt-0.5">
              Individual, family & couple therapy
            </div>
          </div>

          <div className="qual-card p-6 rounded-[24px] bg-white border border-[#E8DDED] text-center shadow-xs">
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#700486]">
              <AnimatedCounter end={98} suffix="%" />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#1D1D1F] mt-1">
              Clinical Satisfaction
            </div>
            <div className="text-[11px] text-[#666666] mt-0.5">
              Reported emotional progress
            </div>
          </div>

          <div className="qual-card p-6 rounded-[24px] bg-white border border-[#E8DDED] text-center shadow-xs">
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#700486]">
              <AnimatedCounter end={100} suffix="%" />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#1D1D1F] mt-1">
              Confidentiality
            </div>
            <div className="text-[11px] text-[#666666] mt-0.5">
              Mental Healthcare Act 2017 compliant
            </div>
          </div>
        </div>

        {/* Detailed Experience Milestones Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="qual-card p-8 rounded-[28px] bg-white border border-[#E8DDED] shadow-xs space-y-4 hover:border-[#700486]/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#F3EAF6] text-[#700486] flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#1D1D1F]">
              Rashtrapati Bhawan Clinical Engagement
            </h3>
            <p className="text-sm text-[#555555] leading-relaxed">
              Clinical experience collaborating with Dr. M. Wali (Physician to former Presidents of India) at Rashtrapati Bhawan, assisting in diagnosing complex psychological, psychosomatic, and mood presentations with high medical rigor.
            </p>
            <div className="text-xs text-[#700486] font-semibold flex items-center gap-1.5 pt-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Institutional Medical Pedigree</span>
            </div>
          </div>

          <div className="qual-card p-8 rounded-[28px] bg-white border border-[#E8DDED] shadow-xs space-y-4 hover:border-[#700486]/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#F3EAF6] text-[#700486] flex items-center justify-center">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#1D1D1F]">
              Mentorship under Presidential Gold Medalist
            </h3>
            <p className="text-sm text-[#555555] leading-relaxed">
              Rigorous advanced training under Ms. Gagandeep Kaur (Presidential Gold Medalist), mastering clinical psychodynamics, in-depth psychotherapy formulations, and trauma-informed cognitive restructuring.
            </p>
            <div className="text-xs text-[#700486] font-semibold flex items-center gap-1.5 pt-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Elite Academic & Practical Mentorship</span>
            </div>
          </div>

          <div className="qual-card p-8 rounded-[28px] bg-white border border-[#E8DDED] shadow-xs space-y-4 hover:border-[#700486]/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#F3EAF6] text-[#700486] flex items-center justify-center">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#1D1D1F]">
              Advanced Evidence-Based Certifications
            </h3>
            <p className="text-sm text-[#555555] leading-relaxed">
              Continuous international continuing education in Cognitive Behavioral Therapy (CBT), Emotionally Focused Therapy (EFT), Somatic Experiencing, Psychometrics, and Psycho-Oncology modalities.
            </p>
            <div className="text-xs text-[#700486] font-semibold flex items-center gap-1.5 pt-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Multi-Modal Clinical Validation</span>
            </div>
          </div>

          <div className="qual-card p-8 rounded-[28px] bg-white border border-[#E8DDED] shadow-xs space-y-4 hover:border-[#700486]/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#F3EAF6] text-[#700486] flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#1D1D1F]">
              Multidisciplinary Specialist Collective
            </h3>
            <p className="text-sm text-[#555555] leading-relaxed">
              Blooming Souls brings together over 7 dedicated clinicians spanning Clinical Psychology, Industrial-Organizational Wellbeing, Psycho-Oncology, and Behavioral Psychometrics to deliver holistic care under one roof.
            </p>
            <div className="text-xs text-[#700486] font-semibold flex items-center gap-1.5 pt-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Integrated Collaborative Care</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5 — SPECIALIZATIONS (ACCORDION / EDITORIAL LIST REVEAL)           */}
      {/* ========================================================================= */}
      <section 
        ref={specializationsRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white rounded-[36px] border border-[#E8DDED] p-8 sm:p-12 lg:p-16 shadow-xs">
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EAF6] text-[#700486] text-xs font-semibold mb-3">
              <Brain className="w-3.5 h-3.5" />
              <span>Clinical Focus Areas</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1D1D1F]">
              Our Clinical <span className="text-[#700486]">Specializations</span>
            </h2>
            <p className="text-base text-[#555555] mt-3">
              Each specialization is backed by validated medical and psychological protocols, delivered with warmth, dignity, and personalized attention.
            </p>
          </div>

          {/* Staggered Accordion List */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {SPECIALIZATIONS_DATA.map((spec) => {
              const isExpanded = expandedSpec === spec.id;

              return (
                <div
                  key={spec.id}
                  className={`spec-row rounded-[24px] border transition-all duration-300 ${
                    isExpanded 
                      ? 'bg-[#FAF7FC] border-[#700486]/30 shadow-sm' 
                      : 'bg-white border-[#E8DDED] hover:border-[#700486]/30'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleSpecialization(spec.id)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isExpanded}
                  >
                    <div>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-[#1D1D1F]">
                        {spec.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#700486] font-medium mt-1">
                        {spec.subtitle}
                      </p>
                    </div>

                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isExpanded ? 'bg-[#700486] text-white rotate-180' : 'bg-[#F3EAF6] text-[#700486]'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Expandable Details */}
                  {isExpanded && (
                    <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 space-y-4 border-t border-[#E8DDED]/60">
                      <p className="text-sm sm:text-base text-[#555555] leading-relaxed pt-3">
                        {spec.description}
                      </p>

                      <div>
                        <div className="text-xs font-bold text-[#1D1D1F] uppercase tracking-wider mb-2">
                          Applied Therapeutic Modalities:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {spec.modalities.map((mod, mIdx) => (
                            <span 
                              key={mIdx}
                              className="px-3 py-1 bg-white border border-[#E8DDED] text-[#700486] text-xs font-medium rounded-full"
                            >
                              {mod}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-between flex-wrap gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onOpenQuickConnect(spec.title)}
                          icon={<Calendar className="w-3.5 h-3.5" />}
                          iconPosition="left"
                        >
                          Book for {spec.title}
                        </Button>
                        <span className="text-xs text-[#666666] italic">
                          Online Video & Clinic Consultations Available
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6 — THERAPY PHILOSOPHY                                            */}
      {/* ========================================================================= */}
      <section 
        ref={philosophyRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-[#FAF7FC] border border-[#E8DDED] rounded-[36px] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EAF6] text-[#700486] text-xs font-semibold mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Our Guiding Ethos</span>
            </div>
            
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1D1D1F] leading-tight">
              Our Therapy Philosophy: <br />
              <span className="text-[#700486]">Treating the Human, Not Just the Diagnosis</span>
            </h2>

            <p className="text-base sm:text-lg text-[#555555] leading-relaxed mt-4 italic">
              "True healing unfolds when psychological science is practiced with radical empathy, clinical humility, and an unwavering respect for the patient's lived reality."
            </p>
          </div>

          {/* 4 Pillars with Connecting Motion */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            
            {/* Principle 01 */}
            <div className="phil-card bg-white p-7 rounded-[26px] border border-[#E8DDED] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F3EAF6] text-[#700486] flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1D1D1F]">
                Bio-Psycho-Social Foundation
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                We understand that psychological distress is never an isolated thought error. We examine biology, neurochemistry, sleep, relational attachments, and trauma history.
              </p>
            </div>

            {/* Principle 02 */}
            <div className="phil-card bg-white p-7 rounded-[26px] border border-[#E8DDED] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F3EAF6] text-[#700486] flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1D1D1F]">
                Compassionate Non-Judgment
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                An affirming, inclusive clinic space where every identity, orientation, belief, and background is held with utter dignity, free of shame or clinical condescension.
              </p>
            </div>

            {/* Principle 03 */}
            <div className="phil-card bg-white p-7 rounded-[26px] border border-[#E8DDED] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F3EAF6] text-[#700486] flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1D1D1F]">
                Empirically Proven Techniques
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                Every intervention is clinically validated through peer-reviewed psychology (CBT, EFT, ERP, Somatic Work), continuously adapted to your individual pace.
              </p>
            </div>

            {/* Principle 04 */}
            <div className="phil-card bg-white p-7 rounded-[26px] border border-[#E8DDED] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F3EAF6] text-[#700486] flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1D1D1F]">
                Autonomy & Relapse Inoculation
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                Our ultimate aim is your independence. We equip you with self-regulation toolkits, emotional resilience drills, and cognitive habits to thrive beyond therapy.
              </p>
            </div>

          </div>

          {/* Final Statement Reveal */}
          <div className="mt-12 text-center max-w-2xl mx-auto p-6 rounded-2xl bg-white border border-[#E8DDED] shadow-xs">
            <p className="text-xs sm:text-sm font-semibold text-[#700486] uppercase tracking-wider mb-1">
              Ethical Commitment
            </p>
            <p className="text-sm text-[#555555] leading-relaxed">
              We uphold strict adherence to the Mental Healthcare Act 2017 and clinical psychology standards. What is shared in our spaces remains completely confidential.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7 — CLINICAL SPECIALISTS COLLECTIVE                               */}
      {/* ========================================================================= */}
      <section 
        ref={teamRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <SectionHeading
          badge="Clinical Collective"
          badgeIcon={<Users className="w-3.5 h-3.5" />}
          title="Meet Our Dedicated"
          highlightedText="Practitioners"
          description="Every clinician at Blooming Souls is credentialed, undergoes continuous supervision, and adheres to the highest medical confidentiality."
          align="center"
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {professionals.map((doc) => (
            <div key={doc.id} className="team-doc-card">
              <DoctorCard
                doctor={doc}
                onBookConsultation={(name) => onOpenQuickConnect(undefined, name)}
                onViewProfile={onViewDoctorBio}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8 — FINAL INVITATION & SANCTUARY CTA                               */}
      {/* ========================================================================= */}
      <section 
        ref={ctaRef}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="p-8 sm:p-12 lg:p-14 rounded-[36px] bg-gradient-to-br from-[#700486] via-[#5D036F] to-[#450253] text-white text-center space-y-6 shadow-2xl relative overflow-hidden border border-purple-800">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FAF7FC]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold">
            <Heart className="w-3.5 h-3.5 fill-white" />
            <span>Begin Your Healing Journey</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
            Your Journey Toward Wholeness Begins with a Single Conversation
          </h2>

          <p className="text-white/85 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Whether you are struggling with silent anxiety, depression, relationship friction, or navigating heavy life transitions, our clinical team is ready to listen without judgment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              variant="white"
              size="lg"
              onClick={() => onOpenQuickConnect()}
              icon={<Calendar className="w-4 h-4" />}
              iconPosition="left"
            >
              Book an Initial Consultation
            </Button>
          </div>

          {/* Reassurance points */}
          <div className="pt-4 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-white/80">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Confidential & Secure</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>In-Person & Global Tele-Therapy</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Verified Clinical Psychologists</span>
            </span>
          </div>

        </div>
      </section>

    </div>
  );
};
