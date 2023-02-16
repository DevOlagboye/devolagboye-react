import React, { useState, useRef } from "react";
import myProfile from "../../assets/images/profile-pic.JPG";
import { NavLink } from "react-router-dom";
import { BsFillMoonStarsFill, BsFillBrightnessHighFill } from "react-icons/bs";
import "./NavBar.css";

const NavBar = () => {
  let [checkActive, setActive] = useState(true);
  let svgRef = useRef(null);
  const handleActive = () => {
    svgRef.current.classList.add("active");
    console.log(svgRef.current);
    document.body.style.background = "#FFF";
  };
  const handleRemove = () => {
    svgRef.current.classList.remove("active");
    document.body.style.background = "#161615";
  };

  let handleClick = () => {
    if (checkActive === false) {
      handleActive();
      checkActive = true;
    } else {
      handleRemove();
      checkActive = false;
    }
  };

  return (
    <div className="nav-bar-container">
      <div className="nav-details">
        <div className="my-image">
          <img src={myProfile} alt="Dev Olagboye Art" className="profile-pic" />
        </div>
        <div className="nav-list">
          <ul>
            <li>
              <NavLink
                to="/"
                className="nav-links"
                style={({ isActive }) => ({
                  background: isActive ? "#282826" : "transparent",
                  color: isActive ? "#FFF" : "#a1a09a",
                })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="nav-links"
                style={({ isActive }) => ({
                  background: isActive ? "#282826" : "transparent",
                  color: isActive ? "#FFF" : "#a1a09a",
                })}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="nav-links"
                style={({ isActive }) => ({
                  background: isActive ? "#282826" : "transparent",
                  color: isActive ? "#FFF" : "#a1a09a",
                })}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button
            className="nav-list-button"
            ref={svgRef}
            onClick={handleClick}
            class="svg"
          >
            {checkActive ? (
              <BsFillMoonStarsFill className="svg" />
            ) : (
              <BsFillBrightnessHighFill className="svg" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
