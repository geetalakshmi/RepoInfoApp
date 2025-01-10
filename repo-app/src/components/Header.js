import React from 'react';
import logo from './logo1.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <img src={logo} alt="Logo" className="logo" />
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/repo">RepoInfo</Link></li>
          <li><Link to="/repo">Sign up/Sign in</Link></li>
          <li><Link to="/repo">Payment</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;