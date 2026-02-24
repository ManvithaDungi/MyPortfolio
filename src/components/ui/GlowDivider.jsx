import React from 'react';
import { motion } from 'framer-motion';

const glowVariants = {
   hidden: { scaleX: 0, opacity: 0 },
   visible: {
      scaleX: 1,
      opacity: 0.5,
      transition: { duration: 0.6, ease: "easeOut" }
   }
};

const GlowDivider = ({ className = '' }) => {
   return (
      <motion.hr
         className={`glow-divider ${className}`}
         variants={glowVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
      />
   );
};

export default GlowDivider;
