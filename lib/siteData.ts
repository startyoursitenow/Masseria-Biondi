import config from "@/site.config";

export type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
  title?: string;
};

export type SiteConfig = typeof config;

export const siteData = config as SiteConfig;

export const whatsappHref = `https://wa.me/${siteData.business.whatsapp.replace(/\D/g, "")}`;
export const phoneHref = `tel:${siteData.business.phone.replace(/\s/g, "")}`;
export const mailHref = `mailto:${siteData.business.email}`;

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${siteData.seo.siteUrl}${path}`;
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteData.business.name,
    description: siteData.business.description,
    image: absoluteUrl(siteData.seo.ogImage),
    logo: absoluteUrl(siteData.business.logo),
    url: siteData.seo.siteUrl,
    telephone: siteData.business.phone,
    email: siteData.business.email,
    priceRange: siteData.business.priceRange,
    openingHours: siteData.business.openingHours,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteData.business.address,
      addressLocality: siteData.business.city,
      addressRegion: siteData.business.region,
      addressCountry: siteData.business.country
    },
    sameAs: siteData.business.social.map((item) => item.href)
  };
}
