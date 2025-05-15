
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

const Projetos: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('todos');
  
  const projects = [
    {
      id: "1",
      title: "Sistema de Gestão Acadêmica",
      category: "Desenvolvimento Web",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      description: "Desenvolvimento de um sistema integrado para gestão de atividades acadêmicas, incluindo controle de frequência, notas e material didático.",
      technologies: ["React", "Node.js", "PostgreSQL"]
    },
    {
      id: "2",
      title: "Aplicativo IFNMG Mobile",
      category: "Aplicativo Móvel",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      description: "Aplicativo móvel que permite aos alunos e servidores acessarem informações acadêmicas, notícias e serviços do campus.",
      technologies: ["React Native", "Firebase", "REST API"]
    },
    {
      id: "3",
      title: "Portal de Eventos",
      category: "Plataforma Web",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      description: "Sistema para gestão de eventos acadêmicos, incluindo inscrições, emissão de certificados e programação.",
      technologies: ["Vue.js", "Laravel", "MySQL"]
    },
    {
      id: "4",
      title: "Sistema de Monitoramento de Laboratórios",
      category: "IoT & Software",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      description: "Solução para monitoramento remoto de equipamentos e condições ambientais dos laboratórios do campus.",
      technologies: ["Python", "Arduino", "MQTT", "MongoDB"]
    },
    {
      id: "5",
      title: "Biblioteca Digital",
      category: "Plataforma Web",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      description: "Repositório digital para obras acadêmicas, artigos científicos e materiais didáticos produzidos pelo IFNMG.",
      technologies: ["React", "Express", "MongoDB"]
    },
    {
      id: "6",
      title: "Sistema de Reserva de Laboratórios",
      category: "Desenvolvimento Web",
      image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      description: "Plataforma para agendamento e gerenciamento de reservas dos laboratórios do campus.",
      technologies: ["Angular", "Spring Boot", "PostgreSQL"]
    }
  ];

  const categories = ['todos', 'Desenvolvimento Web', 'Aplicativo Móvel', 'Plataforma Web', 'IoT & Software'];
  
  const filteredProjects = filter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-24">
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-ndti-800 mb-2">Nossos Projetos</h1>
            <p className="text-lg text-gray-600 mb-8">
              Conheça os projetos desenvolvidos pelo NDTI do IFNMG Campus Montes Claros
            </p>
            
            {/* Filtros de categoria */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      filter === category
                        ? 'bg-ifnmg-blue text-white'
                        : 'bg-white border border-gray-300 text-gray-700 hover:border-ifnmg-blue'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Grid de projetos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-ndti-800">{project.title}</h3>
                      <span className="px-3 py-1 bg-ndti-100 text-ndti-800 rounded-full text-sm">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <div className="mb-5">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button 
                      onClick={() => navigate(`/projetos/${project.id}`)} 
                      className="text-ifnmg-blue hover:text-ndti-700 font-medium flex items-center"
                    >
                      Ver detalhes
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projetos;
