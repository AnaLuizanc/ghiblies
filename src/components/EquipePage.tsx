
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Github, Mail, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getAllTeamMembers } from '@/data/teamMembers';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const EquipePage: React.FC = () => {
  const { ref, inView } = useInView({ 
    threshold: 0.2,
    triggerOnce: true 
  });

  // Usando todos os membros da equipe do arquivo de dados compartilhado
  const teamMembers = getAllTeamMembers();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-24 pb-16">
        <section className="container mx-auto px-4" ref={ref}>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-ndti-800">Nossa Equipe</h1>
            <Link to="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Voltar à Página Inicial
              </Button>
            </Link>
          </div>
          
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
