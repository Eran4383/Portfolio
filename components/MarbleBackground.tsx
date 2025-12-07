import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MarbleBackground: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax transforms - elements move at different speeds relative to scroll
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 100]);
  const rotate = useTransform(scrollY, [0, 2000], [0, 20]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-stone-50">
      {/* Base Texture - Noise */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Floating Orbs / Veins of "Marble" with Parallax */}
      <motion.div 
        style={{ y: y1, rotate: rotate }}
        className="absolute -top-[10%] -right-[10%] w-[900px] h-[900px] bg-stone-200/40 rounded-full blur-[120px]"
      />
      
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[30%] -left-[10%] w-[700px] h-[700px] bg-gray-100/60 rounded-full blur-[100px]"
      />

      <motion.div 
        style={{ y: y3 }}
        className="absolute bottom-[-10%] right-[20%] w-[600px] h-[600px] bg-stone-100/70 rounded-full blur-[90px]"
      />

      {/* Glass overlay for that glossy finish */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]"></div>
    </div>
  );
};

export default MarbleBackground;