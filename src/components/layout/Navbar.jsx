import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
   { path: '/', label: 'Home' },
   { path: '/about', label: 'About' },
   { path: '/projects', label: 'Projects' },
   { path: '/resume', label: 'Resume' },
   { path: '/contact', label: 'Contact' }
];

const navVariants = {
   hidden: { opacity: 0, y: -20 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <motion.nav
         className="navbar"
         variants={navVariants}
         initial="hidden"
         animate="visible"
      >
         <div className="navbar-container">
            {/* LOGO */}
            <NavLink to="/" className="logo">
               MD
            </NavLink>

            {/* DESKTOP LINKS */}
            <div className="desktop-links">
               {links.map((link) => (
                  <NavLink
                     key={link.path}
                     to={link.path}
                     className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  >
                     {({ isActive }) => (
                        <>
                           {link.label}
                           {isActive && <span className="cursor-blink">_</span>}
                           <span className="underline"></span>
                        </>
                     )}
                  </NavLink>
               ))}
            </div>

            {/* MOBILE TOGGLE */}
            <button
               className={`hamburger ${isOpen ? 'open' : ''}`}
               onClick={() => setIsOpen(!isOpen)}
               aria-label="Toggle menu"
            >
               <span className="bar"></span>
               <span className="bar"></span>
               <span className="bar"></span>
            </button>
         </div>

         {/* MOBILE MENU */}
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  className="mobile-menu"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
               >
                  <div className="mobile-links">
                     {links.map((link) => (
                        <NavLink
                           key={link.path}
                           to={link.path}
                           className="mobile-nav-link"
                           onClick={() => setIsOpen(false)}
                        >
                           {link.label}
                        </NavLink>
                     ))}
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </motion.nav>
   );
};

export default Navbar;
