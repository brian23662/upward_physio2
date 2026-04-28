import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { CTABanner } from '@/components/sections/cta-banner';
import { blogPosts } from '@/lib/blog-data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <article className="relative pt-32 pb-12 md:pt-40">
        <div className="container max-w-4xl">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-ink-400 hover:text-teal-400 transition-colors"
            >
              <ArrowLeft size={14} />
              All articles
            </Link>

            <div className="mt-8">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-teal-400">
                {post.category}
              </span>
              <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                {post.title}
              </h1>
              <div className="mt-6 flex items-center gap-4 text-sm text-ink-400">
                <span>{post.date}</span>
                <span className="h-1 w-1 rounded-full bg-ink-600" />
                <span className="flex items-center gap-1.5">
                  <Clock size={13} /> {post.readTime}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative aspect-[16/9] mt-12 overflow-hidden rounded-2xl border border-ink-700">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="prose-content mt-16 max-w-none text-lg leading-relaxed text-ink-200 space-y-6">
              <p className="text-xl text-ink-100 font-medium leading-relaxed">
                {post.excerpt}
              </p>
              {post.content
                .trim()
                .split('\n\n')
                .map((para, i) => (
                  <p key={i}>{para.trim()}</p>
                ))}
              <p className="text-ink-400 italic mt-12 pt-8 border-t border-ink-800">
                This is sample content — replace with full articles as your
                blog grows. Each post is structured to support SEO, OG tags, and
                fast page loads out of the box.
              </p>
            </div>
          </Reveal>
        </div>
      </article>

      <CTABanner />
    </>
  );
}
