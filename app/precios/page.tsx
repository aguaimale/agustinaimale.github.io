import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { PricingPage } from '@/components/pricing-page';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
   title: 'Precios por Servicio',
   description:
      'Precios transparentes por servicio. Diseño UX/UI, desarrollo frontend y automatización. Sin sorpresas, sin costos ocultos. Servicios profesionales en Argentina.',
   keywords: [
      'precios diseño UX UI',
      'precios desarrollo web',
      'precios automatización',
      'servicios web Argentina',
      'freelancer UX UI',
      'desarrollador frontend precios',
      'diseño web precios',
      'automatización precios',
   ],
   path: '/precios',
});

export default function Precios() {
   return (
      <>
         <Navbar />
         <main className="min-h-screen">
            <PricingPage />
         </main>
      </>
   );
}
