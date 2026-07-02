import React from 'react';

const Certifications = () => {
  return (
    <section id="certifications" data-aos="fade-up">
      <div className="centered-box">
      {/* 🏆 Premium Horizontal Layout for Certifications & Achievements */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '16px', 
          marginBottom: '35px',
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
        <div className="achievement-list">
          <div className="achievement-item">
            <a href="https://appverse-technologies.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#138086', fontWeight: '600', textDecoration: 'none' }}>
              <h3>🎓 Recommendation and Internship at Appverse Technologies</h3>
            </a>
            <p>Completed a 2-month remote Frontend Developer internship at Appverse Technologies, highlighting expertise in React, responsive UI design, and modern web development practices.</p>
          </div>
          <div className="achievement-item">
            <h3>🏆 Letter Of Recommendation</h3>
            <p>Received a strong Letter of Recommendation from Appverse Technologies for outstanding performance as a Frontend Developer Intern.</p>
          </div>  
          <div className="achievement-item">
            <a href="https://innovista.pk/coworking-space-rawalpindi/" target="_blank" rel="noopener noreferrer" style={{ color: '#138086', fontWeight: '600', textDecoration: 'none' }}>
              <h3>🎓 Internship at Innovista Rawal (Digital Skills)</h3> 
            </a>
            <p>Completed a 1-month internship at Innovista Rawal, Avenue Mall DHA-1, Rawalpindi. Worked on UI/UX design, Canva branding, and digital content creation.</p>
          </div>
          <div className="achievement-item">
            <h3>🏆 Certificate of Participation</h3>
            <p>I recently attended the insightful <strong>Wiley Webinar</strong> "Understanding Open Access Publishing, and the Open Future" hosted by Wiley Research.</p>
          </div>  
          <div className="achievement-item">
            <h3>🏆 Certificate of Appreciation</h3>
            <p>Secured <strong>34<sup>th</sup> position</strong> in SSC Examination 2020 with <strong>1064/1100</strong> marks (Federal Board). Received a formal certificate of appreciation from FBISE.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;