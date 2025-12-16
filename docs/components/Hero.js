import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = ({ content }) => {
  return React.createElement('section', {
    className: "relative min-h-screen flex flex-col justify-start pt-20 md:pt-[15vh] pb-8 items-center text-center px-4 overflow-hidden"
  },
    React.createElement(motion.div, {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1.2, ease: "easeOut" },
      className: "z-10 max-w-5xl"
    },
      React.createElement('h2', {
        className: "text-sm md:text-2xl font-sans tracking-[0.3em] text-gold-500 font-bold uppercase mb-4 md:mb-6"
      }, "Shay Kalimi"),

      React.createElement('h1', {
        className: "text-3xl md:text-7xl lg:text-8xl font-serif font-bold text-obsidian-950 mb-4 md:mb-6 leading-tight"
      },
        content.heroTitle,
        React.createElement('br'),
        React.createElement('span', {
          className: "text-gradient-shimmer animate-shimmer block mt-2 md:mt-0"
        }, content.heroSubtitle)
      ),

      React.createElement('div', {
        className: "w-12 md:w-24 h-0.5 md:h-1 bg-gold-400 mx-auto my-6 md:my-10 opacity-60"
      }),

      React.createElement('h3', {
        className: "text-xl md:text-4xl font-serif italic text-obsidian-800 mb-6 md:mb-8 font-light tracking-wide"
      }, '"Architecting the Digital Future"'),

      React.createElement('p', {
        className: "text-sm md:text-xl text-obsidian-600 max-w-3xl mx-auto font-sans leading-relaxed mb-8 md:mb-12 whitespace-pre-line px-2"
      }, content.heroDescription),

      React.createElement('div', {
        className: "flex flex-col md:flex-row gap-6 justify-center"
      },
        React.createElement(motion.button, {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
          className: "px-8 md:px-12 py-3 md:py-4 bg-obsidian-950 text-white rounded-none border border-obsidian-950 hover:bg-transparent hover:text-obsidian-950 transition-all duration-300 font-bold tracking-widest uppercase shadow-xl text-xs md:text-base"
        }, "לצפייה בפרויקטים")
      )
    ),

    React.createElement(motion.div, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { delay: 1.5, duration: 1 },
      className: "absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer text-gold-500/50 hover:text-gold-500 transition-colors",
      onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    },
      React.createElement(ChevronDown, { size: 24 })
    )
  );
};

export default Hero;