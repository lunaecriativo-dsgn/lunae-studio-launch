const HeroSection = () => {
  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Lunae.");
    window.open(`https://wa.me/5500000000000?text=${message}`, "_blank");
  };

  return (
    <section className="min-h-screen relative flex items-center pt-20 overflow-hidden">
      {/* Decorative organic shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Text Content */}
          <div className="animate-fade-in-up moon-glow">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-body font-medium text-primary leading-snug mb-6">
              "Transformamos ideias em experiências visuais que inspiram e conectam."
            </h1>
            
            <p className="text-base md:text-lg font-body text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
              Design visual, UX e estratégia digital unidos para contar a história única do seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#cta"
                onClick={(e) => handleCTAClick(e, "#cta")}
                className="btn-primary text-base focus-ring"
              >
                Vamos criar juntos?
              </a>
              <button
                onClick={handleWhatsApp}
                className="btn-secondary text-base focus-ring"
              >
                Fale direto conosco
              </button>
            </div>

            {/* Organic hand-drawn divider */}
            <div className="mt-12 max-w-md mx-auto">
              <svg viewBox="0 0 400 20" className="w-full h-5" aria-hidden="true">
                <path
                  d="M0,10 Q50,5 100,10 T200,10 T300,10 T400,10"
                  fill="none"
                  stroke="hsl(var(--secondary))"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="opacity-60"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
