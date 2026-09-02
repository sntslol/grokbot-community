import type { MetadataRoute } from "next";
import { listNewsPosts } from "@/lib/data";
import { site } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await listNewsPosts();
  const now = new Date();
  return [
    { url: site.url, lastModified: now },
    { url: `${site.url}/news`, lastModified: now },
    { url: `${site.url}/guides`, lastModified: now },
    { url: `${site.url}/meetups`, lastModified: now },
    ...posts.map((post) => ({
      url: `${site.url}/news/${post.slug}`,
      lastModified: new Date(post.date),
    })),
  ];
}
