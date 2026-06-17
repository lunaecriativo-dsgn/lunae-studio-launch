import React from "react";
import { motion } from "motion/react";
import aboutIllustration from "@/assets/about-illustration.png";
import personagensCores from "@/assets/personagens-cores.png";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 scroll-mt-20">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="section-title mb-6">Manifesto Lunae: Nossa Voz, Sua Marca</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 moon-glow text-left">
              <p className="font-body text-xl text-primary font-semibold leading-relaxed">
                A Lunae nasce de um encontro de propósitos: o desejo de transformar a autonomia feminina em algo tangível, visual e estratégico. 
              </p>
              <p className="font-body text-foreground leading-relaxed">
                Somos um estúdio criativo fundado por duas mulheres, para mulheres que entenderam que o trabalho é o veículo para a sua liberdade. 
                Acreditamos que a independência financeira não é apenas um número, mas a capacidade de tomar as rédeas da própria narrativa. 
              </p>
              <p className="font-body text-foreground leading-relaxed">
                Para que isso aconteça, uma marca precisa de mais do que estética; ela precisa de alma, estratégia e presença.
              </p>
            </div>

            {/* About Illustration */}
            <div className="flex items-center justify-center">
              <motion.img
                src={aboutIllustration}
                alt="Ilustração representando a união e celebração criativa feminina"
                className="w-full max-w-md"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        </div>

        {/* Nossos Pilares - Scannable Grid */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-display text-primary mb-10 text-center">Nossos Pilares</h3>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="service-card !p-8">
              <span className="text-3xl mb-4 block" aria-hidden="true">🛡️</span>
              <h4 className="text-xl font-display font-bold text-primary mb-3">Identidade como Ato de Coragem</h4>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                Criar uma marca autêntica é se permitir ser vista. Nós damos forma àquilo que você já carrega dentro de si, traduzindo sua essência em um design que comunica sem precisar dizer uma única palavra.
              </p>
            </div>
            <div className="service-card !p-8">
              <span className="text-3xl mb-4 block" aria-hidden="true">🕊️</span>
              <h4 className="text-xl font-display font-bold text-primary mb-3">O Trabalho como Libertação</h4>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                Apoiamos o empreendedorismo feminino porque sabemos que, quando uma mulher prospera, ela transforma todo o seu entorno. Projetamos para que o seu negócio seja não apenas sustentável, mas uma potência.
              </p>
            </div>
            <div className="service-card !p-8">
              <span className="text-3xl mb-4 block" aria-hidden="true">📢</span>
              <h4 className="text-xl font-display font-bold text-primary mb-3">Voz e Forma</h4>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                Não entregamos apenas logotipos. Entregamos voz. Cada cor, tipografia e elemento visual é uma ferramenta de posicionamento feita para mostrar autoridade de quem sabe exatamente para onde está indo.
              </p>
            </div>
          </div>
        </div>

        {/* Nosso Compromisso & Colaboração */}
        <div className="grid md:grid-cols-2 gap-12 items-start bg-primary/5 rounded-3xl p-8 md:p-12 mb-20 border border-primary/10 transition-colors hover:border-primary/20">
          <div>
            <h3 className="text-2xl font-display text-primary mb-4">Nosso Compromisso</h3>
            <p className="font-body text-foreground leading-relaxed">
              Nós não desenhamos apenas marcas; <strong className="text-primary">desenhamos a presença digital com a sua identidade</strong>. 
              Estamos aqui para garantir que a sua marca tenha a força necessária para ocupar espaços, atrair as pessoas certas e sustentar a sua independência.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-display text-primary mb-4">Colaboração em vez de Competição</h3>
            <p className="font-body text-foreground leading-relaxed">
              Somos parceiras de jornada. Na Lunae, o processo criativo é um diálogo entre a sua visão e a nossa técnica, construindo uma ponte sólida entre o seu sonho e o sucesso comercial.
            </p>
          </div>
        </div>

        {/* Final punchy line */}
        <div className="text-center animate-fade-in">
          <p className="text-2xl md:text-3xl font-display text-primary tracking-tight">
            <strong>Lunae</strong>: Dando forma ao amanhã que você está construindo hoje.
          </p>
        </div>
      </div>

      {/* Character illustration as section divider */}
      <div className="mt-24 w-full overflow-hidden">
        <motion.img
          src={personagensCores}
          alt="Ilustração lúdica de figuras femininas projetando o futuro"
          className="w-full max-w-6xl mx-auto"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 1, 0, -1, 0]
          }}
          transition={{
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </div>
    </section>
  );
};

export default AboutSection;
