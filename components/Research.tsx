import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Sparkles, FlaskConical } from 'lucide-react';

export const Research: React.FC = () => {
  const paperLink = "https://drive.google.com/file/d/1dlNz1py4-8JYqa2_E7gk8q3Z0AwIEOfw/view?usp=sharing";

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
                <p className="text-softGray mt-1">PDF Available</p>
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
               "Static models fail against fast-evolving misinformation. This research introduces a Dynamic Weak Supervision Framework using BERT and Snorkel to continuously update fake news detection. We successfully tackle the critical problem of knowledge obsolescence head-on, providing an empirical blueprint for building adaptive, real-time systems despite noisy, limited data."
             </p>
          </div>

          {/* Results */}
          <div>
             <h4 className="text-lg font-display font-bold mb-4 flex items-center gap-2 text-accentPink">
               <Sparkles size={20} /> Key Findings
             </h4>
             <div className="space-y-4">
               <div className="flex items-center gap-4 p-4 border border-creamDark rounded-2xl hover:border-sunshine transition-colors bg-white">
                 <div className="text-3xl font-black text-sunshineDark font-display">1</div>
                 <div className="text-sm font-medium text-softGray">Dynamic Update Mitigates Knowledge Obsolescence, Especially in Specificity.</div>
               </div>
               <div className="flex items-center gap-4 p-4 border border-creamDark rounded-2xl hover:border-sunshine transition-colors bg-white">
                 <div className="text-3xl font-black text-accentPink font-display">2</div>
                 <div className="text-sm font-medium text-softGray">Performance Improvement Was Restricted by Data Scarcity and Noise.</div>
               </div>
               <div className="flex items-center gap-4 p-4 border border-creamDark rounded-2xl hover:border-sunshine transition-colors bg-white">
                 <div className="text-2xl font-black text-warmText font-display">3</div>
                 <div className="text-sm font-medium text-softGray">The Weak Supervision Pipeline Suffered from Low Expert Model Diversity.</div>
               </div>
             </div>
          </div>

        </div>

      </motion.div>
    </section>
  );
};