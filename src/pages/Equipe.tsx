
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import EquipePage from '@/components/EquipePage';

const Equipe: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="pt-20 pb-10 bg-gradient-to-r from-yellow-50 to-ndti-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mt-10 mb-6">
            <span className="text-gradient-green-yellow">Nossa Equipe</span>
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Conheça os especialistas por trás do NDTI, dedicados a impulsionar a inovação tecnológica
            no IFNMG Campus Montes Claros.
          </p>
        </div>
      </div>
      <EquipePage />
      <Footer />
    </div>
  );
};

export default Equipe;
