
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const NoticiaDetalhe: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Database of all news items
  const newsDatabase = [
    {
      id: 1,
      title: "Processo Seletivo para Bolsistas",
      description: "O NDTI está com vagas abertas para estudantes interessados em atuar como bolsistas em projetos de inovação tecnológica. As inscrições podem ser realizadas através do portal do aluno.",
      fullContent: `
        <h2>Detalhes do Processo Seletivo</h2>
        <p>O Núcleo de Desenvolvimento Tecnológico e Inovação (NDTI) do IFNMG Campus Montes Claros está abrindo inscrições para seu programa de bolsistas 2025. Esta é uma excelente oportunidade para estudantes que desejam ganhar experiência prática em projetos tecnológicos reais.</p>
        
        <h3>Vagas disponíveis:</h3>
        <ul>
          <li>2 vagas para Desenvolvimento Web (React/Node.js)</li>
          <li>2 vagas para Desenvolvimento Mobile (React Native)</li>
          <li>1 vaga para Design UX/UI</li>
          <li>1 vaga para Internet das Coisas (IoT)</li>
        </ul>
        
        <h3>Requisitos:</h3>
        <ul>
          <li>Estar regularmente matriculado em curso técnico ou superior do IFNMG;</li>
          <li>Possuir conhecimentos básicos na área de interesse;</li>
          <li>Disponibilidade de 20 horas semanais;</li>
          <li>Interesse em aprender e trabalhar em equipe.</li>
        </ul>
        
        <h3>Valor da bolsa:</h3>
        <p>R$ 500,00 mensais, com duração de 12 meses (possibilidade de renovação).</p>
        
        <h3>Inscrições:</h3>
        <p>De 15/05/2025 a 30/05/2025 pelo portal do aluno ou presencialmente no escritório do NDTI.</p>
        
        <h3>Processo de seleção:</h3>
        <p>Análise de histórico escolar, entrevista e prova prática.</p>
      `,
      date: "2025-05-10",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3",
      type: "edital",
      author: "Coordenação do NDTI"
    },
    {
      id: 3,
      title: "Workshop de Desenvolvimento Web",
      description: "Nos dias 15 e 16 de maio, o NDTI realizará um workshop gratuito sobre tecnologias modernas para desenvolvimento web. Inscreva-se e aprenda sobre React, Node.js e muito mais.",
      fullContent: `
        <h2>Workshop de Desenvolvimento Web Moderno</h2>
        <p>O NDTI tem o prazer de anunciar seu workshop hands-on de desenvolvimento web, focado nas tecnologias mais utilizadas no mercado atual.</p>
        
        <h3>O que você vai aprender:</h3>
        <ul>
          <li>Fundamentos de React e criação de componentes reutilizáveis</li>
          <li>APIs RESTful com Node.js e Express</li>
          <li>Integrações de banco de dados com MongoDB</li>
          <li>Deploy de aplicações na nuvem</li>
          <li>Boas práticas e padrões de projeto</li>
        </ul>
        
        <h3>Programação:</h3>
        <p><strong>Dia 1 (15/05):</strong> 14h às 18h - Fundamentos e Frontend com React</p>
        <p><strong>Dia 2 (16/05):</strong> 14h às 18h - Backend com Node.js e Deploy</p>
        
        <h3>Local:</h3>
        <p>Laboratório de Informática 3 - Bloco B</p>
        
        <h3>Inscrições:</h3>
        <p>Gratuitas, através do formulário online disponível no site do IFNMG.</p>
        
        <p>Vagas limitadas! Traga seu notebook para uma experiência mais completa.</p>
      `,
      date: "2025-04-28",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
      type: "evento",
      author: "Equipe de Desenvolvimento"
    },
    {
      id: 4,
      title: "Chamada para Projetos de Extensão",
      description: "O NDTI está recebendo propostas para projetos de extensão na área de tecnologia. Os projetos selecionados receberão suporte técnico e financeiro.",
      fullContent: `
        <h2>Chamada Interna para Projetos de Extensão em Tecnologia</h2>
        <p>O Núcleo de Desenvolvimento Tecnológico e Inovação (NDTI) convida servidores e estudantes do IFNMG Campus Montes Claros a submeterem propostas de projetos de extensão tecnológica.</p>
        
        <h3>Áreas prioritárias:</h3>
        <ul>
          <li>Soluções tecnológicas para problemas sociais</li>
          <li>Sustentabilidade e IoT</li>
          <li>Inclusão digital</li>
          <li>Tecnologias assistivas</li>
          <li>Aplicações educacionais</li>
        </ul>
        
        <h3>Benefícios para projetos selecionados:</h3>
        <ul>
          <li>Suporte técnico da equipe do NDTI</li>
          <li>Auxílio financeiro de até R$ 5.000 para materiais</li>
          <li>Possibilidade de bolsas para estudantes</li>
          <li>Infraestrutura do NDTI para desenvolvimento</li>
        </ul>
        
        <h3>Cronograma:</h3>
        <p><strong>Submissão de propostas:</strong> até 30/05/2025</p>
        <p><strong>Resultado preliminar:</strong> 10/06/2025</p>
        <p><strong>Resultado final:</strong> 15/06/2025</p>
        <p><strong>Início dos projetos:</strong> 01/07/2025</p>
        
        <h3>Documentação necessária:</h3>
        <p>Formulário de submissão, plano de trabalho e cronograma de execução.</p>
      `,
      date: "2025-04-20",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3",
      type: "edital",
      author: "Coordenação de Extensão do NDTI"
    },
    {
      id: 6,
      title: "Hackathon IFNMG 2025",
      description: "O maior evento de tecnologia e inovação do Norte de Minas está chegando! Forme sua equipe e participe dessa maratona de desenvolvimento de soluções tecnológicas.",
      fullContent: `
        <h2>Hackathon IFNMG 2025 - Tecnologia para o Desenvolvimento Regional</h2>
        <p>É com grande entusiasmo que anunciamos a terceira edição do Hackathon IFNMG, uma maratona de programação e inovação organizada pelo Núcleo de Desenvolvimento Tecnológico e Inovação.</p>
        
        <h3>O desafio:</h3>
        <p>Desenvolver soluções tecnológicas que abordem desafios específicos do Norte de Minas Gerais, promovendo desenvolvimento econômico sustentável, educação de qualidade ou saúde.</p>
        
        <h3>Categorias:</h3>
        <ul>
          <li>Agronegócio e Sustentabilidade</li>
          <li>Educação e Cultura</li>
          <li>Saúde e Bem-Estar</li>
        </ul>
        
        <h3>Premiação:</h3>
        <ul>
          <li>1º lugar: R$ 5.000 + incubação no NDTI</li>
          <li>2º lugar: R$ 3.000 + mentoria</li>
          <li>3º lugar: R$ 1.500</li>
          <li>Destaque em inovação: R$ 1.000</li>
        </ul>
        
        <h3>Informações importantes:</h3>
        <p><strong>Data:</strong> 24, 25 e 26 de junho de 2025</p>
        <p><strong>Local:</strong> IFNMG Campus Montes Claros</p>
        <p><strong>Inscrições:</strong> Equipes de 3 a 5 pessoas</p>
        <p><strong>Prazo para inscrição:</strong> até 15/06/2025</p>
        
        <h3>Mentoria e suporte:</h3>
        <p>As equipes contarão com mentores especializados em tecnologia, negócios e design durante todo o evento.</p>
      `,
      date: "2025-04-10",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3",
      type: "evento",
      author: "Comissão Organizadora"
    },
    {
      id: 8,
      title: "Bolsas de Iniciação em Desenvolvimento",
      description: "Programa oferece bolsas para estudantes interessados em aprender desenvolvimento de software em projetos reais do NDTI.",
      fullContent: `
        <h2>Programa de Iniciação em Desenvolvimento de Software</h2>
        <p>O NDTI lança seu programa de iniciação em desenvolvimento de software, destinado a estudantes que desejam ingressar na carreira de desenvolvimento mas ainda não possuem experiência prática.</p>
        
        <h3>Sobre o programa:</h3>
        <p>Com duração de 6 meses, o programa oferece formação prática em desenvolvimento de software, com mentoria direta de profissionais experientes do NDTI e participação em projetos reais desenvolvidos para o IFNMG.</p>
        
        <h3>Benefícios:</h3>
        <ul>
          <li>Bolsa mensal de R$ 400,00</li>
          <li>Certificado de participação</li>
          <li>Experiência em projetos reais</li>
          <li>Mentoria personalizada</li>
          <li>Possibilidade de contratação posterior</li>
        </ul>
        
        <h3>Trilhas de desenvolvimento:</h3>
        <ul>
          <li>Desenvolvimento Frontend (HTML, CSS, JavaScript, React)</li>
          <li>Desenvolvimento Backend (Node.js, Java, Python)</li>
          <li>Desenvolvimento Mobile (React Native)</li>
        </ul>
        
        <h3>Requisitos:</h3>
        <p>Estar regularmente matriculado em curso técnico ou superior do IFNMG; Conhecimentos básicos de lógica de programação; Disponibilidade de 15 horas semanais.</p>
        
        <h3>Inscrições:</h3>
        <p>De 01/04 a 15/04/2025, pelo portal do estudante.</p>
      `,
      date: "2025-03-25",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3",
      type: "edital",
      author: "Coordenação de Desenvolvimento"
    }
  ];

  const noticia = newsDatabase.find(item => item.id === Number(id));

  if (!noticia) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold text-ndti-800 mb-4">Notícia não encontrada</h1>
            <Link to="/novidades" className="inline-flex items-center text-ifnmg-blue hover:text-ndti-700 font-medium">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Voltar para Novidades
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link to="/novidades" className="inline-flex items-center text-ifnmg-blue hover:text-ndti-700 font-medium">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Voltar para Novidades
            </Link>
          </div>

          <article className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="h-64 md:h-96 relative">
              <img
                src={noticia.image}
                alt={noticia.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full inline-block ${
                    noticia.type === 'edital' ? 'bg-ndti-500 text-white' : 
                    'bg-white text-ndti-800'
                  }`}>
                    {noticia.type === 'edital' ? 'Edital' : 'Evento'}
                  </span>
                  <h1 className="text-2xl md:text-4xl font-bold text-white mt-3">{noticia.title}</h1>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-8 text-sm text-gray-500 border-b pb-4">
                <div>
                  Por: <span className="font-medium">{noticia.author}</span>
                </div>
                <div>
                  {new Date(noticia.date).toLocaleDateString('pt-BR')}
                </div>
              </div>
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: noticia.fullContent }}
              ></div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NoticiaDetalhe;
