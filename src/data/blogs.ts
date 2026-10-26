export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'Mental Health' | 'Psychology' | 'Relationships' | 'Wellness' | 'Personal Growth';
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  image: string;
  shortDescription: string;
  isFeatured?: boolean;
  content: string[];
  keyTakeaways: string[];
  tags: string[];
}

export const blogs: BlogPost[] = [
  {
    id: '1',
    slug: 'understanding-anxiety-symptoms-management',
    title: 'Understanding Anxiety: When Normal Worry Crosses the Line',
    category: 'Mental Health',
    date: 'Sep 12, 2026',
    readTime: '6 min read',
    isFeatured: true,
    author: {
      name: 'Dr. Sadaf Malik',
      role: 'Lead Consultant Psychiatrist',
      image: '/images/sadaf-malik.webp'
    },
    image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1000&q=80',
    shortDescription: 'Explore the physiological triggers of anxiety, how your nervous system reacts, and practical neuro-somatic techniques to regain calm in everyday life.',
    tags: ['Anxiety', 'Mental Health', 'Neuroscience', 'CBT', 'Psychiatry'],
    content: [
      'Worry is a natural human reaction to uncertainty. It keeps us alert to real threats and pushes us to prepare for upcoming deadlines or exams. However, when worry becomes chronic, uncontrollable, and physically exhausting, it transitions into what clinical medicine classifies as an Anxiety Disorder.',
      'Our autonomic nervous system cannot always distinguish between a physical tiger chasing us and a high-stakes email notification. When the sympathetic nervous system triggers without relief, cortisol and adrenaline flood the bloodstream, leading to elevated heart rates, muscle tension, gastrointestinal unease, and racing catastrophic thoughts.',
      'In psychiatric care, we demystify anxiety by treating both the biological arousal and the cognitive distortions. Simple 4-7-8 breathing cycles and physiological sighs can rapidly activate the vagus nerve, sending chemical signals to the heart to slow down. Concurrently, Cognitive Behavioral Therapy allows us to interrogate irrational assumptions: "Is this outcome definitely catastrophic, or is my mind magnifying probability?"',
      'If you have been waking up with chest tightness, persistent dread, or chronic insomnia for more than four weeks, seeking a professional consultation is not a sign of weakness—it is a proactive investment in your brain and overall physical health.'
    ],
    keyTakeaways: [
      'Anxiety has biological, neurological, and psychological roots.',
      'Physical symptoms like rapid pulse and stomach knots are real physiological responses.',
      'The physiological sigh (double inhale through nose, long exhale through mouth) activates the vagus nerve.',
      'Early clinical guidance prevents acute anxiety from morphing into panic cycles.'
    ]
  },
  {
    id: '2',
    slug: 'how-to-build-emotional-resilience',
    title: 'How to Build Emotional Resilience in Times of High Stress',
    category: 'Personal Growth',
    date: 'Sep 05, 2026',
    readTime: '5 min read',
    author: {
      name: 'Dr. Rajesh Nair',
      role: 'Senior Clinical Psychologist',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Resilience is not the absence of difficulty, but the psychological flexibility to adapt, endure, and grow through unexpected disruptions.',
    tags: ['Resilience', 'Personal Growth', 'Mindfulness', 'Psychology'],
    content: [
      'Many people mistakenly imagine that emotionally resilient individuals simply don’t feel grief, anger, or despair. In clinical psychology, resilience is defined not by stone-cold invulnerability, but by psychological elasticity: the capacity to feel deeply, acknowledge pain, and nevertheless find your way back to balance.',
      'One foundational pillar of resilience is Cognitive Reframing. When faced with an unexpected layoff, a medical diagnosis, or a breakup, our instinctive brain asks, "Why is this happening to me?" Reframing shifts this question into: "Given this reality, what is the single constructive choice within my control right now?"',
      'Another critical component is self-compassion. The psychologist Kristin Neff highlights that people who speak kindly to themselves during failures bounce back far quicker than those who employ brutal self-criticism. Give yourself the same grace you would instinctively extend to a beloved friend.'
    ],
    keyTakeaways: [
      'Emotional elasticity beats emotional suppression.',
      'Focus mental energy exclusively on the locus of control.',
      'Self-compassion acts as an internal protective buffer against burnout.'
    ]
  },
  {
    id: '6',
    slug: 'foundations-of-cognitive-psychology-in-daily-life',
    title: 'Foundations of Psychology: How Cognitive Biases Shape Reality',
    category: 'Psychology',
    date: 'Sep 01, 2026',
    readTime: '6 min read',
    author: {
      name: 'Dr. Rajesh Nair',
      role: 'Senior Clinical Psychologist',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Understanding the mental shortcuts our brains use every day, and how becoming aware of cognitive distortions brings emotional balance.',
    tags: ['Psychology', 'Cognitive Science', 'Mindfulness', 'Rationality'],
    content: [
      'Our minds process billions of sensory bits every second. To navigate this overwhelming deluge of data, the human brain relies on heuristics—mental shortcuts developed through evolutionary biology. While these shortcuts allow for swift decision-making, they also generate predictable cognitive biases.',
      'One pervasive bias is Confirmation Bias: our tendency to seek out and remember information that validates our pre-existing fears while ignoring evidence that contradicts them. In psychological therapy, helping clients spot when their brain is actively filtering out positive experiences is often the breakthrough moment in resolving depressive loops.',
      'Another common shortcut is Catastrophizing, where an ambiguous event is instantly interpreted as a catastrophic outcome. By applying classical cognitive psychology tools—such as identifying cognitive distortions and examining concrete objective evidence—we can train our neural pathways to pause before panicking.'
    ],
    keyTakeaways: [
      'Heuristics are natural evolutionary mental shortcuts that can distort emotional reality.',
      'Confirmation bias and catastrophizing can reinforce anxiety and depression.',
      'Somatic awareness and objective evidence tests help recalibrate cognitive distortions.'
    ]
  },
  {
    id: '3',
    slug: 'healthy-communication-in-relationships',
    title: 'Healthy Communication in Relationships: Breaking the Fight Cycle',
    category: 'Relationships',
    date: 'Aug 28, 2026',
    readTime: '7 min read',
    author: {
      name: 'Priya Deshmukh',
      role: 'Relationship Specialist',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Learn why couples get stuck in repetitive arguments, how to identify hidden emotional bids, and practical conflict repair tools.',
    tags: ['Relationships', 'Couples Therapy', 'Communication', 'Marriage'],
    content: [
      'In couples therapy, one phrase surfaces repeatedly: "We just can’t seem to talk without it blowing up." Most repetitive arguments are rarely about dirty dishes or unmade beds. Rather, the dish is an emotional proxy for a deeper vulnerable question: "Do you see me? Do my feelings matter to you?"',
      'Dr. John Gottman identified four destructive communication patterns: Criticism, Contempt, Defensiveness, and Stonewalling. Among these, Contempt (eye-rolling, mocking sarcasm, condescension) is the single greatest predictor of relationship dissolution.',
      'To break this pattern, shift your approach from "You never help" (Criticism) to "I am feeling overwhelmed by the household chores and I would really value your help with dinner tonight" (Gentle Start-up). State your feeling, state the concrete need, and omit the character attack.'
    ],
    keyTakeaways: [
      'Superficial disputes often mask deeper emotional bids for connection.',
      'Replace global "You always/never" statements with specific "I feel" needs.',
      'Calling a 20-minute physiological time-out de-escalates heated disputes.'
    ]
  },
  {
    id: '4',
    slug: 'when-should-you-seek-professional-support',
    title: 'When Should You Seek Professional Mental Health Support?',
    category: 'Mental Health',
    date: 'Aug 19, 2026',
    readTime: '5 min read',
    author: {
      name: 'Dr. Sadaf Malik',
      role: 'Lead Consultant Psychiatrist',
      image: '/images/sadaf-malik.webp'
    },
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'A clinical guide on recognizing when everyday stress crosses into functional impairment, and what to expect during your first consultation.',
    tags: ['Psychiatry', 'Consultation', 'Mental Health', 'Therapy'],
    content: [
      'A common barrier to therapy is the belief that one’s problems are not "severe enough." Many people wait until a crisis point before booking an appointment. However, mental healthcare is most transformative when utilized early.',
      'Key signs that warrant professional guidance include: marked shifts in sleep patterns, pervasive lack of motivation, feeling emotionally detached from loved ones, inability to concentrate at work, and recurrent panic sensations.',
      'Your first session at Blooming Souls is fundamentally a collaborative conversation. There is no interrogation. We examine your current life stressors, physical health, sleep architecture, and personal goals to build a safe, personalized roadmap.'
    ],
    keyTakeaways: [
      'You do not need to be in active crisis to seek therapeutic guidance.',
      'Sleep disruption, social withdrawal, and fatigue are common clinical indicators.',
      'A first psychiatric consultation is a supportive assessment, not an automatic prescription.'
    ]
  },
  {
    id: '5',
    slug: 'mindful-habits-for-burnout-prevention',
    title: '5 Mindful Habits to Protect Against Corporate Burnout',
    category: 'Wellness',
    date: 'Aug 10, 2026',
    readTime: '6 min read',
    author: {
      name: 'Dr. Rajesh Nair',
      role: 'Senior Clinical Psychologist',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'How modern digital hyper-connectivity exhausts cognitive reserves, and concrete boundary-setting habits to restore your clarity.',
    tags: ['Burnout', 'Workplace Wellness', 'Mindfulness', 'Stress Management'],
    content: [
      'Burnout is officially classified by the World Health Organization (WHO) as an occupational phenomenon resulting from chronic workplace stress that has not been successfully managed. It is characterized by feelings of energy depletion, increased mental distance from one’s job, and reduced professional efficacy.',
      'We cannot simply "mindfulness" our way out of unreasonable workloads, but we can set protective emotional firewalls. Designating non-negotiable tech-free transition zones between work and home life resets cognitive fatigue.',
      'Learn to say a clean "no" without elaborate apologetic justifications. Protecting your rest is protecting your ability to sustain high-quality contributions over decades.'
    ],
    keyTakeaways: [
      'Burnout is systemic and physiological, not a lack of willpower.',
      'Establish explicit shutdown rituals at the end of the workday.',
      'Prioritize non-screen evening recovery activities to allow neural restoration.'
    ]
  }
];
