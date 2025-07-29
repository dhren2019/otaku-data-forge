import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Crown, Zap } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            ¿Por qué <span className="bg-gradient-primary bg-clip-text text-transparent">hacerse PRO?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Accede a miles de datos por lo que cuesta un café
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <Card className="bg-gradient-card border-border/50 p-8 relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Plan Gratuito</h3>
              <div className="text-4xl font-bold text-primary mb-2">€0</div>
              <p className="text-muted-foreground">Para empezar</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent" />
                <span>1,000 peticiones por mes</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent" />
                <span>Acceso a base de datos completa</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent" />
                <span>Documentación completa</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent" />
                <span>Soporte por email</span>
              </li>
            </ul>

            <Button variant="outline" size="lg" className="w-full">
              <Zap className="w-4 h-4" />
              Comenzar Gratis
            </Button>
          </Card>

          {/* Pro Plan */}
          <Card className="bg-gradient-card border-primary/50 p-8 relative shadow-glow">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-gradient-primary px-4 py-2 rounded-full flex items-center gap-2">
                <Crown className="w-4 h-4 text-primary-foreground" />
                <span className="text-sm font-semibold text-primary-foreground">Más Popular</span>
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Plan PRO</h3>
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">€4.00</div>
              <p className="text-muted-foreground">por mes</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="font-medium">2,500 peticiones por mes y límites ampliados</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="font-medium">Acceso prioritario a nuevas features y endpoints</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="font-medium">Soporte premium y canal privado de Discord</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="font-medium">Ideal para bots, apps y proyectos comerciales</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span>Todo del plan gratuito incluido</span>
              </li>
            </ul>

            <Button variant="hero" size="lg" className="w-full">
              <Crown className="w-4 h-4" />
              Hacerse PRO y lleva tu proyecto al siguiente nivel
            </Button>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Crea tu propia plataforma de anime en minutos
          </p>
          <div className="inline-flex items-center gap-2 text-sm">
            <span className="text-accent">✓</span>
            <span>Sin compromisos</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-accent">✓</span>
            <span>Cancela cuando quieras</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;