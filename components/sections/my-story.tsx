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
  { icon: Users, value: '1-on-1', label: 'Personalized Care Model' },
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
                  src="/images/dj-resistance-band.webp"
                  alt="DJ Keim coaching a client through resistance-band shoulder work"
                  fill
                  className="object-cover object-[30%_center]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
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
                      DJ Keim, PT, DPT, CSCS
                    </div>
                    <div className="text-xs text-ink-400">
                      Doctor of Physical Therapy
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
                  I&apos;m DJ Keim, a licensed physical therapist who earned my{' '}
                  <span className="text-ink-50 font-semibold">Doctorate of Physical Therapy from Washington University in St. Louis</span>.
                  I spent my first four years post-graduation in Washington, DC,
                  working in outpatient orthopedics and sports medicine.
                </p>
                <p>
                  More recently, I developed and launched the first preventative
                  therapy program for Metro (WMATA) employees across the
                  DC/Maryland/Virginia region — work that sparked my passion for
                  occupational health and injury prevention. I&apos;ve since moved
                  to Denver, where I direct an occupational health clinic.
                </p>
                <p className="text-ink-50 font-medium">
                  My approach is movement-focused: targeted exercise and education
                  to teach you the strategies and habits that get you out of pain
                  and prevent recurrent injury — backed by my Certified Strength &amp;
                  Conditioning Coach (CSCS) credential.
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
