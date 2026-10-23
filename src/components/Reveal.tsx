"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** stagger direct children instead of animating the element itself */
  stagger?: boolean;
  delay?: number;
  y?: number;
};

/**
 * Scroll-triggered entrance. Falls back to fully visible content when
 * prefers-reduced-motion is set or GSAP cannot run (handled in CSS too).
 */
export function Reveal({
  children,
  as,
  className = "",
  stagger = false,
  delay = 0,
  y = 20,
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = stagger
      ? (Array.from(el.children) as HTMLElement[])
      : [el];

    if (prefersReduced) {
      targets.forEach((t) => t.classList.add("is-in"));
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y });
      targets.forEach((t) => t.classList.add("is-in"));
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        delay,
        stagger: stagger ? 0.09 : 0,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [stagger, delay, y]);

  // Non-stagger roots start hidden via the `reveal` CSS class (no flash, and a
  // no-JS / reduced-motion fallback reveals them). Stagger roots stay visible;
  // their children are hidden in the effect above.
  const rootClass = [stagger ? "" : "reveal", className].filter(Boolean).join(" ");

  return (
    <Tag ref={ref} className={rootClass}>
      {children}
    </Tag>
  );
}
