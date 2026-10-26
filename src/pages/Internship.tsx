import React, { useState } from 'react';
import { 
  GraduationCap, 
  CheckCircle2, 
  BookOpen, 
  Users, 
  Award, 
  Calendar, 
  HelpCircle, 
  ChevronDown, 
  ArrowRight,
  ShieldCheck,
  Stethoscope
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { useScrollReveal } from '../animations/useScrollReveal';

interface InternshipProps {
  onOpenQuickConnect: (subject?: string) => void;
}

export const Internship: React.FC<InternshipProps> = ({ onOpenQuickConnect }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const advantageRef = useScrollReveal<HTMLElement>({ y: 40, stagger: 0.1 });
  const curriculumRef = useScrollReveal<HTMLElement>({ y: 40, stagger: 0.08 });

  const faqs = [
    {
      q: 'Who is eligible to apply for the Blooming Souls Internship?',
      a: 'Undergraduate and postgraduate students enrolled in Psychology, Clinical Psychology, Psychiatric Social Work, MBBS, or related human sciences. Working professionals transitioning into mental health are also eligible.'
    },
    {
      q: 'Is this internship conducted online, offline, or hybrid?',
      a: 'We provide both comprehensive Live Online batches (ideal for pan-India and international students) and In-Clinic observational immersions at our New Delhi clinical center.'
    },
    {
      q: 'Do interns get to sit in on real psychiatric consultations?',
      a: 'Due to strict medical ethics and patient confidentiality, live patient observation occurs only with explicit, written patient consent during designated training clinic hours. Otherwise, extensive case-simulations, anonymized case histories, and doctor debriefs are utilized.'
    },
    {
      q: 'Will I receive a verified certificate and recommendation letter?',
      a: 'Yes. Upon fulfilling course attendance, submitting case formulation assignments, and passing the end-of-term evaluation, interns receive an RCI-standard institutional certificate of completion and performance-based letters of recommendation.'
    }
  ];

  return (
    <div className="space-y-8 sm:space-y-10 lg:space-y-12 pb-12">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#FAF7FC] via-[#F3EAF6]/40 to-white pt-8 sm:pt-10 pb-8 border-b border-[#E8DDED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3EAF6] text-[#700486] text-xs sm:text-sm font-semibold mb-4 border border-[#E8DDED]">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Clinical Psychology & Psychiatric Training</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1D1D1F] tracking-tight mb-4">
            Start Your Journey in <br />
            <span className="text-[#700486]">Mental Healthcare</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#555555] leading-relaxed">
            Gain invaluable clinical exposure, case formulation mentorship, and diagnostic discernment under the direct supervision of practising psychiatrists and licensed clinical psychologists.
          </p>

          <div className="pt-5 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onOpenQuickConnect('Internship Application')}
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Apply for Internship
            </Button>
            <a
              href="#curriculum"
              className="px-6 py-3 rounded-full text-base font-semibold text-[#700486] bg-white border border-[#700486] hover:bg-[#FAF7FC] transition-colors"
            >
              View Curriculum & Eligibility
            </a>
          </div>
        </div>
      </section>

      {/* Why Intern With Us */}
      <section ref={advantageRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The Practical Advantage"
          title="Why Intern With"
          highlightedText="Blooming Souls?"
          description="Most psychology degrees are heavy on abstract theory and light on real-world diagnostic nuances. We bridge that gap with rigorous, ethical clinical training."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Live Case Discussions',
              desc: 'Analyze real, de-identified clinical histories spanning depression, adult ADHD, bipolar spectrum, and acute panic disorders with lead psychiatrists.',
              icon: <Stethoscope className="w-6 h-6 text-[#700486]" />
            },
            {
              title: 'Therapeutic Micro-Skills',
              desc: 'Learn the exact conversational dynamics of active listening, empathetic reflecting, CBT thought-record logging, and crisis de-escalation.',
              icon: <BookOpen className="w-6 h-6 text-[#700486]" />
            },
            {
              title: 'Ethical & RCI Standards',
              desc: 'Master the non-negotiables of clinical psychology: informed consent, patient confidentiality boundaries, and ethical record-keeping.',
              icon: <ShieldCheck className="w-6 h-6 text-[#700486]" />
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[28px] border border-[#E8DDED] shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7FC] border border-[#E8DDED] flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-[#1D1D1F] mb-2.5">
                {item.title}
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What You'll Learn (Curriculum) */}
      <section ref={curriculumRef} id="curriculum" className="bg-[#FAF7FC] py-16 sm:py-24 border-y border-[#E8DDED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Structured Syllabus"
            title="What You Will Master"
            highlightedText="During Your Cohort"
            description="Our 6-week intensive curriculum is designed to give you competitive confidence for master's programs and clinical employment."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                week: 'Module 01',
                title: 'Clinical Psychiatric Intake & Mental Status Examination (MSE)',
                details: 'How to conduct a clinical interview, assess speech, affect, thought content, sensorium, and risk factors.'
              },
              {
                week: 'Module 02',
                title: 'Diagnostic Criteria (DSM-5 & ICD-11 Deep Dive)',
                details: 'Differentiating clinical depression from grief, panic disorder from generalized anxiety, and spotting neurodivergence.'
              },
              {
                week: 'Module 03',
                title: 'Cognitive Behavioral Therapy (CBT) Frameworks',
                details: 'Identifying cognitive distortions, automatic negative thoughts (ANTs), behavioral activation scheduling, and exposure hierarchies.'
              },
              {
                week: 'Module 04',
                title: 'Pharmacotherapy & The Mind-Body Medical Axis',
                details: 'Understanding how SSRIs, SNRIs, and mood stabilizers interact with psychotherapy, debunking psychiatric medication myths.'
              },
              {
                week: 'Module 05',
                title: 'Relationship & Couples Therapy Modalities',
                details: 'Attachment styles in adulthood, Gottman method dispute mapping, and family systemic triangles.'
              },
              {
                week: 'Module 06',
                title: 'Final Case Presentation & Career Mentorship',
                details: 'Present a formulated mock case study to the senior faculty, receive clinical feedback, and CV guidance for M.Phil / Ph.D admissions.'
              }
            ].map((mod, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[24px] border border-[#E8DDED] shadow-sm flex items-start gap-4">
                <span className="px-3 py-1 rounded-full bg-[#F3EAF6] text-[#700486] font-bold text-xs flex-shrink-0 mt-0.5">
                  {mod.week}
                </span>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#1D1D1F] mb-1">
                    {mod.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                    {mod.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How to Join"
          title="Simple 3-Step"
          highlightedText="Application Process"
          description="We review applications on a rolling basis with cohort caps at 25 interns to ensure personalized mentor attention."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-7 rounded-[26px] bg-white border border-[#E8DDED] space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#700486] text-white font-bold text-lg flex items-center justify-center mx-auto shadow-md">
              1
            </div>
            <h4 className="font-heading font-bold text-lg text-[#1D1D1F]">Submit Application</h4>
            <p className="text-xs text-[#666666]">
              Fill out the online form with your academic details, statement of purpose, and preferred cohort timing.
            </p>
          </div>

          <div className="p-7 rounded-[26px] bg-white border border-[#E8DDED] space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#700486] text-white font-bold text-lg flex items-center justify-center mx-auto shadow-md">
              2
            </div>
            <h4 className="font-heading font-bold text-lg text-[#1D1D1F]">Short Telephonic Screening</h4>
            <p className="text-xs text-[#666666]">
              A brief 10-minute interaction with our training coordinator to understand your learning expectations.
            </p>
          </div>

          <div className="p-7 rounded-[26px] bg-white border border-[#E8DDED] space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#700486] text-white font-bold text-lg flex items-center justify-center mx-auto shadow-md">
              3
            </div>
            <h4 className="font-heading font-bold text-lg text-[#1D1D1F]">Cohort Onboarding</h4>
            <p className="text-xs text-[#666666]">
              Receive your study kit, clinical workbook, orientation schedule, and mentor group access.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Common Inquiries About the"
          highlightedText="Internship Program"
          align="center"
          className="mb-10"
        />

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E8DDED] overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-6 py-4 text-left flex items-center justify-between font-heading font-semibold text-base text-[#1D1D1F] hover:text-[#700486] cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform text-[#700486] ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-4 text-sm text-[#666666] leading-relaxed border-t border-[#E8DDED]/50 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final Application CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#700486] rounded-[32px] p-6 sm:p-10 text-white space-y-5 shadow-2xl">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">
            Applications for the Next Cohort Are Now Open
          </h2>
          <p className="text-white/85 text-base max-w-xl mx-auto leading-relaxed">
            Take a decisive step toward your career in clinical psychology or psychiatric care.
          </p>
          <div className="pt-2">
            <Button
              variant="white"
              size="lg"
              onClick={() => onOpenQuickConnect('Internship Application')}
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Apply for Internship
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
