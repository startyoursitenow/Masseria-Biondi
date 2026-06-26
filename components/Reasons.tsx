import { ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { siteData } from "@/lib/siteData";

export function Reasons() {
  const { reasons } = siteData;

  return (
    <section className="bg-brand-900 py-16 text-white sm:py-20">
      <div className="container-page">
        <Reveal>
          <SectionHeader eyebrow={reasons.eyebrow} title={reasons.title} inverted />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {reasons.items.map((item) => (
            <Reveal key={item.label}>
              <article className="h-full rounded-lg border border-white/15 bg-white/8 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/12">
                <ShieldCheck className="mb-5 text-accent" size={28} />
                <strong className="block text-4xl font-black">{item.value}</strong>
                <h3 className="mt-2 text-lg font-black">{item.label}</h3>
                <p className="mt-3 leading-7 text-white/76">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
