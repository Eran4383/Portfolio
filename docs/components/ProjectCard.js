import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

const ProjectCard = ({ project, index, total }) => {
  // Sticky calculation: Top offset increases slightly for each card so they stack visibly
  const topOffset = 120 + (index * 10); 
  
  // Icon
  const IconComponent = LucideIcons[project.iconName] || LucideIcons.Code;

  // Media Logic
  const isVideo = (url) => url.includes('youtube.com') || url.includes('youtu.be') || url.endsWith('.mp4');
  const mediaUrl = project.images[0]; // Use first image as cover for the stack card

  return React.createElement(motion.div, {
    className: "sticky top-0 md:mb-12 last:mb-0 w-full",
    style: { 
      top: `${topOffset}px`,
      zIndex: index
    }
  },
    React.createElement('div', { 
      className: "relative bg-white rounded-2xl md:rounded-[2rem] overflow-hidden border border-obsidian-100 shadow-2xl h-[500px] md:h-[600px] flex flex-col md:flex-row transition-transform duration-500 hover:-translate-y-2"
    },
      
      /* Left: Content */
      React.createElement('div', { className: "w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-between bg-white z-10 relative" },
        React.createElement('div', null,
          React.createElement('div', { className: "flex items-center gap-3 mb-6" },
            React.createElement('span', { className: "text-xs font-bold font-mono text-gold-600 border border-gold-200 px-2 py-1 rounded" }, 
              `0${index + 1} / 0${total}`
            ),
            React.createElement('span', { className: "text-xs font-bold tracking-widest text-obsidian-400 uppercase" },
              project.category
            )
          ),
          
          React.createElement('h3', { className: "text-3xl md:text-5xl font-serif font-bold text-obsidian-900 mb-6 leading-tight" },
            project.title
          ),
          
          React.createElement('p', { className: "text-obsidian-600 leading-relaxed text-sm md:text-base mb-8" },
            project.description
          ),

          React.createElement('div', { className: "flex flex-wrap gap-2" },
            project.techStack.map((tech) => (
              React.createElement('span', { key: tech, className: "text-[10px] font-bold text-obsidian-500 bg-obsidian-50 px-3 py-1.5 rounded-full" },
                tech
              )
            ))
          )
        ),

        React.createElement('a', {
          href: project.link || '#',
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-2 text-obsidian-900 font-bold uppercase tracking-widest text-xs mt-8 md:mt-0 hover:text-gold-600 transition-colors group"
        },
          "Visit Live Site",
          React.createElement(ArrowUpRight, { size: 16, className: "group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" })
        )
      ),

      /* Right: Image Cover */
      React.createElement('div', { className: "w-full md:w-3/5 h-full relative overflow-hidden bg-obsidian-100" },
        React.createElement('div', { className: "absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 opacity-50 md:opacity-100" }),
        isVideo(mediaUrl) ? (
          React.createElement('div', { className: "w-full h-full bg-gray-800 flex items-center justify-center text-white" }, "Video Preview")
        ) : (
          React.createElement('div', {
            className: "w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-[1.5s] ease-out",
            style: { backgroundImage: `url(${mediaUrl})` }
          })
        )
      )
    )
  );
};

export default ProjectCard;