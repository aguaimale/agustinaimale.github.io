'use client';

import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedGradient } from './animated-gradient';

export function Contact() {
   return (
      <section
         id="hablemos"
         className="relative h-screen flex items-center px-6 bg-secondary/30"
      >
         <AnimatedGradient variant="section" className="absolute inset-0" />
         <motion.div
            className="relative z-10 max-w-4xl mx-auto space-y-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
         >
            <motion.div
               className="space-y-6 text-center"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               viewport={{ once: true }}
            >
               <motion.h2
                  className="text-4xl md:text-5xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
               >
                  Hablemos
               </motion.h2>
               <motion.p
                  className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
               >
                  Tengo tiempo para escucharte. Contame tu proyecto, tu idea o
                  tu necesidad, y conversemos sin compromiso. Respondo
                  personalmente cada mensaje.
               </motion.p>
            </motion.div>

            <motion.div
               className="flex flex-col sm:flex-row gap-4 justify-center items-center"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.8 }}
               viewport={{ once: true }}
            >
               <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
               >
                  <Button size="lg" className="text-lg px-8" asChild>
                     <a href="mailto:agustinaimale@gmail.com">
                        <Mail className="mr-2 h-5 w-5" />
                        Enviar mensaje
                     </a>
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
                     <a
                        href="https://linkedin.com/in/agustinaimale"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <Linkedin className="mr-2 h-5 w-5" />
                        LinkedIn
                     </a>
                  </Button>
               </motion.div>
            </motion.div>

            <motion.div
               className="pt-12 border-t border-border/50"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 1.0 }}
               viewport={{ once: true }}
            >
               <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                  <div className="text-center sm:text-left">
                     <p className="text-sm text-muted-foreground">
                        agustinaimale@gmail.com
                     </p>
                  </div>

                  <div className="flex gap-4">
                     <motion.a
                        href="https://linkedin.com/in/agustinaimale"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                        aria-label="LinkedIn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                     >
                        <Linkedin className="h-6 w-6" />
                     </motion.a>
                     <motion.a
                        href="https://behance.net/agustinaimale"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                        aria-label="Behance"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                     >
                        <svg
                           className="h-6 w-6"
                           fill="currentColor"
                           viewBox="0 0 24 24"
                           aria-hidden="true"
                        >
                           <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007zM3.495 8.22h2.88c.8 0 1.43-.182 1.87-.543.44-.36.66-.895.66-1.612 0-.832-.27-1.43-.815-1.79-.545-.36-1.25-.543-2.117-.543H3.495v4.488zm0 2.396v4.848h3.027c.817 0 1.504-.203 2.05-.61.545-.41.82-1.05.82-1.93 0-1.81-1.005-2.71-3.015-2.71H3.495v.403zm11.007-1.108c.4-.81.955-1.46 1.664-1.95.71-.49 1.527-.85 2.454-1.08.928-.23 1.91-.35 2.938-.35 1.005 0 1.94.13 2.81.39.87.26 1.63.65 2.27 1.18.64.52 1.14 1.16 1.5 1.93.36.77.54 1.67.54 2.71 0 .05-.01.14-.02.27-.01.13-.02.28-.04.45H14.78c.12 1.08.49 1.85 1.11 2.32.62.47 1.34.71 2.16.71.69 0 1.27-.14 1.74-.43.47-.29.79-.62.97-.99h3.03c-.49 1.45-1.29 2.5-2.4 3.15-1.11.65-2.47.97-4.08.97-1.09 0-2.07-.15-2.94-.45-.87-.3-1.61-.74-2.23-1.32-.62-.58-1.09-1.29-1.42-2.13-.33-.84-.5-1.79-.5-2.86 0-1.03.17-1.99.52-2.88zm7.5.88c-.54-.53-1.27-.8-2.19-.8-.59 0-1.09.09-1.51.27-.42.18-.77.42-1.06.72-.29.3-.51.64-.67 1.03-.16.39-.26.78-.3 1.17h6.874c-.13-.88-.49-1.56-1.164-2.05v-.34zm-6.3-6.34h8.53v1.7h-8.53v-1.7z" />
                        </svg>
                     </motion.a>
                     <motion.a
                        href="https://instagram.com/agustinaimale"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                        aria-label="Instagram"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                     >
                        <Instagram className="h-6 w-6" />
                     </motion.a>
                  </div>
               </div>
            </motion.div>
         </motion.div>
      </section>
   );
}
