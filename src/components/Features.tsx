import { Card } from "@/components/ui/card";
import { Zap, RefreshCw, Wrench, Database, Shield, Smartphone } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Ultra rápida",
      description: "La velocidad es clave. Responde a tus usuarios casi en tiempo real sin esperar.",
      gradient: "from-primary to-secondary"
    },
    {
      icon: RefreshCw,
      title: "Datos siempre actualizados",
      description: "Mantén tu plataforma al día con anime actualizado, imágenes y metadatos sincronizados a diario.",
      gradient: "from-secondary to-accent"
    },
    {
      icon: Wrench,
      title: "Integración sin esfuerzo",
      description: "Nuestra documentación es clara, precisa y llena de ejemplos prácticos que te permitirán comenzar a integrar nuestra API sin perder tiempo.",
      gradient: "from-accent to-primary"
    },
    {
      icon: Database,
      title: "¡La base de datos de anime más masiva está al alcance de tu mano!",
      description: "Con más de 38,000 animes disponibles en nuestra API, tendrás acceso a la mayor colección de contenido otaku, asegurando que siempre puedas ofrecer lo mejor a tus usuarios.",
      gradient: "from-primary to-accent"
    },
    {
      icon: Shield,
      title: "Autenticación sencilla y segura",
      description: "Solo necesitas una API Key para comenzar. Rápida, simple y segura para proteger todas tus peticiones.",
      gradient: "from-secondary to-primary"
    },
    {
      icon: Smartphone,
      title: "Usa nuestra API en cualquier plataforma",
      description: "Web y desktop: React, Vue, Angular, Electron. Aplicaciones móviles: iOS, Android, React Native, Flutter. Bots de chat: Discord, Telegram, WhatsApp, Slack. Gaming: Unity, Unreal Engine, Godot",
      gradient: "from-accent to-secondary"
    },
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Perfecta para desarrolladores y creadores de todo tipo
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ya sea que estés trabajando en una aplicación móvil, una web interactiva, un bot o un juego, nuestra API está pensada para ti. Fácil de usar, rápida y confiable.
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