# Masseria Dei Duchi

Sito Next.js per Caseificio Masseria Dei Duchi, ottimizzato per Vercel.

## Struttura

- `app/page.tsx`: home page e sezioni principali.
- `app/layout.tsx`: metadata, viewport, preconnect e JSON-LD.
- `app/globals.css`: stile globale e token colore.
- `app/navbar-scroll-logo.css`: animazione logo navbar.
- `site.config.js`: dati condivisi usati da sitemap, robots e pagine legali.
- `lib/siteData.ts`: export tipizzato della configurazione.
- `public/media/`: asset attualmente usati dal sito.

## Avvio locale

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
