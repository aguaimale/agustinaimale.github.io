import { MetadataRoute } from 'next';
import { sitemapConfig } from '@/lib/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
   return sitemapConfig.routes.map((route) => ({
      url: `${sitemapConfig.hostname}${route.url}`,
      lastModified: route.lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
   }));
}
