import React, { useState, useEffect } from 'react';
import '../Css/Navbar.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import logo from '../images/Dr. Khan LOGO.svg';

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
        <ul
          className={Mobile ? 'nav-links-mobile' : 'nav-links'}
          onClick={() => setMobile(false)}
        >
          {/* <ul className={click ? "nav-menu active" : "nav-menu"}> */}
          <li className="nav-item">
            <a href="/" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#expert" onClick={closeMenu}>
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#testimonials" onClick={closeMenu}>
              Testimonials
            </a>
          </li>
          <li className="nav-item">
            <a href="#faq" onClick={closeMenu}>
              FAQ
            </a>
          </li>
          <li className="nav-item">
            <a href="#neet" onClick={closeMenu}>
              NEET
            </a>
          </li>

          <li className="nav-item">
            <a href="#callus" onClick={closeMenu}>
              ContactUs
            </a>
          </li>
        </ul>

        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  );
};
export default Navbar;
