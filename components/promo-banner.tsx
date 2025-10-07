'use client';

import { motion } from 'framer-motion';
import { Gift, ArrowRight, Clock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PromoBannerProps {
   className?: string;
   variant?: 'floating' | 'fixed' | 'inline';
   size?: 'sm' | 'md' | 'lg';
}

export function PromoBanner({
   className = '',
   variant = 'floating',
   size = 'md',
}: PromoBannerProps) {
   const sizeClasses = {
      sm: 'text-sm px-4 py-2',
      md: 'text-base px-6 py-3',
      lg: 'text-lg px-8 py-4',
   };

   const buttonSizes = {
      sm: 'sm' as const,
      md: 'lg' as const,
      lg: 'lg' as const,
   };

   const iconSizes = {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
   };

   const containerClasses = {
      floating:
         'fixed top-20 left-1/2 transform -translate-x-1/2 z-40 shadow-2xl',
      fixed: 'sticky top-0 z-40 shadow-lg',
      inline: 'relative z-10',
   };

   return (
      <motion.div
         className={`${containerClasses[variant]} ${className}`}
         initial={{
            opacity: 0,
            y: variant === 'floating' ? -50 : 0,
            scale: 0.95,
         }}
         animate={{
            opacity: 1,
            y: 0,
            scale: 1,
         }}
         transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
         }}
         whileHover={{
            scale: variant === 'floating' ? 1.02 : 1,
            transition: { duration: 0.2 },
         }}
      >
         {/* Banner Container */}
         <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-1">
            {/* Animated Background */}
            <motion.div
               className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-0"
               animate={{
                  opacity: [0, 0.3, 0],
                  scale: [1, 1.1, 1],
               }}
               transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
               }}
            />

            {/* Content */}
            <div className="relative bg-white dark:bg-slate-900 rounded-xl px-6 py-4 flex items-center justify-between gap-4">
               {/* Left Side - Offer Info */}
               <div className="flex items-center gap-4">
                  {/* Animated Gift Icon */}
                  <motion.div
                     animate={{
                        rotate: [0, -10, 10, 0],
                        scale: [1, 1.1, 1],
                     }}
                     transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                     }}
                  >
                     <Gift className={`${iconSizes[size]} text-orange-500`} />
                  </motion.div>

                  {/* Offer Text */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                     <div>
                        <motion.div
                           className="flex items-center gap-2"
                           initial={{ opacity: 0, x: -20 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ delay: 0.2 }}
                        >
                           <span
                              className={`font-bold text-slate-900 dark:text-white ${sizeClasses[size]}`}
                           >
                              🚀 Landing Page Completa
                           </span>
                           <Badge className="bg-red-500 text-white text-xs animate-pulse">
                              <Clock className="h-3 w-3 mr-1" />
                              48h
                           </Badge>
                        </motion.div>
                        <motion.p
                           className="text-sm text-slate-600 dark:text-slate-300"
                           initial={{ opacity: 0, x: -20 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ delay: 0.3 }}
                        >
                           De{' '}
                           <span className="line-through text-red-500">
                              $1,200
                           </span>{' '}
                           a solo{' '}
                           <strong className="text-green-600">$299</strong>
                        </motion.p>
                     </div>
                  </div>
               </div>

               {/* Right Side - CTA Button */}
               <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
               >
                  <Button
                     size={buttonSizes[size]}
                     className={`bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold shadow-lg transition-all duration-300 ${sizeClasses[size]}`}
                     asChild
                  >
                     <a href="/promo">
                        <motion.div
                           className="flex items-center gap-2"
                           animate={{
                              x: [0, 3, 0],
                           }}
                           transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: 'easeInOut',
                           }}
                        >
                           <Gift className={iconSizes[size]} />
                           <span>GET BONUS!</span>
                           <ArrowRight className={iconSizes[size]} />
                        </motion.div>
                     </a>
                  </Button>
               </motion.div>

               {/* Floating Elements */}
               <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center"
                  animate={{
                     rotate: [0, 360],
                     scale: [1, 1.2, 1],
                  }}
                  transition={{
                     duration: 4,
                     repeat: Infinity,
                     ease: 'linear',
                  }}
               >
                  <Zap className="h-3 w-3 text-white" />
               </motion.div>

               <motion.div
                  className="absolute -bottom-2 -left-2 w-4 h-4 bg-orange-400 rounded-full"
                  animate={{
                     scale: [1, 1.5, 1],
                     opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                     duration: 2,
                     repeat: Infinity,
                     ease: 'easeInOut',
                  }}
               />
            </div>
         </div>

         {/* Close Button (only for floating variant) */}
         {variant === 'floating' && (
            <motion.button
               className="absolute -top-2 -right-2 w-6 h-6 bg-slate-600 hover:bg-slate-700 text-white rounded-full flex items-center justify-center text-xs font-bold"
               initial={{ opacity: 0, scale: 0 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.5 }}
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               onClick={() => {
                  // Aquí podrías agregar lógica para cerrar el banner
                  console.log('Banner cerrado');
               }}
            >
               ×
            </motion.button>
         )}
      </motion.div>
   );
}

// Variante simplificada para uso rápido
export function QuickPromoBanner({ className = '' }: { className?: string }) {
   return (
      <motion.div
         className={`relative overflow-hidden rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-1 ${className}`}
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
      >
         <div className="bg-white dark:bg-slate-900 rounded-lg px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
               <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
               >
                  <Gift className="h-5 w-5 text-orange-500" />
               </motion.div>
               <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">
                     Landing Page por $299
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                     75% descuento • Solo 48h
                  </p>
               </div>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
               <Button
                  size="sm"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold"
                  asChild
               >
                  <a href="/promo">
                     <Gift className="h-4 w-4 mr-1" />
                     GET BONUS!
                  </a>
               </Button>
            </motion.div>
         </div>
      </motion.div>
   );
}
