import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Online Notice Board</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/user">User Dashboard</Link>
        <Link to="/admin">Admin Panel</Link>
      </nav>
    </header>
  );
}

export default Header;
