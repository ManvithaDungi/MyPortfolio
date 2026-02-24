import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/components.css'; // or handled globally

const Card = ({ variant = 'default', children, className = '', ...props }) => {
   // variants: project, skill, default
   const baseStyles = {
      backgroundColor: variant === 'project' ? 'var(--color-bg-2)' : 'var(--color-bg-3)',
      border: 'var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: '1.5rem',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
   };

   const hoverStyles = {
      borderColor: 'rgba(123, 97, 255, 0.6)',
      boxShadow: 'var(--glow-primary)',
   };

   return (
      <motion.div
         className={`card card-${variant} ${className}`}
         style={baseStyles}
         whileHover={hoverStyles}
         {...props}
      >
         {children}
      </motion.div>
   );
};

export default Card;
