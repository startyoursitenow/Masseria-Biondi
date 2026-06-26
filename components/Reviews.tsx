"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { siteData } from "@/lib/siteData";

export function Reviews() {
  const { reviews } = siteData;
  const [index, setIndex] = useState(0);
  const review = reviews.items[index];

  function move(direction: number) {
    setIndex((value) => (value + direction + reviews.items.length) % reviews.items.length);
  }

  return (
    <section id="recensioni" className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <Reveal>
          <SectionHeader eyebrow={reviews.eyebrow} title={reviews.title} />
        </Reveal>
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-lg border border-line bg-surface p-6 text-center shadow-soft sm:p-9">
            <div className="mb-5 flex justify-center gap-1 text-accent">
              {Array.from({ length: review.rating }).map((_, itemIndex) => (
                <Star key={itemIndex} size={22} fill="currentColor" />
              ))}
            </div>
            <blockquote className="text-xl font-bold leading-9 text-ink">"{review.text}"</blockquote>
            <div className="mt-6">
              <strong className="block text-lg font-black text-ink">{review.name}</strong>
              <span className="text-sm font-bold text-muted">{review.role}</span>
            </div>
            <div className="mt-7 flex justify-center gap-3">
              <button type="button" onClick={() => move(-1)} className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-line bg-white text-ink transition hover:-translate-y-0.5">
                <ChevronLeft size={22} />
              </button>
              <button type="button" onClick={() => move(1)} className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-line bg-white text-ink transition hover:-translate-y-0.5">
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
