'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-32 pb-20 overflow-hidden grain">
      {/* Background video with heavy overlay */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-poster.webp"
          className="h-full w-full object-cover object-top"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/60" />
      </div>

      {/* Glowing orbs */}
      <div className="glow-orb h-[500px] w-[500px] bg-teal-500 -left-40 top-1/4 animate-pulse-glow" />
      <div className="glow-orb h-[400px] w-[400px] bg-ember-500 right-0 bottom-1/4 opacity-20 animate-pulse-glow" />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-1.5 mb-8 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
              Now accepting new clients
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight"
          >
            <span className="headline-gradient">Movement</span>
            <br />
            <span className="text-ink-50">built to </span>
            <span className="text-teal-400 italic">last.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-lg md:text-xl text-ink-200 max-w-xl leading-relaxed"
          >
            One-on-one physical therapy delivered in your gym, your home, or
            your workplace. Sessions with a licensed PT who treats
            you like an athlete — because you are one.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Button asChild size="lg">
              <Link href="/contact">
                Book a Free Discovery Call
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                <PlayCircle size={18} />
                Explore Services
              </Link>
            </Button>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.18em] text-ink-300"
          >
            <span className="font-semibold">Licensed PT</span>
            <span className="h-1 w-1 rounded-full bg-ink-500" />
            <span className="font-semibold">Cash-Pay Simplicity</span>
            <span className="h-1 w-1 rounded-full bg-ink-500" />
            <span className="font-semibold">Occupational Health Expert</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ink-400"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-ink-400 to-transparent" />
      </motion.div>
    </section>
  );
}
