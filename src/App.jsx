import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false); // Close after clicking a link

  return (
    <>
      {/* Overlay when menu is open */}
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}

      <nav className="navbar">
        <div className="logo">SkyUI</div>

        {/* Desktop Menu */}
        <ul className="nav-links desktop-menu">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        <button className="login-btn desktop-menu">Login</button>

        {/* Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        {/* Mobile Menu */}
        <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
          <button className="login-btn mobile-login" onClick={closeMenu}>Login</button>
        </ul>
      </nav>
    </>
  );
}

// Page Components with content
const Home = () => <div className="page"><h1>Welcome to Home Page</h1><p>This is home content.</p></div>;
const About = () => <div className="page"><h1>About Us</h1><p>We create awesome React UI.</p></div>;
const Services = () => <div className="page"><h1>Services</h1><p>We offer responsive design.</p></div>;
const Contact = () => <div className="page"><h1>Contact Us</h1><p>Let’s work together!</p></div>;

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
