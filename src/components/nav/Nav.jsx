
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../App.css';


/* export function NavBar() {
  const [isOpen, setOpen] = useState(false);
    return (
      <>
        <div className="navbar-brand is-primary">
        <a
          role="button"
          className={`navbar-burger burger ${isOpen && "is-active"}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={() => setOpen(!isOpen)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className={`navbar-menu ${isOpen && "is-active"}`}>
        <div className="navbar-start">
        <NavLink className="navbar-item" activeClassName="is-active" to="/">
              Home
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/profile"
            >
              Profile
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/experience"
            >
              Experience
            </NavLink>
        </div>
        <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
              <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/contact"
            >
              Contact
            </NavLink>
              </div>
            </div>
          </div>
      </div>
      </>
 
    );
} */
export function Nav() {
    const [isOpen, setOpen] = useState(false);
    return ( 
        <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">        
        <div className="navbar-brand is-primary">
        <a
          role="button"
          className={`navbar-burger burger ${isOpen && "is-active"}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={() => setOpen(!isOpen)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className={`navbar-menu ${isOpen && "is-active"}`}>
        <div className="navbar-start">
        <Link 
          className="navbar-item" 
          activeClassName="is-active" 
          to="/">
              Home
            </Link>

            <Link
              className="navbar-item"
              activeClassName="is-active"
              to="/profile"
            >
              Profile
            </Link>

            <Link
              className="navbar-item"
              activeClassName="is-active"
              to="/experience"
            >
              Experience
            </Link>
        </div>
   
      </div>
        </div>
      </nav>
    );
}
 
 export default Nav;