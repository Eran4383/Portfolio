import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SiteContent } from '../types';

interface HeroProps {
  content: SiteContent;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-start pt-28 md:pt-[15vh] pb-12 items-center text-center px-4 overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 max-w-5xl"
      >
        <h2 className="text-lg md:text-2xl font-sans tracking-[0.2em] text-gold-500 font-bold uppercase mb-3 md:mb-4">
           Shay Kalimi
        </h2>
        
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-obsidian-950 mb-4 md:mb-6 leading-tight">
          {content.heroTitle} <br/>
          <span className="text-gradient-shimmer animate-shimmer">
             {content.heroSubtitle}
          </span>
        </h1>

        <div className="w-16 md:w-24 h-1 bg-gold-400 mx-auto my-6 md:my-10 opacity-60"></div>

        <h3 className="text-2xl md:text-4xl font-serif italic text-obsidian-800 mb-6 md:mb-8 font-light tracking-wide">
          "Architecting the Digital Future"
        </h3>

        <p className="text-base md:text-xl text-obsidian-600 max-w-3xl mx-auto font-sans leading-relaxed mb-8 md:mb-12 whitespace-pre-line px-2">
          {content.heroDescription}
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 md:px-12 py-3 md:py-4 bg-obsidian-950 text-white rounded-none border border-obsidian-950 hover:bg-transparent hover:text-obsidian-950 transition-all duration-300 font-bold tracking-widest uppercase shadow-xl text-sm md:text-base"
          >
            לצפייה בפרויקטים
          </motion.button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer text-gold-500/50 hover:text-gold-500 transition-colors"
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
};

export default Hero;