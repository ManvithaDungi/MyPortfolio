import React, { useEffect } from 'react';
import ProjectsSection from '../components/sections/Projects';

const Projects = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <div style={{ paddingTop: '80px' }}>
         <ProjectsSection />
      </div>
   );
};

export default Projects;
