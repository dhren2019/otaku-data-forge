const TrustedBy = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            La API que todo creador de contenido necesita
          </h3>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Únete a miles de creadores que están mejorando sus aplicaciones y bots con nuestra API ultra rápida, fácil de integrar y con la mejor documentación del mercado. La forma más sencilla y eficiente de agregar anime a tu plataforma.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-4 p-6 bg-gradient-card rounded-xl border border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">⚡</span>
              </div>
              <h4 className="font-bold text-lg text-primary">⚡ velocidad impresionante</h4>
              <p className="text-sm text-muted-foreground text-center">Responde a tus usuarios en milisegundos gracias a nuestra infraestructura global optimizada.</p>
            </div>
            <div className="flex flex-col items-center gap-4 p-6 bg-gradient-card rounded-xl border border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">🛡️</span>
              </div>
              <h4 className="font-bold text-lg text-secondary">🛡️ fiabilidad 24/7</h4>
              <p className="text-sm text-muted-foreground text-center">Con un uptime del 99.9%, puedes estar tranquilo sabiendo que tu aplicación está siempre disponible para tus usuarios.</p>
            </div>
            <div className="flex flex-col items-center gap-4 p-6 bg-gradient-card rounded-xl border border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">🚀</span>
              </div>
              <h4 className="font-bold text-lg text-accent">🚀 integración instantánea</h4>
              <p className="text-sm text-muted-foreground text-center">Con nuestra documentación clara y ejemplos prácticos para cualquier lenguaje y plataforma, integrar nuestra API será un proceso sencillo y sin complicaciones.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;