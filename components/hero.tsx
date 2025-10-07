'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedGradient } from './animated-gradient';

export function Hero() {
   return (
      <AnimatedGradient
         variant="hero"
         className="h-screen flex items-center justify-center px-6"
      >
         <motion.div
            className="max-w-5xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
               duration: 0.6,
               ease: [0.25, 0.46, 0.45, 0.94],
               delay: 0.1,
            }}
         >
            <motion.h1
               className="text-5xl md:text-7xl font-bold leading-tight text-balance"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.2,
               }}
            >
               Diseño, desarrollo y pienso productos digitales con{' '}
               <motion.span
                  className="text-primary"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                     delay: 0.6,
                     duration: 0.5,
                     ease: [0.25, 0.46, 0.45, 0.94],
                  }}
               >
                  cabeza de negocio
               </motion.span>{' '}
               y{' '}
               <motion.span
                  className="text-accent"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                     delay: 0.8,
                     duration: 0.5,
                     ease: [0.25, 0.46, 0.45, 0.94],
                  }}
               >
                  alma de diseñador
               </motion.span>
               .
            </motion.h1>

            <motion.p
               className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.4,
               }}
            >
               No prometo magia. Escucho, entiendo y construyo soluciones
               digitales que funcionan de verdad.
            </motion.p>

            <motion.div
               className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.6,
               }}
            >
               <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                     duration: 0.5,
                     ease: [0.25, 0.46, 0.45, 0.94],
                     delay: 1.0,
                  }}
                  whileHover={{
                     scale: 1.05,
                     transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
               >
                  <Button size="lg" className="text-lg px-8 group" asChild>
                     <a href="./precios">
                        Ver precios
                        <motion.div
                           className="ml-2"
                           whileHover={{ x: 5 }}
                           transition={{
                              type: 'spring',
                              stiffness: 400,
                              damping: 25,
                           }}
                        >
                           <ArrowRight className="h-5 w-5" />
                        </motion.div>
                     </a>
                  </Button>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                     duration: 0.5,
                     ease: [0.25, 0.46, 0.45, 0.94],
                     delay: 1.1,
                  }}
                  whileHover={{
                     scale: 1.05,
                     transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
               >
                  <Button
                     size="lg"
                     variant="outline"
                     className="text-lg px-8 bg-transparent group"
                     asChild
                  >
                     <a href="#hablemos">Hablemos</a>
                  </Button>
               </motion.div>
            </motion.div>
         </motion.div>
      </AnimatedGradient>
   );
}
