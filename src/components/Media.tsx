"use client";

import { useState } from "react";

type MediaProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  /** aspect ratio box, e.g. "4 / 3" */
  ratio?: string;
  sizes?: string;
};

/**
 * Image presenter with a skeleton loading state, graceful missing-image
 * fallback and stable aspect-ratio box (prevents layout shift). Uses a plain
 * <img> because the demo imagery is SVG; swap the files in /public with real
 * photos (same paths) and this keeps working.
 */
export function Media({
  src,
  alt,
  className = "",
  imgClassName = "",
  priority = false,
  ratio = "4 / 3",
}: MediaProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-navy-800 ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {!loaded && !errored && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-navy-700 to-navy-900" />
      )}
      {errored ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-navy-800 p-4 text-center text-slate-400">
          <span className="text-xs font-semibold uppercase tracking-widest">Image unavailable</span>
          <span className="text-sm text-slate-300">{alt}</span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={`h-full w-full object-cover transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          } ${imgClassName}`}
        />
      )}
    </div>
  );
}
