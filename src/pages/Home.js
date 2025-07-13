// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="wrapper">

<nav>
  <Link to="/" className="logo">My Portfolio</Link>
  <div className="menu-items">
    <Link to="/about">About</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/contact">Contact</Link>
  </div>
</nav>

      <header className="hero">
        <div className="hero-content">
          <div className="left-section">
            <div className="socials">
              <a href="https://github.com/ManvithaDungi">
                <img src="/images/github.png" alt="GitHub" className="github-icon" />
              </a>
              <a href="https://www.linkedin.com/in/manvitha-dungi-8a8040211/">
                <img src="/images/linkedin-logo.png" alt="LinkedIn" />
              </a>
              <a href="mailto:manvitha3626@gmail.com">
                <img src="/images/gmail-logo.png" alt="Email" />
              </a>
              <a href="https://leetcode.com/u/manvitha_dungi/">
                <img src="/images/leetcode-icon.png" alt="LeetCode" />
              </a>
            </div>

            <h1>Manvitha Dungi</h1>
            <h2 className="role">Full Stack Developer</h2>

            <div className="quote-box">
              <div className="tagline-box">$git it done</div>
            </div>

            <div className="sub-heading">
              <p>Invested in continuously learning and growing both personally and professionally.</p>
              <p>Always pushing beyond my comfort zone—because that is where growth happens.</p>
            </div>

            <div className="quote-box quote">
              “It always seems impossible until it's done.” - Nelson Mandela
            </div>

            <a href="#" className="btn">
              Download Resume
              <span className="icon"><img src="/images/right-arrow.svg" alt="Arrow" /></span>
            </a>
          </div>

          <div className="right-side">
            <div className="profile-container">
              <img src="/images/profile.jpeg" alt="Profile" className="profile-pic" />
            </div>

            <div className="right-section achievements">
              <div className="achievement">
                <h3>Experience</h3>
                <p>Currently studying in 3rd year, BTech CSE</p>
              </div>
              <div className="achievement">
                <h3>Education</h3>
                <p>Amrita Vishwa Vidyapeetham</p>
              </div>
              <div className="achievement">
                <h3>Interested Domains</h3>
                <p>Full Stack Development</p>
                <p>ML and Data Sciences</p>
              </div>
              <div className="tech-stack">
                <h3>Tech Stack</h3>
                <div className="stack-icons">
                  <img src="/images/react-icon.png" alt="React" />
                  <img src="/images/nodejs-icon.png" alt="Node.js" />
                  <img src="/images/mongodb-icon.png" alt="MongoDB" />
                  <img src="/images/js-icon.png" alt="JavaScript" />
                  <img src="/images/python-icon.png" alt="Python" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
