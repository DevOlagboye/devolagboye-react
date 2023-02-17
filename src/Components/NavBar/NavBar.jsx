import React, { useState, useRef } from "react";
import myProfile from "../../assets/images/profile-pic.JPG";
import { NavLink } from "react-router-dom";
import { BsFillMoonStarsFill, BsFillBrightnessHighFill } from "react-icons/bs";
import "./NavBar.css";

const NavBar = () => {
  let [checkActive, setActive] = useState(false);
  let svgRef = useRef(null);
  const handleActive = () => {
    svgRef.current.classList.add("active");
    console.log(
      (svgRef.current.innerHTML =
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 hover:text-primary transition-colors text-secondary"><path d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25Z" fill="currentColor"></path><path d="M12 6.25C8.82436 6.25 6.25 8.82436 6.25 12C6.25 15.1756 8.82436 17.75 12 17.75C15.1756 17.75 17.75 15.1756 17.75 12C17.75 8.82436 15.1756 6.25 12 6.25Z" fill="currentColor"></path><path d="M5.45928 4.39862C5.16638 4.10573 4.69151 4.10573 4.39862 4.39862C4.10572 4.69152 4.10572 5.16639 4.39862 5.45929L5.10572 6.16639C5.39862 6.45929 5.87349 6.45929 6.16638 6.16639C6.45928 5.8735 6.45928 5.39862 6.16638 5.10573L5.45928 4.39862Z" fill="currentColor"></path><path d="M22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12Z" fill="currentColor"></path><path d="M19.6014 5.45928C19.8943 5.16638 19.8943 4.69151 19.6014 4.39862C19.3085 4.10572 18.8336 4.10572 18.5407 4.39862L17.8336 5.10572C17.5407 5.39862 17.5407 5.87349 17.8336 6.16638C18.1265 6.45928 18.6014 6.45928 18.8943 6.16638L19.6014 5.45928Z" fill="currentColor"></path><path d="M12 20.25C12.4142 20.25 12.75 20.5858 12.75 21V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V21C11.25 20.5858 11.5858 20.25 12 20.25Z" fill="currentColor"></path><path d="M18.8943 17.8336C18.6014 17.5407 18.1266 17.5407 17.8337 17.8336C17.5408 18.1265 17.5408 18.6014 17.8337 18.8943L18.5408 19.6014C18.8337 19.8943 19.3085 19.8943 19.6014 19.6014C19.8943 19.3085 19.8943 18.8336 19.6014 18.5407L18.8943 17.8336Z" fill="currentColor"></path><path d="M3.75 12C3.75 12.4142 3.41421 12.75 3 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3C3.41421 11.25 3.75 11.5858 3.75 12Z" fill="currentColor"></path><path d="M6.16632 18.8943C6.45921 18.6014 6.45921 18.1265 6.16632 17.8336C5.87342 17.5407 5.39855 17.5407 5.10566 17.8336L4.39855 18.5407C4.10566 18.8336 4.10566 19.3085 4.39855 19.6014C4.69144 19.8943 5.16632 19.8943 5.45921 19.6014L6.16632 18.8943Z" fill="currentColor"></path></svg>')
    );
    document.body.style.background = "#FFF";
  };
  const handleRemove = () => {
    svgRef.current.classList.remove("active");
    document.body.style.background = "#161615";
    console.log(svgRef.current.innerHTML);
    svgRef.current.innerHTML =
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 hover:text-primary transition-colors text-primary"><path d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.4176 20.5 20.0476 17.1303 20.4608 12.8207C20.4801 12.6202 20.377 12.4277 20.1995 12.3324C20.0219 12.2372 19.8045 12.2578 19.6481 12.3848C18.7884 13.0824 17.6937 13.5 16.5 13.5C13.7386 13.5 11.5 11.2614 11.5 8.5C11.5 6.8599 12.2892 5.40423 13.5106 4.49167C13.6721 4.37101 13.7453 4.16516 13.6963 3.96961C13.6473 3.77406 13.4857 3.62706 13.2864 3.59678C12.8666 3.53302 12.437 3.5 12 3.5Z" fill="currentColor"></path></svg> ';
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 hover:text-primary transition-colors text-primary"
            >
              <path
                d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.4176 20.5 20.0476 17.1303 20.4608 12.8207C20.4801 12.6202 20.377 12.4277 20.1995 12.3324C20.0219 12.2372 19.8045 12.2578 19.6481 12.3848C18.7884 13.0824 17.6937 13.5 16.5 13.5C13.7386 13.5 11.5 11.2614 11.5 8.5C11.5 6.8599 12.2892 5.40423 13.5106 4.49167C13.6721 4.37101 13.7453 4.16516 13.6963 3.96961C13.6473 3.77406 13.4857 3.62706 13.2864 3.59678C12.8666 3.53302 12.437 3.5 12 3.5Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
