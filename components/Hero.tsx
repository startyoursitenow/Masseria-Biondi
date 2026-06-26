import Image from "next/image";
import { ArrowRight, PlayCircle } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { siteData, whatsappHref } from "@/lib/siteData";

export function Hero() {
  const { hero } = siteData;

  return (
    <section className="overflow-hidden bg-brand-50 py-10 sm:py-14">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <Reveal>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-brand-600">{hero.eyebrow}</p>
          <h1 className="text-balance text-4xl font-black leading-[1.03] text-ink sm:text-5xl lg:text-6xl">{hero.headline}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{hero.subtitle}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={whatsappHref} variant="accent" className="gap-2">
              {hero.primaryCta}
              <ArrowRight size={18} />
            </ButtonLink>
            <ButtonLink href="#servizi" variant="secondary" className="gap-2">
              <PlayCircle size={18} />
              {hero.secondaryCta}
            </ButtonLink>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {hero.stats.map((item) => (
              <div key={item.label} className="rounded-lg border border-line bg-white p-3 text-center shadow-soft">
                <strong className="block text-xl font-black text-brand-900">{item.value}</strong>
                <span className="mt-1 block text-xs font-bold text-muted">{item.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="lg:justify-self-end">
          <div className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-lift">
            {hero.media.type === "video" ? (
              <video src={hero.media.src} autoPlay muted loop playsInline className="aspect-[4/3] w-full object-cover" />
            ) : (
              <Image src={hero.media.src} alt={hero.media.alt} width={820} height={620} priority className="aspect-[4/3] w-full object-cover" />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
