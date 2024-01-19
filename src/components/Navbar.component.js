import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({currentUser}) {
  

  const links = [
    {
      name: "Home",
      path: "/#booking-section",
      key: "booking-section",
    },
    {
      name: "Pricing",
      path: "/#prices-section",
      key: "prices-section",
    },
    {
      name: "About",
      path: "/#aboutus-section",
      key: "aboutus-section",
    },
    {
      name: "Contact",
      path: "/#footer-section",
      key: "footer-section",
    }
  ];

  return (
    <div className="navbar container">
      <Link to="/" className="logo">
        CAR<span>SPEEDYRENTAL</span>
      </Link>

      <div className="nav-links">
        {links.map((link, index) => (
          <Link className="nav-links-item" to={link.path} key={index}>
            {link.name}
          </Link>
        ))}
        {currentUser ? (
            <>
              <div class="dropdown">
                <button class="dropbtn nav-link">{currentUser.username}</button>
                <div class="dropdown-content">
                <a href="#">My Account</a>
                <a href="#">My Reservations</a>
                <a href="#">Log Out</a>
                
                </div>
              </div>
            
            </>
          ) : (
            <>
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </>
          )}
      </div>
    </div>
  );
}
