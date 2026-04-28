'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/reveal';

export function CTABanner() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=2400&q=80"
          alt="Athlete preparing for a heavy lift"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/60" />
      </div>

      <div className="container relative">
        <Reveal>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-teal-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-400">
                Ready When You Are
              </span>
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Stop training around{' '}
              <span className="text-teal-400 italic">pain.</span>
              <br />
              Start training through it.
            </h2>
            <p className="mt-8 text-lg text-ink-200 max-w-xl leading-relaxed">
              Book a free 15-minute discovery call. No pressure, no commitment —
              just a conversation about what&apos;s holding you back and how we
              can fix it.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Book a Free Discovery Call
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
