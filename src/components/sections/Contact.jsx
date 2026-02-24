import React from 'react';
import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import Card from '../ui/Card';
import useScrollReveal, { staggerContainer, fadeUp } from '../../hooks/useScrollReveal';

const Contact = () => {
   const [ref, isInView] = useScrollReveal();

   return (
      <section className="contact-section" id="contact" ref={ref}>
         <div className="watermark watermark-katakana" style={{ left: '0', bottom: '0', fontSize: '250px' }}>
            コンタクト
         </div>

         <div className="wrapper">
            <motion.div
               variants={staggerContainer}
               initial="hidden"
               animate={isInView ? "visible" : "hidden"}
               className="contact-content align-center"
            >
               <motion.div variants={fadeUp}>
                  <SectionLabel>INITIATE_CONNECTION</SectionLabel>
                  <h2 className="contact-heading">LET'S BUILD SOMETHING.</h2>
                  <p className="contact-subtext terminal-text">
                     {'>'} My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                  </p>
               </motion.div>

               <motion.div className="contact-cards" variants={staggerContainer}>
                  <motion.div variants={fadeUp}>
                     <a href="mailto:manvithadungi@gmail.com" target="_blank" rel="noreferrer" aria-label="Send an email" onClick={(e) => {
                        e.preventDefault();
                        navigator.clipboard.writeText("manvithadungi@gmail.com");
                        alert("Email copied to clipboard!");
                     }}>
                        <Card variant="default" className="contact-card">
                           <div className="contact-icon email-icon"></div>
                           <h3>Email</h3>
                           <p>Copy to clipboard</p>
                        </Card>
                     </a>
                  </motion.div>

                  <motion.div variants={fadeUp}>
                     <a href="https://linkedin.com/in/manvithadungi" target="_blank" rel="noreferrer" aria-label="Visit LinkedIn Profile">
                        <Card variant="default" className="contact-card">
                           <div className="contact-icon linkedin-icon"></div>
                           <h3>LinkedIn</h3>
                           <p>Professional network</p>
                        </Card>
                     </a>
                  </motion.div>

                  <motion.div variants={fadeUp}>
                     <a href="https://github.com/ManvithaDungi" target="_blank" rel="noreferrer" aria-label="Visit GitHub Profile">
                        <Card variant="default" className="contact-card">
                           <div className="contact-icon github-icon"></div>
                           <h3>GitHub</h3>
                           <p>View source code</p>
                        </Card>
                     </a>
                  </motion.div>
               </motion.div>
            </motion.div>
         </div>
      </section>
   );
};

export default Contact;
