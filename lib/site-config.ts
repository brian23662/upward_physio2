export const siteConfig = {
  name: 'Upward Physio',
  domain: 'upwardphysio.com',
  url: 'https://upwardphysio.com',
  tagline: 'Movement Built to Last.',
  description:
    'Upward Physio meets you where you train. Orthopedic rehab, strength & conditioning, and workplace wellness from a licensed PT.',
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
    icon: 'concierge',
    detail: {
      tagline: 'Concierge Physical Therapy',
      heroSubtitle:
        'The clinic comes to you. One licensed PT, a full hour of undivided attention, and a plan built around your life — not the insurance company’s.',
      problem: {
        heading: 'Traditional PT wasn’t built for you',
        body:
          'Crowded clinics, fifteen-minute visits split between three patients, and a plan dictated by what insurance will reimburse. If you’ve ever felt like a number on a schedule, you already know the system is built for throughput, not outcomes.',
      },
      approach: {
        heading: 'A different model',
        body:
          'Upward Physio is concierge care: a single licensed physical therapist who treats you in the environment where you actually move. Every session is a full hour, one-on-one, with hands-on work and a plan that adapts to how you respond — not a fixed protocol.',
      },
      steps: [
        { title: 'Discovery call', body: 'A free 15-minute conversation to understand your goals and whether we’re the right fit.' },
        { title: 'Full evaluation', body: 'A comprehensive movement and history assessment in your space — gym, home, or office.' },
        { title: 'Hands-on sessions', body: 'Sixty-minute one-on-one visits combining manual therapy, loading, and coaching.' },
        { title: 'Between-visit support', body: 'Direct text access to your PT so progress doesn’t stall between appointments.' },
      ],
      stat: { value: '60 min', label: 'Every session, one-on-one' },
      faqs: [
        { q: 'Do you take insurance?', a: 'Upward Physio is cash-pay. That keeps care driven by your goals rather than reimbursement rules, and we provide documentation you can submit to your insurer for possible out-of-network reimbursement.' },
        { q: 'Where do sessions take place?', a: 'Wherever you train or live — your gym, your home, or your workplace. We bring what we need.' },
        { q: 'How many sessions will I need?', a: 'It depends on your goals and history. We’ll give you an honest estimate after the initial evaluation and reassess as you progress.' },
      ],
    },
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
    icon: 'orthopedic',
    detail: {
      tagline: 'Orthopedic & Injury Rehabilitation',
      heroSubtitle:
        'From post-op to pain-free. A progressive, clinically grounded plan that takes you all the way back to the activities you love — not just out of pain.',
      problem: {
        heading: 'Most rehab stops halfway',
        body:
          'Pain going away is not the same as being ready. Too many rehab plans discharge you the moment symptoms ease, leaving a gap between “no longer hurting” and “strong enough to trust your body again.” That gap is where re-injury lives.',
      },
      approach: {
        heading: 'Rehab that finishes the job',
        body:
          'We treat the injury, then we keep going — rebuilding strength, capacity, and confidence under load until you can return to sport, lifting, or daily life without hesitation. Manual therapy, progressive loading, and clear milestones at every stage.',
      },
      steps: [
        { title: 'Assess & diagnose', body: 'A thorough evaluation to understand the injury, the contributing factors, and your goals.' },
        { title: 'Restore & rebuild', body: 'Hands-on treatment and targeted loading to restore range, control, and tissue tolerance.' },
        { title: 'Reload under stress', body: 'Progressive strength work that prepares the area for the demands you’ll put on it.' },
        { title: 'Return with confidence', body: 'Sport- or task-specific testing so you return knowing the area can handle it.' },
      ],
      stat: { value: '100%', label: 'Return-to-activity focus' },
      faqs: [
        { q: 'Can you work with my surgeon’s protocol?', a: 'Yes. We coordinate with post-surgical protocols and progress you safely within them while keeping the bigger return-to-activity goal in view.' },
        { q: 'I’ve had this pain for years. Is it too late?', a: 'Chronic and overuse injuries are a core focus. A fresh assessment often uncovers contributing factors earlier care missed.' },
        { q: 'Do you do hands-on treatment?', a: 'Manual therapy is part of the toolkit, paired with active loading — because passive treatment alone rarely creates lasting change.' },
      ],
    },
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
    icon: 'performance',
    detail: {
      tagline: 'Performance Training',
      heroSubtitle:
        'Train hard without breaking down. Strength and performance programming designed by a clinician who understands exactly how much your body can take — and how to give it more.',
      problem: {
        heading: 'Generic programs ignore your weak links',
        body:
          'Most training plans assume a symmetrical, injury-free athlete. Push hard on top of an unaddressed movement limitation and you don’t get stronger — you get hurt. Strength built on a faulty foundation is borrowed, not earned.',
      },
      approach: {
        heading: 'Performance with a clinical lens',
        body:
          'We screen for the weak links first, then program around them — so every kilo you add is built on a base that can hold it. The result is a hybrid of rehab precision and performance ambition: you train aggressively, intelligently, and durably.',
      },
      steps: [
        { title: 'Movement screen', body: 'A clinical assessment to map your strengths, asymmetries, and limiting factors.' },
        { title: 'Targeted base-building', body: 'Address the weak links so they stop capping your progress and your safety.' },
        { title: 'Progressive programming', body: 'Sport- or goal-specific strength work that scales with your capacity.' },
        { title: 'Reassess & advance', body: 'Regular re-testing to confirm you’re adapting — and to push the ceiling higher.' },
      ],
      stat: { value: '0', label: 'Weak links left unaddressed' },
      faqs: [
        { q: 'Is this for athletes only?', a: 'No. It’s for anyone who wants to get meaningfully stronger without breaking down — lifters, weekend athletes, and active professionals included.' },
        { q: 'How is this different from a personal trainer?', a: 'Programming comes from a licensed PT, so it’s informed by how tissue tolerates load and where your specific risks are.' },
        { q: 'I’m coming out of rehab. Is this the next step?', a: 'Exactly — the hybrid rehab-to-performance progression is built for that handoff so you don’t lose momentum.' },
      ],
    },
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
    icon: 'prevention',
    detail: {
      tagline: 'Injury Prevention',
      heroSubtitle:
        'The best injury is the one that never happens. A proactive program that finds and fixes your weak links before they sideline you.',
      problem: {
        heading: 'Most people wait until they’re hurt',
        body:
          'Injury prevention is the care everyone agrees matters and almost no one does — until they’re already on the sidelines. The warning signs are usually there months in advance, hiding in plain sight as a tight hip, a weak side, or a movement you’ve quietly stopped doing.',
      },
      approach: {
        heading: 'Get ahead of it',
        body:
          'A comprehensive movement screen surfaces the limitations you can’t feel yet, and a personalized mobility-and-strength plan closes the gaps. Quarterly check-ins keep the plan current as your training and life change.',
      },
      steps: [
        { title: 'Comprehensive screen', body: 'A full movement assessment to identify hidden limitations and asymmetries.' },
        { title: 'Personalized plan', body: 'Mobility and stability programming built around how you actually move and train.' },
        { title: 'Build resilience', body: 'Targeted strength work to shore up the weak links before they fail.' },
        { title: 'Quarterly check-ins', body: 'Regular reassessment and progression so the plan evolves with you.' },
      ],
      stat: { value: '4×/yr', label: 'Check-ins to stay ahead' },
      faqs: [
        { q: 'I’m not injured. Do I really need this?', a: 'That’s exactly the right time. Prevention works best before symptoms appear, when small corrections are easy.' },
        { q: 'Who is this designed for?', a: 'Athletes, lifters, and active professionals who want to keep doing what they love without interruption.' },
        { q: 'What does a movement screen involve?', a: 'A structured assessment of mobility, stability, and movement quality to map where your risks actually are.' },
      ],
    },
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
    icon: 'workplace',
    detail: {
      tagline: 'Workplace Wellness',
      heroSubtitle:
        'Healthier teams, fewer injuries, measurable ROI. On-site occupational health expertise that treats your workforce as the asset it is.',
      problem: {
        heading: 'Workplace injuries are expensive — and preventable',
        body:
          'Musculoskeletal injuries are among the costliest and most common workplace claims, driving lost time, turnover, and premiums. Most are the predictable result of repetitive strain and poor ergonomics — which means most are preventable.',
      },
      approach: {
        heading: 'Occupational health, on-site',
        body:
          'Drawing on years developing preventative programs for large workforces, Upward Wellness brings clinical assessment, ergonomic consulting, and movement training directly into your workplace — and reports the ROI in terms your finance team will recognize.',
      },
      steps: [
        { title: 'On-site assessment', body: 'Evaluate workstations, tasks, and injury data to find the real risk drivers.' },
        { title: 'Targeted program', body: 'Ergonomic fixes and movement training tailored to your roles and environment.' },
        { title: 'Train your people', body: 'Injury-prevention education that gives staff habits they actually keep.' },
        { title: 'Measure & report', body: 'Track injury rates and lost-time trends, with clear ROI reporting for leadership.' },
      ],
      stat: { value: 'ROI', label: 'Reported in terms leadership tracks' },
      faqs: [
        { q: 'How large does our team need to be?', a: 'Programs scale from small teams to large facilities — we’ll right-size the engagement to your headcount and risk profile.' },
        { q: 'Can you handle return-to-work cases?', a: 'Yes. Return-to-work programming is a core offering, coordinating safe re-entry after injury.' },
        { q: 'How do you demonstrate ROI?', a: 'By tracking injury rates, lost-time incidents, and related costs over the engagement and reporting them against your baseline.' },
      ],
    },
  },
] as const;

export type Service = (typeof services)[number];
