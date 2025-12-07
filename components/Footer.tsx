import React from 'react';
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';
import { SiteContent } from '../types';

interface FooterProps {
  onAdminClick: () => void;
  content: SiteContent;
}

const Footer: React.FC<FooterProps> = ({ onAdminClick, content }) => {
  return (
    <footer className="relative mt-20 bg-obsidian-900 text-white pt-24 pb-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 border-b border-obsidian-800 pb-16">
        
        <div className="text-center md:text-right">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            {content.footerTitle}
          </h2>
          <p className="text-obsidian-400 text-lg max-w-md">
            {content.footerText}
          </p>
        </div>

        <div className="flex gap-4">
          <a href="#" className="p-4 rounded-full bg-obsidian-800 hover:bg-gold-500 hover:text-black transition-all duration-300">
            <Mail size={24} />
          </a>
          <a href="#" className="p-4 rounded-full bg-obsidian-800 hover:bg-gold-500 hover:text-black transition-all duration-300">
            <Github size={24} />
          </a>
          <a href="#" className="p-4 rounded-full bg-obsidian-800 hover:bg-gold-500 hover:text-black transition-all duration-300">
            <Linkedin size={24} />
          </a>
          <a href="#" className="p-4 rounded-full bg-obsidian-800 hover:bg-gold-500 hover:text-black transition-all duration-300">
            <MessageCircle size={24} />
          </a>
        </div>
      </div>
      
      <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-obsidian-500 text-sm font-mono">
        <p>Built by Shay Kalimi - @Shay.A.i</p>
        
        <div className="flex gap-8 mt-4 md:mt-0">
          <span className="cursor-pointer hover:text-gold-500 transition-colors">Privacy Policy</span>
          <span className="cursor-pointer hover:text-gold-500 transition-colors" onClick={onAdminClick}>Admin</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;