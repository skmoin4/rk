import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { Media } from "./Media";
import type { Project } from "@/data/showcase";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects#${project.slug}`}
      className="card spotlight ring-gradient group relative flex flex-col overflow-hidden hover:-translate-y-1.5 hover:shadow-card-hover"
    >
      <div className="relative overflow-hidden">
        <Media
          src={project.image}
          alt={`${project.title} (demo image)`}
          ratio="16 / 10"
          imgClassName="transition-transform duration-700 ease-premium group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand-gradient px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <MapPin className="h-3.5 w-3.5 text-brand" />
          {project.location}
        </div>
        <h3 className="mt-2 font-display text-lg font-semibold text-slate-900 group-hover:text-brand">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.scope.slice(0, 3).map((s) => (
            <span
              key={s}
              className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600"
            >
              {s}
            </span>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 transition-colors group-hover:text-brand">
          View project
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
