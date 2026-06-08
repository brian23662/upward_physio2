import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  User,
  Building2,
  Activity,
  HeartPulse,
  Dumbbell,
  Shield,
} from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { CTABanner } from '@/components/sections/cta-banner';
import { services } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Five focused services — Upward Physio, Recovery, Performance, Prevention, and Wellness — delivered one-on-one by a licensed PT.',
};

const iconMap = {
  concierge: Activity,
  orthopedic: HeartPulse,
  performance: Dumbbell,
  prevention: Shield,
  workplace: Building2,
} as const;

const cardImages: Record<string, string> = {
  concierge:
    'https://images.unsplash.com/photo-1593810450967-f9c42742e326?auto=format&fit=crop&w=1000&q=80',
  orthopedic:
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80',
  performance:
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
  prevention:
    'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80',
  workplace:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
};

export default function ServicesPage() {
  const individual = services.filter((s) => s.audience === 'individual');
  const corporate = services.filter((s) => s.audience === 'corporate');

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
        <div className="glow-orb h-[500px] w-[500px] bg-teal-500 left-1/3 top-0 opacity-20" />

        <div className="container relative">
          <Reveal>
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="h-px w-8 bg-teal-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-400">
                  Services
                </span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
                Five services. <span className="text-teal-400 italic">One mission.</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl text-ink-300 leading-relaxed max-w-2xl">
                Whether you&apos;re an individual rebuilding from injury, an athlete chasing a PR,
                or an organization investing in your team — every service is built around your
                goals and delivered by a licensed PT. Choose where you want to start.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Individual services */}
      <section id="individuals" className="section bg-ink-950 border-t border-ink-800 scroll-mt-20">
        <div className="container">
          <Reveal>
            <div className="flex items-center gap-3 mb-12">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-teal-400/30 bg-teal-400/10 text-teal-400">
                <User size={16} />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-teal-400">
                For Individuals — Cash-Pay Simplicity
              </span>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {individual.map((service, idx) => (
              <ServiceCard key={service.slug} service={service} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Corporate divider + card */}
      <section
        id="organizations"
        className="relative section bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950 overflow-hidden scroll-mt-20"
      >
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container relative">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-ember-500" />
                <Building2 size={20} className="text-ember-500" />
                <span className="h-px w-12 bg-ember-500" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-50">
                For <span className="text-ember-500 italic">Organizations</span>
              </h2>
              <p className="mt-5 text-ink-300">
                Bringing occupational health expertise into companies that take their people
                seriously. Reduce injuries, boost retention, demonstrate ROI.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            {corporate.map((service, idx) => (
              <ServiceCard key={service.slug} service={service} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

function ServiceCard({
  service,
  idx,
}: {
  service: (typeof services)[number];
  idx: number;
}) {
  const corporate = service.audience === 'corporate';
  const Icon = iconMap[service.icon as keyof typeof iconMap];
  const image = cardImages[service.slug];
  const accentText = corporate ? 'text-ember-500' : 'text-teal-400';
  const hoverBorder = corporate
    ? 'hover:border-ember-500/40'
    : 'hover:border-teal-400/40';

  return (
    <Reveal delay={idx * 0.08}>
      {/* id kept so legacy /services#slug anchor links still resolve here */}
      <Link
        id={service.slug}
        href={`/services/${service.slug}`}
        className={`group flex flex-col h-full overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/50 transition-all duration-500 scroll-mt-24 ${hoverBorder} hover:bg-ink-900`}
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
          <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-ink-950/70 backdrop-blur border border-ink-700">
            {Icon && <Icon size={18} className={accentText} />}
          </div>
          {corporate && (
            <div className="absolute top-4 right-4 rounded-full border border-ember-500/30 bg-ember-500/10 px-3 py-1">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ember-400">
                Organizations
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-7">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-2xl font-bold text-ink-50">{service.title}</h3>
            <ArrowUpRight
              size={20}
              className={`shrink-0 text-ink-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                corporate ? 'group-hover:text-ember-500' : 'group-hover:text-teal-400'
              }`}
            />
          </div>
          <p className="mt-3 text-sm text-ink-300 leading-relaxed">{service.short}</p>
          <span
            className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${accentText}`}
          >
            Learn more
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
