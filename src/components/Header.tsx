import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoLunae from "@/assets/logo-lunae.png";

const navItems = [
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Equipe Lunae", href: "#equipe" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-lunae-dark/85 backdrop-blur-md border-foreground/10 shadow-md py-2"
          : "bg-lunae-dark/60 backdrop-blur-sm border-foreground/5 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between" aria-label="Navegação principal">
          <a
            href="#"
            className="focus:outline-none focus:ring-2 focus:ring-accent rounded-lg flex-shrink-0"
            aria-label="Lunae Studio - Página inicial"
          >
            <img
              src={logoLunae}
              alt="Lunae Studio logo"
              className="h-8 md:h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-body font-medium text-lunae-light/90 hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent rounded-lg px-2 py-2 min-h-[44px] inline-flex items-center text-sm lg:text-base"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#cta"
                onClick={(e) => handleNavClick(e, "#cta")}
                className="btn-accent text-sm focus:outline-none focus:ring-2 focus:ring-accent min-h-[44px] inline-flex items-center"
              >
                Fale direto conosco
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-lunae-light/90 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded-lg min-w-[44px] min-h-[44px] inline-flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 animate-fade-in-up border-t border-foreground/10 pt-4" aria-label="Menu mobile">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block font-body font-medium text-lunae-light/90 hover:text-accent transition-colors duration-200 py-3 px-2 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-accent rounded-lg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#cta"
                  onClick={(e) => handleNavClick(e, "#cta")}
                  className="btn-accent text-sm inline-block mt-2 focus:outline-none focus:ring-2 focus:ring-accent min-h-[44px] inline-flex items-center"
                >
                  Fale direto conosco
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
