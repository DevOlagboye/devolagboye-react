import React from "react";
import "./HeroPage.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroPage = () => {
  const { ref: mainText, inView: isTextInView } = useInView();
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
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="heropage-container"
    >
      <div
        className={
          isTextInView ? "main-text animate-text" : "main-text animate-text"
        }
        ref={mainText}
      >
        <motion.h6 variants={item}>Hi there, I am Akingbola Olagboye</motion.h6>
        <motion.p variants={item}>
          A seasoned Frontend Engineer, with a strong sense of design & love for
          its aesthetics, with over 4 years of experience crafting top-notch
          solutions for Web2 and Web3 startups.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default HeroPage;
