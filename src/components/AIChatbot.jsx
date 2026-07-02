import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Local Predefined Response Matrix
const BOT_KNOWLEDGE = {
  skills: "Ghulam specializes in full-stack web engineering (React.js, JavaScript, MERN), Mobile App Dev (Java/Flutter), Cybersecurity audits, and Cloud DevOps automation using Terraform.",
  internship: "He completed a 2-month remote Frontend Developer internship at Appverse Technologies and a 1-month UI/UX design internship at Innovista Rawal.",
  education: "Ghulam is currently pursuing his BS in Information Technology at Air University, Islamabad (Graduating class of 2027).",
  projects: "His premier implementations include 'AnonTrust' (a secure AI whistleblowing system), a Cricket Trajectory LBW simulator using DAA concepts, and a full AWS/Terraform CI/CD deployment pipeline.",
  contact: "You can reach Ghulam directly through the secure Contact section at the bottom of this page or connect with him via LinkedIn!",
  fallback: "I'm currently configured to answer questions regarding Ghulam's tech stack, academic milestones at Air University, projects, or professional internship experiences. Try selecting one of the quick options!"
};

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi! I'm Ghulam's portfolio virtual assistant. Ask me anything about his technical expertise!" }
  ]);
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  const handleQuery = (queryType, userText) => {
    if (isThinking) return;

    // 1. Add User Message immediately
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setIsThinking(true);

    // 2. Trigger Animated "AI is thinking..." Delay Simulation
    setTimeout(() => {
      setIsThinking(false);
      const replyText = BOT_KNOWLEDGE[queryType] || BOT_KNOWLEDGE.fallback;
      setMessages(prev => [...prev, { sender: 'bot', text: replyText }]);
    }, 1300);
  };

  return (
    // Responsive outer anchoring constraints
    <div style={{ position: 'fixed', bottom: '16px', right: '16px', zIndex: 9999 }}>
      
      {/* Floating Launcher Button */}
      <motion.button 
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#138086', border: 'none', color: '#fff', fontSize: '1.4rem', boxShadow: '0 8px 24px rgba(19, 128, 134, 0.4)', cursor: 'pointer' }}
      >
        {isOpen ? '✕' : '🤖'}
      </motion.button>

      {/* Floating Chat Panel Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            style={{ 
              position: 'absolute', 
              bottom: '70px', 
              right: '0', 
              width: '90vw',            // 👈 RESPONSIVE WIDTH: Sets a safe relative fallback layout size
              maxWidth: '360px',        // 👈 LAPTOP SCALE CAP: Locks grid sizing on wider screen sizes
              height: '460px', 
              maxHeight: '70vh',        // 👈 RESPONSIVE HEIGHT: Keeps layout cleanly inside tiny screen limits
              background: 'rgba(3, 15, 16, 0.97)', 
              border: '1px solid rgba(255,255,255,0.08)', 
              borderRadius: '16px', 
              backdropFilter: 'blur(20px)', 
              boxShadow: '0 12px 40px rgba(0,0,0,0.6)', 
              display: 'flex', 
              flexDirection: 'column', 
              overflow: 'hidden' 
            }}
          >
            {/* Header */}
            <div style={{ background: 'rgba(19, 128, 134, 0.2)', padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <h5 style={{ margin: 0, fontSize: '0.95rem', color: '#ffffff', fontWeight: 600 }}>Core Ledger AI Assistant</h5>
              <span style={{ fontSize: '0.7rem', color: '#42999e' }}>● Frontend Simulation Engine Active</span>
            </div>

            {/* Conversation Messages Box */}
            <div style={{ flex: 1, padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {messages.map((msg, i) => (
                <div key={i} style={{ alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start', maxWidth: '85%', padding: '10px 14px', borderRadius: '12px', background: msg.sender === 'user' ? '#138086' : 'rgba(255,255,255,0.04)', color: '#ffffff', fontSize: '0.88rem', lineHeight: '1.4' }}>
                  {msg.text}
                </div>
              ))}

              {/* ⏳ Animated Bouncing "Thinking..." Indicator Bubble */}
              {isThinking && (
                <div style={{ alignSelf: 'flex-start', padding: '12px 16px', borderRadius: '12px', background: 'rgba(255,255,255,0.04)', display: 'flex', gap: '4px', alignItems: 'center' }}>
                  {[0, 1, 2].map((dot) => (
                    <motion.div 
                      key={dot}
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: dot * 0.15, ease: "easeInOut" }}
                      style={{ width: '6px', height: '6px', background: '#42999e', borderRadius: '50%' }}
                    />
                  ))}
                </div>
              )}
              <div ref={scrollRef} />
            </div>

            {/* Fixed Predefined Option Suggestions Matrix Row */}
            <div style={{ padding: '10px 12px', background: 'rgba(0,0,0,0.3)', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              <button onClick={() => handleQuery('skills', "What is your stack?")} style={{ background: 'rgba(66, 153, 158, 0.08)', border: '1px solid rgba(66, 153, 158, 0.2)', color: '#42999e', padding: '6px 12px', borderRadius: '20px', fontSize: '0.72rem', cursor: 'pointer', transition: 'all 0.2s' }}>Tech Stack?</button>
              <button onClick={() => handleQuery('internship', "Tell me about your experience.")} style={{ background: 'rgba(66, 153, 158, 0.08)', border: '1px solid rgba(66, 153, 158, 0.2)', color: '#42999e', padding: '6px 12px', borderRadius: '20px', fontSize: '0.72rem', cursor: 'pointer', transition: 'all 0.2s' }}>Internships?</button>
              <button onClick={() => handleQuery('projects', "What did you build?")} style={{ background: 'rgba(66, 153, 158, 0.08)', border: '1px solid rgba(66, 153, 158, 0.2)', color: '#42999e', padding: '6px 12px', borderRadius: '20px', fontSize: '0.72rem', cursor: 'pointer', transition: 'all 0.2s' }}>Key Projects?</button>
              <button onClick={() => handleQuery('education', "Where do you study?")} style={{ background: 'rgba(66, 153, 158, 0.08)', border: '1px solid rgba(66, 153, 158, 0.2)', color: '#42999e', padding: '6px 12px', borderRadius: '20px', fontSize: '0.72rem', cursor: 'pointer', transition: 'all 0.2s' }}>Education?</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIChatbot;