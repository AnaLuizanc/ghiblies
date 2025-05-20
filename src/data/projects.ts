
// Central data store for projects information
// This file allows us to maintain consistent project data across multiple components

export type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  longDescription?: string[];
  features?: string[];
  startDate?: string;
  status?: string;
  team?: string[];
  repository?: string;
};

// Array with all project data
export const projects: Project[] = [
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

// Função para obter apenas os primeiros N projetos destacados (para exibição na página inicial)
export const getFeaturedProjects = (count: number = 4): Project[] => {
  return projects.slice(0, count);
};

// Função para obter todos os projetos (para a página de projetos completa)
export const getAllProjects = (): Project[] => {
  return projects;
};

// Função para obter um projeto específico pelo ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
