import React from 'react';

const SectionLabel = ({ children, className = '' }) => {
   return (
      <span className={`section-label ${className}`}>
         {children}
      </span>
   );
};

export default SectionLabel;
