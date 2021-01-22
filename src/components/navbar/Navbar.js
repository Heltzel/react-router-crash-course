import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

// this file is imported in router
const Navbar = () => {
  return (
    <nav>
      <Link className="logo" to="/">
        Brand-Logo
      </Link>
      <div className="nav-links">
        <NavLink activeClassName="selectedPage" className="link" to="/about">
          About
        </NavLink>
        <NavLink activeClassName="selectedPage" className="link" to="/contact">
          Contact
        </NavLink>
        <NavLink activeClassName="selectedPage" className="link" to="/blog">
          Blog
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
