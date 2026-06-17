import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronLeft, Heart, MessageCircle, ShieldCheck, ArrowRight, Sparkles, UserCheck, BookOpen } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const CamilaRamosCaseStudy = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#4A3B4E] selection:bg-[#D4C1EC] selection:text-[#4A3B4E]">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#F3E8FF] to-[#FAF9F6]">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D4C1EC]/20 blur-[120px] -z-10" />
          <div className="section-container">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link to="/#projetos" className="inline-flex items-center gap-2 text-[#8B5CF6] hover:text-[#6D28D9] transition-colors mb-8 font-body font-medium">
                <ChevronLeft size={16} />
                Voltar para projetos
              </Link>
              <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6 text-[#2D1B33]">
                Camila Ramos: Construindo uma <span className="text-[#8B5CF6]">Identidade Digital</span> de Acolhimento.
              </h1>
              <p className="text-xl md:text-2xl text-[#6B5B71] font-body max-w-2xl leading-relaxed mb-12 italic">
                "Cuidar das emoções na infância transforma o futuro"
              </p>
            </motion.div>

            {/* Hero Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-12"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden border border-[#D4C1EC]/30 shadow-2xl shadow-[#2D1B33]/5 bg-white">
                {/* Browser Bar */}
                <div className="bg-[#F3E8FF]/50 border-b border-[#D4C1EC]/20 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#D4C1EC]" />
                    <div className="w-3 h-3 rounded-full bg-[#D4C1EC]/60" />
                    <div className="w-3 h-3 rounded-full bg-[#D4C1EC]/30" />
                  </div>
                  <div className="mx-auto bg-white rounded-md px-3 py-1 text-[10px] text-[#8B5CF6] font-body w-1/2 text-center">
                    camilaramos.com.br
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&h=600&fit=crop" 
                  alt="Camila Ramos Desktop Mockup" 
                  className="w-full h-auto opacity-90"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-4 md:-right-10 z-20 w-32 md:w-64 rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-white">
                <div className="h-6 w-full bg-[#F3E8FF]/30 flex items-center justify-center">
                  <div className="w-12 h-1 bg-[#D4C1EC] rounded-full" />
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=800&fit=crop" 
                  alt="Camila Ramos Mobile Mockup" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Strategy Section */}
        <section className="py-24 bg-white">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-[#2D1B33]">A Estratégia Digital Lunae</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-display font-bold mb-3 flex items-center gap-2 text-[#8B5CF6]">
                      <ShieldCheck className="w-6 h-6" /> O Desafio
                    </h3>
                    <p className="text-[#6B5B71] font-body leading-relaxed">
                      O mercado de psicologia exige confiança imediata. Pais buscam acolhimento e segurança ao procurar um profissional para seus filhos. O desafio era transpor essa sensibilidade do consultório físico para o ambiente digital.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-3 flex items-center gap-2 text-[#8B5CF6]">
                      <Sparkles className="w-6 h-6" /> A Solução Lunae
                    </h3>
                    <p className="text-[#6B5B71] font-body leading-relaxed">
                      Criamos um ecossistema digital completo. Não apenas um site, mas um canal de conversão via WhatsApp integrado a uma narrativa de autoridade no Google e proximidade nas redes sociais, humanizando a marca da Camila.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-3 flex items-center gap-2 text-[#8B5CF6]">
                      <UserCheck className="w-6 h-6" /> Foco no Usuário
                    </h3>
                    <p className="text-[#6B5B71] font-body leading-relaxed">
                      A navegação foi pensada para pais que estão muitas vezes ansiosos ou com pressa. Entregamos as informações de "Como funciona" e "Benefícios" de forma clara, lúdica e acessível, reduzindo a ansiedade do primeiro contato.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-full bg-[#F3E8FF] absolute -z-10 w-full scale-110 blur-3xl opacity-50" />
                <img 
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&h=800&fit=crop" 
                  alt="Acolhimento Infantil" 
                  className="rounded-3xl shadow-2xl border-8 border-white"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Visual Identity Section */}
        <section className="py-24 bg-[#FAF9F6]">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-[#2D1B33]">Identidade Visual</h2>
              <p className="text-[#8B5CF6] font-body font-medium uppercase tracking-widest">Acolhimento em cada detalhe</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-white shadow-sm border border-[#D4C1EC]/20">
                <div className="flex gap-2 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#8B5CF6]" title="Roxo Principal" />
                  <div className="w-10 h-10 rounded-full bg-[#D4C1EC]" title="Lilás Suave" />
                  <div className="w-10 h-10 rounded-full bg-[#FAF9F6]" title="Off-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-4 text-[#2D1B33]">Paleta de Cores</h3>
                <p className="text-[#6B5B71] font-body leading-relaxed">
                  O uso dos tons de roxo/lilás e off-white comunica serenidade e profissionalismo. As cores evocam o universo lúdico infantil de forma sofisticada, sem parecerem infantis demais, mantendo a autoridade clínica.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-white shadow-sm border border-[#D4C1EC]/20">
                <div className="mb-6 font-display text-3xl text-[#2D1B33]">
                  Aa <span className="font-body font-normal text-2xl text-[#6B5B71]">Aa</span>
                </div>
                <h3 className="text-xl font-display font-bold mb-4 text-[#2D1B33]">Tipografia</h3>
                <p className="text-[#6B5B71] font-body leading-relaxed">
                  O contraste entre a fonte com serifa elegante (que transmite autoridade e tradição) e a sans-serif moderna (que garante leitura fácil e acessibilidade) reflete o equilíbrio entre ciência e empatia.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-white shadow-sm border border-[#D4C1EC]/20">
                <div className="mb-6 flex gap-4 text-[#8B5CF6]">
                  <Heart size={32} />
                  <Sparkles size={32} />
                  <MessageCircle size={32} />
                </div>
                <h3 className="text-xl font-display font-bold mb-4 text-[#2D1B33]">Elementos Gráficos</h3>
                <p className="text-[#6B5B71] font-body leading-relaxed">
                  Ícones suaves e formas orgânicas/arredondadas reforçam a ideia de "acolhimento" e "cuidado". Cada elemento gráfico foi desenhado para abraçar o conteúdo e guiar o olhar de forma gentil.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Generated Section */}
        <section className="py-24 bg-white">
          <div className="section-container">
            <div className="bg-[#2D1B33] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B5CF6]/20 blur-[100px] rounded-full" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 text-center">Valor Gerado</h2>
                <div className="grid md:grid-cols-3 gap-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#8B5CF6]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <ShieldCheck className="w-8 h-8 text-[#D4C1EC]" />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-4">Credibilidade</h3>
                    <p className="text-white/70 font-body leading-relaxed">
                      A presença digital sólida posiciona a Camila acima de profissionais que dependem apenas de redes sociais, transmitindo seriedade institucional.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#8B5CF6]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <MessageCircle className="w-8 h-8 text-[#D4C1EC]" />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-4">Agendamento</h3>
                    <p className="text-white/70 font-body leading-relaxed">
                      Botões de CTA estratégicos em toda a jornada do usuário facilitam o contato direto via WhatsApp, aumentando a taxa de conversão de visitantes em pacientes.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#8B5CF6]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <BookOpen className="w-8 h-8 text-[#D4C1EC]" />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-4">Educação</h3>
                    <p className="text-white/70 font-body leading-relaxed">
                      O site atua como um filtro, explicando o processo de ludoterapia antes do primeiro contato, otimizando o tempo da profissional e qualificando o lead.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conversion Footer */}
        <section className="py-32 bg-[#FAF9F6]">
          <div className="section-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 max-w-3xl mx-auto leading-tight text-[#2D1B33]">
                Seu negócio tem a presença digital que a qualidade do seu atendimento merece?
              </h2>
              
              <div className="flex flex-col items-center gap-8">
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-[#8B5CF6] text-white font-bold rounded-full text-lg hover:bg-[#6D28D9] transition-all shadow-xl shadow-[#8B5CF6]/20 flex items-center gap-3 group"
                >
                  Quero uma Identidade Digital Estratégica
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                <Link to="/#projetos" className="inline-flex items-center gap-2 text-[#6B5B71] hover:text-[#8B5CF6] transition-colors font-body font-medium">
                  <ChevronLeft size={20} />
                  ← Voltar para Projetos
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CamilaRamosCaseStudy;
