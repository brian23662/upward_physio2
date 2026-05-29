import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Building2, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { CTABanner } from '@/components/sections/cta-banner';
import { services } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Upward Physio, orthopedic rehab, strength & conditioning, injury prevention, and workplace wellness — all delivered by a licensed PT.',
};

// Hero images per service
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

export default function ServicesPage() {
  const individualServices = services.filter((s) => s.audience === 'individual');
  const corporateServices = services.filter((s) => s.audience === 'corporate');

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden grain">
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
                Whether you&apos;re an individual rebuilding from injury, an athlete
                chasing a PR, or an organization investing in your team — we
                deliver clinical care that respects your goals.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Audience separator: Individual */}
      <section className="border-t border-ink-800 bg-ink-950 py-10">
        <div className="container">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-teal-400/30 bg-teal-400/10 text-teal-400">
              <User size={16} />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-teal-400">
              For Individuals — Cash-Pay Simplicity
            </span>
          </div>
        </div>
      </section>

      {/* Individual services */}
      {individualServices.map((service, idx) => (
        <ServiceBlock
          key={service.slug}
          service={service}
          image={heroImages[service.slug]}
          reverse={idx % 2 === 1}
        />
      ))}

      {/* Corporate divider */}
      <section className="relative py-20 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container relative text-center">
          <Reveal>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-ember-500" />
              <Building2 size={20} className="text-ember-500" />
              <span className="h-px w-12 bg-ember-500" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-50">
              For <span className="text-ember-500 italic">Organizations</span>
            </h2>
            <p className="mt-5 text-ink-300 max-w-2xl mx-auto">
              Bringing occupational health expertise into companies that take their
              people seriously. Reduce injuries, boost retention, demonstrate ROI.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Corporate services */}
      {corporateServices.map((service) => (
        <ServiceBlock
          key={service.slug}
          service={service}
          image={heroImages[service.slug]}
          corporate
        />
      ))}

      <CTABanner />
    </>
  );
}

interface ServiceBlockProps {
  service: (typeof services)[number];
  image: string;
  reverse?: boolean;
  corporate?: boolean;
}

function ServiceBlock({ service, image, reverse, corporate }: ServiceBlockProps) {
  const accent = corporate ? 'ember-500' : 'teal-400';

  return (
    <section
      id={service.slug}
      className="section bg-ink-950 border-t border-ink-800 scroll-mt-20"
    >
      <div className="container">
        <div
          className={`grid gap-12 lg:grid-cols-2 lg:gap-20 items-center ${
            reverse ? 'lg:[&>:first-child]:order-2' : ''
          }`}
        >
          <Reveal>
            <div className="relative">
              <div
                className={`absolute -top-4 -left-4 h-full w-full rounded-2xl border ${
                  corporate ? 'border-ember-500/30' : 'border-teal-400/30'
                }`}
              />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink-700">
                <Image
                  src={image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink-950/40 via-transparent to-transparent" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <SectionHeading
                eyebrow={corporate ? 'For Organizations' : 'For Individuals'}
                title={service.title}
                description={service.description}
              />

              <ul className="mt-8 grid gap-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full mt-0.5 ${
                        corporate
                          ? 'bg-ember-500/20 text-ember-500'
                          : 'bg-teal-400/20 text-teal-400'
                      }`}
                    >
                      <Check size={13} strokeWidth={3} />
                    </div>
                    <span className="text-ink-200 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button asChild variant={corporate ? 'ember' : 'default'}>
                  <Link href="/contact">
                    {corporate ? 'Request a Consultation' : 'Get Started'}
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
