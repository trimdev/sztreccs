import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { USE_CASES } from "@/lib/usecases";

const HUB_PATH = "/felhasznalasi-teruletek";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE.modifiedDate);

  const langs = (path: string) => ({
    languages: {
      hu: `${SITE.url}${path}`,
      "x-default": `${SITE.url}${path}`,
    },
  });

  return [
    {
      url: `${SITE.url}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: langs("/"),
    },
    {
      url: `${SITE.url}${HUB_PATH}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: langs(HUB_PATH),
    },
    ...USE_CASES.map((u) => ({
      url: `${SITE.url}${HUB_PATH}/${u.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: langs(`${HUB_PATH}/${u.slug}`),
    })),
  ];
}
