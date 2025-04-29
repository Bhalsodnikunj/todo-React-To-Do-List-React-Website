import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
      <Link to="/new" className={location.pathname === '/new' ? 'active' : ''}>New Post</Link>
      <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
    </nav>
  );
};

export default Navbar;
