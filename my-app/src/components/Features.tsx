import React from 'react';
import { FaRegLightbulb, FaMobileAlt, FaSyncAlt } from 'react-icons/fa';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 px-4 md:px-24 bg-bgLight">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-10">Funcionalidades Incríveis!</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <FaRegLightbulb className="text-4xl mx-auto mb-4 text-primary hover:text-secondary transition-colors duration-300" />
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-textMain">Funcionalidade 1</h3>
            <p>Descrição detalhada da funcionalidade 1.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <FaMobileAlt className="text-4xl mx-auto mb-4 text-primary hover:text-secondary transition-colors duration-300" />
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-textMain">Funcionalidade 2</h3>
            <p>Descrição detalhada da funcionalidade 2.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <FaSyncAlt className="text-4xl mx-auto mb-4 text-primary hover:text-secondary transition-colors duration-300" />
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-textMain">Funcionalidade 3</h3>
            <p>Descrição detalhada da funcionalidade 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
