import React from 'react';
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';

const Footer = ({ onAdminClick, content }) => {
  return React.createElement('footer', { className: "relative mt-20 bg-obsidian-900 text-white pt-24 pb-8 px-6" },
    React.createElement('div', { className: "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 border-b border-obsidian-800 pb-16" },
      
      React.createElement('div', { className: "text-center md:text-right" },
        React.createElement('h2', { className: "text-4xl md:text-5xl font-serif font-bold text-white mb-4" },
          content.footerTitle
        ),
        React.createElement('p', { className: "text-obsidian-400 text-lg max-w-md" },
          content.footerText
        )
      ),

      React.createElement('div', { className: "flex gap-4" },
        React.createElement('a', { href: "#", className: "p-4 rounded-full bg-obsidian-800 hover:bg-gold-500 hover:text-black transition-all duration-300" },
          React.createElement(Mail, { size: 24 })
        ),
        React.createElement('a', { href: "#", className: "p-4 rounded-full bg-obsidian-800 hover:bg-gold-500 hover:text-black transition-all duration-300" },
          React.createElement(Github, { size: 24 })
        ),
        React.createElement('a', { href: "#", className: "p-4 rounded-full bg-obsidian-800 hover:bg-gold-500 hover:text-black transition-all duration-300" },
          React.createElement(Linkedin, { size: 24 })
        ),
        React.createElement('a', { href: "#", className: "p-4 rounded-full bg-obsidian-800 hover:bg-gold-500 hover:text-black transition-all duration-300" },
          React.createElement(MessageCircle, { size: 24 })
        )
      )
    ),
    
    React.createElement('div', { className: "mt-12 flex flex-col md:flex-row justify-between items-center text-obsidian-500 text-sm font-mono" },
      React.createElement('p', null, "Built by Shay Kalimi - @Shay.A.i"),
      
      React.createElement('div', { className: "flex gap-8 mt-4 md:mt-0" },
        React.createElement('span', { className: "cursor-pointer hover:text-gold-500 transition-colors" }, "Privacy Policy"),
        React.createElement('span', { className: "cursor-pointer hover:text-gold-500 transition-colors", onClick: onAdminClick }, "Admin")
      )
    )
  );
};

export default Footer;