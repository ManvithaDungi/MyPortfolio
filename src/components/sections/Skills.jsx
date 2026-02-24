import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import SectionLabel from '../ui/SectionLabel';
import Tag from '../ui/Tag';
import useScrollReveal, { staggerContainer, fadeUp } from '../../hooks/useScrollReveal';

const Skills = () => {
   const [ref, isInView] = useScrollReveal();

   return (
      <section className="skills-section" ref={ref}>
         <div className="wrapper">
            <motion.div
               variants={staggerContainer}
               initial="hidden"
               animate={isInView ? "visible" : "hidden"}
            >
               <motion.div variants={fadeUp}>
                  <SectionLabel>TECH_STACK</SectionLabel>
                  <h2 className="section-heading">My Arsenal</h2>
               </motion.div>

               <div className="skills-grid">
                  {Object.entries(skills).filter(([category]) => !['softSkills', 'interests'].includes(category)).map(([category, items], idx) => (
                     <motion.div key={category} className="skill-category" variants={fadeUp}>
                        <h3 className="category-title">{'>'} {category.toUpperCase()}</h3>
                        <div className="tags-container">
                           {items.map((skill, i) => (
                              <Tag key={i}>{skill.name || skill}</Tag>
                           ))}
                        </div>
                     </motion.div>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default Skills;
