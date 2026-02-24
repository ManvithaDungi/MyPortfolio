import React, { useEffect } from 'react';
import ContactSection from '../components/sections/Contact';

const Contact = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <div style={{ paddingTop: '80px' }}>
         <ContactSection />
      </div>
   );
};

export default Contact;
