import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, MessageSquare, Gamepad2 } from "lucide-react";

const PlatformShowcase = () => {
  const platforms = [
    {
      icon: Monitor,
      name: "Web & Desktop",
      description: "React, Vue, Angular, Electron",
      color: "text-primary"
    },
    {
      icon: Smartphone,
      name: "Apps Móviles",
      description: "iOS, Android, React Native, Flutter",
      color: "text-secondary"
    },
    {
      icon: MessageSquare,
      name: "Bots de Chat",
      description: "Discord, Telegram, WhatsApp, Slack",
      color: "text-accent"
    },
    {
      icon: Gamepad2,
      name: "Proyectos Gaming",
      description: "Unity, Unreal Engine, Godot",
      color: "text-primary"
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Úsala en <span className="bg-gradient-secondary bg-clip-text text-transparent">cualquier plataforma</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Web, móvil, bots de Discord, Telegram, apps de escritorio y más
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <Card key={index} className="bg-gradient-card border-border/50 p-6 text-center hover:shadow-card transition-all duration-300 group hover:-translate-y-1">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-8 h-8 ${platform.color}`} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{platform.name}</h3>
                <p className="text-sm text-muted-foreground">{platform.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Multi-device image showcase */}
        <div className="relative">
          <div className="max-w-4xl mx-auto">
            <img 
              src="/lovable-uploads/6a13a91c-2a24-4415-a3bc-6f67e7a57fcc.png" 
              alt="Anime API working on multiple devices" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
          
          {/* Overlay elements */}
          <div className="absolute top-4 left-4 bg-gradient-card backdrop-blur-sm border border-border/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium">API en tiempo real</span>
            </div>
            <div className="text-xs text-muted-foreground">Respuestas &lt;50ms</div>
          </div>
          
          <div className="absolute bottom-4 right-4 bg-gradient-card backdrop-blur-sm border border-border/50 rounded-lg p-4">
            <div className="text-sm font-medium text-primary mb-1">+39K animes</div>
            <div className="text-xs text-muted-foreground">Datos actualizados diariamente</div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Fácil integración con cualquier lenguaje o framework
            </p>
            <p className="text-lg font-semibold text-primary">
              Respuestas en JSON listas para consumir
            </p>
            <Button variant="gradient" size="lg" className="mt-4">
              Explorar Documentación
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformShowcase;