export interface StepItem {
  step: string;
  title: string;
  description: string;
  image: string;
  duration?: string;
}

export const processSteps: StepItem[] = [
  {
    step: '01',
    title: 'Book Consultation',
    description: 'Select your preferred consultation modality (in-clinic sanctuary or secure tele-health), date, and doctor.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80',
    duration: '2 minutes online'
  },
  {
    step: '02',
    title: 'Clinical Evaluation',
    description: 'A comprehensive 45-60 min diagnostic assessment exploring symptoms, biological factors, lifestyle, and medical history.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    duration: '45-60 mins session'
  },
  {
    step: '03',
    title: 'Personalized Care Plan',
    description: 'Receive a bespoke roadmap integrating evidence-based psychotherapy, somatic coping drills, and mindful medical management.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=400&q=80',
    duration: 'Custom roadmap'
  },
  {
    step: '04',
    title: 'Ongoing Healing & Support',
    description: 'Steady follow-ups, cognitive reinforcement, and relapse prevention to ensure resilient, lifelong emotional wellbeing.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    duration: 'Sustainable growth'
  }
];
