import React from 'react';
import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import Tag from '../ui/Tag';
import useScrollReveal, { staggerContainer, fadeUp } from '../../hooks/useScrollReveal';

const About = () => {
   const [ref, isInView] = useScrollReveal();

   return (
      <section className="about-section" ref={ref} id="about">
         <div className="watermark watermark-katakana" style={{ top: '10%', left: '-10%', fontSize: '200px' }}>
            エンジニア
         </div>

         <div className="wrapper">
            <motion.div
               className="about-grid"
               variants={staggerContainer}
               initial="hidden"
               animate={isInView ? "visible" : "hidden"}
            >
               <motion.div className="about-text" variants={fadeUp}>
                  <SectionLabel>ABOUT_ME</SectionLabel>
                  <h2 className="section-heading">Translating Ideas into Reality</h2>

                  <div className="about-bio">
                     <p>
                        I am a 3rd-year Computer Science engineering student at Amrita Vishwa Vidyapeetham with a passion for full-stack development. My journey involves everything from complex algorithms to interactive user interfaces.
                     </p>
                     <p>
                        Whether I'm debugging C++ kernels or crafting a dynamic React application, my ultimate goal is to build software that performs flawlessly and looks exceptional.
                     </p>
                  </div>

                  <div className="about-stats">
                     <Tag>3rd Year</Tag>
                     <Tag>CSE</Tag>
                     <Tag>Full Stack</Tag>
                     <Tag className="accent-tag">Open to work</Tag>
                  </div>
               </motion.div>

               <motion.div className="about-image-wrapper" variants={fadeUp}>
                  <div className="about-image-container">
                     {/* Replace with actual image path if needed, or keeping it dark abstract for vibe */}
                     <div className="about-image-overlay"></div>
                     <img src={`${process.env.PUBLIC_URL}/images/profile.jpeg`} alt="Manvitha Dungi" className="about-image" style={{ objectPosition: 'top' }} />
                  </div>
               </motion.div>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div
               className="experience-timeline"
               variants={staggerContainer}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-100px" }}
               style={{ marginTop: '8rem' }}
            >
               <motion.div variants={fadeUp} style={{ marginBottom: '3rem', textAlign: 'center' }}>
                  <SectionLabel>CAREER_LOG</SectionLabel>
                  <h3 style={{ fontSize: '2rem', margin: 0 }}>Experience & Activity</h3>
               </motion.div>

               <div className="timeline-container">
                  <motion.div className="timeline-item" variants={fadeUp}>
                     <div className="timeline-dot"></div>
                     <div className="timeline-content">
                        <span className="timeline-date">May 2025 (Upcoming)</span>
                        <h4 className="timeline-title">Summer Research Intern</h4>
                        <span className="timeline-company">IDEAS, Indian Statistical Institute (ISI) Kolkata</span>
                        <p className="timeline-desc">Secured a competitive research position focusing on data analytics and intelligent systems. Will be constructing complex simulations and advancing ML-based predictive modeling tools.</p>
                     </div>
                  </motion.div>

                  <motion.div className="timeline-item" variants={fadeUp}>
                     <div className="timeline-dot"></div>
                     <div className="timeline-content">
                        <span className="timeline-date">Jan 2024 - Present</span>
                        <h4 className="timeline-title">Open Source Contributor & Developer</h4>
                        <span className="timeline-company">Self-Directed</span>
                        <p className="timeline-desc">Currently building advanced full-stack SaaS architectures like the AI Symptom Analyser, implementing micro-interactions, optimizing Firebase setups, and architecting monolithic MERN social apps.</p>
                     </div>
                  </motion.div>

                  <motion.div className="timeline-item" variants={fadeUp}>
                     <div className="timeline-dot"></div>
                     <div className="timeline-content">
                        <span className="timeline-date">2022 - Present</span>
                        <h4 className="timeline-title">B.Tech Computer Science Engineering</h4>
                        <span className="timeline-company">Amrita Vishwa Vidyapeetham</span>
                        <p className="timeline-desc">Maintaining excellent academic standing while engaging in hackathons and exploring core CS concepts including Database Management, OS structures, and scalable architecture design.</p>
                     </div>
                  </motion.div>
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default About;
