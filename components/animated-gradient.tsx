'use client';

import { motion } from 'framer-motion';

interface AnimatedGradientProps {
   children?: React.ReactNode;
   className?: string;
   variant?: 'hero' | 'section' | 'card';
}

export function AnimatedGradient({
   children,
   className = '',
   variant = 'section',
}: AnimatedGradientProps) {
   const gradientVariants = {
      hero: {
         // Gradiente principal para Hero - más sutil y elegante
         background: [
            'radial-gradient(ellipse at top, var(--gradient-primary) 0%, transparent 60%), radial-gradient(ellipse at bottom, var(--gradient-secondary) 0%, transparent 60%)',
            'radial-gradient(ellipse at center, var(--gradient-primary) 0%, transparent 70%)',
            'radial-gradient(ellipse at bottom, var(--gradient-primary) 0%, transparent 60%), radial-gradient(ellipse at top, var(--gradient-secondary) 0%, transparent 60%)',
            'radial-gradient(ellipse at center, var(--gradient-primary) 0%, transparent 70%)',
            'radial-gradient(ellipse at top, var(--gradient-primary) 0%, transparent 60%), radial-gradient(ellipse at bottom, var(--gradient-secondary) 0%, transparent 60%)',
         ],
      },
      section: {
         // Gradiente muy sutil para secciones
         background: [
            'radial-gradient(ellipse at center, var(--gradient-subtle) 0%, transparent 80%)',
            'radial-gradient(ellipse at center, var(--gradient-medium) 0%, transparent 80%)',
            'radial-gradient(ellipse at center, var(--gradient-subtle) 0%, transparent 80%)',
         ],
      },
      card: {
         // Gradiente ultra sutil para cards
         background: [
            'linear-gradient(135deg, var(--gradient-card) 0%, transparent 60%)',
            'linear-gradient(135deg, var(--gradient-card-light) 0%, transparent 60%)',
            'linear-gradient(135deg, var(--gradient-card) 0%, transparent 60%)',
         ],
      },
   };

   const currentVariant = gradientVariants[variant];

   return (
      <motion.div
         className={`relative overflow-hidden ${className}`}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.6 }}
      >
         {/* Gradiente único que se adapta al tema usando CSS variables */}
         <motion.div
            className="absolute inset-0"
            animate={currentVariant}
            transition={{
               duration: 25,
               repeat: Infinity,
               ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
               opacity: 0.6,
               willChange: 'background',
            }}
         />

         {/* Contenido */}
         {children && <div className="relative z-10">{children}</div>}
      </motion.div>
   );
}
