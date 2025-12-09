import React from 'react';
import { Project, SiteContent } from '../types';
import MarbleBackground from './MarbleBackground';
import Hero from './Hero';
import ProjectCard from './ProjectCard';
import Footer from './Footer';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { SKILLS } from '../constants';

interface SiteViewProps {
  projects: Project[];
  content: SiteContent;
  onAdminClick: () => void;
  isAdminMode?: boolean;
}

const SiteView: React.FC<SiteViewProps> = ({ projects, content, onAdminClick, isAdminMode = false }) => {
  return (
    <div className={`relative min-h-screen font-sans overflow-x-hidden ${isAdminMode ? 'bg-white' : ''}`}>
      <MarbleBackground />

      <main>
        <Hero content={content} />

        {/* Skills Strip - Transparent & Sleek */}
        <div className="py-6 md:py-8 w-full border-y border-obsidian-900/5 bg-white/0 backdrop-blur-[2px]">
           <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-6 md:gap-20">
              {SKILLS.map((skill) => {
                const Icon = (LucideIcons as any)[skill.iconName] || LucideIcons.Code;
                return (
                  <div key={skill.name} className="flex flex-col items-center gap-2 group cursor-default opacity-70 hover:opacity-100 transition-opacity">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-gold-600" />
                    <span className="uppercase tracking-[0.2em] text-[9px] md:text-xs font-bold text-obsidian-800">{skill.name}</span>
                  </div>
                )
              })}
           </div>
        </div>

        {/* Projects Section */}
        <section id="projects" className="py-10 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-20 text-center"
          >
            <span className="text-gold-600 tracking-[0.4em] text-[10px] md:text-xs uppercase font-bold block mb-3">Portfolio</span>
            <h2 className="text-3xl md:text-6xl font-serif font-bold text-obsidian-900">פרויקטים נבחרים</h2>
          </motion.div>

          <div className="flex flex-col gap-16 md:gap-32">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Dynamic Quote Section */}
        <section className="py-24 md:py-40 px-6 text-white text-center relative overflow-hidden">
          {/* Note: Background color is handled by MarbleBackground now, text needs to contrast against dark bottom */}
          <div className="relative z-10 max-w-4xl mx-auto">
             <h3 className="text-2xl md:text-5xl font-serif leading-tight mb-8 md:mb-10 whitespace-pre-line text-white/90 drop-shadow-lg">
               {content.quoteText}
             </h3>
             <div className="inline-block border border-gold-500/50 px-6 py-2 rounded-full text-gold-400 font-mono text-sm bg-black/20 backdrop-blur-md">
               {content.quoteAuthor}
             </div>
          </div>
        </section>

        <Footer onAdminClick={onAdminClick} content={content} />
      </main>
    </div>
  );
};

export default SiteView;