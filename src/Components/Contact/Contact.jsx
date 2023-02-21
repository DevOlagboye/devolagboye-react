import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "tween",
        delayChildren: 0.2,
        staggerChildren: 0.2,
        duration: 2,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, y: -10 },
  };
  return (
    <div className="contact-container">
      <div className="contact-details">
        <div className="contact-text">
          <h5>
            Hi there, if you will be looking into connecting with me, we can
            connect on{" "}
            <a
              href="https://github.com/Akingbola1234"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            You could follow me on{" "}
            <a
              href="https://twitter.com/devolagboye"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>{" "}
            I post about Tech and Frontend we can collaborate on{" "}
            <a
              href="https://github.com/Akingbola1234"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            or you shoot a <a href="##">Mail</a>
          </h5>
        </div>
        <div className="contact-text">
          <h5>
            I recently got interested in Open Source as well as Web3 if you will
            be looking into us collaborating on a project feel free to reach me
            on any of the platform above.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
