'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { siteConfig, services } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // desktop flyout
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile accordion
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer + flyouts on route change
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const servicesActive = pathname.startsWith('/services');

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-lg border-b border-ink-800'
          : 'bg-transparent'
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" aria-label="Upward Physio home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {siteConfig.nav.map((item) => {
            // Services gets a flyout instead of a plain link
            if (item.href === '/services') {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href="/services"
                    className={cn(
                      'relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors',
                      servicesActive ? 'text-teal-400' : 'text-ink-200 hover:text-ink-50'
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={cn(
                        'transition-transform duration-200',
                        servicesOpen && 'rotate-180'
                      )}
                    />
                    {servicesActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-4 -bottom-1 h-0.5 bg-teal-400"
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                      >
                        <div className="w-72 overflow-hidden rounded-2xl border border-ink-800 bg-ink-950/95 backdrop-blur-lg shadow-2xl shadow-black/40 p-2">
                          {services.map((service) => {
                            const corporate = service.audience === 'corporate';
                            return (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="group flex flex-col gap-0.5 rounded-xl px-3 py-2.5 transition-colors hover:bg-ink-900"
                              >
                                <span className="flex items-center gap-2 text-sm font-semibold text-ink-50">
                                  {service.title}
                                  {corporate && (
                                    <span className="rounded-full border border-ember-500/30 bg-ember-500/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-ember-400">
                                      Orgs
                                    </span>
                                  )}
                                </span>
                                <span className="text-xs text-ink-400 leading-snug">
                                  {service.short}
                                </span>
                              </Link>
                            );
                          })}
                          <Link
                            href="/services"
                            className="mt-1 flex items-center justify-center rounded-xl border border-ink-800 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal-400 transition-colors hover:bg-ink-900"
                          >
                            View all services
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-colors',
                  isActive ? 'text-teal-400' : 'text-ink-200 hover:text-ink-50'
                )}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-4 -bottom-1 h-0.5 bg-teal-400"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link href="/contact">Book a Discovery Call</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-ink-50 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-ink-800 bg-ink-950/95 backdrop-blur-lg"
          >
            <div className="container py-6 flex flex-col gap-1">
              {siteConfig.nav.map((item) => {
                if (item.href === '/services') {
                  return (
                    <div key={item.href}>
                      <button
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className={cn(
                          'flex w-full items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors',
                          servicesActive
                            ? 'text-teal-400 bg-ink-900'
                            : 'text-ink-100 hover:bg-ink-900/60'
                        )}
                      >
                        Services
                        <ChevronDown
                          size={18}
                          className={cn(
                            'transition-transform duration-200',
                            mobileServicesOpen && 'rotate-180'
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-3 mt-1 flex flex-col gap-0.5 border-l border-ink-800 pl-3">
                              {services.map((service) => (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  className="px-4 py-2.5 rounded-lg text-sm text-ink-200 hover:text-teal-400 hover:bg-ink-900/60 transition-colors"
                                >
                                  {service.title}
                                </Link>
                              ))}
                              <Link
                                href="/services"
                                className="px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-[0.14em] text-teal-400 hover:bg-ink-900/60 transition-colors"
                              >
                                View all
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'px-4 py-3 rounded-lg text-base font-medium transition-colors',
                      pathname === item.href
                        ? 'text-teal-400 bg-ink-900'
                        : 'text-ink-100 hover:bg-ink-900/60'
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Button asChild className="mt-4">
                <Link href="/contact">Book a Discovery Call</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
