import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar color-white">
      <div className="navbar__icon">
        <h2>Happy Launcher</h2>
      </div>
      <div className="navbar__menu">
        <ul>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
