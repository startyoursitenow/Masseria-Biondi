import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { siteData } from "@/lib/siteData";

export function Gallery() {
  const { gallery } = siteData;

  return (
    <section id="galleria" className="py-16 sm:py-20">
      <div className="container-page">
        <Reveal>
          <SectionHeader eyebrow={gallery.eyebrow} title={gallery.title} />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {gallery.items.map((item) => (
            <Reveal key={item.src}>
              <figure className="group overflow-hidden rounded-lg border border-line bg-white shadow-soft">
                {item.type === "video" ? (
                  <video src={item.src} controls preload="metadata" className="aspect-[4/3] w-full object-cover" />
                ) : (
                  <Image src={item.src} alt={item.alt || item.title || ""} width={720} height={540} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
                )}
                <figcaption className="p-4 text-base font-black text-ink">{item.title}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
