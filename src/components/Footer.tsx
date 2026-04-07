import { ArrowUp, Instagram, Linkedin, MessageCircle } from "lucide-react";
import logoLunae from "@/assets/logo-lunae.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 items-start mb-12">
          {/* Logo */}
          <div>
            <img
              src={logoLunae}
              alt="Lunae Studio logo"
              className="h-10 w-auto mb-4"
            />
            <p className="font-body text-primary-foreground/80 text-sm leading-relaxed">
              Estúdio criativo que une Design Visual, UX Design e Estratégia Digital.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Links rápidos">
            <h3 className="font-display text-xl mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#sobre"
                  onClick={(e) => handleNavClick(e, "#sobre")}
                  className="font-body text-primary-foreground/80 hover:text-secondary transition-colors focus-ring rounded"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  onClick={(e) => handleNavClick(e, "#servicos")}
                  className="font-body text-primary-foreground/80 hover:text-secondary transition-colors focus-ring rounded"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#projetos"
                  onClick={(e) => handleNavClick(e, "#projetos")}
                  className="font-body text-primary-foreground/80 hover:text-secondary transition-colors focus-ring rounded"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#equipe"
                  onClick={(e) => handleNavClick(e, "#equipe")}
                  className="font-body text-primary-foreground/80 hover:text-secondary transition-colors focus-ring rounded"
                >
                  Equipe
                </a>
              </li>
            </ul>
          </nav>

          {/* Social & Contact */}
          <div>
            <h3 className="font-display text-xl mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors focus-ring"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors focus-ring"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors focus-ring"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Lunae Estúdio Criativo. Todos os direitos reservados.
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-body text-sm text-primary-foreground/80 hover:text-secondary transition-colors focus-ring rounded-lg px-3 py-2"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={16} />
            Voltar ao topo
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
