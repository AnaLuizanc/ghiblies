
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { getAllProjects } from '@/data/projects';

const Projetos: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('todos');
  
  // Efeito para rolar a página para o topo quando o componente é montado
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Using the centralized projects data
  const allProjects = getAllProjects();
  
  const categories = ['todos', ...Array.from(new Set(allProjects.map(project => project.category)))];
  
  const filteredProjects = filter === 'todos' 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);

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
            
            {/* Botão de voltar para a página inicial */}
            <div className="mt-12 text-center">
              <Link 
                to="/" 
                className="inline-flex items-center text-ifnmg-blue hover:text-ndti-700 font-medium"
              >
                <ArrowLeft className="mr-1 h-4 w-4" />
                Voltar para a página inicial
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projetos;
