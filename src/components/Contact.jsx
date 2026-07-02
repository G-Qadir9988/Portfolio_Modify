import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ email: '', name: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Asynchronous Submission Engine for Formspree
    const response = await fetch("https://formspree.io/f/mzzgqvdp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert("Thank you! Your message or feedback has been sent successfully.");
      setFormData({ email: '', name: '', message: '' });
    } else {
      alert("Oops! There was a problem submitting your form. Please try again.");
    }
  };

  return (
    <section id="contact" style={{ background: '#030f10', padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.02)' }}>
      <div className="container" style={{ maxWidth: '1140px' }}>
        
        {/* Main Split Column Card Layout */}
        <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '24px', padding: '50px 40px', overflow: 'hidden' }}>
          <div className="row g-5">
            
            {/* ==========================================================================
               ⬅️ LEFT COLUMN: META CARDS, CUSTOM FLATICON GRID & FORMSPREE FORM
               ========================================================================== */}
            <div className="col-lg-6">
              <span style={{ color: '#138086', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '8px' }}>LET'S CONNECT •</span>
              <h2 style={{ color: '#ffffff', fontWeight: 800, fontSize: '2.5rem', marginBottom: '20px' }}>
                Contact & <span style={{ color: '#42999e' }}>Feedback</span> ✨
              </h2>
              <p style={{ color: '#b0c4c5', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '500px', marginBottom: '35px' }}>
                I'm always open to discussing new opportunities, creative projects, or just having a friendly chat.
              </p>

              {/* Email & Response Metadata Grid Block */}
              <div style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '14px', padding: '16px 20px', display: 'flex', gap: '30px', flexWrap: 'wrap', marginBottom: '35px' }}>
                <div className="d-flex align-items-center gap-3">
                  <div style={{ background: 'rgba(19, 128, 134, 0.1)', width: '42px', height: '42px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#138086' }}>✉️</div>
                  <div>
                    <span style={{ color: '#b0c4c5', fontSize: '0.75rem', display: 'block' }}>Email</span>
                    <a href="mailto:gqitspecialist@email.com" style={{ color: '#42999e', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none' }}>gqitspecialist@email.com</a>
                  </div>
                </div>
                <div style={{ width: '1px', background: 'rgba(255,255,255,0.05)' }} className="d-none d-sm-block"></div>
                <div className="d-flex align-items-center gap-3">
                  <div style={{ background: 'rgba(66, 153, 158, 0.1)', width: '42px', height: '42px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#42999e' }}>🕒</div>
                  <div>
                    <span style={{ color: '#b0c4c5', fontSize: '0.75rem', display: 'block' }}>Response Time</span>
                    <span style={{ color: '#138086', fontSize: '0.9rem', fontWeight: 600 }}>Within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Pixel-Perfect Fixed Flaticons Social Matrix Row Layout */}
              <h5 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 600, marginBottom: '20px' }}>Let's connect</h5>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'flex-start', width: '100%', marginBottom: '45px' }}>
                {[
                  { name: 'GitHub', url: 'https://github.com/G-Qadir9988', filename: 'github.png' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ghulam-qadir-07a982365', filename: 'linkedin.png' },
                  { name: 'YouTube', url: 'https://www.youtube.com/channel/UCMzACb-lwCjc7GGw6vsYUdQ', filename: 'youtube.png' },
                  { name: 'Instagram', url: 'https://www.instagram.com/coreit.tech', filename: 'instagram.png' },
                  { name: 'Facebook', url: 'https://www.facebook.com/share/1AmgLDUnc9/', filename: 'facebook.png' }
                ].map((soc, sIdx) => (
                  <motion.a 
                    key={sIdx} 
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={soc.name}
                    whileHover={{ y: -4, backgroundColor: 'rgba(19, 128, 134, 0.08)', borderColor: 'rgba(66, 153, 158, 0.3)' }}
                    style={{ 
                      background: 'rgba(0, 0, 0, 0.2)', 
                      border: '1px solid rgba(255, 255, 255, 0.05)', 
                      borderRadius: '14px', 
                      width: '64px', 
                      height: '64px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      transition: 'all 0.2s ease',
                      flexShrink: 0,
                      padding: '0',
                      boxSizing: 'border-box'
                    }}
                  >
                    <img 
                      src={`/images/social/${soc.filename}`} 
                      alt={soc.name} 
                      style={{ 
                        width: '32px', 
                        height: '32px', 
                        objectFit: 'contain',
                        display: 'block',
                        margin: '0 auto'
                      }} 
                    />
                  </motion.a>
                ))}
              </div>

              {/* Form Input Matrix Area */}
              <h5 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 600, marginBottom: '20px' }}>
                Send Me a Message <span style={{ color: '#138086' }}>•</span>
              </h5>
              
              <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '16px', top: '14px', zIndex: 5, fontSize: '1rem' }}>✉️</span>
                      <input 
                        type="email" 
                        required 
                        name="email"
                        placeholder="Your Email"
                        value={formData.email} 
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        style={{
                          width: '100%', height: '48px', background: 'rgba(0, 0, 0, 0.4)',
                          border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px',
                          color: '#ffffff', fontSize: '0.9rem', paddingLeft: '45px', paddingRight: '16px', outline: 'none'
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '16px', top: '14px', zIndex: 5, fontSize: '1rem' }}>👤</span>
                      <input 
                        type="text" 
                        name="name"
                        placeholder="Your Name (Optional)"
                        value={formData.name} 
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        style={{
                          width: '100%', height: '48px', background: 'rgba(0, 0, 0, 0.4)',
                          border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px',
                          color: '#ffffff', fontSize: '0.9rem', paddingLeft: '45px', paddingRight: '16px', outline: 'none'
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '16px', top: '14px', zIndex: 5, fontSize: '1rem' }}>💬</span>
                  <textarea 
                    rows="4" 
                    required 
                    name="message"
                    placeholder="Write your message or feedback here..."
                    value={formData.message} 
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    style={{
                      width: '100%', minHeight: '130px', background: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px',
                      color: '#ffffff', fontSize: '0.9rem', paddingLeft: '45px', paddingRight: '16px',
                      paddingTop: '14px', outline: 'none', resize: 'none'
                    }}
                  ></textarea>
                </div>

                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                  style={{ background: 'linear-gradient(90deg, #138086 0%, #42999e 100%)', border: 'none', color: '#ffffff', padding: '14px', borderRadius: '10px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: '100%', cursor: 'pointer', fontSize: '0.95rem', boxShadow: '0 4px 15px rgba(19, 128, 134, 0.2)' }}
                >
                  🚀 Send Feedback <span>→</span>
                </motion.button>
              </form>
            </div>

            {/* ==========================================================================
               ➡️ RIGHT COLUMN: VECTOR PLANE GRAPHIC & PROFESSIONAL SERVICE TILES
               ========================================================================== */}
            <div className="col-lg-6 d-flex flex-column justify-content-between">
              
              {/* Airplane Vector Orbit Arena */}
              <div style={{ width: '100%', height: '280px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'absolute', width: '240px', height: '240px', borderRadius: '50%', border: '1px solid rgba(66, 153, 158, 0.15)', background: 'radial-gradient(circle, rgba(19,128,134,0.02) 0%, transparent 70%)' }}></div>
                <motion.div 
                  animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{ fontSize: '4.5rem', transform: 'rotate(-15deg)', zIndex: 2, filter: 'drop-shadow(0 0 15px rgba(19, 128, 134, 0.4))' }}
                >
                  ✈️
                </motion.div>
                <div style={{ position: 'absolute', top: '20px', right: '40px', color: '#42999e', fontSize: '0.8rem', opacity: 0.5 }}>✦</div>
                <div style={{ position: 'absolute', bottom: '40px', left: '60px', color: '#138086', fontSize: '1rem', opacity: 0.3 }}>✦</div>
              </div>

              {/* Informational Feature Metric Rows */}
              <div className="d-flex flex-column gap-3">
                {[
                  { icon: '🚀', title: "Let's Build Something Amazing", desc: "Have an idea or project in mind? Let's bring it to life together." },
                  { icon: '💬', title: "Quick & Friendly Support", desc: "I try to respond to all messages as quickly as possible." },
                  { icon: '⚡', title: "Open to Opportunities", desc: "Freelance, collaborations, or full-time roles — I'm open to great opportunities." }
                ].map((feat, fIdx) => (
                  <div key={fIdx} style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)', padding: '16px 20px', borderRadius: '14px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div style={{ background: 'rgba(19, 128, 134, 0.1)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#42999e', flexShrink: 0, fontSize: '1.1rem' }}>
                      {feat.icon}
                    </div>
                    <div>
                      <h6 style={{ color: '#ffffff', margin: '0 0 3px 0', fontSize: '0.95rem', fontWeight: 600 }}>{feat.title}</h6>
                      <p style={{ color: '#b0c4c5', margin: 0, fontSize: '0.85rem', lineHeight: '1.4' }}>{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;