import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Hammer, PlayCircle, Cloud, Database, Layout, Server } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon?: React.ElementType;
}

const featuredProjects: Project[] = [
  {
    title: "INFERNOde",
    description: "A data-driven web platform designed for high scalability. Achieved 15x query performance improvement through serverless architecture and optimized PostgreSQL databases. Implemented unidirectional data flow with Redux for complex user analytics.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS Lambda"],
    icon: Database
  },
  {
    title: "Grafana Data Plugin",
    description: "Built a high-performance data visualization plugin using Grafana Scenes API. Engineered interactive dashboards for distributed system monitoring, optimizing React component rendering for real-time health insights.",
    tags: ["TypeScript", "Grafana", "React", "Data Viz"],
    icon: Layout
  },
  {
    title: "FamilyHealth",
    description: "Cloud-native preventative health management system. Integrated OAuth 2.0 for secure authentication and automated end-to-end data pipelines using AWS S3 and RDS with Python scripts.",
    tags: ["Python", "AWS S3/RDS", "OAuth 2.0", "SQL"],
    icon: Cloud
  },
  {
    title: "BooksRUs",
    description: "Architected a Single-Page Application (SPA) for digital library management. Configured custom Webpack bundling to reduce load times and utilized NoSQL for flexible, scalable data schemas.",
    tags: ["React Router", "Webpack", "NoSQL", "SPA"],
    icon: Server
  }
];

const wipProjects: Project[] = [
  {
    title: "Community Auto-Bot",
    description: "Selenium automation for volunteering opportunities.",
    tags: ["Python", "Automation"]
  },
  {
    title: "Live Server Monitor",
    description: "Real-time dashboard for game server analytics.",
    tags: ["Socket.io", "Node.js"]
  },
  {
    title: "Personal AI Assistant",
    description: "Fine-tuning LLaMA for personal scheduling.",
    tags: ["GenAI", "LLM"]
  },
  {
    title: "Message Broker Demo",
    description: "Event-driven architecture experiments.",
    tags: ["Kafka", "Distributed Systems"]
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="work" className="py-24">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div>
           <span className="font-display font-bold text-sunshineDark tracking-widest uppercase text-sm bg-creamDark px-3 py-1 rounded-full">Portfolio</span>
           <h2 className="text-4xl md:text-6xl font-display font-black mt-4 text-warmText">
             Selected Works
           </h2>
        </div>
        <a href="https://github.com/hui-mu" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-warmText text-cream rounded-full font-bold hover:bg-sunshineDark hover:text-warmText transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
           <Github size={20} />
           <span>Visit Github</span>
        </a>
      </div>

      {/* Featured Projects */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white p-8 rounded-[2.5rem] border-2 border-creamDark hover:border-sunshine transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between h-full"
          >
             <div>
               <div className="flex justify-between items-start mb-6">
                 <div className="flex items-center gap-3">
                    {project.icon && <project.icon size={24} className="text-sunshineDark" />}
                    <h3 className="text-2xl font-display font-bold group-hover:text-sunshineDark transition-colors">{project.title}</h3>
                 </div>
                 <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 transition-opacity text-softGray" />
               </div>
               <p className="text-softGray mb-8 leading-relaxed">{project.description}</p>
             </div>
             
             <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-creamDark rounded-lg text-xs font-bold uppercase tracking-wider text-warmText/70">
                    {tag}
                  </span>
                ))}
             </div>
          </motion.div>
        ))}
      </div>

      {/* The Playground (WIP) */}
      <div className="bg-sunshine/10 rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
          <Hammer size={120} />
        </div>
        
        <div className="relative z-10">
          <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-accentPink animate-pulse" />
            The Playground (WIP)
            <span className="text-sm font-sans font-normal text-softGray bg-white/50 px-3 py-1 rounded-full ml-2">Continuous Dev</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {wipProjects.map((project, idx) => (
              <div key={idx} className="bg-white/60 backdrop-blur-sm p-6 rounded-[2rem] border border-white hover:bg-white transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <PlayCircle size={20} className="text-sunshineDark" />
                  <h4 className="font-bold font-display text-lg">{project.title}</h4>
                </div>
                <p className="text-sm text-softGray mb-4 pl-8">{project.description}</p>
                <div className="pl-8 flex flex-wrap gap-2">
                  {project.tags.map(t => (
                     <span key={t} className="text-[10px] font-bold uppercase bg-cream text-warmText px-2 py-1 rounded-md border border-creamDark">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};