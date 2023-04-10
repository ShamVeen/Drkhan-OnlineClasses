import React, { useState } from 'react';
import logo from '../images/Dr. Khan LOGO.svg';
import burger from '../images/menu.png';
import '../Css/Navbar.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img id="logo" src={logo} alt="logo" />
          {/* <span>Dr.KhanOnlineClasses</span> */}
          <button className="nav-toggle" onClick={handleToggleMenu}>
            <img src={burger} alt="menu-btn" />
          </button>
        </div>
        {/* <ul className={toggleMenu ? "nav-links show-nav" : "nav-links"}> */}
        <Router>
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <Link to="#about">About Us</Link>
            </li>
            <li>
              <Link to="#testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="#faq">FAQ</Link>
            </li>
            <li>
              <Link to="#neet">NEET</Link>
            </li>
            <li>
              <Link to="#callus">Contact</Link>
            </li>
          </ul>
        </Router>
      </div>
    </nav>
  );
};

export default Navbar;
