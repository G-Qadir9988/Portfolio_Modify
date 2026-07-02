import React from 'react';
import { motion } from 'framer-motion';

const RECOMMENDATIONS = [
  {
    quote: "Ghulam transformed our development pipeline completely. The automated deployment scripts reduced our release times significantly.",
    author: "DevOps Team Peer",
    role: "Air University Assignment Colleague"
  },
  {
    quote: "Excellent grip over structural application setups and Firebase infrastructure. The Women Safety application architecture was clean and modular.",
    author: "Project Supervisor",
    role: "Academic Evaluator"
  },
  {
    quote: "His attention to backend access paths and security constraints made the AnonTrust project proposal incredibly thorough.",
    author: "Cybersecurity Lab Partner",
    role: "Full-Stack Collaborator"
  }
];

const Testimonials = () => {
  // Duplicate array to enable an endless, seamless looping animation path
  const duplicatedSlides = [...RECOMMENDATIONS, ...RECOMMENDATIONS];

  return (
    <section id="testimonials" style={{ background: '#051618', padding: '80px 0', overflow: 'hidden' }}>
      <div className="container mb-4">
        <motion.h2 
          style={{ color: '#138086', fontWeight: 800, margin: 0 }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Peer Endorsements
        </motion.h2>
      </div>

      {/* Infinite Horizontal Rolling Track Wrapper */}
      <div className="infinite-carousel-container" style={{ display: 'flex', width: '100%', position: 'relative' }}>
        <motion.div 
          className="carousel-track d-flex gap-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity
          }}
          style={{ display: 'flex', whiteSpace: 'nowrap' }}
        >
          {duplicatedSlides.map((item, idx) => (
            <div 
              key={idx} 
              className="testimonial-scroll-card"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                padding: '30px',
                borderRadius: '16px',
                width: '400px',
                flexShrink: 0,
                backdropFilter: 'blur(10px)',
                whiteSpace: 'normal' // Restores text-wrapping inside inline blocks
              }}
            >
              <p style={{ fontStyle: 'italic', color: '#b0c4c5', fontSize: '0.95rem', marginBottom: '15px', lineHeight: 1.6 }}>
                "{item.quote}"
              </p>
              <div>
                <h5 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 600, margin: '0 0 2px 0' }}>{item.author}</h5>
                <span style={{ color: '#42999e', fontSize: '0.8rem', fontWeight: 500 }}>{item.role}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;