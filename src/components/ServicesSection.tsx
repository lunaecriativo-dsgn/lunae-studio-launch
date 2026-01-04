import { useState } from "react";
import { X } from "lucide-react";
import personagensCores from "@/assets/personagens-cores.png";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    id: "identidade-visual",
    title: "Identidade Visual",
    description: "Criamos a identidade visual completa do seu negócio, incluindo logotipo, paleta de cores, tipografia e elementos gráficos que traduzem a essência da sua marca de forma autêntica e memorável.",
    icon: "🎨",
  },
  {
    id: "ux-design",
    title: "UX Design",
    description: "Desenvolvemos experiências digitais intuitivas e acessíveis, focando na jornada do usuário para criar interfaces que encantam e convertem, sempre pensando em usabilidade e acessibilidade.",
    icon: "🖥️",
  },
  {
    id: "landing-pages",
    title: "Landing Pages & SEO",
    description: "Criamos páginas de alta conversão otimizadas para buscadores, combinando design estratégico, copywriting persuasivo e as melhores práticas de SEO para atrair e converter visitantes.",
    icon: "🚀",
  },
  {
    id: "estrategia-conteudo",
    title: "Estratégia de Conteúdo",
    description: "Desenvolvemos estratégias de conteúdo para redes sociais que conectam sua marca ao público-alvo, incluindo planejamento editorial, direção criativa e templates personalizados.",
    icon: "📱",
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const openModal = (service: Service) => {
    setSelectedService(service);
    setFormData({
      name: "",
      email: "",
      message: `Olá, tenho interesse no serviço de ${service.title}. `,
    });
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    const name = formData.name.trim();
    const message = formData.message.trim();
    
    if (!name || !message) {
      return;
    }
    
    // Format message for WhatsApp
    const fullMessage = `*Nome:* ${name}\n*Email:* ${formData.email.trim()}\n\n${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/5500000000000?text=${encodedMessage}`, "_blank");
    closeModal();
  };

  return (
    <section id="servicos" className="py-20 md:py-32 scroll-mt-20">
      <div className="section-container">
        {/* Section Title */}
        <div className="mb-8">
          <h2 className="section-title">SERVIÇOS</h2>
          <div className="organic-divider w-32 mt-4" aria-hidden="true" />
        </div>

        {/* Character illustration divider */}
        <div className="flex justify-center my-12">
          <img
            src={personagensCores}
            alt="Ilustração colorida de personagens criativos flutuando em uma onda roxa"
            className="w-full max-w-4xl"
          />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => openModal(service)}
              className="service-card text-left group focus-ring"
              aria-label={`Saiba mais sobre ${service.title}`}
            >
              <span className="text-4xl mb-4 block" aria-hidden="true">{service.icon}</span>
              <h3 className="service-title text-2xl md:text-3xl font-display text-primary mb-3 transition-transform duration-300 inline-block origin-left">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground line-clamp-2">
                {service.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm animate-fade-in"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="bg-card rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-3xl" aria-hidden="true">{selectedService.icon}</span>
                  <h2 id="modal-title" className="text-3xl font-display text-primary mt-2">
                    {selectedService.title}
                  </h2>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-lg"
                  aria-label="Fechar modal"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Service Description */}
              <p className="font-body text-foreground mb-8 leading-relaxed">
                {selectedService.description}
              </p>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-body font-medium text-foreground mb-2">
                    Seu nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Digite seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-body font-medium text-foreground mb-2">
                    Seu e-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    maxLength={255}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-body font-medium text-foreground mb-2">
                    Sua mensagem *
                  </label>
                  <textarea
                    id="message"
                    required
                    maxLength={1000}
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Conte-nos mais sobre seu projeto..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full text-lg focus-ring">
                  Enviar mensagem via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
