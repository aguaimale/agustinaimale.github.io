'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Bot, ArrowRight, Clock, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedGradient } from './animated-gradient';

export function RotatingPromoBanner() {
   const [currentBanner, setCurrentBanner] = useState(0);
   const [isVisible, setIsVisible] = useState(true);

   const banners = [
      {
         id: 'landing',
         icon: Gift,
         badge: 'Oferta limitada',
         title: 'Landing Page Completa',
         subtitle: 'por Solo',
         originalPrice: '$1,200',
         discountPrice: '$299',
         description:
            'Landing page profesional completa con diseño, desarrollo y optimización.',
         discount: '75% de descuento',
         benefits: [
            'Diseño profesional',
            'Desarrollo completo',
            'SEO optimizado',
            'Mobile responsive',
            'Bonuses incluidos',
         ],
         cta: 'GET BONUS!',
         link: '/agustinaimale.github.io/promo/',
         color: 'text-accent',
      },
      {
         id: 'chatbot',
         icon: Bot,
         badge: 'Automatización IA',
         title: 'Chatbot de IA',
         subtitle: 'que automatice tu atención?',
         originalPrice: '$800',
         discountPrice: '$399',
         description:
            'Chatbot inteligente para WhatsApp, web o sistemas internos.',
         discount: '50% de descuento',
         benefits: [
            'WhatsApp Business',
            'Integración web',
            'Base de conocimientos',
            'Respuestas inteligentes',
            'Soporte 24/7',
         ],
         cta: 'AUTOMATIZAR AHORA!',
         link: '/agustinaimale.github.io/chatbot-promo/',
         color: 'text-accent',
      },
   ];

   // Rotar banners cada 8 segundos
   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentBanner((prev) => (prev + 1) % banners.length);
      }, 8000);

      return () => clearInterval(interval);
   }, [banners.length]);

   const currentBannerData = banners[currentBanner];

   return (
      <section className="relative py-16 px-6 bg-gradient-to-br from-accent/5 via-background to-accent/3">
         <AnimatedGradient
            variant="section"
            className="absolute inset-0 opacity-40"
         />

         <motion.div
            className="max-w-4xl mx-auto text-center space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
         >
            {/* Header */}
            <motion.div
               className="space-y-4"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               viewport={{ once: true }}
            >
               <motion.div
                  className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
               >
                  <currentBannerData.icon className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-accent">
                     {currentBannerData.badge}
                  </span>
               </motion.div>

               <AnimatePresence mode="wait">
                  <motion.h2
                     key={currentBanner}
                     className="text-3xl md:text-4xl font-bold leading-tight"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -20 }}
                     transition={{ duration: 0.5 }}
                  >
                     {currentBannerData.id === 'landing' ? (
                        <>
                           ¿Necesitas una{' '}
                           <motion.span
                              className="text-accent"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5, duration: 0.5 }}
                           >
                              {currentBannerData.title}
                           </motion.span>{' '}
                           que{' '}
                           <motion.span
                              className="text-primary"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.7, duration: 0.5 }}
                           >
                              convierta visitantes en clientes?
                           </motion.span>
                        </>
                     ) : (
                        <>
                           ¿Necesitas un{' '}
                           <motion.span
                              className="text-accent"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5, duration: 0.5 }}
                           >
                              {currentBannerData.title}
                           </motion.span>{' '}
                           que{' '}
                           <motion.span
                              className="text-primary"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.7, duration: 0.5 }}
                           >
                              {currentBannerData.subtitle}
                           </motion.span>
                        </>
                     )}
                  </motion.h2>
               </AnimatePresence>
            </motion.div>

            {/* Price */}
            <AnimatePresence mode="wait">
               <motion.div
                  key={`price-${currentBanner}`}
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
               >
                  <motion.div
                     className="flex items-center justify-center gap-4 text-xl md:text-2xl font-bold"
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: 0.6, duration: 0.5 }}
                  >
                     <span className="text-muted-foreground line-through">
                        {currentBannerData.originalPrice}
                     </span>
                     <span className="text-3xl md:text-4xl text-accent">
                        {currentBannerData.discountPrice}
                     </span>
                  </motion.div>

                  <motion.p
                     className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8, delay: 0.8 }}
                  >
                     {currentBannerData.description}{' '}
                     <strong className="text-foreground">
                        {currentBannerData.discount}
                     </strong>{' '}
                     por lanzamiento.
                  </motion.p>
               </motion.div>
            </AnimatePresence>

            {/* Benefits */}
            <AnimatePresence mode="wait">
               <motion.div
                  key={`benefits-${currentBanner}`}
                  className="flex flex-wrap justify-center gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
               >
                  {currentBannerData.benefits.map((benefit, index) => (
                     <motion.div
                        key={benefit}
                        className="flex items-center gap-2 bg-secondary/50 border border-border/50 rounded-full px-4 py-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                     >
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium">{benefit}</span>
                     </motion.div>
                  ))}
               </motion.div>
            </AnimatePresence>

            {/* CTA */}
            <AnimatePresence mode="wait">
               <motion.div
                  key={`cta-${currentBanner}`}
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
               >
                  <motion.div
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                  >
                     <Button size="lg" className="text-lg px-8" asChild>
                        <a href={currentBannerData.link}>
                           <currentBannerData.icon className="mr-2 h-5 w-5" />
                           {currentBannerData.cta}
                           <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                     </Button>
                  </motion.div>

                  <motion.p
                     className="text-sm text-muted-foreground mt-3"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 0.8, delay: 1.2 }}
                  >
                     {currentBannerData.id === 'landing'
                        ? 'Entrega en 48 horas • Garantía de satisfacción • Bonuses valorados en $450'
                        : 'Configuración en 48 horas • Entrenamiento incluido • Soporte 30 días'}
                  </motion.p>
               </motion.div>
            </AnimatePresence>

            {/* Banner Indicators */}
            <motion.div
               className="flex justify-center gap-2 pt-4"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.8, delay: 1.0 }}
            >
               {banners.map((_, index) => (
                  <button
                     key={index}
                     onClick={() => setCurrentBanner(index)}
                     className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentBanner
                           ? 'bg-accent w-8'
                           : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                     }`}
                  />
               ))}
            </motion.div>
         </motion.div>
      </section>
   );
}
