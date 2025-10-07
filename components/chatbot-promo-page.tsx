'use client';

import { motion } from 'framer-motion';
import {
   Check,
   ArrowRight,
   Clock,
   Bot,
   MessageSquare,
   Zap,
   Shield,
   Users,
   TrendingUp,
   Smartphone,
   Globe,
   Settings,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedGradient } from './animated-gradient';

export function ChatbotPromoPage() {
   const features = [
      {
         icon: MessageSquare,
         title: 'WhatsApp Business API',
         description:
            'Integración completa con WhatsApp Business para atención automatizada',
         color: 'text-green-500',
      },
      {
         icon: Bot,
         title: 'IA Conversacional',
         description:
            'Respuestas inteligentes que entienden el contexto y la intención',
         color: 'text-blue-500',
      },
      {
         icon: Shield,
         title: 'Base de Conocimientos',
         description:
            'Entrenado con tu información específica para respuestas precisas',
         color: 'text-purple-500',
      },
      {
         icon: Zap,
         title: 'Respuestas Instantáneas',
         description: 'Atiende a tus clientes 24/7 sin esperas ni demoras',
         color: 'text-yellow-500',
      },
      {
         icon: Globe,
         title: 'Integración Web',
         description: 'Chatbot embebido en tu sitio web o aplicación',
         color: 'text-orange-500',
      },
      {
         icon: Settings,
         title: 'Fácil Configuración',
         description: 'Setup completo en 48 horas con entrenamiento incluido',
         color: 'text-red-500',
      },
   ];

   const integrations = [
      {
         icon: MessageSquare,
         title: 'WhatsApp Business',
         description: 'Integración completa con WhatsApp Business API',
         features: [
            'Mensajes automáticos',
            'Respuestas inteligentes',
            'Escalado a humano',
         ],
      },
      {
         icon: Globe,
         title: 'Sitio Web',
         description: 'Widget de chat embebido en tu sitio web',
         features: [
            'Diseño personalizable',
            'Responsive',
            'Analytics incluido',
         ],
      },
      {
         icon: Settings,
         title: 'Sistemas Internos',
         description: 'Integración con CRM, ERP y herramientas internas',
         features: ['APIs personalizadas', 'Webhooks', 'Base de datos'],
      },
   ];

   const benefits = [
      {
         icon: Users,
         title: 'Más Clientes Atendidos',
         description:
            'Tu chatbot puede atender múltiples conversaciones simultáneamente, sin límites de horario.',
      },
      {
         icon: TrendingUp,
         title: 'Mayor Conversión',
         description:
            'Respuestas inmediatas aumentan la satisfacción del cliente y las ventas.',
      },
      {
         icon: Clock,
         title: 'Ahorro de Tiempo',
         description:
            'Automatiza las consultas más frecuentes y enfócate en lo importante.',
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
                  <Bot className="h-4 w-4 mr-2" />
                  LANZAMIENTO - 50% DESCUENTO
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
                  Chatbot de{' '}
                  <motion.span
                     className="text-accent"
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: 0.6, duration: 0.5 }}
                  >
                     IA
                  </motion.span>{' '}
                  para{' '}
                  <motion.span
                     className="text-foreground"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.8, duration: 0.6 }}
                  >
                     Automatizar tu{' '}
                  </motion.span>
                  <motion.span
                     className="text-accent"
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: 1.0, duration: 0.5 }}
                  >
                     Atención al Cliente
                  </motion.span>
               </motion.h1>

               {/* Price Section */}
               <motion.div
                  className="flex items-center justify-center gap-4 text-2xl md:text-3xl font-bold pt-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
               >
                  <span className="text-muted-foreground line-through text-3xl md:text-5xl">
                     $800
                  </span>
                  <span className="text-6xl md:text-7xl font-black text-accent">
                     $399
                  </span>
               </motion.div>

               <motion.p
                  className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
               >
                  <strong className="text-foreground">
                     Automatiza tu atención al cliente
                  </strong>{' '}
                  con un chatbot inteligente que funciona en WhatsApp, tu sitio
                  web o sistemas internos.
               </motion.p>

               <motion.div
                  className="flex items-center justify-center gap-6 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
               >
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                     <Check className="h-4 w-4 text-green-500" />
                     <span>Setup en 48 horas</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                     <Check className="h-4 w-4 text-green-500" />
                     <span>Entrenamiento incluido</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                     <Check className="h-4 w-4 text-green-500" />
                     <span>Soporte 30 días</span>
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
                        <Bot className="mr-3 h-6 w-6" />
                        AUTOMATIZAR AHORA!
                        <ArrowRight className="ml-3 h-6 w-6" />
                     </Button>
                  </motion.div>
                  <p className="text-sm text-muted-foreground mt-4">
                     🔒 Pago seguro • 💳 Todos los métodos de pago • ⚡ Setup
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
                     ¿Qué Incluye tu Chatbot?
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                     Todo lo necesario para automatizar tu atención al cliente
                     con inteligencia artificial
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

         {/* Integrations Section */}
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
                     Dónde Funciona tu Chatbot
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                     Integración flexible para llegar a tus clientes donde estén
                  </p>
               </motion.div>

               <motion.div
                  className="grid md:grid-cols-3 gap-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
               >
                  {integrations.map((integration, index) => (
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
                        <Card className="h-full border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
                           <CardHeader className="text-center pb-4">
                              <motion.div
                                 className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 border-2 border-accent/20 mb-4"
                                 whileHover={{
                                    rotate: [0, -10, 10, 0],
                                    transition: { duration: 0.5 },
                                 }}
                              >
                                 <integration.icon className="h-8 w-8 text-accent" />
                              </motion.div>
                              <CardTitle className="text-xl font-bold">
                                 {integration.title}
                              </CardTitle>
                              <p className="text-muted-foreground">
                                 {integration.description}
                              </p>
                           </CardHeader>
                           <CardContent>
                              <ul className="space-y-2">
                                 {integration.features.map((feature, i) => (
                                    <motion.li
                                       key={i}
                                       className="flex items-center gap-2 text-sm"
                                       initial={{ opacity: 0, x: -20 }}
                                       whileInView={{ opacity: 1, x: 0 }}
                                       transition={{ delay: i * 0.1 }}
                                       viewport={{ once: true }}
                                    >
                                       <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                                       <span>{feature}</span>
                                    </motion.li>
                                 ))}
                              </ul>
                           </CardContent>
                        </Card>
                     </motion.div>
                  ))}
               </motion.div>
            </motion.div>
         </section>

         {/* Benefits Section */}
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
                     ¿Por Qué Automatizar?
                  </h2>
                  <p className="text-xl text-muted-foreground">
                     Los beneficios de tener un chatbot inteligente en tu
                     negocio
                  </p>
               </motion.div>

               <motion.div
                  className="grid md:grid-cols-3 gap-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
               >
                  {benefits.map((benefit, index) => (
                     <motion.div
                        key={index}
                        className="bg-gradient-to-br from-card to-card/50 p-8 rounded-2xl border border-border/50"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        viewport={{ once: true }}
                     >
                        <benefit.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-4">
                           {benefit.title}
                        </h3>
                        <p className="text-muted-foreground">
                           {benefit.description}
                        </p>
                     </motion.div>
                  ))}
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
                  ¿Listo para Automatizar?
               </motion.h2>

               <motion.p
                  className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
               >
                  Esta oferta de lanzamiento expira pronto. No dejes pasar la
                  oportunidad de automatizar tu atención al cliente con IA.
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
                        <Bot className="mr-3 h-6 w-6" />
                        AUTOMATIZAR AHORA!
                        <ArrowRight className="ml-3 h-6 w-6" />
                     </Button>
                  </motion.div>
                  <p className="text-sm text-muted-foreground mt-4">
                     🔒 Pago 100% seguro • 💳 Todos los métodos • ⚡ Setup
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
                        href="/#hablemos"
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
