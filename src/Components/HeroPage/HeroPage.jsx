import React from "react";
import "./HeroPage.css";
import { motion } from "framer-motion";

const HeroPage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: [0.17, 0.67, 0.83, 0.67],
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, y: -4 },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
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
