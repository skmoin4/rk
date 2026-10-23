import type { Metadata } from "next";
import { Suspense } from "react";
import { MapPin, Building2, FileText, User, Clock, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Reveal } from "@/components/Reveal";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with RK Air Duct in Nashik for industrial ducting and commercial kitchen fabrication enquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const details = [
    { icon: MapPin, label: "Location", value: company.location.display },
    { icon: User, label: "Contact person", value: company.contactPerson },
    { icon: Building2, label: "Business type", value: company.legalStatus },
    { icon: FileText, label: "GST", value: `${company.gst} · since ${company.gstRegistered}` },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your requirement"
        intro="Send an enquiry and we'll help you spec the right ducting or kitchen fabrication for your site."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="container-rk grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          {/* Details */}
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-slate-900">Company details</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Details below are drawn from the company&apos;s public business profile.
            </p>

            <ul className="mt-8 space-y-5">
              {details.map((d) => (
                <li key={d.label} className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-slate-200 bg-white text-brand">
                    <d.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {d.label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-slate-900">{d.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex items-center gap-2 text-slate-900">
                <Clock className="h-4 w-4 text-brand" />
                <span className="text-sm font-semibold">Business hours</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Monday – Saturday, standard business hours. Enquiries can be sent any time via the form.
              </p>
            </div>

            <div className="mt-5 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <p>
                A public phone number and full street address are not published on the company&apos;s
                source profile, so they are not shown here. Add them to{" "}
                <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">src/data/company.ts</code>{" "}
                when available.
              </p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <Suspense fallback={<FormFallback />}>
              <EnquiryForm />
            </Suspense>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function FormFallback() {
  return <div className="h-[560px] animate-pulse rounded-2xl border border-slate-200 bg-white" />;
}
