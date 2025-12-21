import React from "react";
import { motion } from "framer-motion";
import "./Resume.css";

function Resume() {
  return (
    <div className="wrapper">
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
