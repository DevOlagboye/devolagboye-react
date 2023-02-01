import React from "react";
import myProfile from "../../assets/images/profile-pic.JPG";
import { NavLink } from "react-router-dom";
import { Dropdown } from "antd";
import "./NavBar.css";

const items = [
  {
    label: <p>Automatic</p>,
    key: "0",
  },
  {
    label: <p>Light</p>,
    key: "1",
  },
  {
    label: <p>Dark</p>,
    key: "2",
  },
];

const NavBar = () => {
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
          <Dropdown
            menu={{ items, selectable: true, defaultSelectedKeys: ["0"] }}
            trigger={["click"]}
          >
            <button
              className="nav-list-button"
              onClick={(e) => e.preventDefault()}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="svg"
              >
                <path
                  d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.4176 20.5 20.0476 17.1303 20.4608 12.8207C20.4801 12.6202 20.377 12.4277 20.1995 12.3324C20.0219 12.2372 19.8045 12.2578 19.6481 12.3848C18.7884 13.0824 17.6937 13.5 16.5 13.5C13.7386 13.5 11.5 11.2614 11.5 8.5C11.5 6.8599 12.2892 5.40423 13.5106 4.49167C13.6721 4.37101 13.7453 4.16516 13.6963 3.96961C13.6473 3.77406 13.4857 3.62706 13.2864 3.59678C12.8666 3.53302 12.437 3.5 12 3.5Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
