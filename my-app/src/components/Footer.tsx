import React from 'react';
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube, FaWhatsapp, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-20"></div>
      <div className="container mx-auto text-center relative z-10">
        <div className="border-t border-white/30 pt-8">
          <div className="flex justify-center mb-6 space-x-6">
            <a 
              href="#" 
              className="text-4xl transition-colors duration-300 ease-in-out hover:text-[#E4405F] flex items-center justify-center"
            >
              <FaInstagram />
            </a>
            <a 
              href="#" 
              className="text-4xl transition-colors duration-300 ease-in-out hover:text-[#000000] flex items-center justify-center"
            >
              <FaTiktok />
            </a>
            <a 
              href="#" 
              className="text-4xl transition-colors duration-300 ease-in-out hover:text-[#FF0000] flex items-center justify-center"
            >
              <FaYoutube />
            </a>
            <a 
              href="#" 
              className="text-4xl transition-colors duration-300 ease-in-out hover:text-[#25D366] flex items-center justify-center"
            >
              <FaWhatsapp />
            </a>
            <a 
              href="#" 
              className="text-4xl transition-colors duration-300 ease-in-out hover:text-[#181717] flex items-center justify-center"
            >
              <FaGithub />
            </a>
          </div>
          <p className="text-sm md:text-base mt-4">
            © 2024 Nome do Aplicativo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
