
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const ProjetoDetalhe: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Dados dos projetos (numa aplicação real, isso viria de uma API)
  const projects = [
    {
      id: "1",
      title: "Sistema de Gestão Acadêmica",
      category: "Desenvolvimento Web",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      description: "Desenvolvimento de um sistema integrado para gestão de atividades acadêmicas, incluindo controle de frequência, notas e material didático.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      longDescription: [
        "O Sistema de Gestão Acadêmica é uma plataforma desenvolvida pelo NDTI para auxiliar na gestão de atividades acadêmicas do IFNMG Campus Montes Claros.",
        "Este sistema integra diversas funcionalidades essenciais para o cotidiano acadêmico, como controle de frequência dos alunos, lançamento e consulta de notas, gerenciamento de material didático, além de módulos administrativos para coordenadores e diretores.",
        "A plataforma foi projetada para ser responsiva e acessível, permitindo que professores, alunos e gestores possam utilizá-la de qualquer dispositivo conectado à internet."
      ],
      features: [
        "Controle de frequência automatizado",
        "Sistema de lançamento e consulta de notas",
        "Repositório de material didático",
        "Geração de relatórios acadêmicos",
        "Comunicação integrada entre docentes e discentes",
        "Painel administrativo para gestores"
      ],
      startDate: "Janeiro 2023",
      status: "Em desenvolvimento",
      team: ["Ana Silva (Coordenadora)", "João Pereira (Desenvolvedor Frontend)", "Maria Oliveira (Desenvolvedora Backend)", "Carlos Santos (UX Designer)"],
      repository: "https://github.com/ifnmg/sga"
    },
    {
      id: "2",
      title: "Aplicativo IFNMG Mobile",
      category: "Aplicativo Móvel",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      description: "Aplicativo móvel que permite aos alunos e servidores acessarem informações acadêmicas, notícias e serviços do campus.",
      technologies: ["React Native", "Firebase", "REST API"],
      longDescription: [
        "O IFNMG Mobile é um aplicativo desenvolvido para aproximar a comunidade acadêmica dos serviços digitais oferecidos pelo Instituto.",
        "Por meio deste aplicativo, alunos e servidores podem acessar informações acadêmicas, consultar o calendário de eventos, receber notificações sobre prazos importantes, verificar o cardápio do refeitório e utilizar diversos outros serviços do campus.",
        "O projeto nasceu da necessidade de facilitar o acesso às informações institucionais de forma rápida e prática, diretamente nos smartphones dos usuários."
      ],
      features: [
        "Consulta de notas e frequência",
        "Notificações sobre prazos acadêmicos",
        "Mapa interativo do campus",
        "Cardápio do refeitório",
        "Feed de notícias e eventos",
        "Documentos acadêmicos digitais"
      ],
      startDate: "Março 2023",
      status: "Versão beta em testes",
      team: ["Pedro Alves (Coordenador)", "Juliana Martins (Desenvolvedora Mobile)", "Rodrigo Lima (Designer de UX/UI)", "Fernanda Costa (Testes e Documentação)"],
      repository: "https://github.com/ifnmg/mobile-app"
    },
    {
      id: "3",
      title: "Portal de Eventos",
      category: "Plataforma Web",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      description: "Sistema para gestão de eventos acadêmicos, incluindo inscrições, emissão de certificados e programação.",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      longDescription: [
        "O Portal de Eventos é uma plataforma completa para gerenciamento de eventos acadêmicos do IFNMG Campus Montes Claros.",
        "Através deste sistema, é possível realizar a criação e divulgação de eventos, gerenciar inscrições, controlar a presença dos participantes, organizar a programação e emitir certificados digitais.",
        "A plataforma foi desenvolvida para atender à grande demanda de eventos acadêmicos promovidos pelo Instituto, facilitando o trabalho das comissões organizadoras e melhorando a experiência dos participantes."
      ],
      features: [
        "Criação e personalização de eventos",
        "Sistema de inscrição com múltiplas modalidades",
        "Controle de presença via QR Code",
        "Emissão automática de certificados",
        "Programação interativa com alertas",
        "Painéis administrativos para organizadores"
      ],
      startDate: "Junho 2022",
      status: "Em produção",
      team: ["Ricardo Ferreira (Coordenador)", "Camila Dias (Desenvolvedora Full Stack)", "Bruno Gomes (Desenvolvedor Backend)", "Luciana Vieira (Designer de UI)"],
      repository: "https://github.com/ifnmg/eventos"
    },
    {
      id: "4",
      title: "Sistema de Monitoramento de Laboratórios",
      category: "IoT & Software",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      description: "Solução para monitoramento remoto de equipamentos e condições ambientais dos laboratórios do campus.",
      technologies: ["Python", "Arduino", "MQTT", "MongoDB"],
      longDescription: [
        "O Sistema de Monitoramento de Laboratórios é uma solução IoT desenvolvida pelo NDTI para acompanhar remotamente as condições ambientais e o funcionamento dos equipamentos nos laboratórios do campus.",
        "Utilizando sensores conectados a microcontroladores Arduino, o sistema coleta dados como temperatura, umidade, consumo de energia e status dos equipamentos, enviando essas informações para um servidor central.",
        "Os dados são processados e disponibilizados em um dashboard web, permitindo que técnicos e responsáveis pelos laboratórios monitorem as condições em tempo real e recebam alertas em caso de anomalias."
      ],
      features: [
        "Monitoramento de temperatura e umidade",
        "Controle de consumo de energia",
        "Alertas em tempo real para condições anormais",
        "Histórico de medições com análise estatística",
        "Dashboard interativo e responsivo",
        "Sistema de manutenção preventiva baseado em dados"
      ],
      startDate: "Outubro 2022",
      status: "Implantado em 5 laboratórios",
      team: ["Marcos Andrade (Coordenador)", "Júlia Sousa (Especialista em IoT)", "Rafael Mendes (Desenvolvedor Backend)", "Thiago Costa (Especialista em Hardware)"],
      repository: "https://github.com/ifnmg/lab-monitoring"
    },
    {
      id: "5",
      title: "Biblioteca Digital",
      category: "Plataforma Web",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      description: "Repositório digital para obras acadêmicas, artigos científicos e materiais didáticos produzidos pelo IFNMG.",
      technologies: ["React", "Express", "MongoDB"],
      longDescription: [
        "A Biblioteca Digital é um repositório online que reúne e disponibiliza obras acadêmicas, artigos científicos e materiais didáticos produzidos pela comunidade do IFNMG.",
        "A plataforma permite a catalogação, armazenamento e consulta de documentos digitais, facilitando o acesso ao conhecimento produzido no Instituto.",
        "Com recursos avançados de pesquisa e filtragem por áreas de conhecimento, autores, ano de publicação e palavras-chave, o sistema proporciona uma experiência eficiente para pesquisadores, docentes e discentes."
      ],
      features: [
        "Catalogação automática de documentos",
        "Sistema de busca avançada",
        "Categorização por áreas de conhecimento",
        "Controle de acesso e permissões",
        "Métricas de acesso e downloads",
        "Integração com repositórios externos"
      ],
      startDate: "Abril 2023",
      status: "Em fase final de implementação",
      team: ["Patrícia Rocha (Coordenadora)", "Leonardo Campos (Desenvolvedor Full Stack)", "Amanda Nunes (Bibliotecária)", "Gabriel Souza (Especialista em UX)"],
      repository: "https://github.com/ifnmg/biblioteca-digital"
    },
    {
      id: "6",
      title: "Sistema de Reserva de Laboratórios",
      category: "Desenvolvimento Web",
      image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      description: "Plataforma para agendamento e gerenciamento de reservas dos laboratórios do campus.",
      technologies: ["Angular", "Spring Boot", "PostgreSQL"],
      longDescription: [
        "O Sistema de Reserva de Laboratórios é uma plataforma web desenvolvida para otimizar o processo de agendamento e utilização dos laboratórios do IFNMG Campus Montes Claros.",
        "Através deste sistema, docentes podem reservar espaços para aulas práticas, verificar a disponibilidade dos laboratórios e gerenciar suas reservas de forma autônoma.",
        "A plataforma também auxilia na administração dos espaços físicos, fornecendo relatórios de utilização, controle de conflitos de horários e gerenciamento de recursos disponíveis em cada laboratório."
      ],
      features: [
        "Reservas por horário e data",
        "Visualização de disponibilidade em calendário",
        "Controle de recursos por laboratório",
        "Aprovação automática ou manual de reservas",
        "Notificações por email sobre confirmações e alterações",
        "Relatórios de utilização por curso, docente e laboratório"
      ],
      startDate: "Fevereiro 2023",
      status: "Em produção",
      team: ["Felipe Carvalho (Coordenador)", "Renata Lima (Desenvolvedora Frontend)", "Igor Machado (Desenvolvedor Backend)", "Vanessa Alves (Analista de Requisitos)"],
      repository: "https://github.com/ifnmg/lab-booking"
    }
  ];

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow pt-24">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-2xl font-bold">Projeto não encontrado</h1>
            <button 
              onClick={() => navigate('/projetos')}
              className="mt-4 flex items-center text-ifnmg-blue hover:underline"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Voltar para projetos
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <button 
            onClick={() => navigate('/projetos')}
            className="mb-6 flex items-center text-ifnmg-blue hover:underline"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Voltar para projetos
          </button>
          
          {/* Hero do projeto */}
          <div className="relative rounded-lg overflow-hidden mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-ndti-800/70 to-ifnmg-blue/70 z-10"></div>
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-64 object-cover object-center"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-center p-8">
              <span className="inline-block bg-white text-ifnmg-blue px-3 py-1 rounded-full text-sm font-medium mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl font-bold text-white mb-2">{project.title}</h1>
              <p className="text-lg text-gray-200 max-w-2xl">{project.description}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold text-ndti-800 mb-6">Sobre o projeto</h2>
                <div className="space-y-4">
                  {project.longDescription.map((para, index) => (
                    <p key={index} className="text-gray-700">{para}</p>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-ndti-800 mb-6">Funcionalidades</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="font-bold text-gray-800 mb-4">Informações do Projeto</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Início do Projeto</p>
                    <p className="text-gray-800">{project.startDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="text-gray-800">{project.status}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Tecnologias</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.repository && (
                    <div>
                      <p className="text-sm text-gray-500">Repositório</p>
                      <a 
                        href={project.repository} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-ifnmg-blue hover:underline flex items-center"
                      >
                        GitHub <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-gray-800 mb-4">Equipe</h3>
                <ul className="space-y-2">
                  {project.team.map((member, index) => (
                    <li key={index} className="text-gray-700">{member}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjetoDetalhe;
