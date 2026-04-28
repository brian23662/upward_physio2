'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
              {siteConfig.nav.map((item) => (
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
              ))}
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
