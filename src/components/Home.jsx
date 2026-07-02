import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import Hero3DBackground from './Hero3DBackground'; // Import your 3D canvas
import '../styles/profile.css';

const Home = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="home-section advanced-hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', background: '#030f10' }}>
      
      {/* ==========================================================================
         A. THREE.JS WIREFRAME & STAR BACKGROUND LAYER (Z-INDEX: 1)
         ========================================================================== */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
        <Hero3DBackground />
      </div>

      {/* Interactive Mouse-Following Spotlight Layer */}
      <div 
        className="mouse-glow"
        style={{
          position: 'fixed',
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(19, 128, 134, 0.12) 0%, rgba(157, 78, 221, 0.02) 50%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none',
          mixBlendMode: 'screen',
          zIndex: 2
        }}
      />

      {/* ==========================================================================
         B. FOREGROUND CONTENT WRAPPER LAYER (Z-INDEX: 10)
         ========================================================================== */}
      <div className="container hero-wrapper" style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', minHeight: '100vh' }}>
        
        {/* Left Side: Advanced Typed Information Column */}
        <div className="hero-left-content" style={{ width: '150%', position: 'relative', zIndex: 12 }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-greeting" style={{ fontSize: '3.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '15px' }}>
              Hi, I'm <span className="animated-gradient-text" style={{ background: 'linear-gradient(45deg, #138086, #42999e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Ghulam Qadir</span>
            </h1>
            
            <h2 className="hero-typing-subtitle" style={{ fontSize: '2rem', color: '#42999e', marginBottom: '25px', fontWeight: 600 }}>
              <span>
                <Typewriter
                  words={['BS Information Technology', 'React.js Developer', 'Mobile Application Developer', 'AI Professional', 'Cybersecurity Enthusiast', 'DevOps Engineer', 'UI/UX Designer']}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h2>
            
            <p className="hero-description" style={{ color: '#b0c4c5', fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '540px', marginBottom: '35px' }}>
              Aspiring IT specialist with a passion for designing secure high-performance system configurations, automated deployment pipelines, and custom sleek reactive web interfaces.
            </p>

            <div className="hero-cta-group" style={{ display: 'flex', gap: '15px' }}>
              <motion.a 
                href="#projects" 
                className="cta-btn primary-cta"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(19, 128, 134, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                style={{ padding: '12px 28px', background: '#138086', color: '#ffffff', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}
              >
                View My Work
              </motion.a>
              <motion.a 
                href="#contact" 
                className="cta-btn secondary-cta"
                whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.08)" }}
                whileTap={{ scale: 0.95 }}
                style={{ padding: '12px 28px', border: '1px solid rgba(255,255,255,0.2)', color: '#ffffff', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', background: 'transparent' }}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Large Glassmorphism Tilt Card Box with Profile Image */}
        <div className="hero-right-content" style={{ width: '100%', display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 12 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Tilt 
              className="parallax-tilt-card glass-card enlarged-card" 
              perspective={1000}
              glareEnable={true}
              glareMaxOpacity={0.12}
              glareColor="#ffffff"
            >
              <div className="glass-card-inner" style={{ background: 'rgba(3, 15, 16, 0.5)', padding: '25px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(15px)' }}>
                <div className="card-profile-wrapper large-profile" style={{ position: 'relative' }}>
                  <img src="images/dp.jpg" alt="Ghulam Profile" className="premium-avatar" style={{ width: '320px', height: '320px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #138086' }} />
                  <div className="avatar-status-badge" style={{ position: 'absolute', bottom: '20px', right: '20px', width: '18px', height: '18px', background: '#00ffcc', borderRadius: '50%', border: '3px solid #030f10' }}></div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>

      <div className="scroll-indicator-mouse" style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
        <div className="mouse-wheel-scroll"></div>
      </div>
    </section>
  );
};

export default Home;