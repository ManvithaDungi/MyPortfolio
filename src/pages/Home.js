/* Home.js - Enhanced Version */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./Home.css";

const MotionDiv = ({ children, ...props }) => (
  <motion.div {...props}>{children}</motion.div>
);

const TypewriterText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currentIndex, text]);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setCurrentIndex(0);
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [delay]);

  return <span>{displayText}<span className="cursor">|</span></span>;
};

const FloatingParticles = () => (
  <div className="floating-particles">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="particle"
        initial={{ 
          x: Math.random() * window.innerWidth, 
          y: Math.random() * window.innerHeight,
          opacity: 0 
        }}
        animate={{ 
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    ))}
  </div>
);

const SocialLinks = () => {
  const socialData = [
    { href: "https://github.com/ManvithaDungi", icon: "github.png", alt: "GitHub", className: "github-icon" },
    { href: "https://www.linkedin.com/in/manvitha-dungi-8a8040211/", icon: "linkedin-logo.png", alt: "LinkedIn" },
    { href: "mailto:manvitha3626@gmail.com", icon: "gmail-logo.png", alt: "Email" },
    { href: "https://leetcode.com/u/manvitha_dungi/", icon: "leetcode-icon.png", alt: "LeetCode" }
  ];

  return (
    <MotionDiv
      className="socials"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {socialData.map((social, index) => (
        <motion.a
          key={social.alt}
          href={social.href}
          target={social.href.startsWith('mailto:') ? undefined : "_blank"}
          rel={social.href.startsWith('mailto:') ? undefined : "noreferrer"}
          className="social-link"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + index * 0.1 }}
        >
          <img 
            src={`${process.env.PUBLIC_URL}/images/${social.icon}`} 
            alt={social.alt} 
            className={social.className || "social-icon"}
          />
          <span className="social-tooltip">{social.alt}</span>
        </motion.a>
      ))}
    </MotionDiv>
  );
};

const TechStackIcons = () => {
  const techStack = [
    { name: "react", displayName: "React" },
    { name: "nodejs", displayName: "Node.js" },
    { name: "mongodb", displayName: "MongoDB" },
    { name: "js", displayName: "JavaScript" },
    { name: "python", displayName: "Python" }
  ];

  return (
    <div className="stack-icons">
      {techStack.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="tech-item"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.15, rotate: 10 }}
          transition={{ delay: index * 0.1 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/${tech.name}-icon.png`}
            alt={tech.displayName}
          />
          <span className="tech-tooltip">{tech.displayName}</span>
        </motion.div>
      ))}
    </div>
  );
};

const ScrollIndicator = () => (
  <motion.div
    className="scroll-indicator"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2 }}
  >
    <motion.div
      className="scroll-arrow"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      ↓
    </motion.div>
    <span>Scroll to explore</span>
  </motion.div>
);

const StatsCounter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);
  
  return <span>{count}{suffix}</span>;
};

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="wrapper">
      <FloatingParticles />
      
      {/* Cursor follower */}
      <motion.div
        className="cursor-follower"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      <motion.nav
        className="navbar"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Link to="/" className="logo">
          <span className="logo-bracket">{"<"}</span>
          Portfolio
          <span className="logo-bracket">{"/>"}</span>
        </Link>
        <div className="menu-items">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
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
            
            <motion.div className="name-container">
              <motion.h1 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 1, delay: 0.3 }}
              >
                <span className="first-name">Manvitha</span>
                <br />
                <span className="last-name">Dungi</span>
              </motion.h1>
            </motion.div>
            
            <motion.h2 
              className="role" 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1, delay: 0.5 }}
            >
              <TypewriterText text="Full Stack Developer" delay={1000} />
            </motion.h2>
            
            <MotionDiv 
              className="tagline-container"
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="tagline-box">
                <span className="terminal-prompt">$</span> git it done
              </div>
            </MotionDiv>
            
            <MotionDiv 
              className="sub-heading" 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p>Invested in continuously learning and growing both personally and professionally.</p>
              <p>Always pushing beyond my comfort zone—because that is where growth happens.</p>
            </MotionDiv>
            
            <MotionDiv 
              className="quote-box quote" 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="quote-mark">"</div>
              <span>It always seems impossible until it's done.</span>
              <div className="quote-author">- Nelson Mandela</div>
            </MotionDiv>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link to="/resume" className="btn">
                <span className="btn-text">View Resume</span>
                <span className="btn-icon">
                  <img src={`${process.env.PUBLIC_URL}/images/right-arrow.svg`} alt="Arrow" />
                </span>
                <div className="btn-glow"></div>
              </Link>
            </motion.div>
          </MotionDiv>

          <MotionDiv
            className="right-side"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="profile-container">
              <motion.img
                src={`${process.env.PUBLIC_URL}/images/profile.jpeg`}
                alt="Profile"
                className="profile-pic"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              />
              <div className="profile-ring"></div>
            </div>
            
            <MotionDiv 
              className="right-section achievements" 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div 
                className="achievement"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>Experience</h3>
                <p>Currently studying in <StatsCounter end={3} suffix=" year" />, BTech CSE</p>
              </motion.div>
              
              <motion.div 
                className="achievement"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>Education</h3>
                <p>Amrita Vishwa Vidyapeetham</p>
              </motion.div>
              
              <motion.div 
                className="achievement"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>Interested Domains</h3>
                <p>Full Stack Development</p>
                <p>ML and Data Sciences</p>
              </motion.div>
              
              <div className="tech-stack">
                <h3>Tech Stack</h3>
                <TechStackIcons />
              </div>
            </MotionDiv>
          </MotionDiv>
        </div>
        
        <ScrollIndicator />
      </header>
    </div>
  );
}

export default Home;