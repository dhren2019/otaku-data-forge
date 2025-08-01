import { Button } from "@/components/ui/button";
import { Menu, Code, Zap, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 w-full transition-all duration-300 z-50 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-lg' 
        : 'bg-transparent backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Code className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Anime API
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Características
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Precios
          </a>
          <a href="#docs" className="text-muted-foreground hover:text-foreground transition-colors">
            Documentación
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hidden sm:flex"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
          <Button variant="ghost" className="hidden md:flex">
            Iniciar Sesión
          </Button>
          <Button variant="hero" size="lg">
            <Zap className="w-4 h-4" />
            Comenzar Gratis
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;