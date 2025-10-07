import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { PromoPage } from '@/components/promo-page';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
   title: '🚀 OFERTA ESPECIAL - Landing Page Completa',
   description:
      'Oferta limitada: Landing page profesional completa por solo $299. Diseño, desarrollo y optimización incluidos. ¡Aprovecha antes de que se agote!',
   keywords: [
      'landing page oferta',
      'oferta especial diseño web',
      'landing page Argentina',
      'diseño web promoción',
      'desarrollo web oferta',
      'landing page profesional',
      'diseño UX UI oferta',
      'página web completa',
   ],
   path: '/promo',
});

export default function Promo() {
   return (
      <>
         <Navbar />
         <main className="min-h-screen">
            <PromoPage />
         </main>
      </>
   );
}
