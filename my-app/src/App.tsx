import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Download from './components/Download';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Download />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
