import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillAndroid } from 'react-icons/ai';

import './Nav.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="flex">
        <span className="logo">Bookstore</span>
        <ul>
          <li>
            <Link to="/" className="book-tab">
              BOOKS
            </Link>
          </li>
          <li>
            <Link to="/categories" className="category">
              CATEGORIES
            </Link>
          </li>
        </ul>
      </div>
      <AiFillAndroid className="oval" />
    </nav>
  );
}

export default Navbar;
