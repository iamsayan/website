import { Metadata } from "next";
import {
  MapPin,
  Briefcase,
  Award,
  GraduationCap,
  Terminal,
  Laptop,
  Palette,
  Sparkles,
  Heart,
  Cpu,
  Monitor,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Sayan Datta — Full Stack Developer, WordPress Expert, and Open Source contributor from India with 7+ years of experience.",
  alternates: { canonical: "/about-me" },
  keywords: [
    "Sayan Datta",
    "About Sayan Datta",
    "Full Stack Developer India",
    "WordPress Expert",
    "Software Engineer",
  ],
  openGraph: {
    url: "/about-me",
  },
};

const timeline = [
  {
    role: "Senior WordPress Developer",
    company: "TeamUpdraft",
    period: "Aug 2025 - Present",
    location: "United Kingdom (Remote)",
    description:
      "Building UpdraftCentral, a powerful remote WordPress site management platform for centrally controlling and maintaining multiple WordPress websites — backups, updates, content management, and streamlined workflows.",
    highlights: ["WordPress", "jQuery", "PHP", "REST API"],
  },
  {
    role: "Full Stack Developer",
    company: "InstaWP Inc.",
    period: "Jul 2024 - Jul 2025",
    location: "Wilmington, USA (Remote)",
    description:
      "Built Pay Per User model, Site Management features, Connect Helpers Composer package, WaaS Integration plugin, Push Migration System, and CLI package for remote WordPress management.",
    highlights: ["PHP", "Laravel", "WordPress", "Composer", "REST API"],
  },
  {
    role: "Senior WordPress Developer",
    company: "InstaWP Inc.",
    period: "Jul 2023 - Jun 2024",
    location: "Wilmington, USA (Remote)",
    description:
      "Developed site management and connect features including Uptime monitoring, Reports, Activity Logs, Config Manager, Vulnerability and Performance Scanner in WordPress plugin and Laravel app.",
    highlights: ["WordPress", "Postman API", "Laravel", "PHP"],
  },
  {
    role: "Senior Software Engineer",
    company: "ExpressTech Systems",
    period: "May 2021 - Jun 2023",
    location: "",
    description:
      "Developed custom Gutenberg blocks for Gutena product suite. Maintained Responsive Menu, Projectopia, Quiz and Survey Master. Modernized products from monolithic to modern architecture.",
    highlights: ["Gutenberg", "React", "PHP", "Product Dev"],
  },
  {
    role: "Independent Product Developer",
    company: "Skynix Web Studio",
    period: "Jul 2020 - Apr 2021",
    location: "",
    description:
      "Designed and developed custom tools and plugins for WordPress. Focused on performance, usability, and scalable architecture.",
    highlights: ["WordPress", "PHP", "Open Source"],
  },
  {
    role: "Lead WordPress Developer",
    company: "BTN Infosolution",
    period: "Mar 2019 - Jun 2020",
    location: "",
    description:
      "Developed full-stack websites using PHP, JavaScript, and WordPress. Built custom themes and maintained corporate and client websites.",
    highlights: ["PHP", "WordPress", "Elementor", "JavaScript"],
  },
];

const volunteering = [
  {
    role: "Volunteer Developer",
    org: "Jagadhatri Online",
    period: "Aug 2020 - Present",
    description:
      "Built the main website with Next.js, managing WooCommerce shop and event features.",
  },
  {
    role: "Core / Plugin Contributor",
    org: "WordPress.org",
    period: "Jul 2018 - Present",
    description: "Active contributor to WordPress core and plugin ecosystem.",
  },
];

const tools = [
  {
    category: "Hardware",
    icon: Laptop,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    items: [
      { name: "Windows PC", detail: "Main workstation" },
      { name: "Dell UltraSharp 4K", detail: "Primary display" },
      { name: "Mechanical Keyboard", detail: "Cherry MX Brown" },
    ],
  },
  {
    category: "Development",
    icon: Terminal,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    items: [
      { name: "VS Code / Cursor", detail: "Code editors" },
      { name: "Windows Terminal", detail: "ZSH + Oh My Zsh" },
      { name: "Git + GitHub", detail: "Version control" },
      { name: "Docker Desktop", detail: "Containerization" },
    ],
  },
  {
    category: "Design",
    icon: Palette,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    items: [
      { name: "Figma", detail: "UI/UX design" },
      { name: "Adobe XD", detail: "Prototyping" },
      { name: "Pen & Paper", detail: "Brainstorming" },
    ],
  },
  {
    category: "Infrastructure",
    icon: Cpu,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    items: [
      { name: "Vercel", detail: "Frontend hosting" },
      { name: "DigitalOcean", detail: "VPS servers" },
      { name: "Cloudflare", detail: "DNS & CDN" },
    ],
  },
];

const interests = [
  "🎵 Music",
  "📚 Reading",
  "🌍 Travel",
  "🎮 Gaming",
  "☕ Coffee",
  "� Mindfulness",
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Cross-dot pattern bg */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-size-[24px_24px] opacity-30 pointer-events-none" />
      {/* Decorative ring */}
      <div className="absolute top-64 -right-20 w-72 h-72 border border-primary/10 rounded-full pointer-events-none hidden md:block" />
      <div className="absolute top-72 -right-12 w-48 h-48 border border-primary/5 rounded-full pointer-events-none hidden md:block" />

      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 py-8 sm:py-12 md:py-20">
        {/* ─── HEADER ─── */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary">
              About Me
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black mb-6 sm:mb-8 text-foreground tracking-tight leading-[1.05]">
            The person behind
            <br className="hidden sm:block" /> the{" "}
            <span className="gradient-text">code.</span>
          </h1>
        </div>

        {/* ─── BIO ─── */}
        <div className="mb-16 sm:mb-24">
          <p className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-foreground leading-snug mb-8 sm:mb-10 max-w-3xl">
            I&apos;m Sayan — a Full Stack Developer & WordPress expert who turns
            ideas into performant, scalable web experiences.
          </p>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              With 7+ years of experience in WordPress development and modern
              web technologies, I specialize in building custom plugins,
              Gutenberg blocks, and full-stack applications. My plugins have
              been downloaded over a million times.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              I&apos;m proficient in PHP, JavaScript, Next.js, React, Laravel,
              and MySQL. I care deeply about performance, accessibility, and
              developer experience — and I&apos;m an active contributor to the
              WordPress open source ecosystem.
            </p>
          </div>
        </div>

        {/* ─── QUICK FACTS ─── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-14">
          {[
            {
              icon: MapPin,
              label: "West Bengal, India",
              color: "text-blue-500",
              bg: "bg-blue-500/10",
            },
            {
              icon: Briefcase,
              label: "Available for Freelance",
              color: "text-emerald-500",
              bg: "bg-emerald-500/10",
            },
            {
              icon: Award,
              label: "WP Core Contributor",
              color: "text-orange-500",
              bg: "bg-orange-500/10",
            },
            {
              icon: GraduationCap,
              label: "MSc Information Security",
              color: "text-pink-500",
              bg: "bg-pink-500/10",
            },
          ].map((fact, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-card border border-border"
            >
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl ${fact.bg} flex items-center justify-center mb-3 sm:mb-4`}
              >
                <fact.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${fact.color}`} />
              </div>
              <span className="font-semibold text-sm sm:text-[15px] text-foreground leading-tight block">
                {fact.label}
              </span>
            </div>
          ))}
        </div>

        {/* ─── OUTSIDE OF CODE ─── */}
        <div className="mb-20 sm:mb-28">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 sm:mb-5 flex items-center gap-2">
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 fill-red-500" />{" "}
            Outside of Code
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {interests.map((interest, i) => (
              <span
                key={i}
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-card border border-border text-sm sm:text-base font-medium text-foreground hover:border-primary/20 transition-colors"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* ─── TOOLS & SETUP ─── */}
        <div className="mb-20 sm:mb-28 pt-12 sm:pt-16 border-t border-border relative">
          <div className="absolute top-0 left-0 w-24 h-px bg-linear-to-r from-primary to-transparent" />

          <div className="flex items-center gap-3 mb-4">
            <Monitor className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary">
              My Setup
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-foreground mb-4 sm:mb-6">
            Tools I Use Daily
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-12 sm:mb-16 leading-relaxed">
            The hardware, software, and services that power my workflow.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {tools.map((group, i) => (
              <div
                key={i}
                className="rounded-2xl sm:rounded-3xl bg-card border border-border p-6 sm:p-8 hover:border-primary/20 transition-colors relative overflow-hidden group"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${group.bgColor} flex items-center justify-center`}
                  >
                    <group.icon
                      className={`w-5 h-5 sm:w-6 sm:h-6 ${group.color}`}
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground">
                    {group.category}
                  </h3>
                </div>
                <div className="space-y-1">
                  {group.items.map((item, j) => (
                    <div
                      key={j}
                      className="flex items-center justify-between gap-3 py-1.5"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-sm sm:text-base font-medium text-foreground">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm text-muted-foreground font-medium hidden sm:block">
                        {item.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── EXPERIENCE TIMELINE ─── */}
        <div className="mb-20 sm:mb-28 pt-12 sm:pt-16 border-t border-border relative">
          <div className="absolute top-0 left-0 w-24 h-px bg-linear-to-r from-primary to-transparent" />

          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary">
              Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-foreground mb-12 sm:mb-16">
            Where I&apos;ve Worked
          </h2>

          {/* Timeline with left accent */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div key={i} className="relative md:pl-10 group">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 w-2.5 h-2.5 rounded-full bg-primary -translate-x-1.25 hidden md:block ring-4 ring-background" />

                  <div className="py-6 sm:py-8 border-b border-border last:border-0">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 mb-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground">
                          {item.role}
                        </h3>
                        <p className="text-primary font-semibold text-sm sm:text-base">
                          {item.company}
                          {item.location ? ` · ${item.location}` : ""}
                        </p>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-muted-foreground bg-accent px-3 py-1 rounded-full whitespace-nowrap w-fit shrink-0">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {item.highlights.map((tag, j) => (
                        <span
                          key={j}
                          className="px-2.5 py-1 rounded-md bg-card border border-border text-xs font-bold text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── VOLUNTEERING ─── */}
        <div className="pt-12 sm:pt-16 border-t border-border mb-8 sm:mb-12 relative">
          <div className="absolute top-0 left-0 w-24 h-px bg-linear-to-r from-primary to-transparent" />

          <div className="flex items-center gap-3 mb-4">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary">
              Community
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-foreground mb-8 sm:mb-10">
            Volunteering & Contributions
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {volunteering.map((vol, i) => (
              <div
                key={i}
                className="rounded-xl sm:rounded-2xl bg-card border border-border p-5 sm:p-6 hover:border-primary/20 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-base sm:text-lg font-heading font-bold text-foreground">
                    {vol.role}
                  </h3>
                  <span className="text-xs font-bold text-muted-foreground whitespace-nowrap shrink-0">
                    {vol.period}
                  </span>
                </div>
                <p className="text-sm font-semibold text-primary mb-2">
                  {vol.org}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {vol.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
