import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Heart, 
  Users, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  Calendar,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { useScrollReveal } from '../animations/useScrollReveal';
import { useParallax } from '../animations/useParallax';

interface RelationshipProps {
  onOpenQuickConnect: (serviceTitle?: string) => void;
}

export const Relationship: React.FC<RelationshipProps> = ({ onOpenQuickConnect }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const editorialRef = useScrollReveal<HTMLElement>({ y: 40, stagger: 0.1 });
  const servicesSectionRef = useScrollReveal<HTMLElement>({ y: 40, stagger: 0.08 });
  const imageParallaxRef = useParallax<HTMLDivElement>({ speed: 16, direction: 'up' });

  const faqs = [
    {
      q: 'Do both partners need to attend couples counselling sessions?',
      a: 'Ideally yes, as seeing both partners in dialogue allows the therapist to observe real-time interactional dynamics. However, if your partner is currently hesitant, you can begin with individual relationship therapy to gain clarity and learn de-escalation skills.'
    },
    {
      q: 'Will the therapist pick sides or assign blame?',
      a: 'Never. Our couples therapists are trained to maintain absolute clinical neutrality. The client in our room is the relationship itself, not one partner against the other.'
    },
    {
      q: 'Can therapy help if there has been infidelity or broken trust?',
      a: 'Yes. Rebuilding trust after an affair requires a structured, multi-phase therapeutic approach: establishing safety and complete transparency, understanding underlying relational vulnerabilities, and gradually co-creating new boundaries.'
    },
    {
      q: 'How many sessions are typically required?',
      a: 'Most couples experience meaningful communication breakthroughs within 6 to 12 weekly sessions. We conduct periodic milestone reviews to evaluate mutual comfort and progress.'
    }
  ];

  return (
    <div className="space-y-8 sm:space-y-10 lg:space-y-12 pb-12">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#FAF7FC] via-[#F3EAF6]/40 to-white pt-8 sm:pt-10 pb-8 border-b border-[#E8DDED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3EAF6] text-[#700486] text-xs sm:text-sm font-semibold mb-4 border border-[#E8DDED]">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Couples & Marital Wellbeing</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1D1D1F] tracking-tight mb-4">
            Building Healthier <br />
            <span className="text-[#700486]">Relationships Together</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#555555] leading-relaxed">
            Every couple experiences friction, emotional silence, or communication roadblocks. Our specialized therapists create a safe, neutral space to transform conflict into deeper intimacy and mutual respect.
          </p>

          <div className="pt-5 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onOpenQuickConnect('Relationship Counselling')}
              icon={<Calendar className="w-5 h-5" />}
              iconPosition="left"
            >
              Book a Relationship Session
            </Button>
            <a
              href="#services"
              className="px-6 py-3 rounded-full text-base font-semibold text-[#700486] bg-white border border-[#700486] hover:bg-[#FAF7FC] transition-colors"
            >
              Explore Relationship Services
            </a>
          </div>
        </div>
      </section>

      {/* Why Relationship Counselling Matters (Editorial Section) */}
      <section ref={editorialRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div ref={imageParallaxRef} className="rounded-[32px] overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&w=1000&q=80"
                alt="Couple connecting in peaceful conversation"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 sm:bottom-6 sm:-left-6 bg-white p-5 rounded-2xl shadow-xl border border-[#E8DDED] max-w-[260px]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#700486] mb-1">
                <Heart className="w-3.5 h-3.5 fill-[#700486]" />
                <span>Emotionally Focused Care</span>
              </div>
              <p className="text-xs text-[#666666]">
                Moving from defensive reactive loops to emotional safety and bonding.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EAF6] text-[#700486] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Why It Matters</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1D1D1F] leading-tight">
              Couples Don't Drift Apart Overnight. They Drift in the Unspoken Moments.
            </h2>

            <p className="text-base text-[#555555] leading-relaxed">
              When misunderstandings accumulate over months or years, partners often enter predictable conflict spirals: one partner attacks with frustration while the other withdraws into silence. 
            </p>

            <p className="text-base text-[#555555] leading-relaxed">
              Our relationship counselling decodes these painful cycles. We help both partners feel heard without judgment, identify underlying unmet attachment needs, and replace defensiveness with genuine emotional responsiveness.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#FAF7FC] border border-[#E8DDED]">
                <div className="font-heading text-xl font-bold text-[#700486]">Neutral Space</div>
                <div className="text-xs text-[#666666] mt-0.5">Zero judgment or finger-pointing</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF7FC] border border-[#E8DDED]">
                <div className="font-heading text-xl font-bold text-[#700486]">Actionable Tools</div>
                <div className="text-xs text-[#666666] mt-0.5">Concrete dispute frameworks</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section: Exact 6 requested services */}
      <section ref={servicesSectionRef} id="services" className="bg-[#FAF7FC] py-16 sm:py-24 border-y border-[#E8DDED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Specialized Focus Areas"
            title="Comprehensive Support for"
            highlightedText="Your Relationship Journey"
            description="Whether preparing for marriage, untangling communication barriers, or rebuilding emotional intimacy."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Couples Counselling',
                desc: 'Rebuild emotional warmth, untangle recurring disputes, and restore mutual companionship in a safe, guided setting.',
                features: ['Identify toxic reactive loops', 'Restore physical & emotional intimacy', 'Neutral therapeutic facilitation']
              },
              {
                title: 'Pre-Marital Counselling',
                desc: 'Proactively align life values, financial philosophies, family expectations, and communication habits before marriage.',
                features: ['Clarify mutual long-term goals', 'Establish conflict resolution rules', 'In-law & boundary management']
              },
              {
                title: 'Communication Issues',
                desc: 'Overcome chronic misunderstandings, stone-walling, and passive aggression with structured active listening frameworks.',
                features: ['Gentle start-up techniques', 'Replacing blame with vulnerability', 'Listening to understand, not reply']
              },
              {
                title: 'Conflict Management',
                desc: 'Transform heated arguments into constructive problem-solving dialogues using evidence-based dispute de-escalation.',
                features: ['De-escalate emotional flooding', 'Agree to healthy timeouts', 'Solve perpetual solvable issues']
              },
              {
                title: 'Emotional Connection',
                desc: 'Reignite affection, emotional safety, and shared joy when living like distant roommates under the same roof.',
                features: ['Turn toward emotional bids', 'Deepen emotional vulnerability', 'Daily appreciation rituals']
              },
              {
                title: 'Family Relationships',
                desc: 'Navigate multi-generational household stress, parenting differences, boundary-setting with in-laws, and systemic harmony.',
                features: ['Parenting alignment', 'Healthy family boundaries', 'Cross-generational mediation']
              }
            ].map((area, idx) => (
              <div key={idx} className="bg-white p-7 rounded-[26px] border border-[#E8DDED] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#F3EAF6] text-[#700486] font-bold text-sm flex items-center justify-center mb-4 group-hover:bg-[#700486] group-hover:text-white transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#1D1D1F] mb-2.5 group-hover:text-[#700486] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed mb-5">
                    {area.desc}
                  </p>
                  <div className="space-y-2 mb-6">
                    {area.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-[#444444]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#700486] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => onOpenQuickConnect(area.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#700486] hover:text-[#58036B] transition-colors cursor-pointer"
                >
                  <span>Book Consultation for this</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section: Understand, Communicate, Heal, Grow Together */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Proven Framework"
          title="The Relationship"
          highlightedText="Therapy Journey"
          description="A progressive, compassionate roadmap designed to take you from painful conflict to lasting emotional harmony."
          align="center"
          className="mb-14 sm:mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {[
            {
              step: '01',
              title: 'Understand',
              desc: 'Unpack the unspoken emotional patterns, individual attachment styles, and past hurts without pointing fingers.'
            },
            {
              step: '02',
              title: 'Communicate',
              desc: 'Learn structured de-escalation tools to express vulnerability, set boundaries, and listen without becoming defensive.'
            },
            {
              step: '03',
              title: 'Heal',
              desc: 'Process accumulated resentments, repair broken trust, and release toxic blame cycles through guided empathy exercises.'
            },
            {
              step: '04',
              title: 'Grow Together',
              desc: 'Co-create a shared vision for your future, establish daily intimacy rituals, and build an enduring partnership.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-[26px] border border-[#E8DDED] shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center relative"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#700486] to-[#9214ab] text-white font-heading font-extrabold text-lg flex items-center justify-center mb-5 shadow-lg shadow-[#700486]/20">
                {item.step}
              </div>
              <h3 className="font-heading font-bold text-xl text-[#1D1D1F] mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Relationship FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Questions & Answers"
          title="Common Inquiries Regarding"
          highlightedText="Relationship Counselling"
          align="center"
          className="mb-10"
        />

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E8DDED] overflow-hidden"
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

      {/* Final Relationship CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#700486] rounded-[32px] p-6 sm:p-10 text-white space-y-5 shadow-2xl">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">
            Take the First Step Toward Closer Connection
          </h2>
          <p className="text-white/85 text-base max-w-xl mx-auto leading-relaxed">
            Couples therapy is not a sign of failure—it is a proactive investment in the person and family you love most.
          </p>
          <div className="pt-2">
            <Button
              variant="white"
              size="lg"
              onClick={() => onOpenQuickConnect('Relationship Counselling')}
              icon={<Calendar className="w-4 h-4" />}
              iconPosition="left"
            >
              Book a Relationship Session
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
