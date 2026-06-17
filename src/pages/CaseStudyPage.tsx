import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronLeft, Monitor, Smartphone, Search, FileText, Layers, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import paperTexture from "@/assets/paper-texture.jpg";
import StudioFitCaseStudy from "@/components/StudioFitCaseStudy";
import CamilaRamosCaseStudy from "@/components/CamilaRamosCaseStudy";
import SiqueiraAssociadosCaseStudy from "@/components/SiqueiraAssociadosCaseStudy";

interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  phases: {
    title: string;
    description: string;
  }[];
  identityItems: string[];
  process: {
    image: string;
    description: string;
    results: string[];
  };
  results: {
    metric: string;
    description: string;
  }[];
}

const projects: Record<string, Project> = {
  "studio-fit": {
    id: "studiofit",
    name: "Studio Fit",
    description: "Consultoria de design e estratégia digital para estúdio fitness de alto padrão.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    phases: [
      { title: "Pesquisa & UX", description: "Benchmarks fitness, personas (presencial/online), mapa da jornada de agendamento." },
      { title: "Identidade Visual", description: "Paleta técnica (Preto/Amarelo #FFB800), tipografia robusta, ícones funcionais." },
      { title: "Design da Interface", description: "Landing page de alta conversão, hierarquia visual com CTAs claras, layout responsivo." },
      { title: "Desenvolvimento", description: "Otimização de desempenho, integração de formulário e WhatsApp, SEO local." },
    ],
    identityItems: [
      "Briefing: Foco em autoridade e 'Premium/Dark' design.",
      "Pesquisa & Benchmarking: Estúdios locais e grandes redes.",
      "Arquitetura da Informação: Estrutura One-Page para navegação fluida.",
      "Wireframes: Foco em prova social e depoimentos.",
      "Elementos visuais: Fotos de alto contraste, força e foco."
    ],
    process: {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      description: "Design responsivo com foco em mobile first",
      results: [
        "+45% de leads via formulário no primeiro mês.",
        "Identidade Reforçada: Consistência visual física/digital.",
        "Mais Contatos: Redução de cliques no agendamento."
      ]
    },
    results: [
      { metric: "+500", description: "Alunos impactados pela nova presença digital" },
      { metric: "Agendamento Fluído", description: "Redução de cliques para avaliação gratuita" },
      { metric: "98% Satisfação", description: "Feedback positivo sobre facilidade de uso" },
    ],
  },
  "camila-ramos": {
    id: "camilaramos",
    name: "Camila Ramos",
    description: "Transformando a especialidade em psicologia infantil em uma marca acolhedora e uma presença digital profissional.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
    phases: [],
    identityItems: [],
    process: { image: "", description: "", results: [] },
    results: []
  },
  "siqueira-associados": {
    id: "siqueira",
    name: "Siqueira & Associados",
    description: "Identidade Digital exclusiva para advocacia de alto padrão, unindo tradição e modernidade no 'Luxury Law'.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
    phases: [],
    identityItems: [],
    process: { image: "", description: "", results: [] },
    results: []
  }
};

const CaseStudyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projects[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  if (slug === "studio-fit") {
    return <StudioFitCaseStudy />;
  }

  if (slug === "camila-ramos") {
    return <CamilaRamosCaseStudy />;
  }

  if (slug === "siqueira-associados") {
    return <SiqueiraAssociadosCaseStudy />;
  }

  return (
    <div 
      className="min-h-screen relative"
      style={{ 
        backgroundImage: `url(${paperTexture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-background/80 pointer-events-none" />
      
      <div className="relative z-10">
        <Header />
        
        <main className="pt-24 pb-20">
          <div className="section-container">
            <Link to="/#projetos" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8 font-body font-medium">
              <ChevronLeft size={20} />
              Voltar para Projetos
            </Link>

            <div className="bg-[#F5F3FA] rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
              {/* Header with phases */}
              <div className="bg-primary text-primary-foreground p-8 md:p-12">
                <div className="max-w-4xl mx-auto">
                  <h1 className="text-4xl md:text-5xl font-display mb-8">
                    {project.name}
                  </h1>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {project.phases.map((phase, index) => (
                      <div key={index} className="bg-black/20 rounded-lg p-4">
                        <h4 className="font-display text-sm mb-2">{phase.title}</h4>
                        <p className="text-xs text-primary-foreground/80 font-body">{phase.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 max-w-4xl mx-auto">
                {/* Identity Visual Section */}
                <div className="mb-12 bg-background rounded-xl p-8 border border-border">
                  <h3 className="text-2xl font-display text-primary mb-8">IDENTIDADE VISUAL DO PROJETO</h3>
                  
                  <div className="grid md:grid-cols-2 gap-12">
                    {/* Identity Checklist */}
                    <div className="space-y-4">
                      {project.identityItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-4">
                          {index === 0 && (
                            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                            </div>
                          )}
                          {index === 1 && <Search className="w-6 h-6 text-primary flex-shrink-0" />}
                          {index === 2 && <Layers className="w-6 h-6 text-primary flex-shrink-0" />}
                          {index === 3 && <FileText className="w-6 h-6 text-primary flex-shrink-0" />}
                          {index === 4 && (
                            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                              <div className="flex gap-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                              </div>
                            </div>
                          )}
                          <span className="font-body text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Brand Elements Preview */}
                    <div className="flex flex-col items-center justify-center gap-6">
                      {project.id === 'poppins' || project.id === 'studiofit' ? (
                        <>
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-[#FFB800] rounded-full shadow-lg" />
                            <span className="font-display text-3xl text-primary">STUDIOFIT</span>
                          </div>
                          <div className="flex items-center gap-6 mt-4">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-[#FFB800] rounded-full" />
                              <span className="font-display text-base text-[#FFB800]">STUDIO</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-[#333333] rounded-full" />
                              <span className="font-display text-base text-[#333333]">FIT</span>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-12 bg-secondary rounded-full" style={{ borderRadius: '60% 40% 60% 40%' }} />
                            <span className="font-display text-3xl text-primary">{project.name.split(' ')[0].toLowerCase()}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                              <span className="text-sm">✨</span>
                            </div>
                            <span className="font-display text-2xl text-secondary">{project.name.split(' ')[1]?.toUpperCase() || 'DESIGN'}</span>
                            <div className="w-6 h-6 bg-primary/20 rounded-full" />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Process Section */}
                <div className="mb-12">
                  <h3 className="text-2xl font-display text-primary mb-8">PROCESSO DO PROJETO</h3>
                  
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Process Image */}
                    <div className="relative">
                      <div className="bg-muted rounded-xl p-6 border-2 border-border shadow-inner">
                        <div className="flex gap-2 mb-4">
                          <div className="w-3 h-3 rounded-full bg-secondary/50" />
                          <div className="w-3 h-3 rounded-full bg-primary/50" />
                          <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                        </div>
                        <img
                          src={project.process.image}
                          alt={`Processo do projeto ${project.name}`}
                          className="w-full h-64 object-cover rounded-lg shadow-md"
                        />
                      </div>
                      {/* Mobile preview */}
                      <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-3 shadow-xl border border-border w-24">
                        <div className="w-full h-40 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl flex items-center justify-center">
                          <Smartphone className="w-8 h-8 text-primary/50" />
                        </div>
                      </div>
                    </div>

                    {/* Results Cards */}
                    <div className="space-y-4">
                      {project.process.results.map((result, index) => (
                        <div key={index} className="bg-primary/5 rounded-xl p-5 border border-primary/10 flex items-center gap-5 shadow-sm">
                          <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <ChevronRight className="w-6 h-6 text-secondary" />
                          </div>
                          <div>
                            <p className="font-body text-base text-primary font-medium">{result}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Results Summary */}
                <div className="bg-primary/5 rounded-2xl p-10 border border-primary/20 shadow-sm">
                  <h3 className="text-2xl font-display text-primary mb-8 text-center">RESULTADOS</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    {project.results.map((result, index) => (
                      <div key={index} className="text-center">
                        <p className={`font-display text-4xl mb-2 ${project.id === 'poppins' || project.id === 'studiofit' ? 'text-[#FFB800]' : 'text-secondary'}`}>
                          {result.metric}
                        </p>
                        <p className="font-body text-sm text-foreground leading-relaxed">{result.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default CaseStudyPage;
