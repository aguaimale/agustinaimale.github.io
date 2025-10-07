'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from './theme-toggle';

export function Navbar() {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
   };

   const closeMobileMenu = () => {
      setIsMobileMenuOpen(false);
   };

   const navLinks = [
      { name: 'Inicio', href: '/agustinaimale.github.io/' },
      { name: 'Sobre mí', href: '#sobre-mi' },
      { name: 'Servicios', href: '#servicios' },
      { name: 'Filosofía', href: '#filosofia' },
      { name: 'Tech Stack', href: '#tech-stack' },
      { name: 'Hablemos', href: '#hablemos' },
      { name: 'Precios', href: '/agustinaimale.github.io/precios/' },
   ];

   return (
      <motion.nav
         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
               ? 'bg-background/80 backdrop-blur-md border-b border-border/50'
               : 'bg-transparent'
         }`}
         initial={{ y: -100 }}
         animate={{ y: 0 }}
         transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
         <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
               <motion.a
                  href="/agustinaimale.github.io/"
                  className="text-xl font-bold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
               >
                  Agustín Aimale
               </motion.a>

               <div className="hidden md:flex items-center gap-8">
                  {navLinks.map((link, index) => (
                     <motion.a
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{
                           scale: 1.05,
                           transition: { type: 'spring', stiffness: 400 },
                        }}
                        whileTap={{ scale: 0.95 }}
                     >
                        {link.name}
                        <motion.div
                           className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                           initial={{ scaleX: 0 }}
                           whileHover={{ scaleX: 1 }}
                           transition={{ type: 'spring', stiffness: 400 }}
                        />
                     </motion.a>
                  ))}
                  <motion.div
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.6 }}
                  >
                     <ThemeToggle />
                  </motion.div>
               </div>

               {/* Mobile menu button and theme toggle */}
               <div className="md:hidden flex items-center gap-2">
                  <motion.div
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: 0.3 }}
                  >
                     <ThemeToggle />
                  </motion.div>
                  <motion.button
                     className="text-muted-foreground hover:text-foreground"
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     onClick={toggleMobileMenu}
                  >
                     {isMobileMenuOpen ? (
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        >
                           <line x1="18" y1="6" x2="6" y2="18"></line>
                           <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                     ) : (
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        >
                           <line x1="3" y1="12" x2="21" y2="12"></line>
                           <line x1="3" y1="6" x2="21" y2="6"></line>
                           <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                     )}
                  </motion.button>
               </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
               <motion.div
                  className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
               >
                  <div className="px-6 py-4 space-y-4">
                     {navLinks.map((link, index) => (
                        <motion.a
                           key={link.name}
                           href={link.href}
                           className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                           initial={{ opacity: 0, x: -20 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ delay: index * 0.1 }}
                           onClick={closeMobileMenu}
                        >
                           {link.name}
                        </motion.a>
                     ))}
                  </div>
               </motion.div>
            )}
         </div>
      </motion.nav>
   );
}
