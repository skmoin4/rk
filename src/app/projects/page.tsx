import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Info } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/showcase";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Representative project types delivered by RK Air Duct — ducting, kitchen ventilation, air distribution and commercial kitchen fit-outs.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Project showcase"
        title="Projects & installations"
        intro="A look at the kind of ducting, ventilation and commercial kitchen work the business is set up to deliver."
        crumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />

      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="container-rk">
          <Reveal className="mb-10 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
            <p>
              These are <strong className="font-semibold text-slate-800">representative</strong> project
              types shown for the demo, using the company&apos;s real product categories. Replace them
              with real, photographed projects in{" "}
              <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">src/data/showcase.ts</code>.
            </p>
          </Reveal>

          <Reveal stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <div key={p.slug} id={p.slug} className="scroll-mt-28">
                <ProjectCard project={p} />
              </div>
            ))}
          </Reveal>

          {/* Scope detail list */}
          <Reveal className="mt-16 rounded-2xl border border-slate-200 bg-white p-7 sm:p-10">
            <h2 className="font-display text-2xl font-bold text-slate-900">What a typical project includes</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Every job is scoped to the site. A common engagement runs through fabrication, supply and
              ongoing service.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Site airflow & layout review",
                "GI / SS / aluminium fabrication",
                "Round, rectangular & spiral ducts",
                "Exhaust hoods, blowers & grilles",
                "Volume control & air balancing",
                "Supply & chimney cleaning service",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-slate-800">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-leaf/15">
                    <Check className="h-3 w-3 text-leaf-600" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-primary mt-9">
              Discuss your project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
