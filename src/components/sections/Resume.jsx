import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import SectionLabel from '../ui/SectionLabel';
import useScrollReveal, { staggerContainer, fadeUp } from '../../hooks/useScrollReveal';

const Resume = () => {
   const [ref, isInView] = useScrollReveal();

   return (
      <section className="resume-section" id="resume" ref={ref}>
         <div className="wrapper">
            <motion.div
               variants={staggerContainer}
               initial="hidden"
               animate={isInView ? "visible" : "hidden"}
               className="resume-content align-center"
            >
               <motion.div variants={fadeUp}>
                  <SectionLabel>DOCUMENTATION</SectionLabel>
                  <h2 className="section-heading">Curriculum Vitae</h2>
               </motion.div>

               {/* Actual iframe embed */}
               <motion.div variants={fadeUp} className="resume-embed">
                  <iframe
                     src={`${process.env.PUBLIC_URL}/certificates/Resume.pdf`}
                     title="Manvitha Dungi Resume"
                     className="resume-iframe"
                  />
               </motion.div>

               <motion.div variants={fadeUp} className="resume-actions">
                  <Button variant="primary" size="lg" href={`${process.env.PUBLIC_URL}/certificates/Resume.pdf`} target="_blank">
                     DOWNLOAD PDF ↓
                  </Button>
               </motion.div>
            </motion.div>
         </div>
      </section>
   );
};

export default Resume;
