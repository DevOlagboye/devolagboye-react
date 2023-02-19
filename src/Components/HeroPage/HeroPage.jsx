import React from "react";
import "./HeroPage.css";
import { delay, motion } from "framer-motion";

const HeroPage = () => {
  return (
    <motion.div animate={{ y: -4 }} className="heropage-container">
      <div className="main-text">
        <h6>Hi there, I am Akingbola Olagboye</h6>
        <p>
          A Frontend Engineer, that has passions & love for design and its
          aesthetics, recently got interested in exploring open source and web3.
        </p>
      </div>
    </motion.div>
  );
};

export default HeroPage;
