// src/pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="wrapper">
      <nav className="navbar">
  <Link to="/" className="logo">My Portfolio</Link>
  <div className="menu-items">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/contact">Contact</Link>
  </div>
</nav>


      <header className="hero">
        <h1>About Me</h1>

        {/* Education Section */}
        <section className="education-section">
          <h2 className="section-title">My Education</h2>
          <div className="education-card">
            <img src={`${process.env.PUBLIC_URL}/images/amrita-logo.svg`} alt="University Logo" className="edu-logo" />
            <div className="edu-details">
              <h3>Bachelor of Technology in Computer Science</h3>
              <p>Amrita Vishwa Vidyapeetham</p>
              <p>Expected Graduation: 2027</p>
              <p>GPA: 7.66/10</p>
              <ul>
                <li>Major in Computer Science and Engineering</li>
                <li>Coursework: Data Structures, Machine Learning, OS, Computational Thinking, Software Engineering, Database Management</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="achievements">
          <h2 className="section-title">Technical Skills</h2>
          <div className="achievement">
            <p><strong className="sub-heading">Programming Languages:</strong></p>
            <div className="stack-icons">
              <img src={`${process.env.PUBLIC_URL}/images/python-icon.png`} alt="Python" />
              <img src={`${process.env.PUBLIC_URL}/images/c-icon.png`} alt="C++" />
              <img src={`${process.env.PUBLIC_URL}/images/java-icon.png`} alt="Java" />
              <img src={`${process.env.PUBLIC_URL}/images/matlab-icon.png`} alt="Matlab" />
              <img src={`${process.env.PUBLIC_URL}/images/haskell-icon.png`} alt="Haskell" />
              <img src={`${process.env.PUBLIC_URL}/images/sql-icon.png`} alt="SQL" />
              <img src={`${process.env.PUBLIC_URL}/images/html-icon.png`} alt="HTML" />
              <img src={`${process.env.PUBLIC_URL}/images/react-icon.png`} alt="React" />
              <img src={`${process.env.PUBLIC_URL}/images/nodejs-icon.png`} alt="Node.js" />
              <img src={`${process.env.PUBLIC_URL}/images/mongodb-icon.png`} alt="MongoDB" />
              <img src={`${process.env.PUBLIC_URL}/images/js-icon.png`} alt="JavaScript" />
            </div>

            <p><strong className="sub-heading">Certifications:</strong></p>
            <ul>
              <li>
                <span>Programming in Java</span>
                <a href="/certificates/certificate1.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="glow-link"
                  style={{ marginLeft: '10px' }}>Click to view</a>
              </li>
              <li>
                <span>Coursera ML by Andrew Ng</span>
                <a href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="glow-link"
                  style={{ marginLeft: '10px' }}> Click to view</a>
              </li>
            </ul>
          </div>
        </section>

        {/* Areas of Interest */}
        <section className="achievements">
          <h2 className="section-title">Areas of Interest</h2>
          <div className="achievement">
            <p>Web Development, Machine Learning, Data Science, Cloud Computing</p>
            <p>Currently a learner and practitioner in all mentioned areas</p>
          </div>
        </section>

        {/* Technical Competitions */}
        <section className="achievements">
          <h2 className="section-title">Technical Competitions</h2>
          <div className="achievement">
            <p><strong>Google Code Jam</strong> - Participated (2023)</p>
            <p><strong>Smart India Hackathon</strong> - Participated (2023)</p>
            <p><strong>LeetCode Ranking:</strong> </p>
          </div>
        </section>
      </header>
    </div>
  );
}

export default About;
