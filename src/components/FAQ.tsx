import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Cómo consigo mi API key?",
      answer: "Es muy simple. Solo regístrate en nuestra plataforma y automáticamente recibirás tu API key gratuita con 1,000 peticiones mensuales para comenzar a desarrollar."
    },
    {
      question: "¿Puedo usar la API gratis?",
      answer: "¡Por supuesto! Ofrecemos un plan gratuito con 1,000 peticiones por mes que incluye acceso completo a nuestra base de datos de más de 39,000 animes."
    },
    {
      question: "¿Qué datos ofrece la API?",
      answer: "Nuestra API proporciona información completa de animes incluyendo títulos, episodios, géneros, ratings, imágenes, sinopsis, fechas de emisión, estudios, y mucho más. Todo en formato JSON fácil de consumir."
    },
    {
      question: "¿Cómo integro la API en mi app?",
      answer: "La integración es muy sencilla. Solo necesitas hacer peticiones HTTP GET a nuestros endpoints con tu API key. Tenemos documentación completa y ejemplos en múltiples lenguajes."
    },
    {
      question: "¿Hay límites de velocidad?",
      answer: "El plan gratuito tiene límites razonables para proyectos personales. El plan PRO ofrece límites mucho más amplios y mayor velocidad, ideal para aplicaciones comerciales y bots con mucho tráfico."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Preguntas frecuentes
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestra API de animes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card border border-border/50 rounded-xl px-8 py-2 shadow-card hover:shadow-glow transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;