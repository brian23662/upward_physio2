export const blogPosts = [
  {
    slug: 'why-cash-pay-pt-changes-everything',
    title: 'Why Cash-Pay Physical Therapy Changes Everything',
    excerpt:
      'The American insurance model wasn\'t built for athletes, lifters, or anyone with goals. Here\'s why cash-pay concierge PT delivers better outcomes — and why it costs less than you think.',
    category: 'Practice Philosophy',
    readTime: '6 min read',
    date: 'May 12, 2025',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1600&q=80',
    content: `
The traditional physical therapy model was built around insurance — and insurance was built around volume. That means 15-minute visits, three patients at once, and rehab plans optimized for billing codes instead of outcomes.

Cash-pay concierge PT flips that on its head. Hour-long, one-on-one sessions. Care plans built around your goals. No paperwork, no gatekeepers, no second-guessing.

For most active people, the math actually works in your favor — fewer visits, better outcomes, no surprise bills.
    `,
  },
  {
    slug: 'rehab-is-performance',
    title: 'Rehab Is Performance: Why You Shouldn\'t Stop at "No Pain"',
    excerpt:
      'Most patients are discharged the moment pain disappears. That\'s where the real work begins. Here\'s the framework I use to bridge rehab into long-term resilience.',
    category: 'Rehab & Recovery',
    readTime: '8 min read',
    date: 'April 28, 2025',
    image:
      'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=1600&q=80',
    content: `
"No pain" is the bare minimum. It tells you the injury healed — it doesn\'t tell you why it happened, or whether it will happen again.

True rehab doesn\'t end when symptoms resolve. It ends when you\'re measurably stronger, more mobile, and more resilient than you were before the injury. That requires a deliberate progression past "feeling better" and into capacity-building.

This is where most clinics drop the ball. And it\'s where Upward Physio starts the real work.
    `,
  },
  {
    slug: 'workplace-wellness-roi',
    title: 'The ROI of Workplace Wellness Most Companies Miss',
    excerpt:
      'Lost-time injuries, presenteeism, healthcare premiums — they all show up on the balance sheet. Here\'s how on-site PT and movement programs reduce them.',
    category: 'Corporate Wellness',
    readTime: '7 min read',
    date: 'April 14, 2025',
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80',
    content: `
Most workplace wellness programs are built around fitness perks — gym stipends, step challenges, the occasional yoga class. They check a box, but they don\'t move the needle on the metrics that matter.

What actually reduces injury rates and lowers premiums? Targeted movement programs, ergonomic assessments, and direct access to a clinician. The kind of work that occupational health teams have been doing for decades — but rarely with the polish or accessibility that today\'s workforces expect.

Here\'s how to design a program that actually delivers ROI.
    `,
  },
] as const;

export type BlogPost = (typeof blogPosts)[number];
