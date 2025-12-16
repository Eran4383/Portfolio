import React from 'react';
import MarbleBackground from './MarbleBackground.js';
import Hero from './Hero.js';
import ProjectCard from './ProjectCard.js';
import Footer from './Footer.js';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { SKILLS } from '../constants.js';

const SiteView = ({ projects, content, onAdminClick, isAdminMode = false }) => {
  return React.createElement('div', { className: `relative min-h-screen font-sans overflow-x-hidden ${isAdminMode ? 'bg-white' : ''}` },
    React.createElement(MarbleBackground),

    React.createElement('main', null,
      React.createElement(Hero, { content: content }),

      /* Skills Strip - Now floating */
      React.createElement('div', { className: "py-6 border-y border-obsidian-900/5 bg-white/30 backdrop-blur-md sticky top-0 z-40 transition-all" },
        React.createElement('div', { className: "max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8" },
          SKILLS.map((skill) => {
            const Icon = LucideIcons[skill.iconName] || LucideIcons.Code;
            return React.createElement('div', { key: skill.name, className: "flex items-center gap-2 text-obsidian-800 opacity-80" },
              React.createElement(Icon, { className: "w-4 h-4 text-gold-600" }),
              React.createElement('span', { className: "uppercase tracking-widest text-[10px] font-bold" }, skill.name)
            );
          })
        )
      ),

      /* Projects Section - STACKING CARDS LAYOUT */
      React.createElement('section', { id: "projects", className: "py-24 px-4 md:px-8 max-w-6xl mx-auto" },
        React.createElement(motion.div, {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          className: "mb-20 text-center"
        },
          React.createElement('span', { className: "text-gold-600 tracking-[0.4em] text-xs uppercase font-bold block mb-3" }, "Portfolio"),
          React.createElement('h2', { className: "text-4xl md:text-6xl font-serif font-bold text-obsidian-900" }, "Selected Works")
        ),

        // This container holds the sticky cards
        React.createElement('div', { className: "flex flex-col gap-12 md:gap-0" },
          projects.map((project, index) => (
            React.createElement(ProjectCard, { key: project.id, project: project, index: index, total: projects.length })
          ))
        )
      ),

      /* Dynamic Quote Section */
      React.createElement('section', { className: "py-40 px-6 text-white text-center relative overflow-hidden" },
        React.createElement('div', { className: "relative z-10 max-w-4xl mx-auto" },
          React.createElement('h3', { className: "text-3xl md:text-6xl font-serif leading-tight mb-10 text-white drop-shadow-2xl" },
            content.quoteText
          ),
          React.createElement('div', { className: "inline-block border border-white/20 px-8 py-3 rounded-full text-gold-300 font-mono text-sm bg-black/40 backdrop-blur-xl" },
            content.quoteAuthor
          )
        )
      ),

      React.createElement(Footer, { onAdminClick: onAdminClick, content: content })
    )
  );
};

export default SiteView;