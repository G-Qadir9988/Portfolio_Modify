import React from 'react';
import { motion } from 'framer-motion';

const BIO_POINTS = [
  {
    title: "Academic Foundation",
    details: "BSIT student at Air University Islamabad (2023–2027) passionate about web engineering, AI system integration, and cybersecurity."
  },
  {
    title: "Project Architecture",
    details: "Developed 10+ academic projects, including intelligent full-stack applications, security audits, and automated systems."
  },
  {
    title: "Technical Specialization",
    details: "Skilled in Mobile App Development (Java & Dart/Flutter), MERN stack, Python AI frameworks (Scikit-Learn, PyTorch, NLP), and cloud/DevOps tools."
  },
  {
    title: "Frontend Engineering Experience",
    details: "Completed a 2-month remote Frontend Developer internship at Appverse Technologies, mastering responsive component architectures."
  },
  {
    title: "UI/UX & Design Experience",
    details: "Completed a 1-month internship at Innovista Rawal, focusing on digital design, asset branding, and UI/UX engineering."
  },
  {
    title: "Future Objectives",
    details: "Enthusiastic about building scalable backend systems, deploying data-driven solutions, and learning cutting-edge technologies."
  }
];

const Timeline = () => {
  return (
    <section id="about" style={{ background: '#030f10', padding: '100px 0', position: 'relative' }}>
      <div className="container">
        
        {/* 🏆 Horizontal Premium Heading Layout Style aligned exactly to image_7d95fa.png */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '16px', 
          marginBottom: '45px',
          userSelect: 'none'
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
            👨‍💻
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
            <span style={{ color: '#ffffff' }}>ABOUT</span>
            <span style={{ color: '#138086' }}>ME</span>
          </h2>
        </div>
        
        <div className="timeline-structure-container" style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          
          {/* ⚡ Animated Vertical Progress Line */}
          <motion.div 
            className="timeline-vertical-backline"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{
              position: 'absolute', left: '20px', top: 0, width: '2px',
              background: 'linear-gradient(180deg, #138086 0%, #9d4edd 100%)', originY: 0
            }}
          />

          {BIO_POINTS.map((item, idx) => (
            <div className="timeline-node-item mb-5" key={idx} style={{ position: 'relative', paddingLeft: '60px' }}>
              
              {/* Timeline Node Dot Indicator */}
              <motion.div 
                className="timeline-indicator-dot"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, type: 'spring', stiffness: 150 }}
                style={{
                  position: 'absolute', left: '11px', top: '6px', width: '20px', height: '20px',
                  borderRadius: '50%', background: '#030f10', border: '3px solid #138086', zIndex: 2
                }}
              />

              {/* Core Text Card Body */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255,255,255,0.05)',
                  padding: '24px', borderRadius: '12px', backdropFilter: 'blur(10px)'
                }}
              >
                <h4 style={{ color: '#42999e', margin: '0 0 10px 0', fontSize: '1.2rem', fontWeight: 600 }}>
                  {item.title}
                </h4>
                <p style={{ color: '#b0c4c5', fontSize: '1rem', margin: 0, lineHeight: 1.6 }}>
                  {item.details}
                </p>
              </motion.div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Timeline;