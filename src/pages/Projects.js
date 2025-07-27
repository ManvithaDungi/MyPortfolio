/* Projects.js */
import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

function Projects() {
  return (
    <div className="wrapper">
      {/* Navbar */}
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
        <h1>Projects</h1>

        {/* Projects Section */}
        <section className="section">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-image">
              <img
                src={`${process.env.PUBLIC_URL}/images/social-media.jpg`}
                alt="Social Timeline App"
              />
            </div>
            <div className="project-content">
              <h3>Social Timeline App</h3>
              <p><strong>Stack:</strong> MERN (MongoDB, Express, React, Node.js)</p>
              <p><strong>Features:</strong> User authentication, image uploads, real-time collaboration</p>
              <p>
                <strong>Repository:</strong>
                <a
                  href="https://github.com/ManvithaDungi/Social-Timeline-App"
                  className="glow-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click to View
                </a>
              </p>
              <div className="project-tags">
                <span className="project-tag">MERN</span>
                <span className="project-tag">Socket.IO</span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-image">
              <img
                src={`${process.env.PUBLIC_URL}/images/travel.jpg`}
                alt="Travel Recommendation Site"
              />
            </div>
            <div className="project-content">
              <h3>Travel Recommendation Site – Enchanted Getaways</h3>
              <p><strong>Tools:</strong> Node.js, HTML, CSS, JavaScript</p>
              <p><strong>Description:</strong> Interactive map-based interface recommending locations based on user selections</p>
              <p>
                <strong>Repository:</strong>
                <a
                  href="https://github.com/ManvithaDungi/Travel-Recommendation-Site"
                  className="glow-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click to View
                </a>
              </p>
              <div className="project-tags">
                <span className="project-tag">Web App</span>
                <span className="project-tag">UI/UX</span>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-image">
              <img
                src={`${process.env.PUBLIC_URL}/images/drone.png`}
                alt="Drone Flight Controller Simulation"
              />
            </div>
            <div className="project-content">
              <h3>Drone Flight Controller Simulation</h3>
              <p><strong>Tools:</strong> PX4, Gazebo, MAVSDK-Python</p>
              <p><strong>Description:</strong> Simulated autonomous drone flights and developed control scripts in Python</p>
              <p>
                <strong>Repository:</strong>
                <a
                  href="https://github.com/ManvithaDungi/Python-Drone-Simulation"
                  className="glow-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click to View
                </a>
              </p>
              <div className="project-tags">
                <span className="project-tag">PX4</span>
                <span className="project-tag">Gazebo</span>
                <span className="project-tag">Simulation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Internships Section */}
        <section className="section">
          <h2 className="section-title">Internships</h2>
          <div className="internship-card">
            <h3>Summer Research Intern</h3>
            <p><strong>Institution:</strong> IDEAS - Institute of Data Engineering, Analytics and Science Foundation, ISI Kolkata</p>
            <p><strong>Duration:</strong> May 2025 - July 2025</p>
            <p><strong>Focus:</strong> Data analytics, simulation environments, and intelligent systems</p>
            <p>
              <strong>Certification:</strong>
              <a
                href={`${process.env.PUBLIC_URL}/certificates/certificate2.pdf`}
                className="glow-link"
                target="_blank"
                rel="noreferrer" 

              >
                Click to View
              </a>
            </p>
          </div>
        </section>
      </header>
    </div>
  );
}

export default Projects;
