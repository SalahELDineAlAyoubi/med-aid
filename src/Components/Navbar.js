import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Images/logo-nav.png";
const Navbar = () => {
  const navBarStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "red" : "black",
    };
  };
 
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light "
      style={{ backgroundColor: " #e3f2fd", marginBottom: "0px" }}
    >
      <NavLink
        to={"/"}
        style={{ paddingLeft: "50px" }}
        className="navbar-brand fw-bold fs-4"
      >
        <img className="logo" src={logo} />
        MEDAID
      </NavLink>
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                style={navBarStyles}
                to={"/"}
                className="nav-link active"
                aria-current="page"
              >
                <span style={{ fontWeight: "bold" }}>Home</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={"/about"}
                style={navBarStyles}
                className="nav-link active"
                aria-current="page"
              >
                <span style={{ fontWeight: "bold" }}>About</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/contact"}
                style={navBarStyles}
                className="nav-link active"
                aria-current="page"
              >
                <span style={{ fontWeight: "bold" }}>Contact</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/account"}
                style={navBarStyles}
                className="nav-link active"
                aria-current="page"
              >
                <span style={{ fontWeight: "bold" }}>Account</span>
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
