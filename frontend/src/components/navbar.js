import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🏡 RealEstatePro</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/listings">Listings</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
