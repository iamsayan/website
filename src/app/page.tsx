import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Database,
  Layout,
  Smartphone,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const skillGroups = [
  {
    category: "Frontend",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    barColor: "bg-blue-500",
    skills: [
      { name: "Next.js / React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 70 },
    ],
  },
  {
    category: "Backend",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    barColor: "bg-emerald-500",
    skills: [
      { name: "PHP / WordPress", level: 95 },
      { name: "Node.js", level: 80 },
      { name: "Laravel", level: 78 },
      { name: "Python", level: 65 },
    ],
  },
  {
    category: "DevOps & Data",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    barColor: "bg-orange-500",
    skills: [
      { name: "MySQL / PostgreSQL", level: 82 },
      { name: "REST API / GraphQL", level: 88 },
      { name: "Git / CI-CD", level: 85 },
      { name: "Docker / Linux", level: 75 },
    ],
  },
];

const techPills = [
  "JavaScript",
  "HTML5",
  "CSS3",
  "jQuery",
  "AJAX",
  "Bootstrap",
  "WooCommerce",
  "Gulp",
  "Webpack",
  "Redis",
  "Nginx",
  "Vercel",
];

const services = [
  {
    title: "Frontend Development",
    description:
      "Pixel-perfect, accessible, and blazing-fast interfaces with Next.js, React, and modern CSS.",
    icon: Layout,
  },
  {
    title: "Backend Architecture",
    description:
      "Scalable APIs, microservices, and robust database designs using Node.js, Laravel, and PostgreSQL.",
    icon: Database,
  },
  {
    title: "WordPress Engineering",
    description:
      "Custom plugins, performance-optimized themes, headless setups, and enterprise-grade solutions.",
    icon: Code2,
  },
  {
    title: "Mobile-First Design",
    description:
      "Fluid, responsive layouts that feel native on every device, from smartwatches to 4K displays.",
    icon: Smartphone,
  },
];

const stats = [
  { value: "7+", label: "Years", sublabel: "Experience" },
  { value: "50+", label: "Projects", sublabel: "Delivered" },
  { value: "20+", label: "Open Source", sublabel: "Repositories" },
  { value: "1M+", label: "Plugin", sublabel: "Downloads" },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-120 h-120 bg-pink-500/10 rounded-full blur-[128px] pointer-events-none" />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur-sm px-4 py-2 text-xs sm:text-sm font-medium text-muted-foreground mb-8 sm:mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Open to freelance opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-heading font-black tracking-tight leading-[1.08] mb-6 sm:mb-8">
              <span className="text-foreground">I build </span>
              <span className="gradient-text">digital experiences</span>
              <span className="text-foreground"> that matter.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-8 sm:mb-12 leading-relaxed">
              Hey, I&apos;m{" "}
              <strong className="text-foreground font-semibold">
                Sayan Datta
              </strong>{" "}
              — a Full Stack Developer & WordPress Expert from India. I build
              plugins, products, and performant web experiences.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link href="/projects">
                <Button
                  size="lg"
                  className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base rounded-2xl"
                >
                  View My Work <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base rounded-2xl"
                >
                  Let&apos;s Talk
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section className="border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-pink-500/5 pointer-events-none" />
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`py-8 sm:py-12 text-center ${i < stats.length - 1 ? "md:border-r md:border-border" : ""} ${i % 2 === 0 && i < stats.length - 1 ? "border-r border-border" : ""}`}
              >
                <p className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-foreground leading-none mb-1 sm:mb-2">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">
                  {stat.label} {stat.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-20 sm:py-28">
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary">
              Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-foreground mb-4 sm:mb-6 leading-tight">
            What I Do
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-12 sm:mb-16 leading-relaxed">
            Full-stack expertise spanning design, development, and deployment.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {services.map((service, i) => (
              <div
                key={i}
                className="group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-card border border-border hover:border-primary/20 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute bottom-3 right-4 sm:bottom-4 sm:right-6 text-7xl sm:text-8xl font-heading font-black text-foreground/3 leading-none pointer-events-none select-none">
                  0{i + 1}
                </span>
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-primary transition-colors duration-300">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SKILLS & TECHNOLOGIES ─── */}
      <section className="py-20 sm:py-28 border-t border-border relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] bg-size-[12px_12px] opacity-60 pointer-events-none" />

        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary">
              Expertise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-foreground mb-4 sm:mb-6">
            Skills & Technologies
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-12 sm:mb-16 leading-relaxed">
            My core competencies across the full stack — from frontend to
            infrastructure.
          </p>

          {/* 3-column categorized skill groups */}
          <div className="grid md:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl sm:rounded-3xl bg-card border border-border overflow-hidden"
              >
                {/* Category header */}
                <div className="p-5 sm:p-6 border-b border-border">
                  <div
                    className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg ${group.bgColor} mb-3`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${group.barColor}`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${group.color}`}
                    >
                      {group.category}
                    </span>
                  </div>
                </div>

                {/* Skill list */}
                <div className="p-5 sm:p-6 space-y-4 sm:space-y-5">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs font-bold text-muted-foreground tabular-nums">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-accent overflow-hidden">
                        <div
                          className={`h-full rounded-full ${group.barColor} transition-all duration-700`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Also proficient in — tech pills */}
          <div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 sm:mb-5">
              Also proficient in
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {techPills.map((tech) => (
                <span
                  key={tech}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-card border border-border text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ─── */}
      <section className="py-20 sm:py-28 border-t border-border">
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between mb-10 sm:mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary">
                  Portfolio
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-foreground">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-6 sm:mb-0">
            {[
              {
                name: "WP Last Modified Info",
                desc: "WordPress plugin to show last modified date with 20k+ active installs.",
                lang: "PHP / WordPress",
                num: "01",
              },,
              {
                name: "RevivePress",
                desc: "Republish and clone old posts with 7k+ active installs and a premium version.",
                lang: "PHP / WordPress",
                num: "03",
              },
            ].map((p) => (
              <div
                key={p.num}
                className="group relative rounded-2xl sm:rounded-3xl bg-card border border-border p-6 sm:p-8 hover:border-primary/20 transition-colors overflow-hidden"
              >
                <span className="absolute bottom-3 right-4 text-6xl sm:text-7xl font-heading font-black text-foreground/3 leading-none pointer-events-none select-none">
                  {p.num}
                </span>
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-bold mb-4">
                    {p.lang}
                  </span>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-2 sm:mb-3">
                    {p.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/projects"
            className="sm:hidden inline-flex items-center gap-1 text-sm font-bold text-primary mt-2"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ─── CURRENTLY ─── */}
      <section className="border-y border-border">
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="py-8 sm:py-12 md:pr-8">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Currently at
              </p>
              <p className="text-lg sm:text-xl font-heading font-bold text-foreground">
                TeamUpdraft
              </p>
              <p className="text-sm text-muted-foreground">
                Developer · UK (Remote)
              </p>
            </div>
            <div className="py-8 sm:py-12 md:px-8">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Open Source
              </p>
              <p className="text-lg sm:text-xl font-heading font-bold text-foreground">
                WordPress Core
              </p>
              <p className="text-sm text-muted-foreground">
                Contributor since 2018
              </p>
            </div>
            <div className="py-8 sm:py-12 md:pl-8">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Education
              </p>
              <p className="text-lg sm:text-xl font-heading font-bold text-foreground">
                MSc Info Security
              </p>
              <p className="text-sm text-muted-foreground">IGNOU · 1st Class</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 sm:py-28">
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-4xl border border-border">
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-card to-pink-500/10 pointer-events-none" />
            <div className="absolute -top-16 -left-16 w-48 h-48 border border-primary/10 rounded-full pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 border border-primary/10 rounded-full pointer-events-none" />

            <div className="relative z-10 grid md:grid-cols-2 items-center">
              <div className="p-8 sm:p-12 md:p-16">
                <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest mb-4 block">
                  Ready to start?
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-foreground leading-tight">
                  Let&apos;s build something incredible.
                </h2>
              </div>
              <div className="p-8 sm:p-12 md:p-16 md:border-l md:border-border">
                <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                  Whether it&apos;s a cutting-edge web app, a WordPress plugin,
                  or an open source contribution — I&apos;m ready to make it
                  happen.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base rounded-2xl"
                    >
                      Start a Conversation{" "}
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                  </Link>
                  <Link href="/projects">
                    <Button
                      variant="outline"
                      size="lg"
                      className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base rounded-2xl"
                    >
                      View Projects
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
