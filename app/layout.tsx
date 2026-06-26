import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap"
});

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
    images: [{ url: "/media/logo-masseria-biondi.png", alt: "Masseria Dei Duchi" }]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body className={`${cormorant.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
