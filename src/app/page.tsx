import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Send, Factory, Wrench } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { Media } from "@/components/Media";
import { ServiceIcon } from "@/components/ServiceIcon";
import { company, whyChooseUs, services, clientSectors } from "@/data/company";
import { categories, featuredProducts, categoryCount } from "@/data/products";
import { projects } from "@/data/showcase";
import { ProjectCard } from "@/components/ProjectCard";
import { Testimonials } from "@/components/Testimonials";
import { CountUp } from "@/components/CountUp";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Category marquee */}
      <div className="border-y border-slate-200 bg-white py-5">
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
            {[...categories, ...categories].map((c, i) => (
              <span key={i} className="flex items-center gap-10 text-sm font-semibold text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient" />
                {c.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-28">
        <div className="absolute right-0 top-0 h-80 w-80 bg-dot-grid opacity-70" aria-hidden="true" />
        <div className="container-rk relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-8 bg-brand-gradient" />
              Who we are
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-[1.1] text-slate-900 sm:text-4xl">
              Ducting and commercial kitchen fabrication,{" "}
              <span className="text-gradient">built around your site.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">{company.description}</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "GI, stainless steel & aluminium",
                "Round, rectangular & spiral ducts",
                "Exhaust, blowers, grilles & dampers",
                "Supply plus chimney cleaning",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-800">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-leaf/15">
                    <Check className="h-3 w-3 text-leaf-600" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-dark mt-8">
              About the company
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-card">
              <Media src="/about-facility.svg" alt="RK Air Duct fabrication facility (demo image)" ratio="4 / 3" />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 pr-6 shadow-card sm:flex">
              <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-lg bg-white ring-1 ring-black/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.webp" alt="" className="h-10 w-10 object-contain" />
              </span>
              <div>
                <p className="font-display text-sm font-bold text-slate-900">GST Registered</p>
                <p className="mt-0.5 text-xs text-slate-500">Since 2019 · {company.gst}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-rk">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="What we make"
              index="/ 01"
              title="A full range, from duct runs to kitchen lines"
              intro="Nine product families covering industrial air movement and commercial kitchen fabrication."
            />
            <Reveal delay={0.1}>
              <Link
                href="/products"
                className="group inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-slate-900 hover:text-brand"
              >
                View all products
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>

          <Reveal stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products?category=${cat.slug}`}
                className="card spotlight ring-gradient group relative flex flex-col overflow-hidden hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <div className="relative">
                  <Media
                    src={cat.image}
                    alt={`${cat.name} (demo image)`}
                    ratio="16 / 10"
                    imgClassName="transition-transform duration-700 ease-premium group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-slate-700 backdrop-blur-sm">
                    {categoryCount(cat.slug)} {categoryCount(cat.slug) === 1 ? "item" : "items"}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-semibold text-slate-900 group-hover:text-brand">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{cat.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand opacity-0 transition-opacity group-hover:opacity-100">
                    Browse <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="container-rk">
          <SectionHeading
            eyebrow="Featured"
            index="/ 02"
            title="Selected products"
            intro="A cross-section of the catalogue — explore the full range for every item."
          />
          <Reveal stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* Stats band */}
      <section className="relative overflow-hidden bg-navy-900 py-14 text-white">
        <div className="absolute inset-0 blueprint opacity-30" aria-hidden="true" />
        <Reveal stagger className="container-rk relative grid grid-cols-2 gap-8 lg:grid-cols-4">
          {[
            { v: 18, suffix: "+", label: "Products supplied" },
            { v: 9, suffix: "", label: "Product categories" },
            { v: 3, suffix: "", label: "Fabrication materials" },
            { v: 11, suffix: " yrs", label: "On IndiaMART" },
          ].map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="font-display text-4xl font-bold sm:text-5xl">
                <span className="text-gradient">
                  <CountUp end={s.v} suffix={s.suffix} />
                </span>
              </p>
              <p className="mt-2 text-sm text-slate-400">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Capabilities / services */}
      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div className="absolute inset-0 blueprint opacity-40" aria-hidden="true" />
        <img
          src="/swirl.svg"
          alt=""
          className="animate-spin-slow pointer-events-none absolute -bottom-40 -left-32 h-[480px] w-[480px] opacity-20"
          aria-hidden="true"
        />
        <div className="container-rk relative">
          <SectionHeading
            eyebrow="Capabilities"
            index="/ 03"
            tone="light"
            title="What we do"
            intro="Fabrication, supply and service across air movement and commercial kitchens."
          />
          <Reveal stagger className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="group bg-ink p-7 transition-colors hover:bg-navy-900">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-brand-300 ring-1 ring-white/10 transition-all group-hover:bg-brand-gradient group-hover:text-white group-hover:ring-transparent">
                  <ServiceIcon name={s.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-rk">
          <SectionHeading
            align="center"
            eyebrow="How we work"
            index="/ 04"
            title="From requirement to running system"
            intro="A simple, honest path — tell us what you need and we fabricate and supply it to suit."
          />
          <Reveal stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { icon: Send, step: "01", title: "Share your requirement", body: "Send your site details, duct type and sizes — or just describe the problem you need solved." },
              { icon: Factory, step: "02", title: "We fabricate to spec", body: "Ducts, hoods, grilles, dampers and equipment are made in GI, stainless steel or aluminium to suit." },
              { icon: Wrench, step: "03", title: "Supply & service", body: "We supply the finished system and keep it running with kitchen chimney cleaning." },
            ].map((s) => (
              <div key={s.step} className="relative rounded-2xl border border-slate-200 bg-slate-50 p-7">
                <span className="absolute right-6 top-5 font-display text-4xl font-bold text-slate-200">
                  {s.step}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-[0_8px_20px_-8px_rgba(19,136,198,0.6)]">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Projects preview */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="container-rk">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Project showcase"
              index="/ 05"
              title="The kind of work we deliver"
              intro="Representative project types across ducting, kitchen ventilation and air distribution."
            />
            <Reveal delay={0.1}>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-slate-900 hover:text-brand"
              >
                View all projects
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
          <Reveal stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="container-rk grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="Why RK Air Duct"
            index="/ 06"
            title="A single supplier for ducting and kitchen fabrication"
            intro="Straightforward reasons to work with us — each grounded in what the business actually does."
          />
          <Reveal stagger className="grid gap-5 sm:grid-cols-2">
            {whyChooseUs.map((item, i) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-card">
                <span className="font-display text-sm font-bold text-gradient">0{i + 1}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Clients / sectors served */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-rk">
          <SectionHeading
            align="center"
            eyebrow="Who we work with"
            index="/ 07"
            title="Trusted across these sectors"
            intro="RK Air Duct's ducting and kitchen fabrication is built for the industries that depend on steady airflow and clean kitchens."
          />
          <Reveal stagger className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {clientSectors.map((sector) => (
              <div
                key={sector.name}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition-all hover:-translate-y-1 hover:border-transparent hover:bg-white hover:shadow-card"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white text-slate-400 ring-1 ring-slate-200 transition-all group-hover:bg-brand-gradient group-hover:text-white group-hover:ring-transparent">
                  <ServiceIcon name={sector.icon} className="h-6 w-6" />
                </span>
                <p className="text-xs font-semibold leading-snug text-slate-700">{sector.name}</p>
              </div>
            ))}
          </Reveal>
          <p className="mt-8 text-center text-xs text-slate-400">
            Representative sectors shown for the demo — to be replaced with real client logos.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div className="absolute inset-0 blueprint opacity-40" aria-hidden="true" />
        <img
          src="/swirl.svg"
          alt=""
          className="animate-spin-slow pointer-events-none absolute -right-32 top-1/4 h-[420px] w-[420px] opacity-20"
          aria-hidden="true"
        />
        <div className="container-rk relative">
          <SectionHeading
            align="center"
            eyebrow="What clients say"
            index="/ 08"
            tone="light"
            title="Trusted for ducting and kitchen fabrication"
            intro="A few words on the kind of results we aim for on every job."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <Reveal>
              <Testimonials />
            </Reveal>
            <p className="mt-6 text-center text-xs text-slate-500">
              Sample testimonials shown for the demo — to be replaced with real customer feedback.
            </p>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-navy-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/cta-bg.svg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/92 to-navy-900/60" />
        <div className="absolute inset-x-0 top-0 h-[3px] bg-brand-gradient" aria-hidden="true" />
        <Reveal className="container-rk relative flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Have a ducting or kitchen requirement?
            </h2>
            <p className="mt-3 text-lg text-slate-300">
              Tell us about your site and we&apos;ll help you spec the right system.
            </p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0 text-base">
            Get a Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
