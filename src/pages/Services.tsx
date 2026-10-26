import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Brain, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Calendar,
  Sparkles,
  Filter,
  Layers,
  SlidersHorizontal,
  X,
  Shield,
  HelpCircle,
  PhoneCall,
  MessageCircle,
  Heart
} from 'lucide-react';
import { services, Service } from '../data/services';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { ServicesSlider } from '../components/ServicesSlider';
import { motion, AnimatePresence } from 'motion/react';
import { useScrollReveal } from '../animations/useScrollReveal';

interface ServicesProps {
  onOpenQuickConnect: (serviceTitle?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuickConnect }) => {
  const [searchParams] = useSearchParams();
  const focusParam = searchParams.get('focus');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalService, setActiveModalService] = useState<Service | null>(null);
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('grid');
  const standardsRef = useScrollReveal<HTMLElement>({ y: 40, stagger: 0.08 });

  const categories = [
    'All',
    'Psychiatry & Medical',
    'Psychotherapy',
    'Counselling',
    'Relationship & Family',
    'Youth & Adolescents',
    'Career & Growth',
    'Assessments'
  ];

  // Auto focus if URL query has focus
  useEffect(() => {
    if (focusParam) {
      const found = services.find(s => s.slug === focusParam || s.id === focusParam);
      if (found) {
        setActiveModalService(found);
        setTimeout(() => {
          const el = document.getElementById(`service-card-${found.slug}`) || 
                     document.getElementById(`service-card-${found.id}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 150);
      }
    }
  }, [focusParam]);

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(s => s.category === selectedCategory);

  const faqs = [
    {
      q: 'What is the key difference between Psychotherapy and Counselling?',
      a: 'Psychotherapy delves into deep-seated subconscious patterns, chronic clinical conditions (like clinical depression or anxiety disorders), and past emotional trauma. Counselling typically focuses on immediate, situational stressors such as workplace burnout, life transitions, grief, or personal problem-solving.'
    },
    {
      q: 'Are sessions available online or in-clinic?',
      a: 'We offer both formats with equal clinical efficacy! In-clinic sessions take place in our private, calming consultation suites. Secure telehealth sessions occur via encrypted HIPAA-compliant video links with full confidentiality.'
    },
    {
      q: 'How does Psychometric Assessment work at Blooming Souls?',
      a: 'Our certified psychometricians utilize standardized, normed test batteries (e.g., MMPI, MCMI, Raven’s SPM, ADHD scales). You complete the assessment in a structured setting, followed by comprehensive statistical scoring and a detailed clinical report reviewed in a dedicated 1-on-1 feedback session.'
    },
    {
      q: 'Can couples attend therapy if one partner is hesitant?',
      a: 'Yes. While dual participation yields the best collaborative outcomes, individual pre-counseling can help the willing partner build communication clarity and emotional regulation strategies that constructively influence the relationship dynamic.'
    }
  ];

  return (
    <div className="space-y-8 sm:space-y-10 lg:space-y-12 pb-12">
      {/* Top Hero Section matching Screenshot 1 & 2 Aesthetic */}
      <section className="bg-gradient-to-b from-[#FAF7FC] via-[#F3EAF6]/30 to-white pt-6 sm:pt-10 pb-8 border-b border-[#E8DDED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            {/* Badge matching screenshot: — Our Services */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3EAF6] text-[#700486] text-xs sm:text-sm font-semibold border border-[#E8DDED]">
              <span className="w-2 h-2 rounded-full bg-[#700486]" />
              <span>Our Services</span>
            </div>

            {/* Main Headline matching Screenshot 1 & 2 */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#700486] tracking-tight leading-[1.15]">
              Comprehensive services care for mind and wellness
            </h1>

            <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-2xl mx-auto pt-2">
              From clinical psychotherapy and empathetic personal counseling to relationship repair, psychometric testing, and career mentoring — explore specialized treatments crafted for holistic emotional health.
            </p>

            {/* View Mode Toggle: Interactive Slider vs Full Grid */}
            <div className="pt-4 flex items-center justify-center gap-3">
              <div className="inline-flex items-center p-1 rounded-full bg-white border border-[#E8DDED] shadow-xs">
                <button
                  onClick={() => setViewMode('slider')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    viewMode === 'slider'
                      ? 'bg-[#700486] text-white shadow-xs'
                      : 'text-[#666666] hover:text-[#700486]'
                  }`}
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Showcase Slider</span>
                </button>

                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    viewMode === 'grid'
                      ? 'bg-[#700486] text-white shadow-xs'
                      : 'text-[#666666] hover:text-[#700486]'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>All Services Grid</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main View Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {viewMode === 'slider' ? (
          <div>
            {/* The Animated Carousel Slider matching Screenshot 2 */}
            <ServicesSlider
              showHeading={false}
              onBookService={(title) => onOpenQuickConnect(title)}
              onSelectService={(service) => setActiveModalService(service)}
            />

            {/* Switch to detailed view link */}
            <div className="mt-12 text-center">
              <button
                onClick={() => setViewMode('grid')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#700486] hover:underline cursor-pointer"
              >
                <span>Prefer to compare all services side by side? Switch to Grid View</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#700486] text-white shadow-md shadow-[#700486]/20'
                      : 'bg-white text-[#555555] hover:text-[#700486] hover:bg-[#FAF7FC] border border-[#E8DDED]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* 3-Column Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onClickDetails={(s) => setActiveModalService(s)}
                  onBookNow={(title) => onOpenQuickConnect(title)}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Clinical Methodology & What to Expect */}
      <section ref={standardsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7FC] border border-[#E8DDED] rounded-[36px] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#700486] uppercase tracking-wider">
                <Shield className="w-4 h-4" />
                <span>Clinical Assurance</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1D1D1F] tracking-tight">
                Our Golden Standards in Psychological Care
              </h2>
              <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                Whether you select individual psychotherapy, couples guidance, or psychometric assessments, every clinician adheres strictly to global ethics and evidence-based protocols.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-[#E8DDED] shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#F3EAF6] text-[#700486] flex items-center justify-center font-bold text-sm mb-3">
                  01
                </div>
                <h3 className="font-bold text-base text-[#1D1D1F] mb-1">100% Confidentiality</h3>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Your sessions, clinical notes, and assessment scores are protected by ironclad medical privacy standards.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E8DDED] shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#F3EAF6] text-[#700486] flex items-center justify-center font-bold text-sm mb-3">
                  02
                </div>
                <h3 className="font-bold text-base text-[#1D1D1F] mb-1">Evidence-Based Tools</h3>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Interventions rooted strictly in CBT, EFT, Psychodynamic models, and scientifically normed test batteries.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E8DDED] shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#F3EAF6] text-[#700486] flex items-center justify-center font-bold text-sm mb-3">
                  03
                </div>
                <h3 className="font-bold text-base text-[#1D1D1F] mb-1">Neutral & Safe Environment</h3>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Zero judgment, zero pre-conceived biases. A space where you are truly seen, validated, and heard.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E8DDED] shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#F3EAF6] text-[#700486] flex items-center justify-center font-bold text-sm mb-3">
                  04
                </div>
                <h3 className="font-bold text-base text-[#1D1D1F] mb-1">Continuity of Care</h3>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Consistent therapeutic oversight with the same clinician to foster genuine therapeutic alliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7FC] text-[#700486] text-xs font-semibold border border-[#E8DDED] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Queries</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
            Frequently Asked Questions About Our Services
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#E8DDED] shadow-xs"
            >
              <h3 className="font-heading font-bold text-base sm:text-lg text-[#700486] mb-2">
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Consultation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#700486] rounded-[32px] p-6 sm:p-10 text-center text-white space-y-5 shadow-xl relative overflow-hidden">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Unsure Which Clinical Service Fits Your Needs?
          </h2>
          <p className="text-white/85 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Our clinical triage desk will listen to your symptoms in confidence and pair you with the best-matched psychologist, counselor, or psychometrist.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              variant="outline"
              size="lg"
              onClick={() => onOpenQuickConnect()}
              icon={<Calendar className="w-4 h-4" />}
              iconPosition="left"
              className="bg-white text-[#700486] hover:bg-white/90 border-transparent shadow-md"
            >
              Request Quick Connect
            </Button>
            <a
              href="https://wa.me/918826533260?text=Hello%20Blooming%20Souls%2C%20I%20need%20help%20choosing%20the%20right%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold shadow-md transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>WhatsApp Triage Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* Detailed Service Inspection Modal */}
      <AnimatePresence>
        {activeModalService && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveModalService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-white w-full max-w-2xl rounded-[28px] sm:rounded-[32px] shadow-2xl border border-[#E8DDED] max-h-[90vh] overflow-y-auto relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Pinned Modal Close Button */}
              <button
                onClick={() => setActiveModalService(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer shadow-md backdrop-blur-sm z-30"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Top Banner with Image */}
              <div className="relative aspect-[16/9] sm:aspect-[21/9] min-h-[220px] w-full overflow-hidden bg-[#FAF7FC] shrink-0">
                <img
                  src={activeModalService.image}
                  alt={activeModalService.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15" />

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-1.5 bg-[#700486] px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 shadow-sm">
                    <Sparkles className="w-3 h-3" />
                    <span>{activeModalService.category}</span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
                    {activeModalService.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body Content */}
              <div className="p-6 sm:p-8 space-y-6 text-sm text-[#444444]">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 bg-[#FAF7FC] border border-[#E8DDED] px-3 py-1.5 rounded-full text-xs font-medium text-[#555555]">
                    <Clock className="w-3.5 h-3.5 text-[#700486]" />
                    {activeModalService.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-[#FAF7FC] border border-[#E8DDED] px-3 py-1.5 rounded-full text-xs font-medium text-[#555555]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {activeModalService.format}
                  </span>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-sm uppercase text-[#700486] tracking-wider mb-2">
                    Clinical Overview
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed text-[#333333]">
                    {activeModalService.fullDescription}
                  </p>
                </div>

                {/* Methodologies */}
                {activeModalService.methodologies && (
                  <div>
                    <h4 className="font-heading font-bold text-xs uppercase text-[#700486] tracking-wider mb-2">
                      Key Methodologies & Frameworks
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeModalService.methodologies.map((method, idx) => (
                        <span key={idx} className="bg-[#FAF7FC] border border-[#E8DDED] px-3 py-1 rounded-full text-xs font-medium text-[#444444]">
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Core Benefits */}
                {activeModalService.benefits && (
                  <div>
                    <h4 className="font-heading font-bold text-xs uppercase text-[#700486] tracking-wider mb-3">
                      Therapeutic Outcomes & Deliverables
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeModalService.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#FAF7FC] border border-[#E8DDED]">
                          <CheckCircle2 className="w-4 h-4 text-[#700486] flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm font-medium text-[#333333] leading-snug">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-4 rounded-2xl bg-[#F3EAF6]/40 border border-[#E8DDED]">
                  <span className="text-xs font-bold text-[#700486] block mb-1">
                    Who is this session ideal for?
                  </span>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {activeModalService.idealFor}
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 p-4 sm:p-6 bg-white/95 backdrop-blur-md border-t border-[#E8DDED] flex items-center justify-between gap-3 mt-auto shadow-sm z-20">
                <button
                  onClick={() => setActiveModalService(null)}
                  className="px-4 py-2 rounded-full border border-[#E8DDED] text-xs font-semibold text-[#666666] hover:bg-[#FAF7FC] transition-colors cursor-pointer"
                >
                  Close
                </button>

                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    const serviceName = activeModalService.title;
                    setActiveModalService(null);
                    onOpenQuickConnect(serviceName);
                  }}
                  icon={<Calendar className="w-4 h-4" />}
                  iconPosition="left"
                >
                  Book {activeModalService.title}
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
