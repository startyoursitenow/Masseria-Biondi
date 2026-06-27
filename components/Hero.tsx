"use client";

import Link from "next/link";
import { ArrowRight, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { siteData, whatsappHref } from "@/lib/siteData";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut", delay },
});

export function Hero() {
  const { hero } = siteData;

  return (
    <section className="relative mx-auto w-full max-w-5xl px-4">
      {/* Radial gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 isolate hidden overflow-hidden lg:block">
        <div
          className="absolute inset-0 -z-20"
          style={{
            background:
              "radial-gradient(35% 80% at 49% 0%, color-mix(in oklab, var(--brand-900) 10%, transparent), transparent)",
          }}
        />
      </div>

      {/* Vertical border accents (desktop only) */}
      <div aria-hidden className="absolute inset-0 mx-auto hidden min-h-screen w-full max-w-5xl lg:block">
        <div
          className="absolute inset-y-0 left-0 z-10 h-full w-px bg-line"
          style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)" }}
        />
        <div
          className="absolute inset-y-0 right-0 z-10 h-full w-px bg-line"
          style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center gap-6 pb-16 pt-20 sm:pt-28">
        {/* Inner border accents (mobile) */}
        <div aria-hidden className="absolute inset-0 -z-10 size-full overflow-hidden lg:hidden">
          <div
            className="absolute inset-y-0 left-4 w-px bg-line"
            style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)" }}
          />
          <div
            className="absolute inset-y-0 right-4 w-px bg-line"
            style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)" }}
          />
        </div>

        {/* Badge */}
        <motion.a
          href="#servizi"
          className="group mx-auto flex w-fit items-center gap-3 rounded-full border border-line bg-white px-3 py-1 shadow-xs transition-all"
          {...fadeUp(0)}
        >
          <Rocket size={12} className="text-muted" />
          <span className="text-xs font-semibold text-muted">{hero.eyebrow}</span>
          <span className="block h-4 border-l border-line" />
          <ArrowRight size={12} className="text-muted transition duration-150 group-hover:translate-x-1" />
        </motion.a>

        {/* Headline */}
        <motion.h1
          className="max-w-3xl text-center text-4xl font-black leading-[1.05] tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl"
          style={{ textShadow: "0 0 60px color-mix(in oklab, var(--brand-900) 12%, transparent)" }}
          {...fadeUp(0.1)}
        >
          {hero.headline}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mx-auto max-w-xl text-center text-base leading-7 tracking-wide text-muted sm:text-lg"
          {...fadeUp(0.2)}
        >
          {hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div className="flex flex-row flex-wrap items-center justify-center gap-3 pt-2" {...fadeUp(0.3)}>
          <Link
            href="#servizi"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-bold text-ink shadow-xs transition hover:-translate-y-0.5 hover:bg-brand-50 hover:shadow-soft"
          >
            {hero.secondaryCta}
          </Link>
          <Link
            href={whatsappHref}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-900 px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lift"
          >
            {hero.primaryCta}
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Stats trust band */}
        <motion.div
          className="mt-4 flex items-center gap-6 border-t border-line pt-6 sm:gap-10"
          {...fadeUp(0.45)}
        >
          {hero.stats.map((item: { value: string; label: string }) => (
            <div key={item.label} className="text-center">
              <strong className="block text-xl font-black text-brand-900">{item.value}</strong>
              <span className="mt-0.5 block text-xs font-semibold text-muted">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
