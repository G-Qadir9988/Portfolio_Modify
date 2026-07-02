import React from 'react';

const About = () => {
  return (
    <section id="about" data-aos="fade-up">
      <div className="centered-box">
        <h2>About Me</h2>
        <p>BSIT student at Air University Islamabad (2023–2027) passionate about web development, cybersecurity, and UI/UX design.</p>
        <ul>
          <li>Developed 10+ academic projects, including full-stack web apps and ethical hacking demos.</li>
          <li>Skilled in Mobile Application Development in both Java & Dart MERN stack, MySQL, MongoDB, C++, and tools like Kali Linux and Figma.</li>
          <li>Completed a 2-month remote Frontend Developer internship at Appverse Technologies</li>
          <li>Completed a 1-month internship at Innovista Rawal, focusing on digital design and branding.</li>
          <li>Enthusiastic about learning cutting-edge technologies and building innovative solutions.</li>
        </ul>
        <a href="#projects" className="btn btn-outline-info">View My Work</a>
      </div>
    </section>
  );
};

export default About;