import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Chart from 'chart.js/auto';
import { skillsList } from '../data/portfolioData';

const badgeContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 }
  }
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 15 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const Skills = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) chartInstance.current.destroy();
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['HTML', 'CSS', 'JavaScript', 'React', 'PHP', 'MySQL', 'Cybersecurity', 'Figma'],
          datasets: [{
            label: 'Proficiency',
            data: [90, 85, 80, 75, 70, 80, 85, 90],
            backgroundColor: '#138086',
            borderColor: '#0b5558',
            borderWidth: 1
          }]
        },
        options: {
          scales: { y: { beginAtZero: true, max: 100 } },
          plugins: { legend: { display: false } },
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }
    return () => { if (chartInstance.current) chartInstance.current.destroy(); };
  }, []);

  return (
    <section id="skills" style={{ background: '#030f10', padding: '80px 0' }}>
     <div className="container text-center">
        
        {/* 🏆 Horizontal Premium Heading Layout Style applied to Skills */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '16px', 
          marginBottom: '45px',
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
            ⚡
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
            <span style={{ color: '#ffffff' }}>TECHNICAL</span>
            <span style={{ color: '#138086' }}>SKILLS</span>
          </h2>
        </div>

        <motion.div 
          style={{ position: 'relative', height: '320px', width: '100%', maxWidth: '700px', margin: '40px auto' }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <canvas ref={chartRef}></canvas>
        </motion.div>

        <motion.div 
          className="skills-container"
          variants={badgeContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillsList.map((skill, idx) => (
            <motion.span 
              className="skill-badge" 
              key={idx}
              variants={badgeVariants}
              whileHover={{ scale: 1.1, backgroundColor: '#138086', y: -4 }}
              style={{ cursor: 'pointer', display: 'inline-block' }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;