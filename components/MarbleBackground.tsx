import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MarbleBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Dynamic Background Color: Pearl -> Platinum -> Deep Obsidian
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    ["#F5F5F7", "#E6E6E9", "#1A1A1D", "#050505"]
  );

  // Dynamic Accent Gradient colors
  const gradientColor1 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgba(197, 160, 40, 0.05)", "rgba(197, 160, 40, 0.1)", "rgba(255, 215, 0, 0.05)"]
  );

  // Move a large "Aurora" spotlight across the screen
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);

  return (
    <motion.div 
      style={{ backgroundColor }}
      className="fixed inset-0 z-[-1] overflow-hidden transition-colors duration-500"
    >
      {/* Base Texture - Noise (Very subtle) */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* The "Living" Light Source */}
      <motion.div 
        style={{ 
          background: gradientColor1,
          top: y,
          left: x,
          scale: scale
        }}
        className="absolute w-[150vw] h-[150vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] pointer-events-none"
      />
      
      {/* Secondary ambient light for depth */}
      <div className="absolute bottom-0 right-0 w-[80vw] h-[80vw] bg-gradient-to-t from-white/5 to-transparent blur-[100px] pointer-events-none mix-blend-overlay"></div>
    </motion.div>
  );
};

export default MarbleBackground;