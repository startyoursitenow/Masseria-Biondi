import type { Metadata } from "next";
import "./globals.css";
import "./font-vars.css";
import "./navbar-scroll-logo.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
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
  openGraph: {
    title: "Caseificio Artigianale Masseria Dei Duchi | Faicchio BN",
    description: "Formaggi artigianali, latte dei nostri allevamenti e vendita diretta nel cuore del Sannio.",
    url: "http://localhost:3000",
    siteName: "Masseria Dei Duchi",
    locale: "it_IT",
    type: "website",
    images: [{ url: "/media/masseria-dei-duchi-logo.png", alt: "Masseria Dei Duchi" }]
  },
  icons: {
    icon: "/media/masseria-dei-duchi-logo.png",
    apple: "/media/masseria-dei-duchi-logo.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
