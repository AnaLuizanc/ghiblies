
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Equipe: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Ricardo Oliveira",
      role: "Coordenador do NDTI",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Doutor em Ciência da Computação, com mais de 15 anos de experiência em desenvolvimento de software e gestão de projetos tecnológicos.",
      areas: ["Inteligência Artificial", "Gestão de Projetos", "Arquitetura de Software"],
      contact: "ricardo.oliveira@ifnmg.edu.br"
    },
    {
      name: "Ma. Fernanda Santos",
      role: "Desenvolvedora Full Stack Sênior",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Mestre em Engenharia de Software, especialista em desenvolvimento web e mobile. Coordena os projetos de aplicativos institucionais.",
      areas: ["React", "Node.js", "React Native", "DevOps"],
      contact: "fernanda.santos@ifnmg.edu.br"
    },
    {
      name: "Dr. Carlos Mendes",
      role: "Especialista em Segurança da Informação",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      bio: "Doutor em Segurança Computacional, responsável pela implementação de políticas de segurança nos sistemas desenvolvidos pelo NDTI.",
      areas: ["Criptografia", "Testes de Penetração", "Conformidade LGPD"],
      contact: "carlos.mendes@ifnmg.edu.br"
    },
    {
      name: "Me. Ana Cristina Lima",
      role: "UX/UI Designer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      bio: "Mestre em Design de Interação, responsável pela criação de interfaces intuitivas e acessíveis para os sistemas do IFNMG.",
      areas: ["Design de Interfaces", "Pesquisa com Usuários", "Acessibilidade Web"],
      contact: "ana.lima@ifnmg.edu.br"
    },
    {
      name: "Me. Pedro Alves",
      role: "Especialista em IoT",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
      bio: "Mestre em Engenharia Eletrônica, lidera os projetos de Internet das Coisas e automação no campus.",
      areas: ["Arduino", "Sensores", "Sistemas Embarcados", "Automação"],
      contact: "pedro.alves@ifnmg.edu.br"
    },
    {
      name: "Esp. Lucas Oliveira",
      role: "Desenvolvedor Backend",
      image: "https://images.unsplash.com/photo-1618077360395-f6a3b8e93e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      bio: "Especialista em Engenharia de Software, focado no desenvolvimento de APIs e sistemas de banco de dados.",
      areas: ["Java", "Spring Boot", "Python", "MongoDB", "PostgreSQL"],
      contact: "lucas.oliveira@ifnmg.edu.br"
    },
    {
      name: "Bel. Juliana Costa",
      role: "Desenvolvedora Frontend",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Graduada em Sistemas de Informação, especializada em criar interfaces modernas e responsivas para aplicações web.",
      areas: ["React", "Vue.js", "CSS/SASS", "Animações Web"],
      contact: "juliana.costa@ifnmg.edu.br"
    },
    {
      name: "Esp. Marcos Paulo Silva",
      role: "Analista de Dados",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Especialista em Ciência de Dados, responsável pela análise e visualização de dados institucionais para apoio à tomada de decisão.",
      areas: ["Python", "R", "Power BI", "Machine Learning"],
      contact: "marcos.silva@ifnmg.edu.br"
    }
  ];

  // Membros estudantes (bolsistas e voluntários)
  const studentMembers = [
    {
      name: "Isabela Rodrigues",
      role: "Bolsista - Desenvolvimento Web",
      course: "Ciência da Computação - 7º período",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      name: "Rafael Sousa",
      role: "Bolsista - Desenvolvimento Mobile",
      course: "Sistemas de Informação - 6º período",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      name: "Camila Ferreira",
      role: "Bolsista - UX/UI Design",
      course: "Sistemas para Internet - 5º período",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      name: "Bruno Martins",
      role: "Voluntário - Desenvolvimento Backend",
      course: "Ciência da Computação - 8º período",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      name: "Laura Oliveira",
      role: "Voluntária - Testes de Software",
      course: "Sistemas de Informação - 7º período",
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      name: "Thiago Santos",
      role: "Bolsista - IoT",
      course: "Engenharia de Computação - 8º período",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-24">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-ndti-800 mb-2">Nossa Equipe</h1>
            <p className="text-lg text-gray-600 mb-8">
              Conheça os profissionais e estudantes que fazem parte do Núcleo de Desenvolvimento de Tecnologia da Informação
            </p>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-ndti-800 mb-6">Coordenação e Equipe Técnica</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-ndti-800">{member.name}</h3>
                      <p className="text-ifnmg-blue font-medium mb-3">{member.role}</p>
                      <p className="text-gray-700 mb-4">{member.bio}</p>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-500 mb-2">Áreas de Especialização:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.areas.map((area, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">
                        <strong>Contato:</strong> {member.contact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-ndti-800 mb-6">Bolsistas e Voluntários</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
                {studentMembers.map((student, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden text-center p-4 transition-transform hover:-translate-y-1 hover:shadow-lg">
                    <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                      <img 
                        src={student.image} 
                        alt={student.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-ndti-800">{student.name}</h3>
                    <p className="text-ifnmg-blue text-sm mb-1">{student.role}</p>
                    <p className="text-gray-500 text-xs">{student.course}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-ndti-800 mb-4">Faça Parte da Nossa Equipe</h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Estudantes dos cursos de Tecnologia da Informação do IFNMG Campus Montes Claros podem participar do NDTI 
                como bolsistas ou voluntários, adquirindo experiência prática em projetos reais.
              </p>
              <a 
                href="#contato" 
                className="inline-block px-6 py-3 bg-ifnmg-blue text-white font-medium rounded-md hover:bg-ndti-700 transition-colors"
              >
                Entre em contato para mais informações
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Equipe;
