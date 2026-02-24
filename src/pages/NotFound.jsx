import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const NotFound = () => {
   return (
      <div className="not-found-page" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '2rem' }}>
         <div className="noise-overlay"></div>
         <div className="scan-line-overlay"></div>
         <motion.h1
            className="glitch"
            style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', color: 'var(--color-primary)', fontFamily: 'var(--font-display)', margin: 0, lineHeight: 1 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
         >
            404
         </motion.h1>
         <motion.h2
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-cyan)', fontSize: '1.5rem', marginBottom: '2rem' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
         >
            {'>'} ENDPOINT_NOT_FOUND
         </motion.h2>
         <motion.p
            style={{ color: 'var(--color-muted)', maxWidth: '500px', marginBottom: '3rem' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
         >
            The path you are looking for has been moved, deleted, or never existed in the current dimension.
         </motion.p>
         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <Button variant="primary" size="lg" href="/">
               RETURN TO BASE
            </Button>
         </motion.div>
      </div>
   );
};

export default NotFound;
