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

        {/* Skills Strip */}
        <div className="py-8 md:py-12 bg-white/80 backdrop-blur-sm border-y border-obsidian-100 overflow-hidden sticky top-0 z-40 transition-all duration-300">
           <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-20 opacity-80">
              {SKILLS.map((skill) => {
                const Icon = (LucideIcons as any)[skill.iconName] || LucideIcons.Code;
                return (
                  <div key={skill.name} className="flex flex-col items-center gap-2 group cursor-default">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-gold-500 group-hover:scale-110 transition-transform" />
                    <span className="uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold text-obsidian-800">{skill.name}</span>
                  </div>
                )
              })}
           </div>
        </div>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-24 text-center"
          >
            <span className="text-gold-500 tracking-[0.4em] text-xs uppercase font-bold block mb-4">Portfolio</span>
            <h2 className="text-3xl md:text-6xl font-serif font-bold text-obsidian-900">פרויקטים נבחרים</h2>
            <div className="w-1 h-12 md:h-16 bg-gradient-to-b from-gold-400 to-transparent mx-auto mt-6 md:mt-8"></div>
          </motion.div>

          <div className="flex flex-col gap-12 md:gap-24">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Dynamic Quote Section */}
        <section className="py-24 md:py-40 px-6 bg-obsidian-950 text-white text-center relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto">
             <h3 className="text-2xl md:text-5xl font-serif leading-tight mb-8 md:mb-10 whitespace-pre-line">
               {content.quoteText}
             </h3>
             <div className="inline-block border border-gold-500/30 px-6 py-2 rounded-full text-gold-500 font-mono text-sm">
               {content.quoteAuthor}
             </div>
          </div>
          {/* Subtle noise texture for dark bg */}
           <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
          </div>
        </section>

        <Footer onAdminClick={onAdminClick} content={content} />
      </main>
    </div>
  );
};

export default SiteView;