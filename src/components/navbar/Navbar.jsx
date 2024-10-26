import React from "react";
import "./navbar.css";
import { FaBurger, FaUser } from "react-icons/fa6";
const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="amburger">
          <FaBurger />
        </div>
        <img className="logo" src="/drivelah.webp" alt="" />
        <div className="nav-right">
          <ul className="navbar-list-right">
            <li>Learn More </li>
            <li>List Your Car</li>
            <li>Inbox</li>
          </ul>
        </div>
        <div className="user">
          <FaUser />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
