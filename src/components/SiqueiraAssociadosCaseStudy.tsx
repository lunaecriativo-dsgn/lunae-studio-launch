import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronLeft, Shield, Scale, Gavel, CheckCircle2, ArrowRight, Monitor, Smartphone, Search } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const SiqueiraAssociadosCaseStudy = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] selection:bg-[#C5A059] selection:text-black">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C5A059]/5 blur-[120px] -z-10" />
          <div className="section-container">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link to="/#projetos" className="inline-flex items-center gap-2 text-[#C5A059] hover:text-white transition-colors mb-8 font-mono text-sm tracking-widest uppercase">
                <ChevronLeft size={16} />
                Voltar para projetos
              </Link>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
                Siqueira & Associados: <span className="text-[#C5A059]">Luxury Law</span> e Autoridade Digital.
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-body max-w-2xl leading-relaxed mb-12">
                Como traduzimos a tradição de um escritório jurídico em uma presença digital exclusiva que transmite confiança imediata.
              </p>
            </motion.div>

            {/* Hero Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-12"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-[#111111]">
                {/* Browser Bar */}
                <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                  </div>
                  <div className="mx-auto bg-white/5 rounded-md px-3 py-1 text-[10px] text-[#C5A059] font-mono w-1/2 text-center">
                    siqueiraassociados.adv.br
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=600&fit=crop" 
                  alt="Siqueira & Associados Desktop Mockup" 
                  className="w-full h-auto opacity-90"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-4 md:-right-10 z-20 w-32 md:w-64 rounded-3xl overflow-hidden border-4 border-[#111111] shadow-2xl bg-[#111111]">
                <div className="h-6 w-full bg-[#111111] flex items-center justify-center">
                  <div className="w-12 h-1 bg-white/10 rounded-full" />
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&h=800&fit=crop" 
                  alt="Siqueira & Associados Mobile Mockup" 
                  className="w-full h-auto opacity-90"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Strategy Section */}
        <section className="py-24 bg-[#0F0F0F]">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">A Estratégia Digital Lunae</h2>
              <p className="text-gray-400 font-body text-lg leading-relaxed">
                Abordamos o desafio de transformar a presença física do escritório em uma autoridade digital. O foco não foi apenas "fazer um site", mas criar uma Identidade Digital que transmita confiança imediata e exclusividade, essencial para o segmento Luxury Law.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="w-8 h-8 text-[#C5A059]" />,
                  title: "Confiança Imediata",
                  desc: "Através de uma tipografia serifada clássica e uma hierarquia visual limpa, estabelecemos autoridade no primeiro contato visual."
                },
                {
                  icon: <Scale className="w-8 h-8 text-[#C5A059]" />,
                  title: "Exclusividade Digital",
                  desc: "A paleta Dark & Gold foi estrategicamente escolhida para posicionar o escritório em um patamar premium, atraindo clientes de alto valor."
                },
                {
                  icon: <Monitor className="w-8 h-8 text-[#C5A059]" />,
                  title: "Navegação Intuitiva",
                  desc: "Além da estética, a interface foi projetada para ser acessível e intuitiva, guiando o cliente pelas áreas de atuação sem fricção."
                }
              ].map((pilar, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#C5A059]/30 transition-all"
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
              <p className="text-gray-400 max-w-2xl mx-auto">Resultados práticos de uma presença digital bem estruturada.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "94%", label: "de casos de sucesso destacados estrategicamente para gerar prova social." },
                { num: "Luxury Law", label: "Posicionamento de marca consolidado como referência em advocacia premium." },
                { num: "Conversão", label: "Redução drástica na fricção de contato via WhatsApp através de CTAs inteligentes." }
              ].map((res, i) => (
                <div key={i} className="text-center p-10 rounded-2xl bg-gradient-to-b from-[#141414] to-transparent border border-white/5">
                  <p className="text-4xl md:text-5xl font-display font-bold text-[#C5A059] mb-4">{res.num}</p>
                  <p className="text-gray-400 font-body">{res.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Identity Section */}
        <section className="py-24 bg-[#0F0F0F]">
          <div className="section-container">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Identidade Visual</h2>
              <p className="text-gray-400 max-w-2xl">A essência do escritório traduzida em pixels.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#141414] border border-white/5">
                <div className="flex gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#C5A059]" title="Dourado Fosco" />
                  <div className="w-12 h-12 rounded-full bg-[#1A1A1A]" title="Preto Profundo" />
                  <div className="w-12 h-12 rounded-full bg-[#E5E5E5]" title="Cinza Nobre" />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">Paleta de Cores</h3>
                <p className="text-gray-400 font-body leading-relaxed">
                  O uso do dourado fosco sobre o preto profundo evoca seriedade, luxo e sobriedade, fundamentais para o segmento jurídico de alto padrão.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-[#141414] border border-white/5">
                <div className="mb-6">
                  <span className="font-display text-4xl block mb-2 italic">Playfair Display</span>
                  <span className="font-body text-xl text-gray-500">Inter Regular</span>
                </div>
                <h3 className="text-xl font-display font-bold mb-4">Tipografia</h3>
                <p className="text-gray-400 font-body leading-relaxed">
                  O contraste entre o clássico (serifado) e o moderno (sans-serif) reflete a união entre a tradição do direito e a inovação da era digital.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-[#141414] border border-white/5">
                <div className="mb-6 flex gap-4 text-[#C5A059]">
                  <Gavel size={32} />
                  <Search size={32} />
                  <ArrowRight size={32} />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">Grafismos</h3>
                <p className="text-gray-400 font-body leading-relaxed">
                  Ícones lineares e discretos mantêm a sobriedade visual, garantindo que a informação seja a protagonista sem poluição estética.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conversion Footer */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#C5A059]/10 to-transparent -z-10" />
          <div className="section-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 max-w-3xl mx-auto leading-tight">
                Seu negócio tem a presença digital que a qualidade do seu trabalho merece?
              </h2>
              <p className="text-gray-400 font-body mb-12 max-w-2xl mx-auto">
                Uma identidade visual forte é o primeiro passo para uma estratégia de busca que realmente converte cliques em clientes de alto valor.
              </p>
              
              <div className="flex flex-col items-center gap-8">
                <a 
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-[#C5A059] text-black font-bold rounded-full text-lg hover:scale-105 transition-all shadow-lg shadow-[#C5A059]/20 flex items-center gap-3 group"
                >
                  Quero uma Identidade Digital Estratégica
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                <Link to="/#projetos" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#C5A059] transition-colors font-body font-medium">
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

export default SiqueiraAssociadosCaseStudy;
