import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../../styles.css";
import "./nav.css";
import logo from "../../../src/assets/images/Binary_logo_teal.png";

import React from 'react';

// your JSX code here

// console.log(logo);

const Nav = () => {
  const path = window.location.pathname;
  console.log(path);
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={logo} alt="logo" width={80} />
      </Link>
      <ul className="nav-list">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/profile">Profile</CustomLink>
        <CustomLink to="/work">Work</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  // const path = window.location.pathname;
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} className="nav-link">
        {children}
      </Link>
    </li>
  );
}

export default Nav;
