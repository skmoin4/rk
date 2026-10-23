"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, MapPin, FileText, Clock } from "lucide-react";
import { Logo } from "./Logo";
import { nav, company } from "@/data/company";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="sticky top-0 z-50">
        {/* Utility bar */}
        <div
          className={`overflow-hidden bg-ink text-slate-300 transition-all duration-300 ease-premium ${
            scrolled ? "max-h-0" : "max-h-10"
          }`}
        >
          <div className="container-rk flex h-9 items-center justify-between">
            <div className="flex items-center gap-5 label-mono text-[10px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3 w-3 text-leaf-400" /> {company.location.display}
              </span>
              <span className="hidden items-center gap-1.5 sm:flex">
                <FileText className="h-3 w-3 text-brand-300" /> GST {company.gst}
              </span>
            </div>
            <div className="flex items-center gap-5 label-mono text-[10px] text-slate-400">
              <span className="hidden items-center gap-1.5 md:flex">
                <Clock className="h-3 w-3 text-brand-300" /> Mon–Sat
              </span>
              <Link href="/contact" className="text-leaf-400 transition-colors hover:text-leaf-300">
                Enquire →
              </Link>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div
          className={`border-b transition-all duration-300 ease-premium ${
            scrolled
              ? "border-slate-200 bg-white/80 shadow-sm backdrop-blur-xl"
              : "border-slate-100 bg-white"
          }`}
        >
          <div className="container-rk flex h-[68px] items-center justify-between gap-4">
            <Logo />

            <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href) ? "text-brand" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {isActive(item.href) && (
                    <span className="absolute inset-0 rounded-full bg-brand/8 ring-1 ring-brand/15" />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Link href="/contact" className="btn-primary">
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Animated hamburger */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="relative z-[80] inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 transition-colors lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-premium ${
                    open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 rounded-full bg-current transition-all duration-200 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-premium ${
                    open ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      <div
        id="mobile-menu"
        className={`grain fixed inset-0 z-[70] flex flex-col bg-ink text-white transition-all duration-500 ease-premium lg:hidden ${
          open ? "visible opacity-100" : "pointer-events-none invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="mesh-bg absolute inset-0 animate-mesh-pan opacity-50" aria-hidden="true" />
        <div className="absolute inset-0 blueprint opacity-30" aria-hidden="true" />
        <img
          src="/swirl.svg"
          alt=""
          className="animate-spin-slow pointer-events-none absolute -right-16 top-24 h-64 w-64 opacity-20"
          aria-hidden="true"
        />

        {/* top row (matches header height) */}
        <div className="relative flex h-[68px] shrink-0 items-center px-[var(--container-x)]">
          <Logo variant="light" />
        </div>

        {/* nav items */}
        <nav aria-label="Mobile" className="relative flex flex-1 flex-col justify-center px-[var(--container-x)]">
          <span className="label-mono mb-6 text-[10px] text-slate-500">Menu</span>
          <ul className="flex flex-col">
            {nav.map((item, i) => (
              <li
                key={item.href}
                className="border-b border-white/10"
                style={{
                  transitionDelay: open ? `${120 + i * 55}ms` : "0ms",
                }}
              >
                <Link
                  href={item.href}
                  className={`group flex items-center justify-between py-4 transition-all duration-500 ease-premium ${
                    open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${120 + i * 55}ms` : "0ms" }}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="label-mono text-[11px] text-brand-300">0{i + 1}</span>
                    <span
                      className={`font-display text-3xl font-bold tracking-tight transition-colors ${
                        isActive(item.href) ? "text-gradient" : "text-white group-hover:text-brand-300"
                      }`}
                    >
                      {item.label}
                    </span>
                  </span>
                  <ArrowUpRight
                    className={`h-5 w-5 transition-all duration-300 ${
                      isActive(item.href) ? "text-leaf-400" : "text-slate-600 group-hover:text-brand-300"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* footer */}
        <div
          className={`relative shrink-0 border-t border-white/10 px-[var(--container-x)] py-6 transition-all duration-500 ease-premium ${
            open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: open ? "460ms" : "0ms" }}
        >
          <Link href="/contact" className="btn-primary w-full text-base">
            Get a Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
          <div className="mt-5 flex flex-col gap-2 label-mono text-[10px] text-slate-400">
            <span className="flex items-center gap-2">
              <MapPin className="h-3 w-3 text-leaf-400" /> {company.location.display}
            </span>
            <span className="flex items-center gap-2">
              <FileText className="h-3 w-3 text-brand-300" /> GST {company.gst}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
