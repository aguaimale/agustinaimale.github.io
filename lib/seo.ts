import type { Metadata } from 'next';

// Configuración SEO base
export const baseSEO = {
   metadataBase: new URL('https://agustinaimale.github.io'), // URL de GitHub Pages
   title: {
      default: 'Agustín Aimale — Diseñador UX/UI & Desarrollador Frontend',
      template: '%s — Agustín Aimale',
   },
   description:
      'Diseño, desarrollo y pienso productos digitales con cabeza de negocio y alma de diseñador. Servicios de UX/UI, desarrollo frontend, automatización e IA aplicada.',
   keywords: [
      'diseño UX',
      'diseño UI',
      'desarrollador frontend',
      'React',
      'Vue.js',
      'Next.js',
      'automatización',
      'chatbot IA',
      'desarrollador web',
      'diseñador web',
      'Argentina',
      'desarrollo web',
      'UX/UI Argentina',
      'freelancer',
      'consultor digital',
   ],
   authors: [{ name: 'Agustín Aimale' }],
   creator: 'Agustín Aimale',
   publisher: 'Agustín Aimale',
   robots: 'index, follow',
   openGraph: {
      type: 'website',
      locale: 'es_AR',
      url: 'https://agustinaimale.github.io',
      siteName: 'Agustín Aimale',
      title: 'Agustín Aimale — Diseñador UX/UI & Desarrollador',
      description:
         'Diseño, desarrollo y pienso productos digitales con cabeza de negocio y alma de diseñador.',
      images: [
         {
            url: '/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Agustín Aimale - Diseñador UX/UI & Desarrollador',
         },
      ],
   },
   twitter: {
      card: 'summary_large_image',
      title: 'Agustín Aimale — Diseñador UX/UI & Desarrollador',
      description:
         'Diseño, desarrollo y pienso productos digitales con cabeza de negocio y alma de diseñador.',
      images: ['/og-image.jpg'],
      creator: '@agustinaimale', // Cambiar por tu Twitter real
   },
   alternates: {
      canonical: 'https://agustinaimale.github.io',
   },
   verification: {
      google: 'your-google-verification-code', // Agregar cuando tengas Google Search Console
      // yandex: 'your-yandex-verification-code',
      // yahoo: 'your-yahoo-verification-code',
   },
};

// Función helper para generar metadata por página
export function generatePageMetadata({
   title,
   description,
   keywords = [],
   path = '',
   images = [],
}: {
   title: string;
   description: string;
   keywords?: string[];
   path?: string;
   images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
   }>;
}): Metadata {
   const url = `${baseSEO.metadataBase}${path}`;
   const fullTitle = title.includes('—') ? title : `${title} — Agustín Aimale`;

   return {
      title: fullTitle,
      description,
      keywords: [...baseSEO.keywords, ...keywords],
      authors: baseSEO.authors,
      creator: baseSEO.creator,
      publisher: baseSEO.publisher,
      robots: baseSEO.robots,
      openGraph: {
         ...baseSEO.openGraph,
         url,
         title: fullTitle,
         description,
         images: images.length > 0 ? images : baseSEO.openGraph.images,
      },
      twitter: {
         ...baseSEO.twitter,
         title: fullTitle,
         description,
         images:
            images.length > 0
               ? images.map((img) => img.url)
               : baseSEO.twitter.images,
      },
      alternates: {
         canonical: url,
      },
   };
}

// Estructura de datos para Schema.org
export const organizationSchema = {
   '@context': 'https://schema.org',
   '@type': 'Person',
   name: 'Agustín Aimale',
   jobTitle: 'Diseñador UX/UI & Desarrollador Frontend',
   description:
      'Diseño, desarrollo y pienso productos digitales con cabeza de negocio y alma de diseñador.',
   url: 'https://agustinaimale.github.io',
   image: 'https://agustinaimale.github.io/profile.jpg',
   sameAs: [
      'https://linkedin.com/in/agustinaimale',
      'https://behance.net/agustinaimale',
      'https://instagram.com/agustinaimale',
   ],
   address: {
      '@type': 'PostalAddress',
      addressCountry: 'AR',
      addressRegion: 'Argentina',
   },
   knowsAbout: [
      'User Experience Design',
      'User Interface Design',
      'Frontend Development',
      'React',
      'Vue.js',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Automation',
      'Artificial Intelligence',
      'Web Development',
   ],
   offers: {
      '@type': 'Offer',
      name: 'Servicios de Diseño UX/UI y Desarrollo Frontend',
      description: 'Servicios profesionales de diseño y desarrollo web',
      category: 'Web Development Services',
      areaServed: 'Argentina',
   },
};

export const websiteSchema = {
   '@context': 'https://schema.org',
   '@type': 'WebSite',
   name: 'Agustín Aimale',
   url: 'https://agustinaimale.github.io',
   description: 'Portfolio y servicios de diseño UX/UI y desarrollo frontend',
   author: {
      '@type': 'Person',
      name: 'Agustín Aimale',
   },
   potentialAction: {
      '@type': 'SearchAction',
      target: 'https://agustinaimale.github.io/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
   },
};

// Configuración de sitemap
export const sitemapConfig = {
   hostname: 'https://agustinaimale.github.io',
   routes: [
      {
         url: '/',
         lastModified: new Date(),
         changeFrequency: 'monthly' as const,
         priority: 1,
      },
      {
         url: '/precios',
         lastModified: new Date(),
         changeFrequency: 'monthly' as const,
         priority: 0.8,
      },
      {
         url: '/promo',
         lastModified: new Date(),
         changeFrequency: 'weekly' as const,
         priority: 0.7,
      },
      {
         url: '/chatbot-promo',
         lastModified: new Date(),
         changeFrequency: 'weekly' as const,
         priority: 0.7,
      },
   ],
};
