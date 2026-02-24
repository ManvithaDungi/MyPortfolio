import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { TypewriterText, SplitText } from '../ui/AnimatedText';
import { fadeUp } from '../../hooks/useScrollReveal';
import CountUp from 'react-countup';

const Hero = () => {
   return (
      <section className="hero-section">
         <div className="watermark watermark-katakana" style={{ bottom: '-5%', right: '-5%', fontSize: '300px' }}>
            マンビサ
         </div>

         <div className="noise-overlay"></div>
         <div className="scan-line-overlay"></div>

         <div className="wrapper hero-content">
            <motion.div
               className="hero-text"
               initial="hidden"
               animate="visible"
               variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
               }}
            >
               <motion.h1 className="hero-name glitch" variants={fadeUp}>
                  MANVITHA DUNGI
               </motion.h1>

               <motion.div className="hero-socials" variants={fadeUp} style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <motion.a whileHover={{ scale: 1.1, filter: 'brightness(1.5)' }} href="https://github.com/ManvithaDungi" target="_blank" rel="noreferrer" aria-label="GitHub">
                     <div className="contact-icon github-icon" style={{ width: '28px', height: '28px', margin: 0, cursor: 'pointer' }}></div>
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.1, filter: 'brightness(1.5)' }} href="https://linkedin.com/in/manvithadungi" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                     <div className="contact-icon linkedin-icon" style={{ width: '28px', height: '28px', margin: 0, cursor: 'pointer' }}></div>
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.1, filter: 'brightness(1.5)' }} href="mailto:manvithadungi@gmail.com" aria-label="Email">
                     <div className="contact-icon email-icon" style={{ width: '28px', height: '28px', margin: 0, cursor: 'pointer' }}></div>
                  </motion.a>
               </motion.div>

               <motion.div className="hero-sub" variants={fadeUp}>
                  <TypewriterText text="> CSE Student · Full Stack Developer · Builder" className="terminal-text" delay={500} />
               </motion.div>

               <motion.p className="hero-desc" variants={fadeUp}>
                  <SplitText text="Crafting scalable web applications and exploring the intersections of software architecture, AI, and design." />
               </motion.p>

               <motion.div className="hero-metrics" variants={fadeUp} style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem', fontFamily: 'var(--font-mono)' }}>
                  <div>
                     <span style={{ color: 'var(--color-primary)', fontSize: '1.5rem', fontWeight: 'bold' }}>
                        <CountUp end={8} duration={2} delay={1.8} />+
                     </span>
                     <span style={{ color: 'var(--color-muted)', marginLeft: '0.5rem' }}>Projects</span>
                  </div>
                  <div>
                     <span style={{ color: 'var(--color-primary)', fontSize: '1.5rem', fontWeight: 'bold' }}>
                        <CountUp end={2} duration={2} delay={2.0} />
                     </span>
                     <span style={{ color: 'var(--color-muted)', marginLeft: '0.5rem' }}>Hackathons</span>
                  </div>
                  <div>
                     <span style={{ color: 'var(--color-primary)', fontSize: '1.5rem', fontWeight: 'bold' }}>
                        <CountUp end={3} duration={2} delay={2.2} />
                     </span>
                     <span style={{ color: 'var(--color-muted)', marginLeft: '0.5rem' }}>Years CSE</span>
                  </div>
               </motion.div>

               <motion.div className="hero-ctas" variants={fadeUp}>
                  <div className="starburst-bg"></div>
                  <Button variant="primary" size="lg" href="/projects">
                     VIEW PROJECTS →
                  </Button>
                  <Button variant="ghost" size="lg" href="/resume">
                     RESUME ↓
                  </Button>
               </motion.div>
            </motion.div>

            <motion.div
               className="scroll-indicator"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1, y: [0, 10, 0] }}
               transition={{ delay: 1.5, duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
               <div className="mouse">
                  <div className="wheel"></div>
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default Hero;
