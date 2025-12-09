import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const autoPlayRef = useRef<number | null>(null);

  // Dynamically get icon
  const IconComponent = (LucideIcons as any)[project.iconName] || LucideIcons.Code;

  // Media Helpers
  const isVideo = (url: string) => {
    return url.includes('youtube.com') || url.includes('youtu.be') || url.endsWith('.mp4') || url.endsWith('.webm');
  };

  const isYouTube = (url: string) => url.includes('youtube.com') || url.includes('youtu.be');

  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Navigation Logic
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  // Auto Play Effect
  useEffect(() => {
    if (project.autoPlay && project.images.length > 1) {
      autoPlayRef.current = window.setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % project.images.length);
      }, 4000); 
    }

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [project.autoPlay, project.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }} // Triggers earlier
      transition={{ duration: 0.4, ease: "easeOut" }} // Snappy
      className="w-full mb-8 md:mb-12 last:mb-0"
    >
      <div className="flex flex-col lg:flex-row bg-white/90 backdrop-blur-sm shadow-xl shadow-obsidian-200/20 rounded-lg overflow-hidden border border-white/50">
        
        {/* Gallery Section */}
        <div className="relative w-full lg:w-3/5 h-[250px] md:h-[450px] bg-obsidian-100 group">
          <div className="absolute inset-0 overflow-hidden bg-black">
             {project.images.map((mediaUrl, idx) => (
               <motion.div 
                 key={idx}
                 initial={false}
                 animate={{ opacity: idx === currentImage ? 1 : 0, zIndex: idx === currentImage ? 10 : 0 }}
                 transition={{ duration: 0.5 }}
                 className="absolute inset-0 flex items-center justify-center bg-black"
               >
                 {isVideo(mediaUrl) ? (
                   isYouTube(mediaUrl) ? (
                     <iframe 
                       width="100%" 
                       height="100%" 
                       src={`https://www.youtube.com/embed/${getYouTubeId(mediaUrl)}?controls=0&autoplay=${project.autoPlay ? 1 : 0}&mute=1&loop=1`} 
                       title="YouTube video player" 
                       frameBorder="0" 
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                       allowFullScreen
                       className="w-full h-full object-cover"
                     ></iframe>
                   ) : (
                     <video 
                       src={mediaUrl} 
                       className="w-full h-full object-cover"
                       autoPlay={project.autoPlay} 
                       muted 
                       loop 
                       playsInline
                     />
                   )
                 ) : (
                   <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${mediaUrl})` }}
                   />
                 )}
               </motion.div>
             ))}
             
             {/* Overlay */}
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-20" />
          </div>

          {/* Navigation Controls */}
          {project.images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100 z-30"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100 z-30"
              >
                <ChevronRight size={24} />
              </button>
              
              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {project.images.map((_, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setCurrentImage(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentImage ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-2/5 p-6 md:p-12 flex flex-col justify-center relative">
          {/* Decorative number */}
          <span className="absolute top-4 left-6 text-5xl md:text-8xl font-serif text-obsidian-100/80 pointer-events-none select-none">
            0{index + 1}
          </span>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <span className="p-2 bg-gold-100/50 text-gold-900 rounded-md backdrop-blur-sm">
                <IconComponent size={20} />
              </span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gold-600 uppercase">
                {project.category}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-serif font-bold text-obsidian-900 mb-4 md:mb-5">
              {project.title}
            </h3>

            <p className="text-obsidian-600 leading-relaxed font-sans text-sm md:text-base mb-6 md:mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-[10px] md:text-xs font-bold text-obsidian-500 border border-obsidian-200 px-3 py-1.5 uppercase tracking-wider bg-white/50">
                  {tech}
                </span>
              ))}
            </div>
            
            <a 
              href={project.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-obsidian-900 font-bold uppercase tracking-widest text-xs md:text-sm hover:text-gold-600 transition-colors group inline-flex"
            >
              חקור פרויקט
              <ExternalLink size={16} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;