import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteData } from "@/lib/siteData";

export function Solution() {
  const { solution } = siteData;

  return (
    <section id="soluzione" className="bg-white py-16 sm:py-20">
      <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-600">{solution.eyebrow}</p>
          <h2 className="text-balance text-3xl font-black leading-tight text-ink sm:text-4xl">{solution.title}</h2>
        </Reveal>
        <Reveal>
          <p className="text-lg leading-8 text-muted">{solution.text}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {solution.benefits.map((benefit) => (
              <div key={benefit} className="flex gap-3 rounded-lg border border-line bg-surface p-4">
                <CheckCircle2 className="mt-1 shrink-0 text-brand-600" size={20} />
                <span className="font-bold leading-7 text-ink">{benefit}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
