import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Coffee } from 'lucide-react';

export const Contact: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const email = "hui.wang.mu@gmail.com";

  return (
    <footer id="contact" className="bg-warmText text-cream rounded-t-[3rem] -mt-12 pt-24 pb-10 px-6 md:px-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="md:w-2/3">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-black mb-8 leading-tight"
            >
              Let's build something <br/> <span className="text-sunshine">wonderful.</span>
            </motion.h2>
            
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="p-5 rounded-full bg-white/5 border border-white/10 group-hover:bg-sunshine group-hover:text-warmText group-hover:scale-110 transition-all duration-300">
                <Mail size={32} />
              </div>
              <a href={`mailto:${email}`} className="text-2xl md:text-4xl font-bold border-b-2 border-transparent group-hover:border-sunshine transition-all duration-300">
                {email}
              </a>
            </div>
          </div>

          <div className="md:w-1/3 flex flex-col gap-4 items-start md:items-end text-xl font-display font-bold">
             <a href="https://linkedin.com/in/huimu" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-sunshine transition-colors group">
               LinkedIn <ArrowUpRight size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
             </a>
             <a href="https://github.com/hui-mu" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-sunshine transition-colors group">
               Github <ArrowUpRight size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
             </a>
             <a href="#" className="flex items-center gap-2 hover:text-sunshine transition-colors group">
               Google Scholar <ArrowUpRight size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
             </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-white/50">
          <div>
            &copy; {currentYear} Hui. All rights reserved.
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
            <Coffee size={14} />
            <span>Designed with warmth</span>
            <div className="w-2 h-2 bg-sunshine rounded-full animate-pulse ml-1" />
          </div>
          <div>
            Hui's Portfolio
          </div>
        </div>

      </div>
    </footer>
  );
};