import React from 'react';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 md:px-12 bg-cream/90 backdrop-blur-sm"
    >
      <div 
        className="text-3xl font-display font-bold tracking-tight cursor-pointer hover:text-sunshineDark transition-colors text-warmText"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Huii<span className="text-sunshineDark text-4xl">.</span>
      </div>

      <nav className="hidden md:flex items-center gap-6 font-bold text-sm uppercase tracking-wide bg-white/50 px-8 py-3 rounded-full border border-warmText/5 shadow-sm">
        {['About', 'Work', 'Research', 'Contact'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="relative group px-3 py-1 overflow-hidden rounded-full hover:bg-sunshine/20 transition-colors duration-300"
          >
            <span className="relative z-10 group-hover:text-warmText transition-colors duration-300">{item}</span>
          </button>
        ))}
      </nav>
      
      {/* Simple mobile menu indicator */}
      <div className="md:hidden p-2 bg-sunshine/20 rounded-lg text-warmText">
        <div className="w-6 h-0.5 bg-warmText mb-1.5 rounded-full"></div>
        <div className="w-6 h-0.5 bg-warmText mb-1.5 rounded-full"></div>
        <div className="w-6 h-0.5 bg-warmText rounded-full"></div>
      </div>
    </motion.header>
  );
};