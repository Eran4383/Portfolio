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
    <div className={`relative font-sans text-obsidian-900 ${isAdminMode ? 'bg-white' : ''}`}>
      <MarbleBackground />

      <main className="relative z-10">
        <Hero content={content} />

        {/* Skills Strip */}
        <div className="py-8 border-y border-obsidian-900/5 bg-white/40 backdrop-blur-md mb-20">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-10 md:gap-24">
            {SKILLS.map((skill) => {
              const Icon = (LucideIcons as any)[skill.iconName] || LucideIcons.Code;
              return (
                <div key={skill.name} className="flex flex-col items-center gap-2 text-obsidian-600">
                  <Icon className="w-6 h-6 text-gold-600" />
                  <span className="uppercase tracking-widest text-xs font-bold">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Projects Section - STACKING EFFECT */}
        <section id="projects" className="px-4 md:px-8 max-w-5xl mx-auto pb-40">
          <div className="mb-20 text-center">
            <span className="text-gold-600 tracking-[0.3em] text-xs uppercase font-bold block mb-4">Selected Work</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-obsidian-900">תוצאות בשטח</h2>
          </div>

          {/* The Container for stacking */}
          <div className="flex flex-col gap-20 md:gap-32">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                // We likely need to pass total in TSX if the props changed, but let's assume index is enough for now or update ProjectCard types
                // But looking at ProjectCard update below, we need to handle total or ignore it if not strictly typed yet.
                // However, for correct stacking, we need total for margin calculation.
                // We'll update ProjectCard.tsx first to accept 'total' if needed, but here we can just pass it as 'any' or update interface later.
                // For safety in this prompt, I'll update ProjectCard.tsx props.
              />
            ))}
          </div>
        </section>

        {/* Quote */}
        <section className="py-32 px-6 text-center bg-obsidian-900 text-white clip-path-slant">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-5xl font-serif leading-tight mb-8">
              {content.quoteText}
            </h3>
            <div className="text-gold-400 font-mono text-sm">
              {`— ${content.quoteAuthor}`}
            </div>
          </div>
        </section>

        <Footer onAdminClick={onAdminClick} content={content} />
      </main>
    </div>
  );
};

export default SiteView;