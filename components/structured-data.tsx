import { organizationSchema, websiteSchema } from '@/lib/seo';

// Schema para servicios específicos
export const servicesSchema = {
   '@context': 'https://schema.org',
   '@type': 'Service',
   name: 'Servicios de Diseño UX/UI y Desarrollo Frontend',
   description:
      'Servicios profesionales de diseño de experiencia de usuario, desarrollo frontend y automatización de procesos.',
   provider: {
      '@type': 'Person',
      name: 'Agustín Aimale',
   },
   serviceType: 'Web Development Services',
   areaServed: {
      '@type': 'Country',
      name: 'Argentina',
   },
   hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Desarrollo Web',
      itemListElement: [
         {
            '@type': 'Offer',
            itemOffered: {
               '@type': 'Service',
               name: 'Diseño UX/UI',
               description:
                  'Creación de experiencias digitales centradas en el usuario',
            },
         },
         {
            '@type': 'Offer',
            itemOffered: {
               '@type': 'Service',
               name: 'Desarrollo Frontend',
               description: 'Desarrollo de interfaces modernas y responsivas',
            },
         },
         {
            '@type': 'Offer',
            itemOffered: {
               '@type': 'Service',
               name: 'Automatización',
               description: 'Automatización de procesos y flujos de trabajo',
            },
         },
         {
            '@type': 'Offer',
            itemOffered: {
               '@type': 'Service',
               name: 'Consultoría de IA',
               description:
                  'Integración de soluciones de inteligencia artificial',
            },
         },
      ],
   },
};

// Schema para FAQ
export const faqSchema = {
   '@context': 'https://schema.org',
   '@type': 'FAQPage',
   mainEntity: [
      {
         '@type': 'Question',
         name: '¿Qué servicios ofreces?',
         acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ofrezco servicios de diseño UX/UI, desarrollo frontend, automatización de procesos y consultoría de IA aplicada.',
         },
      },
      {
         '@type': 'Question',
         name: '¿Cuánto cuesta un proyecto?',
         acceptedAnswer: {
            '@type': 'Answer',
            text: 'Los precios varían según el alcance del proyecto. Puedes ver los precios detallados en la sección de precios o contactarme para una cotización personalizada.',
         },
      },
      {
         '@type': 'Question',
         name: '¿Trabajas de forma remota?',
         acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, trabajo tanto de forma remota como presencial en Argentina.',
         },
      },
      {
         '@type': 'Question',
         name: '¿Qué tecnologías usas?',
         acceptedAnswer: {
            '@type': 'Answer',
            text: 'Trabajo principalmente con Vue.js, React, Next.js, Node.js, TypeScript, y herramientas de diseño como Figma.',
         },
      },
   ],
};

// Schema para precios
export const pricingSchema = {
   '@context': 'https://schema.org',
   '@type': 'Product',
   name: 'Servicios de Desarrollo Web',
   description:
      'Servicios profesionales de diseño UX/UI, desarrollo frontend y automatización',
   brand: {
      '@type': 'Brand',
      name: 'Agustín Aimale',
   },
   offers: [
      {
         '@type': 'Offer',
         name: 'Diseño UX/UI - Básico',
         description: 'Perfecto para MVP o proyectos pequeños',
         price: '800',
         priceCurrency: 'USD',
         availability: 'https://schema.org/InStock',
      },
      {
         '@type': 'Offer',
         name: 'Diseño UX/UI - Completo',
         description: 'Solución completa con investigación',
         price: '1500',
         priceCurrency: 'USD',
         availability: 'https://schema.org/InStock',
      },
      {
         '@type': 'Offer',
         name: 'Desarrollo Frontend - Básico',
         description: 'Desarrollo de páginas estáticas',
         price: '1200',
         priceCurrency: 'USD',
         availability: 'https://schema.org/InStock',
      },
   ],
};

// Componente para renderizar structured data
interface StructuredDataProps {
   data: any;
}

export function StructuredData({ data }: StructuredDataProps) {
   return (
      <script
         type="application/ld+json"
         dangerouslySetInnerHTML={{
            __html: JSON.stringify(data),
         }}
      />
   );
}
