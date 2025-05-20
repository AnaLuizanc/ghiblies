
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getFeaturedProjects } from '@/data/projects';

const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);
  const navigate = useNavigate();
  
  // Using the centralized projects data
  const projects = getFeaturedProjects(4);

  return (
    <section id="projetos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-16">Nossos Projetos</h2>
        
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-ndti-700 to-ifnmg-blue opacity-75 blur"></div>
              <div className="relative">
                <img 
                  src={projects[activeProject].image} 
                  alt={projects[activeProject].title} 
                  className="rounded-lg w-full h-80 object-cover shadow-lg"
                />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md mt-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-ndti-800">{projects[activeProject].title}</h3>
                <span className="px-3 py-1 bg-ndti-100 text-ndti-800 rounded-full text-sm">
                  {projects[activeProject].category}
                </span>
              </div>
              <p className="text-gray-700 mb-6">{projects[activeProject].description}</p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-500 mb-2">Tecnologias utilizadas:</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => navigate(`/projetos/${projects[activeProject].id}`)}
                className="text-ifnmg-blue hover:text-ndti-700 font-medium flex items-center"
              >
                Ver detalhes
                <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold p-6 border-b">Projetos Destacados</h3>
              <div>
                {projects.map((project, index) => (
                  <div 
                    key={index}
                    className={`p-6 border-b last:border-0 cursor-pointer transition-colors ${activeProject === index ? 'bg-ndti-50' : 'hover:bg-gray-50'}`}
                    onClick={() => setActiveProject(index)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className={`font-semibold ${activeProject === index ? 'text-ndti-800' : 'text-gray-800'}`}>
                          {project.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">{project.category}</p>
                      </div>
                      <div className={`h-3 w-3 rounded-full ${activeProject === index ? 'bg-ndti-700' : 'bg-gray-200'}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button 
                onClick={() => navigate('/projetos')}
                className="px-8 py-3 border border-ifnmg-blue text-ifnmg-blue rounded-md hover:bg-gray-50 transition-colors"
              >
                Ver Todos os Projetos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
