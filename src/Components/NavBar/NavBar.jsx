import React from "react";
import myProfile from "../../assets/images/profile-pic.JPG";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <div className="nav-details">
        <div className="my-image">
          <img src={myProfile} alt="Dev Olagboye Art" />
        </div>
        <div className="nav-list">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
