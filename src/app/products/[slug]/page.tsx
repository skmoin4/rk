import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Mail, Info } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import {
  products,
  getProduct,
  getCategoryName,
  relatedProducts,
} from "@/data/products";
import { company } from "@/data/company";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: product.summary,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.summary,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = relatedProducts(product);
  const categoryName = getCategoryName(product.categorySlug);
  const images = [product.image, ...product.gallery];

  return (
    <>
      <PageHeader
        eyebrow={categoryName}
        title={product.name}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
      />

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="container-rk grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <ProductGallery images={images} name={product.name} />
          </Reveal>

          <Reveal delay={0.1}>
            <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
              {product.isService ? "Service" : "Product"} · {categoryName}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              {product.name}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{product.description}</p>

            {/* Attributes derived from the product name / category only */}
            {product.attributes.length > 0 && (
              <dl className="mt-8 divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white">
                {product.attributes.map((a) => (
                  <div key={a.label} className="flex items-center justify-between gap-4 px-5 py-3.5">
                    <dt className="text-sm text-slate-500">{a.label}</dt>
                    <dd className="text-sm font-semibold text-slate-900">{a.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {/* Honest note: detailed specs are not published publicly */}
            <div className="mt-5 flex items-start gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <p>
                Detailed dimensions and specifications are shared on enquiry, as this
                {product.isService ? " service" : " product"} is supplied to suit each requirement.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}`}
                className="btn-primary"
              >
                <Mail className="h-4 w-4" />
                Enquire about this {product.isService ? "service" : "product"}
              </Link>
              <Link href="/products" className="btn-ghost">
                Back to products
              </Link>
            </div>

            <ul className="mt-8 grid gap-2 text-sm text-slate-700">
              {["Fabricated to requirement", "GI, stainless steel & aluminium options", "Supply across Nashik & beyond"].map(
                (b) => (
                  <li key={b} className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 shrink-0 text-brand" />
                    {b}
                  </li>
                )
              )}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="container-rk">
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                Related products
              </h2>
              <Link
                href="/products"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-brand"
              >
                All products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <Reveal stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            category: categoryName,
            description: product.summary,
            brand: { "@type": "Brand", name: company.name },
          }),
        }}
      />
    </>
  );
}
