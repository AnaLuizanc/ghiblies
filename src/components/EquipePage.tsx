
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Github, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { getAllTeamMembers } from '@/data/teamMembers';

const EquipePage: React.FC = () => {
  const { ref, inView } = useInView({ 
    threshold: 0.2,
    triggerOnce: true 
  });

  // Usando todos os membros da equipe do arquivo de dados compartilhado
  const teamMembers = getAllTeamMembers();

  return (
    <div className="flex flex-col">
      <main className="flex-grow pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16">
        <section className="container mx-auto px-4 sm:px-6" ref={ref}>
          <h1 className="text-3xl md:text-4xl font-bold text-ndti-800 mb-3 md:mb-4">Nossa Equipe</h1>
          <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12 max-w-3xl">
            Conheça os profissionais dedicados que compõem o Núcleo de Desenvolvimento de Tecnologia da Informação 
            do IFNMG Campus Montes Claros. Uma equipe multidisciplinar comprometida com a inovação e excelência.
          </p>
          
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
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
                <div className="p-4 md:p-5 lg:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-ndti-800 hover:text-gradient-green-yellow">{member.name}</h3>
                  <p className="text-ndti-600 mb-2 md:mb-3 hover:text-gradient-green-yellow text-sm md:text-base">{member.role}</p>
                  <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a href={member.social.linkedin} aria-label="LinkedIn" className="text-gray-400 hover:text-ifnmg-green transition-colors">
                      <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
                    </a>
                    <a href={member.social.github} aria-label="GitHub" className="text-gray-400 hover:text-ifnmg-green transition-colors">
                      <Github className="h-4 w-4 md:h-5 md:w-5" />
                    </a>
                    <a href={`mailto:${member.social.email}`} aria-label="Email" className="text-gray-400 hover:text-ifnmg-green transition-colors">
                      <Mail className="h-4 w-4 md:h-5 md:w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Botão para voltar à página inicial */}
          <div className="text-center mt-8 md:mt-12">
            <Link 
              to="/" 
              className="inline-flex items-center text-ifnmg-blue hover:text-ndti-700 font-medium"
            >
              Voltar para a página inicial
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EquipePage;
