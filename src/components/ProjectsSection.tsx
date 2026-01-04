import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "poppins",
    name: "Poppins Café",
    description: "Identidade visual completa para cafeteria artesanal, incluindo logo, cardápio e aplicações para redes sociais.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
  },
  {
    id: "aurora",
    name: "Aurora Wellness",
    description: "Branding e landing page para estúdio de yoga, com foco em transmitir paz e conexão com a natureza.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
  },
  {
    id: "stellar",
    name: "Stellar Tech",
    description: "UX Design e interface para aplicativo de finanças pessoais, priorizando simplicidade e acessibilidade.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: "bloom",
    name: "Bloom Floricultura",
    description: "Estratégia de conteúdo e identidade visual para floricultura online, com foco em redes sociais.",
    image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=400&fit=crop",
  },
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <section id="projetos" className="py-20 md:py-32 scroll-mt-20 bg-card/50">
      <div className="section-container">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="section-title">PROJETOS</h2>
          <div className="organic-divider w-28 mt-4" aria-hidden="true" />
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
                className="bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl animate-fade-in"
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
                <div className="p-6">
                  <h3 className="text-2xl font-display text-primary mb-3">
                    {project.name}
                  </h3>
                  <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <button className="btn-secondary text-sm focus-ring">
                    Ver detalhes
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
    </section>
  );
};

export default ProjectsSection;
