import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';
import { blogPosts } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/services', '/contact', '/blog'].map((r) => ({
    url: `${siteConfig.url}${r}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: r === '' ? 1.0 : 0.8,
  }));

  const posts = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...posts];
}
