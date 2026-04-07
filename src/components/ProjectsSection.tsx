import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Monitor, Smartphone, Search, FileText, Layers } from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  // Detailed info for modal
  phases: {
    title: string;
    description: string;
  }[];
  identity: {
    briefing: boolean;
    research: boolean;
    architecture: boolean;
    wireframes: boolean;
    elements: boolean;
  };
  process: {
    image: string;
    description: string;
  };
  results: {
    metric: string;
    description: string;
  }[];
}

const projects: Project[] = [
  {
    id: "poppins",
    name: "Poppins Café",
    description: "Identidade visual completa para cafeteria artesanal, incluindo logo, cardápio e aplicações para redes sociais.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
    phases: [
      { title: "Pesquisa & UX", description: "Entrevistas, mapa de jornada, definição de conteúdo prioritário" },
      { title: "Identidade Visual", description: "Cores, tipografia, logotipo, elementos lunares personalizados" },
      { title: "Design da Interface", description: "Protótipo responsivo no Figma, layout e elementos criativos" },
      { title: "Desenvolvimento", description: "Ajustes e melhorias pós lançamento" },
    ],
    identity: {
      briefing: true,
      research: true,
      architecture: true,
      wireframes: true,
      elements: true,
    },
    process: {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      description: "Design responsivo com foco em mobile first",
    },
    results: [
      { metric: "+200%", description: "visitas orgânicas em 30 dias" },
      { metric: "Identidade aplicada", description: "a redes sociais" },
      { metric: "Mais contatos", description: "pelo formulário" },
    ],
  },
  {
    id: "aurora",
    name: "Aurora Wellness",
    description: "Branding e landing page para estúdio de yoga, com foco em transmitir paz e conexão com a natureza.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
    phases: [
      { title: "Pesquisa & UX", description: "Análise de público-alvo e benchmarking" },
      { title: "Identidade Visual", description: "Paleta suave, tipografia serena, elementos orgânicos" },
      { title: "Design da Interface", description: "Landing page com foco em conversão" },
      { title: "Desenvolvimento", description: "Otimização SEO e performance" },
    ],
    identity: {
      briefing: true,
      research: true,
      architecture: true,
      wireframes: true,
      elements: true,
    },
    process: {
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=500&h=300&fit=crop",
      description: "Experiência zen e minimalista",
    },
    results: [
      { metric: "+150%", description: "agendamentos online" },
      { metric: "Presença digital", description: "consolidada" },
      { metric: "+80%", description: "engajamento Instagram" },
    ],
  },
  {
    id: "stellar",
    name: "Stellar Tech",
    description: "UX Design e interface para aplicativo de finanças pessoais, priorizando simplicidade e acessibilidade.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    phases: [
      { title: "Pesquisa & UX", description: "Testes de usabilidade e prototipação" },
      { title: "Identidade Visual", description: "Design system moderno e acessível" },
      { title: "Design da Interface", description: "App mobile iOS e Android" },
      { title: "Desenvolvimento", description: "Acompanhamento de implementação" },
    ],
    identity: {
      briefing: true,
      research: true,
      architecture: true,
      wireframes: true,
      elements: true,
    },
    process: {
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=300&fit=crop",
      description: "Interface intuitiva e acessível",
    },
    results: [
      { metric: "4.8★", description: "avaliação na App Store" },
      { metric: "+50k", description: "downloads no primeiro mês" },
      { metric: "95%", description: "taxa de retenção" },
    ],
  },
  {
    id: "bloom",
    name: "Bloom Floricultura",
    description: "Estratégia de conteúdo e identidade visual para floricultura online, com foco em redes sociais.",
    image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=400&fit=crop",
    phases: [
      { title: "Pesquisa & UX", description: "Análise de concorrentes e público" },
      { title: "Identidade Visual", description: "Branding floral e delicado" },
      { title: "Design da Interface", description: "E-commerce e redes sociais" },
      { title: "Desenvolvimento", description: "Templates e guia de marca" },
    ],
    identity: {
      briefing: true,
      research: true,
      architecture: true,
      wireframes: true,
      elements: true,
    },
    process: {
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&h=300&fit=crop",
      description: "Presença digital encantadora",
    },
    results: [
      { metric: "+300%", description: "vendas online" },
      { metric: "2x", description: "seguidores em 3 meses" },
      { metric: "ROI positivo", description: "em 45 dias" },
    ],
  },
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, projects.length - 2) : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= projects.length - 2 ? 0 : prev + 1));
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + 2);
  // Handle wrap-around for carousel
  const displayProjects = visibleProjects.length < 2 
    ? [...visibleProjects, ...projects.slice(0, 2 - visibleProjects.length)]
    : visibleProjects;

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projetos" className="py-20 md:py-32 scroll-mt-20">
      <div className="section-container">
        {/* Section Title */}
        <div className="mb-8">
          <h2 className="section-title">Projetos</h2>
          <div className="graphite-sketch" aria-hidden="true" />
        </div>

        {/* Projects Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full bg-card shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors focus-ring"
            aria-label="Projeto anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full bg-card shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors focus-ring"
            aria-label="Próximo projeto"
          >
            <ChevronRight size={24} />
          </button>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 px-8 md:px-0">
            {displayProjects.map((project, index) => (
              <article
                key={`${project.id}-${index}`}
                className="rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl animate-fade-in"
                style={{ background: 'rgba(255, 255, 255, 0.9)' }}
              >
                {/* Project Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Projeto ${project.name}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-display text-primary mb-3">
                    {project.name}
                  </h3>
                  <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="font-body font-medium text-primary hover:text-secondary transition-colors inline-flex items-center gap-2 focus-ring rounded-lg py-2"
                  >
                    Ver detalhes <span aria-hidden="true">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Navegação do carrossel">
            {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * 2)}
                className={`w-3 h-3 rounded-full transition-all focus-ring ${
                  Math.floor(currentIndex / 2) === index
                    ? "bg-primary w-8"
                    : "bg-muted hover:bg-primary/50"
                }`}
                role="tab"
                aria-selected={Math.floor(currentIndex / 2) === index}
                aria-label={`Ir para projetos ${index * 2 + 1} e ${index * 2 + 2}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm animate-fade-in overflow-y-auto"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="bg-card rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with phases */}
            <div className="bg-primary text-primary-foreground p-6">
              <div className="flex items-start justify-between mb-6">
                <h2 id="project-modal-title" className="text-3xl font-display">
                  {selectedProject.name}
                </h2>
                <button
                  onClick={closeModal}
                  className="p-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors focus-ring rounded-lg"
                  aria-label="Fechar modal"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Project Phases */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {selectedProject.phases.map((phase, index) => (
                  <div key={index} className="bg-primary-foreground/10 rounded-lg p-3">
                    <h4 className="font-display text-sm mb-1">{phase.title}</h4>
                    <p className="text-xs text-primary-foreground/80 font-body">{phase.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              {/* Identity Visual Section */}
              <div className="mb-8 bg-background rounded-xl p-6 border border-border">
                <h3 className="text-2xl font-display text-primary mb-6">IDENTIDADE VISUAL DO PROJETO</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Identity Checklist */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                      </div>
                      <span className="font-body text-foreground">Briefing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Search className="w-6 h-6 text-primary" />
                      <span className="font-body text-foreground">Pesquisa & Benchmarking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Layers className="w-6 h-6 text-primary" />
                      <span className="font-body text-foreground">Arquitetura da informação</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FileText className="w-6 h-6 text-primary" />
                      <span className="font-body text-foreground">Wireframes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <div className="flex gap-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        </div>
                      </div>
                      <span className="font-body text-foreground">Elementos visuais</span>
                    </div>
                  </div>

                  {/* Brand Elements Preview */}
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-8 bg-secondary rounded-full" style={{ borderRadius: '60% 40% 60% 40%' }} />
                      <span className="font-display text-2xl text-primary">{selectedProject.name.split(' ')[0].toLowerCase()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                        <span className="text-xs">✨</span>
                      </div>
                      <span className="font-display text-xl text-secondary">{selectedProject.name.split(' ')[1]?.toUpperCase() || 'DESIGN'}</span>
                      <div className="w-5 h-5 bg-primary/20 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Process Section */}
              <div className="mb-8">
                <h3 className="text-2xl font-display text-primary mb-6">PROCESSO DO PROJETO</h3>
                
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  {/* Process Image */}
                  <div className="relative">
                    <div className="bg-muted rounded-xl p-4 border-2 border-border">
                      <div className="flex gap-1.5 mb-3">
                        <div className="w-3 h-3 rounded-full bg-secondary/50" />
                        <div className="w-3 h-3 rounded-full bg-primary/50" />
                        <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                      </div>
                      <img
                        src={selectedProject.process.image}
                        alt={`Processo do projeto ${selectedProject.name}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    {/* Mobile preview */}
                    <div className="absolute -bottom-4 -right-4 bg-card rounded-xl p-2 shadow-lg border border-border w-20">
                      <div className="w-full h-32 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg flex items-center justify-center">
                        <Smartphone className="w-6 h-6 text-primary/50" />
                      </div>
                    </div>
                  </div>

                  {/* Results Cards */}
                  <div className="space-y-3">
                    {selectedProject.results.map((result, index) => (
                      <div key={index} className="bg-background rounded-lg p-4 border border-border flex items-center gap-4">
                        <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <ChevronRight className="w-5 h-5 text-secondary" />
                        </div>
                        <div>
                          <span className="font-display text-lg text-primary">{result.metric}</span>
                          <p className="font-body text-sm text-muted-foreground">{result.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results Summary */}
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <h3 className="text-2xl font-display text-primary mb-4">RESULTADOS</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {selectedProject.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <p className="font-display text-3xl text-secondary">{result.metric}</p>
                      <p className="font-body text-sm text-foreground">{result.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
