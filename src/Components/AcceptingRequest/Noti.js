import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import "./Noti.css";
const Noti = ({ notifications }) => {
  const [activeLink, setActiveLink] = useState(notifications);

  const handleClickmyrequests = (e) => {
    setActiveLink("myrequests");
  };
  const handleClickalert = (e) => {
    setActiveLink("alert");
  };
  return (
    <div>
      <nav className="navi">
        <Link to="myrequests" onClick={handleClickmyrequests}>
          <div
            className={activeLink === "myrequests" ? "nested active" : "nested"}
          > 
            Requests
          </div>
        </Link>
        <Link to="alert" onClick={handleClickalert}>
          <div className={activeLink === "alert" ? "nested active" : "nested"}>
            Notifications
          </div>
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Noti;
