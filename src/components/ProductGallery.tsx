"use client";

import { useState } from "react";
import { Media } from "./Media";

export function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);
  const list = images.length ? images : [""];

  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
        <Media
          src={list[active]}
          alt={`${name}${active > 0 ? ` — view ${active + 1}` : ""} (demo image)`}
          ratio="4 / 3"
          priority
        />
      </div>

      {list.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3" role="group" aria-label="Product images">
          {list.map((img, i) => (
            <button
              key={img + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              aria-current={i === active}
              className={`overflow-hidden rounded-lg border-2 transition-all ${
                i === active
                  ? "border-brand"
                  : "border-slate-200 opacity-70 hover:opacity-100"
              }`}
            >
              <Media src={img} alt={`${name} thumbnail ${i + 1}`} ratio="4 / 3" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
