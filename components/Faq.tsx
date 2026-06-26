"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { siteData } from "@/lib/siteData";

export function Faq() {
  const { faq } = siteData;
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="container-page">
        <Reveal>
          <SectionHeader eyebrow={faq.eyebrow} title={faq.title} />
        </Reveal>
        <div className="mx-auto grid max-w-3xl gap-3">
          {faq.items.map((item, index) => {
            const active = open === index;
            return (
              <Reveal key={item.question}>
                <article className="rounded-lg border border-line bg-white shadow-soft">
                  <button
                    type="button"
                    onClick={() => setOpen(active ? -1 : index)}
                    className="flex min-h-16 w-full items-center justify-between gap-4 px-5 py-4 text-left text-lg font-black text-ink"
                    aria-expanded={active}
                  >
                    {item.question}
                    <ChevronDown className={`shrink-0 transition ${active ? "rotate-180" : ""}`} size={22} />
                  </button>
                  {active ? <p className="border-t border-line px-5 py-4 leading-7 text-muted">{item.answer}</p> : null}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
