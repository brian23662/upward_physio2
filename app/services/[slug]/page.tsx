import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Activity,
  HeartPulse,
  Dumbbell,
  Shield,
  Building2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/reveal';
import { CTABanner } from '@/components/sections/cta-banner';
import { services } from '@/lib/site-config';

const iconMap = {
  concierge: Activity,
  orthopedic: HeartPulse,
  performance: Dumbbell,
  prevention: Shield,
  workplace: Building2,
} as const;

// Placeholder hero imagery per service — swap for native assets later.
const heroImages: Record<string, string> = {
  concierge:
    'https://images.unsplash.com/photo-1593810450967-f9c42742e326?auto=format&fit=crop&w=1600&q=80',
  orthopedic:
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80',
  performance:
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80',
  prevention:
    'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80',
  workplace:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.detail.heroSubtitle,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const corporate = service.audience === 'corporate';
  const accent = corporate ? 'ember' : 'teal';
  const Icon = iconMap[service.icon as keyof typeof iconMap];
  const image = heroImages[service.slug];
  const { detail } = service;

  // Tailwind needs literal class strings, so branch explicitly.
  const accentText = corporate ? 'text-ember-500' : 'text-teal-400';
  const accentBorder = corporate ? 'border-ember-500/30' : 'border-teal-400/30';
  const accentBg = corporate ? 'bg-ember-500/10' : 'bg-teal-400/10';
  const accentChipBg = corporate ? 'bg-ember-500/20' : 'bg-teal-400/20';
  const orbColor = corporate ? 'bg-ember-500' : 'bg-teal-500';

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
        <div className={`glow-orb h-[500px] w-[500px] ${orbColor} left-1/3 top-0 opacity-20`} />

        <div className="container relative">
          <Reveal>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-ink-300 hover:text-ink-50 transition-colors mb-8"
            >
              <ArrowLeft size={15} />
              All services
            </Link>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border ${accentBorder} ${accentBg} ${accentText}`}
                  >
                    {Icon && <Icon size={20} strokeWidth={2} />}
                  </span>
                  <span className={`text-xs font-semibold uppercase tracking-[0.22em] ${accentText}`}>
                    {detail.tagline}
                  </span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.04] tracking-tight">
                  {service.title}
                </h1>

                <p className="mt-7 text-lg md:text-xl text-ink-300 leading-relaxed max-w-xl">
                  {detail.heroSubtitle}
                </p>

                <div className="mt-9 flex flex-col sm:flex-row gap-4">
                  <Button asChild variant={corporate ? 'ember' : 'default'} size="lg">
                    <Link href="/contact">
                      {corporate ? 'Request a Consultation' : 'Get Started'}
                      <ArrowRight size={17} />
                    </Link>
                  </Button>
                  {corporate && (
                    <Button asChild variant="outline" size="lg">
                      <Link href="/services">Explore All Services</Link>
                    </Button>
                  )}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative">
                <div className={`absolute -top-4 -left-4 h-full w-full rounded-2xl border ${accentBorder}`} />
                <div className="relative aspect-[4/5] sm:aspect-[4/3] overflow-hidden rounded-2xl border border-ink-700">
                  <Image src={image} alt={service.title} fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-tr from-ink-950/50 via-transparent to-transparent" />
                  {/* Stat badge */}
                  <div className="absolute bottom-5 left-5 rounded-xl border border-ink-700 bg-ink-950/80 backdrop-blur px-5 py-3">
                    <div className={`font-display text-2xl font-bold ${accentText}`}>
                      {detail.stat.value}
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.16em] text-ink-300 mt-0.5">
                      {detail.stat.label}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Problem / Approach */}
      <section className="section bg-ink-950 border-t border-ink-800">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="rounded-2xl border border-ink-800 bg-ink-900/50 p-8 md:p-10 h-full">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
                  The Problem
                </span>
                <h2 className="mt-4 font-display text-2xl md:text-3xl font-bold leading-snug">
                  {detail.problem.heading}
                </h2>
                <p className="mt-5 text-ink-300 leading-relaxed">{detail.problem.body}</p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className={`rounded-2xl border ${accentBorder} ${accentBg} p-8 md:p-10 h-full`}>
                <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${accentText}`}>
                  Our Approach
                </span>
                <h2 className="mt-4 font-display text-2xl md:text-3xl font-bold leading-snug">
                  {detail.approach.heading}
                </h2>
                <p className="mt-5 text-ink-200 leading-relaxed">{detail.approach.body}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section bg-ink-950 border-t border-ink-800">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container relative">
          <Reveal>
            <div className="max-w-2xl">
              <span className={`text-xs font-semibold uppercase tracking-[0.22em] ${accentText}`}>
                What&apos;s Included
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold leading-tight">
                Everything that comes with {service.title}
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {service.features.map((feature, idx) => (
              <Reveal key={idx} delay={idx * 0.06}>
                <div className="flex items-start gap-4 rounded-xl border border-ink-800 bg-ink-900/50 p-5">
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full mt-0.5 ${accentChipBg} ${accentText}`}
                  >
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-ink-200 leading-relaxed">{feature}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process / How it works */}
      <section className="section bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950 border-t border-ink-800">
        <div className="container">
          <Reveal>
            <div className="max-w-2xl">
              <span className={`text-xs font-semibold uppercase tracking-[0.22em] ${accentText}`}>
                How It Works
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold leading-tight">
                A clear path, start to finish
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {detail.steps.map((step, idx) => (
              <Reveal key={idx} delay={idx * 0.08}>
                <div className="relative">
                  <div className={`font-display text-5xl font-bold ${accentText} opacity-30`}>
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold text-ink-50">{step.title}</h3>
                  <p className="mt-2 text-sm text-ink-300 leading-relaxed">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-ink-950 border-t border-ink-800">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <div>
                <span className={`text-xs font-semibold uppercase tracking-[0.22em] ${accentText}`}>
                  Questions
                </span>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold leading-tight">
                  Good to know
                </h2>
                <p className="mt-5 text-ink-300 leading-relaxed">
                  Still have a question? A quick discovery call is the fastest way to get a
                  straight answer.
                </p>
                <Button asChild variant="outline" className="mt-7">
                  <Link href="/contact">
                    Ask a Question
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="divide-y divide-ink-800 border-y border-ink-800">
                {detail.faqs.map((faq, idx) => (
                  <details key={idx} className="group py-5">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                      <span className="font-medium text-ink-50">{faq.q}</span>
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink-700 ${accentText} transition-transform group-open:rotate-45`}
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-ink-300 leading-relaxed pr-10">{faq.a}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
