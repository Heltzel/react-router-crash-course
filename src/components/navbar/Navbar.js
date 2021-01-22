import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './navbar.css'

// this file is imported in router
const Navbar = () => {
  const { isLoggedin, setIsLoggedin } = useContext(AuthContext)

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
        <button onClick={() => setIsLoggedin(!isLoggedin)}>
          {isLoggedin ? 'Log Out' : 'Log In'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
