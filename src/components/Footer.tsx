import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Facebook, Linkedin, Instagram, Youtube, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenBooking?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id="main-footer" className="bg-[#700486] text-white pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid matching Screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12">
          
          {/* Column 1: Brand & Socials */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center group" aria-label="Blooming Souls">
              <div className="h-16 sm:h-20 lg:h-22 w-auto flex-shrink-0 flex items-center justify-start">
                <img
                  src="/blooming-logo.webp"
                  alt="Blooming Souls"
                  className="h-16 sm:h-20 lg:h-22 w-auto object-contain brightness-0 invert drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Link>

            <p className="text-white/85 text-sm leading-relaxed mt-4 max-w-sm font-normal">
              Expert psychological services fostering resilience, growth, and balanced living through compassionate, evidence-based care
            </p>

            <div className="text-white/80 text-xs leading-relaxed space-y-1">
              <p>
                <a
                  href="https://www.google.com/maps/place/Blooming+Souls+%26+Psyche+Pvt+Ltd+-+Best+Psychologist+in+New+Delhi/@28.571225,77.269528,613m/data=!3m1!1e3!4m6!3m5!1s0x390ce396d3fe1cc9:0x8d3d0a720854ebad!8m2!3d28.5712248!4d77.2695284!16s%2Fg%2F11s0zld_qd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline transition-colors"
                >
                  98-B, Third floor, Namberdar Estate, Taimoor Nagar, New Friends Colony, New Delhi - 110065
                </a>
              </p>
              <p>
                Ph: <a href="tel:+918826533260" className="text-white font-semibold hover:underline">+91 88265 33260</a> • <a href="mailto:info@bloomingsouls.in" className="text-white font-semibold hover:underline">info@bloomingsouls.in</a>
              </p>
            </div>

            {/* Social Icons row matching screenshot */}
            <div className="pt-2 flex items-center space-x-5">
              <a
                href="https://facebook.com/bloomingsouls"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-white/85 hover:text-white hover:scale-110 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/bloomingsouls"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-white/85 hover:text-white hover:scale-110 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/bloomingsouls"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-white/85 hover:text-white hover:scale-110 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@bloomingsouls"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="text-white/85 hover:text-white hover:scale-110 transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-xl font-normal font-heading text-white mb-5 tracking-tight">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-white/85">
              <li>
                <Link to="/services" className="hover:text-white hover:underline transition-colors">
                  Psychotherapy
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white hover:underline transition-colors">
                  Counseling Session
                </Link>
              </li>
              <li>
                <Link to="/relationship" className="hover:text-white hover:underline transition-colors">
                  Relationship Therapy
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white hover:underline transition-colors">
                  Career Guidance
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white hover:underline transition-colors">
                  Psychometric Assessments
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white hover:underline transition-colors">
                  Family Counselling
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-xl font-normal font-heading text-white mb-5 tracking-tight">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-white/85">
              <li>
                <Link to="/internship" className="hover:text-white hover:underline transition-colors">
                  Internship
                </Link>
              </li>
              <li>
                <Link to="/relationship" className="hover:text-white hover:underline transition-colors">
                  Relationship
                </Link>
              </li>
              <li>
                <a
                  href="https://linktr.ee/bloomingsoulspsychepvtltd?utm_source=qr_code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline transition-colors text-left inline-flex items-center gap-1.5"
                >
                  <span>Book a session</span>
                </a>
              </li>
              <li>
                <Link to="/events" className="hover:text-white hover:underline transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <a
                  href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__mCkdBVURVJLUzdNT1E3Nk9YQUhDVDFYOFdMOUpTVS4u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline transition-colors text-left inline-flex items-center gap-1.5"
                >
                  <span>Enroll Now</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Work Hours */}
          <div>
            <h3 className="text-xl font-normal font-heading text-white mb-5 tracking-tight">
              Work Hours
            </h3>

            {/* Time with Clock icon */}
            <div className="flex items-center gap-2.5 text-white font-bold text-base mb-3">
              <Clock className="w-5 h-5 flex-shrink-0" />
              <span>Mon-Sat 12:00–6:00</span>
            </div>

            {/* Paragraph text */}
            <p className="text-white/85 text-sm leading-relaxed mb-6 font-normal">
              Transform your life with Blooming Soul! Experience compassionate, expert care for a balanced, resilient, and thriving you. Start your journey today!
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-2.5">
              <a
                href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__mCkdBVURVJLUzdNT1E3Nk9YQUhDVDFYOFdMOUpTVS4u"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-[#700486] font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-md hover:bg-white/90 active:scale-95 transition-all shadow-md text-center"
              >
                Enroll Now
              </a>
              <a
                href="https://linktr.ee/bloomingsoulspsychepvtltd?utm_source=qr_code"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white/15 hover:bg-white/25 text-white border border-white/30 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-md active:scale-95 transition-all text-center"
              >
                Book a Session
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar matching screenshot */}
        <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/85">
          <div className="flex items-center flex-wrap gap-1 text-center md:text-left">
            <span>Copyright © 2026</span>
            <span className="font-bold text-white">Sadaf Malik.</span>
            <span>All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-white/80">
            <Link to="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>

      </div>

      {/* Floating Scroll to Top button matching screenshot */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          id="scroll-to-top-btn"
          aria-label="Scroll to top"
          className="fixed bottom-6 right-5 sm:right-6 z-40 w-11 h-11 rounded-full bg-[#520363] border border-white/20 text-white flex items-center justify-center shadow-xl hover:bg-[#420250] hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};
