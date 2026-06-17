import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronLeft, TrendingUp, Search, Share2, CheckCircle2, ArrowRight, Monitor, Smartphone } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const StudioFitCaseStudy = () => {
  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-[#FFB800] selection:text-black">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FFB800]/5 blur-[120px] -z-10" />
          <div className="section-container">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link to="/#projetos" className="inline-flex items-center gap-2 text-[#FFB800] hover:text-white transition-colors mb-8 font-mono text-sm tracking-widest uppercase">
                <ChevronLeft size={16} />
                Voltar para projetos
              </Link>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
                Studio Fit: <span className="text-[#FFB800]">Presença Digital</span> para Personal Trainers e Academias.
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-body max-w-2xl leading-relaxed mb-12">
                Como unimos design de alta performance e estratégia de busca para transformar um estúdio local em uma referência digital absoluta.
              </p>
            </motion.div>

            {/* Hero Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-12"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-[#1a1a1a]">
                {/* Browser Bar */}
                <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="mx-auto bg-white/5 rounded-md px-3 py-1 text-[10px] text-gray-500 font-mono w-1/2 text-center">
                    studiofit.com.br
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=600&fit=crop" 
                  alt="Studio Fit Desktop Mockup" 
                  className="w-full h-auto opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-4 md:-right-10 z-20 w-32 md:w-64 rounded-3xl overflow-hidden border-4 border-[#1a1a1a] shadow-2xl bg-[#1a1a1a]">
                <div className="h-6 w-full bg-[#1a1a1a] flex items-center justify-center">
                  <div className="w-12 h-1 bg-white/10 rounded-full" />
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=800&fit=crop" 
                  alt="Studio Fit Mobile Mockup" 
                  className="w-full h-auto opacity-90"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Strategy Triad */}
        <section className="py-24 bg-[#161616]">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">A Estratégia Digital Lunae</h2>
              <p className="text-[#FFB800] font-mono uppercase tracking-widest">O Diferencial</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <TrendingUp className="w-8 h-8 text-[#FFB800]" />,
                  title: "Identidade Visual Estratégica",
                  desc: "Mais do que um logo, criamos um sistema visual que respira força. Desenvolvemos uma marca que impõe respeito e profissionalismo, garantindo que o valor do treino seja percebido antes mesmo da primeira aula."
                },
                {
                  icon: <Monitor className="w-8 h-8 text-[#FFB800]" />,
                  title: "Site e Conversão",
                  desc: "Projetamos uma plataforma focada em transformar visitantes em alunos. Uma interface rápida, intuitiva e otimizada para dispositivos móveis, onde o agendamento está a apenas um clique de distância."
                },
                {
                  icon: <Search className="w-8 h-8 text-[#FFB800]" />,
                  title: "Presença Digital (Google e Redes)",
                  desc: "Dominamos o SEO local para que o Studio Fit seja a primeira opção no Google. Além disso, estruturamos a comunicação para que a marca mantenha a mesma autoridade e impacto visual em todas as redes sociais."
                }
              ].map((pilar, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-[#FFB800]/30 transition-all"
                >
                  <div className="mb-6">{pilar.icon}</div>
                  <h3 className="text-xl font-display font-bold mb-4">{pilar.title}</h3>
                  <p className="text-gray-400 font-body leading-relaxed">{pilar.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-24">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Valor Gerado</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "Posicionamento Premium", label: "Marca reconhecida como referência de qualidade no setor fitness local." },
                { num: "Conversão Otimizada", label: "Redução da fricção no agendamento de aulas experimentais." },
                { num: "Presença Onipresente", label: "Identidade visual consistente do Google ao Instagram." }
              ].map((res, i) => (
                <div key={i} className="text-center p-10 rounded-2xl bg-gradient-to-b from-[#1a1a1a] to-transparent border border-white/5">
                  <p className="text-4xl md:text-5xl font-display font-bold text-[#FFB800] mb-4">{res.num}</p>
                  <p className="text-gray-400 font-body">{res.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Identidade Visual Section */}
        <section className="py-24 bg-[#111111]">
          <div className="section-container">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Identidade Visual</h2>
              <p className="text-gray-400 max-w-2xl">Exposição dos elementos que compõem a força visual da marca.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#1a1a1a] border border-white/5">
                <div className="flex gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#FFB800]" title="Amarelo Studio" />
                  <div className="w-12 h-12 rounded-full bg-[#333333]" title="Cinza Técnico" />
                  <div className="w-12 h-12 rounded-full bg-black border border-white/10" title="Preto Profundo" />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">Paleta de Cores</h3>
                <p className="text-gray-400 font-body leading-relaxed">
                  O contraste entre o preto profundo e o amarelo vibrante evoca energia e foco. É uma combinação clássica do universo fitness, mas aplicada com um refinamento que foge do óbvio.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-[#1a1a1a] border border-white/5">
                <div className="mb-6">
                  <span className="font-display text-4xl block mb-2">MONTSERRAT</span>
                  <span className="font-body text-xl text-gray-500">Inter Regular</span>
                </div>
                <h3 className="text-xl font-display font-bold mb-4">Tipografia</h3>
                <p className="text-gray-400 font-body leading-relaxed">
                  Utilizamos fontes robustas e geométricas para os títulos, transmitindo estabilidade. Para os textos de leitura, uma sans-serif moderna garante clareza em qualquer tamanho de tela.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-[#1a1a1a] border border-white/5">
                <div className="mb-6 flex gap-4 text-[#FFB800]">
                  <TrendingUp size={32} />
                  <CheckCircle2 size={32} />
                  <Smartphone size={32} />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">Elementos Gráficos</h3>
                <p className="text-gray-400 font-body leading-relaxed">
                  Ícones de traço limpo e formas angulares reforçam a ideia de progresso e precisão técnica. Cada detalhe visual foi pensado para guiar o olhar do aluno para o resultado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 bg-[#161616]">
          <div className="section-container">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Design e Experiência</h2>
              <p className="text-gray-400 max-w-2xl">O site foi construído para ser uma extensão digital do estúdio, priorizando a facilidade de navegação e a conversão direta.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop" 
                  alt="Studio Fit Detail 1" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&h=600&fit=crop" 
                  alt="Studio Fit Detail 2" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Conversion Footer */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFB800]/10 to-transparent -z-10" />
          <div className="section-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 max-w-3xl mx-auto leading-tight">
                Seu negócio tem a presença digital que a qualidade do seu treino merece?
              </h2>
              
              <div className="flex flex-col items-center gap-8">
                <a 
                  href="https://wa.me/5511999999999" // Placeholder WhatsApp
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-[#FFB800] text-black font-bold rounded-full text-lg hover:scale-105 transition-all shadow-lg shadow-[#FFB800]/20 flex items-center gap-3 group"
                >
                  Quero uma Identidade Digital Estratégica
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                <Link to="/#projetos" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#FFB800] transition-colors font-body font-medium">
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

export default StudioFitCaseStudy;
