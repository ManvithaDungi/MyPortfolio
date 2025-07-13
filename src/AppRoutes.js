// src/AppRoutes.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // Home
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
