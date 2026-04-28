import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Clock } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { blogPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Blog & Resources',
  description:
    'Insights on physical therapy, performance training, injury prevention, and workplace wellness from a licensed PT.',
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 overflow-hidden grain">
        <div className="absolute inset-0 -z-10 grid-bg opacity-30" />

        <div className="container relative">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="h-px w-8 bg-teal-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-400">
                  Resources
                </span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
                Field notes from the <span className="text-teal-400 italic">practice.</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl text-ink-300 leading-relaxed max-w-2xl">
                Practical, evidence-informed thinking on rehab, performance, and
                building a body that lasts.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured */}
      <section className="section bg-ink-950 border-t border-ink-800 pb-12">
        <div className="container">
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid gap-8 lg:grid-cols-2 lg:gap-12 rounded-2xl border border-ink-800 bg-ink-900/30 p-6 md:p-10 hover:border-teal-400/40 transition-colors"
            >
              <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden rounded-xl">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-teal-400">
                  Featured · {featured.category}
                </span>
                <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink-50 leading-tight group-hover:text-teal-400 transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-5 text-ink-300 leading-relaxed">
                  {featured.excerpt}
                </p>
                <div className="mt-8 flex items-center gap-4 text-sm text-ink-400">
                  <span>{featured.date}</span>
                  <span className="h-1 w-1 rounded-full bg-ink-600" />
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} /> {featured.readTime}
                  </span>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-teal-400 font-semibold text-sm">
                  Read article
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Rest of posts */}
      <section className="bg-ink-950 pb-24">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((post, idx) => (
              <Reveal key={post.slug} delay={idx * 0.08}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full rounded-2xl border border-ink-800 bg-ink-900/30 overflow-hidden hover:border-teal-400/40 transition-colors"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-teal-400">
                      {post.category}
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-bold text-ink-50 leading-tight group-hover:text-teal-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-ink-300 text-sm leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 pt-5 border-t border-ink-800 flex items-center justify-between text-xs text-ink-400">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
