import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between" aria-label="Navegação principal">
          <a href="#" className="focus-ring rounded-lg" aria-label="Lunae - Página inicial">
            <h1 className="text-3xl md:text-4xl font-display text-primary tracking-wider">
              LUNAE
            </h1>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-body font-medium text-foreground hover:text-primary transition-colors duration-200 focus-ring rounded-lg px-2 py-1"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#cta"
                onClick={(e) => handleNavClick(e, "#cta")}
                className="btn-accent text-sm focus-ring"
              >
                Fale direto conosco
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary focus-ring rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 animate-fade-in-up" aria-label="Menu mobile">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block font-body font-medium text-foreground hover:text-primary transition-colors duration-200 py-2 focus-ring rounded-lg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#cta"
                  onClick={(e) => handleNavClick(e, "#cta")}
                  className="btn-accent text-sm inline-block focus-ring"
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
