import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export function PageHeader({
  eyebrow,
  title,
  intro,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="grain relative overflow-hidden bg-ink text-white">
      <div className="mesh-bg absolute inset-0 animate-mesh-pan opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 blueprint opacity-30" aria-hidden="true" />
      <img
        src="/swirl.svg"
        alt=""
        className="animate-spin-slow pointer-events-none absolute -right-20 -top-16 h-[320px] w-[320px] opacity-20"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-[2px] bg-brand-gradient" aria-hidden="true" />

      <div className="container-rk relative py-16 sm:py-24">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1 label-mono text-[10px] text-slate-400">
              {crumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-1">
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-brand-300">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3 text-slate-600" />}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <span className="eyebrow text-brand-300">
            <span className="h-px w-8 bg-brand-gradient" />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 max-w-3xl text-[2.6rem] font-bold leading-[1.0] tracking-[-0.02em] sm:text-[3.75rem]">
          {title}
        </h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{intro}</p>}
      </div>
    </section>
  );
}
