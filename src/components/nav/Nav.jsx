// components/Navbar.js

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../../App.css';


export function NavBar() {
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
}
export function Nav() {
    const [isOpen, setOpen] = useState(false);
    return ( 
        <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
            <NavBar />
            {/* ... */}
        </div>
      </nav>
    );
}
 
 export default Nav;