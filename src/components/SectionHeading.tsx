import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  index?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  index,
  title,
  intro,
  align = "left",
  tone = "dark",
}: Props) {
  const isLight = tone === "light";
  return (
    <Reveal className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>
          {index && <span className={isLight ? "text-slate-500" : "text-slate-400"}>{index}</span>}
          <span className="h-px w-8 bg-brand-gradient" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-5 text-[2rem] font-bold leading-[1.04] tracking-[-0.01em] sm:text-[2.75rem] ${
          isLight ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            isLight ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
