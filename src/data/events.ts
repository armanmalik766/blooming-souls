import mindfulMusingsImg from '../assets/images/Mindful-musings.jpeg';
import socialAffairImg from '../assets/images/Social-Affair.jpeg';
import souljournImg from '../assets/images/Souljourn.jpeg';
import workshopsImg from '../assets/images/workshop.webp';
import talkWithSadafImg from '../assets/images/talk-with-sadaf.jpeg';

export interface EventItem {
  id: string;
  title: string;
  category: 'Celebration' | 'Wellness Retreat' | 'Workshops' | 'Podcast' | 'Radio Show';
  categoryLabel: string;
  image: string;
  imagePosition?: string;
  description: string;
  location?: string;
  frequency?: string;
  highlights: string[];
  ctaLabel: string;
}

export const events: EventItem[] = [
  {
    id: 'mindful-musings',
    title: 'Mindful Musings',
    category: 'Radio Show',
    categoryLabel: 'Radio Noida 107.4 FM',
    image: mindfulMusingsImg,
    imagePosition: 'center 35%',
    description:
      'In collaboration with Radio Noida 107.4 FM, Blooming Souls hosts a radio show dedicated to discussing various topics related to mental health. Tune in to hear insightful conversations, expert advice, and valuable information to support mental well-being.',
    location: 'Radio Noida 107.4 FM Broadcast Studio',
    frequency: 'Weekly Radio Broadcast',
    highlights: [
      'Expert psychiatric & psychological commentary',
      'Live caller interactions & mental health awareness',
      'Accessible mental wellness education for the wider public'
    ],
    ctaLabel: 'Tune In & Ask a Question'
  },
  {
    id: 'social-affair',
    title: 'Social Affair',
    category: 'Celebration',
    categoryLabel: 'Internship Celebration',
    image: socialAffairImg,
    imagePosition: 'center 40%',
    description:
      "We honor our interns' journey with a special celebration featuring certificates of completion, Best Intern of the Month awards, inspiring speeches, and networking opportunities. This event is a testament to their hard work and our commitment to fostering talent, marking both new beginnings and cherished endings. Join us in celebrating their remarkable achievements.",
    location: 'Blooming Souls Headquarters & Garden Pavilion',
    frequency: 'Cohort Graduation & Monthly Awards',
    highlights: [
      'Official Certificates of Clinical Training completion',
      'Best Intern of the Month recognitions and citations',
      'Inspiring speeches from senior clinical supervisors',
      'Meaningful peer networking across student cohorts'
    ],
    ctaLabel: 'Apply for Next Cohort'
  },
  {
    id: 'souljourn',
    title: 'Souljourn',
    category: 'Wellness Retreat',
    categoryLabel: 'Bi-Annual Retreat',
    image: souljournImg,
    imagePosition: 'center 30%',
    description:
      'Blooming Souls organizes a bi-annual wellness retreat that focuses on holistic healing amidst the serene beauty of mountain surroundings. This retreat includes a variety of activities such as breathwork techniques, trauma healing sessions, trekking, hiking, and much more. Designed to promote overall well-being, our retreat offers participants a chance to reconnect with nature, rejuvenate their minds and bodies, and embark on a transformative journey towards holistic health.',
    location: 'Himalayan Foothills & Serene Mountain Camps',
    frequency: 'Bi-Annual Immersive Retreat',
    highlights: [
      'Somatic breathwork & guided emotional release',
      'Trauma-informed group healing circles',
      'Mindful alpine trekking & nature immersion walks',
      'Holistic mind-body rejuvenation away from urban stress'
    ],
    ctaLabel: 'Reserve Retreat Spot'
  },
  {
    id: 'workshops',
    title: 'Workshops',
    category: 'Workshops',
    categoryLabel: 'Therapeutic Practices',
    image: workshopsImg,
    imagePosition: 'center 20%',
    description:
      'We often organize workshops on art therapy, sound therapy, and mental health education for communities, colleges, NGOs, and wellness centers. Our aim is to promote mental well-being and provide valuable tools for healing and self-discovery through creative and therapeutic practices.',
    location: 'Universities, Corporates, NGOs & Wellness Centers',
    frequency: 'Monthly & On-Demand Bookings',
    highlights: [
      'Expressive Art Therapy & non-verbal emotion expression',
      'Vibrational sound healing & stress dissolution',
      'Tailored mental health toolkits for organizations',
      'Experiential self-discovery in a judgment-free space'
    ],
    ctaLabel: 'Request a Workshop'
  },
  {
    id: 'talk-with-sadaf',
    title: 'Talk with sadaf',
    category: 'Podcast',
    categoryLabel: 'Video Podcast Series',
    image: talkWithSadafImg,
    imagePosition: 'center 35%',
    description:
      'Presenting a podcast series where we explore the challenges and opportunities faced by pioneering personalities across various fields. Each episode delves into their experiences, offering insights into overcoming obstacles and navigating their unique journeys. Join us for engaging discussions that reveal how these trailblazers tackle their challenges and seize opportunities.',
    location: 'Blooming Souls Studio & Digital Streaming',
    frequency: 'Bi-Weekly Video Episodes',
    highlights: [
      'In-depth interviews with trailblazers & thought leaders',
      'Psychological resilience in the face of career adversity',
      'Actionable mental strength strategies for listeners',
      'Available on YouTube, Spotify, and podcast networks'
    ],
    ctaLabel: 'Watch Recent Episodes'
  }
];
