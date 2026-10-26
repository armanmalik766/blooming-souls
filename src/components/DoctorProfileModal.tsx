import React from 'react';
import { X, Award, Globe, Clock, CheckCircle2, Calendar } from 'lucide-react';
import { Professional } from '../data/professionals';
import { Button } from './Button';

interface DoctorProfileModalProps {
  doctor: Professional | null;
  onClose: () => void;
  onBook: (doctorName: string) => void;
}

export const DoctorProfileModal: React.FC<DoctorProfileModalProps> = ({
  doctor,
  onClose,
  onBook
}) => {
  if (!doctor) return null;

  return (
    <div
      id="doctor-profile-modal"
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-xl rounded-[32px] shadow-2xl border border-[#E8DDED] overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-br from-[#FAF7FC] via-[#F3EAF6] to-white p-6 sm:p-8 border-b border-[#E8DDED]">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/80 hover:bg-white text-[#1D1D1F] transition-colors shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#700486] p-1 bg-white shadow-md flex-shrink-0">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover object-top rounded-full"
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

            <div className="text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#700486] text-white text-xs font-semibold mb-1.5">
                {doctor.designation}
              </div>
              <h3 className="font-heading font-bold text-2xl text-[#1D1D1F]">
                {doctor.name}
              </h3>
              <p className="text-xs text-[#700486] font-semibold">
                {doctor.qualification}
              </p>
              <p className="text-xs text-[#666666] mt-1">
                {doctor.experience}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h4 className="font-heading font-bold text-base text-[#1D1D1F] mb-2">
              Clinical Background & Philosophy
            </h4>
            <p className="text-sm text-[#444444] leading-relaxed">
              {doctor.bio}
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-base text-[#1D1D1F] mb-3">
              Clinical Specializations & Focus
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {doctor.focusAreas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAF7FC] border border-[#E8DDED] text-xs font-medium text-[#1D1D1F]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#700486] flex-shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#666666]">
            <div className="p-3 rounded-2xl bg-[#FAF7FC] border border-[#E8DDED] flex items-center gap-2.5">
              <Globe className="w-4 h-4 text-[#700486]" />
              <div>
                <span className="font-semibold text-[#1D1D1F] block">Languages</span>
                {doctor.languages.join(', ')}
              </div>
            </div>
            <div className="p-3 rounded-2xl bg-[#FAF7FC] border border-[#E8DDED] flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#700486]" />
              <div>
                <span className="font-semibold text-[#1D1D1F] block">Availability</span>
                {doctor.availability}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-[#FAF7FC] border-t border-[#E8DDED] flex items-center justify-between">
          <span className="text-xs text-[#666666]">
            Confidential Consultation
          </span>
          <Button
            variant="primary"
            size="md"
            onClick={() => {
              onClose();
              onBook(doctor.name);
            }}
            icon={<Calendar className="w-4 h-4" />}
            iconPosition="right"
          >
            Book Session with {doctor.name.split(' ')[1] || doctor.name}
          </Button>
        </div>
      </div>
    </div>
  );
};
