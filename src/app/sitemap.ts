import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/structured-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/sample-chapter`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
