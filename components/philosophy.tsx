export function Philosophy() {
   return (
      <section
         id="filosofia"
         className="h-screen flex items-center px-6 bg-card/50"
      >
         <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
               Filosofía de trabajo
            </h2>

            <div className="text-xl text-muted-foreground space-y-6 leading-relaxed">
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
