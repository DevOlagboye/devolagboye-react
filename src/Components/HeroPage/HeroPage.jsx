import React from "react";
import "./HeroPage.css";
import { delay, motion } from "framer-motion";

const HeroPage = () => {
  return (
    <div className="heropage-container">
      <div className="main-text">
        <motion.h6 animate={{ y: -4 }}>
          Hi there, I am Akingbola Olagboye
        </motion.h6>
        <motion.p
          animate={{ y: -4 }}
          transition={{ type: "spring", delay: 0.1 }}
        >
          A Frontend Engineer, that has passions & love for design and its
          aesthetics, recently got interested in exploring open source and web3.
        </motion.p>
      </div>
    </div>
  );
};

export default HeroPage;
