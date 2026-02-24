import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

import NotFound from './pages/NotFound';

// Styles
import './styles/globals.css';
import './styles/animations.css';
import './styles/components.css';
import './styles/sections.css';

const App = () => {
   const [loading, setLoading] = React.useState(true);

   React.useEffect(() => {
      // Simulate highly optimized load to flash the custom aesthetics
      const timer = setTimeout(() => setLoading(false), 900);
      return () => clearTimeout(timer);
   }, []);

   if (loading) {
      return (
         <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--color-bg)' }}>
            <div className="noise-overlay"></div>
            <h1 className="glitch" style={{ fontFamily: 'var(--font-display)', fontSize: '5rem', color: 'var(--color-primary)' }}>M.D</h1>
         </div>
      );
   }

   return (
      <HelmetProvider>
         <Router basename={process.env.PUBLIC_URL}>
            <Navbar />
            <main>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="*" element={<NotFound />} />
               </Routes>
            </main>
            <Footer />
         </Router>
      </HelmetProvider>
   );
};

export default App;
