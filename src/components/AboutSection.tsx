const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 scroll-mt-20">
      <div className="section-container">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="section-title">SOBRE NÓS</h2>
          <div className="organic-divider w-40 mt-4" aria-hidden="true" />
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <p className="text-lg font-body text-foreground leading-relaxed">
              A Lunae nasceu da união entre Luiza e Nayla, refletindo nossa conexão com o Design e a Criatividade. 
              Além da beleza do nosso nome, "Lunae" significa "Lua" em latim – símbolo de transformação e inspiração.
            </p>
            <p className="text-lg font-body text-foreground leading-relaxed">
              Nosso primeiro projeto juntas foi um presente para uma mentora chamada Lua, e desde então, 
              acreditamos que o design tem o poder de iluminar ideias e criar conexões autênticas.
            </p>
            <p className="text-lg font-body text-foreground leading-relaxed">
              Somos um Estúdio Criativo que une estratégia e arte para construir marcas, experiências visuais 
              e produtos digitais que deixam sua identidade brilhar.
            </p>
          </div>

          <div className="flex items-center justify-center">
            {/* Decorative moon illustration placeholder */}
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl" />
              <div className="relative w-full h-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-48 h-48" aria-hidden="true">
                  <defs>
                    <linearGradient id="moonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(var(--secondary))" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="40" fill="url(#moonGradient)" opacity="0.3" />
                  <path
                    d="M50,10 A40,40 0 1,1 50,90 A30,30 0 1,0 50,10"
                    fill="url(#moonGradient)"
                    opacity="0.8"
                  />
                  <circle cx="35" cy="35" r="3" fill="hsl(var(--secondary))" opacity="0.6" />
                  <circle cx="60" cy="55" r="2" fill="hsl(var(--secondary))" opacity="0.4" />
                  <circle cx="45" cy="65" r="2.5" fill="hsl(var(--secondary))" opacity="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Purpose and Values */}
        <div className="relative">
          {/* Organic hand-drawn divider */}
          <div className="flex justify-center mb-16">
            <svg viewBox="0 0 600 40" className="w-full max-w-2xl h-10" aria-hidden="true">
              <path
                d="M0,20 C50,10 100,30 150,20 S250,10 300,20 S400,30 450,20 S550,10 600,20"
                fill="none"
                stroke="hsl(var(--secondary))"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="8 4"
                className="opacity-60"
              />
            </svg>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Purpose */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-display text-primary mb-6">PROPÓSITO</h3>
              <p className="text-lg font-body text-foreground leading-relaxed">
                Ajudar marcas e pequenos negócios a se expressarem visualmente com autenticidade, estratégia e significado.
              </p>
            </div>

            {/* Values */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-display text-primary mb-6">VALORES</h3>
              <ul className="text-lg font-body text-foreground leading-relaxed space-y-2 list-none">
                <li>✦ Criatividade com propósito</li>
                <li>✦ Design acessível e funcional</li>
                <li>✦ Parceria e colaboração</li>
                <li>✦ Estratégia antes da estética</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
