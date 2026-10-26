import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Brain,
  MessageCircle,
  Heart,
  Flower2,
  Star,
  Briefcase,
  FileText,
  Users,
  Search,
  ChevronDown,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { Logo } from './Logo';
import { services } from '../data/services';
import { motion, AnimatePresence } from 'motion/react';
import { gsap, isReducedMotion, GSAP_EASING } from '../animations/gsapSetup';
import { useMagneticButton } from '../animations/useMagneticButton';

interface HeaderProps {
  onOpenSearch?: () => void;
  onOpenQuickConnect?: () => void;
  onOpenBooking?: () => void;
}

const serviceDetails: Record<string, { icon: React.ReactNode; tag: string; blurb: string }> = {
  'psychiatry': {
    icon: <Brain className="w-4 h-4" />,
    tag: 'Clinical',
    blurb: 'Medical evaluations, diagnosis & safe pharmacotherapy'
  },
  'psychotherapy': {
    icon: <MessageCircle className="w-4 h-4" />,
    tag: 'Therapy',
    blurb: 'Evidence-based CBT, DBT & compassionate trauma healing'
  },
  'counseling': {
    icon: <Users className="w-4 h-4" />,
    tag: 'Support',
    blurb: 'Safe space to navigate life transitions & personal balance'
  },
  'relationship-therapy': {
    icon: <Heart className="w-4 h-4" />,
    tag: 'Couples',
    blurb: 'Couples counselling, intimacy & communication repair'
  },
  'family-counselling': {
    icon: <Users className="w-4 h-4" />,
    tag: 'Family',
    blurb: 'Systemic family counselling, harmony & conflict repair'
  },
  'stress-anxiety-management': {
    icon: <Flower2 className="w-4 h-4" />,
    tag: 'Wellness',
    blurb: 'Targeted tools for panic attacks, burnout & chronic tension'
  },
  'adolescent-teen-support': {
    icon: <Star className="w-4 h-4" />,
    tag: 'Youth',
    blurb: 'Specialized care for academic pressure & emotional health'
  },
  'career-guidance-life-coaching': {
    icon: <Briefcase className="w-4 h-4" />,
    tag: 'Growth',
    blurb: 'Strategic coaching to unlock focus, clarity & career confidence'
  },
  'psychometric-assessments': {
    icon: <FileText className="w-4 h-4" />,
    tag: 'Testing',
    blurb: 'Standardized psychological, cognitive & personality tests'
  }
};

export const Header: React.FC<HeaderProps> = ({ 
  onOpenSearch, 
  onOpenQuickConnect, 
  onOpenBooking 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const handleBooking = () => {
    if (onOpenBooking) onOpenBooking();
    else if (onOpenQuickConnect) onOpenQuickConnect();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 250);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Courses', path: '/courses' },
    { name: 'Internship', path: '/internship' },
    { name: 'Relationship', path: '/relationship' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const headerRef = useRef<HTMLElement | null>(null);
  const logoContainerRef = useRef<HTMLDivElement | null>(null);
  const navContainerRef = useRef<HTMLElement | null>(null);
  const ctaBtnRef = useMagneticButton<HTMLButtonElement>({ strength: 6, speed: 0.3 });

  // GSAP Entrance Timeline on Mount
  useEffect(() => {
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      // 1. Logo fades/slides in
      if (logoContainerRef.current) {
        tl.fromTo(
          logoContainerRef.current,
          { opacity: 0, x: -16 },
          { opacity: 1, x: 0, duration: 0.55, ease: GSAP_EASING.calm }
        );
      }

      // 2. Navigation links appear with subtle stagger
      if (navContainerRef.current) {
        const links = navContainerRef.current.children;
        tl.fromTo(
          links,
          { opacity: 0, y: -8 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.04, ease: 'power2.out' },
          '-=0.35'
        );
      }

      // 3. Appointment button appears last
      if (ctaBtnRef.current) {
        tl.fromTo(
          ctaBtnRef.current,
          { opacity: 0, scale: 0.94 },
          { opacity: 1, scale: 1, duration: 0.45, ease: 'back.out(1.4)' },
          '-=0.2'
        );
      }
    }, headerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <header
      ref={headerRef}
      id="main-header"
      className={`sticky top-0 z-40 transition-all duration-300 w-full bg-white/95 backdrop-blur-md border-b border-[#E8DDED] ${
        isScrolled ? 'shadow-md shadow-[#700486]/5 py-2.5 bg-white/98' : 'py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-6 xl:px-8 flex items-center justify-between gap-2 xl:gap-4">
        {/* Brand Logo */}
        <div ref={logoContainerRef} className="flex-shrink-0">
          <Logo variant="purple" />
        </div>

        {/* Desktop Navigation with refined interactive styling */}
        <nav 
          ref={navContainerRef}
          className="hidden lg:flex items-center gap-1 xl:gap-1.5 2xl:gap-2 flex-shrink-0"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            if (item.name === 'Services') {
              return (
                <div 
                  key={item.name}
                  className="relative flex-shrink-0"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-3.5 xl:px-4 py-2 rounded-full text-xs xl:text-sm font-semibold tracking-normal transition-all duration-200 inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                        isActive || servicesDropdownOpen
                          ? 'bg-[#700486] text-white shadow-sm shadow-[#700486]/20'
                          : 'text-[#333333] hover:text-[#700486] hover:bg-[#FAF4FB]'
                      }`
                    }
                  >
                    <span>{item.name}</span>
                    <ChevronDown 
                      className={`w-3.5 h-3.5 transition-transform duration-300 ease-out ${
                        servicesDropdownOpen ? 'rotate-180 text-white' : 'text-[#888888]'
                      }`} 
                    />
                  </NavLink>

                  {/* Refined Mega-Menu Dropdown */}
                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 -translate-x-[42%] xl:-translate-x-1/2 mt-2.5 w-[720px] max-w-[95vw] bg-white/98 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-[#700486]/18 border border-[#EADBEC] p-0 z-50 text-[#1D1D1F] overflow-hidden before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3"
                      >
                        {/* Header Ribbon */}
                        <div className="px-6 py-3.5 bg-gradient-to-r from-[#FAF4FB] via-white to-[#FAF4FB] border-b border-[#F0E2F3] flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-md bg-[#700486]/10 text-[#700486] flex items-center justify-center">
                              <Sparkles className="w-3 h-3" />
                            </span>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#700486]">
                              Clinical Services & Therapies
                            </span>
                          </div>
                          <Link
                            to="/services"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="text-xs font-semibold text-[#700486] hover:text-[#520363] inline-flex items-center gap-1 group/link"
                          >
                            <span>Explore All {services.length} Services</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                          </Link>
                        </div>

                        {/* 2-Column Grid of Beautiful Service Cards */}
                        <div className="p-4 grid grid-cols-2 gap-2">
                          {services.map((service) => {
                            const details = serviceDetails[service.slug] || {
                              icon: <Brain className="w-4 h-4" />,
                              tag: 'Specialty',
                              blurb: service.shortDescription
                            };

                            return (
                              <Link
                                key={service.id}
                                to={`/services?focus=${service.slug}`}
                                onClick={() => setServicesDropdownOpen(false)}
                                className="group relative flex items-start gap-3.5 p-3 rounded-2xl border border-transparent hover:border-[#EADBEC] hover:bg-[#FAF6FB] transition-all duration-200"
                              >
                                <div className="w-10 h-10 rounded-xl bg-[#F6EEF8] text-[#700486] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#700486] group-hover:text-white group-hover:scale-105 shadow-2xs transition-all duration-200">
                                  {details.icon}
                                </div>

                                <div className="flex-1 min-w-0 pr-1">
                                  <div className="flex items-center justify-between gap-1">
                                    <h4 className="text-sm font-semibold text-[#1D1D1F] group-hover:text-[#700486] transition-colors leading-tight line-clamp-1">
                                      {service.title}
                                    </h4>
                                    <ArrowUpRight className="w-3.5 h-3.5 text-transparent group-hover:text-[#700486] transition-all duration-200 flex-shrink-0 -translate-x-1 group-hover:translate-x-0 opacity-0 group-hover:opacity-100" />
                                  </div>
                                  <p className="text-xs text-[#666666] leading-snug mt-0.5 line-clamp-2">
                                    {details.blurb}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        {/* Bottom Action Ribbon */}
                        <div className="px-6 py-3 bg-[#FAF5FB] border-t border-[#F0E4F2] flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs text-[#555555]">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>In-Clinic in New Delhi & Secure Online Consultations</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => {
                                setServicesDropdownOpen(false);
                                handleBooking();
                              }}
                              className="text-xs font-bold text-[#700486] hover:text-[#520363] hover:underline cursor-pointer inline-flex items-center gap-1"
                            >
                              <span>Book Consultation</span>
                              <span>→</span>
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-3.5 xl:px-4 py-2 rounded-full text-xs xl:text-sm font-semibold tracking-normal transition-all duration-200 inline-flex items-center justify-center cursor-pointer whitespace-nowrap flex-shrink-0 ${
                    isActive
                      ? 'bg-[#700486] text-white shadow-sm shadow-[#700486]/20'
                      : 'text-[#333333] hover:text-[#700486] hover:bg-[#FAF4FB]'
                  }`
                }
              >
                <span className="whitespace-nowrap">{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              aria-label="Search"
              className="p-2 rounded-full text-[#700486] hover:bg-[#F3EAF6] transition-colors hidden sm:flex items-center justify-center cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>
          )}

          {/* Book Appointment Pill Button */}
          <button
            ref={ctaBtnRef}
            id="header-schedule-btn"
            onClick={handleBooking}
            className="group flex items-center gap-2 bg-[#700486] hover:bg-[#58036B] text-white pl-3.5 sm:pl-4 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-[#700486]/25 transition-all duration-300 hover:scale-102 active:scale-98 cursor-pointer flex-shrink-0 whitespace-nowrap"
          >
            <span className="whitespace-nowrap">Book Appointment</span>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white text-[#700486] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shadow-2xs">
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
            </div>
          </button>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-xl text-[#700486] hover:bg-[#F3EAF6] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-[#E8DDED] px-4 pt-4 pb-6 space-y-4 shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2.5 rounded-full text-center text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-[#700486] text-white shadow-xs'
                        : 'text-[#444444] hover:bg-[#FAF4FB] hover:text-[#700486]'
                    }`
                  }
                >
                  <span className="whitespace-nowrap">{item.name}</span>
                </NavLink>
              ))}
            </div>

            <div className="pt-3 border-t border-[#E8DDED]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#700486] text-white font-bold text-sm shadow-md active:scale-98 transition-transform"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
