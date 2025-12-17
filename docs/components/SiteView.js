import React from 'react';
import MarbleBackground from './MarbleBackground.js';
import Hero from './Hero.js';
import ProjectCard from './ProjectCard.js';
import Footer from './Footer.js';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { SKILLS } from '../constants.js';

const SiteView = ({ projects, content, onAdminClick, isAdminMode = false }) => {
  return React.createElement('div', { className: `relative font-sans text-obsidian-900 ${isAdminMode ? 'bg-white' : ''}` },
    React.createElement(MarbleBackground),

    React.createElement('main', { className: "relative z-10" },
      React.createElement(Hero, { content: content }),

      /* Skills Strip */
      React.createElement('div', { className: "py-8 border-y border-obsidian-900/5 bg-white/40 backdrop-blur-md mb-20" },
        React.createElement('div', { className: "max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-10 md:gap-24" },
          SKILLS.map((skill) => {
            const Icon = LucideIcons[skill.iconName] || LucideIcons.Code;
            return React.createElement('div', { key: skill.name, className: "flex flex-col items-center gap-2 text-obsidian-600" },
              React.createElement(Icon, { className: "w-6 h-6 text-gold-600" }),
              React.createElement('span', { className: "uppercase tracking-widest text-xs font-bold" }, skill.name)
            );
          })
        )
      ),

      /* Projects Section - STACKING EFFECT */
      React.createElement('section', { id: "projects", className: "px-4 md:px-8 max-w-5xl mx-auto pb-40" },
        React.createElement('div', { className: "mb-20 text-center" },
          React.createElement('span', { className: "text-gold-600 tracking-[0.3em] text-xs uppercase font-bold block mb-4" }, "Selected Work"),
          React.createElement('h2', { className: "text-4xl md:text-6xl font-serif font-bold text-obsidian-900" }, "תוצאות בשטח")
        ),

        // The Container for stacking
        React.createElement('div', { className: "flex flex-col gap-20 md:gap-32" },
          projects.map((project, index) => (
            React.createElement(ProjectCard, { 
              key: project.id, 
              project: project, 
              index: index,
              total: projects.length 
            })
          ))
        )
      ),

      /* Quote */
      React.createElement('section', { className: "py-32 px-6 text-center bg-obsidian-900 text-white clip-path-slant" },
        React.createElement('div', { className: "max-w-4xl mx-auto" },
          React.createElement('h3', { className: "text-2xl md:text-5xl font-serif leading-tight mb-8" },
            content.quoteText
          ),
          React.createElement('div', { className: "text-gold-400 font-mono text-sm" },
            `— ${content.quoteAuthor}`
          )
        )
      ),

      React.createElement(Footer, { onAdminClick: onAdminClick, content: content })
    )
  );
};

export default SiteView;