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

      /* Skills Strip */
      React.createElement('div', { className: "py-6 md:py-8 w-full border-y border-obsidian-900/5 bg-white/0 backdrop-blur-[2px]" },
        React.createElement('div', { className: "max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-6 md:gap-20" },
          SKILLS.map((skill) => {
            const Icon = LucideIcons[skill.iconName] || LucideIcons.Code;
            return React.createElement('div', { key: skill.name, className: "flex flex-col items-center gap-2 group cursor-default opacity-70 hover:opacity-100 transition-opacity" },
              React.createElement(Icon, { className: "w-5 h-5 md:w-6 md:h-6 text-gold-600" }),
              React.createElement('span', { className: "uppercase tracking-[0.2em] text-[9px] md:text-xs font-bold text-obsidian-800" }, skill.name)
            );
          })
        )
      ),

      /* Projects Section */
      React.createElement('section', { id: "projects", className: "py-10 md:py-24 px-4 md:px-8 max-w-7xl mx-auto" },
        React.createElement(motion.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-10%" },
          transition: { duration: 0.6 },
          className: "mb-12 md:mb-20 text-center"
        },
          React.createElement('span', { className: "text-gold-600 tracking-[0.4em] text-[10px] md:text-xs uppercase font-bold block mb-3" }, "Portfolio"),
          React.createElement('h2', { className: "text-3xl md:text-6xl font-serif font-bold text-obsidian-900" }, "פרויקטים נבחרים")
        ),

        React.createElement('div', { className: "flex flex-col gap-16 md:gap-32" },
          projects.map((project, index) => (
            React.createElement(ProjectCard, { key: project.id, project: project, index: index })
          ))
        )
      ),

      /* Dynamic Quote Section */
      React.createElement('section', { className: "py-24 md:py-40 px-6 text-white text-center relative overflow-hidden" },
        React.createElement('div', { className: "relative z-10 max-w-4xl mx-auto" },
          React.createElement('h3', { className: "text-2xl md:text-5xl font-serif leading-tight mb-8 md:mb-10 whitespace-pre-line text-white/90 drop-shadow-lg" },
            content.quoteText
          ),
          React.createElement('div', { className: "inline-block border border-gold-500/50 px-6 py-2 rounded-full text-gold-400 font-mono text-sm bg-black/20 backdrop-blur-md" },
            content.quoteAuthor
          )
        )
      ),

      React.createElement(Footer, { onAdminClick: onAdminClick, content: content })
    )
  );
};

export default SiteView;