import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Updated with your exact image filenames and extensions
const CERTIFICATES = [
  { id: 1, title: "Letter of Recommendation", subtitle: "Internship", img: "/images/cert1.png" },
  { id: 2, title: "Certificate of Training", subtitle: "Wiley Research Trainin", img: "/images/cert2.png" },
  { id: 3, title: "Appreciation Certificate", subtitle: "Achievement", img: "/images/ceritificate of appreciation.jpg" },
  { id: 4, title: "Introduction To AI Certificate", subtitle: "Google Cloud Certification", img: "/images/courseera Intr AI.png" },
  { id: 5, title: "Introduction To Generative AI", subtitle: "Google Cloud Certification", img: "/images/courseera AI.png" },
  { id: 6, title: "Foundation Of  AI and ML", subtitle: "Microsoft Certification", img: "/images/courseera Foundation.png" },

];

const Gallery = () => {
  const [activeImg, setActiveImg] = useState(null);

  return (
    // 👇 THIS ID CAPTURES THE NAVBAR SCROLL LINK PERFECTLY NOW
    <section id="achievements" style={{ background: '#030f10', padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.02)' }}>
      <div className="container">
        
        <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '24px', padding: '40px', position: 'relative' }}>
          
          <div className="row align-items-center mb-5">
            <div className="col-lg-4">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div style={{ background: 'rgba(19, 128, 134, 0.1)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(19, 128, 134, 0.2)', color: '#138086', fontSize: '1.5rem' }}>🏆</div>
                <h2 style={{ color: '#ffffff', fontWeight: 800, fontSize: '2rem', margin: 0 }}>ACHIEVEMENTS <span style={{ color: '#138086' }}>GALLERY</span></h2>
              </div>
              <p style={{ color: '#b0c4c5', fontSize: '1rem', lineHeight: '1.6', marginBottom: '25px' }}>
                A collection of my certificates, recognitions, and achievements that reflect my journey.
              </p>
              
              <div className="d-flex gap-3 mb-4">
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '12px 20px', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#138086', fontSize: '1.2rem' }}>⭐</span>
                  <div>
                    <h5 style={{ color: '#ffffff', margin: 0, fontWeight: 700, fontSize: '1.1rem' }}>06+</h5>
                    <p style={{ color: '#b0c4c5', margin: 0, fontSize: '0.75rem' }}>Certificates</p>
                  </div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '12px 20px', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#138086', fontSize: '1.2rem' }}>🛡️</span>
                  <div>
                    <h5 style={{ color: '#ffffff', margin: 0, fontWeight: 700, fontSize: '1.1rem' }}>100%</h5>
                    <p style={{ color: '#b0c4c5', margin: 0, fontSize: '0.75rem' }}>Dedication</p>
                  </div>
                </div>
              </div>

              <button className="filter-tab-btn tab-active" style={{ fontSize: '0.85rem', padding: '10px 20px' }}>View All Certificates →</button>
            </div>

            <div className="col-lg-8">
              <div className="row g-3">
                {CERTIFICATES.map((cert) => (
                  <div className="col-sm-6 col-md-3" key={cert.id}>
                    <div 
                      style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '12px', cursor: 'pointer', transition: 'all 0.3s ease' }}
                      className="cert-thumbnail-card"
                      onClick={() => setActiveImg(cert.img)}
                    >
                      <div style={{ width: '100%', height: '130px', borderRadius: '10px', overflow: 'hidden', marginBottom: '12px', background: '#0d1e20', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <img src={cert.img} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} className="gallery-thumbnail-img" />
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h6 style={{ color: '#ffffff', margin: '0 0 2px 0', fontSize: '0.85rem', fontWeight: 600 }}>{cert.title}</h6>
                          <p style={{ color: '#b0c4c5', margin: 0, fontSize: '0.75rem' }}>{cert.subtitle}</p>
                        </div>
                        <div style={{ background: 'rgba(19, 128, 134, 0.1)', color: '#42999e', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem' }}>🔍</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="d-flex justify-content-center gap-2 mt-4">
                {[1, 2, 3, 4, 5].map((dot, idx) => (
                  <div key={idx} style={{ width: idx === 0 ? '24px' : '6px', height: '6px', background: idx === 0 ? '#138086' : 'rgba(255,255,255,0.2)', borderRadius: '10px', transition: 'all 0.3s' }}></div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {activeImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActiveImg(null)}
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(3, 15, 16, 0.95)', backdropFilter: 'blur(12px)', zIndex: 10000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}
          >
            <button onClick={() => setActiveImg(null)} style={{ position: 'absolute', top: '30px', right: '40px', background: 'transparent', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer', zIndex: 10002 }}>✕</button>
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} transition={{ type: 'spring', damping: 25, stiffness: 300 }} onClick={(e) => e.stopPropagation()} style={{ position: 'relative', maxWidth: '85vw', maxHeight: '80vh', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.8)' }}>
              <img src={activeImg} alt="Certificate Enlarged View" style={{ maxWidth: '100%', maxHeight: '80vh', display: 'block', objectFit: 'contain', background: '#031011' }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;