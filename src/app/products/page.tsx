import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/PageHeader";
import { ProductsBrowser } from "@/components/ProductsBrowser";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse RK Air Duct's range: industrial air ducts, GI ducting, kitchen exhaust hoods, stainless steel storage racks, commercial kitchen equipment and blowers.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Catalogue"
        title="Products"
        intro="Industrial ducting and commercial kitchen fabrication, grouped by family. Filter by category or search to find an item."
        crumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />
      <div className="bg-slate-50">
        <Suspense fallback={<BrowserFallback />}>
          <ProductsBrowser />
        </Suspense>
      </div>
    </>
  );
}

function BrowserFallback() {
  return (
    <div className="container-rk py-16">
      <div className="h-11 w-full max-w-md animate-pulse rounded-lg bg-slate-200" />
      <div className="mt-6 flex flex-wrap gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-10 w-28 animate-pulse rounded-full bg-slate-200" />
        ))}
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-80 animate-pulse rounded-xl bg-slate-200" />
        ))}
      </div>
    </div>
  );
}
