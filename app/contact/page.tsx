import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { ContactForm } from '@/components/sections/contact-form';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Get Started',
  description:
    'Book a free discovery call with Upward Physio. Physical therapy delivered to your gym, home, or workplace.',
};

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone}`,
  },
  {
    icon: MapPin,
    label: 'Service Area',
    value: siteConfig.contact.location,
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 overflow-hidden grain">
        <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
        <div className="glow-orb h-[400px] w-[400px] bg-teal-500 right-0 top-1/4 opacity-15" />

        <div className="container relative">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="h-px w-8 bg-teal-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-400">
                  Let&apos;s Talk
                </span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
                Ready to take the <span className="text-teal-400 italic">first step?</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl text-ink-300 leading-relaxed max-w-2xl">
                Book a free 15-minute discovery call. Tell us about your goals,
                your situation, and what&apos;s in the way. We&apos;ll figure out
                if we&apos;re a fit — together.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form + contact info */}
      <section className="section bg-ink-950 border-t border-ink-800">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Contact info column */}
            <Reveal className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-3xl font-bold text-ink-50">
                    Direct lines.
                  </h2>
                  <p className="mt-3 text-ink-300 leading-relaxed">
                    Prefer to reach out directly? Here&apos;s how to find us.
                  </p>
                </div>

                <ul className="space-y-5">
                  {contactMethods.map((method) => (
                    <li key={method.label}>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="group flex items-start gap-4 rounded-xl border border-ink-800 bg-ink-900/40 p-5 hover:border-teal-400/40 transition-colors"
                        >
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-400/10 text-teal-400 group-hover:bg-teal-400 group-hover:text-ink-950 transition-colors">
                            <method.icon size={18} />
                          </div>
                          <div>
                            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
                              {method.label}
                            </div>
                            <div className="mt-1 text-ink-50 font-medium">
                              {method.value}
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4 rounded-xl border border-ink-800 bg-ink-900/40 p-5">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-400/10 text-teal-400">
                            <method.icon size={18} />
                          </div>
                          <div>
                            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
                              {method.label}
                            </div>
                            <div className="mt-1 text-ink-50 font-medium">
                              {method.value}
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Map placeholder */}
                <div className="relative h-48 rounded-2xl border border-ink-800 bg-ink-900/40 overflow-hidden grid-bg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin size={28} className="mx-auto text-teal-400" />
                      <p className="mt-3 text-sm text-ink-300">
                        Mobile service area
                      </p>
                      <p className="text-xs text-ink-500">
                        Replace with embedded map
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Form column */}
            <Reveal delay={0.15} className="lg:col-span-3">
              <div className="rounded-2xl border border-ink-800 bg-ink-900/40 p-6 md:p-10">
                <h2 className="font-display text-3xl font-bold text-ink-50">
                  Tell me your story.
                </h2>
                <p className="mt-3 text-ink-300 leading-relaxed">
                  Fill this out and I&apos;ll personally get back to you within 24
                  hours.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
