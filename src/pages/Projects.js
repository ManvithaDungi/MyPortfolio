import React, { useState } from "react";
import "./Projects.css";

/* ---------- Reusable Project Card ---------- */
const ProjectCard = ({ image, title, stack, overview, features, tech, repo }) => {
  const [tab, setTab] = useState("overview");

  return (
    <div className="project-card">
      <img className="project-image" src={image} alt={title} />

      <div className="project-content">
        <h3>{title}</h3>
        <p className="project-stack">{stack}</p>

        <div className="project-tabs">
          <button className={tab === "overview" ? "active" : ""} onClick={() => setTab("overview")}>
            Overview
          </button>
          <button className={tab === "features" ? "active" : ""} onClick={() => setTab("features")}>
            Features
          </button>
          <button className={tab === "tech" ? "active" : ""} onClick={() => setTab("tech")}>
            Tech
          </button>
        </div>

        <div className="project-tab-content">
          {tab === "overview" && <p>{overview}</p>}

          {tab === "features" && (
            <ul>
              {features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          )}

          {tab === "tech" && (
            <ul>
              {tech.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          )}
        </div>

        <a className="project-link" href={repo} target="_blank" rel="noreferrer">
          View on GitHub →
        </a>
      </div>
    </div>
  );
};

/* ---------- Main Page ---------- */
function Projects() {
  return (
    <div className="wrapper">

      {/* ===== PROJECTS ===== */}
      <section className="section">
        <h1>Projects</h1>

        <div className="projects-grid">
          <ProjectCard
            image={`${process.env.PUBLIC_URL}/images/social-media.jpg`}
            title="Social Timeline App"
            stack="MERN · JWT · Socket.IO"
            overview="A social-media platform where users connect based on shared events."
            features={[
              "User authentication & authorization",
              "Real-time messaging",
              "Image uploads"
            ]}
            tech={[
              "JWT authentication",
              "Socket.IO",
              "Cloudinary"
            ]}
            repo="https://github.com/ManvithaDungi/Zynk"
          />

          <ProjectCard
            image={`${process.env.PUBLIC_URL}/images/travel.jpg`}
            title="Travel Recommendation Site"
            stack="Node.js · JavaScript · Leaflet"
            overview="Map-based travel recommendation platform driven by user preferences."
            features={[
              "Interactive map UI",
              "Location-based filtering",
              "Responsive design"
            ]}
            tech={[
              "Leaflet.js",
              "Client-side state handling",
              "REST-style architecture"
            ]}
            repo="https://github.com/ManvithaDungi/Travel-Recommendation-Site"
          />

          <ProjectCard
            image={`${process.env.PUBLIC_URL}/images/drone.png`}
            title="Drone Flight Controller Simulation"
            stack="PX4 · Gazebo · Python"
            overview="Simulation of autonomous drone flight behavior in controlled environments."
            features={[
              "Autonomous waypoint navigation",
              "Physics-based simulation",
              "Scripted flight control"
            ]}
            tech={[
              "PX4 autopilot",
              "Gazebo simulator",
              "MAVSDK-Python"
            ]}
            repo="https://github.com/ManvithaDungi/Python-Drone-Simulation"
          />
        </div>
      </section>

      {/* ===== CURRENTLY BUILDING ===== */}
      <section className="section">
        <h2>Currently Building</h2>

        <div className="building-card">
          <span className="badge">In Progress</span>
          <h3>Zynk – Social Event Platform</h3>
          <p>
            Building a scalable social event platform with real-time chat and role-based access.
          </p>

          <ul>
            <li>JWT-based authentication</li>
            <li>Socket.IO real-time updates</li>
            <li>Modular backend architecture</li>
          </ul>

          <p className="project-stack">React · Node.js · MongoDB · Socket.IO</p>
        </div>
      </section>

      {/* ===== INTERNSHIPS ===== */}
      <section className="section">
        <h2>Internships</h2>

        <div className="internship-card">
          <h3>Summer Research Intern</h3>
          <p><strong>Institution:</strong> IDEAS, ISI Kolkata</p>
          <p><strong>Duration:</strong> May 2025 – July 2025</p>
          <p><strong>Focus:</strong> Data analytics, simulations, intelligent systems</p>

          <a
            className="project-link"
            href={`${process.env.PUBLIC_URL}/certificates/certificate2.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            View Certificate →
          </a>
        </div>
      </section>

    </div>
  );
}

export default Projects;
