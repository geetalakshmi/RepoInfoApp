import React, { useState } from 'react';
import logo from './logo1.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (username) {
      navigate(`/repo/${username}`);
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <img src={logo} alt="Logo" className="logo" />
        <form onSubmit={handleSearch} className="search-bar">
         <input 
            type="text" 
            placeholder="Enter username..." 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
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