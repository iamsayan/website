import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles, tutorials, and thoughts on web development by Sayan Datta.",
};

const posts = [
  {
    slug: "optimizing-nextjs-app-router",
    title: "Optimizing Next.js App Router for Maximum Performance",
    excerpt:
      "A deep dive into caching strategies, server components, and dynamic rendering to achieve perfect Lighthouse scores.",
    date: "Oct 24, 2024",
    readTime: "6 min",
    tag: "Next.js",
  },
  {
    slug: "wordpress-headless-react",
    title: "Building a Headless WordPress Architecture with React",
    excerpt:
      "How to decouple your WordPress backend and serve content through a blazing fast Next.js frontend using GraphQL.",
    date: "Sep 12, 2024",
    readTime: "8 min",
    tag: "WordPress",
  },
  {
    slug: "modern-css-tailwind-v4",
    title: "Why Tailwind v4 Changes Everything We Know About CSS",
    excerpt:
      "Exploring the new engine, zero-config setup, and modern CSS features introduced in the latest version of Tailwind CSS.",
    date: "Aug 05, 2024",
    readTime: "5 min",
    tag: "CSS",
  },
  {
    slug: "docker-for-web-developers",
    title: "Docker for Web Developers: A Practical Guide",
    excerpt:
      "Stop saying 'it works on my machine'. Learn how to containerize your full-stack applications for consistent deployments.",
    date: "Jul 18, 2024",
    readTime: "10 min",
    tag: "DevOps",
  },
];

export default function BlogPage() {
  return (
    <div className="relative">
      {/* Horizontal lines pattern */}
      <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(0deg,var(--border)_0,var(--border)_1px,transparent_0,transparent_40px)] opacity-25 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 py-8 sm:py-12 md:py-20 relative z-10">
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary">
              Blog
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black mb-6 sm:mb-8 text-foreground tracking-tight leading-[1.05]">
            Writing &<br />
            <span className="gradient-text">thoughts.</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Sharing my learnings, tutorials, and experiences in web development,
            performance optimization, and software architecture.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {posts.map((post, i) => (
            <article
              key={i}
              className="group block rounded-2xl sm:rounded-3xl bg-card border border-border p-6 sm:p-8 md:p-10 transition-all duration-300 hover:border-primary/30 hover:-translate-y-0.5"
            >
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-bold text-muted-foreground mb-4 sm:mb-5">
                <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary">
                  {post.tag}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />{" "}
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                {post.excerpt}
              </p>

              <div className="flex items-center text-primary font-bold text-xs sm:text-sm gap-2">
                Read Article{" "}
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-muted-foreground text-xs sm:text-sm">
            More articles coming soon. Dynamic routing is set up at{" "}
            <code className="px-2 py-0.5 rounded-md bg-accent text-xs font-mono">
              /blog/[slug]
            </code>
          </p>
        </div>
      </div>
    </div>
  );
}
