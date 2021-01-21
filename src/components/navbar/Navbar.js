import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

// this file is imported in router
const Navbar = () => {
  return (
    <nav>
      <Link className="logo" to="/">
        Brand-Logo
      </Link>
      <div className="nav-links">
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
        <Link className="link" to="/blog">
          Blog
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
