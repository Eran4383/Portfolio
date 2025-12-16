import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = ({ content }) => {
  // Reveal animation variant
  const revealVariant = {
    hidden: { y: "100%" },
    visible: { y: "0%", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const containerVariant = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return React.createElement('section', {
    // Changing min-h-screen to h-[100dvh] solves the mobile address bar gap issue
    className: "relative h-[100dvh] w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden"
  },
    React.createElement(motion.div, {
      initial: "hidden",
      animate: "visible",
      variants: containerVariant,
      className: "z-10 max-w-4xl flex flex-col items-center justify-center h-full pb-16 md:pb-0" // Added pb-16 to pull content up a bit on mobile
    },
      // Small Top Label
      React.createElement('div', { className: "overflow-hidden mb-4 md:mb-6" },
        React.createElement(motion.h2, {
          variants: revealVariant,
          className: "text-xs md:text-sm font-sans tracking-[0.4em] text-gold-600 font-bold uppercase"
        }, "Shay Kalimi")
      ),

      // Main Title (Two lines)
      React.createElement('div', { className: "overflow-hidden" },
        React.createElement(motion.h1, {
          variants: revealVariant,
          className: "text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-obsidian-950 leading-[1.1]"
        }, content.heroTitle)
      ),
      
      React.createElement('div', { className: "overflow-hidden mb-6 md:mb-8" },
        React.createElement(motion.div, { variants: revealVariant },
          React.createElement('span', {
            className: "text-2xl md:text-7xl lg:text-8xl font-serif font-bold text-gradient-shimmer animate-shimmer block"
          }, content.heroSubtitle)
        )
      ),

      // Separator Line
      React.createElement(motion.div, {
        initial: { scaleX: 0 },
        animate: { scaleX: 1 },
        transition: { delay: 0.8, duration: 1, ease: "circOut" },
        className: "w-24 h-px bg-gold-400/50 mb-8 md:mb-10"
      }),

      // Description
      React.createElement(motion.p, {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 1, duration: 1 },
        className: "text-sm md:text-lg text-obsidian-600 max-w-2xl font-sans leading-relaxed mb-10 whitespace-pre-line"
      }, content.heroDescription),

      // Button
      React.createElement(motion.button, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 1.2, duration: 0.5 },
        whileHover: { scale: 1.05, backgroundColor: "#C5A028", borderColor: "#C5A028", color: "#FFF" },
        whileTap: { scale: 0.95 },
        onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
        className: "px-10 py-3 bg-obsidian-950 text-white border border-obsidian-950 transition-all duration-300 font-bold tracking-widest uppercase text-xs md:text-sm shadow-xl"
      }, "לצפייה בפרויקטים")
    ),

    // Scroll Indicator - Pinned to bottom
    React.createElement(motion.div, {
      initial: { opacity: 0 },
      animate: { opacity: 1, y: [0, 10, 0] },
      transition: { delay: 2, duration: 2, repeat: Infinity },
      className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer text-gold-500 hover:text-gold-600 p-4",
      onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    },
      React.createElement(ChevronDown, { size: 28, strokeWidth: 1.5 })
    )
  );
};

export default Hero;