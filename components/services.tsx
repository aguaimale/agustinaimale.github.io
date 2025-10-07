'use client';

import { Palette, Code2, Cog, Bot, Lightbulb, Film } from 'lucide-react';
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';
import { motion } from 'framer-motion';
import { AnimatedGradient } from './animated-gradient';

const services = [
   {
      icon: Palette,
      title: 'Diseño UX/UI y Experiencia de Usuario',
      description:
         'Transformo ideas en interfaces claras, funcionales y estéticamente consistentes. Desde la investigación y arquitectura hasta los prototipos finales.',
      ideal: [
         'Productos que no convierten',
         'Equipos que diseñan sin foco en el usuario',
         'Startups o pymes que quieren mejorar su app o web existente',
      ],
      includes:
         'UX Research · Wireframes · UI Design · Prototipado · Accesibilidad · Figma',
   },
   {
      icon: Code2,
      title: 'Desarrollo Frontend',
      description:
         'Construyo interfaces modernas, veloces y escalables en Vue.js o React.js. Diseño y desarrollo van de la mano, sin fricción ni reinterpretaciones.',
      ideal: [
         'Landing pages o MVPs rápidos',
         'Plataformas SaaS o internas',
         'Optimización de código existente',
      ],
      includes:
         'Vue 3 · React · JavaScript · CSS · Tailwind · Bootstrap · SASS',
   },
   {
      icon: Cog,
      title: 'Backend y Automatización',
      description:
         'Creo APIs y microservicios que hacen tu vida más fácil. Automatizo tareas, conecto sistemas y convierto procesos lentos en flujos inteligentes.',
      ideal: [
         'Formularios o bots que recopilan información',
         'Cotizadores, CRM, o sistemas de gestión',
         'Pymes que necesitan conectar sus herramientas digitales',
      ],
      includes: 'Node.js · Express · PostgreSQL · Firebase · PHP · REST APIs',
   },
   {
      icon: Bot,
      title: 'Chatbots con IA',
      description:
         'Desarrollo asistentes que conversan como humanos y entienden de contexto. Integrados en WhatsApp o web, con IA real (GPT, Whisper, etc).',
      ideal: [
         'Atención al cliente automatizada',
         'Formularios conversacionales',
         'Captura y validación de datos de usuarios',
      ],
      includes:
         'Node.js · OpenAI API · @bot-whatsapp/bot · Baileys · Integraciones custom',
   },
   {
      icon: Lightbulb,
      title: 'Consultoría UX y Estrategia Digital',
      description:
         'Te ayudo a entender tu producto, detectar fricciones y mejorar la experiencia. Trabajo junto a tu equipo para definir la hoja de ruta digital que te sirva.',
      ideal: [
         'Equipos que no saben por dónde empezar',
         'Pymes que quieren escalar digitalmente',
         'Startups que buscan claridad de producto',
      ],
      includes:
         'Auditorías UX · Roadmaps · Workshops · Acompañamiento estratégico',
   },
   {
      icon: Film,
      title: 'Animación y Storytelling Visual',
      description:
         'Creo piezas animadas para explicar, emocionar o vender una idea. Branding, campañas o presentaciones con narrativa visual.',
      ideal: [
         'Explicar un producto en 30 segundos',
         'Darle vida a una marca o presentación',
         'Contenido visual para redes o campañas',
      ],
      includes: 'After Effects · Illustrator · Blender · Photoshop',
   },
];

export function Services() {
   return (
      <section
         id="servicios"
         className="min-h-screen flex items-center px-4 md:px-6 py-16 md:py-0"
      >
         <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
            <motion.div
               className="max-w-3xl space-y-4"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true, amount: 0.3 }}
            >
               <motion.h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
               >
                  Servicios
               </motion.h2>
               <motion.p
                  className="text-xl text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
               >
                  No vendo "packs" ni plantillas. Trabajo en base a lo que
                  necesitás, con la mezcla justa entre diseño, desarrollo y
                  sentido común.
               </motion.p>
            </motion.div>

            <motion.div
               className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               viewport={{ once: true, amount: 0.2 }}
            >
               {services.map((service, index) => (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: index * 0.1 }}
                     viewport={{ once: true }}
                     whileHover={{
                        y: -10,
                        transition: { duration: 0.3 },
                     }}
                  >
                     <Card className="relative border-border/50 hover:border-accent/50 transition-all duration-300 cursor-pointer h-full overflow-hidden">
                        <AnimatedGradient
                           variant="card"
                           className="absolute inset-0 opacity-30"
                        />
                        <CardHeader className="relative z-10">
                           <motion.div
                              whileHover={{
                                 rotate: [0, -10, 10, -10, 0],
                                 transition: { duration: 0.5 },
                              }}
                           >
                              <service.icon className="h-10 w-10 text-accent mb-4" />
                           </motion.div>
                           <CardTitle className="text-xl leading-tight">
                              {service.title}
                           </CardTitle>
                           <CardDescription className="text-base leading-relaxed pt-2">
                              {service.description}
                           </CardDescription>
                        </CardHeader>
                        <CardContent className="relative z-10 space-y-4">
                           <div>
                              <p className="text-sm font-medium mb-2">
                                 Ideal para:
                              </p>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                 {service.ideal.map((item, i) => (
                                    <motion.li
                                       key={i}
                                       className="flex items-start gap-2"
                                       initial={{ opacity: 0, x: -10 }}
                                       whileInView={{ opacity: 1, x: 0 }}
                                       transition={{ delay: i * 0.1 }}
                                       viewport={{ once: true }}
                                    >
                                       <span className="text-accent mt-1">
                                          •
                                       </span>
                                       <span>{item}</span>
                                    </motion.li>
                                 ))}
                              </ul>
                           </div>
                           <div>
                              <p className="text-xs font-mono text-muted-foreground">
                                 {service.includes}
                              </p>
                           </div>
                        </CardContent>
                     </Card>
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </section>
   );
}
