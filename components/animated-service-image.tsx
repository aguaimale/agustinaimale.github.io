'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AnimatedServiceImageProps {
   icon: LucideIcon;
   color: string;
   serviceName: string;
}

export function AnimatedServiceImage({
   icon: Icon,
   color,
   serviceName,
}: AnimatedServiceImageProps) {
   // Seleccionar patrón de fondo basado en el nombre del servicio
   const getPatternIndex = (serviceName: string) => {
      let hash = 0;
      for (let i = 0; i < serviceName.length; i++) {
         const char = serviceName.charCodeAt(i);
         hash = (hash << 5) - hash + char;
         hash = hash & hash; // Convert to 32-bit integer
      }
      return Math.abs(hash) % 4;
   };

   const patterns = [
      'bg-gradient-to-br from-blue-500/15 via-purple-500/8 to-indigo-600/12',
      'bg-gradient-to-br from-green-500/15 via-emerald-500/8 to-teal-600/12',
      'bg-gradient-to-br from-orange-500/15 via-amber-500/8 to-red-600/12',
      'bg-gradient-to-br from-pink-500/15 via-rose-500/8 to-purple-600/12',
   ];

   const patternIndex = getPatternIndex(serviceName);
   const selectedPattern = patterns[patternIndex];

   // Colores específicos para cada servicio
   const getServiceColors = (serviceName: string) => {
      const colors: Record<
         string,
         { primary: string; secondary: string; accent: string }
      > = {
         'Diseño UX/UI': {
            primary: 'from-pink-500/20 to-purple-500/20',
            secondary: 'from-rose-400/30 to-pink-400/30',
            accent: 'text-pink-500',
         },
         'Desarrollo Frontend': {
            primary: 'from-blue-500/20 to-cyan-500/20',
            secondary: 'from-sky-400/30 to-blue-400/30',
            accent: 'text-blue-500',
         },
         Automatización: {
            primary: 'from-green-500/20 to-emerald-500/20',
            secondary: 'from-lime-400/30 to-green-400/30',
            accent: 'text-green-500',
         },
      };
      return colors[serviceName] || colors['Diseño UX/UI'];
   };

   const serviceColors = getServiceColors(serviceName);

   return (
      <motion.div
         className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-card/50 to-card/30 border border-border/50"
         whileInView={{
            rotateY: [0, 5, -5, 0],
            transition: { duration: 2, ease: 'easeInOut' },
         }}
         viewport={{ once: true }}
      >
         <div className={`aspect-[4/3] relative ${selectedPattern}`}>
            {/* Animated Background Pattern */}
            <motion.div
               className="absolute inset-0 opacity-30"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 0.3 }}
               transition={{ duration: 1, delay: 0.5 }}
               viewport={{ once: true }}
            >
               <div
                  className="absolute inset-0"
                  style={{
                     backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                     backgroundSize: '50px 50px, 30px 30px',
                  }}
               />
            </motion.div>

            {/* Main Animated Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
               {/* Central Animation Container */}
               <motion.div
                  className="relative"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
                  viewport={{ once: true }}
               >
                  {/* Outer Rotating Ring */}
                  <motion.div
                     className="absolute inset-0 w-32 h-32 border-2 border-current rounded-full opacity-15"
                     animate={{ rotate: 360 }}
                     transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: 'linear',
                     }}
                  />

                  {/* Middle Pulsing Ring */}
                  <motion.div
                     className={`absolute inset-0 w-24 h-24 border-2 border-current rounded-full opacity-25 bg-gradient-to-r ${serviceColors.primary}`}
                     animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.5, 0.2],
                        rotate: [0, 180, 360],
                     }}
                     transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                     }}
                  />

                  {/* Inner Glowing Ring */}
                  <motion.div
                     className={`absolute inset-0 w-16 h-16 border border-current rounded-full opacity-40 bg-gradient-to-r ${serviceColors.secondary}`}
                     animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.7, 0.3],
                     }}
                     transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                     }}
                  />

                  {/* Floating Particles */}
                  {[...Array(6)].map((_, i) => (
                     <motion.div
                        key={i}
                        className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${serviceColors.secondary}`}
                        style={{
                           top: `${20 + i * 10}%`,
                           left: `${15 + i * 15}%`,
                        }}
                        animate={{
                           y: [0, -20, 0],
                           opacity: [0, 1, 0],
                           scale: [0, 1, 0],
                        }}
                        transition={{
                           duration: 3,
                           repeat: Infinity,
                           ease: 'easeInOut',
                           delay: i * 0.3,
                        }}
                     />
                  ))}

                  {/* Main Icon with Enhanced Animation */}
                  <motion.div
                     className="text-7xl opacity-90 flex items-center justify-center w-20 h-20 relative z-10"
                     animate={{
                        y: [0, -8, 0],
                        rotate: [0, 3, -3, 0],
                        scale: [1, 1.05, 1],
                     }}
                     transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                     }}
                     whileHover={{
                        scale: 1.1,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.3 },
                     }}
                  >
                     <Icon className={`${color} drop-shadow-lg`} />
                  </motion.div>

                  {/* Glow Effect */}
                  <motion.div
                     className={`absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-r ${serviceColors.primary} opacity-30 blur-xl`}
                     animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                     }}
                     transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                     }}
                  />
               </motion.div>
            </div>

            {/* Enhanced Floating Elements */}
            <motion.div
               className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r ${serviceColors.primary} backdrop-blur-sm border border-border/30 shadow-lg`}
               initial={{ scale: 0, rotate: 0, opacity: 0 }}
               whileInView={{ scale: 1, rotate: 360, opacity: 1 }}
               transition={{ duration: 1, delay: 0.7 }}
               viewport={{ once: true }}
               animate={{
                  y: [0, -15, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1],
               }}
               transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
               }}
            >
               <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent" />
            </motion.div>

            <motion.div
               className={`absolute bottom-6 left-6 w-8 h-8 rounded-full bg-gradient-to-r ${serviceColors.secondary} backdrop-blur-sm shadow-lg`}
               initial={{ scale: 0, rotate: 0, opacity: 0 }}
               whileInView={{ scale: 1, rotate: -360, opacity: 1 }}
               transition={{ duration: 1, delay: 0.9 }}
               viewport={{ once: true }}
               animate={{
                  x: [0, 15, 0],
                  scale: [1, 1.3, 1],
                  rotate: [0, -180, -360],
               }}
               transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
               }}
            >
               <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent" />
            </motion.div>

            <motion.div
               className={`absolute top-1/2 left-4 w-6 h-6 rounded-full bg-gradient-to-r ${serviceColors.primary} backdrop-blur-sm shadow-lg`}
               initial={{ scale: 0, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.8, delay: 1.1 }}
               viewport={{ once: true }}
               animate={{
                  y: [0, -20, 0],
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.2, 1],
               }}
               transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
               }}
            >
               <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent" />
            </motion.div>

            {/* Additional Corner Elements */}
            <motion.div
               className={`absolute top-6 left-6 w-3 h-3 rounded-full bg-gradient-to-r ${serviceColors.accent} opacity-60`}
               initial={{ scale: 0, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 0.6 }}
               transition={{ duration: 0.6, delay: 1.3 }}
               viewport={{ once: true }}
               animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
               }}
               transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
               }}
            />

            <motion.div
               className={`absolute bottom-4 right-8 w-4 h-4 rounded-full bg-gradient-to-r ${serviceColors.secondary} opacity-50`}
               initial={{ scale: 0, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 0.5 }}
               transition={{ duration: 0.6, delay: 1.5 }}
               viewport={{ once: true }}
               animate={{
                  x: [0, -10, 0],
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1],
               }}
               transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
               }}
            />

            {/* Service Name Overlay */}
            <motion.div
               className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 1.2 }}
               viewport={{ once: true }}
            >
               <motion.h3
                  className="text-foreground font-bold text-xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  viewport={{ once: true }}
               >
                  {serviceName}
               </motion.h3>
            </motion.div>

            {/* Gradient Overlay */}
            <motion.div
               className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.8 }}
               viewport={{ once: true }}
            />

            {/* Enhanced Animated Lines */}
            <motion.div
               className="absolute inset-0"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 1, delay: 1.0 }}
               viewport={{ once: true }}
            >
               {/* Horizontal Lines */}
               <motion.div
                  className={`absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${
                     serviceColors.accent.split('-')[1]
                  }-500/40 to-transparent`}
                  animate={{
                     scaleX: [0, 1, 0],
                     opacity: [0, 0.8, 0],
                  }}
                  transition={{
                     duration: 3,
                     repeat: Infinity,
                     ease: 'easeInOut',
                     delay: 0,
                  }}
               />
               <motion.div
                  className={`absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${
                     serviceColors.accent.split('-')[1]
                  }-500/40 to-transparent`}
                  animate={{
                     scaleX: [0, 1, 0],
                     opacity: [0, 0.8, 0],
                  }}
                  transition={{
                     duration: 3,
                     repeat: Infinity,
                     ease: 'easeInOut',
                     delay: 1.5,
                  }}
               />

               {/* Vertical Lines */}
               <motion.div
                  className={`absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-${
                     serviceColors.accent.split('-')[1]
                  }-500/40 to-transparent`}
                  animate={{
                     scaleY: [0, 1, 0],
                     opacity: [0, 0.8, 0],
                  }}
                  transition={{
                     duration: 3,
                     repeat: Infinity,
                     ease: 'easeInOut',
                     delay: 0.8,
                  }}
               />
               <motion.div
                  className={`absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-${
                     serviceColors.accent.split('-')[1]
                  }-500/40 to-transparent`}
                  animate={{
                     scaleY: [0, 1, 0],
                     opacity: [0, 0.8, 0],
                  }}
                  transition={{
                     duration: 3,
                     repeat: Infinity,
                     ease: 'easeInOut',
                     delay: 2.3,
                  }}
               />

               {/* Diagonal Lines */}
               <motion.div
                  className={`absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-${
                     serviceColors.accent.split('-')[1]
                  }-500/30 to-transparent transform rotate-45 origin-left`}
                  animate={{
                     scaleX: [0, 1, 0],
                     opacity: [0, 0.6, 0],
                  }}
                  transition={{
                     duration: 4,
                     repeat: Infinity,
                     ease: 'easeInOut',
                     delay: 1.0,
                  }}
               />
               <motion.div
                  className={`absolute bottom-0 right-0 w-32 h-px bg-gradient-to-l from-${
                     serviceColors.accent.split('-')[1]
                  }-500/30 to-transparent transform -rotate-45 origin-right`}
                  animate={{
                     scaleX: [0, 1, 0],
                     opacity: [0, 0.6, 0],
                  }}
                  transition={{
                     duration: 4,
                     repeat: Infinity,
                     ease: 'easeInOut',
                     delay: 2.0,
                  }}
               />
            </motion.div>

            {/* Pulse Waves */}
            <motion.div
               className="absolute inset-0"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 1, delay: 1.2 }}
               viewport={{ once: true }}
            >
               {[...Array(3)].map((_, i) => (
                  <motion.div
                     key={i}
                     className={`absolute inset-0 border border-${
                        serviceColors.accent.split('-')[1]
                     }-500/20 rounded-2xl`}
                     animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0, 0.3, 0],
                     }}
                     transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 2,
                     }}
                  />
               ))}
            </motion.div>
         </div>
      </motion.div>
   );
}
