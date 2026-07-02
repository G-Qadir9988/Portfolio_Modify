import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer style={{ background: '#030f10', padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
      <div className="container" style={{ maxWidth: '1140px' }}>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
          
          {/* Left Side: Brand Identity Signature */}
          <div className="text-center text-md-start">
            <h5 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 700, margin: '0 0 4px 0', letterSpacing: '0.5px' }}>
              Ghulam Qadir
            </h5>
            <p style={{ color: '#42999e', fontSize: '0.85rem', fontWeight: 500, margin: 0 }}>
              Information Technology Specialist & Developer
            </p>
          </div>

          {/* Center: System Architecture Ledger & Copyright */}
          <div className="text-center">
            <p style={{ color: 'rgba(176, 196, 197, 0.4)', fontSize: '0.85rem', margin: 0 }}>
              &copy; {currentYear} Ghulam Qadir.
            </p>
            <p style={{ color: 'rgba(19, 128, 134, 0.4)', fontSize: '0.75rem', margin: '2px 0 0 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
              All Rights Reserved.
            </p>
          </div>

          {/* Right Side: Back To Top Navigation Trigger Button */}
          <div className="text-center text-md-end">
            <motion.a 
              href="#home"
              onClick={scrollToTop}
              whileHover={{ y: -3, color: '#ffffff', borderColor: 'rgba(66, 153, 158, 0.4)' }}
              style={{ 
                color: '#42999e', 
                fontSize: '0.85rem', 
                fontWeight: 600, 
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.05)',
                background: 'rgba(0,0,0,0.15)',
                padding: '8px 16px',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
            >
              Back to Top <span>↑</span>
            </motion.a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;