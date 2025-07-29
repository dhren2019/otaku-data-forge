import { Card } from "@/components/ui/card";
import { Zap, RefreshCw, Wrench, Database, Shield, Smartphone } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Ultra rápida y estable",
      description: "Infraestructura cloud, baja latencia y alta disponibilidad para tus proyectos.",
      gradient: "from-primary to-secondary"
    },
    {
      icon: RefreshCw,
      title: "Datos siempre actualizados",
      description: "Información de anime, imágenes y metadatos sincronizados a diario.",
      gradient: "from-secondary to-accent"
    },
    {
      icon: Wrench,
      title: "Integración instantánea",
      description: "Documentación clara y ejemplos para cualquier lenguaje y plataforma.",
      gradient: "from-accent to-primary"
    },
    {
      icon: Database,
      title: "+38,000 animes",
      description: "Endpoints rápidos y flexibles con una base de datos masiva.",
      gradient: "from-primary to-accent"
    },
    {
      icon: Shield,
      title: "Autenticación sencilla",
      description: "API Key simple y segura para proteger tus peticiones.",
      gradient: "from-secondary to-primary"
    },
    {
      icon: Smartphone,
      title: "Multiplataforma",
      description: "Compatible con web, móvil, bots de Discord, Telegram y más.",
      gradient: "from-accent to-secondary"
    },
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Pensada para desarrolladores
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Únete a cientos de desarrolladores que ya integran Anime API Platform en sus proyectos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 p-6 hover:shadow-card transition-all duration-500 group hover:-translate-y-2"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-card px-6 py-3 rounded-full border border-border">
            <span className="font-semibold">Documentación clara y ejemplos listos para usar</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-primary">Filtros avanzados por tipo, estado, tags y más</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;