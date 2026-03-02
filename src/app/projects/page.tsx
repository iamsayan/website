import { Metadata } from "next";
import { customProjects, CustomProject } from "@/data/custom-projects";
import { ProjectType as GitHubProjectType } from "@/components/ProjectCard";
import {
  ExternalLink,
  Star,
  GitFork,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore featured projects, WordPress plugins, SaaS products, and open source repositories by Sayan Datta.",
  alternates: { canonical: "/projects" },
  keywords: [
    "Sayan Datta projects",
    "WordPress plugins",
    "Open source repositories",
    "WP Last Modified Info",
    "RevivePress",
    "Full Stack Developer portfolio",
  ],
  openGraph: {
    url: "/projects",
  },
};

async function getGitHubProjects(): Promise<GitHubProjectType[]> {
  const res = await fetch(
    "https://api.github.com/users/iamsayan/repos?per_page=100&sort=pushed",
    { next: { revalidate: 3600 } },
  );
  if (!res.ok) return [];
  const repos: GitHubProjectType[] = await res.json();
  return repos
    .filter((repo) => !repo.fork && repo.name !== "iamsayan")
    .sort((a, b) => b.stargazers_count - a.stargazers_count);
}

function CustomCard({
  project,
  index,
}: {
  project: CustomProject;
  index: number;
}) {
  return (
    <div className="group relative rounded-2xl sm:rounded-3xl bg-card border border-border p-6 sm:p-8 hover:border-primary/20 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Number watermark */}
      <span className="absolute bottom-3 right-4 sm:bottom-4 sm:right-6 text-6xl sm:text-7xl font-heading font-black text-foreground/3 leading-none pointer-events-none select-none">
        0{index + 1}
      </span>

      <div className="relative z-10 flex flex-col grow">
        <div className="flex items-start justify-between gap-3 mb-4 sm:mb-5">
          <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-bold">
            {project.language}
          </span>
          <div className="flex gap-1.5">
            {project.html_url !== "#" && (
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-all"
                title="Source"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.homepage && (
              <a
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-accent text-muted-foreground hover:text-primary transition-all"
                title="Live"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
        <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-2 sm:mb-3">
          {project.name}
        </h3>
        <p className="text-muted-foreground text-sm sm:text-[15px] leading-relaxed grow">
          {project.description}
        </p>
      </div>
    </div>
  );
}

function RepoCard({ project }: { project: GitHubProjectType }) {
  return (
    <div className="group rounded-xl sm:rounded-2xl bg-card border border-border p-5 sm:p-6 hover:border-primary/20 transition-colors flex flex-col">
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <h3 className="text-sm sm:text-base font-heading font-bold text-foreground group-hover:text-primary transition-colors truncate pr-2">
          {project.name}
        </h3>
        <div className="flex gap-1 shrink-0">
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md hover:bg-accent text-muted-foreground hover:text-primary transition-all"
              title="Live"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-all"
            title="Source"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
      <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2 grow mb-4 leading-relaxed">
        {project.description || "No description provided."}
      </p>
      <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground mt-auto">
        {project.language && (
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
            {project.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Star className="w-3 h-3" /> {project.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <GitFork className="w-3 h-3" /> {project.forks_count}
        </span>
      </div>
    </div>
  );
}

export default async function ProjectsPage() {
  const githubProjects = await getGitHubProjects();

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(135deg,var(--border)_0,var(--border)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] opacity-20 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 py-8 sm:py-12 md:py-20 relative z-10">
        {/* Header — keep as user likes */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary">
              Portfolio
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black mb-6 sm:mb-8 text-foreground tracking-tight leading-[1.05]">
            Things I&apos;ve
            <br />
            <span className="gradient-text">built.</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            A mix of WordPress plugins, SaaS products, and open source
            contributions.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-20 sm:mb-28">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-8 sm:mb-10">
            Featured Projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {customProjects.map((p, i) => (
              <CustomCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </section>

        {/* Open Source */}
        <section className="pt-12 sm:pt-16 border-t border-border relative">
          <div className="absolute top-0 left-0 w-24 h-px bg-linear-to-r from-primary to-transparent" />

          <div className="flex items-center justify-between mb-8 sm:mb-10">
            <div className="flex items-center gap-3">
              <GithubIcon className="w-5 h-5 text-foreground" />
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                Open Source
              </h2>
            </div>
            <Link
              href="https://github.com/iamsayan"
              target="_blank"
              className="text-xs sm:text-sm font-bold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              View all on GitHub <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {githubProjects.length === 0 ? (
            <div className="text-center py-14 sm:py-20 rounded-2xl bg-card border border-border">
              <p className="text-muted-foreground text-sm sm:text-base">
                Unable to fetch repositories from GitHub.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {githubProjects.map((p) => (
                <RepoCard key={p.id} project={p} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
