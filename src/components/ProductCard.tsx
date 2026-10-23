import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Media } from "./Media";
import { getCategoryName, type Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card spotlight ring-gradient group relative flex flex-col overflow-hidden hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-card-hover">
      <Link
        href={`/products/${product.slug}`}
        className="relative block overflow-hidden"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Media
          src={product.image}
          alt={product.name}
          ratio="4 / 3"
          imgClassName="transition-transform duration-700 ease-premium group-hover:scale-[1.06]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-navy-900/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-100 backdrop-blur-sm">
          {getCategoryName(product.categorySlug)}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold leading-snug text-slate-900">
          <Link
            href={`/products/${product.slug}`}
            className="after:absolute after:inset-0 focus-visible:outline-none"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{product.summary}</p>

        <div className="mt-5 flex items-center justify-between">
          <span className="relative z-10 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 transition-colors group-hover:text-brand">
            View details
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
          <Link
            href={`/contact?product=${encodeURIComponent(product.name)}`}
            className="relative z-10 rounded-md border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-800 transition-colors hover:border-brand hover:text-brand"
          >
            Enquire
          </Link>
        </div>
      </div>
    </article>
  );
}
