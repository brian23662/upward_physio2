import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Briefcase, Target, Users, Heart, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { CTABanner } from '@/components/sections/cta-banner';

export const metadata: Metadata = {
  title: 'About — Doctor of Physical Therapy',
  description:
    'Meet the founder of Upward Physio. Years of occupational health expertise, a passion for performance, and a vision to redefine physical therapy.',
};

const journey = [
  {
    icon: GraduationCap,
    title: 'Clinical Training',
    body: 'Earned a Doctorate of Physical Therapy with a focus on orthopedic rehab and movement science. Built a foundation in evidence-based care from day one.',
  },
  {
    icon: Briefcase,
    title: 'Occupational Health',
    body: 'Spent years in occupational health, designing return-to-work programs, conducting injury prevention training, and seeing how movement quality shapes lives at scale.',
  },
  {
    icon: Target,
    title: 'Concierge Side Practice',
    body: 'Started Upward Physio to serve real people in real environments — gyms, homes, offices. No insurance limits. No 15-minute visits. No compromises.',
  },
  {
    icon: Zap,
    title: 'Full-Time Vision',
    body: 'Building toward a full-time private practice that integrates orthopedic rehab, performance training, injury prevention, and corporate wellness under one roof.',
  },
];

const philosophy = [
  {
    icon: Heart,
    title: 'You are an athlete.',
    body: 'Whether you lift, run, climb, or just want to play with your kids — your body deserves athlete-level care. I treat everyone like one.',
  },
  {
    icon: Users,
    title: 'Real care takes time.',
    body: 'Hour-long sessions. One client at a time. No clipboards. The model is simple — and it produces better outcomes because it’s built around you.',
  },
  {
    icon: Target,
    title: 'Rehab is performance.',
    body: 'Recovery doesn’t end when the pain is gone. It ends when you’re bulletproof — stronger, more resilient, and ready for whatever’s next.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden grain">
        <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
        <div className="glow-orb h-[500px] w-[500px] bg-teal-500 -right-40 top-1/4 opacity-20" />

        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-end">
            <div className="lg:col-span-3">
              <Reveal>
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="h-px w-8 bg-teal-400" />
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-400">
                    About
                  </span>
                </div>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
                  A licensed PT building the practice he <span className="text-teal-400 italic">wished existed.</span>
                </h1>
                <p className="mt-8 text-lg md:text-xl text-ink-300 leading-relaxed max-w-2xl">
                  Movement is medicine, but only when it&apos;s prescribed by someone
                  who actually understands how you train, live, and work. That&apos;s
                  the foundation Upward Physio is built on.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.2} className="lg:col-span-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-ink-700">
                <Image
                  src="/images/dj-manual-therapy.webp"
                  alt="DJ Keim working with a client in a window-lined therapy studio"
                  fill
                  className="object-cover object-[55%_center]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bio narrative */}
      <section className="section bg-ink-950 border-t border-ink-800">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="The Bio"
                title={
                  <>
                    Built on <span className="text-teal-400 italic">two worlds.</span>
                  </>
                }
              />
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-2">
              <div className="space-y-6 text-ink-200 leading-relaxed text-lg">
                <p>
                  Hi everyone, I&apos;m DJ Keim, Momenta&apos;s newest physical
                  therapist. I grew up in southeast Missouri and earned my
                  Doctorate of Physical Therapy from Washington University in
                  St. Louis. I spent my first four years post-graduation in
                  Washington, DC, working in outpatient orthopedics and sports
                  medicine while also treating a small in-home caseload on nights
                  and weekends.
                </p>
                <p>
                  More recently, I spent a year developing and launching the
                  first preventative therapy program for{' '}
                  <span className="text-teal-400">Metro (WMATA)</span> employees
                  across the DC/Maryland/Virginia region, which sparked my passion
                  for occupational health and injury prevention. I recently moved
                  to Denver and now work as the director of an occupational health
                  clinic here in the city.
                </p>
                <p>
                  Outside of work, I enjoy traveling, spending time with family,
                  finding new coffee shops and breweries, and weightlifting.
                </p>
                <p className="text-ink-50 font-medium">
                  My approach is movement-focused, using targeted exercise and
                  education to teach you the strategies, exercises and habits that
                  will get you out of pain and prevent recurrent injury. When
                  appropriate, I utilize hands-on techniques and modalities to help
                  restore pain-free movement. I&apos;m also a Certified Strength and
                  Conditioning Coach (CSCS), which helps shape my approach to rehab
                  and performance.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="section bg-ink-950 border-t border-ink-800">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="In Practice"
              title={
                <>
                  Where the work <span className="text-teal-400 italic">happens.</span>
                </>
              }
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-6 md:auto-rows-[200px]">
            <Reveal className="md:col-span-4 md:row-span-2">
              <div className="relative h-full min-h-[260px] overflow-hidden rounded-2xl border border-ink-700">
                <Image
                  src="/images/dj-treatment-room.webp"
                  alt="DJ Keim treating a client in a window-lined therapy studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent" />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-2">
              <div className="relative h-full min-h-[200px] overflow-hidden rounded-2xl border border-ink-700">
                <Image
                  src="/images/dj-gym-session.webp"
                  alt="DJ Keim coaching a client through overhead mobility in the gym"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2} className="md:col-span-2">
              <div className="relative h-full min-h-[200px] overflow-hidden rounded-2xl border border-ink-700">
                <Image
                  src="/images/dj-presenting.webp"
                  alt="DJ Keim presenting on physical therapy in transit operations"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="section bg-ink-900">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="The Journey"
              title={
                <>
                  How we got <span className="text-teal-400 italic">here.</span>
                </>
              }
            />
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {journey.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="rounded-2xl border border-ink-700 bg-ink-950/50 p-8 h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-400/10 text-teal-400">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-ink-50">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-ink-300 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section bg-ink-950 relative overflow-hidden">
        <div className="absolute -top-40 right-1/4 h-[400px] w-[600px] rounded-full bg-ember-500/10 blur-[120px]" />

        <div className="container relative">
          <Reveal>
            <SectionHeading
              eyebrow="Philosophy"
              title={
                <>
                  Three beliefs that shape <span className="text-teal-400 italic">every session.</span>
                </>
              }
              align="center"
            />
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {philosophy.map((p, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="text-center p-8">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 text-ink-950">
                    <p.icon size={26} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-ink-50">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-ink-300 leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-16 text-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Work With Me
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
