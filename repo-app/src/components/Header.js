import React from 'react';
import logo from './logo1.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

function Header() {
  //const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSearch = (username) => {
    if (username) {
      navigate(`/repo/${username}`);
    }
  };


  return (
    <header className="header">
      <nav className="nav">
        <img src={logo} alt="Logo" className="logo" />
        
        <div><SearchBar onSearch={handleSearch} /> {/* Use the new SearchBar component */}</div>
        <div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/repo">RepoInfo</Link></li>
          <li><Link to="/repo">Sign up/Sign in</Link></li>
          <li><Link to="/repo">Payment</Link></li>
        </ul></div>
      </nav>
    </header>
  );
}

export default Header;