import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorGlow = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth lagging spring dynamics
  const glowX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const glowY = useSpring(mouseY, { stiffness: 80, damping: 25 });

  useEffect(() => {
    const handleMove = (e) => {
      // Offset values by 200px to position the center coordinate cleanly
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div 
      style={{
        position: 'fixed',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(19, 128, 134, 0.04) 0%, rgba(157, 78, 221, 0.01) 50%, rgba(0,0,0,0) 100%)',
        pointerEvents: 'none',
        zIndex: 1,
        left: glowX,
        top: glowY,
      }}
    />
  );
};

export default CursorGlow;