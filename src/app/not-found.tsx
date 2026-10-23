import Link from "next/link";
import { Home, PackageSearch } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 blueprint opacity-50" aria-hidden="true" />
      <div className="container-rk relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <p className="font-display text-7xl font-bold text-brand-400 sm:text-8xl">404</p>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Page not found</h1>
        <p className="mt-4 max-w-md text-slate-300">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            <Home className="h-4 w-4" />
            Back home
          </Link>
          <Link href="/products" className="btn-ghost-light">
            <PackageSearch className="h-4 w-4" />
            Browse products
          </Link>
        </div>
      </div>
    </section>
  );
}
