import React from 'react';
import { Award, Clock, Globe, Calendar, ArrowRight } from 'lucide-react';
import { Professional } from '../data/professionals';
import { Button } from './Button';

interface DoctorCardProps {
  doctor: Professional;
  onBookConsultation?: (doctorName: string) => void;
  onViewProfile?: (doctor: Professional) => void;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ 
  doctor, 
  onBookConsultation,
  onViewProfile 
}) => {
  return (
    <div
      id={`doctor-card-${doctor.id}`}
      className="group bg-white rounded-[28px] overflow-hidden border border-[#E8DDED] shadow-sm hover:shadow-xl hover:shadow-[#700486]/10 transition-all duration-300 flex flex-col hover:-translate-y-1"
    >
      {/* Photo Frame with subtle modern curved aesthetic */}
      <div className="relative pt-6 px-6 bg-gradient-to-b from-[#FAF7FC] to-white flex items-center justify-center overflow-hidden">
        {/* Decorative concentric circles behind portrait */}
        <div className="absolute w-48 h-48 rounded-full border border-[#E8DDED]/80 -top-6 -right-6 pointer-events-none" />
        <div className="absolute w-64 h-64 rounded-full border border-[#F3EAF6] -top-12 -right-12 pointer-events-none" />

        {/* Doctor Image */}
        <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full p-1.5 bg-white shadow-md border-2 border-[#E8DDED] overflow-hidden group-hover:border-[#700486] transition-colors duration-300">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.dataset.fallback && doctor.id === 'sadaf-malik') {
                target.dataset.fallback = 'true';
                target.src = 'https://bloomingsouls.in/wp-content/uploads/2025/12/sadaf-saeed.webp';
              }
            }}
          />
        </div>

        {/* Experience Pill Badge */}
        <div className="absolute bottom-2 left-6 bg-white/95 backdrop-blur-sm border border-[#E8DDED] px-3 py-1 rounded-full text-xs font-semibold text-[#700486] shadow-sm flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-[#700486]" />
          <span>{doctor.experience}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
        <div>
          <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#700486]">
            {doctor.designation}
          </div>
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#1D1D1F] mb-1">
            {doctor.name}
          </h3>
          <p className="text-xs text-[#666666] font-medium mb-3">
            {doctor.qualification}
          </p>

          <p className="text-sm text-[#444444] mb-4 line-clamp-2 leading-relaxed">
            {doctor.specialization}
          </p>

          {/* Languages & Availability */}
          <div className="space-y-1.5 pt-3 border-t border-[#E8DDED]/60 text-xs text-[#666666]">
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#700486]" />
              <span>Speaks: {doctor.languages.join(', ')}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#700486]" />
              <span className="truncate">{doctor.availability}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 mt-4 border-t border-[#E8DDED]/60 grid grid-cols-2 gap-2.5">
          <button
            onClick={() => onViewProfile ? onViewProfile(doctor) : null}
            className="w-full py-2.5 px-3 rounded-full text-xs font-semibold text-[#700486] bg-[#F3EAF6] hover:bg-[#E8DDED] transition-colors text-center cursor-pointer"
          >
            View Bio
          </button>

          <Button
            variant="primary"
            size="sm"
            onClick={() => onBookConsultation ? onBookConsultation(doctor.name) : null}
            className="w-full text-xs !py-2.5 !px-3"
            icon={<Calendar className="w-3.5 h-3.5" />}
            iconPosition="right"
          >
            Book
          </Button>
        </div>
      </div>
    </div>
  );
};
