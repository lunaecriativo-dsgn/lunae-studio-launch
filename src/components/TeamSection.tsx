import { useState } from "react";
import charLuiza from "@/assets/char-luiza.png";
import fotoLuiza from "@/assets/foto-luiza.png";
import charNayla from "@/assets/char-nayla.png";
import fotoNayla from "@/assets/foto-nayla.png";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  illustration: string;
  photo: string;
  portfolioUrl: string;
}

const team: TeamMember[] = [
  {
    id: "luiza",
    name: "Luiza Menezes",
    role: "UX Designer & Estrategista Digital",
    description: "UX Designer com olhar estratégico para criar experiências que unem beleza e usabilidade. Ela traz empatia e metodologia para cada projeto, entendendo primeiro o público antes de desenvolver o design.",
    illustration: charLuiza,
    photo: fotoLuiza,
    portfolioUrl: "#",
  },
  {
    id: "nayla",
    name: "Nayla Prilla",
    description: "Ilustradora e designer com sensibilidade para traduzir conceitos em formas visuais únicas. Com olho apurado para cores e texturas, ela adiciona magia e personalidade a cada marca que toca.",
    role: "Ilustradora & Designer Visual",
    illustration: charNayla,
    photo: fotoNayla,
    portfolioUrl: "#",
  },
];

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article className="text-center">
      {/* Image Container with Hover Effect */}
      <div
        className="relative w-64 h-80 mx-auto mb-6 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        tabIndex={0}
        role="img"
        aria-label={`Foto de ${member.name}`}
      >
        {/* Polaroid-style frame */}
        <div className="absolute inset-0 bg-white rounded-lg shadow-xl p-2 pb-8 transform rotate-[-2deg]">
          <div className="relative w-full h-full overflow-hidden rounded-sm">
            {/* Illustration (default) */}
            <img
              src={member.illustration}
              alt={`Ilustração de ${member.name}`}
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
            />
            {/* Photo (on hover) */}
            <img
              src={member.photo}
              alt={`Foto de ${member.name}`}
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Member Info */}
      <h3 className="text-2xl md:text-3xl font-display text-primary mb-2">
        {member.name}
      </h3>
      <p className="font-body font-semibold text-secondary mb-4">
        {member.role}
      </p>
      <p className="font-body text-muted-foreground mb-6 max-w-sm mx-auto leading-relaxed">
        {member.description}
      </p>
      <a
        href={member.portfolioUrl}
        className="btn-secondary text-sm inline-block focus-ring"
        aria-label={`Acessar portfólio de ${member.name}`}
      >
        Acesse aqui o Portfólio
      </a>
    </article>
  );
};

const TeamSection = () => {
  return (
    <section id="equipe" className="py-20 md:py-32 scroll-mt-20">
      <div className="section-container">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="section-title">Equipe Lunae</h2>
          <div className="organic-divider w-36 mt-4" aria-hidden="true" />
          <p className="font-body text-lg text-muted-foreground mt-6 max-w-2xl">
            Somos um Estúdio Criativo que une estratégia e arte para construir marcas, 
            experiências visuais e produtos digitais que deixam sua identidade brilhar.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-4xl mx-auto">
          {team.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
