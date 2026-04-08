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
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Artistic brush stroke behind text */}
          <div className="relative">
            {/* Multi-color paint smudge */}
            <div className="absolute -inset-x-16 -inset-y-8 z-0 pointer-events-none" style={{ top: '-8%', bottom: '-8%' }} aria-hidden="true">
              {/* Purple base */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-scale-in"
                style={{
                  width: '110%',
                  height: '110%',
                  background: 'radial-gradient(ellipse 80% 70% at 30% 50%, hsla(245, 40%, 38%, 0.35) 0%, transparent 70%)',
                  filter: 'blur(18px)',
                  borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%',
                }}
              />
              {/* Pink middle */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-scale-in"
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'radial-gradient(ellipse 60% 80% at 55% 45%, hsla(351, 93%, 73%, 0.32) 0%, transparent 65%)',
                  filter: 'blur(20px)',
                  borderRadius: '45% 55% 50% 50% / 55% 45% 55% 45%',
                }}
              />
              {/* Yellow accent */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-scale-in"
                style={{
                  width: '90%',
                  height: '90%',
                  background: 'radial-gradient(ellipse 50% 60% at 75% 50%, hsla(56, 96%, 57%, 0.30) 0%, transparent 60%)',
                  filter: 'blur(16px)',
                  borderRadius: '50% 50% 45% 55% / 45% 55% 50% 50%',
                }}
              />
            </div>

            {/* Text Content */}
            <div className="relative z-10 animate-fade-in-up py-8 px-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary leading-snug mb-6">
                "Transformamos ideias em experiências visuais que inspiram e conectam."
              </h1>

              <p className="text-base md:text-lg font-body text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
                Design visual, UX e estratégia digital unidos para contar a história única do seu negócio.
              </p>

              <div className="flex justify-center">
                <button
                  onClick={handleWhatsApp}
                  className="font-body font-semibold px-8 py-4 rounded-full text-white transition-all duration-300 ease-in-out focus-ring"
                  style={{
                    backgroundColor: '#443A94',
                    boxShadow: '0 4px 20px -4px rgba(68, 58, 148, 0.4)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 30px -4px rgba(68, 58, 148, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px -4px rgba(68, 58, 148, 0.4)';
                  }}
                >
                  Fale direto conosco
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
