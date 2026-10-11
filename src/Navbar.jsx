import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-logo">EZTechMovie</div>

      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-item">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/movies" className="nav-item">
            Movies
          </NavLink>
        </li>

        <li>
          <NavLink to="/cart" className="nav-item">
            Cart
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className="nav-item">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
