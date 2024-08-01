import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white px-6 shadow-md fixed w-full z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-xl font-bold text-primary">Nome do Aplicativo</div>
        <nav className="relative">
          {/* Desktop Menu */}
          <ul className="hidden font-bold md:flex space-x-4">
            <li><a href="#home" className="hover:text-secondary">Home</a></li>
            <li><a href="#features" className="hover:text-secondary">Funcionalidades</a></li>
            <li><a href="#testimonials" className="hover:text-secondary">Depoimentos</a></li>
            <li><a href="#download" className="hover:text-secondary">Download</a></li>
            <li><a href="#contact" className="hover:text-secondary">Contato</a></li>
          </ul>
          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-xl text-primary">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className={`absolute top-16 right-0 w-48 bg-white shadow-lg rounded-lg transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-96'}`}>
              <ul className="flex flex-col items-center p-4">
                <li className="w-full text-center py-2"><a href="#home" className="block hover:text-secondary">Home</a></li>
                <li className="w-full text-center py-2"><a href="#features" className="block hover:text-secondary">Funcionalidades</a></li>
                <li className="w-full text-center py-2"><a href="#testimonials" className="block hover:text-secondary">Depoimentos</a></li>
                <li className="w-full text-center py-2"><a href="#download" className="block hover:text-secondary">Download</a></li>
                <li className="w-full text-center py-2"><a href="#contact" className="block hover:text-secondary">Contato</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
