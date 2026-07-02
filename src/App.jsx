import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

// System Layout Modules
import Header from './components/Header';
import Home from './components/Home';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import About from './components/About'; // 👈 ADD THIS IMPORT LINE
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Certifications from './components/Certifications';
import Gallery from './components/Gallery';
import Internship from './components/Internship';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import AIChatbot from './components/AIChatbot'; // 👈 1. Import the Assistant Component

function App() {
  return (
    <div style={{ backgroundColor: '#030f10', minHeight: '100vh', color: '#ffffff', position: 'relative' }}>
      <CursorGlow />
      
      {/* 👈 2. Mount the assistant globally inside the return layout tree */}
      <AIChatbot />
      
      <Header />
      <Home />
      
      <Timeline />
      <Projects />
      <Achievements />
      <Skills />
      <Testimonials />
      <Certifications />
      <Gallery />
      <Internship />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;