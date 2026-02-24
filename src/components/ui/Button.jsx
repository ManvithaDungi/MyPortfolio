import React from 'react';

const Button = ({ variant = 'primary', size = 'md', children, className = '', onClick, href, target }) => {
   const baseClasses = `btn btn-${variant} btn-${size} ${className}`;

   if (href) {
      return (
         <a href={href} className={baseClasses} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
            {children}
         </a>
      );
   }

   return (
      <button className={baseClasses} onClick={onClick}>
         {children}
      </button>
   );
};

export default Button;
