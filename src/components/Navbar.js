import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="nav">
      <Link className="nav-item">
        <a href="/" className="nav-link">
          Home
        </a>
      </Link>
      <Link className="nav-item">
        <a href="/" className="nav-link">
          Discover
        </a>
      </Link>
      <Link className="nav-item">
        <a href="/" className="nav-link">
          Secoundhand
        </a>
      </Link>
    </ul>
  );
}

export default Navbar;
