import Link from "next/link";
import { MapPin, FileText, Building2, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { company, nav } from "@/data/company";
import { categories } from "@/data/products";

export function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      <div className="container-rk grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
            {company.intro}
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Explore
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Product Range
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/products?category=${c.slug}`}
                  className="transition-colors hover:text-white"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Company
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span>{company.location.display}</span>
            </li>
            <li className="flex items-start gap-3">
              <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span>{company.legalStatus}</span>
            </li>
            <li className="flex items-start gap-3">
              <FileText className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span>GST: {company.gst}</span>
            </li>
          </ul>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 hover:text-brand-300"
          >
            Send an enquiry <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-rk flex flex-col items-start justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="text-slate-500">
            Demo website · business details sourced from the company&apos;s public profile.
          </p>
        </div>
      </div>
    </footer>
  );
}
