import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-bgLight">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-10 relative inline-block">
          <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-30 -z-10"></span>
          Entre em Contato
        </h2>
        <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <input 
              type="text" 
              placeholder="Nome" 
              className="w-full px-6 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition duration-300 ease-in-out"
            />
          </div>
          <div className="mb-6">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-6 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition duration-300 ease-in-out"
            />
          </div>
          <div className="mb-6">
            <textarea 
              placeholder="Mensagem" 
              className="w-full px-6 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition duration-300 ease-in-out"
              rows={5}
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-gradient-to-r from-primary to-secondary text-white py-3 px-8 rounded-full text-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-opacity-90"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
