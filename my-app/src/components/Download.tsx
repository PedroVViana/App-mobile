import React from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

const Download: React.FC = () => {
  return (
    <section id="download" className="py-20 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-6">Baixe o Aplicativo Agora</h2>
        <p className="text-lg md:text-xl mb-6">Disponível para Android e iOS.</p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
          <a
            href="https://play.google.com"
            className="flex items-center bg-gradient-to-r from-[#34A853] to-[#28B446] text-white py-4 px-6 rounded-full text-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-110"
          >
            <FaGooglePlay className="mr-4 text-3xl" /> 
            <div className="text-left">
              <div className="font-semibold">Google Play</div>
              <div className="text-sm">Baixe para Android</div>
            </div>
          </a>
          <a
            href="https://apple.com"
            className="flex items-center bg-gradient-to-r from-[#000000] to-[#8E8E8E] text-white py-4 px-6 rounded-full text-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-110"
          >
            <FaApple className="mr-4 text-3xl" /> 
            <div className="text-left">
              <div className="font-semibold">App Store</div>
              <div className="text-sm">Baixe para iOS</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Download;
