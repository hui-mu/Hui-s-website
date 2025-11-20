import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Sparkles, FlaskConical } from 'lucide-react';

export const Research: React.FC = () => {
  const paperLink = "https://drive.google.com/file/d/1UspAu2ckTkUHPNA-q3TxF3kUqTq3z0-M/view?usp=sharing";

  return (
    <section id="research" className="py-24 relative">
      
      <div className="text-center mb-16">
        <span className="font-display font-bold text-accentPink tracking-widest uppercase text-sm bg-accentPink/10 px-3 py-1 rounded-full">Academic</span>
        <h2 className="text-4xl md:text-6xl font-display font-black mt-4 text-warmText">
           AI Research
        </h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-[3rem] border-4 border-creamDark overflow-hidden shadow-xl"
      >
        {/* Card Header */}
        <div className="bg-creamDark p-8 md:p-12 border-b-2 border-creamDark flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
           <div className="flex items-start gap-4">
              <div className="p-4 bg-sunshine rounded-2xl shadow-sm rotate-3">
                <FlaskConical className="w-8 h-8 text-warmText" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold leading-tight">Advanced AI Systems & <br/> Neural Methodology</h3>
                <p className="text-softGray mt-1">Latest Publication • PDF Available</p>
              </div>
           </div>
           
           <a 
            href={paperLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-warmText text-cream px-6 py-3 rounded-xl font-bold hover:bg-sunshineDark hover:text-warmText transition-colors shadow-md"
           >
             <Download size={18} />
             <span>Read Paper</span>
           </a>
        </div>

        {/* Card Body */}
        <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12">
          
          {/* Abstract */}
          <div>
             <h4 className="text-lg font-display font-bold mb-4 flex items-center gap-2 text-sunshineDark">
               <FileText size={20} /> Abstract
             </h4>
             <p className="text-softGray leading-loose bg-cream p-6 rounded-2xl">
               "This research explores novel approaches in neural network architectures to optimize processing speed without compromising accuracy. We introduce a hybrid model leveraging efficient attention mechanisms, demonstrating significant improvements in real-time inference tasks. The study provides a comprehensive analysis of dataset biases and proposes a new framework for ethical AI training."
             </p>
          </div>

          {/* Results */}
          <div>
             <h4 className="text-lg font-display font-bold mb-4 flex items-center gap-2 text-accentPink">
               <Sparkles size={20} /> Key Findings
             </h4>
             <div className="space-y-4">
               <div className="flex items-center gap-4 p-4 border border-creamDark rounded-2xl hover:border-sunshine transition-colors bg-white">
                 <div className="text-3xl font-black text-sunshineDark font-display">35%</div>
                 <div className="text-sm font-medium text-softGray">Reduction in inference latency compared to baseline transformer models.</div>
               </div>
               <div className="flex items-center gap-4 p-4 border border-creamDark rounded-2xl hover:border-sunshine transition-colors bg-white">
                 <div className="text-3xl font-black text-accentPink font-display">98%</div>
                 <div className="text-sm font-medium text-softGray">Accuracy achieved on the standard benchmark dataset.</div>
               </div>
               <div className="flex items-center gap-4 p-4 border border-creamDark rounded-2xl hover:border-sunshine transition-colors bg-white">
                 <div className="text-2xl font-black text-warmText font-display">10x</div>
                 <div className="text-sm font-medium text-softGray">Faster convergence during the training phase.</div>
               </div>
             </div>
          </div>

        </div>

      </motion.div>
    </section>
  );
};