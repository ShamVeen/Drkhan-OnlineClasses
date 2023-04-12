// import React, { useState } from 'react';
// import logo from '../images/Dr. Khan LOGO.svg';
// import burger from '../images/menu.png';
// import '../Css/Navbar.css';
// import { HashRouter, Link } from 'react-router-dom';
// // import { HashLink } from 'react-router-hash-link';
// // import { Link } from 'react-scroll';

// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);

//   const handleToggleMenu = () => {
//     setToggleMenu(!toggleMenu);
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-center">
//         <div className="brand-title">
//           <img id="logo" src={logo} alt="logo" />
//           {/* <span>Dr.KhanOnlineClasses</span> */}
//           <button className="nav-toggle" onClick={handleToggleMenu}>
//             <img src={burger} alt="menu-btn" />
//           </button>
//         </div>
//         <HashRouter>
//           {/* <ul className={toggleMenu ? "nav-links show-nav" : "nav-links"}> */}
//           <ul className="nav-links">
//             <li>
//               <Link to="#">Home</Link>
//             </li>
//             <li>
//               <Link to="#about">About Us</Link>
//             </li>
//             <li>
//               <Link to="testimonials">Testimonials</Link>
//             </li>
//             <li>
//               <Link to="/#faq">FAQ</Link>
//             </li>
//             <li>
//               <Link to="/#neet">NEET</Link>
//             </li>
//             <li>
//               <Link to="/#callus">Contact</Link>
//             </li>
//           </ul>
//         </HashRouter>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../images/Dr. Khan LOGO.svg';

// import logo from '../images/menu.png';
import '../Css/Navbar.css';

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>About Us</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials' onClick={closeMenu}>Testimonials</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#faq' onClick={closeMenu}>FAQ</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#neet' onClick={closeMenu}>NEET</a>
                    </li>
                    
                    <li className='nav-item'>
                        <a href='#callus' onClick={closeMenu}>ContactUs</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar