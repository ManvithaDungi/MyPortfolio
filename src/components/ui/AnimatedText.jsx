import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Simulating ReactBits AnimatedText/Typewriter
export const TypewriterText = ({ text, delay = 0, className = '' }) => {
   const [displayedText, setDisplayedText] = useState('');

   useEffect(() => {
      let timeout;
      if (delay) {
         timeout = setTimeout(() => startTyping(), delay);
      } else {
         startTyping();
      }

      function startTyping() {
         let i = 0;
         const interval = setInterval(() => {
            setDisplayedText(text.substring(0, i + 1));
            i++;
            if (i >= text.length) clearInterval(interval);
         }, 50);
      }
      return () => clearTimeout(timeout);
   }, [text, delay]);

   return <span className={className}>{displayedText}</span>;
};

// SplitText for revealing char by char or word by word
export const SplitText = ({ text, className = '' }) => {
   const words = text.split(" ");

   const container = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
         opacity: 1,
         transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
      }),
   };

   const child = {
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
         },
      },
      hidden: {
         opacity: 0,
         y: 20,
      },
   };

   return (
      <motion.div
         style={{ display: "inline-block" }}
         variants={container}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         className={className}
      >
         {words.map((word, index) => (
            <motion.span
               key={index}
               style={{ display: "inline-block", marginRight: "0.25em" }}
               variants={child}
            >
               {word}
            </motion.span>
         ))}
      </motion.div>
   );
};
