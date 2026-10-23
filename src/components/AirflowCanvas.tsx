"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight canvas particle field that conveys airflow — particles drift
 * along gentle sine streams left→right in the brand colours. On-brand (not
 * decorative noise), capped for performance, and disabled for reduced motion.
 */
export function AirflowCanvas({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const COLORS = ["#36A2DC", "#6CC44D", "#1388C6", "#90D773"];

    type P = { x: number; y: number; base: number; amp: number; speed: number; r: number; o: number; c: string; phase: number };
    let particles: P[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      w = parent?.clientWidth ?? window.innerWidth;
      h = parent?.clientHeight ?? 500;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(Math.min(70, Math.max(26, (w * h) / 26000)));
      particles = Array.from({ length: count }, () => spawn());
    };

    const spawn = (atLeft = false): P => ({
      x: atLeft ? -20 : Math.random() * w,
      y: Math.random() * h,
      base: 0,
      amp: 10 + Math.random() * 26,
      speed: 0.25 + Math.random() * 0.75,
      r: 0.8 + Math.random() * 2.2,
      o: 0.15 + Math.random() * 0.5,
      c: COLORS[(Math.random() * COLORS.length) | 0],
      phase: Math.random() * Math.PI * 2,
    });

    let raf = 0;
    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.006;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speed;
        const y = p.y + Math.sin(t * 2 + p.phase + p.x * 0.004) * p.amp;

        ctx.beginPath();
        ctx.arc(p.x, y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.globalAlpha = p.o;
        ctx.fill();

        // faint trailing streak for a sense of flow
        ctx.globalAlpha = p.o * 0.25;
        ctx.fillRect(p.x - p.speed * 10, y - p.r * 0.4, p.speed * 10, p.r * 0.8);

        if (p.x > w + 20) particles[i] = spawn(true);
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);

    if (!prefersReduced) {
      raf = requestAnimationFrame(draw);
    } else {
      // static sparse dots for reduced motion
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.globalAlpha = p.o;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={className} />;
}
