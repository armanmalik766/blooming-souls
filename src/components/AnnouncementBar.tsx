import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

interface AnnouncementBarProps {
  onBookConsultation: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onBookConsultation }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div 
      id="announcement-banner"
      className="bg-[#8915A2] text-white py-2 px-4 sm:px-8 text-center text-xs sm:text-sm font-medium relative border-b border-[#700486]/40 transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-1.5 pr-6 sm:pr-0">
        <span className="text-white/95">Looking for Specialist Mental Healthcare?</span>
        <button
          onClick={onBookConsultation}
          className="font-bold underline hover:text-white/80 inline-flex items-center gap-1 cursor-pointer transition-colors text-white"
        >
          <span>Book Your Consultation Today</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss banner"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-1 text-white/80 hover:text-white transition-colors cursor-pointer"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
