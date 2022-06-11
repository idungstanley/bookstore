import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="flex">
        <span className="logo">Bookstore</span>
        <ul>
          <li>
            <Link to="/" className="book-tab">BOOKS</Link>
          </li>
          <li>
            <Link to="/categories" className="category">CATEGORIES</Link>
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;
