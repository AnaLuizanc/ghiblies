
// Dados compartilhados dos membros da equipe
// Este arquivo centraliza as informações dos membros da equipe para uso em múltiplos componentes

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin: string;
    github: string;
    email: string;
  }
};

// Array com todos os membros da equipe
export const teamMembers: TeamMember[] = [
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
  // Membros adicionais apenas para a página Equipe
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

// Função para obter apenas os primeiros N membros (para exibição na página inicial)
export const getHighlightedTeamMembers = (count: number = 4): TeamMember[] => {
  return teamMembers.slice(0, count);
};

// Função para obter todos os membros da equipe (para a página de equipe completa)
export const getAllTeamMembers = (): TeamMember[] => {
  return teamMembers;
};
