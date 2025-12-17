import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, index, total }) => {
  // We use sticky positioning to create the stacking effect
  // Each card sticks to a slightly different top position
  
  return React.createElement('div', { 
    className: "sticky top-24 md:top-32 w-full",
    style: { zIndex: index + 1, marginBottom: `60px` } // Simple marginBottom for stacking spacing
  },
    React.createElement('a', {
      href: project.link,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "block group cursor-pointer"
    },
      React.createElement('div', { 
        className: "relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-obsidian-100 transition-transform duration-500 group-hover:-translate-y-2 h-[65vh] md:h-[70vh] flex flex-col md:flex-row"
      },
        
        // Image Side (Top on mobile, Right on desktop)
        // We put image on right for visual balance on desktop
        React.createElement('div', { className: "absolute inset-0 md:relative md:w-3/5 h-full overflow-hidden" },
          React.createElement('div', {
            className: "w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110",
            style: { backgroundImage: `url(${project.images[0]})` }
          }),
          // Mobile Overlay Gradient
          React.createElement('div', { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent md:hidden" })
        ),

        // Content Side (Bottom on mobile, Left on desktop)
        React.createElement('div', { className: "absolute bottom-0 left-0 right-0 md:relative md:inset-auto md:w-2/5 p-8 md:p-12 flex flex-col justify-end md:justify-center md:bg-white text-white md:text-obsidian-900 z-10" },
          
          // Number
          React.createElement('span', { className: "text-gold-400 md:text-gold-600 font-mono text-xs mb-4 block" }, `0${index + 1}`),
          
          // Title
          React.createElement('h3', { className: "text-3xl md:text-5xl font-serif font-bold mb-4 leading-tight" }, project.title),
          
          // Description
          React.createElement('p', { className: "text-sm md:text-base text-gray-300 md:text-obsidian-600 mb-8 leading-relaxed line-clamp-3 md:line-clamp-none" }, project.description),
          
          // Business Chips
          React.createElement('div', { className: "flex flex-wrap gap-2 mb-8" },
            project.techStack.map(tag => (
              React.createElement('span', { 
                key: tag,
                className: "px-3 py-1 bg-white/20 md:bg-obsidian-100 backdrop-blur-md rounded-full text-[10px] md:text-xs font-bold text-white md:text-obsidian-700 border border-white/20 md:border-transparent"
              }, tag)
            ))
          ),

          // Button
          React.createElement('div', { className: "flex items-center gap-2 text-sm font-bold uppercase tracking-widest group-hover:text-gold-500 transition-colors" },
            "ראה פרויקט",
            React.createElement(ArrowUpRight, { size: 18 })
          )
        )
      )
    )
  );
};

export default ProjectCard;