'use client';

import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { LucideIcon } from 'lucide-react';

interface LottieServiceImageProps {
   icon: LucideIcon;
   color: string;
   serviceName: string;
}

export function LottieServiceImage({
   icon: Icon,
   color,
   serviceName,
}: LottieServiceImageProps) {
   // URLs de animaciones Lottie gratuitas desde LottieFiles
   const getLottieUrl = (serviceName: string) => {
      const lottieAnimations = {
         'Diseño UX/UI':
            'https://lottie.host/3b4b8c8c-8b8b-4b8b-8b8b-8b8b8b8b8b8b/design.json',
         'Desarrollo Frontend':
            'https://lottie.host/4c5d9d9d-9c9c-5c9c-9c9c-9c9c9c9c9c9c/coding.json',
         Automatización:
            'https://lottie.host/5d6e0e0e-0d0d-6d0d-0d0d-0d0d0d0d0d0d/automation.json',
      };

      // Usar animaciones genéricas si no hay una específica
      const genericAnimations = [
         'https://lottie.host/1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6/tech.json',
         'https://lottie.host/2b3c4d5e-6f7g-8h9i-0j1k-l2m3n4o5p6q7/development.json',
         'https://lottie.host/3c4d5e6f-7g8h-9i0j-1k2l-m3n4o5p6q7r8/design.json',
      ];

      // Seleccionar una animación basada en el nombre del servicio
      const hash = serviceName
         .split('')
         .reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const selectedAnimation =
         genericAnimations[hash % genericAnimations.length];

      return selectedAnimation;
   };

   // Animaciones Lottie simplificadas y funcionales
   const getEmbeddedAnimation = (serviceName: string) => {
      // Animación simple de círculo rotatorio para diseño
      const designAnimation = {
         v: '5.7.4',
         fr: 30,
         ip: 0,
         op: 90,
         w: 400,
         h: 400,
         nm: 'Design Animation',
         ddd: 0,
         assets: [],
         layers: [
            {
               ddd: 0,
               ind: 1,
               ty: 4,
               nm: 'Circle',
               sr: 1,
               ks: {
                  o: { a: 0, k: 100 },
                  r: {
                     a: 1,
                     k: [
                        {
                           i: { x: [0.833], y: [0.833] },
                           o: { x: [0.167], y: [0.167] },
                           t: 0,
                           s: [0],
                        },
                        { t: 90, s: [360] },
                     ],
                  },
                  p: { a: 0, k: [200, 200, 0] },
                  a: { a: 0, k: [0, 0, 0] },
                  s: { a: 0, k: [100, 100, 100] },
               },
               ao: 0,
               shapes: [
                  {
                     ty: 'gr',
                     it: [
                        {
                           d: 1,
                           ty: 'el',
                           s: { a: 0, k: [80, 80] },
                           p: { a: 0, k: [0, 0] },
                           nm: 'Ellipse Path 1',
                           mn: 'ADBE Vector Shape - Ellipse',
                        },
                        {
                           ty: 'st',
                           c: { a: 0, k: [1, 0.6, 0.2, 1] },
                           o: { a: 0, k: 100 },
                           w: { a: 0, k: 4 },
                           lc: 1,
                           lj: 1,
                           ml: 4,
                           bm: 0,
                           d: [
                              { n: 'd', nm: 'dash', v: { a: 0, k: 0 } },
                              { n: 'g', nm: 'gap', v: { a: 0, k: 0 } },
                           ],
                           nm: 'Stroke 1',
                           mn: 'ADBE Vector Graphic - Stroke',
                        },
                        {
                           ty: 'tr',
                           p: { a: 0, k: [0, 0] },
                           a: { a: 0, k: [0, 0] },
                           s: { a: 0, k: [100, 100] },
                           r: { a: 0, k: 0 },
                           o: { a: 0, k: 100 },
                           sk: { a: 0, k: 0 },
                           sa: { a: 0, k: 0 },
                           nm: 'Transform',
                        },
                     ],
                     nm: 'Ellipse 1',
                     np: 2,
                     cix: 2,
                     bm: 0,
                     ix: 1,
                     mn: 'ADBE Vector Group',
                  },
               ],
               ip: 0,
               op: 90,
               st: 0,
               bm: 0,
            },
         ],
         markers: [],
      };

      // Animación simple de rectángulos para desarrollo
      const codingAnimation = {
         v: '5.7.4',
         fr: 30,
         ip: 0,
         op: 120,
         w: 400,
         h: 400,
         nm: 'Coding Animation',
         ddd: 0,
         assets: [],
         layers: [
            {
               ddd: 0,
               ind: 1,
               ty: 4,
               nm: 'Code Lines',
               sr: 1,
               ks: {
                  o: { a: 0, k: 100 },
                  r: { a: 0, k: 0 },
                  p: { a: 0, k: [200, 200, 0] },
                  a: { a: 0, k: [0, 0, 0] },
                  s: { a: 0, k: [100, 100, 100] },
               },
               ao: 0,
               shapes: [
                  {
                     ty: 'gr',
                     it: [
                        {
                           d: 1,
                           ty: 'rc',
                           s: { a: 0, k: [120, 8] },
                           p: { a: 0, k: [0, -40] },
                           r: { a: 0, k: 4 },
                           nm: 'Rectangle Path 1',
                           mn: 'ADBE Vector Shape - Rect',
                        },
                        {
                           ty: 'fl',
                           c: { a: 0, k: [0.2, 0.7, 1, 1] },
                           o: { a: 0, k: 100 },
                           r: 1,
                           bm: 0,
                           nm: 'Fill 1',
                           mn: 'ADBE Vector Graphic - Fill',
                        },
                        {
                           ty: 'tr',
                           p: { a: 0, k: [0, 0] },
                           a: { a: 0, k: [0, 0] },
                           s: { a: 0, k: [100, 100] },
                           r: { a: 0, k: 0 },
                           o: { a: 0, k: 100 },
                           sk: { a: 0, k: 0 },
                           sa: { a: 0, k: 0 },
                           nm: 'Transform',
                        },
                     ],
                     nm: 'Rectangle 1',
                     np: 2,
                     cix: 2,
                     bm: 0,
                     ix: 1,
                     mn: 'ADBE Vector Group',
                  },
               ],
               ip: 0,
               op: 120,
               st: 0,
               bm: 0,
            },
         ],
         markers: [],
      };

      // Animación simple de engranaje para automatización
      const automationAnimation = {
         v: '5.7.4',
         fr: 30,
         ip: 0,
         op: 150,
         w: 400,
         h: 400,
         nm: 'Automation Animation',
         ddd: 0,
         assets: [],
         layers: [
            {
               ddd: 0,
               ind: 1,
               ty: 4,
               nm: 'Gears',
               sr: 1,
               ks: {
                  o: { a: 0, k: 100 },
                  r: {
                     a: 1,
                     k: [
                        {
                           i: { x: [0.833], y: [0.833] },
                           o: { x: [0.167], y: [0.167] },
                           t: 0,
                           s: [0],
                        },
                        { t: 150, s: [720] },
                     ],
                  },
                  p: { a: 0, k: [200, 200, 0] },
                  a: { a: 0, k: [0, 0, 0] },
                  s: { a: 0, k: [100, 100, 100] },
               },
               ao: 0,
               shapes: [
                  {
                     ty: 'gr',
                     it: [
                        {
                           d: 1,
                           ty: 'el',
                           s: { a: 0, k: [60, 60] },
                           p: { a: 0, k: [0, 0] },
                           nm: 'Ellipse Path 1',
                           mn: 'ADBE Vector Shape - Ellipse',
                        },
                        {
                           ty: 'st',
                           c: { a: 0, k: [0.2, 0.8, 0.4, 1] },
                           o: { a: 0, k: 100 },
                           w: { a: 0, k: 3 },
                           lc: 1,
                           lj: 1,
                           ml: 4,
                           bm: 0,
                           d: [
                              { n: 'd', nm: 'dash', v: { a: 0, k: 0 } },
                              { n: 'g', nm: 'gap', v: { a: 0, k: 0 } },
                           ],
                           nm: 'Stroke 1',
                           mn: 'ADBE Vector Graphic - Stroke',
                        },
                        {
                           ty: 'tr',
                           p: { a: 0, k: [0, 0] },
                           a: { a: 0, k: [0, 0] },
                           s: { a: 0, k: [100, 100] },
                           r: { a: 0, k: 0 },
                           o: { a: 0, k: 100 },
                           sk: { a: 0, k: 0 },
                           sa: { a: 0, k: 0 },
                           nm: 'Transform',
                        },
                     ],
                     nm: 'Ellipse 1',
                     np: 2,
                     cix: 2,
                     bm: 0,
                     ix: 1,
                     mn: 'ADBE Vector Group',
                  },
               ],
               ip: 0,
               op: 150,
               st: 0,
               bm: 0,
            },
         ],
         markers: [],
      };

      // Seleccionar animación basada en el servicio
      const animations: Record<string, any> = {
         'Diseño UX/UI': designAnimation,
         'Desarrollo Frontend': codingAnimation,
         Automatización: automationAnimation,
      };

      return animations[serviceName] || designAnimation;
   };

   const selectedAnimation = getEmbeddedAnimation(serviceName);

   return (
      <motion.div
         className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-card/50 to-card/30 border border-border/50"
         whileInView={{
            rotateY: [0, 5, -5, 0],
            transition: { duration: 2, ease: 'easeInOut' },
         }}
         viewport={{ once: true }}
      >
         <div className="aspect-[4/3] relative">
            {/* Lottie Animation */}
            <div className="absolute inset-0 flex items-center justify-center">
               <motion.div
                  className="w-full h-full flex items-center justify-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
               >
                  <Lottie
                     animationData={selectedAnimation}
                     loop={true}
                     autoplay={true}
                     style={{ width: '100%', height: '100%' }}
                  />
               </motion.div>
            </div>

            {/* Service Icon Overlay */}
            <motion.div
               className="absolute top-4 right-4 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center"
               initial={{ scale: 0, rotate: 0 }}
               whileInView={{ scale: 1, rotate: 360 }}
               transition={{ duration: 0.8, delay: 0.7 }}
               viewport={{ once: true }}
            >
               <Icon className={`h-6 w-6 ${color}`} />
            </motion.div>

            {/* Floating Elements */}
            <motion.div
               className="absolute bottom-6 left-6 w-6 h-6 rounded-full bg-accent/20 backdrop-blur-sm"
               initial={{ scale: 0, rotate: 0 }}
               whileInView={{ scale: 1, rotate: -360 }}
               transition={{ duration: 0.8, delay: 0.9 }}
               viewport={{ once: true }}
            />
            <motion.div
               className="absolute top-1/2 left-4 w-4 h-4 rounded-full bg-primary/20 backdrop-blur-sm"
               initial={{ scale: 0 }}
               whileInView={{ scale: 1 }}
               transition={{ duration: 0.6, delay: 1.1 }}
               viewport={{ once: true }}
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
         </div>
      </motion.div>
   );
}
