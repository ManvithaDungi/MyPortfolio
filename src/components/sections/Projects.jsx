import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';
import SectionLabel from '../ui/SectionLabel';
import useScrollReveal, { staggerContainer, fadeUp } from '../../hooks/useScrollReveal';

const Projects = () => {
   const [ref, isInView] = useScrollReveal();

   return (
      <section className="projects-section" id="projects" ref={ref}>
         <div className="watermark watermark-katakana" style={{ top: '0', right: '-15%', fontSize: '200px' }}>
            プロジェクト
         </div>

         <div className="wrapper">
            <motion.div
               variants={staggerContainer}
               initial="hidden"
               animate={isInView ? "visible" : "hidden"}
            >
               <motion.div variants={fadeUp} className="section-header">
                  <SectionLabel>SELECTED_WORKS</SectionLabel>
                  <h2 className="section-heading">Featured Projects</h2>
               </motion.div>

               <div className="projects-grid">
                  {projects.map((project, idx) => (
                     <motion.div variants={fadeUp} key={project.id}>
                        <ProjectCard project={project} index={idx} />
                     </motion.div>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default Projects;
