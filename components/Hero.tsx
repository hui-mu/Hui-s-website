import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  // Direct link for Google Drive image
  // const profileImg = "https://lh3.googleusercontent.com/d/1qqyFv7W1_ZxSF-fAqfBryXyilSK1mySt";
  const profileImg = "https://drive.google.com/file/d/1Kv0cIL86hwO1y7djwW5z2YANXxgyUwGw/view?usp=sharing";

  return (
    <section className="min-h-screen flex flex-col justify-center pt-28 pb-12">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        <div className="flex-1 z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-sunshineLight/30 text-warmText rounded-full font-bold text-sm mb-6"
          >
            <Sparkles size={16} className="text-sunshineDark" />
            <span>Hello, Welcome to my world!</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight leading-[1.1] mb-6 text-warmText"
          >
            Full-Stack <br/>
            <span className="relative inline-block px-4">
              <span className="absolute inset-0 bg-sunshine transform -rotate-2 rounded-[2rem] -z-10"></span>
              Software
            </span> <br/>
            & AI Engineer
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-8 flex flex-col lg:flex-row items-center lg:items-start gap-6"
          >
            <p className="text-xl md:text-2xl font-medium max-w-lg leading-relaxed text-softGray">
              I'm <strong className="text-warmText bg-creamDark px-2 rounded-lg">Hui</strong>. I build full-stack, human-centered systems with creativity and care.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-14 h-14 flex items-center justify-center bg-warmText text-cream rounded-full shadow-lg hover:bg-sunshineDark transition-colors"
            >
              <ArrowDown size={24} />
            </motion.button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative w-72 h-72 md:w-96 md:h-96 flex-shrink-0"
        >
          {/* Blob Backgrounds */}
          <div className="absolute top-0 right-0 w-full h-full bg-sunshine rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-float opacity-60 -z-10 transform rotate-12 scale-110" />
          <div className="absolute top-0 left-4 w-full h-full bg-accentPink/20 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-float opacity-60 -z-10 animation-delay-2000" />
          
          {/* Image Container */}
          <div className="w-full h-full bg-white rounded-[3rem] p-3 shadow-xl rotate-[-3deg] hover:rotate-0 transition-all duration-500">
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden border-2 border-creamDark relative">
              <img 
                src={profileImg} 
                alt="Hui" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};