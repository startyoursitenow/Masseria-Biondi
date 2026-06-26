const siteConfig = {
  business: {
    name: "Nome Attivita",
    slogan: "Soluzioni locali curate, veloci e su misura",
    description: "Template premium per attivita locali con sezioni modulari, CTA chiare, SEO locale e contenuti facili da personalizzare.",
    logo: "/media/logo-template.svg",
    whatsapp: "+390000000000",
    phone: "+39 000 000 0000",
    email: "info@nomeattivita.it",
    address: "Via Esempio 10, 00100 Roma RM",
    city: "Roma",
    region: "RM",
    country: "IT",
    openingHours: "Mo-Sa 09:00-19:00",
    priceRange: "$$",
    social: [
      { label: "Instagram", href: "https://www.instagram.com/" },
      { label: "Facebook", href: "https://www.facebook.com/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/" }
    ]
  },
  brand: {
    colors: {
      brand50: "#f5f7f2",
      brand100: "#e7eadf",
      brand500: "#74845c",
      brand600: "#566445",
      brand700: "#3f4d36",
      brand900: "#182112",
      accent: "#c87b4f",
      ink: "#172018",
      muted: "#65705f",
      line: "#dde4d6",
      surface: "#fbfcf8"
    }
  },
  seo: {
    title: "Nome Attivita | Servizi locali professionali",
    description: "Sito professionale per attivita locali: servizi, recensioni, galleria, FAQ, contatti e CTA WhatsApp.",
    siteUrl: "https://www.nomeattivita.it",
    keywords: ["attivita locale", "servizi professionali", "Roma", "preventivo", "WhatsApp"],
    ogImage: "/media/hero-template.svg"
  },
  navigation: {
    links: [
      { label: "Soluzioni", href: "#soluzione" },
      { label: "Servizi", href: "#servizi" },
      { label: "Galleria", href: "#galleria" },
      { label: "Recensioni", href: "#recensioni" },
      { label: "FAQ", href: "#faq" }
    ],
    ctaLabel: "WhatsApp",
    menuOpenLabel: "Apri menu",
    menuCloseLabel: "Chiudi menu"
  },
  hero: {
    eyebrow: "Template locale premium",
    headline: "Trasforma visite locali in richieste concrete",
    subtitle: "Una struttura riutilizzabile per ottiche, B&B, centri estetici, ristoranti, studi, palestre e attivita locali che vogliono presentarsi meglio e ricevere piu contatti.",
    primaryCta: "Richiedi preventivo",
    secondaryCta: "Scopri servizi",
    media: {
      type: "image",
      src: "/media/hero-template.svg",
      alt: "Ambiente professionale per attivita locale"
    },
    stats: [
      { value: "95+", label: "target Lighthouse" },
      { value: "5 min", label: "cambio settore" },
      { value: "100%", label: "mobile first" }
    ]
  },
  problems: {
    eyebrow: "Problemi comuni",
    title: "Dove molti siti locali perdono clienti",
    items: [
      { title: "Messaggio poco chiaro", text: "Il visitatore non capisce subito cosa offri e perche dovrebbe contattarti." },
      { title: "CTA deboli", text: "Telefono, WhatsApp e richiesta preventivo sono nascosti o poco convincenti." },
      { title: "Mobile trascurato", text: "Card, menu e immagini non sono pensati per uso rapido da smartphone." },
      { title: "SEO locale assente", text: "Metadata, schema e contenuti non aiutano Google a capire attivita e zona." }
    ]
  },
  solution: {
    eyebrow: "Soluzione",
    title: "Una base premium pronta da adattare al tuo settore",
    text: "Il template separa contenuti e interfaccia: cambi dati, colori, servizi, foto e testi nel file centrale senza riscrivere componenti.",
    benefits: [
      "Percorso utente orientato alla richiesta contatto",
      "Sezioni modulari riordinabili o disattivabili",
      "Struttura SEO locale gia predisposta",
      "Design sobrio, moderno e adatto a piu categorie"
    ]
  },
  services: {
    eyebrow: "Servizi",
    title: "Card dinamiche per offerte e reparti",
    items: [
      { title: "Servizio principale", text: "Descrivi offerta piu importante, ideale per generare contatti qualificati.", icon: "sparkles" },
      { title: "Consulenza", text: "Spiega come accompagni cliente nella scelta o nella prenotazione.", icon: "badge" },
      { title: "Soluzioni su misura", text: "Mostra personalizzazione, pacchetti, trattamenti o immobili in modo chiaro.", icon: "settings" },
      { title: "Assistenza", text: "Rassicura su supporto, post vendita, follow-up o gestione appuntamenti.", icon: "headphones" }
    ]
  },
  reasons: {
    eyebrow: "Perche scegliere noi",
    title: "Fiducia visibile prima del contatto",
    items: [
      { value: "10+", label: "anni di esperienza", text: "Adatta numero e testo alla tua reale storia." },
      { value: "4.9/5", label: "valutazione media", text: "Mostra riprova sociale in modo immediato." },
      { value: "24h", label: "risposta rapida", text: "Riduci attrito e aumenta probabilita di contatto." }
    ]
  },
  gallery: {
    eyebrow: "Portfolio",
    title: "Galleria riutilizzabile per immagini e video",
    items: [
      { type: "image", src: "/media/gallery-01.svg", alt: "Dettaglio spazio o prodotto", title: "Spazio curato" },
      { type: "image", src: "/media/gallery-02.svg", alt: "Servizio o consulenza", title: "Esperienza cliente" },
      { type: "image", src: "/media/gallery-03.svg", alt: "Risultato o ambiente", title: "Risultati visibili" }
    ]
  },
  reviews: {
    eyebrow: "Recensioni",
    title: "Cosa dicono i clienti",
    items: [
      { name: "Cliente A", role: "Cliente verificato", rating: 5, text: "Esperienza chiara, veloce e professionale. Ho trovato subito informazioni e contatti." },
      { name: "Cliente B", role: "Cliente locale", rating: 5, text: "Sito elegante, facile da navigare da telefono e utile per decidere in pochi minuti." },
      { name: "Cliente C", role: "Nuovo cliente", rating: 5, text: "Le recensioni, i servizi e la galleria mi hanno dato fiducia prima di chiamare." }
    ]
  },
  faq: {
    eyebrow: "FAQ",
    title: "Domande frequenti",
    items: [
      { question: "Posso usare il template per settori diversi?", answer: "Si. Cambia dati, servizi, immagini, colori e testi nel file centrale senza modificare componenti." },
      { question: "Come modifico numero WhatsApp e contatti?", answer: "Aggiorna i campi whatsapp, phone, email e address in site.config.js." },
      { question: "Il sito e pronto per Vercel?", answer: "Si. Il progetto usa Next.js, TypeScript e Tailwind CSS con struttura compatibile Vercel." },
      { question: "Posso aggiungere video alla galleria?", answer: "Si. Usa item con type video e src del file o URL supportato." }
    ]
  },
  finalCta: {
    eyebrow: "Contatto rapido",
    title: "Pronto per ricevere richieste da mobile",
    text: "CTA finali grandi, chiare e adatte a WhatsApp, telefono o preventivo.",
    whatsappLabel: "Scrivi su WhatsApp",
    phoneLabel: "Chiama ora",
    quoteLabel: "Richiedi preventivo"
  },
  footer: {
    copyright: "Tutti i diritti riservati",
    privacyLabel: "Privacy Policy",
    privacyHref: "/privacy-policy",
    cookieLabel: "Cookie Policy",
    cookieHref: "/cookie-policy"
  },
  legalPages: {
    privacy: {
      title: "Privacy Policy",
      text: "Inserisci qui informativa privacy completa, titolare del trattamento, finalita, basi giuridiche, tempi di conservazione e diritti degli utenti."
    },
    cookie: {
      title: "Cookie Policy",
      text: "Inserisci qui descrizione cookie tecnici, analitici, marketing, gestione consenso e modalita di modifica preferenze."
    }
  }
};

module.exports = siteConfig;
