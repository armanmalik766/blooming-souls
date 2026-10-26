import React, { useState } from 'react';
import { 
  X, 
  MessageCircle, 
  Phone, 
  Mail, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ShieldCheck,
  Send
} from 'lucide-react';
import { Button } from './Button';
import { CLINIC_WHATSAPP_NUMBER } from '../config/contact';

interface QuickConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedDoctor?: string;
}

export const QuickConnectModal: React.FC<QuickConnectModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
  preselectedDoctor = ''
}) => {
  const [activeTab, setActiveTab] = useState<'instant' | 'form'>('instant');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: preselectedService || 'Psychiatric Consultation',
    preferredDate: '',
    preferredTime: 'Morning (10 AM - 1 PM)',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    if (!(form instanceof HTMLFormElement) || !form.reportValidity()) return;

    const requiredFields = [
      formData.fullName,
      formData.phone,
      formData.email,
      formData.service,
      formData.preferredDate,
      formData.preferredTime
    ];

    if (requiredFields.some((field) => !field.trim())) {
      setFormError('Please complete all required fields before continuing.');
      return;
    }

    setFormError('');
    setIsSubmitting(true);

    const appointmentMessage = [
      'New Appointment Request — Blooming Souls',
      '',
      `Full Name: ${formData.fullName.trim()}`,
      `Patient WhatsApp Number: ${formData.phone.trim()}`,
      `Email: ${formData.email.trim()}`,
      `Preferred Service: ${formData.service}`,
      `Preferred Date: ${formData.preferredDate}`,
      `Preferred Time: ${formData.preferredTime}`,
      '',
      'Please contact me to confirm my appointment.'
    ].join('\n');
    const whatsappUrl = `https://wa.me/${CLINIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(appointmentMessage)}`;
    const whatsappWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    if (!whatsappWindow) {
      setFormError('We could not open WhatsApp. Please allow pop-ups and try again.');
      setIsSubmitting(false);
      return;
    }

    setFormSubmitted(true);
    setIsSubmitting(false);
  };

  const handleReset = () => {
    setFormSubmitted(false);
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Blooming Souls, I would like to inquire about a consultation. ${preselectedDoctor ? `Preferred Specialist: ${preselectedDoctor}` : ''}`
  );

  return (
    <div
      id="quick-connect-overlay"
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg rounded-[30px] shadow-2xl border border-[#E8DDED] overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#700486] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-semibold text-[#FAF7FC] mb-2 backdrop-blur-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            100% Confidential & Secure
          </div>
          <h3 className="font-heading text-2xl font-bold">
            Quick Connect with Us
          </h3>
          <p className="text-white/80 text-sm mt-1">
            Choose how you would like to reach out to our clinical team.
          </p>

          {/* Mode Switcher */}
          <div className="grid grid-cols-2 gap-2 mt-5 bg-black/15 p-1 rounded-full">
            <button
              onClick={() => setActiveTab('instant')}
              className={`py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === 'instant'
                  ? 'bg-white text-[#700486] shadow-sm'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Instant Contact
            </button>
            <button
              onClick={() => setActiveTab('form')}
              className={`py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === 'form'
                  ? 'bg-white text-[#700486] shadow-sm'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Schedule Consultation
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {activeTab === 'instant' ? (
            <div className="space-y-3.5">
              {/* WhatsApp Direct */}
              <a
                href={`https://wa.me/${CLINIC_WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl border border-emerald-200 bg-emerald-50/60 hover:bg-emerald-50 transition-all group shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md shadow-[#25D366]/20">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-[#1D1D1F] group-hover:text-emerald-800">
                      Chat on WhatsApp
                    </h4>
                    <p className="text-xs text-[#555555]">
                      Instant response during clinical hours (Mon–Sat 12 PM - 6 PM)
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-800 bg-white px-3 py-1.5 rounded-full border border-emerald-200">
                  Chat Now →
                </span>
              </a>

              {/* Direct Phone Call */}
              <a
                href={`tel:+${CLINIC_WHATSAPP_NUMBER}`}
                className="flex items-center justify-between p-4 rounded-2xl border border-[#E8DDED] bg-[#FAF7FC] hover:bg-[#F3EAF6] transition-all group shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#700486] text-white flex items-center justify-center shadow-md shadow-[#700486]/20">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-[#1D1D1F] group-hover:text-[#700486]">
                      Direct Clinic Call
                    </h4>
                    <p className="text-xs text-[#666666]">
                      +91 88265 33260 • Speak with our desk
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#700486] bg-white px-3 py-1.5 rounded-full border border-[#E8DDED]">
                  Call Us →
                </span>
              </a>

              {/* Direct Email */}
              <a
                href="mailto:info@bloomingsouls.in?subject=Consultation Inquiry"
                className="flex items-center justify-between p-4 rounded-2xl border border-[#E8DDED] bg-white hover:bg-[#FAF7FC] transition-all group shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF7FC] text-[#700486] border border-[#E8DDED] flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-[#1D1D1F] group-hover:text-[#700486]">
                      Email Inquiries
                    </h4>
                    <p className="text-xs text-[#666666]">
                      info@bloomingsouls.in • Responds promptly
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#700486] bg-[#FAF7FC] px-3 py-1.5 rounded-full border border-[#E8DDED]">
                  Email →
                </span>
              </a>

              {/* Switch to detailed form */}
              <div className="pt-4 text-center">
                <button
                  onClick={() => setActiveTab('form')}
                  className="text-xs font-semibold text-[#700486] hover:underline"
                >
                  Prefer to request a specific date & time? Fill out the appointment form →
                </button>
              </div>
            </div>
          ) : formSubmitted ? (
            <div className="text-center py-8 px-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-heading font-bold text-2xl text-[#1D1D1F]">
                WhatsApp Appointment Ready
              </h4>
              <p className="text-sm text-[#666666] leading-relaxed max-w-sm mx-auto">
                Your appointment details are ready in WhatsApp. Please press <strong>Send</strong> in WhatsApp to submit your request. The clinic will contact you to confirm your slot.
              </p>
              <div className="pt-2">
                <Button variant="primary" size="md" onClick={handleReset}>
                  Close Window
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1D1D1F] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Ayesha Malik"
                  aria-invalid={Boolean(formError)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DDED] text-sm text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#700486]/30"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1D1D1F] mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 88265 00000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DDED] text-sm text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#700486]/30"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1D1D1F] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DDED] text-sm text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#700486]/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1D1D1F] mb-1">
                  Preferred Service / Specialist
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DDED] text-sm text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#700486]/30 bg-white"
                >
                  <option value="Psychotherapy">Psychotherapy</option>
                  <option value="Counseling Session">Counseling Session</option>
                  <option value="Relationship Therapy">Relationship Therapy</option>
                  <option value="Career Guidance">Career Guidance</option>
                  <option value="Psychometric Assessments">Psychometric Assessments</option>
                  <option value="Family Counselling">Family Counselling</option>
                  <option value="Psychiatric Consultation">Psychiatric Consultation (Medical Evaluation)</option>
                  <option value="Clinical Internship Inquiry">Clinical Internship Inquiry</option>
                  <option value="General Consultation">General Clinical Triage</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1D1D1F] mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DDED] text-sm text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#700486]/30 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1D1D1F] mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    required
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DDED] text-sm text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#700486]/30 bg-white"
                  >
                    <option>Morning (10:00 AM - 1:00 PM)</option>
                    <option>Afternoon (2:00 PM - 5:00 PM)</option>
                    <option>Evening (5:00 PM - 8:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1D1D1F] mb-1">
                  Brief Note (Optional & Confidential)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share anything you would like the doctor to know in advance..."
                  className="w-full px-3.5 py-2 rounded-xl border border-[#E8DDED] text-sm text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#700486]/30 resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                className="w-full mt-2"
                disabled={isSubmitting}
                icon={<Send className="w-4 h-4" />}
                iconPosition="right"
              >
                {isSubmitting ? 'Opening WhatsApp...' : 'Schedule Appointment'}
              </Button>
              {formError && (
                <p role="alert" className="text-sm text-red-600 text-center">
                  {formError}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
