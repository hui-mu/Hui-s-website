import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Research } from './components/Research';
import { Contact } from './components/Contact';
import { MountainClimber } from './components/MountainClimber';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans text-warmText selection:bg-sunshine selection:text-warmText">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-cream"
          >
            <div className="text-4xl font-black tracking-wider animate-pulse text-sunshineDark">
              Hui.
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            <main className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
              <Hero />
              <div className="h-24" /> {/* Spacer */}
              <About />
              <div className="h-24" />
              <Projects />
              <div className="h-24" />
              <Research />
              <div className="h-24" />
              <MountainClimber />
            </main>
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;