import React from "react";
import "./Error404.css";
import { FaArrowLeft } from "react-icons/fa";

const Error404 = () => {
  return (
    <div className="error-container">
      <div className="error-text">
        <h3>404</h3>
        <h4>Page not found!</h4>
        <a href="/" className="error-link">
          <FaArrowLeft className="error-icon" /> Go to homepage
        </a>
      </div>
    </div>
  );
};

export default Error404;
