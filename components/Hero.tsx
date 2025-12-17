import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SiteContent } from '../types';

interface HeroProps {
  content: SiteContent;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-center items-center text-center px-4 overflow-hidden py-10">
      
      {/* Main Content Group */}
      <div className="z-10 max-w-4xl flex flex-col items-center gap-6 md:gap-8">
        
        {/* Name Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-1.5 border border-obsidian-200 rounded-full text-xs md:text-sm font-sans tracking-widest text-obsidian-500 font-bold uppercase bg-white/50 backdrop-blur-sm">
            Shay Kalimi
          </span>
        </motion.div>

        {/* Titles */}
        <div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-serif font-bold text-obsidian-900 leading-[1.1]"
          >
            {content.heroTitle}
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-3xl md:text-6xl font-serif font-bold text-gold-600 mt-2 block"
          >
            {content.heroSubtitle}
          </motion.h2>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-base md:text-xl text-obsidian-600 max-w-xl mx-auto font-sans leading-relaxed whitespace-pre-line"
        >
          {content.heroDescription}
        </motion.p>

        {/* CTA Button & Arrow Group - Tightly coupled */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col items-center gap-6 mt-4"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-obsidian-900 text-white rounded-full hover:bg-gold-500 hover:scale-105 transition-all duration-300 font-bold tracking-widest uppercase text-xs md:text-sm shadow-xl"
          >
            לצפייה בפרויקטים
          </button>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-obsidian-300 cursor-pointer"
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;