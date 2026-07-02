import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import '../styles/main.css';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 45, stiffness: 450, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const checkHover = (e) => {
      // Safely check if the element beneath the cursor matches interactive tags
      const target = e.target;
      if (
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.skill-badge') || 
        target.closest('input') || 
        target.closest('textarea') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', checkHover); // Detect shifts using bubble event streaming safely
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', checkHover);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="custom-interactive-pointer-ring"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
        animate={{
          scale: isHovered ? 2.0 : 1,
          backgroundColor: isHovered ? "rgba(19, 128, 134, 0.2)" : "rgba(19, 128, 134, 0.02)",
          borderColor: isHovered ? "#42999e" : "rgba(19, 128, 134, 0.7)"
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
      />
      <motion.div 
        className="custom-cursor-core-dot"
        style={{ 
          left: useSpring(cursorX, { damping: 55, stiffness: 750 }), 
          top: useSpring(cursorY, { damping: 55, stiffness: 750 }) 
        }}
        animate={{ scale: isHovered ? 0 : 1 }}
      />
    </>
  );
};

export default CustomCursor;