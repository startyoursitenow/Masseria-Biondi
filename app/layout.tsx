import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./font-vars.css";
import "./navbar-scroll-logo.css";

const siteUrl = "https://masseria-biondi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Caseificio Artigianale Masseria Dei Duchi | Faicchio BN",
  description: "Produzione artigianale di caciocavallo, ricotte, mozzarelle e formaggi tipici nel cuore del Sannio.",
  keywords: [
    "Masseria Dei Duchi",
    "caseificio artigianale Faicchio",
    "formaggi artigianali Sannio",
    "caciocavallo",
    "ricotta fresca",
    "mozzarella"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Caseificio Artigianale Masseria Dei Duchi | Faicchio BN",
    description: "Formaggi artigianali, latte dei nostri allevamenti e vendita diretta nel cuore del Sannio.",
    url: siteUrl,
    siteName: "Masseria Dei Duchi",
    locale: "it_IT",
    type: "website",
    images: [{ url: "/media/biglietto-masseria-dei-duchi.jpeg", width: 1073, height: 1600, alt: "Caseificio Masseria Dei Duchi" }]
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/media/brand-logo-masseria-3x.svg",
    apple: "/media/footer-logo-masseria-biondi.png"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#641016"
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Caseificio Masseria Dei Duchi",
  alternateName: "Masseria Dei Duchi",
  description: "Caseificio artigianale a Faicchio con produzione di caciocavallo, ricotte, mozzarelle e formaggi tipici.",
  image: `${siteUrl}/media/biglietto-masseria-dei-duchi.jpeg`,
  logo: `${siteUrl}/media/footer-logo-masseria-biondi.png`,
  url: siteUrl,
  telephone: "+39 347 5320807",
  email: "masseria.deiduchi@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Odi 20",
    addressLocality: "Faicchio",
    addressRegion: "BN",
    postalCode: "82030",
    addressCountry: "IT"
  },
  priceRange: "$$"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://www.google.com" />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
        {children}
      </body>
    </html>
  );
}
