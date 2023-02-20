import React from "react";
import "./HeroPage.css";
import { motion } from "framer-motion";

const HeroPage = () => {
  const container = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      animate: {y: -4},
      transition: {
        staggerChildren: 0.5
      }
    }
  }
  const item = {
    hidden: {opacity: 0},
    show: {opacity: 1}
  }
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate= "show"
      className="heropage-container"
    >
      <div className="main-text">
        <motion.h6 variants={item}>Hi there, I am Akingbola Olagboye</motion.h6>
        <motion.p variants={item}>
          A Frontend Engineer, that has passions & love for design and its
          aesthetics, recently got interested in exploring open source and web3.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default HeroPage;
