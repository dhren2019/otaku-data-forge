const TrustedBy = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            La API preferida por desarrolladores en todo el mundo
          </h3>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Únete a cientos de desarrolladores que ya potencian sus proyectos con datos de anime actualizados, 
            endpoints ultra-rápidos y la documentación más clara del mercado.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-4 p-6 bg-gradient-card rounded-xl border border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">⚡</span>
              </div>
              <h4 className="font-bold text-lg text-primary">Ultra Rápida</h4>
              <p className="text-sm text-muted-foreground text-center">Respuestas en milisegundos desde nuestra infraestructura global</p>
            </div>
            <div className="flex flex-col items-center gap-4 p-6 bg-gradient-card rounded-xl border border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">🛡️</span>
              </div>
              <h4 className="font-bold text-lg text-secondary">99.9% Uptime</h4>
              <p className="text-sm text-muted-foreground text-center">Disponibilidad garantizada para tus aplicaciones críticas</p>
            </div>
            <div className="flex flex-col items-center gap-4 p-6 bg-gradient-card rounded-xl border border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">🚀</span>
              </div>
              <h4 className="font-bold text-lg text-accent">Fácil Integración</h4>
              <p className="text-sm text-muted-foreground text-center">Documentación clara y ejemplos para cualquier lenguaje</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;