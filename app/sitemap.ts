import type { MetadataRoute } from "next";
import { siteData } from "@/lib/siteData";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteData.seo.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteData.seo.siteUrl}${siteData.footer.privacyHref}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${siteData.seo.siteUrl}${siteData.footer.cookieHref}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3
    }
  ];
}
