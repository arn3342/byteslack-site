import React from "react";
import byteSlack from '../../../assets/logos/byteslack_logo.svg';
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar_container navbar_container_custom navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={byteSlack} width="220" alt="byteslack_logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav navbar_nav_custom align-items-center ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Expertise
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
              >
                Company
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
              >
                Blog
              </a>
            </li>
              <a className="button navbar_button">Contact Us</a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
