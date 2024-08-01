/*import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="bg-bgLight py-40 md:py-60 text-center bg-cover bg-center relative" 
      style={{ backgroundImage: 'url(https://via.placeholder.com/1920x1080)' }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Bem-vindo ao <span className='text-primary'>Nome do Aplicativo</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl mb-6 text-white"
        >
          Transforme sua experiência com o nosso aplicativo incrível.
        </motion.p>
        <motion.a 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, delay: 1 }}
          href="#download" 
          className="bg-gradient-to-r from-primary to-secondary text-white py-3 px-8 rounded-full text-lg shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:bg-opacity-80"
        >
          Baixe Agora
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;*/

import React from 'react';
import { motion } from 'framer-motion';
import bg from '../assets/bg.jpg'; // Certifique-se de que o caminho está correto

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="bg-bgLight py-40 md:py-60 text-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }} // Corrigido para usar a URL da imagem
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Bem-vindo ao <span className='text-primary'>Nome do Aplicativo</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl mb-6 text-white"
        >
          Transforme sua experiência com o nosso aplicativo incrível.
        </motion.p>
        <motion.a 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, delay: 1 }}
          href="#download" 
          className="bg-gradient-to-r from-primary to-secondary text-white py-3 px-8 rounded-full text-lg shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:bg-opacity-80"
        >
          Baixe Agora
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
 