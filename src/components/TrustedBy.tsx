const TrustedBy = () => {
  const companies = [
    { name: "Amazon", logo: "🟨" },
    { name: "Netflix", logo: "🔴" },
    { name: "Spotify", logo: "🟢" },
    { name: "Uber", logo: "⚫" },
    { name: "Discord", logo: "🟣" },
    { name: "Telegram", logo: "🔵" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-muted-foreground">
            Más de 500 desarrolladores confían en nosotros
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center gap-2 hover:opacity-100 transition-opacity"
            >
              <span className="text-2xl">{company.logo}</span>
              <span className="font-semibold text-lg">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;