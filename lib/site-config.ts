export const siteConfig = {
  name: 'Upward Physio',
  domain: 'upwardphysio.com',
  url: 'https://upwardphysio.com',
  tagline: 'Movement Built to Last.',
  description:
    'Concierge physical therapy that meets you where you train. Orthopedic rehab, strength & conditioning, and workplace wellness from a licensed PT.',
  contact: {
    email: 'hello@upwardphysio.com',
    phone: '(555) 123-4567',
    location: 'Serving the metro area — gym, home & corporate visits',
  },
  social: {
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com',
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
};

export const services = [
  {
    slug: 'concierge',
    title: 'Upward Physio',
    short: 'PT delivered in your gym, home, or workspace.',
    description:
      'One-on-one sessions with a licensed physical therapist — no waiting rooms, no rushed visits, no insurance gatekeeping. We come to your gym, your home, or your office and build the session around your goals.',
    features: [
      'Full 60-minute sessions, 1-on-1 attention',
      'Treatment in your environment, on your equipment',
      'Direct text access to your PT between visits',
      'Cash-pay simplicity — no insurance hoops',
    ],
    audience: 'individual',
  },
  {
    slug: 'orthopedic',
    title: 'Upward Recovery',
    short: 'Get back to what you love, stronger than before.',
    description:
      'Whether you’re recovering from surgery, rehabbing a chronic injury, or coming back from a setback, we build a progressive plan rooted in clinical expertise and real-world performance.',
    features: [
      'Post-surgical rehabilitation',
      'Chronic pain & overuse injury management',
      'Hands-on manual therapy',
      'Return-to-sport & return-to-lifting protocols',
    ],
    audience: 'individual',
  },
  {
    slug: 'performance',
    title: 'Upward Performance',
    short: 'Bridge the gap between rehab and peak output.',
    description:
      'Rehab doesn’t end when the pain stops — it ends when you’re bulletproof. Performance training built by a PT means you train hard without breaking down.',
    features: [
      'Strength programming from a clinician',
      'Movement assessment & weak-link identification',
      'Sport-specific performance plans',
      'Hybrid rehab-to-performance progressions',
    ],
    audience: 'individual',
  },
  {
    slug: 'prevention',
    title: 'Upward Prevention',
    short: 'Build the body that doesn’t go down.',
    description:
      'A proactive program designed to find your weak links before they become injuries. Movement screens, mobility work, and targeted strength built around how you actually live and train.',
    features: [
      'Comprehensive movement screening',
      'Personalized mobility & stability programming',
      'Quarterly check-ins & progressions',
      'Built for athletes, lifters & active professionals',
    ],
    audience: 'individual',
  },
  {
    slug: 'workplace',
    title: 'Upward Wellness',
    short: 'Healthier teams. Fewer injuries. Better output.',
    description:
      'On-site assessments, ergonomic consulting, and movement programs built for your workforce. Drawing from years of occupational health experience, we reduce injury rates and demonstrate measurable ROI.',
    features: [
      'On-site ergonomic & movement assessments',
      'Injury-prevention training for staff',
      'Return-to-work programming',
      'Custom wellness initiatives & ROI reporting',
    ],
    audience: 'corporate',
  },
] as const;

export type Service = (typeof services)[number];
