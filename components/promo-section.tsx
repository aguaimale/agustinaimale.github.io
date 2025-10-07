'use client';

import { motion } from 'framer-motion';
import { Gift, ArrowRight, Clock, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedGradient } from './animated-gradient';

export function PromoSection() {
   return (
      <section className="relative min-h-[50vh] py-24 px-6 bg-card/30">
         <AnimatedGradient variant="section" className="absolute inset-0" />

         {/* Main Content */}
         <motion.div
            className="max-w-4xl mx-auto text-center space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
         >
            {/* Header */}
            <motion.div
               className="space-y-6"
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
                  <Clock className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-accent">
                     Oferta limitada
                  </span>
               </motion.div>

               <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  ¿Necesitas una{' '}
                  <motion.span
                     className="text-accent"
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ delay: 0.5, duration: 0.5 }}
                     viewport={{ once: true }}
                  >
                     Landing Page
                  </motion.span>{' '}
                  que realmente{' '}
                  <motion.span
                     className="text-primary"
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ delay: 0.7, duration: 0.5 }}
                     viewport={{ once: true }}
                  >
                     convierta?
                  </motion.span>
               </h2>
            </motion.div>

            {/* Price */}
            <motion.div
               className="space-y-6"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               viewport={{ once: true }}
            >
               <motion.div
                  className="flex items-center justify-center gap-4 text-2xl md:text-3xl font-bold"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  viewport={{ once: true }}
               >
                  <span className="text-muted-foreground line-through">
                     $1,200
                  </span>
                  <span className="text-4xl md:text-5xl text-accent">$299</span>
               </motion.div>

               <motion.p
                  className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
               >
                  Landing page profesional completa con diseño, desarrollo y
                  optimización.
                  <strong className="text-foreground">
                     75% de descuento
                  </strong>{' '}
                  por tiempo limitado.
               </motion.p>
            </motion.div>

            {/* Benefits */}
            <motion.div
               className="flex flex-wrap justify-center gap-4"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.6 }}
               viewport={{ once: true }}
            >
               {[
                  'Diseño profesional',
                  'Desarrollo completo',
                  'SEO optimizado',
                  'Mobile responsive',
                  'Bonuses incluidos',
               ].map((benefit, index) => (
                  <motion.div
                     key={benefit}
                     className="flex items-center gap-2 bg-secondary/50 border border-border/50 rounded-full px-4 py-2"
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                     viewport={{ once: true }}
                  >
                     <Check className="h-4 w-4 text-green-500" />
                     <span className="text-sm font-medium">{benefit}</span>
                  </motion.div>
               ))}
            </motion.div>

            {/* CTA */}
            <motion.div
               className="pt-6"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 1.0 }}
               viewport={{ once: true }}
            >
               <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
               >
                  <Button size="lg" className="text-lg px-8" asChild>
                     <a href="/agustinaimale.github.io/promo">
                        <Gift className="mr-2 h-5 w-5" />
                        GET BONUS!
                        <ArrowRight className="ml-2 h-5 w-5" />
                     </a>
                  </Button>
               </motion.div>

               <motion.p
                  className="text-sm text-muted-foreground mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  viewport={{ once: true }}
               >
                  Entrega en 48 horas • Garantía de satisfacción • Bonuses
                  valorados en $450
               </motion.p>
            </motion.div>
         </motion.div>
      </section>
   );
}
