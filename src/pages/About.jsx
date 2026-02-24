import React, { useEffect } from 'react';
import AboutSection from '../components/sections/About';

const About = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <div style={{ paddingTop: '80px' }}>
         <AboutSection />
      </div>
   );
};

export default About;
