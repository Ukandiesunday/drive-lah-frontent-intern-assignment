import React from "react";
import "./navbar.css";
import { IoMdMenu } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="amburger">
          <IoMdMenu className="burger-icon" />
        </div>
        <img className="logo" src="/drivelah.webp" alt="" />
        <div className="nav-right">
          <ul className="navbar-list-right">
            <li>Learn More </li>
            <li>List Your Car</li>
            <li>Inbox</li>
            <li>
              {" "}
              <img className="user-login" src="/userhaedset.jpg" alt="" />
            </li>
          </ul>
        </div>
        <div className="user">
          <FaRegUserCircle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
