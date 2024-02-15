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
        <motion.h6 variants={item}>Hi there, I am Olagboye Seyi </motion.h6>
        <motion.p variants={item}>
          A seasoned Frontend Engineer with over four years of experience
          specializing in crafting minimalist and user-friendly interfaces.
          <br /> <br />
          Throughout my career, I have demonstrated proficiency in developing
          stress-free user experiences that prioritize functionality and
          elegance for both Web2 and Web3 Innovations.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default HeroPage;
