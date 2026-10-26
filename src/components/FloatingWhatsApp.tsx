import React, { useState } from 'react';
import { MessageCircle, Phone, Calendar, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenQuickConnect: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenQuickConnect }) => {
  const [expanded, setExpanded] = useState(false);

  const whatsappUrl = `https://wa.me/918826533260?text=${encodeURIComponent('Hello Blooming Souls, I would like to inquire about a consultation.')}`;

  return (
    <div
      id="floating-quick-connect-container"
      className="fixed bottom-20 sm:bottom-22 right-5 sm:right-6 z-40 flex flex-col items-end gap-2.5"
    >
      {/* Floating Speed-dial Menu when expanded */}
      {expanded && (
        <div className="flex flex-col items-end gap-2 mb-1 animate-in slide-in-from-bottom-3 duration-200">
          {/* Direct Call action */}
          <a
            href="tel:+918826533260"
            className="flex items-center gap-2.5 bg-white text-[#1D1D1F] px-4 py-2 rounded-full shadow-lg border border-[#E8DDED] text-xs font-semibold hover:bg-[#FAF7FC] hover:text-[#700486] transition-all hover:scale-105"
          >
            <span>Call Clinic (+91 88265 33260)</span>
            <div className="w-7 h-7 rounded-full bg-[#700486] text-white flex items-center justify-center">
              <Phone className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Book Consultation action */}
          <button
            onClick={() => {
              setExpanded(false);
              onOpenQuickConnect();
            }}
            className="flex items-center gap-2.5 bg-white text-[#1D1D1F] px-4 py-2 rounded-full shadow-lg border border-[#E8DDED] text-xs font-semibold hover:bg-[#FAF7FC] hover:text-[#700486] transition-all hover:scale-105 cursor-pointer"
          >
            <span>Book Appointment Form</span>
            <div className="w-7 h-7 rounded-full bg-[#700486] text-white flex items-center justify-center">
              <Calendar className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      )}

      {/* Main Floating Trigger matching Screenshot 2: Orange 'Chat with Us' Pill + Green WhatsApp Icon */}
      <div className="flex items-center gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          aria-label="Chat with us on WhatsApp"
          className="group flex items-center gap-2 transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          {/* Orange/Amber bubble matching Screenshot 2 */}
          <div className="relative bg-[#EAA13E] hover:bg-[#DE932E] text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg transition-colors flex items-center gap-1">
            <span>Chat with Us</span>
            {/* Little triangular speech tail pointing right */}
            <span className="absolute -right-1 top-1/2 -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-[#EAA13E]" />
          </div>

          {/* Green WhatsApp Circle with Icon */}
          <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl shadow-[#25D366]/40 hover:bg-[#20ba59] transition-all duration-300">
            <MessageCircle className="w-6 h-6 fill-white text-transparent" />
          </div>
        </a>

        {/* Quick Connect / Phone Actions Toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          aria-label="Toggle clinical quick actions"
          className="w-10 h-10 rounded-full bg-[#700486] text-white shadow-xl shadow-[#700486]/30 flex items-center justify-center hover:bg-[#58036B] transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          {expanded ? <X className="w-4 h-4" /> : <Phone className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};
