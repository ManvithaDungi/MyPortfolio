import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Resume.css";

function Resume() {
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

      <div className="resume-container">
        <iframe
          src={`${process.env.PUBLIC_URL}/certificates/Resume.pdf`}
          title="Resume"
          className="resume-viewer"
        />
      </div>
    </div>
  );
}

export default Resume;
