export interface Course {
  id: string;
  title: string;
  slug: string;
  category: 'Therapy & Healing' | 'Child & Parenting' | 'Assessments & Graphology' | 'Clinical Psychology';
  shortDescription: string;
  fullDescription: string;
  image: string;
  bannerImage: string;
  duration: string;
  mode: 'Online' | 'Hybrid' | 'Interactive Live';
  price: string;
  level: 'Beginner' | 'Intermediate' | 'All Levels';
  modulesCount: number;
  format: 'Live Online + Recorded' | 'Weekend Intensive' | 'Self-Paced Masterclass';
  certificate: boolean;
  instructor: string;
  syllabusHighlights: string[];
  learningOutcomes: string[];
  bannerTheme?: {
    gradient: string;
    accentColor: string;
    textColor: string;
    badgeBg: string;
  };
}

export const courses: Course[] = [
  {
    id: 'art-therapy',
    title: 'Art Therapy',
    slug: 'art-therapy',
    category: 'Therapy & Healing',
    shortDescription: 'Explore therapeutic art, emotional expression, colour psychology, mandala therapy, trauma activities, and creative interventions for children and adults.',
    fullDescription: 'The Art Therapy Practitioner Program is designed to equip students, counsellors, and practitioners with comprehensive knowledge and clinical skills in therapeutic art. Learn neuro-expressive pathways, colour psychology, mandala therapy, trauma-informed expressive activities, and techniques to help both children and adults process emotions and achieve profound self-discovery.',
    image: '/images/courses/art-therapy-banner.png',
    bannerImage: '/images/courses/art-therapy-banner.png',
    duration: '1 Month',
    mode: 'Interactive Live',
    price: '₹4,999',
    level: 'All Levels',
    modulesCount: 6,
    format: 'Live Online + Recorded',
    certificate: true,
    instructor: 'Certified Expressive Arts & Mental Health Practitioners',
    syllabusHighlights: [
      'Therapeutic Art Foundations',
      'Emotional Expression & Projective Techniques',
      'Colour Psychology in Healing',
      'Mandala Therapy & Mindfulness',
      'Trauma Healing Activities',
      'Interventions for Children & Adults'
    ],
    learningOutcomes: [
      'Facilitate expressive art interventions for individuals and groups',
      'Decode projective drawings and non-verbal emotional cues',
      'Integrate mandala, mindfulness, and painting drills in clinical therapy',
      'Earn an Institutional Certified Art Therapy Practitioner Credential'
    ],
    bannerTheme: {
      gradient: 'from-[#3A1448] via-[#5C2373] to-[#8035A0]',
      accentColor: '#FFD79E',
      textColor: '#FFFFFF',
      badgeBg: 'rgba(255, 215, 158, 0.2)'
    }
  },
  {
    id: 'child-psychology',
    title: 'Child Psychology',
    slug: 'child-psychology',
    category: 'Child & Parenting',
    shortDescription: 'Master childhood developmental milestones, behavior problem modification, effective parenting strategies, school-related issues, learning difficulties, and play-based techniques.',
    fullDescription: 'Understand how a child\'s psychological upbringing, cognitive growth, emotional regulation, and personality are shaped through early development. This course equips educators, psychologists, and parents with practical tools to address behavioral defiance, ADHD/learning difficulties, school anxiety, and positive play-based therapeutic interventions.',
    image: '/images/courses/child-psychology-banner.png',
    bannerImage: '/images/courses/child-psychology-banner.png',
    duration: '1 Month',
    mode: 'Interactive Live',
    price: '₹4,999',
    level: 'Beginner',
    modulesCount: 6,
    format: 'Live Online + Recorded',
    certificate: true,
    instructor: 'Developmental & Pediatric Clinical Psychologists',
    syllabusHighlights: [
      'Child Developmental Stages & Cognitive Milestones',
      'Behavior Problem Modification & Positive Discipline',
      'Empathetic & Structured Parenting Strategies',
      'Managing School Issues, Bullying & Academic Stress',
      'Identifying & Supporting Learning Difficulties',
      'Play-Based Therapeutic Techniques & Activities'
    ],
    learningOutcomes: [
      'Understand developmental psychology principles across childhood stages',
      'Identify early behavioral, emotional, and neurodivergent red flags',
      'Apply actionable behavior modification plans in home and school settings',
      'Earn a Verified Child Psychology Program Certificate'
    ],
    bannerTheme: {
      gradient: 'from-[#341648] via-[#522572] to-[#7336A0]',
      accentColor: '#4DE6D1',
      textColor: '#FFFFFF',
      badgeBg: 'rgba(77, 230, 209, 0.2)'
    }
  },
  {
    id: 'dance-movement-therapy',
    title: 'Dance Movement Therapy',
    slug: 'dance-movement-therapy',
    category: 'Therapy & Healing',
    shortDescription: 'Harness the healing power of somatic movement psychology, kinesthetic body awareness, emotional release, trauma-informed practice, and clinical expressive arts.',
    fullDescription: 'Dance Movement Therapy (DMT) bridges somatic psychology and creative expression to foster physical, emotional, and cognitive integration. Master kinesthetic empathy, non-verbal bodily expression, trauma-informed somatic exercises, group movement facilitation, and clinical protocols for emotional release.',
    image: '/images/courses/dance-movement-therapy-banner.png',
    bannerImage: '/images/courses/dance-movement-therapy-banner.png',
    duration: '2 Months',
    mode: 'Interactive Live',
    price: '₹6,999',
    level: 'All Levels',
    modulesCount: 8,
    format: 'Live Online + Recorded',
    certificate: true,
    instructor: 'Senior Movement Psychotherapists & Somatic Practitioners',
    syllabusHighlights: [
      'Movement Psychology & Mind-Body Connection',
      'Somatic Body Awareness & Proprioception',
      'Emotional Release through Free Movement',
      'Trauma-Informed Practice & Nervous System Regulation',
      'Designing & Facilitating Group Movement Sessions',
      'Clinical Applications in Mental Health Settings'
    ],
    learningOutcomes: [
      'Facilitate therapeutic movement sessions for emotional catharsis',
      'Recognize bodily somatic armor and stress tension patterns',
      'Integrate trauma-informed movement techniques into clinical therapy',
      'Receive a Dance Movement Therapy Practitioner Certificate'
    ],
    bannerTheme: {
      gradient: 'from-[#2F1545] via-[#4F256E] to-[#7A3E9E]',
      accentColor: '#FFD79E',
      textColor: '#FFFFFF',
      badgeBg: 'rgba(255, 215, 158, 0.2)'
    }
  },
  {
    id: 'doodle-analysis',
    title: 'Doodle Analysis',
    slug: 'doodle-analysis',
    category: 'Assessments & Graphology',
    shortDescription: 'Learn to decode subconscious drawings, symbol interpretations, emotional mapping, and personality indicators in clinical and diagnostic practice.',
    fullDescription: 'Doodling is a direct window into the subconscious mind. This specialized program teaches you how to interpret spontaneous scribbles, shapes, margins, pressure, and geometric symbols to reveal hidden emotions, stress levels, conflict indicators, and core personality traits.',
    image: '/images/courses/doodle-analysis-banner.png',
    bannerImage: '/images/courses/doodle-analysis-banner.png',
    duration: '1 Month',
    mode: 'Interactive Live',
    price: '₹3,999',
    level: 'Beginner',
    modulesCount: 4,
    format: 'Live Online + Recorded',
    certificate: true,
    instructor: 'Master Psycho-Diagnostics & Graphology Specialists',
    syllabusHighlights: [
      'Symbol Interpretation (Geometric, Organic & Abstract)',
      'Subconscious Emotional Mapping & Stress Indicators',
      'Personality Indicators in Doodles & Margins',
      'Clinical Applications in Therapy & Counselling Intake'
    ],
    learningOutcomes: [
      'Identify underlying subconscious emotions from spontaneous drawings',
      'Incorporate doodle assessments into psychological evaluations',
      'Analyze pen pressure, spatial orientation, and recurrent motifs',
      'Receive Certified Doodle Analyst Credential'
    ],
    bannerTheme: {
      gradient: 'from-[#3A184D] via-[#5B2975] to-[#803E9E]',
      accentColor: '#58E6C8',
      textColor: '#FFFFFF',
      badgeBg: 'rgba(88, 230, 200, 0.2)'
    }
  },
  {
    id: 'graphology',
    title: 'Graphology',
    slug: 'graphology',
    category: 'Assessments & Graphology',
    shortDescription: 'Master scientific handwriting analysis to decode personality configurations, emotional traits, intelligence markers, career inclinations, and relationship traits.',
    fullDescription: 'The scientific study of handwriting (Graphology) provides powerful insights into human personality, emotional stability, subconscious defenses, and intellectual tendencies. Learn how margins, slant, baselines, stroke formations, and pressure reveal career aptitude, relationship patterns, and clinical red flags.',
    image: '/images/courses/graphology-banner.png',
    bannerImage: '/images/courses/graphology-banner.png',
    duration: '2 Months',
    mode: 'Interactive Live',
    price: '₹5,999',
    level: 'All Levels',
    modulesCount: 8,
    format: 'Live Online + Recorded',
    certificate: true,
    instructor: 'Senior Graphologists & Forensic Profilers',
    syllabusHighlights: [
      'Personality Analysis through Zones, Slants & Baselines',
      'Emotional Traits & Psychological Defense Mechanisms',
      'Intelligence Indicators & Cognitive Processing Styles',
      'Career Aptitude & Leadership Potential Profiling',
      'Relationship Traits, Communication Styles & Compatibility',
      'Writing Comprehensive Practical Profiling Reports'
    ],
    learningOutcomes: [
      'Conduct professional handwriting personality assessments',
      'Identify signs of depression, anxiety, and aggression in handwriting',
      'Compile structured psycho-diagnostic profiling reports for clients',
      'Certified Graphology Practitioner Diploma'
    ],
    bannerTheme: {
      gradient: 'from-[#2D1642] via-[#4C286D] to-[#713D9A]',
      accentColor: '#FFD285',
      textColor: '#FFFFFF',
      badgeBg: 'rgba(255, 210, 133, 0.2)'
    }
  },
  {
    id: 'guided-relaxation-therapy',
    title: 'Guided Relaxation Therapy',
    slug: 'guided-relaxation-therapy',
    category: 'Therapy & Healing',
    shortDescription: 'Master progressive muscle relaxation, somatic guided imagery, therapeutic breathwork, customized meditation scripts, anxiety reduction, and sleep restoration.',
    fullDescription: 'Guided Relaxation Therapy trains therapists and wellness practitioners in scientifically backed techniques to down-regulate the autonomic nervous system. Learn Jacobson\'s progressive muscle relaxation, multi-sensory guided imagery, diaphragmatic breathwork protocols, therapeutic script writing, and somatic interventions for chronic anxiety and insomnia.',
    image: '/images/courses/guided-relaxation-therapy-banner.png',
    bannerImage: '/images/courses/guided-relaxation-therapy-banner.png',
    duration: '2 Months',
    mode: 'Interactive Live',
    price: '₹5,999',
    level: 'All Levels',
    modulesCount: 8,
    format: 'Live Online + Recorded',
    certificate: true,
    instructor: 'Clinical Mindfulness & Somatic Relaxation Experts',
    syllabusHighlights: [
      'Progressive Muscle Relaxation (PMR) Protocols',
      'Multi-Sensory Somatic Guided Imagery',
      'Therapeutic Breathwork & Autonomic Nervous System Regulation',
      'Writing & Delivering Customized Meditation Scripts',
      'Clinical Anxiety & Panic De-escalation Techniques',
      'Sleep Therapy Protocols & Restorative Mindset Coaching'
    ],
    learningOutcomes: [
      'Induce deep parasympathetic relaxation states safely in clients',
      'Author and narrate clinical relaxation scripts with voice modulation',
      'Design sleep therapy and chronic anxiety recovery plans',
      'Certified Guided Relaxation Therapist Diploma'
    ],
    bannerTheme: {
      gradient: 'from-[#1C414D] via-[#286071] to-[#39859A]',
      accentColor: '#FFD479',
      textColor: '#FFFFFF',
      badgeBg: 'rgba(255, 212, 121, 0.2)'
    }
  },
  {
    id: 'clinical-hypnotherapist',
    title: 'Become a Clinical Hypnotherapist',
    slug: 'clinical-hypnotherapist',
    category: 'Therapy & Healing',
    shortDescription: 'Comprehensive professional certification covering hypnosis foundations, rapid inductions, suggestion therapy, regression, pain management, trauma, and clinical ethics.',
    fullDescription: 'A comprehensive, three-level clinical hypnotherapy certification designed to take you from foundational hypnotic states to advanced clinical interventions. Learn rapid inductions, deepening protocols, direct/indirect suggestion therapy, age regression, pain management, subconscious habit elimination, trauma processing, and clinical ethics with live demonstrations.',
    image: '/images/courses/hypnotherapy-banner.png',
    bannerImage: '/images/courses/hypnotherapy-banner.png',
    duration: '2 Months (Level 1 • Level 2 • Level 3)',
    mode: 'Interactive Live',
    price: '₹8,999',
    level: 'All Levels',
    modulesCount: 10,
    format: 'Live Online + Recorded',
    certificate: true,
    instructor: 'Board-Certified Medical & Clinical Hypnotherapists',
    syllabusHighlights: [
      'Foundations of Hypnosis & Brainwave Science',
      'Rapid Inductions, Deepeners & Suggestibility Tests',
      'Suggestion Therapy & Subconscious Architecture',
      'Age Regression Techniques & Inner Child Healing',
      'Psychogenic Pain Management & Somatic Anchoring',
      'Anxiety, Phobias & Stress De-escalation Models',
      'Habit Reveal & Behavioral Reconditioning',
      'Trauma Processing Protocols & Dissociation Safeguards',
      'Clinical Ethics, Legal Boundaries & Client Intake',
      'Live Supervised Demonstrations & Case Practicum'
    ],
    learningOutcomes: [
      'Master Level 1, 2, and 3 Clinical Hypnosis protocols with confidence',
      'Perform ethical trance induction, deepening, and safe awakening',
      'Resolve subconscious fears, habits, and psychosomatic symptoms',
      'International Clinical Hypnotherapist Practitioner Credential'
    ],
    bannerTheme: {
      gradient: 'from-[#3A1452] via-[#5C237E] to-[#8135AB]',
      accentColor: '#4DE6D1',
      textColor: '#FFFFFF',
      badgeBg: 'rgba(77, 230, 209, 0.2)'
    }
  },
  {
    id: 'research-psychology',
    title: 'Research Psychology',
    slug: 'research-psychology',
    category: 'Clinical Psychology',
    shortDescription: 'Master research design, SPSS data analysis, psychometric scale development, peer-reviewed publication processes, AI in research, and systematic literature reviews.',
    fullDescription: 'Designed for psychology students, scholars, and professionals wanting to excel in academic research and clinical studies. Master quantitative and qualitative research design, statistical hypothesis testing using SPSS, reliability/validity testing, psychometric scale development, navigating the peer-reviewed publication process, systematic reviews, and leveraging AI tools ethically in research.',
    image: '/images/courses/research-psychology-banner.png',
    bannerImage: '/images/courses/research-psychology-banner.png',
    duration: '2 Months',
    mode: 'Interactive Live',
    price: '₹6,499',
    level: 'Intermediate',
    modulesCount: 8,
    format: 'Live Online + Recorded',
    certificate: true,
    instructor: 'PhD Research Scholars & University Psychology Faculty',
    syllabusHighlights: [
      'Research Design (Quantitative, Qualitative & Mixed Methods)',
      'SPSS Software Hands-On Data Management',
      'Parametric & Non-Parametric Inferential Statistics',
      'Psychometric Scale Development & Validation Testing',
      'Navigating the Academic Peer-Reviewed Publication Process',
      'Leveraging AI Tools in Systematic Research & Synthesis',
      'Conducting PRISMA-Compliant Systematic Reviews & Meta-Analyses'
    ],
    learningOutcomes: [
      'Design and execute rigorous psychological research studies',
      'Perform complex statistical data analysis and interpretation in SPSS',
      'Develop, standardize, and validate psychometric assessment scales',
      'Publish scientific papers in indexed international journals'
    ],
    bannerTheme: {
      gradient: 'from-[#2E1A4E] via-[#482875] to-[#6A3CA8]',
      accentColor: '#FFCC70',
      textColor: '#FFFFFF',
      badgeBg: 'rgba(255, 204, 112, 0.2)'
    }
  }
];
