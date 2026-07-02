import React, { useState, useEffect } from 'react';
import '../styles/header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = document.querySelectorAll('section, main > section');
      let currentSectionId = 'home';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 120) {
          currentSectionId = section.getAttribute('id') || 'home';
        }
      });
      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar-container-wrapper ${isScrolled ? 'floating-active' : ''}`}>
      <header className={`main-header-pill ${isScrolled ? 'scrolled' : ''}`}>
        {/* Clean Logo Alignment Wrapper - Only Name */}
        <div className="logo-section">
          <span className="logo-title">Ghulam Qadir</span>
        </div>

        {/* Mobile Hamburger Toggle Trigger */}
        <div 
          className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Modern Nav Menu Layout Links */}
        <nav className={`navbar-links-menu ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          <ul>
            <li>
              <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            </li>
            <li>
              <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>About Me</a>
            </li>
            <li>
              <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
            </li>
            <li>
              <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
            </li>
            <li>
              <a href="#certifications" className={activeSection === 'certifications' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Certifications</a>
            </li>
          <li>
  <a 
    href="#achievements" // 👈 Change this to #achievements
    className={activeSection === 'achievements' ? 'active' : ''} 
    onClick={() => setIsMobileMenuOpen(false)}
  >
    Achievements
  </a>
</li>
            <li>
              <a href="#internship" className={activeSection === 'internship' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Internship</a>
            </li>
            <li>
              <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;