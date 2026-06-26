import { Mail, MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { mailHref, phoneHref, siteData, whatsappHref } from "@/lib/siteData";

export function CtaFinal() {
  const { finalCta } = siteData;

  return (
    <section className="bg-brand-50 py-16 sm:py-20">
      <Reveal className="container-page text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-600">{finalCta.eyebrow}</p>
        <h2 className="mx-auto max-w-3xl text-balance text-3xl font-black leading-tight text-ink sm:text-4xl">{finalCta.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted">{finalCta.text}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={whatsappHref} variant="accent" className="gap-2">
            <MessageCircle size={18} />
            {finalCta.whatsappLabel}
          </ButtonLink>
          <ButtonLink href={phoneHref} variant="primary" className="gap-2">
            <Phone size={18} />
            {finalCta.phoneLabel}
          </ButtonLink>
          <ButtonLink href={mailHref} variant="secondary" className="gap-2">
            <Mail size={18} />
            {finalCta.quoteLabel}
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
