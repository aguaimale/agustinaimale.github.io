'use client';

import { motion } from 'framer-motion';
import {
   Check,
   ArrowRight,
   Palette,
   Code2,
   Cog,
   Bot,
   Lightbulb,
   Film,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedGradient } from './animated-gradient';
import { AnimatedServiceImage } from './animated-service-image';

export function PricingPage() {
   const services = [
      {
         id: 'ux-ui',
         name: 'Diseño UX/UI',
         icon: Palette,
         description:
            'Creación de experiencias digitales centradas en el usuario',
         detailedDescription: `Transformo ideas en experiencias digitales que conectan con tu audiencia. Mi proceso de diseño UX/UI combina investigación profunda, arquitectura de información y diseño visual para crear productos que no solo se ven bien, sino que funcionan perfectamente para tus usuarios y tu negocio.

Desde el análisis de usuarios hasta la implementación final, cada decisión de diseño está respaldada por datos y mejores prácticas de la industria. Trabajo con metodologías ágiles para asegurar que el producto evolucione de manera iterativa y siempre hacia la mejor versión posible.`,
         image: '/api/placeholder/600/400',
         color: 'text-pink-500',
         bgColor: 'bg-pink-50 dark:bg-pink-950/20',
         borderColor: 'border-pink-200 dark:border-pink-800',
         plans: [
            {
               name: 'Básico',
               price: '$800',
               description: 'Perfecto para MVP o proyectos pequeños',
               features: [
                  'Wireframes básicos',
                  'Diseño de 3-5 pantallas principales',
                  'Guías de estilo simples',
                  '1 revisión incluida',
                  'Entrega en 1 semana',
               ],
            },
            {
               name: 'Completo',
               price: '$1,500',
               description: 'Solución completa con investigación',
               features: [
                  'Investigación de usuarios',
                  'Wireframes detallados',
                  'Diseño de todas las pantallas',
                  'Sistema de diseño completo',
                  'Prototipo interactivo',
                  '3 revisiones incluidas',
                  'Entrega en 2-3 semanas',
               ],
            },
            {
               name: 'Premium',
               price: '$2,500',
               description: 'Solución premium con testing',
               features: [
                  'Todo lo del plan Completo',
                  'Testing de usabilidad',
                  'Optimización de conversión',
                  'Revisiones ilimitadas',
                  'Soporte post-lanzamiento',
                  'Entrega en 3-4 semanas',
               ],
            },
         ],
      },
      {
         id: 'desarrollo',
         name: 'Desarrollo Frontend',
         icon: Code2,
         description: 'Desarrollo de interfaces modernas y responsivas',
         detailedDescription: `Convierto diseños en aplicaciones web rápidas, escalables y mantenibles. Especializado en las últimas tecnologías como React, Vue.js y Next.js, creo interfaces que no solo cumplen con los requisitos actuales, sino que están preparadas para crecer con tu negocio.

Mi enfoque en el desarrollo frontend prioriza la performance, accesibilidad y experiencia de usuario. Cada línea de código está optimizada para ofrecer la mejor experiencia posible, desde la carga inicial hasta las interacciones más complejas.`,
         image: '/api/placeholder/600/400',
         color: 'text-blue-500',
         bgColor: 'bg-blue-50 dark:bg-blue-950/20',
         borderColor: 'border-blue-200 dark:border-blue-800',
         plans: [
            {
               name: 'Básico',
               price: '$1,200',
               description: 'Desarrollo de páginas estáticas',
               features: [
                  'HTML/CSS/JavaScript',
                  'Diseño responsive',
                  '3-5 páginas',
                  'Optimización básica',
                  'Entrega en 1-2 semanas',
               ],
            },
            {
               name: 'Avanzado',
               price: '$2,500',
               description: 'Aplicación web completa',
               features: [
                  'React/Vue.js',
                  'Integración con APIs',
                  'Estado global',
                  'Testing básico',
                  'Deploy incluido',
                  'Entrega en 3-4 semanas',
               ],
            },
            {
               name: 'Enterprise',
               price: '$4,500',
               description: 'Solución empresarial completa',
               features: [
                  'Arquitectura escalable',
                  'Testing completo',
                  'CI/CD setup',
                  'Performance optimization',
                  'SEO avanzado',
                  'Soporte 3 meses',
                  'Entrega en 5-6 semanas',
               ],
            },
         ],
      },
      {
         id: 'automatizacion',
         name: 'Automatización',
         icon: Cog,
         description: 'Automatización de procesos y flujos de trabajo',
         detailedDescription: `Optimizo y automatizo tus procesos de trabajo para que puedas enfocarte en lo que realmente importa: hacer crecer tu negocio. Utilizo herramientas como Zapier, Make.com y desarrollos custom para crear flujos de trabajo inteligentes que reducen tareas repetitivas y mejoran la eficiencia.

Desde automatizaciones simples hasta sistemas complejos de integración, trabajo contigo para identificar oportunidades de mejora y crear soluciones que se adapten perfectamente a tu flujo de trabajo actual.`,
         image: '/api/placeholder/600/400',
         color: 'text-green-500',
         bgColor: 'bg-green-50 dark:bg-green-950/20',
         borderColor: 'border-green-200 dark:border-green-800',
         plans: [
            {
               name: 'Básico',
               price: '$900',
               description: 'Automatización simple',
               features: [
                  'Zapier/Make.com setup',
                  '2-3 integraciones',
                  'Flujo básico',
                  'Documentación',
                  'Entrega en 1 semana',
               ],
            },
            {
               name: 'Profesional',
               price: '$1,800',
               description: 'Automatización completa',
               features: [
                  'Múltiples integraciones',
                  'Flujos complejos',
                  'Monitoreo y alertas',
                  'Optimización',
                  'Capacitación incluida',
                  'Entrega en 2-3 semanas',
               ],
            },
            {
               name: 'Enterprise',
               price: '$3,200',
               description: 'Automatización empresarial',
               features: [
                  'Sistema completo',
                  'Integraciones custom',
                  'Analytics avanzado',
                  'Soporte 24/7',
                  'Mantenimiento 6 meses',
                  'Entrega en 4-5 semanas',
               ],
            },
         ],
      },
   ];

   return (
      <div className="min-h-screen bg-background">
         {/* Hero Section */}
         <section className="relative h-screen flex items-center justify-center px-6">
            <AnimatedGradient variant="hero" className="absolute inset-0" />

            <motion.div
               className="relative z-10 max-w-4xl mx-auto text-center space-y-8"
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
                  Precios por{' '}
                  <motion.span
                     className="text-accent"
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: 0.6, duration: 0.5 }}
                  >
                     servicio
                  </motion.span>
               </motion.h1>

               <motion.p
                  className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
               >
                  Elige el servicio que necesites y el plan que mejor se adapte
                  a tu proyecto. Transparencia total, sin sorpresas.
               </motion.p>

               <motion.div
                  className="flex items-center justify-center gap-6 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
               >
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                     <Check className="h-4 w-4 text-green-500" />
                     <span>Pago único</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                     <Check className="h-4 w-4 text-green-500" />
                     <span>Sin compromiso</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                     <Check className="h-4 w-4 text-green-500" />
                     <span>Garantía de satisfacción</span>
                  </div>
               </motion.div>
            </motion.div>
         </section>

         {/* Services Pricing */}
         {services.map((service, serviceIndex) => (
            <div key={service.id}>
               {/* Service Description Section */}
               <section className="py-24 px-6">
                  <motion.div
                     className="max-w-7xl mx-auto"
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     transition={{ duration: 0.8 }}
                     viewport={{ once: true, amount: 0.3 }}
                  >
                     <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Text Content */}
                        <motion.div
                           className="space-y-8"
                           initial={{ opacity: 0, x: -50 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ duration: 0.8, delay: 0.2 }}
                           viewport={{ once: true }}
                        >
                           <motion.div
                              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-card border-2 border-border mb-6"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                              viewport={{ once: true }}
                              whileHover={{
                                 rotate: [0, -10, 10, 0],
                                 transition: { duration: 0.5 },
                              }}
                           >
                              <service.icon
                                 className={`h-8 w-8 ${service.color}`}
                              />
                           </motion.div>

                           <div>
                              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                 {service.name}
                              </h2>
                              <p className="text-xl text-muted-foreground mb-8">
                                 {service.description}
                              </p>
                           </div>

                           <motion.div
                              className="space-y-4 text-muted-foreground leading-relaxed"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 0.4 }}
                              viewport={{ once: true }}
                           >
                              {service.detailedDescription
                                 .split('\n\n')
                                 .map((paragraph, index) => (
                                    <motion.p
                                       key={index}
                                       initial={{ opacity: 0, y: 20 }}
                                       whileInView={{ opacity: 1, y: 0 }}
                                       transition={{
                                          duration: 0.6,
                                          delay: 0.6 + index * 0.1,
                                       }}
                                       viewport={{ once: true }}
                                    >
                                       {paragraph}
                                    </motion.p>
                                 ))}
                           </motion.div>
                        </motion.div>

                        {/* Image Content */}
                        <motion.div
                           className="relative"
                           initial={{ opacity: 0, x: 50 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ duration: 0.8, delay: 0.4 }}
                           viewport={{ once: true }}
                        >
                           <AnimatedServiceImage
                              icon={service.icon}
                              color={service.color}
                              serviceName={service.name}
                           />
                        </motion.div>
                     </div>
                  </motion.div>
               </section>

               {/* Pricing Cards Section */}
               <section className="py-24 px-6 bg-card/30">
                  <motion.div
                     className="max-w-7xl mx-auto space-y-12"
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     transition={{ duration: 0.8 }}
                     viewport={{ once: true, amount: 0.3 }}
                  >
                     <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                     >
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                           Planes de {service.name}
                        </h3>
                        <p className="text-muted-foreground">
                           Elige el plan que mejor se adapte a tus necesidades
                        </p>
                     </motion.div>

                     {/* Pricing Cards */}
                     <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                     >
                        {service.plans.map((plan, planIndex) => (
                           <motion.div
                              key={plan.name}
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{
                                 duration: 0.6,
                                 delay: planIndex * 0.1,
                              }}
                              viewport={{ once: true }}
                              whileHover={{
                                 y: -10,
                                 transition: { duration: 0.3 },
                              }}
                           >
                              <Card className="relative h-full border-border/50 hover:border-accent/50 transition-all duration-300 cursor-pointer hover:shadow-xl">
                                 <CardHeader className="text-center pb-4">
                                    <CardTitle className="text-2xl font-bold mb-2">
                                       {plan.name}
                                    </CardTitle>

                                    <div className="py-4">
                                       <div className="flex items-baseline justify-center gap-1">
                                          <span className="text-4xl md:text-5xl font-bold">
                                             {plan.price}
                                          </span>
                                          <span className="text-muted-foreground">
                                             USD
                                          </span>
                                       </div>
                                       <p className="text-sm text-muted-foreground mt-2">
                                          {plan.description}
                                       </p>
                                    </div>
                                 </CardHeader>

                                 <CardContent className="space-y-6">
                                    <ul className="space-y-3">
                                       {plan.features.map(
                                          (feature, featureIndex) => (
                                             <motion.li
                                                key={featureIndex}
                                                className="flex items-start gap-3 text-sm"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{
                                                   opacity: 1,
                                                   x: 0,
                                                }}
                                                transition={{
                                                   delay: featureIndex * 0.1,
                                                }}
                                                viewport={{ once: true }}
                                             >
                                                <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>{feature}</span>
                                             </motion.li>
                                          )
                                       )}
                                    </ul>

                                    <motion.div
                                       whileHover={{ scale: 1.05 }}
                                       whileTap={{ scale: 0.95 }}
                                    >
                                       <Button
                                          className="w-full"
                                          variant={
                                             planIndex === 1
                                                ? 'default'
                                                : 'outline'
                                          }
                                          size="lg"
                                       >
                                          Elegir {plan.name}
                                          <ArrowRight className="ml-2 h-4 w-4" />
                                       </Button>
                                    </motion.div>
                                 </CardContent>
                              </Card>
                           </motion.div>
                        ))}
                     </motion.div>
                  </motion.div>
               </section>
            </div>
         ))}

         {/* Bottom CTA */}
         <section className="py-24 px-6 bg-card/50">
            <motion.div
               className="max-w-4xl mx-auto text-center space-y-8"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true, amount: 0.3 }}
            >
               <motion.h2
                  className="text-3xl md:text-4xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
               >
                  ¿Necesitas algo personalizado?
               </motion.h2>

               <motion.p
                  className="text-xl text-muted-foreground max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
               >
                  Cada proyecto es único. Si necesitas algo específico o una
                  combinación de servicios, hablemos sin compromiso.
               </motion.p>

               <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
               >
                  <motion.div
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                  >
                     <Button size="lg" className="text-lg px-8" asChild>
                        <a href="/#hablemos">Consultar proyecto</a>
                     </Button>
                  </motion.div>
                  <motion.div
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                  >
                     <Button
                        size="lg"
                        variant="outline"
                        className="text-lg px-8 bg-transparent"
                        asChild
                     >
                        <a href="/agustinaimale.github.io/">Volver al inicio</a>
                     </Button>
                  </motion.div>
               </motion.div>
            </motion.div>
         </section>
      </div>
   );
}
