import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Database, Users, Zap } from "lucide-react";

const DragonBallAPI = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-40 h-40 mb-6 mx-auto">
            <img 
              src="/lovable-uploads/a3667c6c-0a6d-47c5-8f74-f74ac1180a60.png" 
              alt="Dragon Ball API" 
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">API Dragon Ball</span> Exclusiva
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Accede a una base de datos completa de personajes, planetas, transformaciones y mucho más del universo Dragon Ball
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Features */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personajes Completos</h3>
                  <p className="text-muted-foreground">
                    Más de 200 personajes con biografías, imágenes, poderes y estadísticas detalladas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-secondary rounded-lg">
                  <Database className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Planetas & Ubicaciones</h3>
                  <p className="text-muted-foreground">
                    Descubre todos los planetas, dimensiones y ubicaciones icónicas del universo Dragon Ball
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Transformaciones</h3>
                  <p className="text-muted-foreground">
                    Todas las transformaciones, técnicas especiales y niveles de poder de los guerreros Z
                  </p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg" className="group">
              Explorar API Dragon Ball
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Code Example */}
          <div>
            <Card className="bg-gradient-card border-border/50 shadow-card overflow-hidden">
              <div className="bg-muted/30 px-4 py-2 border-b border-border/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-destructive rounded-full" />
                  <div className="w-3 h-3 bg-accent rounded-full" />
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground ml-2">Dragon Ball API</span>
                </div>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="space-y-3">
                  <div className="text-accent">GET https://www.animeapiplatform.com/api/dragonball/characters</div>
                  <div className="text-muted-foreground">{`{`}</div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-secondary">"name"</span>: <span className="text-accent">"Goku"</span>,</div>
                    <div><span className="text-secondary">"race"</span>: <span className="text-accent">"Saiyan"</span>,</div>
                    <div><span className="text-secondary">"planet"</span>: <span className="text-accent">"Vegeta"</span>,</div>
                    <div><span className="text-secondary">"power_level"</span>: <span className="text-primary">150000000</span>,</div>
                    <div><span className="text-secondary">"transformations"</span>: [</div>
                    <div className="pl-4">
                      <div><span className="text-accent">"Super Saiyan"</span>,</div>
                      <div><span className="text-accent">"Ultra Instinct"</span></div>
                    </div>
                    <div>],</div>
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

export default DragonBallAPI;