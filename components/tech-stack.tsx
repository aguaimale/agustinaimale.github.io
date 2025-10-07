export function TechStack() {
   const technologies = [
      'Vue.js',
      'React',
      'Node.js',
      'Figma',
      'JavaScript',
      'TypeScript',
      'PostgreSQL',
      'Tailwind CSS',
      'OpenAI',
      'Firebase',
   ];

   return (
      <section id="tech-stack" className="h-screen flex items-center px-6">
         <div className="max-w-4xl mx-auto space-y-8">
            <h3 className="text-2xl font-bold text-center text-muted-foreground">
               Stack & Herramientas
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
               {technologies.map((tech) => (
                  <div
                     key={tech}
                     className="px-6 py-3 bg-secondary/50 rounded-lg text-sm font-medium border border-border/50"
                  >
                     {tech}
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
