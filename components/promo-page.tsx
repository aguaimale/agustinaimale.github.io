'use client';

import { motion } from 'framer-motion';
import {
   Check,
   ArrowRight,
   Clock,
   Users,
   Zap,
   Star,
   Gift,
   Shield,
   Target,
   TrendingUp,
   Smartphone,
   Globe,
   Rocket,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedGradient } from './animated-gradient';

export function PromoPage() {
   const features = [
      {
         icon: Zap,
         title: 'Diseño Profesional',
         description:
            'Interfaz moderna y atractiva que convierte visitantes en clientes',
         color: 'text-yellow-500',
      },
      {
         icon: Smartphone,
         title: '100% Responsive',
         description: 'Perfecto en móviles, tablets y escritorio',
         color: 'text-blue-500',
      },
      {
         icon: Target,
         title: 'Optimizada para Conversión',
         description: 'Estructura diseñada para maximizar ventas',
         color: 'text-green-500',
      },
      {
         icon: Globe,
         title: 'SEO Optimizado',
         description: 'Configurado para aparecer en Google',
         color: 'text-purple-500',
      },
      {
         icon: Shield,
         title: 'Seguridad SSL',
         description: 'Certificado de seguridad incluido',
         color: 'text-red-500',
      },
      {
         icon: Rocket,
         title: 'Deploy Incluido',
         description: 'Tu landing online en 48 horas',
         color: 'text-orange-500',
      },
   ];

   const bonuses = [
      {
         icon: Gift,
         title: 'Bonus 1: Email Marketing Setup',
         description:
            'Configuración completa de Mailchimp con formularios y automatizaciones',
         value: '$150',
      },
      {
         icon: TrendingUp,
         title: 'Bonus 2: Analytics & Tracking',
         description:
            'Google Analytics, Facebook Pixel y herramientas de seguimiento',
         value: '$100',
      },
      {
         icon: Star,
         title: 'Bonus 3: 30 días de Soporte',
         description: 'Asesoría y ajustes menores durante el primer mes',
         value: '$200',
      },
   ];

   return (
      <div className="min-h-screen bg-background">
         {/* Hero Section */}
         <section className="relative h-screen flex items-center justify-center px-6">
            <AnimatedGradient variant="hero" className="absolute inset-0" />

            {/* Urgency Timer */}
            <motion.div
               className="absolute top-24 left-1/2 transform -translate-x-1/2 z-20"
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
            >
               <Badge className="bg-accent text-accent-foreground px-6 py-3 text-lg font-bold">
                  <Clock className="h-4 w-4 mr-2" />
                  OFERTA LIMITADA - Solo 48 horas
               </Badge>
            </motion.div>

            <motion.div
               className="relative z-10 max-w-5xl mx-auto text-center space-y-8 pt-20"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
            >
               <motion.h1
                  className="text-4xl md:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
               >
                  Landing Page{' '}
                  <motion.span
                     className="text-accent"
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: 0.6, duration: 0.5 }}
                  >
                     Completa
                  </motion.span>
                  <br />
                  <motion.span
                     className="text-foreground"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.8, duration: 0.6 }}
                  >
                     por Solo{' '}
                  </motion.span>
                  <motion.div
                     className="inline-flex items-baseline gap-2"
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: 1.0, duration: 0.6 }}
                  >
                     <span className="text-muted-foreground line-through text-3xl md:text-5xl">
                        $1,200
                     </span>
                     <span className="text-6xl md:text-7xl font-black text-accent">
                        $299
                     </span>
                  </motion.div>
               </motion.h1>

               <motion.p
                  className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
               >
                  <strong className="text-foreground">
                     ¡Oferta de lanzamiento!
                  </strong>{' '}
                  Obtén una landing page profesional completa con diseño,
                  desarrollo y optimización.{' '}
                  <strong className="text-green-600">75% de descuento</strong>{' '}
                  por tiempo limitado.
               </motion.p>

               <motion.div
                  className="flex items-center justify-center gap-6 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
               >
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                     <Check className="h-4 w-4 text-green-500" />
                     <span>Entrega en 48 horas</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                     <Check className="h-4 w-4 text-green-500" />
                     <span>Garantía de satisfacción</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                     <Check className="h-4 w-4 text-green-500" />
                     <span>Bonuses incluidos</span>
                  </div>
               </motion.div>

               <motion.div
                  className="pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
               >
                  <motion.div
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                  >
                     <Button size="lg" className="text-xl px-12 py-6">
                        <Gift className="mr-3 h-6 w-6" />
                        ¡GET BONUS!
                        <ArrowRight className="ml-3 h-6 w-6" />
                     </Button>
                  </motion.div>
                  <p className="text-sm text-muted-foreground mt-4">
                     🔒 Pago seguro • 💳 Todos los métodos de pago • ⚡ Acceso
                     inmediato
                  </p>
               </motion.div>
            </motion.div>
         </section>

         {/* Features Section */}
         <section className="py-24 px-6">
            <motion.div
               className="max-w-7xl mx-auto space-y-12"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true, amount: 0.3 }}
            >
               <motion.div
                  className="text-center space-y-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
               >
                  <h2 className="text-4xl md:text-5xl font-bold">
                     ¿Qué Incluye Tu Landing Page?
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                     Todo lo que necesitas para lanzar tu negocio online con
                     éxito
                  </p>
               </motion.div>

               <motion.div
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
               >
                  {features.map((feature, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{
                           y: -10,
                           transition: { duration: 0.3 },
                        }}
                     >
                        <Card className="h-full border-border/50 hover:border-accent/50 transition-all duration-300 cursor-pointer hover:shadow-xl">
                           <CardHeader className="text-center pb-4">
                              <motion.div
                                 className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-card border-2 border-border mb-4"
                                 whileHover={{
                                    rotate: [0, -10, 10, 0],
                                    transition: { duration: 0.5 },
                                 }}
                              >
                                 <feature.icon
                                    className={`h-8 w-8 ${feature.color}`}
                                 />
                              </motion.div>
                              <CardTitle className="text-xl font-bold">
                                 {feature.title}
                              </CardTitle>
                           </CardHeader>
                           <CardContent>
                              <p className="text-muted-foreground text-center">
                                 {feature.description}
                              </p>
                           </CardContent>
                        </Card>
                     </motion.div>
                  ))}
               </motion.div>
            </motion.div>
         </section>

         {/* Bonuses Section */}
         <section className="py-24 px-6 bg-card/30">
            <motion.div
               className="max-w-7xl mx-auto space-y-12"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true, amount: 0.3 }}
            >
               <motion.div
                  className="text-center space-y-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
               >
                  <h2 className="text-4xl md:text-5xl font-bold">
                     <motion.span
                        className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        viewport={{ once: true }}
                     >
                        Bonuses Incluidos
                     </motion.span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                     Valor adicional de $450 completamente GRATIS
                  </p>
               </motion.div>

               <motion.div
                  className="grid md:grid-cols-3 gap-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
               >
                  {bonuses.map((bonus, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{
                           y: -10,
                           transition: { duration: 0.3 },
                        }}
                     >
                        <Card className="h-full border-2 border-yellow-200 dark:border-yellow-800 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
                           <CardHeader className="text-center pb-4">
                              <motion.div
                                 className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 dark:bg-yellow-900/30 border-2 border-yellow-300 dark:border-yellow-700 mb-4"
                                 whileHover={{
                                    rotate: [0, -10, 10, 0],
                                    transition: { duration: 0.5 },
                                 }}
                              >
                                 <bonus.icon className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                              </motion.div>
                              <div className="flex items-center justify-center gap-2 mb-2">
                                 <CardTitle className="text-xl font-bold">
                                    {bonus.title}
                                 </CardTitle>
                                 <Badge className="bg-green-500 text-white">
                                    {bonus.value}
                                 </Badge>
                              </div>
                           </CardHeader>
                           <CardContent>
                              <p className="text-muted-foreground text-center">
                                 {bonus.description}
                              </p>
                           </CardContent>
                        </Card>
                     </motion.div>
                  ))}
               </motion.div>
            </motion.div>
         </section>

         {/* Social Proof */}
         <section className="py-24 px-6">
            <motion.div
               className="max-w-4xl mx-auto text-center space-y-12"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true, amount: 0.3 }}
            >
               <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
               >
                  <h2 className="text-4xl md:text-5xl font-bold">
                     ¿Por Qué Esta Oferta?
                  </h2>
                  <p className="text-xl text-muted-foreground">
                     Estoy lanzando mi servicio de landing pages y necesito
                     casos de estudio
                  </p>
               </motion.div>

               <motion.div
                  className="grid md:grid-cols-2 gap-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
               >
                  <motion.div
                     className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-8 rounded-2xl"
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6, delay: 0.6 }}
                     viewport={{ once: true }}
                  >
                     <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                     <h3 className="text-2xl font-bold mb-4">
                        Necesito Casos de Estudio
                     </h3>
                     <p className="text-muted-foreground">
                        Al trabajar contigo, ambos ganamos: tú obtienes una
                        landing page profesional a precio de lanzamiento, y yo
                        construyo mi portfolio con proyectos reales.
                     </p>
                  </motion.div>

                  <motion.div
                     className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 p-8 rounded-2xl"
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6, delay: 0.8 }}
                     viewport={{ once: true }}
                  >
                     <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
                     <h3 className="text-2xl font-bold mb-4">
                        Relación a Largo Plazo
                     </h3>
                     <p className="text-muted-foreground">
                        Mi objetivo es convertirte en un cliente recurrente. Si
                        tu landing funciona bien, naturalmente necesitarás más
                        servicios: SEO, marketing, e-commerce...
                     </p>
                  </motion.div>
               </motion.div>
            </motion.div>
         </section>

         {/* Final CTA */}
         <section className="py-24 px-6 bg-accent/5">
            <motion.div
               className="max-w-4xl mx-auto text-center space-y-8"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true, amount: 0.3 }}
            >
               <motion.h2
                  className="text-4xl md:text-6xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
               >
                  ¿Listo para Lanzar tu Negocio?
               </motion.h2>

               <motion.p
                  className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
               >
                  Esta oferta expira en <strong>48 horas</strong>. No dejes
                  pasar la oportunidad de tener una landing page profesional que
                  convierta.
               </motion.p>

               <motion.div
                  className="pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
               >
                  <motion.div
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                  >
                     <Button size="lg" className="text-xl px-12 py-6">
                        <Gift className="mr-3 h-6 w-6" />
                        ¡GET BONUS AHORA!
                        <ArrowRight className="ml-3 h-6 w-6" />
                     </Button>
                  </motion.div>
                  <p className="text-sm text-muted-foreground mt-4">
                     🔒 Pago 100% seguro • 💳 Todos los métodos • ⚡ Acceso
                     inmediato
                  </p>
               </motion.div>

               <motion.div
                  className="pt-8 border-t border-border/50"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
               >
                  <p className="text-sm text-muted-foreground">
                     ¿Preguntas? Escríbeme a{' '}
                     <strong className="text-foreground">
                        agustinaimale@gmail.com
                     </strong>{' '}
                     o{' '}
                     <a
                        href="/agustinaimale.github.io/#hablemos"
                        className="text-accent hover:underline"
                     >
                        hablemos por WhatsApp
                     </a>
                  </p>
               </motion.div>
            </motion.div>
         </section>
      </div>
   );
}
