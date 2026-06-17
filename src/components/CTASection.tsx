import React from "react";

const CTASection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Lunae. Vamos criar juntos?");
    window.open(`https://wa.me/5500000000000?text=${message}`, "_blank");
  };

  return (
    <section id="cta" className="py-20 md:py-32 scroll-mt-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center moon-glow">
          {/* Main Heading */}
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl font-display text-primary mb-6">
            Vamos Criar Juntos?
          </h2>

          {/* Supporting text */}
          <p className="md:text-lg font-body text-muted-foreground mb-10 leading-relaxed">
            Estamos prontas para ouvir sua ideia e transformá-la em uma experiência visual única. 
            Escolha a melhor forma de entrar em contato conosco.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleWhatsApp}
              className="btn-accent text-base focus-ring"
            >
              Fale direto conosco
            </button>
          </div>

          {/* Decorative organic line */}
          <div className="mt-16">
            <svg viewBox="0 0 500 30" className="w-full max-w-md mx-auto h-8" aria-hidden="true">
              <path
                d="M0,15 Q60,5 120,15 T240,15 T360,15 T480,15"
                fill="none"
                stroke="hsl(var(--secondary))"
                strokeWidth="2"
                strokeLinecap="round"
                className="opacity-50"
              />
              <circle cx="250" cy="15" r="4" fill="hsl(var(--secondary))" className="opacity-70" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
