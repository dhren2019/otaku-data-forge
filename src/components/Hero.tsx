import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Play, Star } from "lucide-react";
import heroImage from "@/assets/hero-anime-dev.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-gradient-card px-4 py-2 rounded-full border border-border">
              <Star className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">
                Más de 39,000 animes disponibles
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                La <span className="bg-gradient-primary bg-clip-text text-transparent">API de Anime</span>
                <br />
                para creadores, bots
                <br />
                y apps modernas
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Accede a más de 39,000 animes, películas y OVAs con datos actualizados, imágenes y metadatos.
                <br />
                <span className="text-primary font-semibold">
                  Potencia tu proyecto con la API más fácil y potente del mundo otaku.
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Conseguir API Key Gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="group">
                <Play className="w-5 h-5" />
                Ver Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">38K+</div>
                <div className="text-sm text-muted-foreground">Animes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Desarrolladores</div>
              </div>
            </div>
          </div>

          {/* Code Example */}
          <div className="lg:pl-8">
            <Card className="bg-gradient-card border-border/50 shadow-card overflow-hidden">
              <div className="bg-muted/30 px-4 py-2 border-b border-border/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-destructive rounded-full" />
                  <div className="w-3 h-3 bg-accent rounded-full" />
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground ml-2">Terminal</span>
                </div>
              </div>
              <div className="p-6 font-mono text-sm">
                  <div className="space-y-3">
                    <div className="text-accent">GET https://www.animeapiplatform.com/api/v1/anime</div>
                  <div className="text-muted-foreground">{`{`}</div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-secondary">"title"</span>: <span className="text-accent">"Naruto"</span>,</div>
                    <div><span className="text-secondary">"episodes"</span>: <span className="text-primary">220</span>,</div>
                    <div><span className="text-secondary">"type"</span>: <span className="text-accent">"TV"</span>,</div>
                    <div><span className="text-secondary">"status"</span>: <span className="text-accent">"Finished"</span>,</div>
                    <div><span className="text-secondary">"rating"</span>: <span className="text-primary">8.3</span>,</div>
                    <div><span className="text-muted-foreground">...</span></div>
                  </div>
                  <div className="text-muted-foreground">{`}`}</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;