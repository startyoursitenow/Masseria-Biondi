# Local Business Template

Template Next.js, TypeScript e Tailwind CSS per siti di attivita locali.

## Struttura

- `site.config.js`: unica fonte per testi, colori, contatti, SEO, servizi, recensioni, FAQ e immagini.
- `lib/siteData.ts`: tipi, link WhatsApp/telefono/email e schema LocalBusiness.
- `components/`: sezioni modulari riutilizzabili.
- `app/`: layout, home, sitemap e robots.
- `public/media/`: logo e immagini placeholder.

## Cambio settore in meno di 5 minuti

1. Apri `site.config.js`.
2. Cambia `business.name`, `slogan`, contatti e indirizzo.
3. Aggiorna `seo.title`, `seo.description`, `seo.siteUrl` e keyword.
4. Sostituisci `services.items`, `reasons.items`, `reviews.items` e `faq.items`.
5. Cambia immagini in `hero.media` e `gallery.items`.
6. Aggiorna colori in `brand.colors` se serve.

## Esempi settore

- Ottica: servizi = controllo vista, lenti progressive, montature, assistenza.
- B&B: servizi = camere, colazione, transfer, esperienze.
- Centro estetico: servizi = trattamenti viso, corpo, laser, consulenza.
- Immobiliare: servizi = vendita, affitto, valutazione, gestione visite.
- Ristorante: servizi = menu, prenotazioni, eventi, delivery.

## Avvio locale

```bash
npm install
npm run dev
```

## Deploy Vercel

Importa repository su Vercel e imposta framework `Next.js`. Nessuna configurazione extra richiesta.
