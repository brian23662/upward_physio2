import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="min-h-[100svh] flex items-center justify-center relative overflow-hidden grain pt-32 pb-20">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="glow-orb h-[400px] w-[400px] bg-teal-500 left-1/4 top-1/4 opacity-20" />

      <div className="container relative text-center max-w-2xl">
        <div className="font-display text-[8rem] md:text-[12rem] font-bold leading-none headline-gradient">
          404
        </div>
        <h1 className="mt-4 font-display text-3xl md:text-4xl font-bold text-ink-50">
          This page took the day off.
        </h1>
        <p className="mt-5 text-ink-300 leading-relaxed">
          We can&apos;t find what you were looking for — but we can probably help
          with whatever you actually came here for.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              Back to Home
              <ArrowRight size={16} />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
