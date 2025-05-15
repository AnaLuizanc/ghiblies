
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import EquipePage from '@/components/EquipePage';

const Equipe: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <EquipePage />
      <Footer />
    </div>
  );
};

export default Equipe;
