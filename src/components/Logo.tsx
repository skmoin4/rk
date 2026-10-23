import Link from "next/link";
import { company } from "@/data/company";

/**
 * Brand lockup for R K Air Duct — the company's real logo emblem (from the
 * supplied asset) on a clean white chip, paired with a styled wordmark so it
 * reads correctly on both light and dark backgrounds.
 */
export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isLight = variant === "light";
  return (
    <Link
      href="/"
      aria-label={`${company.name} — home`}
      className="group inline-flex items-center gap-3"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition-transform duration-500 ease-premium group-hover:scale-105">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.webp"
          alt="R K Air Duct logo"
          width={40}
          height={40}
          className="h-9 w-9 object-contain"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[17px] font-bold tracking-tight ${
            isLight ? "text-white" : "text-slate-900"
          }`}
        >
          R K AIR DUCT
        </span>
        <span
          className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] ${
            isLight ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Nashik · Est. GST 2019
        </span>
      </span>
    </Link>
  );
}
