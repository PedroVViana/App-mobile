import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 px-4 md:px-24 bg-bgLight">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-10">O que nossos usuários dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-primary to-secondary p-6 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img src="https://via.placeholder.com/150" alt="Usuário 1" className="w-16 h-16 rounded-full mx-auto mb-4" />
            <FaQuoteLeft className="text-4xl text-white mx-auto mb-4" />
            <p className="italic text-white">"Texto do depoimento 1."</p>
            <p className="mt-4 font-semibold text-white">Usuário 1</p>
          </div>
          <div className="bg-gradient-to-r from-primary to-secondary p-6 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img src="https://via.placeholder.com/150" alt="Usuário 2" className="w-16 h-16 rounded-full mx-auto mb-4" />
            <FaQuoteLeft className="text-4xl text-white mx-auto mb-4" />
            <p className="italic text-white">"Texto do depoimento 2."</p>
            <p className="mt-4 font-semibold text-white">Usuário 2</p>
          </div>
          <div className="bg-gradient-to-r from-primary to-secondary p-6 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img src="https://via.placeholder.com/150" alt="Usuário 3" className="w-16 h-16 rounded-full mx-auto mb-4" />
            <FaQuoteLeft className="text-4xl text-white mx-auto mb-4" />
            <p className="italic text-white">"Texto do depoimento 3."</p>
            <p className="mt-4 font-semibold text-white">Usuário 3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
