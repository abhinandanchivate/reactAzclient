import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <nav className="navbar bg-dark">
        <h1>
          <a href="index.html">
            <i className="fas fa-code"></i> {props.appName}
          </a>
        </h1>
        <ul>
          <li>
            <a href="profiles.html">Developers</a>
          </li>
          <li>
            <NavLink to="/auth/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="auth/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
