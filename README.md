# Upward Physio — Next.js 15 Website

A production-ready, conversion-focused website for **Upward Physio** — concierge cash-pay physical therapy.

Built with **Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS · Framer Motion · React Hook Form + Zod**.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# 3. Build for production
npm run build && npm start
```

## Deploy to Vercel

```bash
npx vercel
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new). The site is Vercel-ready out of the box — no environment variables required for the basic site.

---

## Project Structure

```
upward-physio/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata, navbar/footer
│   ├── page.tsx                # Home page
│   ├── globals.css             # Brand tokens, grain texture, utilities
│   ├── not-found.tsx           # 404 page
│   ├── robots.ts               # SEO robots.txt
│   ├── sitemap.ts              # Dynamic sitemap
│   ├── about/page.tsx          # About page (full bio + journey + philosophy)
│   ├── services/page.tsx       # Services breakdown (individual + corporate)
│   ├── contact/page.tsx        # Lead-gen form + contact info
│   └── blog/
│       ├── page.tsx            # Blog index
│       └── [slug]/page.tsx     # Dynamic blog post
├── components/
│   ├── logo.tsx                # Inline SVG logo
│   ├── reveal.tsx              # Scroll-reveal wrapper (framer-motion)
│   ├── section-heading.tsx     # Reusable section heading
│   ├── layout/                 # Navbar, footer
│   ├── sections/               # Page-level sections (hero, testimonials, etc.)
│   └── ui/                     # shadcn-style primitives (button, input, etc.)
├── lib/
│   ├── utils.ts                # cn() helper
│   ├── site-config.ts          # Site-wide config (nav, services, contact)
│   └── blog-data.ts            # Blog posts content
└── public/
```

---

## Customization Guide

### Brand colors
Edit `tailwind.config.ts` — the palette uses `ink` (deep navy), `teal` (primary), `ember` (accent).

### Site-wide content (nav, services, contact info)
Edit `lib/site-config.ts`. Changing service titles or copy here updates them across the entire site.

### Blog posts
Add new posts to `lib/blog-data.ts`. The dynamic route `/blog/[slug]` and sitemap will pick them up automatically.

### Images
All hero/section images currently use Unsplash placeholders. Search the codebase for `images.unsplash.com` to find and replace them. Each image has descriptive `alt` text already in place.

### Contact form
The form in `components/sections/contact-form.tsx` currently logs submissions to the console. To wire it up:

1. **Resend** (recommended): Add a server action that calls Resend's API
2. **Formspree / Web3Forms**: Replace `onSubmit` with a `fetch` to your endpoint
3. **Sanity / your CMS**: POST to your CMS API

Look for the `// TODO: Wire this to your backend` comment.

### Logo
Edit `components/logo.tsx`. Inline SVG, fully customizable.

---

## SEO Built In

- ✅ Per-page metadata (title, description, OG tags)
- ✅ Sitemap (`/sitemap.xml`)
- ✅ Robots.txt (`/robots.txt`)
- ✅ Semantic HTML & accessibility-first markup
- ✅ Image optimization via `next/image`
- ✅ Static generation for blog posts

---

## Design System

- **Display font**: Playfair Display (editorial, athletic, premium)
- **Body font**: Inter (clean, performant)
- **Animations**: Framer Motion + Tailwind keyframes
- **Color tone**: Dark mode dominant — deep navy (`ink-950`) with teal/cyan primary and ember orange accent

Subtle grain textures, glowing orbs, and grid backgrounds add depth without overwhelming.

---

## Notes for Future Development

- The `select` element in the contact form is a native control — for richer UX, swap in a Radix-based `<Select>` (the dependency is already in `package.json`).
- For analytics, drop `@vercel/analytics` into the root layout.
- Image sizes are unoptimized for `<Image fill>` — add `sizes` prop for production for slightly faster LCP.

Built to ship. Built to convert.
