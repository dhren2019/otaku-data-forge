import { Button } from "@/components/ui/button";
import { Code, Github, Twitter, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Anime API
              </span>
            </div>
            <p className="text-muted-foreground">
              La API de anime más completa para desarrolladores. Más de 39,000 animes disponibles.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <MessageCircle className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold">Producto</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Documentación</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Ejemplos</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
            </ul>
          </div>

          {/* Developers */}
          <div className="space-y-4">
            <h3 className="font-semibold">Desarrolladores</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Guía de inicio</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Tutoriales</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Comunidad</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Discord</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Empresa</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Sobre nosotros</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacidad</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Anime API Platform. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-sm">
            Hecho con ❤️ para la comunidad otaku
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;