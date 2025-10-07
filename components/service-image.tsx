'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceImageProps {
   icon: LucideIcon;
   color: string;
   serviceName: string;
}

export function ServiceImage({
   icon: Icon,
   color,
   serviceName,
}: ServiceImageProps) {
   // Usar un hash determinístico basado en el nombre del servicio
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
      'bg-gradient-to-br from-blue-500/10 to-purple-600/10',
      'bg-gradient-to-br from-green-500/10 to-teal-600/10',
      'bg-gradient-to-br from-orange-500/10 to-red-600/10',
      'bg-gradient-to-br from-pink-500/10 to-rose-600/10',
   ];

   const patternIndex = getPatternIndex(serviceName);
   const selectedPattern = patterns[patternIndex];

   return (
      <motion.div
         className="relative rounded-2xl overflow-hidden shadow-2xl"
         whileInView={{
            rotateY: [0, 5, -5, 0],
            transition: { duration: 2, ease: 'easeInOut' },
         }}
         viewport={{ once: true }}
      >
         <div className={`aspect-[4/3] ${selectedPattern} relative`}>
            {/* Background Pattern */}
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

            {/* Floating Elements */}
            <motion.div
               className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm"
               initial={{ scale: 0, rotate: 0 }}
               whileInView={{ scale: 1, rotate: 360 }}
               transition={{ duration: 0.8, delay: 0.7 }}
               viewport={{ once: true }}
            />
            <motion.div
               className="absolute bottom-6 left-6 w-6 h-6 rounded-full bg-white/30 backdrop-blur-sm"
               initial={{ scale: 0, rotate: 0 }}
               whileInView={{ scale: 1, rotate: -360 }}
               transition={{ duration: 0.8, delay: 0.9 }}
               viewport={{ once: true }}
            />
            <motion.div
               className="absolute top-1/2 left-4 w-4 h-4 rounded-full bg-white/25 backdrop-blur-sm"
               initial={{ scale: 0 }}
               whileInView={{ scale: 1 }}
               transition={{ duration: 0.6, delay: 1.1 }}
               viewport={{ once: true }}
            />

            {/* Main Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
               <motion.div
                  className="text-8xl opacity-20"
                  initial={{ scale: 0.8, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
               >
                  <Icon className={color} />
               </motion.div>
            </div>

            {/* Service Name Overlay */}
            <motion.div
               className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 1.2 }}
               viewport={{ once: true }}
            >
               <motion.h3
                  className="text-white font-bold text-xl"
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
               className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.8 }}
               viewport={{ once: true }}
            />
         </div>
      </motion.div>
   );
}
