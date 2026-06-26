import { AlertCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { siteData } from "@/lib/siteData";

export function Problems() {
  const { problems } = siteData;

  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <Reveal>
          <SectionHeader eyebrow={problems.eyebrow} title={problems.title} />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.items.map((item) => (
            <Reveal key={item.title}>
              <article className="h-full rounded-lg border border-line bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <AlertCircle className="mb-4 text-accent" size={26} />
                <h3 className="text-lg font-black text-ink">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
