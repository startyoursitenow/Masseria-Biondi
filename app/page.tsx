"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  Menu,
  Milk,
  Phone,
  ShieldCheck,
  Sparkles,
  Wheat,
  X
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  ["Home", "#home"],
  ["La Masseria", "#masseria"],
  ["I nostri prodotti", "#prodotti"],
  ["Come lavoriamo", "#lavorazione"],
  ["Il punto vendita", "#punto-vendita"],
  ["Contatti", "#contatti"]
];

const whatsappPrimaryHref = "https://wa.me/393475320807";
const facebookHref = "https://www.facebook.com/profile.php?id=100064866903557";
const instagramHref = "https://www.instagram.com/masseria_dei_duchi/";
const googleMapsHref = "https://maps.app.goo.gl/jdz2s1dSfHxBAMS46";
const googleMapsEmbedSrc = "https://www.google.com/maps?q=41.2766677,14.4729861&z=16&output=embed";
const availabilityHref = "https://wa.me/393475320807?text=Ciao,%20vorrei%20sapere%20orari%20e%20disponibilita%20dei%20prodotti%20di%20oggi.";

const images = {
  hero: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=85",
  family: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85",
  farm: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1600&q=85",
  pasture: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=1600&q=85",
  stable: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1600&q=85",
  hay: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1600&q=85",
  cows: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=1400&q=85",
  calf: "https://images.unsplash.com/photo-1511117833895-4b473c0b85d6?auto=format&fit=crop&w=1400&q=85",
  milk: "https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=1400&q=85",
  lab: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=85",
  cheese: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=1400&q=85",
  aging: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=1600&q=85",
  shop: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1800&q=85",
  mozzarella: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=1200&q=85",
  ricotta: "https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=1200&q=85",
  caciocavallo: "https://images.unsplash.com/photo-1624806992066-5ffcf7ca186b?auto=format&fit=crop&w=1200&q=85"
};

const gallery = [
  [images.farm, "Esterni della masseria tra colline e campagna"],
  [images.cows, "Allevamenti curati con attenzione quotidiana"],
  [images.cheese, "Formaggi artigianali pronti per la degustazione"],
  [images.lab, "Laboratorio caseario pulito e professionale"],
  [images.pasture, "Pascoli e alimentazione naturale"],
  [images.aging, "Stagionatura lenta dei prodotti"],
  [images.shop, "Punto vendita diretto in masseria"],
  ["/media/biglietto-masseria-dei-duchi.jpeg", "Riferimenti storici del Caseificio Masseria Dei Duchi"]
];

const products = [
  ["Caciocavallo", "Pasta filata dal gusto pieno, lavorata secondo tradizione.", images.caciocavallo],
  ["Caciocavallo stagionato", "Profumo intenso e consistenza compatta, ideale per taglieri importanti.", images.aging],
  ["Ricotta fresca", "Morbida, delicata, preparata con siero fresco di lavorazione.", images.ricotta],
  ["Ricotta salata", "Sapida e asciutta, perfetta da grattugiare o servire a scaglie.", images.cheese],
  ["Mozzarella", "Fresca, lattica, prodotta per mantenere elasticita e dolcezza.", images.mozzarella],
  ["Scamorza", "Pasta filata versatile, disponibile fresca o piu asciutta.", images.caciocavallo],
  ["Caciotta", "Formaggio quotidiano, armonico, con profilo morbido e genuino.", images.cheese],
  ["Primo sale", "Semplice, fresco, leggero, espressione immediata del latte.", images.milk],
  ["Formaggi misti", "Selezioni della masseria per portare in tavola piu sapori.", images.aging],
  ["Prodotti stagionali", "Piccole produzioni legate al periodo e alla disponibilita del latte.", images.farm]
];

const animals = [
  ["Pascoli aperti", "Spazi naturali e ritmi lenti aiutano a preservare benessere e qualita del latte.", images.pasture],
  ["Cura quotidiana", "Ogni animale viene seguito con attenzione, alimentazione bilanciata e presenza costante.", images.cows],
  ["Nuove generazioni", "Vitelli e allevamento raccontano continuita familiare e lavoro in masseria.", images.calf]
];

const process = [
  ["Mungitura", "Latte raccolto dagli allevamenti con attenzione a freschezza e igiene."],
  ["Lavorazione del latte", "Il latte entra in laboratorio e viene trasformato con metodo artigianale."],
  ["Produzione", "Mani esperte, pasta filata, ricotte e formaggi prendono forma ogni giorno."],
  ["Stagionatura", "Tempo, ambiente e controllo danno profondita ai prodotti piu intensi."],
  ["Vendita diretta", "I formaggi arrivano nel punto vendita della masseria, pronti da scegliere con chi li produce."]
];

const reasons: Array<[string, LucideIcon]> = [
  ["Latte proveniente dai nostri allevamenti", Milk],
  ["Produzione artigianale", Sparkles],
  ["Materie prime selezionate", Wheat],
  ["Acquisto diretto in masseria", ShieldCheck]
];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ kicker, title, text }: { kicker: string; title: string; text?: string }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center">
      <span className="eyebrow">{kicker}</span>
      <h2 className="section-title">{title}</h2>
      {text ? <p className="section-lead">{text}</p> : null}
    </Reveal>
  );
}

function Photo({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw"
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`photo-frame ${className}`}>
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
    </div>
  );
}

function WhatsAppLogo() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" className="brand-icon whatsapp-icon">
      <path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.74.46 3.44 1.32 4.94L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.51 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.13.82.84-3.05-.2-.31a8.23 8.23 0 0 1-1.26-4.38 8.24 8.24 0 1 1 8.24 8.24Zm4.52-6.17c-.25-.12-1.47-.73-1.7-.81-.23-.08-.4-.12-.56.12-.17.25-.65.81-.79.98-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.9 2.41 1.02 2.58.12.17 1.76 2.68 4.26 3.76.6.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  );
}

function InstagramLogo() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" className="brand-icon">
      <path fill="currentColor" d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

function FacebookLogo() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" className="brand-icon">
      <path fill="currentColor" d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06C2 17.08 5.66 21.24 10.44 22v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.9h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06Z" />
    </svg>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 900], [0, 120]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => {
      setScrolled((current) => (current ? v > 24 : v > 60));
    });
    return () => unsub();
  }, [scrollY]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Salta al contenuto principale
      </a>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 w-full transition-all duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled || open
            ? "nav-scrolled border-b border-white/20 bg-[#fffaf1]/95 shadow-[0_2px_20px_rgba(0,0,0,0.07)] backdrop-blur-sm"
            : "nav-top border-b border-transparent bg-transparent",
        ].join(" ")}
      >
        <nav aria-label="Navigazione principale" className="relative mx-auto flex h-16 w-[calc(100%-1rem)] max-w-7xl items-center justify-end overflow-visible rounded-none px-3 pl-[136px] sm:pl-[166px] md:h-20 md:px-5 md:pl-[188px] lg:pl-[214px]">
          <a
            href="#home"
            aria-label="Masseria Dei Duchi home"
            className="absolute left-2 top-1/2 z-10 block w-[118px] -translate-y-1/2 overflow-visible transition-opacity hover:opacity-90 sm:left-4 sm:w-[145px] lg:w-[172px] xl:w-[190px]"
          >
            <img
              src="/media/brand-logo-masseria-3x.svg"
              alt="Masseria Dei Duchi"
              width="1536"
              height="1024"
              loading="eager"
              decoding="async"
              className="block h-auto w-full object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.22)]"
            />
          </a>

          <div className="hidden min-w-0 items-center justify-end gap-0.5 md:flex">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className={[
                  "rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors lg:px-3",
                  scrolled
                    ? "text-[#3f2a14]/80 hover:bg-[#f5ece0] hover:text-[#3f2a14]"
                    : "text-white/85 hover:bg-white/10 hover:text-white",
                ].join(" ")}
              >
                {label}
              </a>
            ))}

            <span className={["mx-2 h-4 w-px shrink-0", scrolled ? "bg-[#c8a97a]/40" : "bg-white/20"].join(" ")} aria-hidden />

            <a
              href="#contatti"
              className="inline-flex h-9 shrink-0 items-center rounded-full bg-[#8b1a1a] px-4 text-sm font-semibold text-white transition hover:-translate-y-px hover:bg-[#6d1414]"
            >
              Vieni al punto vendita
            </a>
          </div>

          <button
            type="button"
            className={[
              "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition md:hidden",
              scrolled || open ? "border-[#c8a97a]/40 bg-white/80 text-[#3f2a14]" : "border-white/30 text-white",
            ].join(" ")}
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </nav>

        {open && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Navigazione mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18 }}
            className="mx-4 mt-1 rounded-2xl border border-[#c8a97a]/30 bg-[#fffaf1]/97 p-3 shadow-2xl backdrop-blur md:hidden"
          >
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-[#3f2a14] transition hover:bg-[#f5ece0]"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <div className="my-2 h-px bg-[#c8a97a]/20" />
            <a
              href="#contatti"
              className="flex items-center justify-center rounded-full bg-[#8b1a1a] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#6d1414]"
              onClick={() => setOpen(false)}
            >
              Vieni al punto vendita
            </a>
          </motion.nav>
        )}
      </header>

      <main id="main-content">
        <section id="home" className="hero-section">
          <motion.div style={{ y: heroY }} className="absolute inset-0">
            <Image src={images.hero} alt="Masseria nel verde del Sannio con campi e pascoli" fill priority sizes="100vw" className="object-cover" />
          </motion.div>
          <div className="hero-overlay" />
          <div className="hero-content">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="max-w-5xl">
              <span className="hero-kicker">Caseificio Artigianale · Faicchio (BN)</span>
              <h1>Dal nostro allevamento alla tua tavola.</h1>
              <p>Una filiera corta che garantisce freschezza, autenticità e sapori genuini.</p>
              <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                <a href="#contatti" className="button-primary">
                  Vieni al punto vendita <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a href="#prodotti" className="button-secondary">
                  Scopri i prodotti
                </a>
              </div>
            </motion.div>
          </div>
          <a href="#storia" className="scroll-cue" aria-label="Scorri alla storia">
            <ChevronDown size={28} aria-hidden="true" />
          </a>
        </section>

        <section id="storia" className="section-pad bg-ivory">
          <div className="wide-grid items-center">
            <Reveal>
              <Photo src={images.family} alt="Famiglia in contesto agricolo, riferimento alla tradizione della masseria" className="aspect-[4/5]" sizes="(max-width: 1023px) 100vw, 50vw" />
            </Reveal>
            <Reveal className="story-copy">
              <span className="eyebrow">La nostra storia</span>
              <h2 className="section-title text-left">Una masseria di famiglia, un sapere tramandato nel tempo.</h2>
              <p>
                Masseria Dei Duchi nasce dal legame con la terra di Faicchio e con una lavorazione casearia fatta di gesti precisi, tempi rispettati e attenzione al latte.
                Ogni prodotto racconta cura degli animali, produzione propria e metodi artigianali custoditi in famiglia.
              </p>
              <p>
                La nostra idea di qualita e semplice: latte fresco, trasformazione diretta in masseria, pulizia nel lavoro e sapori riconoscibili. Formaggi genuini, pensati
                per chi cerca autenticita prima ancora dell&apos;apparenza.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="masseria" className="section-pad">
          <SectionTitle
            kicker="La Masseria"
            title="Campagna, stalle e laboratorio nello stesso racconto."
            text="Un luogo concreto, dove allevamento e caseificio convivono e rendono riconoscibile ogni forma di formaggio."
          />
          <div className="gallery-grid wide-container">
            {[
              [images.farm, "Esterni della masseria"],
              [images.pasture, "Pascoli nel territorio del Sannio"],
              [images.stable, "Stalle e cura degli animali"],
              [images.hay, "Fienili e campagna"]
            ].map(([src, alt], index) => (
              <Reveal key={alt} className={index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}>
                <Photo src={src} alt={alt} className="h-full min-h-[280px]" sizes={index === 0 ? "(max-width: 1023px) 100vw, 50vw" : "(max-width: 1023px) 100vw, 25vw"} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-pad bg-cream">
          <SectionTitle kicker="I nostri animali" title="Benessere animale, latte buono, prodotti sinceri." />
          <div className="wide-container grid gap-6 md:grid-cols-3">
            {animals.map(([title, text, src]) => (
              <Reveal key={title} className="animal-card">
                <Photo src={src} alt={title} className="aspect-[4/3]" sizes="(max-width: 767px) 100vw, 33vw" />
                <div className="p-6">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="lavorazione" className="section-pad bg-bordeaux text-white">
          <SectionTitle
            kicker="Come nascono i nostri formaggi"
            title="Dal latte appena munto alla vendita diretta."
            text="Una filiera corta, leggibile, fatta di controllo quotidiano e competenza artigianale."
          />
          <div className="wide-grid items-center">
            <Reveal>
              <div className="stacked-photos">
                <Photo src={images.lab} alt="Laboratorio caseario professionale" className="aspect-[5/4]" sizes="(max-width: 1023px) 100vw, 50vw" />
                <Photo src={images.aging} alt="Formaggi in stagionatura" className="small-overlap" sizes="(max-width: 1023px) 62vw, 31vw" />
              </div>
            </Reveal>
            <Reveal>
              <div className="timeline">
                {process.map(([title, text], index) => (
                  <div className="timeline-item" key={title}>
                    <span>{index + 1}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="prodotti" className="section-pad">
          <SectionTitle
            kicker="I nostri prodotti"
            title="Formaggi artigianali, senza listino: prima viene il racconto."
            text="Ogni prodotto cambia con latte, stagionalita e lavorazione. Il punto vendita resta il luogo migliore per scoprirli."
          />
          <div className="product-rail wide-container">
            {products.map(([name, description, src]) => (
              <Reveal key={name} className="product-card">
                <Photo src={src} alt={name} className="aspect-[5/4]" sizes="(max-width: 759px) 82vw, (max-width: 1179px) 50vw, 20vw" />
                <div className="p-6">
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="wide-container mt-10 flex justify-center">
            <a href="#punto-vendita" className="button-primary">
              Scegli in masseria <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section id="punto-vendita" className="section-pad bg-ivory">
          <div className="wide-grid items-center">
            <Reveal className="order-2 lg:order-1">
              <span className="eyebrow">Il punto vendita</span>
              <h2 className="section-title text-left">Acquisti direttamente dove il latte diventa formaggio.</h2>
              <p className="section-lead text-left">
                Nel punto vendita scegli i formaggi direttamente in masseria, scopri quali prodotti sono disponibili quel giorno e porti a casa prodotti appena realizzati o stagionati con cura.
              </p>
              <div className="info-row">
                <Clock size={22} aria-hidden="true" />
                <span>Disponibilita variabile: chiama o scrivi su WhatsApp prima di venire.</span>
              </div>
              <a href="#contatti" className="button-primary mt-8 w-fit">
                Apri contatti e mappa <ArrowRight size={18} aria-hidden="true" />
              </a>
            </Reveal>
            <Reveal className="order-1 lg:order-2">
              <Photo src={images.shop} alt="Punto vendita con banco prodotti e accoglienza" className="aspect-[5/4]" sizes="(max-width: 1023px) 100vw, 50vw" />
            </Reveal>
          </div>
        </section>

        <section className="section-pad">
          <SectionTitle kicker="Perche scegliere noi" title="Qualita che si vede nella filiera." />
          <div className="wide-container grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map(([text, Icon]) => (
              <Reveal key={text} className="reason-card">
                <Icon size={30} aria-hidden="true" />
                <h3>{text}</h3>
                <Check className="reason-check" size={22} aria-hidden="true" />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-pad bg-cream">
          <SectionTitle kicker="Gallery" title="Dettagli di masseria, laboratorio e prodotti." />
          <div className="masonry wide-container">
            {gallery.map(([src, alt], index) => (
              <Reveal key={`${alt}-${index}`} className={index % 3 === 0 ? "masonry-tall" : ""}>
                <Photo src={src} alt={alt} className="h-full min-h-[260px]" sizes="(max-width: 759px) 100vw, (max-width: 1179px) 50vw, 25vw" />
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contatti" className="section-pad bg-ivory">
          <div className="wide-grid items-stretch">
            <Reveal className="contact-panel">
              <span className="eyebrow">Dove siamo</span>
              <h2 className="section-title text-left">Via Odi 20, Faicchio (BN).</h2>
              <p>Raggiungi il punto vendita in masseria. Per orari del giorno e disponibilita dei prodotti, chiama o scrivi prima di partire.</p>
              <div className="contact-list">
                <a className="contact-card contact-card-primary" href="https://wa.me/393475320807?text=Ciao,%20vorrei%20avere%20informazioni%20sui%20vostri%20prodotti." aria-label="Scrivici su WhatsApp">
                  <span className="contact-card-icon"><WhatsAppLogo /></span>
                  <span className="contact-card-text">
                    <strong>Scrivici su WhatsApp</strong>
                    <small>Rispondiamo rapidamente.</small>
                  </span>
                </a>
                <a className="contact-card" href="tel:+393475320807" aria-label="Chiama il numero 347 5320807">
                  <span className="contact-card-icon"><Phone size={20} aria-hidden="true" /></span>
                  <span className="contact-card-text">
                    <strong>Chiama</strong>
                    <small>347 5320807 · 345 3429594</small>
                  </span>
                </a>
                <a className="contact-card" href={availabilityHref} aria-label="Chiedi orari e disponibilita dei prodotti su WhatsApp">
                  <span className="contact-card-icon"><Clock size={20} aria-hidden="true" /></span>
                  <span className="contact-card-text">
                    <strong>Orari e disponibilita</strong>
                    <small>Chiedi prima di partire.</small>
                  </span>
                </a>
                <a className="contact-card" href="mailto:masseria.deiduchi@gmail.com" aria-label="Invia email a masseria.deiduchi@gmail.com">
                  <span className="contact-card-icon"><Mail size={20} aria-hidden="true" /></span>
                  <span className="contact-card-text">
                    <strong>Email</strong>
                    <small>masseria.deiduchi@gmail.com</small>
                  </span>
                </a>
                <a className="contact-card" href={instagramHref} target="_blank" rel="noopener noreferrer" aria-label="Apri Instagram Masseria Dei Duchi in una nuova scheda">
                  <span className="contact-card-icon"><InstagramLogo /></span>
                  <span className="contact-card-text">
                    <strong>Instagram</strong>
                    <small>Seguici per vedere la vita in masseria.</small>
                  </span>
                </a>
                <a className="contact-card" href={facebookHref} target="_blank" rel="noopener noreferrer" aria-label="Apri Facebook Masseria Dei Duchi in una nuova scheda">
                  <span className="contact-card-icon"><FacebookLogo /></span>
                  <span className="contact-card-text">
                    <strong>Facebook</strong>
                    <small>Resta aggiornato sulle novità.</small>
                  </span>
                </a>
              </div>
              <a className="button-primary mt-8 w-fit" href={googleMapsHref} target="_blank" rel="noopener noreferrer" aria-label="Apri posizione della Masseria Dei Duchi su Google Maps in una nuova scheda">
                Apri su Google Maps <MapPin size={18} aria-hidden="true" />
              </a>
            </Reveal>
            <Reveal className="map-card">
              <iframe
                title="Mappa Masseria Dei Duchi Via Odi 20 Faicchio BN"
                src={googleMapsEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wide-container grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Image src="/media/footer-logo-masseria-biondi.png" alt="Logo Masseria Dei Duchi" width={220} height={220} className="mb-5 aspect-square w-44 max-w-full rounded-full bg-white object-contain sm:w-52" />
            <p>Tradizione casearia, latte dei nostri allevamenti e vendita diretta nel cuore del Sannio.</p>
          </div>
          <div>
            <h3>Contatti</h3>
            <address className="not-italic">
              <p>Via Odi 20, Faicchio (BN)</p>
              <p>347 5320807 · 345 3429594</p>
              <p>masseria.deiduchi@gmail.com</p>
            </address>
          </div>
          <div>
            <h3>Seguici</h3>
            <p>Facebook · Instagram</p>
            <p className="copyright">© 2026 Masseria Dei Duchi. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
