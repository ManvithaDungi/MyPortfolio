import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./About.css";

function About() {
  const languages = [
    { name: "Python", icon: "python-icon.png", level: "90%" },
    { name: "C++", icon: "c-icon.png", level: "75%" },
    { name: "Java", icon: "java-icon.png", level: "80%" },
    { name: "JavaScript", icon: "js-icon.png", level: "85%" }
  ];

  const webDev = [
    { name: "React", icon: "react-icon.png", level: "80%" },
    { name: "MongoDB", icon: "mongodb-icon.png", level: "70%" }
  ];

  const tools = [
    { name: "Git & GitHub", icon: "github.png", level: "85%" },
  ];

  const softSkills = [
    { tag: "Problem Solving", desc: "I love solving complex problems and finding efficient solutions." },
    { tag: "Team Leadership", desc: "Experience in leading teams for hackathons and group projects." },
    { tag: "Time Management", desc: "Able to balance academics, projects, and personal learning." },
    { tag: "Communication", desc: "Good at explaining technical concepts to varied audiences." }
  ];

  const interests = ["Web Development", "Machine Learning", "Data Science", "Cloud Computing"];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="wrapper">
      {/* Navbar */}
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
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          About Me
        </motion.h1>

        {/* ✅ Education */}
        <section className="section-container">
          <motion.div className="timeline-section" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="section-title">Education</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-icon">
                  <img src={`${process.env.PUBLIC_URL}/images/amrita-logo.svg`} alt="Amrita" />
                </div>
                <div className="timeline-content">
                  <h3>B.Tech in Computer Science</h3>
                  <p>Amrita Vishwa Vidyapeetham | 2023 - 2027</p>
                  <p className="gpa">GPA: 7.66 / 10</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon">
                  <img src={`${process.env.PUBLIC_URL}/images/school-logo.png`} alt="School" />
                </div>
                <div className="timeline-content">
                  <h3>High School</h3>
                  <p>Timpany School | 2021 - 2023</p>
                  <p className="gpa">Percentage: 96% in CICSE</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ✅ Technical Skills */}
        <section className="section-container">
          <motion.div className="skills-section" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="section-title">Technical Skills</h2>

            <h3 className="skill-subtitle">Programming Languages</h3>
            {languages.map((s, i) => (
              <motion.div key={i} className="progress-bar" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                <span><img src={`${process.env.PUBLIC_URL}/images/${s.icon}`} alt={s.name} className="lang-icon" /> {s.name}</span>
                <div className="bar"><motion.div className="fill" initial={{ width: "0%" }} whileInView={{ width: s.level }} transition={{ duration: 1 }} /></div>
              </motion.div>
            ))}

            <h3 className="skill-subtitle">Web Development</h3>
            {webDev.map((s, i) => (
              <motion.div key={i} className="progress-bar" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                <span><img src={`${process.env.PUBLIC_URL}/images/${s.icon}`} alt={s.name} className="lang-icon" /> {s.name}</span>
                <div className="bar"><motion.div className="fill" initial={{ width: "0%" }} whileInView={{ width: s.level }} transition={{ duration: 1 }} /></div>
              </motion.div>
            ))}

            <h3 className="skill-subtitle">Tools</h3>
            {tools.map((s, i) => (
              <motion.div key={i} className="progress-bar" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                <span><img src={`${process.env.PUBLIC_URL}/images/${s.icon}`} alt={s.name} className="lang-icon" /> {s.name}</span>
                <div className="bar"><motion.div className="fill" initial={{ width: "0%" }} whileInView={{ width: s.level }} transition={{ duration: 1 }} /></div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ✅ Soft Skills */}
        <section className="section-container">
          <motion.div className="soft-skills" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="section-title">Soft Skills</h2>
            {softSkills.map((s, i) => (
              <motion.div key={i} className="soft-skill" whileHover={{ scale: 1.02 }}>
                <span className="chip">{s.tag}</span>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ✅ Workshops */}
        <section className="section-container">
          <motion.div className="timeline-section" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="section-title">Workshops & Seminars</h2>
            <div className="timeline">
              {["AI & ML in Real-World Applications - 2024", "Web Development Bootcamp - 2023", "Drone Simulations with PX4 & Gazebo - 2025"].map((w, i) => (
                <div key={i} className="timeline-item"><div className="timeline-icon">🎓</div><p>{w}</p></div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ✅ Interests */}
        <section className="section-container">
          <motion.div className="tags-section" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="section-title">Areas of Interest</h2>
            <div className="tag-chips">
              {interests.map((tag, i) => (
                <motion.span key={i} className="chip interest-chip" whileHover={{ scale: 1.1 }}>{tag}</motion.span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ✅ Certifications */}
        <section className="section-container">
          <motion.div className="gallery-section" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="section-title">Certifications</h2>
            <div className="gallery-grid">
              <div className="card"><h3>Java Programming</h3><a href={`${process.env.PUBLIC_URL}/certificates/certificate1.pdf`} target="_blank" rel="noreferrer" className="glow-link">View Certificate</a></div>
              <div className="card"><h3>Coursera ML (Andrew Ng)</h3><a href={`${process.env.PUBLIC_URL}/certificates/ml-coursera.pdf`} target="_blank" rel="noreferrer" className="glow-link">View Certificate</a></div>
            </div>
          </motion.div>
        </section>

        {/* ✅ Competitions */}
        <section className="section-container">
          <motion.div className="gallery-section" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="section-title">Competitions</h2>
            <div className="gallery-grid">
              <div className="card"><h3>Google Code Jam</h3><p>Participated - 2023</p></div>
              <div className="card"><h3>Smart India Hackathon</h3><p>Participated - 2023</p></div>
            </div>
          </motion.div>
        </section>
      </header>
    </div>
  );
}

export default About;
