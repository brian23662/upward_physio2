'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';

const testimonials = [
  {
    quote:
      'I came in with a nagging shoulder issue that had me sidelined for months. Six weeks in, I was hitting PRs again. The fact that he comes to my gym is a game-changer.',
    name: 'Marcus T.',
    role: 'Powerlifter & Marketing Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
  {
    quote:
      'Finally a PT who actually understands lifting. Every other clinic gave me TheraBand exercises and told me to rest. Upward Physio gave me a plan that respected my goals.',
    name: 'Sarah K.',
    role: 'CrossFit Athlete',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
  },
  {
    quote:
      'The convenience alone is worth it — sessions in my home, around my schedule. But the quality of care is what keeps me coming back. Worth every penny.',
    name: 'David R.',
    role: 'Tech Executive & Triathlete',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
];

export function Testimonials() {
  return (
    <section className="section bg-ink-900 relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-teal-500/10 blur-[120px]" />

      <div className="container relative">
        <Reveal>
          <SectionHeading
            eyebrow="Client Stories"
            title={
              <>
                Real people. <span className="text-teal-400 italic">Real comebacks.</span>
              </>
            }
            align="center"
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <figure className="h-full rounded-2xl border border-ink-700 bg-ink-950/60 backdrop-blur p-7 flex flex-col">
                <div className="flex items-center gap-1 text-teal-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="mt-5 text-ink-200 leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 pt-6 border-t border-ink-800">
                  <div className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-teal-400/20">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink-50">{t.name}</div>
                    <div className="text-xs text-ink-400">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
