import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link to="/" className="navStyle">
          <li>Home</li>
        </Link>
        <Link to="/about" className="navStyle">
          <li>About</li>
        </Link>
        <Link to="/shop" className="navStyle">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
