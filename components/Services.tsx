import { BadgeCheck, Headphones, Settings, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { siteData } from "@/lib/siteData";

const icons = {
  sparkles: Sparkles,
  badge: BadgeCheck,
  settings: Settings,
  headphones: Headphones
};

export function Services() {
  const { services } = siteData;

  return (
    <section id="servizi" className="py-16 sm:py-20">
      <div className="container-page">
        <Reveal>
          <SectionHeader eyebrow={services.eyebrow} title={services.title} />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons] ?? Sparkles;
            return (
              <Reveal key={item.title}>
                <article className="h-full rounded-lg border border-line bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-500 hover:shadow-lift">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-black text-ink">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
