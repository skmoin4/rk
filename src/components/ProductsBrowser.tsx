"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState, useEffect } from "react";
import { Search, X, SearchX } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { categories, products } from "@/data/products";

export function ProductsBrowser() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") ?? "all";
  const [query, setQuery] = useState("");

  // Keep the URL in sync so category links + filter chips share one source.
  const setCategory = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug === "all") params.delete("category");
    else params.set("category", slug);
    const qs = params.toString();
    router.replace(qs ? `/products?${qs}` : "/products", { scroll: false });
  };

  // If a category arrives via URL that no longer exists, fall back to all.
  useEffect(() => {
    if (activeCategory !== "all" && !categories.some((c) => c.slug === activeCategory)) {
      setCategory("all");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const inCat = activeCategory === "all" || p.categorySlug === activeCategory;
      if (!inCat) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.attributes.some((a) => a.value.toLowerCase().includes(q))
      );
    });
  }, [activeCategory, query]);

  const chips = [{ slug: "all", name: "All products" }, ...categories];

  return (
    <div className="container-rk py-12 sm:py-16">
      {/* Controls */}
      <div className="flex flex-col gap-6">
        <div className="relative max-w-md">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products…"
            aria-label="Search products"
            className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-10 text-sm text-slate-900 shadow-sm transition-colors placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {chips.map((c) => {
            const active = c.slug === activeCategory;
            return (
              <button
                key={c.slug}
                type="button"
                onClick={() => setCategory(c.slug)}
                aria-pressed={active}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  active
                    ? "border-slate-900 bg-navy-900 text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"
                }`}
              >
                {c.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Count */}
      <p className="mt-8 text-sm text-slate-500" aria-live="polite">
        Showing <span className="font-semibold text-slate-900">{filtered.length}</span>{" "}
        {filtered.length === 1 ? "product" : "products"}
        {activeCategory !== "all" && (
          <> in {categories.find((c) => c.slug === activeCategory)?.name}</>
        )}
      </p>

      {/* Grid / empty state */}
      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <div className="mt-6 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white py-20 text-center">
          <SearchX className="h-10 w-10 text-slate-300" />
          <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">
            No products found
          </h3>
          <p className="mt-2 max-w-sm text-sm text-slate-500">
            Try a different search term or category.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
            className="btn-ghost mt-6"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
