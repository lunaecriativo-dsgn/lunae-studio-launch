import aboutIllustration from "@/assets/about-illustration.png";
import personagensCores from "@/assets/personagens-cores.png";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 scroll-mt-20">
      <div className="section-container">
        {/* Section Title */}
        <div className="mb-8">
          <h2 className="section-title">Sobre Nós</h2>
          <div className="organic-divider w-40 mt-4" aria-hidden="true" />
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="space-y-6 moon-glow text-left">
            <p className="font-body text-foreground leading-relaxed">
              A Lunae nasceu da união entre Luiza e Nayla, refletindo nossa conexão com o Design e a Criatividade. 
              Além da beleza do nosso nome, "Lunae" significa "Lua" em latim – símbolo de transformação e inspiração.
            </p>
            <p className="font-body text-foreground leading-relaxed">
              Nosso primeiro projeto juntas foi um presente para uma mentora chamada Lua, e desde então, 
              acreditamos que o design tem o poder de iluminar ideias e criar conexões autênticas.
            </p>
            <p className="font-body text-foreground leading-relaxed">
              Somos um Estúdio Criativo que une estratégia e arte para construir marcas, experiências visuais 
              e produtos digitais que deixam sua identidade brilhar.
            </p>
          </div>

          {/* About Illustration */}
          <div className="flex items-center justify-center">
            <img
              src={aboutIllustration}
              alt="Ilustração de duas pessoas criativas celebrando juntas"
              className="w-full max-w-md animate-float"
            />
          </div>
        </div>

        {/* Purpose and Values - Card Layout */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Propósito Card */}
          <div className="service-card text-left !p-10 md:!p-12">
            <span className="text-4xl mb-5 block" aria-hidden="true">💡</span>
            <h3 className="text-2xl md:text-3xl font-display text-primary mb-4">
              Propósito
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Ajudar marcas e pequenos negócios a se expressarem visualmente com autenticidade, estratégia e significado.
            </p>
          </div>

          {/* Valores Card */}
          <div className="service-card text-left !p-10 md:!p-12">
            <span className="text-4xl mb-5 block" aria-hidden="true">✨</span>
            <h3 className="text-2xl md:text-3xl font-display text-primary mb-4">
              Valores
            </h3>
            <ul className="font-body text-muted-foreground leading-relaxed space-y-3 list-none mt-4">
              <li>✦ Criatividade com propósito</li>
              <li>✦ Design acessível e funcional</li>
              <li>✦ Parceria e colaboração</li>
              <li>✦ Estratégia antes da estética</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Character illustration as section divider - Full width outside container */}
      <div className="mt-20 w-full overflow-hidden">
        <img
          src={personagensCores}
          alt="Ilustração colorida de personagens criativos flutuando em uma onda roxa"
          className="w-full max-w-6xl mx-auto"
        />
      </div>
    </section>
  );
};

export default AboutSection;
