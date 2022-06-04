import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <header>
     <h1>Bookstore</h1>
     <Link to="/">Books</Link>
     <Link to="/categories">Categories</Link>
    </header>
    </>
  )
}

export default Navbar