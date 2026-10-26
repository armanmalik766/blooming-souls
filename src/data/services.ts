export interface Service {
  id: string;
  title: string;
  category: 'Psychiatry & Medical' | 'Psychotherapy' | 'Counselling' | 'Relationship & Family' | 'Youth & Adolescents' | 'Career & Growth' | 'Assessments';
  image: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  slug: string;
  duration: string;
  format: string;
  benefits: string[];
  idealFor: string;
  methodologies?: string[];
  keyTopics?: string[];
}

export const services: Service[] = [
  {
    id: 'psychiatry',
    title: 'Psychiatry',
    category: 'Psychiatry & Medical',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Expert psychiatric care for conditions like anxiety, depression, mood disorders and more.',
    fullDescription: 'Our psychiatric practice delivers thorough medical assessments, accurate diagnostic clarity, and conservative pharmacological care for mood disorders, severe anxiety, depression, bipolar disorder, and acute psychological crises. Prescriptions and psychiatric guidance are coordinated with compassion, patient autonomy, and continuous monitoring.',
    icon: 'Brain',
    slug: 'psychiatry',
    duration: '45 - 60 Mins',
    format: 'In-Clinic & Telehealth',
    benefits: [
      'Comprehensive medical and psychiatric diagnostic evaluation aligned with DSM-5-TR',
      'Conservative, safe pharmacotherapy with careful side-effect monitoring',
      'Integrated care combining minimal effective medication with ongoing psychotherapy',
      'Specialized protocols for clinical depression, panic disorders, and bipolar conditions'
    ],
    idealFor: 'Individuals experiencing persistent mood disorders, severe anxiety, panic attacks, or clinical symptoms requiring psychiatric evaluation and medical management.',
    methodologies: ['Neurobiological Evaluation', 'Evidence-Based Psychopharmacology', 'Collaborative Care Model', 'Symptom Trajectory Tracking'],
    keyTopics: ['Depression & Mood Disorders', 'Bipolar Affective Care', 'Panic & Severe Anxiety', 'Psychopharmacology Review']
  },
  {
    id: 'psychotherapy',
    title: 'Psychotherapy',
    category: 'Psychotherapy',
    image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Evidence-based therapy to help you understand yourself, heal, and build a healthier life.',
    fullDescription: 'Our psychotherapy sessions provide a clinical, compassionate sanctuary to unpack long-standing mental health struggles, subconscious patterns, and acute emotional distress. Facilitated by experienced clinical psychologists, sessions integrate Cognitive Behavioral Therapy (CBT), Psychodynamic therapy, and Dialectical Behavior Therapy (DBT).',
    icon: 'MessageCircle',
    slug: 'psychotherapy',
    duration: '50 - 60 Mins',
    format: 'In-Clinic & Secure Online',
    benefits: [
      'Unpacking foundational root causes and trauma responses',
      'Overcoming persistent depressive episodes and anxiety loops',
      'Cognitive restructuring to replace destructive internal narratives',
      'Nervous system stabilization and emotional regulation tools'
    ],
    idealFor: 'Individuals navigating chronic depression, overwhelming anxiety, unresolved past trauma, grief, or mood imbalances.',
    methodologies: ['Cognitive Behavioral Therapy (CBT)', 'Psychodynamic Therapy', 'Acceptance & Commitment Therapy (ACT)', 'Mindfulness-Based CBT'],
    keyTopics: ['Depression & Mood', 'Anxiety & Panic', 'Trauma & PTSD', 'Emotional Healing']
  },
  {
    id: 'counseling',
    title: 'Counseling Session',
    category: 'Counselling',
    image: '/images/testimonials/image.png',
    shortDescription: 'A safe and supportive space to navigate life transitions, stress, and emotional challenges.',
    fullDescription: 'Counseling focuses on the here-and-now challenges of daily life. Whether you are navigating professional burnout, relationship turbulence, a difficult life transition, or self-esteem struggles, our empathetic counselors provide clarity, objective listening, and practical problem-solving strategies.',
    icon: 'Users',
    slug: 'counseling',
    duration: '45 - 50 Mins',
    format: 'In-Clinic & Secure Online',
    benefits: [
      'Objective, compassionate guidance without judgment',
      'Actionable daily stress management and burnout recovery protocols',
      'Clarity during major life choices, breakups, or career shifts',
      'Constructive emotional expression and self-worth rebuilding'
    ],
    idealFor: 'Anyone feeling emotionally exhausted, overwhelmed by modern work-life demands, or in need of an empathetic listening ear.',
    methodologies: ['Person-Centered Counseling', 'Solution-Focused Brief Therapy (SFBT)', 'Stress Inoculation Training', 'Somatic Grounding'],
    keyTopics: ['Workplace Burnout', 'Life Transitions', 'Stress & Worry', 'Self-Esteem']
  },
  {
    id: 'relationship-therapy',
    title: 'Relationship Therapy',
    category: 'Relationship & Family',
    image: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Support for couples and individuals to improve communication, rebuild trust, and strengthen relationships.',
    fullDescription: 'Every meaningful relationship experiences seasons of misunderstanding or emotional drift. Grounded in Gottman Method and Emotionally Focused Therapy (EFT), our relationship sessions help partners communicate openly, resolve conflict constructively, and rediscover genuine emotional and physical intimacy.',
    icon: 'Heart',
    slug: 'relationship-therapy',
    duration: '60 - 75 Mins',
    format: 'In-Clinic & Secure Online',
    benefits: [
      'De-escalating cycles of defensiveness, criticism, and stonewalling',
      'Restoring mutual trust and emotional safety after breach',
      'Pre-marital alignment on finances, values, parenting, and boundaries',
      'Deepening emotional connection and rekindling shared warmth'
    ],
    idealFor: 'Couples seeking to break hurtful conflict loops, heal from infidelity, prepare for marriage, or revitalize emotional closeness.',
    methodologies: ['Gottman Method Couples Therapy', 'Emotionally Focused Therapy (EFT)', 'Non-Violent Communication (NVC)'],
    keyTopics: ['Communication Breakdown', 'Trust Restoration', 'Pre-Marital Counseling', 'Intimacy & Connection']
  },
  {
    id: 'family-counselling',
    title: 'Family Counselling',
    category: 'Relationship & Family',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Guidance and therapeutic support to resolve family conflicts, improve communication, and restore harmony.',
    fullDescription: 'Family dynamics can become strained through unresolved grievances, generational differences, parenting challenges, or life crises. Our systemic family counselling provides a neutral, compassionate forum where every family member feels heard, emotional safety is restored, and constructive communication patterns are built.',
    icon: 'HeartHandshake',
    slug: 'family-counselling',
    duration: '60 - 75 Mins',
    format: 'In-Clinic & Secure Online',
    benefits: [
      'Healing deep-rooted intergenerational friction and emotional hurt',
      'Fostering empathetic, non-blaming listening among all family members',
      'Collaborative boundary-setting between parents, children, and extended family',
      'Strengthening family resilience during major transitions, loss, or separation'
    ],
    idealFor: 'Families experiencing chronic conflict, breakdown in communication, parenting stress, or navigating major life transitions together.',
    methodologies: ['Systemic Family Therapy', 'Structural Family Therapy', 'Narrative Therapy', 'Emotion-Focused Family Therapy (EFFT)'],
    keyTopics: ['Family Conflict Resolution', 'Parenting & Boundaries', 'Intergenerational Healing', 'Communication Repair']
  },
  {
    id: 'stress-anxiety-management',
    title: 'Stress & Anxiety Management',
    category: 'Counselling',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Practical tools and therapeutic support to manage stress, anxiety and build emotional resilience.',
    fullDescription: 'Living in a continuous state of high alert exhausts both body and mind. Our specialized stress and anxiety management program blends somatic grounding, nervous system desensitization, cognitive reframing, and bio-behavioral relaxation tools to help you break free from panic loops and chronic hypervigilance.',
    icon: 'Flower2',
    slug: 'stress-anxiety-management',
    duration: '45 - 50 Mins',
    format: 'In-Clinic & Secure Online',
    benefits: [
      'Rapid panic attack interruption and breath regulation protocols',
      'Overcoming social anxiety, performance anxiety, and intrusive worry',
      'Vagus nerve activation and somatic tension release exercises',
      'Sleep hygiene and daily cortisol reduction strategies'
    ],
    idealFor: 'Individuals experiencing constant worry, physical panic symptoms, work stress exhaustion, or nervous system dysregulation.',
    methodologies: ['Somatic Regulation', 'Exposure & Response Prevention (ERP)', 'Mindfulness-Based Stress Reduction (MBSR)', 'CBT for Anxiety'],
    keyTopics: ['Panic Attacks', 'General Anxiety (GAD)', 'Somatic Tension', 'Overthinking & Burnout']
  },
  {
    id: 'adolescent-teen-support',
    title: 'Adolescent & Teen Support',
    category: 'Youth & Adolescents',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Specialized care for young minds facing academic, social, and emotional challenges.',
    fullDescription: 'Adolescence brings rapid neurological, social, and hormonal changes. Our teen specialists create a non-judgmental, confidential space where adolescents can explore identity, navigate academic pressures, manage digital habits, and develop healthy emotional expression.',
    icon: 'Star',
    slug: 'adolescent-teen-support',
    duration: '45 - 50 Mins',
    format: 'In-Clinic & Secure Online',
    benefits: [
      'Managing academic pressure, exam anxiety, and perfectionism',
      'Developing healthy peer relationships and digital boundaries',
      'Strengthening parent-teen communication and mutual respect',
      'Building core emotional resilience and genuine self-esteem'
    ],
    idealFor: 'Teens (ages 12-19) struggling with school stress, peer dynamics, mood swings, self-doubt, or behavioral changes.',
    methodologies: ['Adolescent Cognitive Therapy', 'Expressive Arts Interventions', 'Systemic Family Integration', 'Emotion Regulation Coaching'],
    keyTopics: ['Academic Stress', 'Peer Pressure', 'Self-Esteem', 'Parent-Teen Harmony']
  },
  {
    id: 'career-guidance-life-coaching',
    title: 'Career Guidance',
    category: 'Career & Growth',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Strategic guidance to help you make confident career and life decisions.',
    fullDescription: 'Feeling stuck in your career or facing a daunting life crossroads? Our career guidance integrates validated psychometric aptitude profiles, personality-role congruence, and psychological coaching to align your career trajectory with your authentic strengths, purpose, and values.',
    icon: 'Briefcase',
    slug: 'career-guidance-life-coaching',
    duration: '50 - 60 Mins',
    format: 'In-Clinic & Secure Online',
    benefits: [
      'Scientific cognitive aptitude mapping and role congruence',
      'Overcoming workplace imposter syndrome and career stagnation',
      'Strategic roadmaps for promotions, career pivots, and leadership',
      'Aligning work-life priorities with core human values'
    ],
    idealFor: 'Students deciding academic paths, professionals seeking career changes, or leaders wanting purposeful occupational fulfillment.',
    methodologies: ['Holland Code RIASEC Framework', 'Strengths-Based Coaching', 'Occupational Psychology', 'Executive Life Design'],
    keyTopics: ['Career Transitions', 'Aptitude Mapping', 'Imposter Syndrome', 'Work-Life Alignment']
  },
  {
    id: 'psychometric-assessments',
    title: 'Psychometric Assessments',
    category: 'Assessments',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Standardized psychological testing for clinical diagnosis, personality insights and more.',
    fullDescription: 'Our psychometric testing suite employs internationally recognized, scientifically normed psychological assessment batteries. Administered and scored by certified psychometrists and clinical psychologists, tests provide objective quantitative insights to guide targeted clinical or occupational interventions.',
    icon: 'FileText',
    slug: 'psychometric-assessments',
    duration: '60 - 90 Mins',
    format: 'In-Clinic with Written Report',
    benefits: [
      'Standardized diagnostic batteries (MMPI, MCMI, BDI, GAD-7, ADHD scales)',
      'Detailed clinical interpretation report with comprehensive feedback',
      'Objective cognitive, personality, and intelligence (IQ) profiling',
      'Clear roadmap for psychiatrists, schools, or employers'
    ],
    idealFor: 'Individuals needing formal diagnostic clarity, ADHD/autism evaluations, clinical referrals, or comprehensive personality insight.',
    methodologies: ['Standardized Psychometric Batteries', 'DSM-5-TR Aligned', 'Norm-Referenced Scoring', 'Clinical Interpretation Protocols'],
    keyTopics: ['ADHD & Focus Screening', 'Personality Battery', 'Depression & Anxiety Scales', 'IQ & Cognitive Testing']
  }
];
