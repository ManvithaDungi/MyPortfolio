/* Home.js */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

const MotionDiv = ({ children, ...props }) => (
  <motion.div {...props}>{children}</motion.div>
);

const SocialLinks = () => (
  <MotionDiv
    className="socials"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.3 }}>
    <a href="https://github.com/ManvithaDungi" target="_blank" rel="noreferrer">
      <img src={`${process.env.PUBLIC_URL}/images/github.png`} alt="GitHub" className="github-icon" />
    </a>
    <a href="https://www.linkedin.com/in/manvitha-dungi-8a8040211/" target="_blank" rel="noreferrer">
      <img src={`${process.env.PUBLIC_URL}/images/linkedin-logo.png`} alt="LinkedIn" />
    </a>
    <a href="mailto:manvitha3626@gmail.com">
      <img src={`${process.env.PUBLIC_URL}/images/gmail-logo.png`} alt="Email" />
    </a>
    <a href="https://leetcode.com/u/manvitha_dungi/" target="_blank" rel="noreferrer">
      <img src={`${process.env.PUBLIC_URL}/images/leetcode-icon.png`} alt="LeetCode" />
    </a>
  </MotionDiv>
);

const TechStackIcons = () => (
  <div className="stack-icons">
    {["react", "nodejs", "mongodb", "js", "python"].map((tech) => (
      <img
        key={tech}
        src={`${process.env.PUBLIC_URL}/images/${tech}-icon.png`}
        alt={tech.charAt(0).toUpperCase() + tech.slice(1)}
      />
    ))}
  </div>
);

function Home() {
  return (
    <div className="wrapper">
      <motion.nav
        className="navbar"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Link to="/" className="logo">My Portfolio</Link>
        <div className="menu-items">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </motion.nav>

      <header className="hero">
        <div className="hero-content">
          <MotionDiv
            className="left-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SocialLinks />
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}>
              Manvitha <br /> Dungi
            </motion.h1>
            <motion.h2 className="role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
              Full Stack Developer
            </motion.h2>
            <MotionDiv className="quote-box" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <div className="tagline-box">$git it done</div>
            </MotionDiv>
            <MotionDiv className="sub-heading" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <p>Invested in continuously learning and growing both personally and professionally.</p>
              <p>Always pushing beyond my comfort zone—because that is where growth happens.</p>
            </MotionDiv>
            <MotionDiv className="quote-box quote" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              “It always seems impossible until it's done.” - Nelson Mandela
            </MotionDiv>
           <Link to="/resume" className="btn">
  View Resume
  <span className="icon">
    <img src={`${process.env.PUBLIC_URL}/images/right-arrow.svg`} alt="Arrow" />
  </span>
</Link>

          </MotionDiv>

          <MotionDiv
            className="right-side"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.img
              src={`${process.env.PUBLIC_URL}/images/profile.jpeg`}
              alt="Profile"
              className="profile-pic"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <MotionDiv className="right-section achievements" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
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
                <TechStackIcons />
              </div>
            </MotionDiv>
          </MotionDiv>
        </div>
      </header>
    </div>
  );
}

export default Home;