import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <img className="logo" src="/drivelah.webp" alt="" />

        <ul className="navbar-list-right">
          <li>Learn More </li>
          <li>List Your Car</li>
          <li>Inbox</li>
          <li>
            <img src="" alt="" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
