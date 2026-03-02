import { Github, Star, GitFork, ExternalLink } from "lucide-react";

export interface ProjectType {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
}

export function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <div className="group relative border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl p-6 transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-heading font-semibold text-white group-hover:text-primary transition-colors line-clamp-1">
          {project.name}
        </h3>
        <div className="flex gap-2">
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors"
              title="View live"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-white transition-colors"
            title="View source"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>

      <p className="text-muted-foreground text-sm line-clamp-3 mb-6 grow">
        {project.description || "No description provided."}
      </p>

      <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mt-auto">
        {project.language && (
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
            {project.language}
          </span>
        )}
        <span className="flex items-center gap-1.5">
          <Star className="w-4 h-4" />
          {project.stargazers_count}
        </span>
        <span className="flex items-center gap-1.5">
          <GitFork className="w-4 h-4" />
          {project.forks_count}
        </span>
      </div>
    </div>
  );
}
