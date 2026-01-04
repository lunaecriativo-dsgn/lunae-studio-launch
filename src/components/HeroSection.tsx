import heroIllustration from "@/assets/hero-illustration.png";

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
      {/* Paper texture background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroIllustration})` }}
        aria-hidden="true"
      />
      
      {/* Decorative organic shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-primary leading-tight mb-6">
              "Transformamos ideias em experiências visuais que inspiram e conectam."
            </h1>
            
            <p className="text-lg md:text-xl font-body text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Design visual, UX e estratégia digital unidos para contar a história única do seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#cta"
                onClick={(e) => handleCTAClick(e, "#cta")}
                className="btn-primary text-lg focus-ring"
              >
                Vamos criar juntos?
              </a>
              <button
                onClick={handleWhatsApp}
                className="btn-secondary text-lg focus-ring"
              >
                Fale direto conosco
              </button>
            </div>

            {/* Organic hand-drawn divider */}
            <div className="mt-12 max-w-md mx-auto lg:mx-0">
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

          {/* Hero Illustration */}
          <div className="relative flex justify-center animate-float">
            <img
              src={heroIllustration}
              alt="Ilustração de duas pessoas criativas trabalhando juntas em um projeto de design"
              className="w-full max-w-lg drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
