"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/showcase";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const go = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = window.setInterval(() => setIndex((p) => (p + 1) % count), 5200);
    return () => window.clearInterval(id);
  }, [paused, count]);

  const touchX = useRef<number | null>(null);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
      role="group"
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
    >
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm">
        <div
          className="flex transition-transform duration-700 ease-premium"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="w-full shrink-0 px-7 py-10 sm:px-14 sm:py-14"
              aria-hidden={i !== index}
            >
              <Quote className="h-10 w-10 text-brand-400/70" />
              <blockquote className="mt-5 font-display text-xl font-medium leading-relaxed text-white sm:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                  {t.role.slice(0, 1)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{t.role}</span>
                  <span className="block text-xs text-slate-400">{t.sector}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2" role="tablist" aria-label="Choose testimonial">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => go(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-7 bg-brand-gradient" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-white/40 hover:bg-white/10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-white/40 hover:bg-white/10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
