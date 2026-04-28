'use client';

import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';

const pillars = [
  {
    n: '01',
    title: 'No clipboards, no waiting rooms.',
    body: 'Every session is one-on-one with your PT. Full hour. Your gym, your home, or your workspace — never a clinic conveyor belt.',
  },
  {
    n: '02',
    title: 'Clinical expertise meets real training.',
    body: 'I treat you like an athlete because I train like one. Rehab progressions are built to actually return you to lifting, running, and the work you love.',
  },
  {
    n: '03',
    title: 'Occupational health roots.',
    body: 'Years of frontline experience reducing injury rates and getting people back to work. Same expertise, applied to your goals.',
  },
  {
    n: '04',
    title: 'Cash-pay simplicity.',
    body: 'No insurance gatekeepers limiting your care. Transparent pricing. Real time, real attention, real results.',
  },
];

export function WhyUpward() {
  return (
    <section className="section bg-ink-950 relative">
      {/* Decorative side accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2/3 w-px bg-gradient-to-b from-transparent via-teal-400/40 to-transparent" />

      <div className="container relative">
        <Reveal>
          <SectionHeading
            eyebrow="Why Upward Physio"
            title={
              <>
                A different kind of physical therapy{' '}
                <span className="text-teal-400 italic">for a different kind of client.</span>
              </>
            }
            description="Built for people who refuse to settle for the assembly-line model of care — and who want a practitioner who speaks their language."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {pillars.map((p, idx) => (
            <Reveal key={p.n} delay={idx * 0.08}>
              <div className="group relative h-full rounded-2xl border border-ink-800 bg-ink-900/40 p-8 md:p-10 hover:border-teal-400/40 transition-all duration-500 overflow-hidden">
                {/* Number watermark */}
                <span
                  className="absolute -top-4 -right-2 font-display text-[120px] font-bold text-ink-800/50 leading-none select-none group-hover:text-teal-400/10 transition-colors duration-700"
                  aria-hidden="true"
                >
                  {p.n}
                </span>
                <div className="relative">
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-teal-400">
                    {p.n}
                  </span>
                  <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold text-ink-50 leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-ink-300 leading-relaxed">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
