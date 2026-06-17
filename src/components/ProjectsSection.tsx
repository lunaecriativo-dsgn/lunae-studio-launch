import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Monitor, Smartphone, Search, FileText, Layers } from "lucide-react";

interface Project {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "studiofit",
    slug: "studio-fit",
    name: "Studio Fit",
    description: "Construindo uma identidade digital de peso através de design de alta performance e estratégia de presença online.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
  },
  {
    id: "camilaramos",
    slug: "camila-ramos",
    name: "Camila Ramos",
    description: "Transformando a especialidade em psicologia infantil em uma marca acolhedora e uma presença digital profissional.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
  },
  {
    id: "siqueira",
    slug: "siqueira-associados",
    name: "Siqueira & Associados",
    description: "Identidade Digital exclusiva para advocacia de alto padrão, unindo tradição e modernidade no 'Luxury Law'.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
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
    <section id="projetos" className="py-20 md:py-32 scroll-mt-20">
      <div className="section-container">
        {/* Section Title */}
        <div className="mb-6">
          <h2 className="section-title">Projetos</h2>
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
                  <Link 
                    to={`/projetos/${project.slug}`}
                    className="font-body font-medium text-primary hover:text-secondary transition-colors inline-flex items-center gap-2 focus-ring rounded-lg py-2"
                  >
                    Ver detalhes <span aria-hidden="true">→</span>
                  </Link>
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
