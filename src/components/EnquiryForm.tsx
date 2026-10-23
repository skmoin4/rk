"use client";

import {
  useState,
  cloneElement,
  isValidElement,
  type FormEvent,
  type ReactNode,
  type ReactElement,
} from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Send, AlertCircle, RotateCcw } from "lucide-react";
import { categories } from "@/data/products";

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[+()\-\s0-9]{7,18}$/;

export function EnquiryForm() {
  const searchParams = useSearchParams();
  const presetProduct = searchParams.get("product") ?? "";

  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function validate(form: HTMLFormElement): Errors {
    const data = new FormData(form);
    const next: Errors = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (name.length < 2) next.name = "Please enter your name.";
    if (!emailRe.test(email)) next.email = "Please enter a valid email address.";
    if (phone && !phoneRe.test(phone)) next.phone = "Please enter a valid phone number.";
    if (message.length < 10) next.message = "Please add a little more detail (10+ characters).";
    return next;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      form.querySelector<HTMLElement>(`[data-field="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }
    // Frontend-only demo: no data is sent anywhere.
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-card">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-green-50 text-green-600">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-5 font-display text-xl font-bold text-slate-900">Enquiry noted</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
          Thanks — your enquiry has been captured in this demo. This is a frontend-only
          demonstration, so nothing has been sent to the company yet.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn-ghost mt-6"
        >
          <RotateCcw className="h-4 w-4" />
          Send another
        </button>
      </div>
    );
  }

  const fieldBase =
    "w-full rounded-lg border bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition-colors placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/20";
  const ok = "border-slate-200 focus:border-brand";
  const bad = "border-red-400 focus:border-red-500";

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" error={errors.name}>
          <input data-field="name" name="name" type="text" autoComplete="name"
            placeholder="Your full name"
            className={`${fieldBase} ${errors.name ? bad : ok}`} />
        </Field>

        <Field label="Email" name="email" error={errors.email}>
          <input data-field="email" name="email" type="email" autoComplete="email"
            placeholder="you@company.com"
            className={`${fieldBase} ${errors.email ? bad : ok}`} />
        </Field>

        <Field label="Phone" name="phone" optional error={errors.phone}>
          <input data-field="phone" name="phone" type="tel" autoComplete="tel"
            placeholder="Optional"
            className={`${fieldBase} ${errors.phone ? bad : ok}`} />
        </Field>

        <Field label="Product / category" name="product" optional>
          <select
            data-field="product"
            name="product"
            defaultValue={presetProduct}
            className={`${fieldBase} ${ok}`}
          >
            <option value="">General enquiry</option>
            {presetProduct && !categories.some((c) => c.name === presetProduct) && (
              <option value={presetProduct}>{presetProduct}</option>
            )}
            {categories.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Message" name="message" error={errors.message}>
          <textarea data-field="message" name="message" rows={5}
            placeholder="Tell us about your requirement — site, duct type, sizes if known…"
            className={`${fieldBase} resize-y ${errors.message ? bad : ok}`} />
        </Field>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-slate-500">
          Demo form — submissions are validated in the browser and not delivered.
        </p>
        <button type="submit" disabled={sending} className="btn-primary disabled:opacity-70">
          {sending ? "Sending…" : "Send enquiry"}
          <Send className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  optional,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 flex items-center gap-2 text-sm font-medium text-slate-800">
        {label}
        {optional && <span className="text-xs font-normal text-slate-400">(optional)</span>}
      </label>
      {/* associate label by rendering child input with matching id */}
      <div>{withId(children, name)}</div>
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
          <AlertCircle className="h-3.5 w-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}

// Inject id={name} onto the single form control child so the label links to it.
function withId(children: ReactNode, id: string): ReactNode {
  if (isValidElement(children)) {
    return cloneElement(children as ReactElement<{ id?: string }>, { id });
  }
  return children;
}
