
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Github, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const EquipePage: React.FC = () => {
  const { ref, inView } = useInView({ 
    threshold: 0.2,
    triggerOnce: true 
  });

  // Using the same team members data as in TeamSection
  const teamMembers = [
    {
      name: "Dr. Ricardo Oliveira",
      role: "Coordenador do NDTI",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Doutor em Ciência da Computação, com mais de 15 anos de experiência em desenvolvimento de software e gestão de projetos tecnológicos.",
      social: {
        linkedin: "#",
        github: "#",
        email: "ricardo.oliveira@ifnmg.edu.br"
      }
    },
    {
      name: "Ma. Fernanda Santos",
      role: "Desenvolvedora Full Stack Sênior",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Mestre em Engenharia de Software, especialista em desenvolvimento web e mobile. Coordena os projetos de aplicativos institucionais.",
      social: {
        linkedin: "#",
        github: "#",
        email: "fernanda.santos@ifnmg.edu.br"
      }
    },
    {
      name: "Dr. Carlos Mendes",
      role: "Especialista em Segurança da Informação",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      bio: "Doutor em Segurança Computacional, responsável pela implementação de políticas de segurança nos sistemas desenvolvidos pelo NDTI.",
      social: {
        linkedin: "#",
        github: "#",
        email: "carlos.mendes@ifnmg.edu.br"
      }
    },
    {
      name: "Me. Ana Cristina Lima",
      role: "UX/UI Designer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      bio: "Mestre em Design de Interação, responsável pela criação de interfaces intuitivas e acessíveis para os sistemas do IFNMG.",
      social: {
        linkedin: "#",
        github: "#",
        email: "ana.lima@ifnmg.edu.br"
      }
    },
    // Additional team members for the dedicated page
    {
      name: "Dr. Paulo Sousa",
      role: "Especialista em Banco de Dados",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Doutor em Ciência da Computação com especialização em Banco de Dados. Responsável pelo design e manutenção das bases de dados dos sistemas do NDTI.",
      social: {
        linkedin: "#",
        github: "#",
        email: "paulo.sousa@ifnmg.edu.br"
      }
    },
    {
      name: "Me. Juliana Costa",
      role: "Desenvolvedora Back-End",
      image: "https://images.unsplash.com/photo-1629747490241-624f07d70e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Mestre em Engenharia de Software, especialista em desenvolvimento de APIs e sistemas distribuídos. Responsável pela arquitetura de back-end dos projetos.",
      social: {
        linkedin: "#",
        github: "#",
        email: "juliana.costa@ifnmg.edu.br"
      }
    },
    {
      name: "Esp. Gabriel Santos",
      role: "Desenvolvedor Front-End",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Especialista em desenvolvimento web front-end, com foco em React e frameworks modernos. Responsável pela implementação de interfaces dos sistemas.",
      social: {
        linkedin: "#",
        github: "#",
        email: "gabriel.santos@ifnmg.edu.br"
      }
    },
    {
      name: "Me. Laura Martins",
      role: "Analista de Requisitos",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Mestre em Engenharia de Software, especialista em análise e documentação de requisitos. Responsável pelo levantamento de necessidades junto aos stakeholders.",
      social: {
        linkedin: "#",
        github: "#",
        email: "laura.martins@ifnmg.edu.br"
      }
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-24 pb-16">
        <section className="container mx-auto px-4" ref={ref}>
          <h1 className="text-4xl font-bold text-ndti-800 mb-4">Nossa Equipe</h1>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Conheça os profissionais dedicados que compõem o Núcleo de Desenvolvimento de Tecnologia da Informação 
            do IFNMG Campus Montes Claros. Uma equipe multidisciplinar comprometida com a inovação e excelência.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={cn(
                  "bg-white rounded-lg shadow-md overflow-hidden card-hover transform transition-all duration-500",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden relative group">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-semibold text-ndti-800 hover:text-gradient-green-yellow">{member.name}</h3>
                  <p className="text-ndti-600 mb-3 hover:text-gradient-green-yellow">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a href={member.social.linkedin} aria-label="LinkedIn" className="text-gray-400 hover:text-ifnmg-green transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={member.social.github} aria-label="GitHub" className="text-gray-400 hover:text-ifnmg-green transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href={`mailto:${member.social.email}`} aria-label="Email" className="text-gray-400 hover:text-ifnmg-green transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default EquipePage;
