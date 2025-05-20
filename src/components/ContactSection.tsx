
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-16">Entre em Contato</h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Informações de contato e mapa lado a lado */}
          <div className="w-full flex flex-col md:flex-row gap-6">
            {/* Informações de contato */}
            <div className="w-full md:w-1/2">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold mb-6 text-ndti-800">Informações de Contato</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-ifnmg-blue mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800">Endereço</h4>
                      <p className="text-gray-600">
                        IFNMG - Campus Montes Claros<br />
                        Rua Dois, 300 - Village do Lago I<br />
                        Montes Claros - MG, 39404-058
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-ifnmg-blue mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800">Telefone</h4>
                      <p className="text-gray-600">(38) 2103-4141</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-ifnmg-blue mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800">Email</h4>
                      <p className="text-gray-600">ndti.montesclaros@ifnmg.edu.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-ifnmg-blue mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800">Horário de Funcionamento</h4>
                      <p className="text-gray-600">
                        Segunda a Sexta: 8:00 - 12:00, 14:00 - 18:00<br />
                        Fechado em feriados
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mapa do Google */}
            <div className="w-full md:w-1/2">
              <div className="bg-white rounded-lg shadow-md h-full overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.8995995802173!2d-43.86345092378849!3d-16.6835069266198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x754ab3f7a4a2b95%3A0xbcaa7c92be1bb844!2sIFNMG%20-%20Campus%20Montes%20Claros!5e0!3m2!1spt-BR!2sbr!4v1720734561991!5m2!1spt-BR!2sbr"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: "350px" }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa IFNMG Campus Montes Claros"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
