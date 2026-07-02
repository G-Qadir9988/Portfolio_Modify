import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const INTERNSHIPS = [
   {

    id: 1,

    company: "Appverse Technologies Internship",

    role: "Frontend Developer Intern",

    location: "Remote, Lahore",

    period: "Jul 2025 - Sep 2025",

    desc: "Worked on building responsive frontend architectures, optimizing rendering speeds, and collaborating with UX/UI design teams to build cohesive web modules.",

    tags: ["React", "JavaScript", "HTML", "CSS", "Figma", "Git"],

    certPreview: "images/app.png"

  },

  {

    id: 2,
  company: "Innovista Rawal Internship",

    role: "Digital Skills Intern",

    location: "Rawalpindi",

    period: "Jun 2024 - Jun 2024",

    desc: "Focused heavily on interface layouts, high-fidelity wireframes, branding typography parameters, and asset generation using digital styling software engines.",

    tags: ["UI/UX", "Figma", "Canva", "Branding", "Content Design"],

    certPreview: "images/internship certificate.jpg"

  }
];

const Internship = () => {
  // 💎 1. State Engine Tracking Active Lightbox Source
  const [activeImg, setActiveImg] = useState(null);

  return (
   // Change your opening section tag to look exactly like this:
<section id="internship" style={{ background: '#051618', padding: '100px 0' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        
        {/* Title Heading Elements */}
        <div className="d-flex align-items-center gap-3 mb-5">
          <div style={{ background: 'rgba(19, 128, 134, 0.1)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(19, 128, 134, 0.2)', color: '#138086', fontSize: '1.5rem' }}>💼</div>
          <h2 style={{ color: '#ffffff', fontWeight: 800, fontSize: '2rem', margin: 0 }}>INTERNSHIP <span style={{ color: '#138086' }}>EXPERIENCE</span></h2>
        </div>

        <p style={{ color: '#b0c4c5', fontSize: '1rem', marginTop: '-30px', marginBottom: '50px' }}>
          Hands-on experience, real-world projects, and continuous learning.
        </p>

        {/* Master Timeline Node Structural Chain Wrapper */}
        <div style={{ position: 'relative', paddingLeft: '30px' }}>
          
          {/* Timeline Center Backbone Stem */}
          <div style={{ position: 'absolute', left: '0', top: '10px', bottom: '10px', width: '2px', background: 'rgba(255,255,255,0.05)' }}></div>

          {INTERNSHIPS.map((job) => (
            <div className="row mb-5 position-relative" key={job.id}>
              
              {/* Chronological Dot Anchor */}
              <div style={{ position: 'absolute', left: '-36px', top: '12px', width: '14px', height: '14px', borderRadius: '50%', background: '#138086', border: '3px solid #051618', boxShadow: '0 0 10px #138086', zIndex: 5 }}></div>

              {/* Left Side: Time Window Box */}
              <div className="col-md-3 mb-2">
                <span style={{ color: '#42999e', fontWeight: 600, fontSize: '0.85rem', display: 'inline-block', background: 'rgba(66, 153, 158, 0.05)', padding: '4px 12px', borderRadius: '6px', border: '1px solid rgba(66, 153, 158, 0.1)' }}>
                  {job.period}
                </span>
              </div>

              {/* Right Side: Embedded Experience Layout Body */}
              <div className="col-md-9">
                <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '24px', display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  
                  {/* Experience Technical Text Content */}
                  <div style={{ flex: '1 1 400px' }}>
                    <h4 style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: 700, margin: '0 0 4px 0' }}>{job.company}</h4>
                    <h6 style={{ color: '#138086', fontSize: '0.95rem', fontWeight: 500, margin: '0 0 14px 0' }}>
                      {job.role} • <span style={{ color: '#b0c4c5', fontSize: '0.85rem' }}>{job.location}</span>
                    </h6>
                    <p style={{ color: '#b0c4c5', fontSize: '0.9rem', lineHeight: '1.6', margin: '0 0 20px 0' }}>{job.desc}</p>
                    
                    {/* Horizontal Skill Badges Matrix */}
                    <div className="d-flex flex-wrap gap-2">
                      {job.tags.map((tag, tIdx) => (
                        <span key={tIdx} style={{ fontSize: '0.75rem', fontWeight: 600, color: '#42999e', background: 'rgba(66, 153, 158, 0.08)', padding: '4px 12px', borderRadius: '6px', border: '1px solid rgba(66, 153, 158, 0.15)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 💎 2. Interactive Thumbnail Preview Card Element Block */}
                  <div 
                    onClick={() => setActiveImg(job.certPreview)}
                    style={{ width: '160px', height: '105px', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', position: 'relative', background: '#030f10', flexShrink: 0 }} 
                    className="internship-preview-frame"
                  >
                    <img src={job.certPreview} alt="Credential Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', bottom: '8px', right: '8px', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.2)', width: '24px', height: '24px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.75rem', cursor: 'pointer' }}>↗</div>
                  </div>

                </div>
              </div>

            </div>
          ))}

        </div>

        {/* Global Action Footer Link */}
        <div className="text-center mt-5">
          <button className="filter-tab-btn tab-active" style={{ fontSize: '0.9rem', padding: '12px 30px' }}>
            View Full Experience →
          </button>
        </div>

      </div>

      {/* ==========================================================================
         🔒 LIGHTBOX MODAL CORE ENGINE (PRO-LEVEL INTERACTIVE VIEWER)
         ========================================================================== */}
      <AnimatePresence>
        {activeImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImg(null)} // Click background to close overlay securely
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(3, 15, 16, 0.95)', backdropFilter: 'blur(12px)', zIndex: 10000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}
          >
            {/* Close Crossmark UI */}
            <button 
              onClick={() => setActiveImg(null)}
              style={{ position: 'absolute', top: '30px', right: '40px', background: 'transparent', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer', zIndex: 10002 }}
            >
              ✕
            </button>

            {/* Scale Container Framework */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Halts bubble closing loops on element clicks
              style={{ position: 'relative', maxWidth: '85vw', maxHeight: '80vh', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.8)' }}
            >
              <img src={activeImg} alt="Internship Certificate Enlarged View" style={{ maxWidth: '100%', maxHeight: '80vh', display: 'block', objectFit: 'contain', background: '#031011' }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Internship;