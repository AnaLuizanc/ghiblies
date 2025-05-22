
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Local news data instead of importing from an external source
const newsItems = [
  {
    id: 1,
    title: "Processo Seletivo para Bolsistas",
    description: "Novas vagas para bolsistas em projetos de inovação tecnológica. O NDTI está com vagas abertas para estudantes interessados em atuar como bolsistas em projetos de inovação tecnológica. As inscrições podem ser realizadas através do portal do aluno.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3",
    type: "edital",
    date: "2025-05-10"
  },
  {
    id: 2,
    title: "Sistema de Gestão de Laboratórios",
    description: "Novo projeto para monitoramento e controle de equipamentos. Esta solução inovadora permitirá o acompanhamento em tempo real das condições dos laboratórios do campus.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3",
    type: "projeto",
    date: "2025-05-05"
  },
  {
    id: 3,
    title: "Workshop de Desenvolvimento Web",
    description: "Inscrições abertas para capacitação em tecnologias front-end. Nos dias 15 e 16 de maio, o NDTI realizará um workshop gratuito sobre tecnologias modernas para desenvolvimento web.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
    type: "evento",
    date: "2025-04-28"
  },
  {
    id: 4,
    title: "Chamada para Projetos de Extensão",
    description: "Submeta sua proposta para o programa de extensão tecnológica. O NDTI está recebendo propostas para projetos de extensão na área de tecnologia.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3",
    type: "edital",
    date: "2025-04-20"
  }
];

const NewsCarouselSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoAdvance, setAutoAdvance] = useState(true);
  
  // Auto-advance slides with timer instead of API
  useEffect(() => {
    if (!autoAdvance) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newsItems.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [autoAdvance]);

  // Pause auto-advance on hover
  const handleMouseEnter = () => setAutoAdvance(false);
  const handleMouseLeave = () => setAutoAdvance(true);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  return (
    <section className="py-8 bg-gradient-to-b from-ndti-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-ndti-800">
            <span className="text-gradient">Novidades</span>
          </h2>
          <Link 
            to="/novidades" 
            className="text-ifnmg-blue hover:text-ndti-700 font-medium flex items-center"
          >
            Ver todas
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {newsItems.map((item) => (
                <div 
                  key={item.id} 
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2 md:px-4"
                >
                  <div className="relative overflow-hidden rounded-xl group card-hover">
                    <div className="aspect-ratio h-48 md:h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 md:p-6">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full mb-2 inline-block w-fit ${
                        item.type === 'edital' ? 'bg-ndti-500 text-white' : 
                        item.type === 'projeto' ? 'bg-ifnmg-blue text-white' : 
                        'bg-white text-ndti-800'
                      }`}>
                        {item.type === 'edital' ? 'Edital' : 
                         item.type === 'projeto' ? 'Projeto' : 'Evento'}
                      </span>
                      <h3 className="text-xl text-white font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-200 text-sm line-clamp-2">{item.description}</p>
                      
                      <Link 
                        to={`/novidades/${item.id}`} 
                        className="mt-3 inline-block text-white hover:text-ndti-100 font-medium text-sm"
                      >
                        Ler mais
                        <ArrowRight className="ml-1 inline-block h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2">
              {newsItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === idx 
                      ? "w-6 bg-ifnmg-blue" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            
            {/* Navigation arrows */}
            <button 
              className="absolute top-1/2 -translate-y-1/2 left-2 lg:-left-12 opacity-80 hover:opacity-100 transition-opacity bg-white/80 rounded-full p-2"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button 
              className="absolute top-1/2 -translate-y-1/2 right-2 lg:-right-12 opacity-80 hover:opacity-100 transition-opacity bg-white/80 rounded-full p-2"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCarouselSection;
