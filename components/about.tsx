'use client';

import { MapPin, MessageCircle, Code, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { AnimatedGradient } from './animated-gradient';

export function About() {
   const infoItems = [
      {
         icon: MapPin,
         title: 'Argentina',
         subtitle: 'Trabajo remoto y presencial',
      },
      {
         icon: MessageCircle,
         title: 'Español / Inglés',
         subtitle: 'Inglés intermedio técnico',
      },
      {
         icon: Code,
         title: 'Stack principal',
         subtitle: 'Vue.js, React.js, Node.js, UX/UI, IA aplicada',
      },
      {
         icon: GraduationCap,
         title: 'Formación continua',
         subtitle: 'UX, Design Thinking, Accesibilidad, Animación, IA',
      },
   ];

   return (
      <section
         id="sobre-mi"
         className="relative min-h-screen flex items-center px-4 md:px-6 py-16 md:py-0 bg-card/50"
      >
         <AnimatedGradient variant="section" className="absolute inset-0" />
         <motion.div
            className="max-w-4xl mx-auto space-y-8 md:space-y-12"
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
               <motion.h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
               >
                  Hola, soy{' '}
                  <motion.span
                     className="text-primary"
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ delay: 0.5, duration: 0.5 }}
                     viewport={{ once: true }}
                  >
                     Agustín Aimale
                  </motion.span>
                  .
               </motion.h2>

               <motion.div
                  className="text-base md:text-lg lg:text-xl text-muted-foreground space-y-3 md:space-y-4 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
               >
                  <p>
                     Soy{' '}
                     <strong className="text-foreground">
                        Diseñador UX/UI
                     </strong>{' '}
                     y{' '}
                     <strong className="text-foreground">
                        Desarrollador Frontend–Fullstack
                     </strong>
                     . Trabajo en proyectos donde diseño y tecnología se
                     encuentran para resolver necesidades reales: mejorar
                     productos, optimizar procesos y hacer que la experiencia
                     digital sea más humana.
                  </p>

                  <p>
                     Combino diseño, código y estrategia para acompañar a
                     empresas, equipos y personas en su transformación digital.
                  </p>
               </motion.div>
            </motion.div>

            <motion.div
               className="grid sm:grid-cols-2 gap-6"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               viewport={{ once: true }}
            >
               {infoItems.map((item, index) => (
                  <motion.div
                     key={index}
                     className="flex items-start gap-3 p-4 rounded-lg hover:bg-muted/30 transition-colors cursor-pointer"
                     initial={{ opacity: 0, x: -30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6, delay: index * 0.1 }}
                     viewport={{ once: true }}
                     whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 },
                     }}
                  >
                     <motion.div
                        whileHover={{
                           rotate: [0, -10, 10, 0],
                           transition: { duration: 0.3 },
                        }}
                     >
                        <item.icon className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                     </motion.div>
                     <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-muted-foreground">
                           {item.subtitle}
                        </p>
                     </div>
                  </motion.div>
               ))}
            </motion.div>

            <motion.div
               className="pt-6"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.8 }}
               viewport={{ once: true }}
            >
               <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
               >
                  <Button size="lg" variant="outline" asChild>
                     <a href="#servicios">Conocer mi experiencia</a>
                  </Button>
               </motion.div>
            </motion.div>
         </motion.div>
      </section>
   );
}
