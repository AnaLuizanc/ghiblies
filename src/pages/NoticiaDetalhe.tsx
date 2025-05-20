
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { getNewsById } from '@/data/news';

const NoticiaDetalhe: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Get news item from centralized data
  const news = id ? getNewsById(Number(id)) : undefined;
  
  // Redirect to 404 if news item not found
  if (!news) {
    navigate('/not-found');
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/novidades" className="inline-flex items-center text-ifnmg-blue hover:text-ndti-700 font-medium mb-8">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Voltar para Novidades
            </Link>
            
            <div>
              <div className="mb-6 flex items-center">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full mr-4 ${
                  news.type === 'edital' ? 'bg-ndti-500 text-white' : 
                  news.type === 'projeto' ? 'bg-ifnmg-blue text-white' :
                  'bg-gray-100 text-ndti-800'
                }`}>
                  {news.type === 'edital' ? 'Edital' : 
                   news.type === 'projeto' ? 'Projeto' : 'Evento'}
                </span>
                <span className="text-sm text-gray-500">
                  {new Date(news.date).toLocaleDateString('pt-BR')}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-ndti-800 mb-6">{news.title}</h1>
              
              <div className="h-80 rounded-lg overflow-hidden mb-8">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="prose prose-lg max-w-none">
                {news.content?.map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700">{paragraph}</p>
                ))}
                
                {!news.content && (
                  <p className="mb-4 text-gray-700">{news.description}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NoticiaDetalhe;
