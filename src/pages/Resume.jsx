import React, { useEffect } from 'react';
import ResumeSection from '../components/sections/Resume';

const Resume = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <div style={{ paddingTop: '80px' }}>
         <ResumeSection />
      </div>
   );
};

export default Resume;
