import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Heart, MapPin, Linkedin } from 'lucide-react';

export const About: React.FC = () => {
  const skills = [
    "React & TypeScript",
    "Python & PyTorch",
    "Data Engineering",
    "LLM & GenAI",
    "System Design",
    "Cloud Infrastructure",
    "Open Source Contributions"
  ];

  return (
    <section id="about" className="py-24">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        
        {/* Left Title Column */}
        <div className="md:col-span-4 lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-32"
          >
            <span className="font-display font-bold text-sunshineDark tracking-widest uppercase text-sm bg-creamDark px-3 py-1 rounded-full">Who I Am</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 text-warmText leading-tight">
              Software Engineer & <br/> AI Enthusiast.
            </h2>
            <a 
              href="https://linkedin.com/in/huimu" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-softGray hover:text-sunshineDark transition-colors"
            >
              <Linkedin size={18} />
              <span>View LinkedIn Profile</span>
            </a>
          </motion.div>
        </div>

        {/* Right Content Column */}
        <div className="md:col-span-8 lg:col-span-9 space-y-10">
          
          {/* Bio Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-[2rem] border-2 border-creamDark shadow-sm"
          >
             <div className="flex items-center gap-3 mb-6 text-softGray text-sm font-bold">
                <MapPin size={16} className="text-accentPink" />
                <span>Based in the Cloud, rooted in Engineering.</span>
             </div>
             
             <p className="text-xl leading-relaxed mb-6 font-medium text-warmText">
               Hi, I'm <span className="text-sunshineDark">Hui</span>, <strong>Full-stack & AI Engineer</strong>, passionate about building intelligent, human-centered systems.
             </p>
             <p className="text-lg text-softGray leading-relaxed">
               My professional journey is a blend of rigorous engineering and creative exploration. I specialize in building scalable web applications and integrating cutting-edge Artificial Intelligence models to solve real-world problems. From crafting intuitive UIs to training complex neural networks, I love every part of the stack.
             </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-3 gap-6">
             {[
               { icon: Code, title: "Full-Stack", desc: "Building end-to-end solutions with modern web technologies." },
               { icon: Cpu, title: "AI Engineering", desc: "Developing and deploying LLMs and ML models." },
               { icon: Heart, title: "Passion", desc: "Turning complex ideas into user-friendly experiences." }
             ].map((item, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="bg-creamDark/50 p-6 rounded-[2rem] hover:bg-sunshine/10 transition-colors duration-300"
               >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 text-sunshineDark shadow-sm">
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-softGray leading-relaxed">{item.desc}</p>
               </motion.div>
             ))}
          </div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
             <h3 className="font-display font-bold text-xl mb-4">Tech Stack</h3>
             <div className="flex flex-wrap gap-3">
               {skills.map((skill) => (
                 <span key={skill} className="px-5 py-2 bg-white border border-creamDark rounded-full font-bold text-sm text-warmText hover:border-sunshine transition-colors cursor-default">
                   {skill}
                 </span>
               ))}
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};