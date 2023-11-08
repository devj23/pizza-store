import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="nav-wrapper">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink className="nav-logo" to="/">
              PIZZA
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="#pizza">
              Pizzas
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="#dessert">
              Desserts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
