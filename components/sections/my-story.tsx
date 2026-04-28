'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, BriefcaseMedical, Users } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';

const stats = [
  { icon: BriefcaseMedical, value: 'Licensed', label: 'Doctor of Physical Therapy' },
  { icon: Award, value: 'Occupational', label: 'Health Specialist' },
  { icon: Users, value: '1-on-1', label: 'Concierge Care Model' },
];

export function MyStory() {
  return (
    <section className="section bg-ink-900 grain">
      <div className="container relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Image with frames */}
          <Reveal>
            <div className="relative">
              <div className="absolute -top-6 -left-6 h-full w-full rounded-2xl border border-teal-400/30" />
              <div className="absolute -bottom-6 -right-6 h-2/3 w-2/3 rounded-2xl bg-ember-500/10 blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-ink-700">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80"
                  alt="Physical therapist working one-on-one with a client"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-8 -right-4 md:right-8 max-w-[260px] rounded-2xl border border-ink-700 bg-ink-950/95 backdrop-blur p-5 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-teal-400/20 flex items-center justify-center">
                    <span className="text-teal-400 text-lg">★</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink-50">
                      Built from the bottom up
                    </div>
                    <div className="text-xs text-ink-400">
                      Practice founder & lead PT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                eyebrow="My Story"
                title={
                  <>
                    From the clinic to the gym floor —{' '}
                    <span className="text-teal-400 italic">where you actually train.</span>
                  </>
                }
              />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 text-ink-200 leading-relaxed">
                <p>
                  I&apos;m a licensed physical therapist with a background in{' '}
                  <span className="text-ink-50 font-semibold">occupational health</span>
                  , where I spent years rehabbing workers, designing return-to-work
                  programs, and seeing firsthand how movement quality (or the lack of
                  it) shapes someone&apos;s career and life.
                </p>
                <p>
                  But I kept seeing the same gap: real people, real lifters, real
                  athletes — getting boxed in by insurance limits, 15-minute visits,
                  and cookie-cutter rehab. So I started Upward Physio as a concierge
                  side practice, treating clients in their gyms and homes.
                </p>
                <p className="text-ink-50 font-medium">
                  My vision is simple: build a practice where occupational health,
                  orthopedic rehab, strength &amp; conditioning, injury prevention, and
                  workplace wellness exist under one roof — no compromises, no silos.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 grid grid-cols-3 gap-3">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-ink-700 bg-ink-950/40 p-4 text-center"
                  >
                    <stat.icon size={20} className="mx-auto text-teal-400 mb-2" />
                    <div className="text-xs font-bold uppercase tracking-wider text-ink-50">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-ink-400 mt-1 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10">
                <Button asChild variant="outline">
                  <Link href="/about">
                    Read the Full Story
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
