import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const MountainClimber: React.FC = () => {
  // Map scroll range (mostly near the bottom) to movement
  const { scrollYProgress } = useScroll();
  
  // Start movement when user reaches 80% of page, end at 100%
  const yPos = useTransform(scrollYProgress, [0.8, 1], [250, 50]);
  const xPos = useTransform(scrollYProgress, [0.8, 1], [0, 150]);
  
  return (
    <div className="w-full h-[450px] relative overflow-hidden rounded-t-[3rem] bg-gradient-to-b from-[#E6F3FF] to-cream mt-24 border-x-4 border-t-4 border-creamDark">
      
      {/* Clouds */}
      <motion.div 
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-16 left-10"
      >
        <div className="w-24 h-8 bg-white rounded-full opacity-80 blur-md" />
      </motion.div>
      <motion.div 
        animate={{ x: [0, -30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-24 right-32"
      >
        <div className="w-32 h-12 bg-white rounded-full opacity-70 blur-md" />
      </motion.div>

      {/* Background Landscape */}
      <svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 400">
        {/* Far Mountains */}
        <path d="M0,400 L250,200 L500,400 Z" fill="#E0DDD0" />
        <path d="M400,400 L750,150 L1100,400 Z" fill="#D6D1C0" />
        
        {/* Main Mountain */}
        <path d="M-50,450 L400,80 L850,450 Z" fill="#EDE9D5" stroke="#5C5445" strokeWidth="3" strokeLinejoin="round" />
        
        {/* Snow Cap (Cute rounded) */}
        <path d="M330,136 L400,80 L470,136 C440,150 430,130 400,145 C370,130 360,150 330,136 Z" fill="white" />
      </svg>

      {/* The Climber (Girl) */}
      <motion.div 
        style={{ y: yPos, x: xPos }}
        className="absolute bottom-0 left-[10%] z-10"
      >
        <div className="relative w-20 h-28">
          {/* SVG Character */}
          <svg viewBox="0 0 100 150" className="w-full h-full drop-shadow-xl">
             {/* Legs */}
             <path d="M35,100 L35,135" stroke="#5C5445" strokeWidth="8" strokeLinecap="round" />
             <path d="M65,100 L65,125 L75,135" stroke="#5C5445" strokeWidth="8" strokeLinecap="round" />
             
             {/* Boots */}
             <path d="M28,135 L42,135 L42,145 L28,145 Z" fill="#8B4513" rx="2" />
             <path d="M68,135 L82,135 L85,145 L71,145 Z" fill="#8B4513" rx="2" />

             {/* Body (Dress/Top) - Sunshine Yellow */}
             <path d="M25,100 L75,100 L70,50 L30,50 Z" fill="#FFD93D" />
             <circle cx="35" cy="75" r="3" fill="#FFF" opacity="0.5" />
             <circle cx="65" cy="60" r="3" fill="#FFF" opacity="0.5" />
             
             {/* Backpack - Accent Pink */}
             <rect x="20" y="55" width="60" height="45" rx="8" fill="#FF8FA3" />
             <rect x="25" y="60" width="50" height="15" rx="2" fill="#FF6B85" />
             
             {/* Head */}
             <circle cx="50" cy="35" r="22" fill="#FCE4D6" />
             
             {/* Hair (Dark Brown) */}
             <path d="M28,35 C28,12 72,12 72,35 C72,35 82,45 82,60 L18,60 C18,45 28,35 28,35" fill="#4A3B2A" />
             <circle cx="82" cy="30" r="8" fill="#4A3B2A" /> {/* Ponytail */}
             
             {/* Face Details */}
             <circle cx="45" cy="35" r="2" fill="#4A3B2A" />
             <circle cx="60" cy="35" r="2" fill="#4A3B2A" />
             <path d="M48,42 Q52,45 56,42" stroke="#4A3B2A" strokeWidth="2" fill="none" />
             <circle cx="42" cy="40" r="2" fill="#FF8FA3" opacity="0.6" />
             <circle cx="62" cy="40" r="2" fill="#FF8FA3" opacity="0.6" />

             {/* Arms */}
             <path d="M30,60 L15,75" stroke="#5C5445" strokeWidth="6" strokeLinecap="round" />
             <path d="M70,60 L85,45" stroke="#5C5445" strokeWidth="6" strokeLinecap="round" />
          </svg>
          
          {/* Chat Bubble */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="absolute -top-14 -right-14 bg-white p-3 rounded-2xl rounded-bl-none shadow-lg whitespace-nowrap z-20 border-2 border-creamDark"
          >
            <span className="text-xs font-bold text-warmText">Almost there!</span>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Foreground Overlay for depth */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#E8E4D3] to-transparent" />
    </div>
  );
};