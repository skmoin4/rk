import type { Metadata } from "next";
import { Info } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual gallery of RK Air Duct's ducting, kitchen ventilation, air distribution and fabrication work.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Our work in pictures"
        intro="Ducting, exhaust systems, air distribution and commercial kitchen fabrication — browse by category and tap any image to view."
        crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="container-rk">
          <Reveal className="mb-8 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
            <p>
              Gallery images are clearly-labelled demo graphics. Replace them with real site and
              workshop photographs in{" "}
              <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">/public/gallery</code> (same
              filenames).
            </p>
          </Reveal>
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
