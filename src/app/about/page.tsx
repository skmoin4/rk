import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Building2, FileText, Boxes, Factory } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Media } from "@/components/Media";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceIcon } from "@/components/ServiceIcon";
import { company, services } from "@/data/company";
import { categories } from "@/data/products";

export const metadata: Metadata = {
  title: "About",
  description:
    "R K Air Duct is a Nashik-based fabricator and supplier of industrial air ducting and commercial kitchen equipment in galvanised iron and stainless steel.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const facts = [
    { icon: MapPin, label: "Based in", value: company.location.display },
    { icon: Building2, label: "Legal status", value: company.legalStatus },
    { icon: FileText, label: "GST registered", value: company.gstRegistered },
    { icon: Boxes, label: "HSN", value: company.hsn },
  ];

  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A Nashik fabricator for ducting and commercial kitchens"
        intro={company.intro}
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Profile */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container-rk grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-8 bg-brand/60" />
              Company profile
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              What R K Air Duct does
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">{company.description}</p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Working in galvanised iron and stainless steel, the business supplies round,
              rectangular, spiral and taper duct systems alongside kitchen exhaust hoods, storage
              racks and commercial kitchen equipment — and also offers kitchen chimney cleaning.
            </p>
            <Link href="/products" className="btn-dark mt-8">
              See the product range
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-card">
              <Media src="/about-signboard.svg" alt="R K Air Duct, Nashik (demo image)" ratio="4 / 3" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Facts strip */}
      <section className="bg-white py-14">
        <div className="container-rk">
          <Reveal stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <f.icon className="h-6 w-6 text-brand" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {f.label}
                </p>
                <p className="mt-1 font-display text-base font-semibold text-slate-900">
                  {f.value}
                </p>
              </div>
            ))}
          </Reveal>
          <p className="mt-6 text-xs text-slate-500">
            All figures above are drawn from the company&apos;s public business profile. No company
            history, certifications, client names or project counts are claimed.
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-24">
        <div className="absolute inset-0 blueprint opacity-50" aria-hidden="true" />
        <div className="container-rk relative">
          <SectionHeading
            eyebrow="Capabilities"
            tone="light"
            title="Fabrication, supply and service"
          />
          <Reveal stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <ServiceIcon name={s.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Product families */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-rk">
          <SectionHeading
            eyebrow="Product families"
            title="Everything we supply"
            intro="The catalogue spans industrial air movement and commercial kitchen fabrication."
          />
          <Reveal stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/products?category=${c.slug}`}
                className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition-colors hover:border-brand hover:bg-white"
              >
                <span className="flex items-center gap-3">
                  <Factory className="h-5 w-5 text-brand" />
                  <span className="text-sm font-semibold text-slate-900">{c.name}</span>
                </span>
                <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-brand" />
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900">
        <Reveal className="container-rk flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl text-2xl font-bold text-white sm:text-3xl">
            Work with a single supplier for ducting and kitchens.
          </h2>
          <Link href="/contact" className="btn-primary shrink-0">
            Start an enquiry
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
