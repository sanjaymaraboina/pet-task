import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <img
          src="https://freeimghost.net/images/2025/05/09/ZAANVAR_FINAL-LOGO-2.png"
          alt="ZaanVah Logo"
          className="logo"
        />

        <ul className="nav-links-desktop">
          <li><a href="/">Home</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Book a Vet</a></li>
          <li><a href="/">Shopping</a></li>
          <li><a href="/">About us</a></li>
        </ul>

        <button className="login-btn desktop-login">LOG IN</button>

        <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar top"></span>
          <span className="bar middle"></span>
          <span className="bar bottom"></span>
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? 'show' : ''}`}>
        <ul className="nav-links-mobile">
          <li><a href="/">Home</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Book a Vet</a></li>
          <li><a href="/">Shopping</a></li>
          <li><a href="/">About us</a></li>
        </ul>
        <button className="login-btn">LOG IN</button>
      </div>
    </nav>
  );
};

export default Navbar;
