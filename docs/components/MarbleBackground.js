import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MarbleBackground = () => {
  const { scrollYProgress } = useScroll();
  
  // Smoother background transition
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#F5F5F7", "#E6E6E9", "#0a0a0a"]
  );

  return React.createElement(motion.div, {
    style: { backgroundColor },
    className: "fixed inset-0 z-[-1] overflow-hidden transition-colors duration-700"
  },
    // Elegant gradient blobs instead of heavy noise filter
    React.createElement('div', {
      className: "absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gold-200/20 blur-[100px] animate-float"
    }),
    React.createElement('div', {
      className: "absolute bottom-[20%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-obsidian-200/30 blur-[120px]",
      style: { animationDuration: '10s' }
    }),
    
    // Light beam following scroll slightly
    React.createElement(motion.div, {
      style: { 
        top: useTransform(scrollYProgress, [0, 1], ["0%", "40%"]),
        opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0.3])
      },
      className: "absolute left-1/2 -translate-x-1/2 w-[1px] h-[100vh] bg-gradient-to-b from-transparent via-gold-400/20 to-transparent"
    })
  );
};

export default MarbleBackground;