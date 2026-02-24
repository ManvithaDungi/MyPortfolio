import React from 'react';

const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer-content">
            <p className="footer-text">
               MANVITHA DUNGI — Built with React & <span style={{ color: "var(--color-red)" }}>♥</span>
            </p>
            <div className="social-icons">
               <a href="https://github.com/ManvithaDungi" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub Profile">
                  GitHub
               </a>
               <a href="https://linkedin.com/in/manvithadungi" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn Profile">
                  LinkedIn
               </a>
               <a href="mailto:manvitha3626@gmail.com" className="social-icon" aria-label="Send Email">
                  Email
               </a>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
