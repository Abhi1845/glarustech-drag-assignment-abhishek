import React from "react";
import logoImg from "./assets/logo.png";

function Navbar() {
  return (
    <div className="nav-container">
      <img src={logoImg} height="" width="" className="logo-img" />
      <ul className="nav-ul">
        <li className="home">Home</li>
        <li>Website</li>
        <li>Application</li>
        <li>Outsource</li>
        <li>Jobs</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
