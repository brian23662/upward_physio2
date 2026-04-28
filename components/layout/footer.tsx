import Link from 'next/link';
import { Instagram, Linkedin, Facebook, Mail, Phone } from 'lucide-react';
import { Logo } from '@/components/logo';
import { siteConfig, services } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="relative border-t border-ink-800 bg-ink-950">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-6 text-sm text-ink-300 max-w-sm leading-relaxed">
              Concierge physical therapy that meets you where you train. Built for
              people who want to move better, recover faster, and stay in the game
              longer.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <SocialLink href={siteConfig.social.instagram} label="Instagram">
                <Instagram size={18} />
              </SocialLink>
              <SocialLink href={siteConfig.social.linkedin} label="LinkedIn">
                <Linkedin size={18} />
              </SocialLink>
              <SocialLink href={siteConfig.social.facebook} label="Facebook">
                <Facebook size={18} />
              </SocialLink>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-sm text-ink-200 hover:text-teal-400 transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 text-sm text-ink-200 hover:text-teal-400 transition-colors"
                >
                  <Mail size={14} />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2 text-sm text-ink-200 hover:text-teal-400 transition-colors"
                >
                  <Phone size={14} />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="text-sm text-ink-300 leading-relaxed">
                {siteConfig.contact.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ink-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-ink-400">
            Movement built to last.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-ink-200 hover:border-teal-400 hover:text-teal-400 transition-colors"
    >
      {children}
    </a>
  );
}
