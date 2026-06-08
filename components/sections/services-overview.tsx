'use client';

import Link from 'next/link';
import { Activity, Dumbbell, Shield, HeartPulse, Building2, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { services } from '@/lib/site-config';

const iconMap = {
  concierge: Activity,
  orthopedic: HeartPulse,
  performance: Dumbbell,
  prevention: Shield,
  workplace: Building2,
} as const;

export function ServicesOverview() {
  return (
    <section className="section bg-ink-950">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="container relative">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title={
              <>
                Treatment that meets you{' '}
                <span className="text-teal-400 italic">where you are.</span>
              </>
            }
            description="From rehab to performance to corporate wellness — every service is designed to keep you moving, training, and showing up at full capacity."
          />
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = iconMap[service.slug as keyof typeof iconMap];
            const featured = idx === 0;
            return (
              <Reveal key={service.slug} delay={idx * 0.08}>
                <Link
                  href={`/services/${service.slug}`}
                  className={`group block h-full rounded-2xl border p-8 transition-all duration-500 relative overflow-hidden ${
                    featured
                      ? 'border-teal-400/40 bg-gradient-to-br from-teal-500/10 via-ink-900 to-ink-900'
                      : 'border-ink-800 bg-ink-900/50 hover:border-teal-400/40 hover:bg-ink-900'
                  }`}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-teal-500/20 blur-3xl" />
                  </div>

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                          featured ? 'bg-teal-400 text-ink-950' : 'bg-ink-800 text-teal-400 group-hover:bg-teal-400 group-hover:text-ink-950'
                        } transition-colors duration-300`}
                      >
                        {Icon && <Icon size={22} strokeWidth={2} />}
                      </div>
                      <ArrowUpRight
                        size={20}
                        className="text-ink-500 group-hover:text-teal-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                      />
                    </div>

                    <h3 className="mt-8 font-display text-2xl font-bold text-ink-50">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink-300 leading-relaxed">
                      {service.short}
                    </p>

                    {service.audience === 'corporate' && (
                      <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-ember-500/30 bg-ember-500/10 px-3 py-1">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ember-400">
                          For Organizations
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
