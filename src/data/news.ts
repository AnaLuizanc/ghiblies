
// Central data store for news information
// This file allows us to maintain consistent news data across multiple components

export type NewsItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  type: "edital" | "projeto" | "evento";
  date: string;
  content?: string[];
};

// Array with all news data
export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Processo Seletivo para Bolsistas",
    description: "Novas vagas para bolsistas em projetos de inovação tecnológica. O NDTI está com vagas abertas para estudantes interessados em atuar como bolsistas em projetos de inovação tecnológica. As inscrições podem ser realizadas através do portal do aluno.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3",
    type: "edital",
    date: "2025-05-10",
    content: [
      "O Núcleo de Desenvolvimento Tecnológico e Inovação (NDTI) do IFNMG Campus Montes Claros está com inscrições abertas para seleção de bolsistas que atuarão em diversos projetos de inovação tecnológica.",
      "As vagas são destinadas a estudantes dos cursos de Ciência da Computação, Engenharia de Computação, Sistemas de Informação e áreas afins, com conhecimentos em desenvolvimento web, mobile, inteligência artificial e IoT.",
      "Os selecionados receberão bolsas com valores entre R$ 400,00 e R$ 700,00, de acordo com o nível de formação e a carga horária de dedicação ao projeto.",
      "As inscrições podem ser realizadas através do portal do aluno até o dia 25 de maio. O processo seletivo incluirá análise de currículo, entrevista e prova prática de conhecimentos específicos.",
      "Para mais informações, acesse o edital completo no site do NDTI ou entre em contato pelo e-mail ndti@ifnmg.edu.br."
    ]
  },
  {
    id: 2,
    title: "Sistema de Gestão de Laboratórios",
    description: "Novo projeto para monitoramento e controle de equipamentos. Esta solução inovadora permitirá o acompanhamento em tempo real das condições dos laboratórios do campus.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3",
    type: "projeto",
    date: "2025-05-05",
    content: [
      "O NDTI lançou oficialmente o Sistema de Gestão de Laboratórios, uma solução tecnológica que irá revolucionar o monitoramento e controle dos equipamentos nos laboratórios do IFNMG Campus Montes Claros.",
      "Desenvolvido inteiramente por uma equipe de servidores e bolsistas do núcleo, o sistema utiliza sensores IoT para coletar dados sobre temperatura, umidade, consumo de energia e estado de funcionamento dos equipamentos em tempo real.",
      "Os dados são processados e disponibilizados em um dashboard web acessível aos técnicos e responsáveis pelos laboratórios, permitindo o acompanhamento remoto das condições e a detecção precoce de problemas.",
      "O projeto já está em fase piloto nos laboratórios de Informática e Eletrônica, com previsão de expansão para todos os demais laboratórios do campus até o final do ano.",
      "Esta iniciativa representa um importante avanço na gestão da infraestrutura do campus, contribuindo para a redução de custos com manutenção corretiva e prolongando a vida útil dos equipamentos."
    ]
  },
  {
    id: 3,
    title: "Workshop de Desenvolvimento Web",
    description: "Inscrições abertas para capacitação em tecnologias front-end. Nos dias 15 e 16 de maio, o NDTI realizará um workshop gratuito sobre tecnologias modernas para desenvolvimento web.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
    type: "evento",
    date: "2025-04-28",
    content: [
      "O NDTI promoverá nos dias 15 e 16 de maio um workshop gratuito sobre desenvolvimento web com tecnologias modernas. O evento será realizado no auditório do campus e também transmitido online.",
      "Durante os dois dias de imersão, os participantes terão a oportunidade de aprender sobre as principais tecnologias utilizadas no mercado atualmente, como React, Node.js, TypeScript e Tailwind CSS.",
      "As atividades incluirão palestras teóricas e sessões práticas de codificação, nas quais os participantes desenvolverão um projeto completo do zero até o deploy.",
      "O workshop será ministrado por profissionais experientes do mercado e professores da área de tecnologia do IFNMG, oferecendo uma visão ampla e prática das tecnologias abordadas.",
      "As inscrições são limitadas e podem ser realizadas através do site do NDTI até o dia 10 de maio. Serão emitidos certificados com carga horária de 16 horas para os participantes."
    ]
  },
  {
    id: 4,
    title: "Chamada para Projetos de Extensão",
    description: "Submeta sua proposta para o programa de extensão tecnológica. O NDTI está recebendo propostas para projetos de extensão na área de tecnologia.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3",
    type: "edital",
    date: "2025-04-20",
    content: [
      "O NDTI lançou chamada para submissão de propostas de projetos de extensão tecnológica para o segundo semestre de 2025. A iniciativa visa integrar o conhecimento acadêmico às demandas da comunidade externa.",
      "Podem submeter propostas servidores docentes e técnico-administrativos do IFNMG Campus Montes Claros, com formação ou atuação nas áreas de Tecnologia da Informação, Engenharias ou áreas afins.",
      "Os projetos devem ter como foco o desenvolvimento de soluções tecnológicas para problemas reais da comunidade, instituições públicas ou organizações do terceiro setor da região.",
      "Os projetos selecionados receberão apoio financeiro de até R$ 10.000,00 para aquisição de materiais e equipamentos, além de bolsas para estudantes que participarem como extensionistas.",
      "As propostas devem ser submetidas pelo SUAP até o dia 30 de maio, seguindo as diretrizes estabelecidas no edital disponível no site do NDTI."
    ]
  },
  {
    id: 6,
    title: "Hackathon IFNMG 2025",
    description: "O maior evento de tecnologia e inovação do Norte de Minas está chegando! Forme sua equipe e participe dessa maratona de desenvolvimento de soluções tecnológicas.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3",
    type: "evento",
    date: "2025-04-10",
    content: [
      "O Hackathon IFNMG 2025 já tem data marcada! O evento acontecerá nos dias 20, 21 e 22 de junho nas instalações do campus Montes Claros, reunindo estudantes, profissionais e entusiastas de tecnologia.",
      "Durante 48 horas ininterruptas, as equipes participantes terão o desafio de desenvolver soluções tecnológicas para problemas reais apresentados por empresas e instituições parceiras do norte de Minas Gerais.",
      "O evento contará com mentoria especializada, palestras inspiradoras, networking com profissionais do mercado e, claro, muita programação e criatividade.",
      "As equipes vencedoras receberão prêmios em dinheiro, oportunidades de estágio e incubação de projetos no NDTI, além de produtos e serviços oferecidos pelos patrocinadores.",
      "As inscrições já estão abertas e podem ser realizadas por equipes de 3 a 5 pessoas através do site oficial do evento até o dia 10 de junho."
    ]
  },
  {
    id: 8,
    title: "Bolsas de Iniciação em Desenvolvimento",
    description: "Programa oferece bolsas para estudantes interessados em aprender desenvolvimento de software em projetos reais do NDTI.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3",
    type: "edital",
    date: "2025-03-25",
    content: [
      "O NDTI abre inscrições para o programa de Iniciação em Desenvolvimento de Software, que oferece bolsas para estudantes interessados em aprender desenvolvimento de software na prática.",
      "O programa tem como objetivo introduzir estudantes do IFNMG no desenvolvimento de software através da participação em projetos reais coordenados pelo NDTI, sob a orientação de desenvolvedores experientes.",
      "Os selecionados receberão bolsas mensais de R$ 400,00 e terão a oportunidade de trabalhar com tecnologias modernas como React, Node.js, Flutter, TypeScript, entre outras.",
      "Podem se inscrever estudantes de qualquer curso do IFNMG Campus Montes Claros que estejam regularmente matriculados e cursando a partir do segundo período. Não é necessário ter experiência prévia em programação.",
      "As inscrições devem ser realizadas no período de 25 de março a 10 de abril através do formulário disponível no site do NDTI."
    ]
  }
];

// Function to get featured news items for homepage
export const getFeaturedNews = (count: number = 4): NewsItem[] => {
  return newsItems.slice(0, count);
};

// Function to get all news items
export const getAllNews = (): NewsItem[] => {
  return newsItems;
};

// Function to get a news item by ID
export const getNewsById = (id: number): NewsItem | undefined => {
  return newsItems.find(item => item.id === id);
};
