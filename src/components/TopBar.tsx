import React from 'react';
import { MapPin, Mail, Phone, Facebook, Linkedin, Youtube, Instagram } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div 
      id="site-topbar" 
      className="bg-gradient-to-r from-[#8C2A91] via-[#681479] to-[#3B0A4B] text-white py-1.5 sm:py-2 px-3 sm:px-6 lg:px-8 border-b border-white/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 flex-nowrap whitespace-nowrap">
        {/* Left Side: Address (Desktop), Email (All), Social Icons (Tablet/Desktop) */}
        <div className="flex items-center gap-3 sm:gap-5 min-w-0 flex-nowrap">
          {/* Address - Visible on mobile and desktop */}
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-white/95 truncate">
            <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/90 flex-shrink-0" />
            <a
              href="https://www.google.com/maps/place/Blooming+Souls+%26+Psyche+Pvt+Ltd+-+Best+Psychologist+in+New+Delhi/@28.571225,77.269528,613m/data=!3m1!1e3!4m6!3m5!1s0x390ce396d3fe1cc9:0x8d3d0a720854ebad!8m2!3d28.5712248!4d77.2695284!16s%2Fg%2F11s0zld_qd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline transition-colors truncate"
            >
              98-B, Third floor, Namberdar Estate, Taimoor Nagar, New Friends Colony, New Delhi - 110065
            </a>
          </div>

          <span className="text-white/40 shrink-0">|</span>

          {/* Email - Always visible on mobile & desktop */}
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-white/95 whitespace-nowrap shrink-0">
            <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/90 flex-shrink-0" />
            <a 
              href="mailto:info@bloomingsouls.in" 
              className="hover:text-white hover:underline transition-colors"
            >
              info@bloomingsouls.in
            </a>
          </div>

          {/* Social Icons - Tablet & Desktop */}
          <div className="hidden sm:flex items-center gap-1.5 shrink-0">
            <a
              href="https://facebook.com/bloomingsouls"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-5 h-5 rounded-full bg-white/15 hover:bg-white/30 hover:text-white flex items-center justify-center text-white/90 transition-all"
            >
              <Facebook className="w-2.5 h-2.5" />
            </a>
            <a
              href="https://linkedin.com/company/bloomingsouls"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-5 h-5 rounded-full bg-white/15 hover:bg-white/30 hover:text-white flex items-center justify-center text-white/90 transition-all"
            >
              <Linkedin className="w-2.5 h-2.5" />
            </a>
            <a
              href="https://youtube.com/@bloomingsouls"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="w-5 h-5 rounded-full bg-white/15 hover:bg-white/30 hover:text-white flex items-center justify-center text-white/90 transition-all"
            >
              <Youtube className="w-2.5 h-2.5" />
            </a>
            <a
              href="https://instagram.com/bloomingsouls"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-5 h-5 rounded-full bg-white/15 hover:bg-white/30 hover:text-white flex items-center justify-center text-white/90 transition-all"
            >
              <Instagram className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>

        {/* Right Side: Call Now phone link - Tablet and Desktop */}
        <div className="hidden sm:flex items-center gap-1 text-[11px] sm:text-xs text-white whitespace-nowrap shrink-0">
          <span className="hidden xs:inline text-white/90">Call:</span>
          <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/90 shrink-0" />
          <a 
            href="tel:+918826533260" 
            className="font-semibold text-white hover:text-white/75 transition-colors"
          >
            +91 88265 33260
          </a>
        </div>
      </div>
    </div>
  );
};
