import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Images/logo-nav.png";
import "./Navbar.css"

const Navbar = () => {
  const navBarStyles = ({ isActive }) => {
    return {
      borderBottom: isActive ? "2px dotted  red" : "none",
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "red" : "rgb(117, 117, 117)",
    };
  };
 
  return (
    <div>
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

        <div className="container" id="">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  style={navBarStyles}
                  to={"/"}
                  className="nav-link active"
                  aria-current="page"
                >
                   Home 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={navBarStyles}
                  to={"displayMed"}
                  className="nav-link active"
                  aria-current="page"
                >
         Medecine 
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to={"/about"}
                  style={navBarStyles}
                  className="nav-link active"
                  aria-current="page"
                >
                 About 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/contact"}
                  style={navBarStyles}
                  className="nav-link active"
                  aria-current="page"
                >
           Contact 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/account"}
                  style={navBarStyles}
                  className="nav-link active"
                  aria-current="page"
                >
         Account 
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
    </div>
  );
};

export default Navbar;
