'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';

export function ThemeToggle() {
   const { theme, setTheme } = useTheme();
   const [mounted, setMounted] = React.useState(false);

   React.useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) {
      return (
         <Button variant="outline" size="icon" className="w-10 h-10">
            <Sun className="h-4 w-4" />
            <span className="sr-only">Toggle theme</span>
         </Button>
      );
   }

   return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
         <Button
            variant="outline"
            size="icon"
            className="w-10 h-10 relative overflow-hidden"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
         >
            <motion.div
               className="absolute inset-0 flex items-center justify-center"
               initial={false}
               animate={{
                  rotate: theme === 'dark' ? 180 : 0,
                  opacity: theme === 'dark' ? 1 : 0,
               }}
               transition={{
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
               }}
            >
               <Moon className="h-4 w-4" />
            </motion.div>
            <motion.div
               className="absolute inset-0 flex items-center justify-center"
               initial={false}
               animate={{
                  rotate: theme === 'light' ? 180 : 0,
                  opacity: theme === 'light' ? 1 : 0,
               }}
               transition={{
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
               }}
            >
               <Sun className="h-4 w-4" />
            </motion.div>
            <span className="sr-only">Toggle theme</span>
         </Button>
      </motion.div>
   );
}
