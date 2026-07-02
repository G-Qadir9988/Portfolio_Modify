import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/portfolioData';

const CATEGORIES = [
  "All", "Cloud & DevOps", "Cybersecurity", "Mobile Applications", 
  "Artificial Intelligence", "Database", "CPP/C Programming", 
  "Operating System", "Computer Network", "Web Development"
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" style={{ background: '#051618', padding: '100px 0', position: 'relative', zIndex: 5 }}>
      <div className="container">
        
        {/* Header Content */}
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-5 gap-3">
          
          {/* 🏆 Horizontal Premium Heading Layout Style applied to Engineering Ledger */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '16px', 
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
              ⚙️
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
              <span style={{ color: '#ffffff' }}>ENGINEERING</span>
              <span style={{ color: '#138086' }}>LEDGER</span>
            </h2>
          </div>

          <div className="search-input-wrapper">
            <input 
              type="text" 
              placeholder="Search stack (e.g. Terraform, React)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="project-search-field"
            />
          </div>
        </div>

        {/* Categories Tab Row */}
        <div className="project-filter-tabs d-flex flex-wrap gap-2 mb-5">
          {CATEGORIES.map((category, idx) => (
            <button
              key={idx}
              className={`filter-tab-btn ${activeCategory === category ? 'tab-active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="row g-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <div className="col-md-6 col-lg-4" key={project.id}>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="card h-100 shadow-sm structural-tilt-card"
                >
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <div className="mb-2">
                        <span className="card-category-badge">{project.category}</span>
                      </div>
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.description}</p>
                      
                      <div className="project-tags">
                        {project.tags.map((tag, idx) => (
                          <span className="skill-badge" key={idx}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-2 d-flex flex-wrap gap-2">
                      {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info flex-grow-1 text-center">Source</a>}
                      {project.siteUrl && <a href={project.siteUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info flex-grow-1 text-center">Live Site</a>}
                      {project.videoUrl && <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info flex-grow-1 text-center" style={{ borderColor: '#9d4edd', color: '#9d4edd' }}>Watch Demo</a>}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Projects;