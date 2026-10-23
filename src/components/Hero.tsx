"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowDown, ShieldCheck } from "lucide-react";
import { AirflowCanvas } from "./AirflowCanvas";
import { company } from "@/data/company";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const floatCards = [
  { img: "/products/gi-round-spiral-duct.svg", label: "Industrial Ducting", tag: "GI · Spiral · Round" },
  { img: "/products/kitchen-stainless-steel-exhaust-hood.svg", label: "Kitchen Exhaust", tag: "Stainless Steel" },
  { img: "/products/aluminium-air-deflection-grill.svg", label: "Air Distribution", tag: "Grilles · Dampers" },
];

export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !root.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-h='kicker']", { y: 18, opacity: 0, duration: 0.6 })
        .from("[data-h='line']", { yPercent: 118, opacity: 0, duration: 0.95, stagger: 0.1 }, "-=0.25")
        .from("[data-h='lead']", { y: 18, opacity: 0, duration: 0.7 }, "-=0.5")
        .from("[data-h='cta']", { y: 18, opacity: 0, duration: 0.6 }, "-=0.4")
        .from("[data-h='stat']", { y: 14, opacity: 0, duration: 0.5, stagger: 0.08 }, "-=0.35")
        .from(
          "[data-h='card']",
          { y: 40, opacity: 0, rotateZ: 4, duration: 0.8, stagger: 0.12 },
          "-=0.9"
        );

      gsap.to("[data-h='bg']", {
        yPercent: 16,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 0.6 },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="grain relative overflow-hidden bg-ink text-white"
      aria-labelledby="hero-title"
    >
      {/* layered background */}
      <div className="absolute inset-0" data-h="bg" aria-hidden="true">
        <div className="mesh-bg absolute inset-0 animate-mesh-pan opacity-80" />
        <div className="absolute inset-0 blueprint opacity-40" />
        <AirflowCanvas className="absolute inset-0 h-full w-full" />
        <img
          src="/swirl.svg"
          alt=""
          className="animate-spin-slow absolute -right-28 top-10 h-[380px] w-[380px] opacity-25 lg:h-[520px] lg:w-[520px]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-ink/55 to-ink/85" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="absolute inset-x-0 top-0 h-[2px] bg-brand-gradient" aria-hidden="true" />

      <div className="container-rk relative grid min-h-[calc(100vh-104px)] grid-cols-1 items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        {/* Left */}
        <div className="max-w-2xl">
          <span
            data-h="kicker"
            className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 label-mono text-[11px] text-slate-200 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf-400/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-leaf-400" />
            </span>
            {company.location.display}
          </span>

          <h1
            id="hero-title"
            className="mt-6 font-display text-[clamp(2.9rem,7.6vw,5.6rem)] font-bold leading-[0.95] tracking-[-0.02em]"
          >
            <span className="block overflow-hidden pb-1">
              <span data-h="line" className="block">Engineered</span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span data-h="line" className="block text-stroke">airflow &amp;</span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span data-h="line" className="block text-gradient">kitchen craft.</span>
            </span>
          </h1>

          <p data-h="lead" className="mt-6 max-w-lg text-lg leading-relaxed text-slate-300">
            Industrial air duct systems, exhaust hoods, blowers, grilles and commercial kitchen
            equipment — fabricated in GI, stainless steel &amp; aluminium, and supplied from Nashik.
          </p>

          <div data-h="cta" className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/products" className="btn-primary text-base">
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/projects" className="btn-ghost-light">
              View Projects
            </Link>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-7 sm:gap-6">
            {[
              { k: "18+", v: "Products" },
              { k: "9", v: "Categories" },
              { k: "GI·SS·Al", v: "Materials" },
            ].map((s) => (
              <div key={s.v} data-h="stat" className="min-w-0">
                <dt className="font-display text-xl font-bold text-white sm:text-2xl">{s.k}</dt>
                <dd className="mt-1 label-mono text-[10px] text-slate-400">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right — floating glass spec cards */}
        <div className="relative hidden h-full min-h-[420px] lg:block" aria-hidden="true">
          <div className="absolute right-0 top-1/2 w-full max-w-sm -translate-y-1/2 space-y-4">
            {floatCards.map((c, i) => (
              <div
                key={c.label}
                data-h="card"
                className={`animate-float flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-3 pr-5 backdrop-blur-md ${
                  i === 1 ? "ml-10" : i === 2 ? "ml-4" : ""
                }`}
                style={{ animationDelay: `${i * 1.4}s` }}
              >
                <span className="h-16 w-20 shrink-0 overflow-hidden rounded-xl border border-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt="" className="h-full w-full object-cover" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-base font-semibold text-white">{c.label}</span>
                  <span className="block label-mono text-[10px] text-slate-400">{c.tag}</span>
                </span>
              </div>
            ))}
            <div className="ml-auto mr-2 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-md">
              <ShieldCheck className="h-4 w-4 text-leaf-400" />
              <span className="label-mono text-[10px] text-slate-200">GST Reg. 2019</span>
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="container-rk relative pb-8">
        <span className="inline-flex items-center gap-2 label-mono text-[10px] text-slate-500">
          <ArrowDown className="h-3.5 w-3.5 animate-bounce text-brand-300" />
          Scroll to explore
        </span>
      </div>
    </section>
  );
}
