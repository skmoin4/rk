"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Media } from "./Media";
import { gallery, galleryTags } from "@/data/showcase";

export function GalleryGrid() {
  const [tag, setTag] = useState("All");
  const [open, setOpen] = useState<number | null>(null);

  const items = useMemo(
    () => (tag === "All" ? gallery : gallery.filter((g) => g.tag === tag)),
    [tag]
  );

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((p) => (p === null ? p : (p + d + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  return (
    <div>
      {/* Filter */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter gallery">
        {galleryTags.map((t) => {
          const active = t === tag;
          return (
            <button
              key={t}
              type="button"
              onClick={() => setTag(t)}
              aria-pressed={active}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                active
                  ? "border-navy-900 bg-navy-900 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"
              }`}
            >
              {t}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((g, i) => (
          <button
            key={g.src}
            type="button"
            onClick={() => setOpen(i)}
            className="card spotlight ring-gradient group relative block overflow-hidden text-left"
            aria-label={`Open ${g.title}`}
          >
            <Media
              src={g.src}
              alt={`${g.title} (demo image)`}
              ratio="1 / 1"
              imgClassName="transition-transform duration-700 ease-premium group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-navy-950/90 to-transparent p-3 pt-10">
              <span>
                <span className="block text-sm font-semibold text-white">{g.title}</span>
                <span className="block text-[11px] text-slate-300">{g.tag}</span>
              </span>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                <Expand className="h-4 w-4" />
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {open !== null && items[open] && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={items[open].title}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous"
            className="absolute left-3 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <figure className="w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <Media src={items[open].src} alt={`${items[open].title} (demo image)`} ratio="4 / 3" priority />
            </div>
            <figcaption className="mt-4 text-center">
              <span className="font-display text-lg font-semibold text-white">{items[open].title}</span>
              <span className="mt-1 block text-sm text-slate-400">
                {items[open].tag} · {open + 1} / {items.length}
              </span>
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next"
            className="absolute right-3 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
}
