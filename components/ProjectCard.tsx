import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  // Sticky Stacking Implementation
  return (
    <div 
      className="sticky top-24 md:top-32 w-full"
      style={{ zIndex: index + 1, marginBottom: '60px' }}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block group cursor-pointer"
      >
        <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-obsidian-100 transition-transform duration-500 group-hover:-translate-y-2 h-[65vh] md:h-[70vh] flex flex-col md:flex-row">
          
          {/* Image Side (Top on mobile, Right on desktop) */}
          <div className="absolute inset-0 md:relative md:w-3/5 h-full overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              style={{ backgroundImage: `url(${project.images[0]})` }}
            />
            {/* Mobile Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent md:hidden" />
          </div>

          {/* Content Side (Bottom on mobile, Left on desktop) */}
          <div className="absolute bottom-0 left-0 right-0 md:relative md:inset-auto md:w-2/5 p-8 md:p-12 flex flex-col justify-end md:justify-center md:bg-white text-white md:text-obsidian-900 z-10">
            
            {/* Number */}
            <span className="text-gold-400 md:text-gold-600 font-mono text-xs mb-4 block">
              0{index + 1}
            </span>
            
            {/* Title */}
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-4 leading-tight">
              {project.title}
            </h3>
            
            {/* Description */}
            <p className="text-sm md:text-base text-gray-300 md:text-obsidian-600 mb-8 leading-relaxed line-clamp-3 md:line-clamp-none">
              {project.description}
            </p>
            
            {/* Business Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map(tag => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-white/20 md:bg-obsidian-100 backdrop-blur-md rounded-full text-[10px] md:text-xs font-bold text-white md:text-obsidian-700 border border-white/20 md:border-transparent"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Button */}
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest group-hover:text-gold-500 transition-colors">
              ראה פרויקט
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;