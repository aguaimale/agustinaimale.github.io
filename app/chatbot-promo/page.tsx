import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { ChatbotPromoPage } from '@/components/chatbot-promo-page';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
   title: '🤖 Chatbot de IA para WhatsApp',
   description:
      'Automatiza tu atención al cliente con un chatbot inteligente. Integración WhatsApp Business, web y sistemas. 50% descuento por lanzamiento.',
   keywords: [
      'chatbot IA',
      'whatsapp business chatbot',
      'automatización atención cliente',
      'chatbot Argentina',
      'IA whatsapp',
      'bot inteligente',
      'chatbot desarrollo',
      'automatización mensajes',
      'chatbot web',
      'asistente virtual',
   ],
   path: '/chatbot-promo',
});

export default function ChatbotPromo() {
   return (
      <>
         <Navbar />
         <main className="min-h-screen">
            <ChatbotPromoPage />
         </main>
      </>
   );
}
