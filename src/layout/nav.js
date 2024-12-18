import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from './images/logo.svg';
import { ReactComponent as MeaseringIcon } from './images/measering.svg';
import { ReactComponent as CalculationIcon } from './images/calculation.svg';
import './nav.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <LogoIcon className="logo-icon" />
        </Link>
      </div>

      <nav className="menu">
        <Link to="/services">Services</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About us</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
      <div className="buttons">
        <button className="request-btn">
          <MeaseringIcon className="btn-icon" /> Make request
        </button>
        <button className="calculation-btn">
          <CalculationIcon className="btn-icon" /> Calculation
        </button>
      </div>
    </div>
  );
}

export default Navbar;
