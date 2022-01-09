import React from "react";
import byteSlack from '../../assets/logos/byteslack_logo.svg';
import "./Navbar.scss";

const navbarItems = [
  { 
  type: 'link',
  title: 'Services',
  url: '/'
},
  { 
  type: 'link',
  title: 'Enterprise',
  url: '/'
},
  { 
  type: 'link',
  title: 'Company',
  url: '/'
},
  { 
  type: 'link',
  title: 'Portfolio',
  url: '/'
},
  { 
  type: 'link',
  title: 'Blog',
  url: '/'
},
{ 
  type: 'button',
  title: 'Contact Us',
  url: '/'
},]

const Navbar = () => {

  const LiGenerator = ({ type, title, url}) => {
    return (
      <li className="nav-item">
              <a className={`${type === "link" ? "nav-link" : "button navbar_button"}`} aria-current="page" href={url}>
                {title}
              </a>
            </li>
    )
  }

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
            {
              navbarItems.map (item => (
                <LiGenerator key={item.title} type={item.type} title={item.title} url={item.url} />
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
