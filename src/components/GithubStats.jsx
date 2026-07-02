import React from 'react';
import { motion } from 'framer-motion';

// Generates an array representing contribution squares with random activity weights (0 to 4)
const generateHeatmapData = () => {
  return Array.from({ length: 84 }, (_, i) => ({
    id: i,
    weight: Math.floor(Math.random() * 5) // 0 = no commits, 4 = high activity
  }));
};

const GithubStats = () => {
  const contributions = generateHeatmapData();

  return (
    <section id="github-stats" style={{ background: '#030f10', padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.02)' }}>
      <div className="container">
        <motion.h2 
          style={{ color: '#138086', fontWeight: 800, marginBottom: '40px' }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Open-Source Ledger
        </motion.h2>

        <div className="row g-4 align-items-center">
          {/* Left Column: Metric Cards */}
          <div className="col-lg-4">
            <div className="d-flex flex-column gap-3">
              <motion.div 
                className="centered-box" style={{ padding: '20px', margin: 0 }}
                whileHover={{ y: -4 }}
              >
                <h5 style={{ color: '#42999e', fontSize: '0.9rem', textTransform: 'uppercase' }}>Total Commits</h5>
                <h3 style={{ color: '#ffffff', fontSize: '2rem', fontWeight: 700, margin: 0 }}>1,240+</h3>
              </motion.div>
              <motion.div 
                className="centered-box" style={{ padding: '20px', margin: 0 }}
                whileHover={{ y: -4 }}
              >
                <h5 style={{ color: '#9d4edd', fontSize: '0.9rem', textTransform: 'uppercase' }}>PRs & Code Audits</h5>
                <h3 style={{ color: '#ffffff', fontSize: '2rem', fontWeight: 700, margin: 0 }}>42 Push Actions</h3>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Simulated Heatmap Matrix Grid */}
          <div className="col-lg-8">
            <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', padding: '24px', borderRadius: '14px' }}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span style={{ color: '#b0c4c5', fontSize: '0.9rem' }}>Contributions in the last 3 months</span>
                <span style={{ color: '#42999e', fontSize: '0.8rem' }}>@G-Qadir9988</span>
              </div>

              <div className="heatmap-grid-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(14, 1fr)', gap: '6px' }}>
                {contributions.map((box) => (
                  <motion.div
                    key={box.id}
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: box.id * 0.003 }}
                    className={`heatmap-square weight-${box.weight}`}
                    style={{
                      aspectRatio: '1',
                      borderRadius: '3px',
                      cursor: 'pointer'
                    }}
                    whileHover={{ scale: 1.3, zIndex: 10, boxShadow: '0 0 10px rgba(66, 153, 158, 0.5)' }}
                  />
                ))}
              </div>
              
              <div className="d-flex justify-content-end align-items-center gap-2 mt-3" style={{ fontSize: '0.8rem', color: '#b0c4c5' }}>
                <span>Less</span>
                <div style={{ width: '10px', height: '10px', background: '#101d1f', borderRadius: '2px' }}></div>
                <div style={{ width: '10px', height: '10px', background: '#0e3a3c', borderRadius: '2px' }}></div>
                <div style={{ width: '10px', height: '10px', background: '#135c60', borderRadius: '2px' }}></div>
                <div style={{ width: '10px', height: '10px', background: '#138086', borderRadius: '2px' }}></div>
                <div style={{ width: '10px', height: '10px', background: '#42999e', borderRadius: '2px' }}></div>
                <span>More</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GithubStats;