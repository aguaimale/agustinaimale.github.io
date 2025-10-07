export function Philosophy() {
   return (
      <section
         id="filosofia"
         className="min-h-screen flex items-center px-4 md:px-6 py-16 md:py-0 bg-card/50"
      >
         <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
               Filosofía de trabajo
            </h2>

            <div className="text-lg md:text-xl text-muted-foreground space-y-4 md:space-y-6 leading-relaxed">
               <p>
                  No busco proyectos masivos.
                  <br />
                  <strong className="text-foreground">
                     Busco relaciones de confianza
                  </strong>
                  , donde haya diálogo y propósito.
               </p>

               <p>
                  Trabajo directo, sin intermediarios ni jerga vacía.
                  <br />
                  <strong className="text-foreground">
                     Cada proyecto es una historia distinta: la tuya.
                  </strong>
               </p>
            </div>
         </div>
      </section>
   );
}
