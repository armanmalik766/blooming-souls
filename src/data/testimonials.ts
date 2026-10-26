export interface Testimonial {
  id: string;
  name: string;
  role: string;
  serviceReceived: string;
  quote: string;
  rating: number;
  duration?: string;
  verified?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Arman Malik',
    role: 'Clinical Psychology Student',
    serviceReceived: 'Learning Experience & Clinical Training',
    quote: 'It was a great learning experience that improved my skills and confidence in psychology.',
    rating: 5,
    verified: true,
    duration: '2 months ago'
  },
  {
    id: '2',
    name: 'Zainab Hashim',
    role: 'Therapy Client',
    serviceReceived: 'Counselling & Therapy',
    quote: "Great place if you are looking for any sort of counselling or therapy. The staff is very friendly and supportive. Special mention to Mr Maanas Rajore for being so polite and welcoming. I've had a great experience with them. Highly recommended 👍",
    rating: 5,
    verified: true,
    duration: '1 month ago'
  },
  {
    id: '3',
    name: 'Reema Singh',
    role: 'Workshop Participant',
    serviceReceived: 'Mental Wellness Workshop',
    quote: 'Good Workshop and talk. fun activities were planned to interact',
    rating: 5,
    verified: true,
    duration: '3 months ago'
  },
  {
    id: '4',
    name: 'Purna Agarwal',
    role: 'Therapy & Guidance Client',
    serviceReceived: 'Personal Psychotherapy',
    quote: 'Working with Sadaf has been such a transformative experience. She really takes the time to listen and understand what I’m going through, and her guidance always feels warm and practical. I’ve started to see real changes in how I handle my emotions and relationships. I feel more confident, calm, and centered every day.',
    rating: 5,
    verified: true,
    duration: '4 months ago'
  },
  {
    id: '5',
    name: 'Ummul Muskan',
    role: 'Wellness & Clinical Client',
    serviceReceived: 'Comprehensive Therapy & Support',
    quote: "I’ve had a positive experience with Blooming Souls, where their approach to mental health care is both compassionate and professional. The team is highly skilled, and their ability to understand and support clients through various psychological issues is remarkable. Both Sadaf ma'am and Madni ma'am has guided me throughout my journey. They are very kind and helpful abd are ready to answer any questions if asked. The institution offers tailored therapies and ensure every individual feels heard and cared for. If you're seeking a clinic that truly prioritizes your well-being, I highly recommend Blooming Souls!",
    rating: 5,
    verified: true,
    duration: '5 months ago'
  }
];

