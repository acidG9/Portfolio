import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="nav-name-pc"><em>Akshansh Vaishnav</em></h1>
      <h1 className="nav-name-mobile"><em>Akshansh</em></h1>
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}><li>Home</li></a>
        <a href="#about" onClick={() => setMenuOpen(false)}><li>About me</li></a>
        <a href="#projects" onClick={() => setMenuOpen(false)}><li>Projects</li></a>
        <a href="#contact" onClick={() => setMenuOpen(false)}><li>Contact</li></a>
      </ul>
    </nav>
  );
};

export default Navbar;
