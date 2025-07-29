const TrustedBy = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            La API preferida por desarrolladores en todo el mundo
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Únete a cientos de desarrolladores que ya potencian sus proyectos con datos de anime actualizados, 
            endpoints ultra-rápidos y la documentación más clara del mercado.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
            <div className="flex items-center gap-2 text-primary">
              <span className="text-xl">⚡</span>
              <span className="font-semibold">Ultra Rápida</span>
            </div>
            <div className="flex items-center gap-2 text-secondary">
              <span className="text-xl">🛡️</span>
              <span className="font-semibold">99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <span className="text-xl">🚀</span>
              <span className="font-semibold">Fácil Integración</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;