import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

// Custom Counter Engine using pure Framer Motion hooks
const FramerCounter = ({ from = 0, to, suffix = "" }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const ref = useRef(null);

  useEffect(() => {
    // Triggers animation when element enters viewport view
    const controls = animate(count, to, {
      duration: 2.5,
      ease: "easeOut"
    });
    return () => controls.stop();
  }, [count, to]);

  useEffect(() => {
    return rounded.onChange((latest) => {
      if (ref.current) {
        ref.current.textContent = latest;
      }
    });
  }, [rounded]);

  return <span ref={ref} />;
};

const STATS = [
  { count: 12, suffix: "+", label: "Core Technical Projects" },
  { count: 5, suffix: "+", label: "Professional Certifications" },
  { count: 100, suffix: "+", label: "Git Commits / Pipeline Audits" },
  { count: 3, suffix: "+", label: "Years Specialized Learning" }
];

const Achievements = () => {
  return (
    <section id="numerical-stats" style={{ background: '#030f10', padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.02)' }}>
      <div className="container" style={{ maxWidth: '1140px' }}>
        
        {/* 🏆 Horizontal Premium Heading Layout Style applied to Certifications & Achievements */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '16px', 
          marginBottom: '55px',
          userSelect: 'none',
          justifyContent: 'flex-start'
        }}>
          {/* Rounded Border Icon Cavity Container */}
          <div style={{ 
            background: 'rgba(19, 128, 134, 0.03)', 
            border: '1px solid rgba(19, 128, 134, 0.15)', 
            width: '54px', 
            height: '54px', 
            borderRadius: '14px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontSize: '1.5rem',
            flexShrink: 0
          }}>
            🏆
          </div>

          {/* Straight Row Typography Heading Stack */}
          <h2 style={{ 
            margin: 0, 
            fontSize: '2.1rem', 
            fontWeight: 800, 
            textTransform: 'uppercase', 
            letterSpacing: '0.5px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            <span style={{ color: '#ffffff' }}>CERTIFICATIONS &</span>
            <span style={{ color: '#138086' }}>ACHIEVEMENTS</span>
          </h2>
        </div>

        {/* Core Stats Counter Matrix Grid */}
        <div className="row g-4 text-center">
          {STATS.map((stat, idx) => (
            <div className="col-6 col-md-3" key={idx}>
              <motion.div 
                className="stats-card-wrapper"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                style={{ padding: '20px', background: 'rgba(255,255,255,0.01)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.03)' }}
              >
                <h3 className="stats-counter-number" style={{ color: '#138086', fontSize: '3rem', fontWeight: 800, marginBottom: '5px' }}>
                  <FramerCounter from={0} to={stat.count} suffix={stat.suffix} />
                </h3>
                <p className="stats-counter-label" style={{ color: '#b0c4c5', fontSize: '0.95rem', margin: 0, fontWeight: 500 }}>
                  {stat.label}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;