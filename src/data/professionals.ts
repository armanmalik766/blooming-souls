export interface Professional {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  specialization: string;
  experience: string;
  image: string;
  languages: string[];
  bio: string;
  focusAreas: string[];
  availability: string;
  isFounder?: boolean;
  linkedinUrl?: string;
}

export const professionals: Professional[] = [
  {
    id: 'hartirath-singh',
    name: 'HARTIRATH SINGH',
    designation: 'Affiliated Psychologist',
    qualification: 'M.A. Clinical Psychology, Certified Psychotherapist',
    specialization: 'Adult Psychotherapy, Anxiety Disorders & Stress Management',
    experience: '8+ Years Clinical Practice',
    image: 'https://bloomingsouls.in/wp-content/uploads/2026/07/Hartirath-Singh-738x767.png',
    languages: ['English', 'Hindi', 'Punjabi'],
    bio: 'Hartirath Singh is a compassionate clinical psychologist specializing in cognitive behavioral strategies and existential psychotherapy. He provides an empathetic, grounded space for adults facing burnout, chronic anxiety, and life transitions.',
    focusAreas: ['Cognitive Restructuring', 'Anxiety & Panic', 'Workplace Burnout', 'Interpersonal Conflict'],
    availability: 'Mon - Sat (10:00 AM - 6:00 PM)'
  },
  {
    id: 'sadaf-malik',
    name: 'SADAF MALIK',
    designation: 'Founder and Psychologist',
    qualification: 'M.Sc. Clinical Psychology, Trauma & Relationship Specialist',
    specialization: 'Evidence-Based Psychotherapy, Trauma Recovery & Holistic Wellbeing',
    experience: '12+ Years Clinical Leadership',
    image: '/images/sadaf-malik.webp',
    languages: ['English', 'Hindi', 'Urdu'],
    bio: 'Sadaf Malik is the founder of Blooming Souls and one of India’s most trusted psychologists, renowned for her scientific rigor, uncompromising ethics, and compassionate clinical style. Her experience includes working at Rashtrapati Bhawan with Dr. M. Wali (former Presidential Physician of India) and training under Presidential Gold Medalist Ms. Gagandeep Kaur.',
    focusAreas: ['Trauma & PTSD', 'Depression Care', 'Relationship Counselling', 'Executive Burnout'],
    availability: 'Mon - Fri (10:00 AM - 7:00 PM)',
    isFounder: true,
    linkedinUrl: 'https://www.linkedin.com/in/sortoutwithsadaf/'
  },
  {
    id: 'maanas-rajore',
    name: 'MAANAS RAJORE',
    designation: 'I/O psychologist and HR Manager',
    qualification: 'M.A. Industrial & Organizational Psychology',
    specialization: 'Workplace Mental Health, Team Dynamics & Career Counseling',
    experience: '6+ Years Experience',
    image: 'https://bloomingsouls.in/wp-content/uploads/2025/12/maanas-rajore.webp',
    languages: ['English', 'Hindi'],
    bio: 'Maanas Rajore bridges industrial-organizational psychology with empathetic clinical counseling. He manages human capital wellness at Blooming Souls and leads corporate workshops aimed at banishing workplace burnout and fostering psychological safety.',
    focusAreas: ['Organizational Wellbeing', 'Stress Inoculation', 'Career Realignment', 'Emotional Agility'],
    availability: 'Mon - Sat (11:00 AM - 7:00 PM)'
  },
  {
    id: 'seema-raturi',
    name: 'SEEMA RATURI',
    designation: 'Counselling Psychologist | Psycho - Oncologist',
    qualification: 'M.Sc. Psychology, Certified in Psycho-Oncology',
    specialization: 'Chronic Illness Support, Grief & Somatic Counselling',
    experience: '7+ Years Experience',
    image: 'https://bloomingsouls.in/wp-content/uploads/2026/07/Seema-Mam-738x767.png',
    languages: ['English', 'Hindi'],
    bio: 'Seema Raturi specializes in psycho-oncology and health psychology, helping patients and caregiving families navigate the profound psychological toll of serious medical diagnoses with strength, clarity, and dignity.',
    focusAreas: ['Grief & Loss', 'Psycho-Oncology', 'Caregiver Burnout', 'Health Anxiety'],
    availability: 'Tue - Sat (11:00 AM - 6:00 PM)'
  },
  {
    id: 'swati',
    name: 'SWATI',
    designation: 'Affiliated Psychologist',
    qualification: 'M.A. Applied Psychology, CBT Certified',
    specialization: 'Cognitive Behavioral Therapy & Young Adult Counseling',
    experience: '6+ Years Experience',
    image: 'https://bloomingsouls.in/wp-content/uploads/2025/12/swati.webp',
    languages: ['English', 'Hindi'],
    bio: 'Swati is known for her warm, non-judgmental presence, guiding young adults through academic anxiety, imposter syndrome, and self-esteem challenges using evidence-based cognitive behavioral techniques.',
    focusAreas: ['Anxiety Relief', 'Self-Esteem', 'Imposter Syndrome', 'Mindfulness'],
    availability: 'Mon - Fri (12:00 PM - 7:00 PM)'
  },
  {
    id: 'simran-naaz',
    name: 'SIMRAN NAAZ',
    designation: 'Counselling Psychologist',
    qualification: 'M.A. Psychology, Family & Interpersonal Systems',
    specialization: 'Interpersonal Dynamics & Emotional Regulation',
    experience: '5+ Years Experience',
    image: 'https://bloomingsouls.in/wp-content/uploads/2026/07/ChatGPT-Image-Jul-23-2026-02_57_06-PM-738x767.png',
    languages: ['English', 'Hindi', 'Urdu'],
    bio: 'Simran Naaz provides compassionate, client-centered therapy focused on helping individuals identify emotional patterns, establish healthy boundaries, and build resilient interpersonal relationships.',
    focusAreas: ['Boundary Setting', 'Emotional Regulation', 'Depressive Episodes', 'Family Dynamics'],
    availability: 'Wed - Sun (10:00 AM - 6:00 PM)'
  }
];
