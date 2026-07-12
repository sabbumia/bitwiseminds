import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bitwiseminds.com";

// Static routes with their relative priority
const routes: Array<{ path: string; priority: number; changeFreq: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
  { path: "/",                priority: 1.0,  changeFreq: "weekly"  },
  { path: "/about",           priority: 0.9,  changeFreq: "monthly" },
  { path: "/service",         priority: 0.9,  changeFreq: "monthly" },
  { path: "/service-details", priority: 0.7,  changeFreq: "monthly" },
  { path: "/contact",         priority: 0.9,  changeFreq: "monthly" },
  { path: "/team",            priority: 0.7,  changeFreq: "monthly" },
  { path: "/team-details",    priority: 0.6,  changeFreq: "monthly" },
  { path: "/gallery",         priority: 0.7,  changeFreq: "monthly" },
  { path: "/testimonial",     priority: 0.7,  changeFreq: "monthly" },
  { path: "/faq",             priority: 0.7,  changeFreq: "monthly" },
  { path: "/price",           priority: 0.8,  changeFreq: "monthly" },
  { path: "/shop",            priority: 0.7,  changeFreq: "weekly"  },
  { path: "/shop-details",    priority: 0.6,  changeFreq: "weekly"  },
  { path: "/blog",            priority: 0.8,  changeFreq: "weekly"  },
  { path: "/blog-details",    priority: 0.6,  changeFreq: "weekly"  },
  { path: "/blog-2",          priority: 0.5,  changeFreq: "weekly"  },
  { path: "/blog-3",          priority: 0.5,  changeFreq: "weekly"  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFreq }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: changeFreq,
    priority,
  }));
}
